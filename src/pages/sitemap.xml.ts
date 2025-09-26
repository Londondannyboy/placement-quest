import type { APIRoute } from 'astro';
import { client } from '../lib/sanity';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString() || 'https://placement.quest';
  
  // Static pages
  const staticPages = [
    '',
    'placement-agents',
    'top-private-equity-placement-agents',
    'boutique-placement-agents',
    'global-placement-agents',
    'placement-agents-by-region',
    'placement-agent-rankings',
    'placement-agent-fees',
    'fund-deals',
    'recent-closings',
    'buyout-funds',
    'growth-equity',
    'venture-capital',
    'real-estate-funds',
    'market-insights',
    'fundraising-guide',
    'lp-database',
    'league-tables',
    'news',
    'about',
    'contact'
  ];

  // Fetch dynamic content from Sanity
  let dynamicPages: string[] = [];
  
  try {
    // Fetch placement agents
    const agents = await client.fetch(`
      *[_type == "placementAgent" && !(_id in path("drafts.**"))] {
        "slug": slug.current
      }
    `);
    
    // Fetch fund deals
    const deals = await client.fetch(`
      *[_type == "fundDeal" && !(_id in path("drafts.**"))] {
        "slug": slug.current
      }
    `);
    
    // Fetch market insights
    const insights = await client.fetch(`
      *[_type == "marketInsight" && !(_id in path("drafts.**"))] {
        "slug": slug.current
      }
    `);
    
    // Add dynamic pages
    if (agents) {
      agents.forEach((agent: any) => {
        if (agent.slug) {
          dynamicPages.push(`placement-agents/${agent.slug}`);
        }
      });
    }
    
    if (deals) {
      deals.forEach((deal: any) => {
        if (deal.slug) {
          dynamicPages.push(`fund-deals/${deal.slug}`);
        }
      });
    }
    
    if (insights) {
      insights.forEach((insight: any) => {
        if (insight.slug) {
          dynamicPages.push(`insights/${insight.slug}`);
        }
      });
    }
  } catch (error) {
    console.error('Error fetching dynamic pages for sitemap:', error);
  }

  const allPages = [...staticPages, ...dynamicPages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map((page) => {
    const path = page ? `/${page}/` : '/';
    const priority = page === '' ? '1.0' : 
                    page.includes('top-private-equity') ? '0.9' :
                    page.includes('placement-agents') ? '0.8' :
                    page.includes('fund-deals') ? '0.7' : '0.5';
    const changefreq = page === '' || page === 'news' ? 'daily' :
                      page.includes('market-insights') ? 'weekly' :
                      page.includes('placement-agents') ? 'weekly' : 'monthly';
    
    return `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};