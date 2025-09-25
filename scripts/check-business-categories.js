import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

async function checkBusinessCategories() {
  console.log('🔍 Checking business category articles for country-specific content...\n');
  
  try {
    const businessArticles = await sanityClient.fetch(`*[_type == "post" && category->title == "Business & Investment"] {
      _id,
      title,
      slug,
      category->{title}
    }`);
    
    console.log(`Business & Investment articles (${businessArticles.length} total):`);
    
    const countryCategories = await sanityClient.fetch(`*[_type == "category"] {
      _id,
      title
    }`);
    
    const categoryMap = {};
    countryCategories.forEach(cat => {
      categoryMap[cat.title] = cat._id;
    });
    
    const articlesToMove = [];
    
    businessArticles.forEach(article => {
      const title = article.title.toLowerCase();
      let suggestedCategory = '';
      let categoryId = '';
      
      if (title.includes('singapore')) {
        suggestedCategory = 'Singapore';
        categoryId = categoryMap['Singapore'];
      } else if (title.includes('dubai')) {
        suggestedCategory = 'Dubai/UAE'; 
        categoryId = categoryMap['Dubai/UAE'];
      } else if (title.includes('cyprus')) {
        suggestedCategory = 'Cyprus';
        categoryId = categoryMap['Cyprus'];
      } else if (title.includes('portugal')) {
        suggestedCategory = 'Portugal';
        categoryId = categoryMap['Portugal'];
      } else if (title.includes('malta')) {
        suggestedCategory = 'Malta';
        categoryId = categoryMap['Malta'];
      } else if (title.includes('estonia')) {
        suggestedCategory = 'Estonia';
        categoryId = categoryMap['Estonia'];
      } else if (title.includes('caribbean') || title.includes('saint kitts')) {
        suggestedCategory = 'Saint Kitts';
        categoryId = categoryMap['Saint Kitts'];
      }
      
      if (suggestedCategory) {
        console.log(`❌ "${article.title}" → Should move to ${suggestedCategory}`);
        articlesToMove.push({
          id: article._id,
          title: article.title,
          newCategory: suggestedCategory,
          categoryId: categoryId
        });
      } else {
        console.log(`✅ "${article.title}" → Properly categorized as Business`);
      }
    });

    if (articlesToMove.length > 0) {
      console.log(`\n🔄 Moving ${articlesToMove.length} articles to correct country categories...`);
      
      for (const article of articlesToMove) {
        if (article.categoryId) {
          try {
            await sanityClient.patch(article.id).set({
              category: {
                _type: 'reference',
                _ref: article.categoryId
              }
            }).commit();
            
            console.log(`✅ Moved "${article.title}" to ${article.newCategory}`);
          } catch (error) {
            console.log(`❌ Failed to move "${article.title}": ${error.message}`);
          }
        }
      }
    } else {
      console.log('\n✅ All business articles are properly categorized!');
    }

  } catch (error) {
    console.error('❌ Error checking business categories:', error);
  }
}

checkBusinessCategories();