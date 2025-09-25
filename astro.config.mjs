// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
// import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://placement.quest',
  trailingSlash: 'always', // Fix canonical URL mismatch
  integrations: [
    sanity({
      projectId: 'bc08ijz6', // TODO: Create new Sanity project for placement-quest
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
    tailwind(),
    sitemap({
      filter: (page) => {
        // Include all pages in sitemap
        return true;
      },
      customPages: [
        'https://placement.quest/llms.txt',
        'https://placement.quest/ai.txt'
      ]
    }), // Generate sitemap with trailing slashes including AI files
    // icon(),
  ],
  output: 'server',
  adapter: vercel(),
});
