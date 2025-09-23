# Content Publishing Policy for Relocation Quest

## 🎯 Content Mission
Create authoritative, helpful content for individuals and businesses relocating to Cyprus, focusing on practical guidance, tax optimization, and lifestyle insights.

## 📚 Content Categories

### 1. Cyprus Relocation Guides
- **Getting Started**: Visa requirements, residency permits, first steps
- **Living in Cyprus**: Housing, healthcare, education, daily life
- **City Guides**: Limassol, Paphos, Nicosia, Larnaca
- **Cost of Living**: Budgeting, prices, financial planning

### 2. Tax & Business
- **Tax Benefits**: Cyprus tax system, advantages for residents
- **Company Formation**: Setting up a Cyprus company
- **Non-Dom Status**: Requirements and benefits
- **Banking**: Opening accounts, financial services

### 3. Lifestyle & Culture
- **Cyprus Culture**: Traditions, customs, language
- **Activities**: Beaches, mountains, sports, entertainment
- **Food & Dining**: Local cuisine, restaurants, markets
- **Networking**: Business communities, expat groups

### 4. Practical Guides
- **Transportation**: Cars, public transport, licenses
- **Utilities**: Internet, electricity, water setup
- **Legal Matters**: Lawyers, contracts, property
- **Emergency Info**: Healthcare, safety, contacts

## 📝 Article Structure

```markdown
# [Compelling Title]

## Introduction (50-100 words)
- Hook the reader
- State the problem/need
- Preview the solution

## Main Content (800-1500 words)
- Clear subheadings
- Practical information
- Real examples
- Actionable steps

## Key Takeaways
- Bullet points
- Main insights
- Action items

## Resources
- Official links
- Related articles
- Contact information
```

## 🤖 MCP Content Creation Commands

### Create a New Article
```javascript
// In Claude Desktop with MCP
Create a blog post titled '[Title]' with slug '[slug]'. 
The body should contain:
- Introduction about [topic]
- Section on [key point 1]
- Section on [key point 2]
- Practical tips for [specific need]
- Conclusion with next steps
Include internal links to related articles.
```

### Update Existing Article
```javascript
// Find article first
Query: *[_type == "post" && slug.current == "[slug]"][0]

// Then update
Update document with id '[document-id]':
- Add new section about [topic]
- Update statistics to 2025 data
- Add link to [related-article]
```

### Publish Draft
```javascript
Publish document with id '[document-id]'
```

## 📅 Publishing Schedule

### Daily Content (Mon-Fri)
- **Monday**: Tax/Business topic
- **Tuesday**: Lifestyle/Culture
- **Wednesday**: Practical guide
- **Thursday**: City spotlight
- **Friday**: Week recap/resources

### Content Pipeline
1. **Draft**: Create in Sanity Studio
2. **Review**: Check facts, links, formatting
3. **Optimize**: SEO title, meta description
4. **Publish**: Make live
5. **Promote**: Share on channels

## ✍️ Writing Guidelines

### Tone & Voice
- **Professional** but approachable
- **Informative** without being dry
- **Practical** over theoretical
- **Encouraging** about Cyprus benefits

### SEO Optimization
- **Title**: Include "Cyprus" + main keyword
- **URL Slug**: Short, descriptive, keyword-rich
- **Meta Description**: 150-160 characters
- **Headers**: Use H2/H3 with keywords
- **Internal Links**: 2-3 per article
- **Images**: Alt text with descriptions

### Quality Standards
- ✅ Fact-checked information
- ✅ Current (2024-2025) data
- ✅ Official sources linked
- ✅ Mobile-friendly formatting
- ✅ No grammar/spelling errors

## 🔗 Internal Linking Strategy

### Link Types
1. **Related Topics**: Similar content
2. **Next Steps**: Logical progression
3. **Prerequisites**: Required reading
4. **Deep Dives**: Detailed explanations

### Example Link Structure
```
/articles/cyprus-residency-guide → /articles/non-dom-status
/articles/non-dom-status → /articles/tax-benefits
/articles/limassol-guide → /articles/cyprus-real-estate
```

## 📊 Content Performance Metrics

### Track These KPIs
- Page views per article
- Time on page (target: 3+ minutes)
- Bounce rate (target: <50%)
- Internal link clicks
- Contact form submissions

## 🚀 Quick Article Templates

### Tax Guide Template
```markdown
# [Tax Topic] in Cyprus: Complete Guide for [Year]

Learn how [benefit] can save you [amount/percentage] when relocating to Cyprus.

## What is [Tax Topic]?
[Definition and context]

## Benefits for Cyprus Residents
- Benefit 1: [Details]
- Benefit 2: [Details]
- Benefit 3: [Details]

## Requirements
[List of requirements]

## How to Apply
[Step-by-step process]

## Common Questions
[FAQs with answers]

## Next Steps
[Call to action]
```

### City Guide Template
```markdown
# Living in [City]: Essential Guide for Expats

Discover why [City] is perfect for [target audience].

## Overview of [City]
[Introduction to the city]

## Best Neighborhoods
### [Neighborhood 1]
- Character: [Description]
- Price range: [€X - €Y]
- Best for: [Target group]

## Cost of Living
[Detailed breakdown]

## Getting Around
[Transportation options]

## Community & Networking
[Expat groups and resources]

## Conclusion
[Summary and CTA]
```

## 🔧 Sanity Studio Access

- **Local**: http://localhost:4321/studio
- **Production**: https://relocation.quest/studio
- **Project ID**: bc08ijz6
- **Dataset**: production

## 📱 Content Distribution

1. **Website**: Primary channel
2. **Newsletter**: Weekly digest
3. **Social Media**: LinkedIn, Twitter
4. **Partners**: Cross-posting opportunities

---
Last Updated: 2025-09-23
Ready for automated content creation!