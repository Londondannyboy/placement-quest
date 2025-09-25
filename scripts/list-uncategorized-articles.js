import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
});

async function listUncategorizedArticles() {
  console.log('📝 Listing all uncategorized articles...\n');
  
  try {
    const articles = await sanityClient.fetch(`*[_type == "post"] | order(title asc) {
      _id,
      title,
      slug,
      excerpt,
      category
    }`);

    console.log(`Found ${articles.length} articles that need categorization:\n`);

    articles.forEach((article, index) => {
      console.log(`${index + 1}. "${article.title}"`);
      console.log(`   ID: ${article._id}`);
      console.log(`   URL: /articles/${article.slug?.current || 'no-slug'}`);
      
      // Suggest category based on title/content
      const title = article.title.toLowerCase();
      let suggestedCategory = '';
      
      if (title.includes('cyprus')) suggestedCategory = 'Cyprus';
      else if (title.includes('portugal')) suggestedCategory = 'Portugal';
      else if (title.includes('malta')) suggestedCategory = 'Malta';
      else if (title.includes('dubai') || title.includes('uae')) suggestedCategory = 'Dubai/UAE';
      else if (title.includes('singapore')) suggestedCategory = 'Singapore';
      else if (title.includes('estonia')) suggestedCategory = 'Estonia';
      else if (title.includes('saint kitts') || title.includes('caribbean')) suggestedCategory = 'Saint Kitts';
      else if (title.includes('golden visa') || title.includes('residency') || title.includes('visa')) suggestedCategory = 'Golden Visa';
      else if (title.includes('business') || title.includes('investment') || title.includes('company')) suggestedCategory = 'Business & Investment';
      else if (title.includes('tax') || title.includes('finance')) suggestedCategory = 'Tax & Finance';
      else if (title.includes('nomad') || title.includes('remote')) suggestedCategory = 'Digital Nomad';
      else if (title.includes('health') || title.includes('education')) suggestedCategory = 'Healthcare & Education';
      else if (title.includes('lifestyle') || title.includes('culture') || title.includes('living')) suggestedCategory = 'Lifestyle & Culture';
      else suggestedCategory = 'Residency & Immigration'; // Default fallback
      
      console.log(`   💡 Suggested: ${suggestedCategory}`);
      console.log('');
    });

    console.log('\n🔧 TO FIX THIS:');
    console.log('1. Go to Sanity Studio: https://relocation.quest/studio');
    console.log('2. For each article, click "Posts" and then the article title');
    console.log('3. Scroll to "Category" field and select appropriate category');
    console.log('4. Save the article');
    console.log('\n✅ After categorizing, category pages will show articles!');

  } catch (error) {
    console.error('Error listing articles:', error);
  }
}

listUncategorizedArticles();