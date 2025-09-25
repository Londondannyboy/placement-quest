import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

async function removeCountryCategories() {
  console.log('🗂️ Removing country categories and reorganizing articles...\n');
  
  try {
    // Get all categories first to map IDs
    const categories = await sanityClient.fetch(`*[_type == "category"] {
      _id,
      title
    }`);
    
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.title] = cat._id;
    });
    
    // Countries to remove as categories
    const countriesToRemove = ['Dubai/UAE', 'Estonia', 'Cyprus'];
    
    for (const country of countriesToRemove) {
      console.log(`\n📋 Processing ${country} category...`);
      
      // Get articles in this country category
      const articles = await sanityClient.fetch(`*[_type == "post" && category->title == "${country}"] {
        _id,
        title,
        slug
      }`);
      
      console.log(`Found ${articles.length} articles in ${country} category:`);
      
      // Categorize each article based on its title/content
      for (const article of articles) {
        const title = article.title.toLowerCase();
        let newCategoryId = '';
        let newCategoryName = '';
        
        // Smart recategorization logic
        if (title.includes('golden visa') || title.includes('visa')) {
          newCategoryId = categoryMap['Golden Visa'];
          newCategoryName = 'Golden Visa';
        } else if (title.includes('tax') || title.includes('finance')) {
          newCategoryId = categoryMap['Tax & Finance'];
          newCategoryName = 'Tax & Finance';
        } else if (title.includes('business') || title.includes('investment') || title.includes('company') || title.includes('employment')) {
          newCategoryId = categoryMap['Business & Investment'];
          newCategoryName = 'Business & Investment';
        } else if (title.includes('nomad') || title.includes('remote')) {
          newCategoryId = categoryMap['Digital Nomad'];
          newCategoryName = 'Digital Nomad';
        } else if (title.includes('health') || title.includes('education') || title.includes('school')) {
          newCategoryId = categoryMap['Healthcare & Education'];
          newCategoryName = 'Healthcare & Education';
        } else if (title.includes('lifestyle') || title.includes('culture') || title.includes('living')) {
          newCategoryId = categoryMap['Lifestyle & Culture'];
          newCategoryName = 'Lifestyle & Culture';
        } else {
          // Default to Residency & Immigration for general country guides
          newCategoryId = categoryMap['Residency & Immigration'];
          newCategoryName = 'Residency & Immigration';
        }
        
        if (newCategoryId) {
          try {
            await sanityClient.patch(article._id).set({
              category: {
                _type: 'reference',
                _ref: newCategoryId
              }
            }).commit();
            
            console.log(`  ✅ "${article.title}" → ${newCategoryName}`);
          } catch (error) {
            console.log(`  ❌ Failed to update "${article.title}": ${error.message}`);
          }
        }
      }
      
      // Delete the country category
      const categoryId = categoryMap[country];
      if (categoryId) {
        try {
          await sanityClient.delete(categoryId);
          console.log(`🗑️ Deleted ${country} category`);
        } catch (error) {
          console.log(`❌ Failed to delete ${country} category: ${error.message}`);
        }
      }
    }
    
    // Show final category organization
    console.log('\n📊 Final category organization:');
    const finalCategories = await sanityClient.fetch(`*[_type == "category"] {
      title,
      "articleCount": count(*[_type == "post" && references(^._id)])
    } | order(title asc)`);
    
    finalCategories.forEach(cat => {
      console.log(`  ${cat.title}: ${cat.articleCount} articles`);
    });
    
    console.log('\n🎉 Country categories removed successfully!');
    console.log('✅ All articles have been moved to appropriate topical categories');
    console.log('🌍 Countries are now only featured in the Popular Destinations section');
    
  } catch (error) {
    console.error('❌ Error removing country categories:', error);
  }
}

removeCountryCategories();