import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lpInvestor',
  title: 'LP Investor',
  type: 'document',
  icon: () => '🏦',
  fields: [
    defineField({
      name: 'name',
      title: 'LP Name',
      type: 'string',
      description: 'Full institution name (e.g., "CalPERS", "Yale Endowment")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      }
    }),
    defineField({
      name: 'type',
      title: 'Investor Type',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Pension Fund', value: 'pension'},
          {title: 'Sovereign Wealth Fund', value: 'swf'},
          {title: 'Endowment', value: 'endowment'},
          {title: 'Foundation', value: 'foundation'},
          {title: 'Insurance Company', value: 'insurance'},
          {title: 'Family Office', value: 'family-office'},
          {title: 'Fund of Funds', value: 'fof'},
          {title: 'Bank', value: 'bank'},
          {title: 'Corporate', value: 'corporate'}
        ]
      }
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Headquarters location'
    }),
    defineField({
      name: 'aum',
      title: 'Total AUM',
      type: 'string',
      description: 'Total assets under management (e.g., "$450 billion")'
    }),
    defineField({
      name: 'alternativesAllocation',
      title: 'Alternatives Allocation',
      type: 'string',
      description: 'Percentage or amount allocated to alternatives (e.g., "15%" or "$50B")'
    }),
    defineField({
      name: 'peAllocation',
      title: 'Private Equity Allocation',
      type: 'string',
      description: 'Specific PE allocation'
    }),
    defineField({
      name: 'preferredAssetClasses',
      title: 'Preferred Asset Classes',
      type: 'array',
      of: [{
        type: 'string',
        options: {
          list: [
            {title: 'Buyout', value: 'buyout'},
            {title: 'Growth Equity', value: 'growth'},
            {title: 'Venture Capital', value: 'vc'},
            {title: 'Real Estate', value: 'real-estate'},
            {title: 'Infrastructure', value: 'infrastructure'},
            {title: 'Private Credit', value: 'private-credit'},
            {title: 'Secondaries', value: 'secondaries'}
          ]
        }
      }]
    }),
    defineField({
      name: 'geographicPreferences',
      title: 'Geographic Preferences',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Regions they prefer to invest in'
    }),
    defineField({
      name: 'minimumCheckSize',
      title: 'Minimum Check Size',
      type: 'string',
      description: 'Typical minimum commitment (e.g., "$25 million")'
    }),
    defineField({
      name: 'maximumCheckSize',
      title: 'Maximum Check Size',
      type: 'string',
      description: 'Typical maximum commitment'
    }),
    defineField({
      name: 'keyContacts',
      title: 'Key Contacts',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Name'},
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'email', type: 'email', title: 'Email'},
          {name: 'phone', type: 'string', title: 'Phone'}
        ]
      }]
    }),
    defineField({
      name: 'investmentCriteria',
      title: 'Investment Criteria',
      type: 'text',
      rows: 4,
      description: 'Key requirements and preferences for fund investments'
    }),
    defineField({
      name: 'notableInvestments',
      title: 'Notable Fund Investments',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of known fund investments'
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url'
    }),
    defineField({
      name: 'active',
      title: 'Currently Active',
      type: 'boolean',
      description: 'Is this LP actively investing?',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      aum: 'aum',
      location: 'location'
    },
    prepare(selection) {
      const {title, subtitle, aum, location} = selection
      return {
        title: title,
        subtitle: `${subtitle} • ${location} • ${aum || 'AUM not disclosed'}`,
        media: () => '🏦'
      }
    }
  }
})