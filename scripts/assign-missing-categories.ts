import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

// Get available categories
async function getCategories() {
  const categories = await client.fetch(`
    *[_type == "category"] {
      _id,
      title,
      slug
    }
  `);
  return categories;
}

// Smart category assignment based on article title and content
function assignSmartCategory(article, categories) {
  const title = article.title.toLowerCase();
  const excerpt = article.excerpt?.toLowerCase() || '';
  const content = `${title} ${excerpt}`;
  
  // Category assignment logic
  const categoryMappings = [
    { keywords: ['golden visa', 'investor visa', 'investment visa'], categoryTitle: 'Golden Visa' },
    { keywords: ['digital nomad', 'remote work', 'nomad visa'], categoryTitle: 'Digital Nomad' },
    { keywords: ['business', 'entrepreneur', 'startup', 'company'], categoryTitle: 'Business & Investment' },
    { keywords: ['tax', 'taxation', 'finance'], categoryTitle: 'Tax & Finance' },
    { keywords: ['healthcare', 'health', 'medical'], categoryTitle: 'Healthcare & Education' },
    { keywords: ['education', 'school', 'university'], categoryTitle: 'Healthcare & Education' },
    { keywords: ['lifestyle', 'living', 'expat', 'culture'], categoryTitle: 'Lifestyle & Culture' },
    { keywords: ['residency', 'citizenship', 'permanent'], categoryTitle: 'Residency & Immigration' },
    { keywords: ['malta'], categoryTitle: 'Malta' },
    { keywords: ['cyprus'], categoryTitle: 'Cyprus' },
    { keywords: ['portugal'], categoryTitle: 'Portugal' },
    { keywords: ['dubai', 'uae'], categoryTitle: 'Dubai/UAE' },
    { keywords: ['singapore'], categoryTitle: 'Singapore' },
    { keywords: ['estonia'], categoryTitle: 'Estonia' },
    { keywords: ['saint kitts', 'caribbean', 'dominica'], categoryTitle: 'Caribbean' },
  ];
  
  // Find best matching category
  for (const mapping of categoryMappings) {
    const hasKeyword = mapping.keywords.some(keyword => content.includes(keyword));
    if (hasKeyword) {
      const category = categories.find(c => c.title === mapping.categoryTitle);
      if (category) {
        return category._id;
      }
    }
  }
  
  // Default fallback to first category (usually General)
  return categories[0]?._id;
}

async function assignMissingCategories() {
  console.log('🏷️ Assigning categories to posts without them...\n');
  
  const categories = await getCategories();
  console.log(`📋 Available categories: ${categories.map(c => c.title).join(', ')}\n`);
  
  // Get posts without categories
  const postsWithoutCategories = await client.fetch(`
    *[_type == "post" && !defined(category)] {
      _id,
      title,
      excerpt
    }
  `);
  
  console.log(`📄 Found ${postsWithoutCategories.length} posts without categories\n`);
  
  if (postsWithoutCategories.length === 0) {
    console.log('✅ All posts already have categories!');
    return;
  }
  
  let assignedCount = 0;
  
  for (const post of postsWithoutCategories) {
    console.log(`📝 Processing: ${post.title}`);
    
    const categoryId = assignSmartCategory(post, categories);
    const categoryName = categories.find(c => c._id === categoryId)?.title;
    
    try {
      await client.patch(post._id).set({
        category: {
          _type: 'reference',
          _ref: categoryId
        }
      }).commit();
      
      console.log(`   ✅ Assigned category: ${categoryName}`);
      assignedCount++;
      
    } catch (error) {
      console.error(`   ❌ Failed to assign category: ${error.message}`);
    }
  }
  
  console.log(`\n🎉 Category assignment completed!`);
  console.log(`📊 Summary: ${assignedCount} posts got categories assigned`);
  
  // Final verification
  const remainingUncategorized = await client.fetch(`
    count(*[_type == "post" && !defined(category)])
  `);
  
  if (remainingUncategorized === 0) {
    console.log(`✅ Perfect! All posts now have categories`);
  } else {
    console.log(`⚠️  ${remainingUncategorized} posts still need categories`);
  }
}

assignMissingCategories().catch(console.error);