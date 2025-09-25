export const GET = () => {
  const siteUrl = 'https://relocation.quest';
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow certain paths
Disallow: /api/
Disallow: /.vercel/
Disallow: /.astro/
Disallow: /admin
Disallow: /studio/
Disallow: /_
Disallow: /tmp/
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*?utm_*
Disallow: /*?fbclid=*
Disallow: /*?gclid=*

# Allow important resources
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.webp$
Allow: /*.svg$
Allow: /*.gif$
Allow: /*.ico$
Allow: /*.woff$
Allow: /*.woff2$
Allow: /*.ttf$
Allow: /*.otf$
Allow: /*.eot$

# Special rules for search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

# Block problematic bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Host directive
Host: ${siteUrl}`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
};