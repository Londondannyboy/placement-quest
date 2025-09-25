import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

// Get available tags from database
async function getAvailableTags() {
  const tags = await client.fetch(`
    *[_type == "tag"] {
      _id,
      title,
      slug
    }
  `);
  return tags;
}

// Generate alt text based on image context and article content
function generateAltText(article, imageContext = 'main') {
  const title = article.title || '';
  const category = article.category?.title || '';
  
  // Generate contextual alt text based on article type
  if (category.toLowerCase().includes('golden visa') || title.toLowerCase().includes('golden visa')) {
    return imageContext === 'main' 
      ? `Golden visa application process and documentation for ${extractCountryFromTitle(title)}`
      : `Visual guide to golden visa requirements and benefits`;
  }
  
  if (category.toLowerCase().includes('business') || title.toLowerCase().includes('business')) {
    return imageContext === 'main'
      ? `Business setup and entrepreneurship opportunities in ${extractCountryFromTitle(title)}`
      : `Business investment and company formation illustration`;
  }
  
  if (category.toLowerCase().includes('digital nomad') || title.toLowerCase().includes('digital nomad')) {
    return imageContext === 'main'
      ? `Digital nomad lifestyle and remote work setup in ${extractCountryFromTitle(title)}`
      : `Digital nomad workspace and lifestyle illustration`;
  }
  
  if (category.toLowerCase().includes('tax') || title.toLowerCase().includes('tax')) {
    return imageContext === 'main'
      ? `Tax planning and optimization strategies for ${extractCountryFromTitle(title)} residents`
      : `Tax documentation and financial planning illustration`;
  }
  
  if (category.toLowerCase().includes('education') || title.toLowerCase().includes('education')) {
    return imageContext === 'main'
      ? `Education system and international schools in ${extractCountryFromTitle(title)}`
      : `Educational facilities and learning environment`;
  }
  
  if (category.toLowerCase().includes('healthcare') || title.toLowerCase().includes('healthcare')) {
    return imageContext === 'main'
      ? `Healthcare system and medical facilities in ${extractCountryFromTitle(title)}`
      : `Medical care and health insurance illustration`;
  }
  
  if (category.toLowerCase().includes('lifestyle') || title.toLowerCase().includes('lifestyle')) {
    return imageContext === 'main'
      ? `Expatriate lifestyle and cultural experiences in ${extractCountryFromTitle(title)}`
      : `Local culture and lifestyle illustration`;
  }
  
  // Generic fallback based on country and article type
  const country = extractCountryFromTitle(title);
  return imageContext === 'main'
    ? `${title} - comprehensive guide showing key aspects of relocation to ${country}`
    : `Supporting illustration for ${title.toLowerCase()} article`;
}

// Extract country name from article title
function extractCountryFromTitle(title) {
  const countries = [
    'Cyprus', 'Malta', 'Portugal', 'Dubai', 'UAE', 'Singapore', 
    'Estonia', 'Saint Kitts', 'Dominica', 'Caribbean', 'Spain',
    'Greece', 'Italy', 'Netherlands', 'Germany', 'France'
  ];
  
  for (const country of countries) {
    if (title.toLowerCase().includes(country.toLowerCase())) {
      return country;
    }
  }
  
  return 'international destinations';
}

