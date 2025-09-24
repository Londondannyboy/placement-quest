// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import cookieconsent from '@jop-software/astro-cookieconsent';
// import icon from 'astro-icon';

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
    cookieconsent({
      guiOptions: {
        consentModal: {
          layout: 'cloud',
          position: 'middle center',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false
        }
      },
      
      categories: {
        necessary: {
          readOnly: true
        },
        analytics: {},
        marketing: {}
      },

      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'Privacy & Cookies 🍪',
              description: 'We use cookies to enhance your international relocation experience, analyze site usage, and provide relevant content about visa programs and tax optimization.',
              acceptAllBtn: 'Accept All',
              acceptNecessaryBtn: 'Essential Only',
              showPreferencesBtn: 'Manage Preferences',
              footer: '<a href="/privacy-policy" target="_blank">Privacy Policy</a> • <a href="/terms-of-service" target="_blank">Terms of Service</a>'
            },
            preferencesModal: {
              title: 'Cookie Preferences',
              acceptAllBtn: 'Accept All',
              acceptNecessaryBtn: 'Essential Only',
              savePreferencesBtn: 'Save Preferences',
              closeIconLabel: 'Close',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title: 'Cookie Usage 📢',
                  description: 'We use cookies to enhance your experience on Relocation Quest and provide personalized international relocation guidance.'
                },
                {
                  title: 'Essential Cookies',
                  description: 'Required for basic site functionality, security, and user authentication. These cannot be disabled.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Analytics Cookies',
                  description: 'Help us understand how visitors use our relocation guides and video content to improve our services.',
                  linkedCategory: 'analytics'
                },
                {
                  title: 'Marketing Cookies', 
                  description: 'Used to provide relevant content about Golden Visa programs, tax optimization, and relocation opportunities.',
                  linkedCategory: 'marketing'
                }
              ]
            }
          }
        }
      }
    }),
    // icon(),
  ],
  output: 'server',
  adapter: vercel(),
});
