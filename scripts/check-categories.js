import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
});

async function checkCategories() {
  console.log('🔍 Checking category slugs...\n');
  
  try {
    const categories = await sanityClient.fetch(`*[_type == "category"] {
      _id,
      title,
      slug,
      description
    }`);

    console.log(`Found ${categories.length} categories:\n`);
    
    categories.forEach((category, index) => {
      console.log(`${index + 1}. "${category.title}"`);
      console.log(`   Slug: ${category.slug?.current || '❌ MISSING'}`);
      console.log(`   Description: ${category.description || 'No description'}`);
      console.log(`   URL: /categories/${category.slug?.current || 'BROKEN'}`);
      console.log('---');
    });

    // Check for problematic categories
    const problemCategories = categories.filter(cat => !cat.slug?.current);
    if (problemCategories.length > 0) {
      console.log('\n🚨 CATEGORIES WITH MISSING SLUGS:');
      problemCategories.forEach(cat => {
        console.log(`- "${cat.title}" (ID: ${cat._id})`);
      });
      console.log('\nThese categories will show "/#" links on the website!');
    } else {
      console.log('\n✅ All categories have valid slugs');
    }

  } catch (error) {
    console.error('Error checking categories:', error);
  }
}

checkCategories();