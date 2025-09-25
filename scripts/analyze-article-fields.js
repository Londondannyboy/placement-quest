import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

async function analyzeArticleFields() {
  console.log('🔍 Analyzing article fields...\\n');
  
  try {
    // Get all articles with their current field status
    const articles = await sanityClient.fetch(`*[_type == "post"] {
      _id,
      title,
      slug,
      seoTitle,
      metaDescription,
      focusKeyword,
      tags,
      publishedAt,
      _updatedAt,
      _createdAt,
      excerpt,
      category->{title}
    }`);

    console.log(`Found ${articles.length} articles\\n`);

    // Analyze field completion
    let stats = {
      total: articles.length,
      missingSeoTitle: 0,
      missingMetaDescription: 0,
      missingFocusKeyword: 0,
      missingTags: 0,
      missingPublishedAt: 0,
      missingExcerpt: 0
    };

    console.log('📊 FIELD ANALYSIS:\\n');

    articles.forEach((article, index) => {
      if (index < 5) {
        console.log(`--- ${article.title} ---`);
        console.log(`SEO Title: ${article.seoTitle ? '✅ ' + article.seoTitle.substring(0, 50) + '...' : '❌ MISSING'}`);
        console.log(`Meta Description: ${article.metaDescription ? '✅ ' + article.metaDescription.substring(0, 50) + '...' : '❌ MISSING'}`);
        console.log(`Focus Keyword: ${article.focusKeyword ? '✅ ' + article.focusKeyword : '❌ MISSING'}`);
        console.log(`Tags: ${article.tags?.length ? '✅ ' + article.tags.length + ' tags' : '❌ MISSING'}`);
        console.log(`Published: ${article.publishedAt ? '✅ ' + article.publishedAt.split('T')[0] : '❌ MISSING'}`);
        console.log(`Category: ${article.category?.title || 'None'}`);
        console.log('');
      }

      // Count missing fields
      if (!article.seoTitle) stats.missingSeoTitle++;
      if (!article.metaDescription) stats.missingMetaDescription++;
      if (!article.focusKeyword) stats.missingFocusKeyword++;
      if (!article.tags?.length) stats.missingTags++;
      if (!article.publishedAt) stats.missingPublishedAt++;
      if (!article.excerpt) stats.missingExcerpt++;
    });

    console.log('📈 SUMMARY STATISTICS:');
    console.log(`Total Articles: ${stats.total}`);
    console.log(`Missing SEO Title: ${stats.missingSeoTitle}/${stats.total} (${Math.round(stats.missingSeoTitle/stats.total*100)}%)`);
    console.log(`Missing Meta Description: ${stats.missingMetaDescription}/${stats.total} (${Math.round(stats.missingMetaDescription/stats.total*100)}%)`);
    console.log(`Missing Focus Keyword: ${stats.missingFocusKeyword}/${stats.total} (${Math.round(stats.missingFocusKeyword/stats.total*100)}%)`);
    console.log(`Missing Tags: ${stats.missingTags}/${stats.total} (${Math.round(stats.missingTags/stats.total*100)}%)`);
    console.log(`Missing Published Date: ${stats.missingPublishedAt}/${stats.total} (${Math.round(stats.missingPublishedAt/stats.total*100)}%)`);
    console.log(`Missing Excerpt: ${stats.missingExcerpt}/${stats.total} (${Math.round(stats.missingExcerpt/stats.total*100)}%)`);

  } catch (error) {
    console.error('❌ Error analyzing articles:', error);
    
    if (error.message.includes('Insufficient permissions')) {
      console.log('\\n💡 Make sure SANITY_API_WRITE_TOKEN is set with write permissions');
    }
  }
}

analyzeArticleFields();