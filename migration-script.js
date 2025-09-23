import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-03-15',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

async function migratePostsToArticles() {
  console.log('🔍 Querying all documents with _type == "post"...')
  
  // Query all documents with _type == "post"
  const posts = await client.fetch('*[_type == "post"]{_id, _rev, title}')
  
  console.log(`📊 Found ${posts.length} documents with _type == "post"`)
  
  if (posts.length === 0) {
    console.log('✅ No documents with _type == "post" found. Nothing to migrate.')
    return { migratedCount: 0, posts: [] }
  }
  
  console.log('🔧 Starting migration...')
  
  // Create patches for each document
  const patches = posts.map(post => ({
    id: post._id,
    patch: {
      set: { _type: 'article' },
      ifRevisionID: post._rev
    }
  }))
  
  // Execute all patches in a transaction
  let transaction = client.transaction()
  
  patches.forEach(({ id, patch }) => {
    transaction = transaction.patch(id, patch)
  })
  
  try {
    const result = await transaction.commit()
    console.log(`✅ Successfully migrated ${posts.length} documents from _type "post" to "article"`)
    console.log('📄 Migrated documents:')
    posts.forEach(post => {
      console.log(`  - ${post._id}: "${post.title || 'Untitled'}"`)
    })
    return { migratedCount: posts.length, posts }
  } catch (error) {
    console.error('❌ Error during migration:', error)
    throw error
  }
}

async function createTestArticle() {
  console.log('📝 Creating test article...')
  
  const testArticle = {
    _type: 'article',
    title: 'Cyprus Tax Benefits: Complete Guide 2025',
    slug: {
      _type: 'slug',
      current: 'cyprus-tax-benefits-guide'
    },
    excerpt: 'Discover how Cyprus offers one of Europe\'s most attractive tax regimes with just 60 days residency requirement.',
    publishedAt: new Date().toISOString(),
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro-text',
            text: 'Cyprus has emerged as one of Europe\'s most attractive destinations for individuals and businesses seeking favorable tax treatment. With its strategic location, EU membership, and progressive tax policies, Cyprus offers a unique combination of benefits that make it an ideal choice for relocation. The island nation requires just 60 days of residency to qualify for its advantageous tax regime, making it accessible for those looking to optimize their tax position while maintaining flexibility in their lifestyle.'
          }
        ]
      }
    ]
  }
  
  try {
    const result = await client.create(testArticle)
    console.log(`✅ Successfully created test article with ID: ${result._id}`)
    console.log(`📄 Article: "${result.title}"`)
    return result
  } catch (error) {
    console.error('❌ Error creating test article:', error)
    throw error
  }
}

// Main execution
async function main() {
  try {
    console.log('🚀 Starting Sanity document migration...')
    console.log(`📡 Connected to project: ${client.config().projectId}`)
    console.log(`🗂️  Dataset: ${client.config().dataset}`)
    console.log('')
    
    // Step 1: Migrate existing posts to articles
    const migrationResult = await migratePostsToArticles()
    console.log('')
    
    // Step 2: Create test article
    const testArticle = await createTestArticle()
    console.log('')
    
    console.log('🎉 Migration completed successfully!')
    console.log(`📊 Summary:`)
    console.log(`  - Migrated documents: ${migrationResult.migratedCount}`)
    console.log(`  - Test article created: ${testArticle._id}`)
    console.log(`  - Test article title: "${testArticle.title}"`)
    
    return {
      migratedCount: migrationResult.migratedCount,
      migratedPosts: migrationResult.posts,
      testArticle
    }
  } catch (error) {
    console.error('💥 Migration failed:', error)
    process.exit(1)
  }
}

main()