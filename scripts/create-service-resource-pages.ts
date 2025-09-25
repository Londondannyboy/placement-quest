import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bc08ijz6',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

async function createServiceAndResourcePages() {
  console.log('🚀 Creating service and resource pages in Sanity...');

  try {
    // Get the default category and author
    const categories = await client.fetch('*[_type == "category"]');
    const authors = await client.fetch('*[_type == "author"]');
    
    const businessCategory = categories.find(cat => cat.title.includes('Business'));
    const defaultAuthor = authors.find(author => author.name.includes('Team')) || authors[0];

    console.log(`📋 Using category: ${businessCategory?.title || 'None'}`);
    console.log(`👤 Using author: ${defaultAuthor?.name || 'None'}`);

    // Service Pages Data
    const servicePages = [
      {
        _type: 'post',
        title: 'Tax Residency Services - Expert International Tax Planning',
        slug: { current: 'services-tax-residency' },
        excerpt: 'Professional tax residency guidance for international relocation. Optimize your tax obligations with our expert advisors specializing in EU residency programs.',
        content: [
          {
            _type: 'block',
            _key: 'intro',
            children: [{
              _type: 'span',
              _key: 'intro-text',
              text: 'Navigate the complex world of international tax residency with our expert guidance. Whether you\'re planning to relocate for business, lifestyle, or investment opportunities, understanding tax residency implications is crucial for optimizing your global tax position.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading1',
            children: [{
              _type: 'span',
              _key: 'h1-text',
              text: 'Tax Residency Planning Services'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'services',
            children: [{
              _type: 'span',
              _key: 'services-text',
              text: 'Our comprehensive tax residency services include residence planning, tax optimization strategies, compliance management, and ongoing advisory support. We help you understand the tax implications of your relocation decisions and structure your affairs to minimize global tax obligations while maintaining full compliance.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading2',
            children: [{
              _type: 'span',
              _key: 'h2-text',
              text: 'Key Benefits'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'benefits',
            children: [{
              _type: 'span',
              _key: 'benefits-text',
              text: '• Minimize global tax obligations\n• Ensure compliance with all jurisdictions\n• Strategic residence planning\n• Double taxation treaty optimization\n• Ongoing advisory and support\n• Professional documentation and filing'
            }],
            style: 'normal'
          }
        ],
        category: businessCategory ? { _ref: businessCategory._id } : undefined,
        author: defaultAuthor ? { _ref: defaultAuthor._id } : undefined,
        publishedAt: new Date().toISOString(),
        _status: 'published'
      },
      {
        _type: 'post',
        title: 'Golden Visa Programs 2025 - EU Residency by Investment',
        slug: { current: 'services-golden-visa' },
        excerpt: 'Compare Golden Visa programs across Europe. Expert guidance on Malta, Portugal, Cyprus, Spain & Dubai golden visas with current requirements.',
        content: [
          {
            _type: 'block',
            _key: 'intro',
            children: [{
              _type: 'span',
              _key: 'intro-text',
              text: 'Golden visa programs offer a direct path to European residency through strategic investment. Our experts guide you through the complex landscape of European golden visa options, helping you choose the program that best aligns with your investment capacity, residency goals, and long-term objectives.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading1',
            children: [{
              _type: 'span',
              _key: 'h1-text',
              text: 'Leading Golden Visa Programs 2025'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'programs',
            children: [{
              _type: 'span',
              _key: 'programs-text',
              text: 'Malta MPRP: From €370,000 - EU residency with 15% tax rate and no minimum stay requirement.\n\nPortugal Golden Visa: From €280,000 - Flexible residency with only 7 days per year requirement.\n\nCyprus Permanent Residency: €300,000 - EU access with visit requirement once every two years.\n\nSpain Golden Visa: €500,000 - Renewable residency with annual visit requirement.\n\nDubai Golden Visa: $545,000+ - Long-term residency in a 0% tax jurisdiction.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading2',
            children: [{
              _type: 'span',
              _key: 'h2-text',
              text: 'Our Golden Visa Services'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'services',
            children: [{
              _type: 'span',
              _key: 'services-text',
              text: '• Program comparison and selection\n• Investment strategy and due diligence\n• Complete application management\n• Property sourcing and legal support\n• Family inclusion planning\n• Post-approval compliance support'
            }],
            style: 'normal'
          }
        ],
        category: businessCategory ? { _ref: businessCategory._id } : undefined,
        author: defaultAuthor ? { _ref: defaultAuthor._id } : undefined,
        publishedAt: new Date().toISOString(),
        _status: 'published'
      },
      {
        _type: 'post',
        title: 'Non-Dom Tax Status Services - UK & Cyprus Tax Planning',
        slug: { current: 'services-non-dom-status' },
        excerpt: 'Expert Non-Domiciled tax status planning for UK and Cyprus. Optimize tax obligations and protect offshore income with specialist advisors.',
        content: [
          {
            _type: 'block',
            _key: 'intro',
            children: [{
              _type: 'span',
              _key: 'intro-text',
              text: 'Non-domiciled tax status offers significant opportunities for tax optimization, but the landscape is changing rapidly. With the UK announcing the abolition of its Non-Dom regime from April 2025, it\'s crucial to understand your options and plan accordingly.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading1',
            children: [{
              _type: 'span',
              _key: 'h1-text',
              text: 'UK Non-Dom Regime Changes 2025'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'uk-changes',
            children: [{
              _type: 'span',
              _key: 'uk-text',
              text: 'The UK government has announced the abolition of the Non-Dom regime from April 2025. Existing Non-Doms have transition options including a 4-year transition period and temporary repatriation relief. Our specialists help you navigate these changes and explore alternative jurisdictions.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading2',
            children: [{
              _type: 'span',
              _key: 'h2-text',
              text: 'Cyprus Non-Dom Alternative'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'cyprus-alternative',
            children: [{
              _type: 'span',
              _key: 'cyprus-text',
              text: 'Cyprus offers a compelling Non-Dom alternative with 0% tax on foreign dividends, 0% capital gains tax (except property), and access to EU tax treaties. The program runs for 17 years and requires only 60+ days of physical presence annually.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading3',
            children: [{
              _type: 'span',
              _key: 'h3-text',
              text: 'Our Non-Dom Services'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'services',
            children: [{
              _type: 'span',
              _key: 'services-text',
              text: '• UK Non-Dom transition planning\n• Cyprus Non-Dom status applications\n• Wealth protection strategies\n• Income optimization planning\n• Compliance management\n• Alternative jurisdiction analysis'
            }],
            style: 'normal'
          }
        ],
        category: businessCategory ? { _ref: businessCategory._id } : undefined,
        author: defaultAuthor ? { _ref: defaultAuthor._id } : undefined,
        publishedAt: new Date().toISOString(),
        _status: 'published'
      },
      {
        _type: 'post',
        title: 'International Company Formation Services - Global Business Setup',
        slug: { current: 'services-company-formation' },
        excerpt: 'Expert company formation services across Europe, Middle East & Asia. EU companies, offshore entities, tax optimization, and complete business incorporation support.',
        content: [
          {
            _type: 'block',
            _key: 'intro',
            children: [{
              _type: 'span',
              _key: 'intro-text',
              text: 'Establish your international business presence with our comprehensive company formation services. We help entrepreneurs and businesses incorporate in the most suitable jurisdictions, providing end-to-end support from initial consultation to post-incorporation compliance.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading1',
            children: [{
              _type: 'span',
              _key: 'h1-text',
              text: 'Top Business Jurisdictions'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'jurisdictions',
            children: [{
              _type: 'span',
              _key: 'jurisdictions-text',
              text: 'Malta: 6.25% effective corporate tax rate with EU access and extensive treaty network.\n\nCyprus: 12.5% corporate tax with IP Box regime offering 2.5% on qualifying IP income.\n\nDubai: 0% corporate tax in free zones with 100% foreign ownership.\n\nEstonia: 0% corporate tax on retained earnings, 20% on distributions.\n\nNetherlands: Ideal for holding structures with extensive treaty network.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading2',
            children: [{
              _type: 'span',
              _key: 'h2-text',
              text: 'Formation Packages'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'packages',
            children: [{
              _type: 'span',
              _key: 'packages-text',
              text: 'Essential Package (from €2,500): Company registration, articles of association, tax registration, and registered office service.\n\nProfessional Package (from €4,500): Everything in Essential plus bank account opening, VAT registration, corporate kit, and first-year compliance.\n\nEnterprise Package (from €7,500): Complete service including complex structures, tax optimization planning, and ongoing advisory support.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading3',
            children: [{
              _type: 'span',
              _key: 'h3-text',
              text: 'Complete Business Support'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'support',
            children: [{
              _type: 'span',
              _key: 'support-text',
              text: '• Corporate bank account opening\n• Ongoing compliance and accounting\n• Legal documentation and contracts\n• Tax optimization strategies\n• Business licensing support\n• Virtual office services'
            }],
            style: 'normal'
          }
        ],
        category: businessCategory ? { _ref: businessCategory._id } : undefined,
        author: defaultAuthor ? { _ref: defaultAuthor._id } : undefined,
        publishedAt: new Date().toISOString(),
        _status: 'published'
      }
    ];

    // Resource Pages Data
    const resourcePages = [
      {
        _type: 'post',
        title: 'International Relocation Guides - Expert Moving Resources',
        slug: { current: 'resources-guides' },
        excerpt: 'Comprehensive guides for international relocation including visa requirements, tax planning, cost of living, and step-by-step moving checklists.',
        content: [
          {
            _type: 'block',
            _key: 'intro',
            children: [{
              _type: 'span',
              _key: 'intro-text',
              text: 'Navigate your international relocation with confidence using our comprehensive collection of expert guides. From visa requirements to tax planning, we provide step-by-step resources for successful international moves.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading1',
            children: [{
              _type: 'span',
              _key: 'h1-text',
              text: 'Featured Relocation Guides'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'featured-guides',
            children: [{
              _type: 'span',
              _key: 'guides-text',
              text: 'Ultimate Golden Visa Guide 2025: Complete comparison of European golden visa programs with investment requirements, processing times, and citizenship paths.\n\nTax Residency Planning Guide: Master international tax planning with our comprehensive guide to tax residency, optimization strategies, and compliance.\n\nCountry-Specific Moving Guides: Detailed guides for relocating to Malta, Cyprus, Portugal, Spain, and Dubai including visa requirements, costs, and practical tips.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading2',
            children: [{
              _type: 'span',
              _key: 'h2-text',
              text: 'Ultimate Moving Checklist'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'checklist',
            children: [{
              _type: 'span',
              _key: 'checklist-text',
              text: '6-12 Months Before:\n• Research destinations and visa requirements\n• Develop tax planning strategy\n• Begin financial planning and budgeting\n• Start visa application process\n\n3-6 Months Before:\n• Submit visa applications\n• Research property and school options\n• Understand healthcare systems\n• Begin preliminary arrangements\n\n1-3 Months Before:\n• Arrange international moving services\n• Set up banking relationships\n• Notify institutions of address changes\n• Finalize arrival logistics'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading3',
            children: [{
              _type: 'span',
              _key: 'h3-text',
              text: 'Guide Categories'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'categories',
            children: [{
              _type: 'span',
              _key: 'categories-text',
              text: 'Visa & Immigration: Comprehensive guides on visa applications, residency permits, and immigration processes including golden visa programs and work permits.\n\nTax Planning: Master international tax strategies, residency planning, and optimization techniques including Non-Dom status and double taxation treaties.\n\nBusiness Setup: Complete guides for international company formation and business establishment including licensing and banking requirements.\n\nPractical Living: Essential information for daily life including housing, healthcare, education, and cultural integration.'
            }],
            style: 'normal'
          }
        ],
        category: businessCategory ? { _ref: businessCategory._id } : undefined,
        author: defaultAuthor ? { _ref: defaultAuthor._id } : undefined,
        publishedAt: new Date().toISOString(),
        _status: 'published'
      },
      {
        _type: 'post',
        title: 'International Relocation Knowledge Base - Expert Resources',
        slug: { current: 'resources-knowledge-base' },
        excerpt: 'Comprehensive knowledge base including visa definitions, tax terms, legal requirements, and expert insights on global mobility.',
        content: [
          {
            _type: 'block',
            _key: 'intro',
            children: [{
              _type: 'span',
              _key: 'intro-text',
              text: 'Access our comprehensive knowledge base featuring essential definitions, expert insights, and detailed explanations of key concepts in international relocation, tax planning, and global mobility.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading1',
            children: [{
              _type: 'span',
              _key: 'h1-text',
              text: 'Visa Types & Immigration Definitions'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'visa-definitions',
            children: [{
              _type: 'span',
              _key: 'visa-text',
              text: 'Golden Visa: A residency-by-investment program granting foreign nationals the right to live, work, and study in exchange for significant economic investment.\n\nPermanent Residency: Legal status allowing indefinite residence and work authorization, typically leading to citizenship eligibility.\n\nDigital Nomad Visa: Temporary residence permit for remote workers and freelancers working for clients in other countries.\n\nFamily Reunification: Immigration process allowing legal residents to bring family members to their country of residence.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading2',
            children: [{
              _type: 'span',
              _key: 'h2-text',
              text: 'Tax Concepts & Planning Terms'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'tax-definitions',
            children: [{
              _type: 'span',
              _key: 'tax-text',
              text: 'Tax Residency: Determination of which country has the right to tax worldwide income, typically based on physical presence (183+ days) or domicile.\n\nNon-Domiciled Status: Tax status allowing residents to pay tax only on income brought into the country rather than worldwide income.\n\nDouble Taxation Treaty: International agreements preventing the same income from being taxed twice, providing relief mechanisms and reduced withholding taxes.\n\nControlled Foreign Corporation (CFC): Anti-avoidance rules requiring residents to pay tax on undistributed income of foreign companies they control.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading3',
            children: [{
              _type: 'span',
              _key: 'h3-text',
              text: 'Country-Specific Programs'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'country-programs',
            children: [{
              _type: 'span',
              _key: 'country-text',
              text: 'Malta MPRP: Malta Permanent Residency Programme offering EU residency through property investment with no minimum stay requirements.\n\nPortugal NHR: Non-Habitual Resident regime providing 10-year tax benefits including exemptions on foreign income.\n\nCyprus Non-Dom: 17-year tax program offering 0% tax on dividends and capital gains with significant tax planning opportunities.'
            }],
            style: 'normal'
          },
          {
            _type: 'block',
            _key: 'heading4',
            children: [{
              _type: 'span',
              _key: 'h4-text',
              text: 'Legal & Business Terms'
            }],
            style: 'h2'
          },
          {
            _type: 'block',
            _key: 'legal-terms',
            children: [{
              _type: 'span',
              _key: 'legal-text',
              text: 'Apostille: Authentication issued to documents for use in Hague Convention countries, confirming authenticity of signatures and seals.\n\nDue Diligence: Investigation and background checks performed before entering agreements, including criminal and financial history verification.\n\nPower of Attorney: Legal document giving one person authority to act for another, often used in international transactions.\n\nBeneficial Ownership: The natural person who ultimately owns or controls a legal entity, required for compliance with transparency laws.'
            }],
            style: 'normal'
          }
        ],
        category: businessCategory ? { _ref: businessCategory._id } : undefined,
        author: defaultAuthor ? { _ref: defaultAuthor._id } : undefined,
        publishedAt: new Date().toISOString(),
        _status: 'published'
      }
    ];

    // Create all service and resource pages
    const allPages = [...servicePages, ...resourcePages];
    
    console.log(`📝 Creating ${allPages.length} service and resource pages...`);

    const results = [];
    for (const page of allPages) {
      try {
        const result = await client.create(page);
        console.log(`✅ Created: ${page.title}`);
        results.push(result);
      } catch (error) {
        console.log(`❌ Failed to create ${page.title}:`, error.message);
      }
    }

    console.log(`\n🎉 Successfully created ${results.length} service and resource pages!`);
    console.log('\n📋 Created pages:');
    results.forEach(page => {
      console.log(`  • ${page.title} (${page.slug.current})`);
    });

  } catch (error) {
    console.error('❌ Error creating pages:', error);
  }
}

createServiceAndResourcePages();