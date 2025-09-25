import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

async function findAndFixNullImageRefs() {
  console.log('🔍 Finding posts with null image references...\n');
  
  // Find posts with broken image references
  const posts = await client.fetch(`
    *[_type == "post"] {
      _id,
      title,
      slug,
      mainImage
    }
  `);
  
  let fixedCount = 0;
  
  for (const post of posts) {
    let needsFix = false;
    
    // Check main image
    if (post.mainImage && (!post.mainImage.asset || !post.mainImage.asset._ref)) {
      console.log(`❌ Found broken main image in: ${post.title}`);
      needsFix = true;
      
      try {
        // Remove the broken image reference
        await client.patch(post._id).unset(['mainImage']).commit();
        console.log(`   ✅ Removed broken main image reference`);
        fixedCount++;
      } catch (error) {
        console.log(`   ❌ Failed to fix: ${error.message}`);
      }
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} posts with broken image references`);
  
  if (fixedCount === 0) {
    console.log('✅ No broken image references found!');
  }
}

findAndFixNullImageRefs().catch(console.error);