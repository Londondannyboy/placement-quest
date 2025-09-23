// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

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
  ],
  output: 'hybrid',
  adapter: vercel(),
});