// Auto-assign relevant tags based on article content
function autoAssignTags(article, availableTags) {
  const title = article.title.toLowerCase();
  const category = article.category?.title?.toLowerCase() || '';
  const excerpt = article.excerpt?.toLowerCase() || '';
  
  const content = `${title} ${category} ${excerpt}`;
  const assignedTags = [];
  
  // Tag assignment logic based on content analysis
  const tagMappings = [
    // Visa Types
    { keywords: ['golden visa', 'golden-visa'], tagTitles: ['Golden Visa'] },
    { keywords: ['digital nomad', 'remote work', 'nomad'], tagTitles: ['Digital Nomad Visa', 'Remote Work'] },
    { keywords: ['investment visa', 'investor visa'], tagTitles: ['Investment Visa', 'Investor Visa'] },
    { keywords: ['retirement visa', 'retirement'], tagTitles: ['Retirement Visa'] },
    { keywords: ['student visa', 'education visa'], tagTitles: ['Student Visa'] },
    { keywords: ['work visa', 'employment'], tagTitles: ['Work Visa'] },
    { keywords: ['entrepreneur', 'startup'], tagTitles: ['Entrepreneur Visa', 'Startup Ecosystem'] },
    
    // Investment Types
    { keywords: ['real estate', 'property'], tagTitles: ['Real Estate Investment', 'Property Market'] },
    { keywords: ['government bonds', 'bonds'], tagTitles: ['Government Bonds'] },
    { keywords: ['business investment', 'invest'], tagTitles: ['Business Investment'] },
    { keywords: ['donation'], tagTitles: ['Donation Option'] },
    
    // Tax & Finance
    { keywords: ['tax', 'taxation'], tagTitles: ['Tax Optimization', 'Tax Residency'] },
    { keywords: ['non-dom', 'non dom'], tagTitles: ['Non-Dom Status'] },
    { keywords: ['banking', 'bank'], tagTitles: ['Banking'] },
    { keywords: ['wealth management'], tagTitles: ['Wealth Management'] },
    { keywords: ['double taxation'], tagTitles: ['Double Taxation'] },
    { keywords: ['offshore'], tagTitles: ['Offshore Banking'] },
    
    // Lifestyle
    { keywords: ['cost of living', 'cost'], tagTitles: ['Cost of Living'] },
    { keywords: ['quality of life', 'lifestyle'], tagTitles: ['Quality of Life'] },
    { keywords: ['climate', 'weather'], tagTitles: ['Climate'] },
    { keywords: ['culture', 'cultural'], tagTitles: ['Culture'] },
    { keywords: ['language'], tagTitles: ['Language'] },
    { keywords: ['expat', 'expatriate'], tagTitles: ['Expat Community'] },
    
    // Education & Healthcare
    { keywords: ['healthcare', 'health', 'medical'], tagTitles: ['Healthcare System', 'Health Insurance'] },
    { keywords: ['education', 'school'], tagTitles: ['Education System'] },
    { keywords: ['international school'], tagTitles: ['International Schools'] },
    { keywords: ['university'], tagTitles: ['University'] },
    
    // Legal & Documentation
    { keywords: ['legal', 'law'], tagTitles: ['Legal Requirements'] },
    { keywords: ['documentation', 'documents'], tagTitles: ['Documentation'] },
    { keywords: ['apostille'], tagTitles: ['Apostille'] },
    { keywords: ['due diligence'], tagTitles: ['Due Diligence'] },
    { keywords: ['processing time', 'timeline'], tagTitles: ['Processing Time'] },
    { keywords: ['application', 'apply'], tagTitles: ['Application Process'] },
    { keywords: ['requirements', 'requirement'], tagTitles: ['Requirements'] },
    { keywords: ['eligibility', 'eligible'], tagTitles: ['Eligibility'] },
    
    // Business
    { keywords: ['business setup', 'company'], tagTitles: ['Business Setup', 'Company Formation'] },
    { keywords: ['fintech'], tagTitles: ['Fintech'] },
    { keywords: ['tech hub', 'technology'], tagTitles: ['Tech Hub'] },
    { keywords: ['innovation'], tagTitles: ['Innovation'] },
    { keywords: ['cryptocurrency', 'crypto'], tagTitles: ['Cryptocurrency'] },
    
    // Regions
    { keywords: ['european union', 'eu '], tagTitles: ['European Union', 'EU Passport'] },
    { keywords: ['schengen'], tagTitles: ['Schengen Area'] },
    { keywords: ['mediterranean'], tagTitles: ['Mediterranean'] },
    { keywords: ['caribbean'], tagTitles: ['Caribbean'] },
    { keywords: ['middle east'], tagTitles: ['Middle East'] },
    { keywords: ['asia pacific', 'singapore'], tagTitles: ['Asia Pacific'] },
    
    // Family
    { keywords: ['family', 'children'], tagTitles: ['Family Benefits', 'Child Education'] },
    { keywords: ['spouse'], tagTitles: ['Spouse Benefits'] },
    { keywords: ['pet'], tagTitles: ['Pet Relocation'] },
  ];
  
  // Find matching tags
  for (const mapping of tagMappings) {
    const hasKeyword = mapping.keywords.some(keyword => 
      content.includes(keyword)
    );
    
    if (hasKeyword) {
      for (const tagTitle of mapping.tagTitles) {
        const tag = availableTags.find(t => t.title === tagTitle);
        if (tag && !assignedTags.find(at => at._ref === tag._id)) {
          assignedTags.push({
            _type: 'reference',
            _ref: tag._id,
            _key: Math.random().toString(36).substr(2, 9)
          });
        }
      }
    }
  }
  
  // Limit to 6 tags as recommended in schema
  return assignedTags.slice(0, 6);
}

