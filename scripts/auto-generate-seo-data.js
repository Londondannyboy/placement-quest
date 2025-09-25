import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

// SEO title generation rules
function generateSEOTitle(title, category) {
  const cleanTitle = title.replace(/[^\w\s-]/g, '').trim();
  
  // Category-specific optimizations
  const categoryModifiers = {
    'Cyprus': 'Cyprus Guide 2024',
    'Portugal': 'Portugal Guide 2024', 
    'Malta': 'Malta Guide 2024',
    'Dubai/UAE': 'Dubai UAE Guide 2024',
    'Singapore': 'Singapore Guide 2024',
    'Estonia': 'Estonia Guide 2024',
    'Saint Kitts': 'Caribbean Guide 2024',
    'Golden Visa': 'Golden Visa Guide 2024',
    'Business & Investment': 'Business Investment 2024',
    'Tax & Finance': 'Tax Finance Guide 2024',
    'Digital Nomad': 'Digital Nomad 2024',
    'Healthcare & Education': 'Expat Guide 2024',
    'Lifestyle & Culture': 'Expat Lifestyle 2024',
    'Residency & Immigration': 'Residency Guide 2024'
  };
  
  const modifier = categoryModifiers[category] || 'Relocation Guide 2024';
  
  // Keep under 60 characters for SEO
  if (`${cleanTitle} | ${modifier}`.length <= 60) {
    return `${cleanTitle} | ${modifier}`;
  } else if (`${cleanTitle} - ${modifier}`.length <= 60) {
    return `${cleanTitle} - ${modifier}`;
  } else {
    return `${cleanTitle.substring(0, 50)}... | ${modifier}`.substring(0, 60);
  }
}

// Focus keyword generation
function generateFocusKeyword(title, category) {
  const titleLower = title.toLowerCase();
  
  // Extract primary concept from title
  if (titleLower.includes('citizenship')) return 'citizenship';
  if (titleLower.includes('golden visa')) return 'golden visa';
  if (titleLower.includes('tax')) return 'tax optimization';
  if (titleLower.includes('cost of living')) return 'cost of living';
  if (titleLower.includes('business')) return 'business investment';
  if (titleLower.includes('residency')) return 'residency program';
  if (titleLower.includes('nomad')) return 'digital nomad';
  if (titleLower.includes('education')) return 'education system';
  if (titleLower.includes('healthcare')) return 'healthcare system';
  if (titleLower.includes('property')) return 'property investment';
  
  // Category-based fallbacks
  const categoryKeywords = {
    'Cyprus': 'cyprus residency',
    'Portugal': 'portugal golden visa',
    'Malta': 'malta citizenship',
    'Dubai/UAE': 'dubai residency',
    'Singapore': 'singapore immigration',
    'Estonia': 'estonia digital nomad',
    'Saint Kitts': 'caribbean citizenship',
    'Golden Visa': 'golden visa program',
    'Business & Investment': 'investment migration',
    'Tax & Finance': 'tax planning',
    'Digital Nomad': 'digital nomad visa',
    'Healthcare & Education': 'expat services',
    'Lifestyle & Culture': 'expat lifestyle',
    'Residency & Immigration': 'immigration program'
  };
  
  return categoryKeywords[category] || 'international relocation';
}

// Meta description generation
function generateMetaDescription(title, focusKeyword, category) {
  const templates = [
    `Complete guide to ${focusKeyword}. Discover requirements, costs, benefits and step-by-step process for ${title.toLowerCase()}.`,
    `Everything you need to know about ${focusKeyword}. Expert insights on ${title.toLowerCase()} with practical tips.`,
    `Ultimate ${focusKeyword} guide covering ${title.toLowerCase()}. Requirements, benefits, costs and expert advice included.`,
    `Comprehensive ${focusKeyword} information for ${title.toLowerCase()}. Step-by-step guidance and expert insights.`,
    `Expert guide to ${focusKeyword}: ${title.toLowerCase()}. Complete requirements, benefits and practical advice.`
  ];
  
  // Choose template based on title hash for consistency
  const templateIndex = title.length % templates.length;
  let description = templates[templateIndex];
  
  // Ensure it's under 160 characters
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  return description;
}

