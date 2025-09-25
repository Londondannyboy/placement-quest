import type { APIRoute } from 'astro';
import { client } from '../lib/sanity';

export const GET: APIRoute = async () => {
  try {
    // Get all published articles
    const articles = await client.fetch(`
      *[_type == "post" && defined(publishedAt) && !(_id in path("drafts.**"))] {
        "slug": slug.current,
        _updatedAt,
        publishedAt
      } | order(publishedAt desc)
    `);

    // Get all categories
    const categories = await client.fetch(`
      *[_type == "category" && defined(slug)] {
        "slug": slug.current,
        _updatedAt
      }
    `);

    // Static pages with their priorities and last modified dates
    const staticPages = [
      { url: '', priority: '1.00', lastmod: new Date().toISOString() }, // Homepage
      { url: 'articles', priority: '0.90', lastmod: new Date().toISOString() },
      { url: 'services', priority: '0.90', lastmod: new Date().toISOString() },
      { url: 'services/golden-visa', priority: '0.85', lastmod: new Date().toISOString() },
      { url: 'services/tax-residency', priority: '0.85', lastmod: new Date().toISOString() },
      { url: 'services/non-dom-status', priority: '0.85', lastmod: new Date().toISOString() },
      { url: 'services/company-formation', priority: '0.85', lastmod: new Date().toISOString() },
      { url: 'resources', priority: '0.90', lastmod: new Date().toISOString() },
      { url: 'resources/guides', priority: '0.85', lastmod: new Date().toISOString() },
      { url: 'resources/faq', priority: '0.85', lastmod: new Date().toISOString() },
      { url: 'resources/knowledge-base', priority: '0.85', lastmod: new Date().toISOString() },
      { url: 'countries', priority: '0.85', lastmod: new Date().toISOString() },
      { url: 'countries/cyprus', priority: '0.80', lastmod: new Date().toISOString() },
      { url: 'countries/portugal', priority: '0.80', lastmod: new Date().toISOString() },
      { url: 'countries/dubai', priority: '0.80', lastmod: new Date().toISOString() },
      { url: 'countries/malta', priority: '0.80', lastmod: new Date().toISOString() },
      { url: 'countries/singapore', priority: '0.80', lastmod: new Date().toISOString() },
      { url: 'countries/caribbean', priority: '0.80', lastmod: new Date().toISOString() },
      { url: 'categories', priority: '0.75', lastmod: new Date().toISOString() },
      { url: 'about', priority: '0.70', lastmod: new Date().toISOString() },
      { url: 'contact', priority: '0.80', lastmod: new Date().toISOString() },
      { url: 'search', priority: '0.60', lastmod: new Date().toISOString() },
      { url: 'privacy-policy', priority: '0.30', lastmod: new Date().toISOString() },
      { url: 'terms-of-service', priority: '0.30', lastmod: new Date().toISOString() },
    ];

    // Build XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>https://relocation.quest/${page.url}</loc>
    <lastmod>${page.lastmod.split('T')[0]}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${articles
  .filter(article => article.slug && !article.slug.startsWith('services-') && !article.slug.startsWith('resources-'))
  .map(article => `  <url>
    <loc>https://relocation.quest/articles/${article.slug}</loc>
    <lastmod>${(article._updatedAt || article.publishedAt).split('T')[0]}</lastmod>
    <priority>0.70</priority>
  </url>`).join('\n')}
${categories.map(category => `  <url>
    <loc>https://relocation.quest/categories/${category.slug}</loc>
    <lastmod>${category._updatedAt.split('T')[0]}</lastmod>
    <priority>0.60</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('Sitemap generation failed:', error);
    
    // Return a basic sitemap if there's an error
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://relocation.quest/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>`;

    return new Response(basicSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
};

export const prerender = false; // Dynamic generation