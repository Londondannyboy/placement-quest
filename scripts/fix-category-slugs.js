// Fix missing slugs in existing categories
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production', 
  useCdn: false,
  token: 'skimpgO1DmVQozqBQ7cYiH3ucNQ4qN86sZuH2gzS2rXbqCyRL8KYsaBmDsXi4SutJKeJn57UH7nJ9DBrMAGjQ8SdxGxvOe0aNOkSEUfANTFlrCPtu6r5f2vL7rnTFCtW1Hc941rU9cMdqYmBUTPSKCjvC7t9JL8ycesWmDnfu6HdGlY3fTh9',
  apiVersion: '2023-01-01'
})

// Function to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters  
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single
    .trim('-')                // Remove leading/trailing hyphens
}

async function fixCategorySlugs() {
  console.log('🔍 Finding categories without slugs...')
  
  // Get all categories
  const categories = await client.fetch('*[_type == "category"] { _id, title, slug }')
  
  console.log(`Found ${categories.length} categories:`)
  categories.forEach(cat => {
    console.log(`- "${cat.title}" (slug: ${cat.slug?.current || 'MISSING'})`)
  })
  
  // Fix categories missing slugs
  const categoriesToFix = categories.filter(cat => !cat.slug?.current)
  
  if (categoriesToFix.length === 0) {
    console.log('✅ All categories already have slugs!')
    return
  }
  
  console.log(`\n🔧 Fixing ${categoriesToFix.length} categories...`)
  
  for (const category of categoriesToFix) {
    const slug = createSlug(category.title)
    console.log(`Adding slug "${slug}" to "${category.title}"`)
    
    await client
      .patch(category._id)
      .set({
        slug: {
          _type: 'slug',
          current: slug
        }
      })
      .commit()
  }
  
  console.log('\n✅ Category slugs fixed!')
  console.log('\n📋 Categories now available at:')
  categoriesToFix.forEach(cat => {
    const slug = createSlug(cat.title)
    console.log(`- https://relocation.quest/categories/${slug}`)
  })
}

fixCategorySlugs().catch(console.error)