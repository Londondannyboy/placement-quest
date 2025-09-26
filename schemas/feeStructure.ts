import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feeStructure',
  title: 'Fee Structure',
  type: 'document',
  icon: () => '💵',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Standard Placement Agent Fees 2025"',
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
      name: 'agentType',
      title: 'Agent Type',
      type: 'string',
      options: {
        list: [
          {title: 'Bulge Bracket', value: 'bulge-bracket'},
          {title: 'Mid-Market', value: 'mid-market'},
          {title: 'Boutique', value: 'boutique'},
          {title: 'Regional', value: 'regional'}
        ]
      }
    }),
    defineField({
      name: 'fundSizeRange',
      title: 'Fund Size Range',
      type: 'object',
      fields: [
        {name: 'min', type: 'string', title: 'Minimum (e.g., "$100M")'},
        {name: 'max', type: 'string', title: 'Maximum (e.g., "$1B")'}
      ]
    }),
    defineField({
      name: 'baseFee',
      title: 'Base Fee',
      type: 'object',
      fields: [
        {name: 'percentage', type: 'number', title: 'Percentage (e.g., 2 for 2%)'},
        {name: 'description', type: 'string', title: 'Description'}
      ]
    }),
    defineField({
      name: 'tieredStructure',
      title: 'Tiered Fee Structure',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'threshold', type: 'string', title: 'Threshold (e.g., "First $500M")'},
          {name: 'percentage', type: 'number', title: 'Fee Percentage'},
          {name: 'notes', type: 'string', title: 'Notes'}
        ]
      }]
    }),
    defineField({
      name: 'retainerFee',
      title: 'Retainer Fee',
      type: 'object',
      fields: [
        {name: 'amount', type: 'string', title: 'Amount (e.g., "$25,000/month")'},
        {name: 'creditable', type: 'boolean', title: 'Creditable Against Success Fee?'},
        {name: 'description', type: 'text', title: 'Description', rows: 2}
      ]
    }),
    defineField({
      name: 'additionalFees',
      title: 'Additional Fees',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'type', type: 'string', title: 'Fee Type'},
          {name: 'amount', type: 'string', title: 'Amount'},
          {name: 'description', type: 'text', title: 'Description', rows: 2}
        ]
      }]
    }),
    defineField({
      name: 'paymentTerms',
      title: 'Payment Terms',
      type: 'text',
      rows: 3,
      description: 'When and how fees are paid'
    }),
    defineField({
      name: 'marketComparison',
      title: 'Market Comparison',
      type: 'string',
      options: {
        list: [
          {title: 'Below Market', value: 'below'},
          {title: 'Market Rate', value: 'market'},
          {title: 'Above Market', value: 'above'},
          {title: 'Premium', value: 'premium'}
        ]
      }
    }),
    defineField({
      name: 'notes',
      title: 'Additional Notes',
      type: 'text',
      rows: 4
    })
  ],
  preview: {
    select: {
      title: 'title',
      agentType: 'agentType',
      baseFee: 'baseFee.percentage'
    },
    prepare(selection) {
      const {title, agentType, baseFee} = selection
      return {
        title: title,
        subtitle: `${agentType || 'General'} • ${baseFee ? `${baseFee}% base` : 'Custom structure'}`,
        media: () => '💵'
      }
    }
  }
})