// Generate tags based on title and category
function generateTags(title, category) {
  const titleLower = title.toLowerCase();
  const tags = new Set();
  
  // Add category as primary tag
  tags.add(category);
  
  // Location-based tags
  if (titleLower.includes('cyprus')) tags.add('Cyprus');
  if (titleLower.includes('portugal')) tags.add('Portugal');
  if (titleLower.includes('malta')) tags.add('Malta');
  if (titleLower.includes('dubai') || titleLower.includes('uae')) tags.add('Dubai');
  if (titleLower.includes('singapore')) tags.add('Singapore');
  if (titleLower.includes('estonia')) tags.add('Estonia');
  if (titleLower.includes('saint kitts') || titleLower.includes('caribbean')) tags.add('Caribbean');
  
  // Topic-based tags
  if (titleLower.includes('citizenship')) tags.add('Citizenship');
  if (titleLower.includes('visa')) tags.add('Visa');
  if (titleLower.includes('golden visa')) tags.add('Golden Visa');
  if (titleLower.includes('tax')) tags.add('Tax Planning');
  if (titleLower.includes('business')) tags.add('Business');
  if (titleLower.includes('investment')) tags.add('Investment');
  if (titleLower.includes('residency')) tags.add('Residency');
  if (titleLower.includes('nomad')) tags.add('Digital Nomad');
  if (titleLower.includes('education')) tags.add('Education');
  if (titleLower.includes('healthcare')) tags.add('Healthcare');
  if (titleLower.includes('property')) tags.add('Property');
  if (titleLower.includes('cost')) tags.add('Cost of Living');
  if (titleLower.includes('lifestyle')) tags.add('Lifestyle');
  if (titleLower.includes('culture')) tags.add('Culture');
  
  return Array.from(tags).slice(0, 6); // Limit to 6 tags
}

// Generate excerpt from title
function generateExcerpt(title, category) {
  return `Comprehensive guide to ${title.toLowerCase()}. Discover everything you need to know about this important ${category.toLowerCase()} topic with expert insights and practical advice.`;
}

async function autoGenerateSEOData() {
  console.log('🤖 Auto-generating SEO data for all articles...\\n');
  
  try {
    // Get all articles that need SEO data
    const articles = await sanityClient.fetch(`*[_type == "post"] {
      _id,
      title,
      slug,
      seoTitle,
      metaDescription,
      focusKeyword,
      tags,
      publishedAt,
      excerpt,
      category->{title}
    }`);

    console.log(`Found ${articles.length} articles to process\\n`);

    let updateCount = 0;
    
    for (const article of articles) {
      const categoryName = article.category?.title || 'General';
      
      // Generate missing fields
      const updates = {};
      
      if (!article.seoTitle) {
        updates.seoTitle = generateSEOTitle(article.title, categoryName);
      }
      
      if (!article.focusKeyword) {
        updates.focusKeyword = generateFocusKeyword(article.title, categoryName);
      }
      
      if (!article.metaDescription) {
        updates.metaDescription = generateMetaDescription(
          article.title, 
          updates.focusKeyword || article.focusKeyword, 
          categoryName
        );
      }
      
      if (!article.tags?.length) {
        updates.tags = generateTags(article.title, categoryName);
      }
      
      if (!article.excerpt) {
        updates.excerpt = generateExcerpt(article.title, categoryName);
      }
      
      if (!article.publishedAt) {
        // Set published date to 1-30 days ago randomly
        const daysAgo = Math.floor(Math.random() * 30) + 1;
        const publishedDate = new Date();
        publishedDate.setDate(publishedDate.getDate() - daysAgo);
        updates.publishedAt = publishedDate.toISOString();
      }
      
      // Only update if there are changes needed
      if (Object.keys(updates).length > 0) {
        try {
          await sanityClient
            .patch(article._id)
            .set(updates)
            .commit();
            
          console.log(`✅ "${article.title}"`);
          if (updates.seoTitle) console.log(`   SEO Title: ${updates.seoTitle}`);
          if (updates.focusKeyword) console.log(`   Focus Keyword: ${updates.focusKeyword}`);
          if (updates.metaDescription) console.log(`   Meta: ${updates.metaDescription.substring(0, 60)}...`);
          if (updates.tags) console.log(`   Tags: ${updates.tags.join(', ')}`);
          if (updates.publishedAt) console.log(`   Published: ${updates.publishedAt.split('T')[0]}`);
          console.log('');
          
          updateCount++;
        } catch (error) {
          console.log(`❌ Failed to update "${article.title}": ${error.message}`);
        }
      } else {
        console.log(`⏭️  "${article.title}" - already has all SEO data`);
      }
    }
    
    console.log(`\\n🎉 Successfully updated ${updateCount}/${articles.length} articles!`);
    console.log('\\n🔄 Run check script to verify:');
    console.log('npx sanity exec scripts/analyze-article-fields.js --with-user-token');

  } catch (error) {
    console.error('❌ Error generating SEO data:', error);
  }
}

autoGenerateSEOData();