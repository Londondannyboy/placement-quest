import { sanityClient } from 'sanity:client';

export const GET = async () => {
  const siteUrl = 'https://relocation.quest';
  
  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/articles', priority: '0.9', changefreq: 'daily' },
    { url: '/categories', priority: '0.8', changefreq: 'weekly' },
    { url: '/search', priority: '0.7', changefreq: 'monthly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    // Country pages
    { url: '/countries/cyprus', priority: '0.8', changefreq: 'weekly' },
    { url: '/countries/portugal', priority: '0.8', changefreq: 'weekly' },
    { url: '/countries/dubai', priority: '0.8', changefreq: 'weekly' },
    { url: '/countries/malta', priority: '0.8', changefreq: 'weekly' },
    { url: '/countries/singapore', priority: '0.8', changefreq: 'weekly' },
    { url: '/countries/caribbean', priority: '0.8', changefreq: 'weekly' }
  ];

  try {
    // Fetch dynamic content
    const [posts, categories, tags] = await Promise.all([
      sanityClient.fetch(`*[_type == "post" && defined(slug)] {
        slug,
        _updatedAt,
        publishedAt
      }`),
      sanityClient.fetch(`*[_type == "category" && defined(slug)] {
        slug,
        _updatedAt
      }`),
      sanityClient.fetch(`*[_type == "tag" && defined(slug)] {
        slug,
        _updatedAt
      }`)
    ]);

    // Build sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${posts.map(post => `  <url>
    <loc>${siteUrl}/articles/${post.slug.current}</loc>
    <lastmod>${(post._updatedAt || post.publishedAt || new Date().toISOString()).split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
${categories.map(category => `  <url>
    <loc>${siteUrl}/categories/${category.slug.current}</loc>
    <lastmod>${(category._updatedAt || new Date().toISOString()).split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
${tags.map(tag => `  <url>
    <loc>${siteUrl}/tags/${tag.slug.current}</loc>
    <lastmod>${(tag._updatedAt || new Date().toISOString()).split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback sitemap with just static pages
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
};