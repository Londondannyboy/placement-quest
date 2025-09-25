import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN
});

// Category mapping (title → category ID)
const CATEGORY_MAP = {};

async function autoCategorizeArticles() {
  console.log('🤖 Auto-categorizing articles...\n');
  
  try {
    // First, get all categories with their IDs
    const categories = await sanityClient.fetch(`*[_type == "category"] {
      _id,
      title,
      slug
    }`);
    
    categories.forEach(cat => {
      CATEGORY_MAP[cat.title] = cat._id;
    });
    
    console.log(`Found ${categories.length} categories:`, Object.keys(CATEGORY_MAP));
    console.log('');

    // Get all uncategorized articles
    const articles = await sanityClient.fetch(`*[_type == "post" && !defined(category)] {
      _id,
      title,
      slug
    }`);

    console.log(`Found ${articles.length} uncategorized articles\n`);

    let updateCount = 0;
    
    for (const article of articles) {
      const title = article.title.toLowerCase();
      let categoryId = null;
      let categoryName = '';
      
      // Smart categorization logic - focus on topics, not countries
      if (title.includes('golden visa') || (title.includes('visa') && !title.includes('nomad'))) {
        categoryId = CATEGORY_MAP['Golden Visa'];
        categoryName = 'Golden Visa';
      } else if (title.includes('business') || title.includes('investment') || title.includes('company')) {
        categoryId = CATEGORY_MAP['Business & Investment'];
        categoryName = 'Business & Investment';
      } else if (title.includes('tax') || title.includes('finance')) {
        categoryId = CATEGORY_MAP['Tax & Finance'];
        categoryName = 'Tax & Finance';
      } else if (title.includes('nomad') || title.includes('remote')) {
        categoryId = CATEGORY_MAP['Digital Nomad'];
        categoryName = 'Digital Nomad';
      } else if (title.includes('health') || title.includes('education') || title.includes('school')) {
        categoryId = CATEGORY_MAP['Healthcare & Education'];
        categoryName = 'Healthcare & Education';
      } else if (title.includes('lifestyle') || title.includes('culture') || title.includes('living')) {
        categoryId = CATEGORY_MAP['Lifestyle & Culture'];
        categoryName = 'Lifestyle & Culture';
      } else {
        // Default fallback
        categoryId = CATEGORY_MAP['Residency & Immigration'];
        categoryName = 'Residency & Immigration';
      }
      
      if (categoryId) {
        try {
          await sanityClient
            .patch(article._id)
            .set({
              category: {
                _type: 'reference',
                _ref: categoryId
              }
            })
            .commit();
            
          console.log(`✅ "${article.title}" → ${categoryName}`);
          updateCount++;
        } catch (error) {
          console.log(`❌ Failed to update "${article.title}": ${error.message}`);
        }
      }
    }
    
    console.log(`\n🎉 Successfully categorized ${updateCount}/${articles.length} articles!`);
    console.log('\n🔄 Run check script to verify:');
    console.log('node scripts/check-article-categories.js');

  } catch (error) {
    console.error('❌ Error auto-categorizing articles:', error);
    
    if (error.message.includes('Insufficient permissions')) {
      console.log('\n💡 Make sure SANITY_API_WRITE_TOKEN is set with write permissions');
    }
  }
}

autoCategorizeArticles();