async function processArticles() {
  console.log('🚀 Starting auto-generation of alt text and tags...\n');
  
  // Get available tags
  const availableTags = await getAvailableTags();
  console.log(`📋 Found ${availableTags.length} available tags\n`);
  
  // Get all articles
  const articles = await client.fetch(`
    *[_type == "post"] {
      _id,
      title,
      excerpt,
      category->{title},
      mainImage,
      body,
      tags
    }
  `);
  
  console.log(`📄 Found ${articles.length} articles to process\n`);
  
  let altTextUpdated = 0;
  let tagsUpdated = 0;
  
  for (const article of articles) {
    console.log(`\n📝 Processing: ${article.title}`);
    
    const updates = {};
    let hasUpdates = false;
    
    // Generate alt text for main image if missing
    if (article.mainImage && !article.mainImage.alt) {
      const altText = generateAltText(article, 'main');
      updates['mainImage.alt'] = altText;
      hasUpdates = true;
      altTextUpdated++;
      console.log(`  🖼️  Generated main image alt text: "${altText}"`);
    }
    
    // Process body images for alt text
    if (article.body && Array.isArray(article.body)) {
      const bodyUpdates = [];
      let bodyChanged = false;
      
      for (let i = 0; i < article.body.length; i++) {
        const block = article.body[i];
        if (block._type === 'image' && !block.alt) {
          const altText = generateAltText(article, 'inline');
          bodyUpdates.push({
            ...block,
            alt: altText
          });
          bodyChanged = true;
          console.log(`  🖼️  Generated inline image alt text: "${altText}"`);
        } else {
          bodyUpdates.push(block);
        }
      }
      
      if (bodyChanged) {
        updates['body'] = bodyUpdates;
        hasUpdates = true;
      }
    }
    
    // Auto-assign tags if none exist or less than 3
    const currentTags = article.tags || [];
    if (currentTags.length < 3) {
      const suggestedTags = autoAssignTags(article, availableTags);
      if (suggestedTags.length > 0) {
        // Merge with existing tags
        const existingTagRefs = currentTags.map(tag => tag._ref);
        const newTags = suggestedTags.filter(tag => !existingTagRefs.includes(tag._ref));
        const mergedTags = [...currentTags, ...newTags].slice(0, 6);
        
        updates['tags'] = mergedTags;
        hasUpdates = true;
        tagsUpdated++;
        console.log(`  🏷️  Added ${newTags.length} tags: ${newTags.map(t => availableTags.find(at => at._id === t._ref)?.title).join(', ')}`);
      }
    }
    
    // Apply updates
    if (hasUpdates) {
      try {
        await client.patch(article._id).set(updates).commit();
        console.log(`  ✅ Updated successfully`);
      } catch (error) {
        console.log(`  ❌ Error updating: ${error.message}`);
      }
    } else {
      console.log(`  ⏭️  No updates needed`);
    }
  }
  
  console.log(`\n🎉 Auto-generation completed!`);
  console.log(`📊 Summary:`);
  console.log(`   - ${altTextUpdated} articles got alt text`);
  console.log(`   - ${tagsUpdated} articles got auto-assigned tags`);
  console.log(`   - ${availableTags.length} tags available for assignment`);
  console.log(`\n✨ Your images now have accessibility-compliant alt text!`);
  console.log(`🏷️ Articles are properly tagged for better discoverability!`);
}

processArticles().catch(console.error);