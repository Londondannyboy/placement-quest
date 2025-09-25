import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

async function createDefaultAuthor() {
  console.log('🧑‍💼 Creating default Relocation Team author...');
  
  // Check if author already exists
  const existingAuthor = await client.fetch(
    '*[_type == "author" && slug.current == "relocation-team"][0]'
  );
  
  if (existingAuthor) {
    console.log('✅ Relocation Team author already exists');
    return existingAuthor._id;
  }
  
  // Create new author
  const newAuthor = await client.create({
    _type: 'author',
    name: 'Relocation Team',
    slug: {
      _type: 'slug',
      current: 'relocation-team',
    },
    bio: 'Our team of relocation experts provides comprehensive guidance on international moving, visa applications, tax optimization, and global lifestyle planning. With years of combined experience in immigration law, tax consulting, and expatriate services, we help individuals and families navigate the complexities of international relocation.',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-default-author' // We'll use a placeholder
      },
      alt: 'Relocation Team - International relocation experts'
    }
  });
  
  console.log('✅ Created Relocation Team author');
  return newAuthor._id;
}

async function fixInvalidTags() {
  console.log('🏷️ Finding and fixing invalid tags...');
  
  // Get all posts with tags
  const posts = await client.fetch(`
    *[_type == "post" && defined(tags)] {
      _id,
      title,
      tags
    }
  `);
  
  let fixedCount = 0;
  
  for (const post of posts) {
    let needsUpdate = false;
    const validTags = [];
    
    if (post.tags && Array.isArray(post.tags)) {
      for (const tag of post.tags) {
        // Check if tag is a valid reference object
        if (tag && typeof tag === 'object' && tag._type === 'reference' && tag._ref) {
          validTags.push(tag);
        } else {
          console.log(`❌ Removing invalid tag from "${post.title}": ${JSON.stringify(tag)}`);
          needsUpdate = true;
        }
      }
    }
    
    if (needsUpdate) {
      await client.patch(post._id).set({ tags: validTags }).commit();
      console.log(`✅ Fixed tags for: ${post.title}`);
      fixedCount++;
    }
  }
  
  console.log(`🎉 Fixed ${fixedCount} posts with invalid tags`);
}

async function assignDefaultAuthor() {
  console.log('👤 Assigning default author to posts without authors...');
  
  const authorId = await createDefaultAuthor();
  
  // Find posts without authors
  const postsWithoutAuthors = await client.fetch(`
    *[_type == "post" && !defined(author)] {
      _id,
      title
    }
  `);
  
  let assignedCount = 0;
  
  for (const post of postsWithoutAuthors) {
    await client.patch(post._id).set({
      author: {
        _type: 'reference',
        _ref: authorId
      }
    }).commit();
    
    console.log(`✅ Assigned author to: ${post.title}`);
    assignedCount++;
  }
  
  console.log(`🎉 Assigned author to ${assignedCount} posts`);
}

async function main() {
  try {
    console.log('🚀 Starting cleanup and author assignment...\n');
    
    await fixInvalidTags();
    console.log('');
    await assignDefaultAuthor();
    
    console.log('\n✅ All cleanup tasks completed successfully!');
    console.log('📋 Summary:');
    console.log('- Fixed invalid tag references in posts');
    console.log('- Created default "Relocation Team" author');
    console.log('- Assigned default author to posts without authors');
    console.log('\n🎯 Your documents should now publish without errors!');
    
  } catch (error) {
    console.error('❌ Error during cleanup:', error);
  }
}

main();