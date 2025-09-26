import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'marketInsight',
  title: 'Market Insight',
  type: 'document',
  icon: () => '📊',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    }),
    defineField({
      name: 'category',
      title: 'Insight Category',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Market Analysis', value: 'market-analysis'},
          {title: 'Fundraising Trends', value: 'fundraising-trends'},
          {title: 'LP Sentiment', value: 'lp-sentiment'},
          {title: 'Regulatory Update', value: 'regulatory'},
          {title: 'Industry News', value: 'industry-news'},
          {title: 'Agent Rankings', value: 'agent-rankings'},
          {title: 'Fee Analysis', value: 'fee-analysis'},
          {title: 'Deal Flow', value: 'deal-flow'}
        ]
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary for listings',
      validation: Rule => Rule.max(300)
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ]
        },
        {
          type: 'image',
          options: {hotspot: true}
        }
      ]
    }),
    defineField({
      name: 'relatedAgents',
      title: 'Related Placement Agents',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'placementAgent'}]
      }]
    }),
    defineField({
      name: 'relatedDeals',
      title: 'Related Deals',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'fundDeal'}]
      }]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'dataPoints',
      title: 'Key Data Points',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'label', type: 'string', title: 'Label'},
          {name: 'value', type: 'string', title: 'Value'},
          {name: 'trend', type: 'string', title: 'Trend', options: {
            list: ['up', 'down', 'stable']
          }}
        ]
      }]
    }),
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Source Name'},
          {name: 'url', type: 'url', title: 'Source URL'}
        ]
      }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      date: 'publishedAt',
      media: 'featuredImage'
    },
    prepare(selection) {
      const {title, subtitle, date} = selection
      return {
        title: title,
        subtitle: `${subtitle} • ${date ? new Date(date).toLocaleDateString() : 'Draft'}`,
        media: selection.media || (() => '📊')
      }
    }
  }
})