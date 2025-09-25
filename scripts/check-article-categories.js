import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
});

async function checkArticleCategories() {
  console.log('📊 Checking article categorization...\n');
  
  try {
    // Get articles with their categories
    const articles = await sanityClient.fetch(`*[_type == "post"] {
      _id,
      title,
      slug,
      category->{
        _id,
        title,
        slug
      }
    }`);

    console.log(`Found ${articles.length} total articles\n`);

    // Group articles by category
    const categoryGroups = {};
    let uncategorizedCount = 0;

    articles.forEach(article => {
      if (article.category) {
        const categoryTitle = article.category.title;
        if (!categoryGroups[categoryTitle]) {
          categoryGroups[categoryTitle] = [];
        }
        categoryGroups[categoryTitle].push(article);
      } else {
        uncategorizedCount++;
      }
    });

    console.log('📋 ARTICLES BY CATEGORY:\n');
    
    Object.keys(categoryGroups).sort().forEach(categoryTitle => {
      const articles = categoryGroups[categoryTitle];
      console.log(`📁 ${categoryTitle} (${articles.length} articles)`);
      const categorySlug = articles[0].category.slug?.current || 'NO-SLUG';
      console.log(`   URL: /categories/${categorySlug}`);
      
      if (articles.length <= 10) {
        articles.forEach(article => {
          console.log(`   • ${article.title}`);
        });
      } else {
        console.log(`   • ${articles.slice(0, 5).map(a => a.title).join(', ')}...`);
        console.log(`   • (and ${articles.length - 5} more)`);
      }
      console.log('');
    });

    if (uncategorizedCount > 0) {
      console.log(`⚠️  ${uncategorizedCount} articles have NO CATEGORY assigned\n`);
    }

    // Check which categories have no articles
    const allCategories = await sanityClient.fetch(`*[_type == "category"] {
      title,
      slug
    }`);

    const emptyCats = allCategories.filter(cat => !categoryGroups[cat.title]);
    if (emptyCats.length > 0) {
      console.log('🚨 EMPTY CATEGORIES (no articles assigned):');
      emptyCats.forEach(cat => {
        console.log(`   • ${cat.title} → /categories/${cat.slug?.current || 'NO-SLUG'}`);
      });
      console.log('');
    }

    // Summary
    console.log('📊 SUMMARY:');
    console.log(`   • ${articles.length} total articles`);
    console.log(`   • ${Object.keys(categoryGroups).length} categories with articles`);
    console.log(`   • ${emptyCats.length} empty categories`);
    console.log(`   • ${uncategorizedCount} uncategorized articles`);

  } catch (error) {
    console.error('Error checking articles:', error);
  }
}

checkArticleCategories();