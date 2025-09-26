import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'placementAgent',
  title: 'Placement Agent',
  type: 'document',
  icon: () => '🏢',
  fieldsets: [
    {
      name: 'basicInfo',
      title: 'Basic Information',
      options: { collapsible: false }
    },
    {
      name: 'metrics',
      title: 'Performance Metrics',
      options: { collapsible: true }
    },
    {
      name: 'services',
      title: 'Services & Focus',
      options: { collapsible: true }
    },
    {
      name: 'team',
      title: 'Team & Leadership',
      options: { collapsible: true }
    },
    {
      name: 'media',
      title: 'Media & Assets',
      options: { collapsible: true }
    }
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Agent Name',
      type: 'string',
      description: 'Full company name (e.g., "Campbell Lutyens", "Park Hill Group")',
      fieldset: 'basicInfo',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'URL-friendly version for agent profile pages',
      fieldset: 'basicInfo',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief overview for listings (max 200 chars)',
      fieldset: 'basicInfo',
      rows: 3,
      validation: Rule => Rule.max(200)
    }),
    defineField({
      name: 'headquarters',
      title: 'Headquarters',
      type: 'string',
      description: 'Primary office location (e.g., "London", "New York")',
      fieldset: 'basicInfo'
    }),
    defineField({
      name: 'founded',
      title: 'Founded Year',
      type: 'number',
      description: 'Year the firm was established',
      fieldset: 'basicInfo',
      validation: Rule => Rule.min(1900).max(new Date().getFullYear())
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'Official company website',
      fieldset: 'basicInfo'
    }),
    
    // Metrics
    defineField({
      name: 'totalRaised',
      title: 'Total Capital Raised',
      type: 'string',
      description: 'Total AUM raised (e.g., "$488B+")',
      fieldset: 'metrics'
    }),
    defineField({
      name: 'dealsCompleted',
      title: 'Deals Completed',
      type: 'number',
      description: 'Number of successful fund closings',
      fieldset: 'metrics'
    }),
    defineField({
      name: 'globalOffices',
      title: 'Number of Global Offices',
      type: 'number',
      fieldset: 'metrics'
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'number',
      description: 'Total number of professionals',
      fieldset: 'metrics'
    }),
    defineField({
      name: 'ranking',
      title: 'Industry Ranking',
      type: 'number',
      description: 'Position in industry rankings (1 = top)',
      fieldset: 'metrics',
      validation: Rule => Rule.min(1).max(100)
    }),
    
    // Services
    defineField({
      name: 'assetClasses',
      title: 'Asset Classes',
      type: 'array',
      description: 'Types of funds they place',
      fieldset: 'services',
      of: [{
        type: 'string',
        options: {
          list: [
            {title: 'Private Equity', value: 'private-equity'},
            {title: 'Real Estate', value: 'real-estate'},
            {title: 'Infrastructure', value: 'infrastructure'},
            {title: 'Private Credit', value: 'private-credit'},
            {title: 'Venture Capital', value: 'venture-capital'},
            {title: 'Hedge Funds', value: 'hedge-funds'},
            {title: 'Secondaries', value: 'secondaries'},
            {title: 'Growth Equity', value: 'growth-equity'},
            {title: 'Fund of Funds', value: 'fund-of-funds'}
          ]
        }
      }]
    }),
    defineField({
      name: 'geographicFocus',
      title: 'Geographic Focus',
      type: 'array',
      description: 'Regions where they operate',
      fieldset: 'services',
      of: [{
        type: 'string',
        options: {
          list: [
            {title: 'North America', value: 'north-america'},
            {title: 'Europe', value: 'europe'},
            {title: 'Asia Pacific', value: 'asia-pacific'},
            {title: 'Middle East', value: 'middle-east'},
            {title: 'Latin America', value: 'latin-america'},
            {title: 'Africa', value: 'africa'},
            {title: 'Global', value: 'global'}
          ]
        }
      }]
    }),
    defineField({
      name: 'fundSizeRange',
      title: 'Typical Fund Size Range',
      type: 'object',
      fieldset: 'services',
      fields: [
        {name: 'min', type: 'string', title: 'Minimum (e.g., "$100M")'},
        {name: 'max', type: 'string', title: 'Maximum (e.g., "$10B+")'}
      ]
    }),
    defineField({
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      fieldset: 'services',
      of: [{
        type: 'string',
        options: {
          list: [
            {title: 'Full Placement', value: 'full-placement'},
            {title: 'Advisory', value: 'advisory'},
            {title: 'Co-investments', value: 'co-investments'},
            {title: 'Secondary Advisory', value: 'secondary-advisory'},
            {title: 'GP Stakes', value: 'gp-stakes'},
            {title: 'Continuation Funds', value: 'continuation-funds'}
          ]
        }
      }]
    }),
    
    // Team
    defineField({
      name: 'keyPeople',
      title: 'Key People',
      type: 'array',
      fieldset: 'team',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Name', validation: Rule => Rule.required()},
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'linkedIn', type: 'url', title: 'LinkedIn URL'},
          {name: 'bio', type: 'text', title: 'Short Bio', rows: 3}
        ]
      }]
    }),
    
    // Media
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      fieldset: 'media',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'officeImages',
      title: 'Office Images',
      type: 'array',
      fieldset: 'media',
      of: [{type: 'image', options: {hotspot: true}}]
    }),
    
    // Content
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      description: 'Detailed company overview and history',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ]
        }
      ]
    }),
    defineField({
      name: 'recentDeals',
      title: 'Recent Notable Deals',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'fundDeal'}]
      }]
    }),
    defineField({
      name: 'feeStructure',
      title: 'Typical Fee Structure',
      type: 'text',
      description: 'General fee information (keep confidential details private)',
      rows: 3
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'headquarters',
      media: 'logo',
      ranking: 'ranking',
      totalRaised: 'totalRaised'
    },
    prepare(selection) {
      const {title, subtitle, ranking, totalRaised} = selection
      return {
        title: `${ranking ? `#${ranking} ` : ''}${title}`,
        subtitle: `${subtitle} • ${totalRaised || 'No data'}`,
        media: selection.media
      }
    }
  }
})