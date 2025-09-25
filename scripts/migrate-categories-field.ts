import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

async function migrateCategories() {
  console.log('🔄 Starting migration of categories field...\n');
  
  // Find all posts with the old 'categories' field
  const postsWithCategories = await client.fetch(`
    *[_type == "post" && defined(categories)] {
      _id,
      title,
      category,
      categories
    }
  `);
  
  console.log(`📄 Found ${postsWithCategories.length} posts with legacy 'categories' field\n`);
  
  if (postsWithCategories.length === 0) {
    console.log('✅ No posts need migration!');
    return;
  }
  
  let migratedCount = 0;
  let skippedCount = 0;
  
  for (const post of postsWithCategories) {
    console.log(`\n📝 Processing: ${post.title}`);
    
    // Check what we have
    const hasCategory = post.category && post.category._ref;
    const hasCategories = post.categories && Array.isArray(post.categories) && post.categories.length > 0;
    
    console.log(`   Current category: ${hasCategory ? '✅ Set' : '❌ Missing'}`);
    console.log(`   Legacy categories: ${hasCategories ? `✅ ${post.categories.length} items` : '❌ None'}`);
    
    try {
      let updates = {};
      let needsUpdate = false;
      
      // If no category but has categories, migrate the first one
      if (!hasCategory && hasCategories) {
        const firstCategory = post.categories[0];
        if (firstCategory && firstCategory._ref) {
          updates.category = {
            _type: 'reference',
            _ref: firstCategory._ref
          };
          needsUpdate = true;
          console.log(`   🔄 Migrating first category from categories array`);
        }
      }
      
      // Always remove the categories field
      if (hasCategories) {
        updates.categories = undefined; // This removes the field
        needsUpdate = true;
        console.log(`   🗑️  Removing legacy 'categories' field`);
      }
      
      if (needsUpdate) {
        // Use unset for removing fields and set for updating fields
        let patch = client.patch(post._id);
        
        if (updates.category) {
          patch = patch.set({ category: updates.category });
        }
        
        if (updates.categories === undefined) {
          patch = patch.unset(['categories']);
        }
        
        await patch.commit();
        
        console.log(`   ✅ Successfully migrated`);
        migratedCount++;
      } else {
        console.log(`   ⏭️  No migration needed`);
        skippedCount++;
      }
      
    } catch (error) {
      console.error(`   ❌ Error migrating "${post.title}":`, error.message);
    }
  }
  
  console.log(`\n🎉 Migration completed!`);
  console.log(`📊 Summary:`);
  console.log(`   - ${migratedCount} posts migrated successfully`);
  console.log(`   - ${skippedCount} posts skipped (no changes needed)`);
  console.log(`   - ${postsWithCategories.length} total posts processed`);
  
  // Verify migration
  console.log(`\n🔍 Verifying migration...`);
  const remainingCategories = await client.fetch(`
    count(*[_type == "post" && defined(categories)])
  `);
  
  if (remainingCategories === 0) {
    console.log(`✅ Perfect! No posts have the legacy 'categories' field anymore`);
    console.log(`🧹 All documents should now work without schema errors`);
  } else {
    console.log(`⚠️  Warning: ${remainingCategories} posts still have the 'categories' field`);
  }
}

async function checkCategoryConsistency() {
  console.log(`\n🔍 Checking category consistency...`);
  
  // Check posts without categories
  const postsWithoutCategory = await client.fetch(`
    *[_type == "post" && !defined(category)] {
      _id,
      title
    }
  `);
  
  console.log(`📊 Posts without category: ${postsWithoutCategory.length}`);
  
  if (postsWithoutCategory.length > 0) {
    console.log(`⚠️  Posts that still need categories:`);
    postsWithoutCategory.slice(0, 5).forEach(post => {
      console.log(`   - ${post.title}`);
    });
    if (postsWithoutCategory.length > 5) {
      console.log(`   ... and ${postsWithoutCategory.length - 5} more`);
    }
  }
  
  // Check total posts with proper category
  const postsWithCategory = await client.fetch(`
    count(*[_type == "post" && defined(category)])
  `);
  
  console.log(`✅ Posts with proper category: ${postsWithCategory}`);
}

async function main() {
  try {
    await migrateCategories();
    await checkCategoryConsistency();
    
    console.log(`\n🚀 All done! Your schema should now be clean.`);
    console.log(`💡 Next steps:`);
    console.log(`   1. Clear browser cache for Sanity Studio`);
    console.log(`   2. Hard refresh the studio (Cmd+Shift+R)`);
    console.log(`   3. The "Unknown field" errors should be gone!`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

main();