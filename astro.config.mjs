// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://relocation.quest',
  integrations: [
    sanity({
      projectId: 'bc08ijz6',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/studio'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  output: 'server',
  adapter: vercel(),
});
