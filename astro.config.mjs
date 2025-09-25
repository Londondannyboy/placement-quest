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
  site: 'https://relocation.quest',
  trailingSlash: 'always', // Fix canonical URL mismatch
  integrations: [
    sanity({
      projectId: 'bc08ijz6',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
    tailwind(),
    sitemap(), // Generate sitemap with trailing slashes
    // icon(),
  ],
  output: 'server',
  adapter: vercel(),
});
