// Simple script to deploy Sanity schemas for placement-quest
// Project ID: 7gr5b7wx

const schemas = [
  {
    name: 'placementAgent',
    title: 'Placement Agent',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Agent Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'headquarters',
        title: 'Headquarters',
        type: 'string'
      },
      {
        name: 'foundedYear',
        title: 'Founded Year',
        type: 'number'
      },
      {
        name: 'teamSize',
        title: 'Team Size',
        type: 'number'
      },
      {
        name: 'aumRaised',
        title: 'Total AUM Raised (Billions)',
        type: 'number'
      },
      {
        name: 'specializations',
        title: 'Specializations',
        type: 'array',
        of: [{type: 'string'}]
      }
    ]
  },
  {
    name: 'fundDeal',
    title: 'Fund Deal',
    type: 'document',
    fields: [
      {
        name: 'fundName',
        title: 'Fund Name',
        type: 'string'
      },
      {
        name: 'targetSize',
        title: 'Target Size (Millions)',
        type: 'number'
      },
      {
        name: 'placementAgent',
        title: 'Placement Agent',
        type: 'reference',
        to: [{type: 'placementAgent'}]
      },
      {
        name: 'closeDate',
        title: 'Close Date',
        type: 'date'
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: ['Active', 'Closed', 'First Close', 'Final Close']
        }
      }
    ]
  },
  {
    name: 'lpInvestor',
    title: 'LP Investor',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'LP Name',
        type: 'string'
      },
      {
        name: 'type',
        title: 'Investor Type',
        type: 'string',
        options: {
          list: ['Pension Fund', 'Endowment', 'Foundation', 'Insurance Company', 'Family Office', 'Fund of Funds']
        }
      },
      {
        name: 'aum',
        title: 'AUM (Billions)',
        type: 'number'
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string'
      },
      {
        name: 'preferences',
        title: 'Investment Preferences',
        type: 'array',
        of: [{type: 'string'}]
      }
    ]
  },
  {
    name: 'marketInsight',
    title: 'Market Insight',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title'
        }
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: ['Fundraising Trends', 'Agent Analysis', 'Market Update', 'LP Insights', 'Deal News']
        }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}]
      }
    ]
  },
  {
    name: 'jobOpportunity',
    title: 'Job Opportunity',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Job Title',
        type: 'string'
      },
      {
        name: 'company',
        title: 'Company',
        type: 'reference',
        to: [{type: 'placementAgent'}]
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string'
      },
      {
        name: 'level',
        title: 'Level',
        type: 'string',
        options: {
          list: ['Analyst', 'Associate', 'Vice President', 'Director', 'Managing Director', 'Partner']
        }
      },
      {
        name: 'description',
        title: 'Job Description',
        type: 'text'
      },
      {
        name: 'requirements',
        title: 'Requirements',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'postedDate',
        title: 'Posted Date',
        type: 'date'
      },
      {
        name: 'active',
        title: 'Active',
        type: 'boolean',
        initialValue: true
      }
    ]
  }
];

console.log('Placement Quest Sanity Schemas defined successfully!');
console.log('Total schemas:', schemas.length);
console.log('Schema names:', schemas.map(s => s.name).join(', '));
console.log('\nTo deploy these schemas:');
console.log('1. Create a new Sanity project or use existing project ID: 7gr5b7wx');
console.log('2. Copy these schema definitions to your schemas folder');
console.log('3. Run: npx sanity deploy');