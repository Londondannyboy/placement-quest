// Cookie consent configuration for Relocation Quest
// Professional GDPR compliance with site branding

export default {
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
          title: 'Privacy & Cookies',
          description: 'We use cookies and similar technologies to enhance your experience on Relocation Quest, analyze site usage, and provide relevant content about international relocation services.',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Essential Only',
          showPreferencesBtn: 'Manage Preferences',
          footer: `
            <a href="/privacy-policy" target="_blank">Privacy Policy</a>
            <a href="/terms-of-service" target="_blank">Terms of Service</a>
          `
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
              description: 'We use cookies to enhance your experience on our international relocation platform and provide personalized content.'
            },
            {
              title: 'Essential Cookies',
              description: 'Required for basic site functionality, security, and user authentication. These cannot be disabled.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics Cookies',
              description: 'Help us understand how visitors interact with our relocation guides and improve our content.',
              linkedCategory: 'analytics'
            },
            {
              title: 'Marketing Cookies', 
              description: 'Used to provide relevant content about visa programs, tax optimization, and relocation services.',
              linkedCategory: 'marketing'
            },
            {
              title: 'More Information',
              description: `
                For more details about our privacy practices, please read our 
                <a href="/privacy-policy" class="cc-link" target="_blank">Privacy Policy</a> 
                and <a href="/terms-of-service" class="cc-link" target="_blank">Terms of Service</a>.
              `
            }
          ]
        }
      }
    }
  }
};