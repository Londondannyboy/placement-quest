import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN // Will need a write token
});

const FIXES = [
  {
    id: '3c6944bc-4fea-4692-937c-0a54219030d8',
    title: 'Digital Nomad',
    slug: 'digital-nomad'
  },
  {
    id: 'e66e2ae8-40e6-48a9-9b08-3c53313a0ed1', 
    title: 'Tax & Finance',
    slug: 'tax-finance'
  },
  {
    id: 'f7dc398d-24d1-4fba-ad05-46aebe79d940',
    title: 'Portugal', 
    slug: 'portugal'
  }
];

// Also need to find Golden Visa category and fix its slug
const GOLDEN_VISA_FIX = {
  // Will find by title since it has wrong slug
  title: 'Golden Visa',
  slug: 'golden-visa'
};

async function fixCategorySlugs() {
  console.log('🔧 Starting category slug fixes...\n');
  
  try {
    // Fix the 3 categories with missing slugs
    for (const fix of FIXES) {
      console.log(`Fixing "${fix.title}"...`);
      
      const result = await sanityClient
        .patch(fix.id)
        .set({
          slug: {
            current: fix.slug,
            _type: 'slug'
          }
        })
        .commit();
        
      console.log(`✅ Fixed ${fix.title} → /categories/${fix.slug}`);
    }
    
    // Fix Golden Visa category (find by title first)
    console.log('\nFixing Golden Visa category...');
    const goldenVisaCategory = await sanityClient.fetch(
      `*[_type == "category" && title == "Golden Visa"][0]`
    );
    
    if (goldenVisaCategory) {
      await sanityClient
        .patch(goldenVisaCategory._id)
        .set({
          slug: {
            current: GOLDEN_VISA_FIX.slug,
            _type: 'slug'
          }
        })
        .commit();
        
      console.log(`✅ Fixed Golden Visa → /categories/${GOLDEN_VISA_FIX.slug}`);
    }
    
    console.log('\n🎉 All category slugs fixed!');
    console.log('\nFixed URLs:');
    FIXES.forEach(fix => {
      console.log(`- https://relocation.quest/categories/${fix.slug}`);
    });
    console.log(`- https://relocation.quest/categories/${GOLDEN_VISA_FIX.slug}`);
    
    console.log('\nRun the check script again to verify all fixes worked.');
    
  } catch (error) {
    console.error('❌ Error fixing category slugs:', error);
    
    if (error.message.includes('Insufficient permissions')) {
      console.log('\n💡 You need to set SANITY_API_TOKEN with write permissions');
      console.log('Get a token from: https://sanity.io/manage/personal/tokens');
    }
  }
}

fixCategorySlugs();