import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fundDeal',
  title: 'Fund Deal',
  type: 'document',
  icon: () => '💰',
  fields: [
    defineField({
      name: 'fundName',
      title: 'Fund Name',
      type: 'string',
      description: 'Full fund name (e.g., "Blackstone Capital Partners VIII")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'fundName',
        maxLength: 96,
      }
    }),
    defineField({
      name: 'gpName',
      title: 'GP (General Partner) Name',
      type: 'string',
      description: 'Fund manager name (e.g., "Blackstone")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'placementAgent',
      title: 'Placement Agent',
      type: 'reference',
      to: [{type: 'placementAgent'}],
      description: 'The placement agent who advised on this deal'
    }),
    defineField({
      name: 'fundSize',
      title: 'Fund Size',
      type: 'string',
      description: 'Total fund size (e.g., "$8.5 billion")'
    }),
    defineField({
      name: 'closingDate',
      title: 'Closing Date',
      type: 'date',
      description: 'Date of final close'
    }),
    defineField({
      name: 'assetClass',
      title: 'Asset Class',
      type: 'string',
      options: {
        list: [
          {title: 'Private Equity', value: 'private-equity'},
          {title: 'Real Estate', value: 'real-estate'},
          {title: 'Infrastructure', value: 'infrastructure'},
          {title: 'Private Credit', value: 'private-credit'},
          {title: 'Venture Capital', value: 'venture-capital'},
          {title: 'Growth Equity', value: 'growth-equity'}
        ]
      }
    }),
    defineField({
      name: 'geography',
      title: 'Geographic Focus',
      type: 'string',
      options: {
        list: [
          {title: 'North America', value: 'north-america'},
          {title: 'Europe', value: 'europe'},
          {title: 'Asia Pacific', value: 'asia-pacific'},
          {title: 'Global', value: 'global'},
          {title: 'Emerging Markets', value: 'emerging-markets'}
        ]
      }
    }),
    defineField({
      name: 'targetReturn',
      title: 'Target Return',
      type: 'string',
      description: 'Target IRR or multiple (e.g., "20% IRR", "2.0x MOIC")'
    }),
    defineField({
      name: 'minimumCommitment',
      title: 'Minimum LP Commitment',
      type: 'string',
      description: 'Minimum investment amount (e.g., "$10 million")'
    }),
    defineField({
      name: 'dealHighlights',
      title: 'Deal Highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Key selling points of the fund'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Brief overview of the fund and its strategy'
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'In Market', value: 'in-market'},
          {title: 'First Close', value: 'first-close'},
          {title: 'Final Close', value: 'final-close'},
          {title: 'Closed', value: 'closed'}
        ]
      }
    })
  ],
  preview: {
    select: {
      title: 'fundName',
      subtitle: 'gpName',
      fundSize: 'fundSize',
      status: 'status',
      date: 'closingDate'
    },
    prepare(selection) {
      const {title, subtitle, fundSize, status, date} = selection
      const year = date ? new Date(date).getFullYear() : 'TBD'
      return {
        title: title,
        subtitle: `${subtitle} • ${fundSize || 'TBD'} • ${year}`,
        media: () => '💰'
      }
    }
  }
})