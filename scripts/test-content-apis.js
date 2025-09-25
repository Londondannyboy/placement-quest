#!/usr/bin/env node

/**
 * Content Quality API Testing Script
 * Tests Firecrawl, Critique Labs, and LinkUp APIs for relocation content research
 */

import { config } from 'dotenv';
config();

// API Credentials
const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY || 'fc-fcc00e00206d4c1db2653d3815a2b0b0';
const CRITIQUE_LABS_API_KEY = process.env.CRITIQUE_LABS_API_KEY || '4W8L4b9IY0xIzPBsFHRngwQ0M-9v9TcAysgauLqh6s4';
const LINKUP_API_KEY = process.env.LINKUP_API_KEY; // To be provided

// Test cases for relocation research
const testCases = [
  {
    query: "Cyprus Golden Visa investment requirements 2024",
    expectedSources: ["government", "official", "cyprus"],
    description: "Test accuracy for Cyprus Golden Visa requirements"
  },
  {
    query: "Portugal D7 visa minimum income requirements 2024", 
    expectedSources: ["portugal", "government", "visa"],
    description: "Test Portugal D7 visa information accuracy"
  },
  {
    query: "Malta MPRP program changes latest updates",
    expectedSources: ["malta", "government", "program"],
    description: "Test Malta program updates detection"
  }
];

/**
 * Test Firecrawl API - Web scraping and PDF parsing
 */
async function testFirecrawl() {
  console.log('\n🔥 Testing Firecrawl API...');
  
  try {
    // Test scraping a government immigration page
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${FIRECRAWL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: 'https://www.cyprus.gov.cy/investment-programme',
        formats: ['markdown', 'structured'],
        onlyMainContent: true
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Firecrawl working - scraped Cyprus immigration page');
      console.log(`📊 Content length: ${data.content?.length || 0} characters`);
      return { success: true, data };
    } else {
      console.log('❌ Firecrawl error:', data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.log('❌ Firecrawl connection error:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Test Critique Labs API - Fact-checking and citations
 */
async function testCritiqueLabs() {
  console.log('\n🔍 Testing Critique Labs API...');
  
  try {
    const testClaim = "Cyprus offers EU citizenship through €300,000 real estate investment";
    
    const response = await fetch('https://api.critique-labs.ai/api-reference/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CRITIQUE_LABS_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: testClaim,
        sources: ['government', 'official', 'legal'],
        verify: true
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Critique Labs working - verified claim');
      console.log(`📊 Confidence: ${data.confidence || 'N/A'}`);
      console.log(`🔗 Citations: ${data.citations?.length || 0}`);
      return { success: true, data };
    } else {
      console.log('❌ Critique Labs error:', data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.log('❌ Critique Labs connection error:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Test LinkUp API - Contextual search
 */
async function testLinkUp() {
  console.log('\n🔗 Testing LinkUp API...');
  
  if (!LINKUP_API_KEY) {
    console.log('⚠️  LinkUp API key not provided - skipping test');
    return { success: false, error: 'API key missing' };
  }
  
  try {
    const response = await fetch('https://api.linkup.so/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LINKUP_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: "Cyprus Golden Visa investment requirements 2024",
        context: "immigration law, investment programs",
        sources: "government,official"
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ LinkUp working - contextual search completed');
      console.log(`📊 Results: ${data.results?.length || 0}`);
      return { success: true, data };
    } else {
      console.log('❌ LinkUp error:', data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.log('❌ LinkUp connection error:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Compare APIs for quality and relevance
 */
async function compareAPIs() {
  console.log('\n📊 API Comparison Summary:');
  
  const results = {
    firecrawl: await testFirecrawl(),
    critiqueLabs: await testCritiqueLabs(),
    linkup: await testLinkUp()
  };
  
  console.log('\n🏆 Results:');
  Object.entries(results).forEach(([api, result]) => {
    const status = result.success ? '✅ Working' : '❌ Failed';
    console.log(`${api.toUpperCase()}: ${status}`);
  });
  
  console.log('\n💡 Recommendations:');
  if (results.firecrawl.success) {
    console.log('- Use Firecrawl for scraping government sites and PDFs');
  }
  if (results.critiqueLabs.success) {
    console.log('- Use Critique Labs for fact-checking and citations');
  }
  if (results.linkup.success) {
    console.log('- Use LinkUp for superior contextual search');
  } else {
    console.log('- Fallback to Tavily for search functionality');
  }
  
  return results;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Content Quality API Testing Suite');
  console.log('====================================');
  
  try {
    const results = await compareAPIs();
    
    console.log('\n✅ Testing completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Integrate working APIs into content pipeline');
    console.log('2. Set up automated fact-checking workflow');
    console.log('3. Create citation-rich article templates');
    
    return results;
  } catch (error) {
    console.error('❌ Testing failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { testFirecrawl, testCritiqueLabs, testLinkUp, compareAPIs };