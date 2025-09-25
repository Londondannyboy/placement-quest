import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

const tags = [
  // Visa Types
  { title: 'Golden Visa', slug: 'golden-visa' },
  { title: 'Investment Visa', slug: 'investment-visa' },
  { title: 'Retirement Visa', slug: 'retirement-visa' },
  { title: 'Digital Nomad Visa', slug: 'digital-nomad-visa' },
  { title: 'Student Visa', slug: 'student-visa' },
  { title: 'Work Visa', slug: 'work-visa' },
  { title: 'Family Reunification', slug: 'family-reunification' },
  { title: 'Entrepreneur Visa', slug: 'entrepreneur-visa' },
  { title: 'Investor Visa', slug: 'investor-visa' },
  
  // Investment Types
  { title: 'Real Estate Investment', slug: 'real-estate-investment' },
  { title: 'Government Bonds', slug: 'government-bonds' },
  { title: 'Business Investment', slug: 'business-investment' },
  { title: 'Fund Investment', slug: 'fund-investment' },
  { title: 'Donation Option', slug: 'donation-option' },
  
  // Tax & Finance
  { title: 'Tax Optimization', slug: 'tax-optimization' },
  { title: 'Double Taxation', slug: 'double-taxation' },
  { title: 'Non-Dom Status', slug: 'non-dom-status' },
  { title: 'Tax Residency', slug: 'tax-residency' },
  { title: 'Wealth Management', slug: 'wealth-management' },
  { title: 'Banking', slug: 'banking' },
  { title: 'Currency Exchange', slug: 'currency-exchange' },
  { title: 'Offshore Banking', slug: 'offshore-banking' },
  
  // Lifestyle
  { title: 'Cost of Living', slug: 'cost-of-living' },
  { title: 'Quality of Life', slug: 'quality-of-life' },
  { title: 'Climate', slug: 'climate' },
  { title: 'Culture', slug: 'culture' },
  { title: 'Language', slug: 'language' },
  { title: 'Expat Community', slug: 'expat-community' },
  { title: 'Remote Work', slug: 'remote-work' },
  { title: 'Coworking Spaces', slug: 'coworking-spaces' },
  
  // Education & Healthcare
  { title: 'Healthcare System', slug: 'healthcare-system' },
  { title: 'Health Insurance', slug: 'health-insurance' },
  { title: 'Education System', slug: 'education-system' },
  { title: 'International Schools', slug: 'international-schools' },
  { title: 'University', slug: 'university' },
  
  // Legal & Documentation
  { title: 'Legal Requirements', slug: 'legal-requirements' },
  { title: 'Documentation', slug: 'documentation' },
  { title: 'Apostille', slug: 'apostille' },
  { title: 'Translation Services', slug: 'translation-services' },
  { title: 'Legal Fees', slug: 'legal-fees' },
  { title: 'Due Diligence', slug: 'due-diligence' },
  
  // Processing & Timeline
  { title: 'Processing Time', slug: 'processing-time' },
  { title: 'Application Process', slug: 'application-process' },
  { title: 'Requirements', slug: 'requirements' },
  { title: 'Eligibility', slug: 'eligibility' },
  { title: 'Fast Track', slug: 'fast-track' },
  
  // Business & Economy
  { title: 'Business Setup', slug: 'business-setup' },
  { title: 'Company Formation', slug: 'company-formation' },
  { title: 'Economic Growth', slug: 'economic-growth' },
  { title: 'Investment Opportunities', slug: 'investment-opportunities' },
  { title: 'Startup Ecosystem', slug: 'startup-ecosystem' },
  
  // Regions & Locations
  { title: 'European Union', slug: 'european-union' },
  { title: 'EU Passport', slug: 'eu-passport' },
  { title: 'Schengen Area', slug: 'schengen-area' },
  { title: 'Mediterranean', slug: 'mediterranean' },
  { title: 'Caribbean', slug: 'caribbean' },
  { title: 'Middle East', slug: 'middle-east' },
  { title: 'Asia Pacific', slug: 'asia-pacific' },
  
  // Property & Housing
  { title: 'Property Market', slug: 'property-market' },
  { title: 'Real Estate Prices', slug: 'real-estate-prices' },
  { title: 'Rental Market', slug: 'rental-market' },
  { title: 'Property Investment', slug: 'property-investment' },
  { title: 'Housing Options', slug: 'housing-options' },
  
  // Technology & Innovation
  { title: 'Tech Hub', slug: 'tech-hub' },
  { title: 'Innovation', slug: 'innovation' },
  { title: 'Fintech', slug: 'fintech' },
  { title: 'Cryptocurrency', slug: 'cryptocurrency' },
  { title: 'Digital Services', slug: 'digital-services' },
  
  // Family & Lifestyle
  { title: 'Family Benefits', slug: 'family-benefits' },
  { title: 'Child Education', slug: 'child-education' },
  { title: 'Spouse Benefits', slug: 'spouse-benefits' },
  { title: 'Pet Relocation', slug: 'pet-relocation' },
  { title: 'Social Benefits', slug: 'social-benefits' },
];

async function createTags() {
  console.log('Creating tags...');
  
  for (const tag of tags) {
    try {
      // Check if tag already exists
      const existing = await client.fetch(
        '*[_type == "tag" && slug.current == $slug][0]',
        { slug: tag.slug }
      );
      
      if (existing) {
        console.log(`Tag "${tag.title}" already exists, skipping...`);
        continue;
      }
      
      // Create new tag
      const newTag = await client.create({
        _type: 'tag',
        title: tag.title,
        slug: {
          _type: 'slug',
          current: tag.slug,
        },
      });
      
      console.log(`✅ Created tag: ${tag.title} (${tag.slug})`);
    } catch (error) {
      console.error(`❌ Failed to create tag "${tag.title}":`, error);
    }
  }
  
  console.log('\n🎉 Tag creation completed!');
}

createTags().catch(console.error);