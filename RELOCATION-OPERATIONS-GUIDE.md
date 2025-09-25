# RELOCATION QUEST - OPERATIONS GUIDE

## 🎯 Content Management & Operations

### Current Content State (September 2025)
- **91+ articles** with complete SEO optimization  
- **14 topical categories** (no geographic categories)
- **Enhanced Sanity schema** with AI-friendly field descriptions
- **100% SEO completion** (titles, descriptions, keywords, tags)
- **Automated content publishing** via Vercel cron jobs

## 📝 Content Creation Workflow

### 1. Article Creation Process
1. **Create in Sanity Studio**: https://relocation.quest/studio
2. **Required Fields**: Title, slug, excerpt, main image, body content
3. **SEO Fields**: Auto-generated or manually customized
4. **Category Assignment**: Choose appropriate topical category
5. **Author Assignment**: Required for credibility
6. **Publishing**: Set publishedAt for immediate publish, or leave empty for draft

### 2. Automated SEO Generation
All articles automatically receive:
- **SEO Title**: Optimized <60 characters with keyword focus
- **Meta Description**: <160 characters with focus keyword
- **Focus Keyword**: Extracted from title and content context
- **Tags**: Auto-generated based on content and location
- **Published Date**: Randomly set 1-30 days ago for realistic distribution

### 3. Category Organization (Topic-Based)
**Current Categories:**
- **Golden Visa** - Residency by investment programs
- **Business & Investment** - Company setup, investment opportunities  
- **Digital Nomad** - Remote work visas and lifestyle
- **Tax & Finance** - Tax optimization and financial planning
- **Healthcare & Education** - Expat services and systems
- **Lifestyle & Culture** - Living experiences and cultural guides
- **Residency & Immigration** - General immigration processes
- **Country-Specific** (where appropriate): Malta, Portugal, Saint Kitts, Singapore

**Geographic Content Location:**
- Countries featured in "Popular Destinations" section on homepage
- No separate category pages for countries
- Country-specific articles categorized by their primary topic

## 🤖 Automated Content Publishing

### Vercel Cron Jobs (Fully Operational)
1. **Publish Content**: Every 6 hours (00:00, 06:00, 12:00, 18:00 UTC)
   - Endpoint: `/api/cron/publish-content`
   - Publishes up to 3 draft articles per run
   - Sets publishedAt timestamp

2. **Daily Content Creation**: Daily at 9 AM UTC  
   - Endpoint: `/api/cron/daily-content`
   - Creates 2-3 new articles from templates
   - Focuses on high-priority topics and countries

3. **Weekly Review**: Mondays at 10 AM UTC
   - Endpoint: `/api/cron/weekly-review`  
   - Generates content health reports
   - Provides optimization recommendations

### Manual Content Operations
```bash
# Auto-categorize uncategorized articles
SANITY_API_TOKEN="token" node scripts/auto-categorize-articles.js

# Generate SEO data for articles missing it
SANITY_API_TOKEN="token" node scripts/auto-generate-seo-data.js

# Check article categorization status
SANITY_API_TOKEN="token" node scripts/check-article-categories.js

# Analyze article field completeness
SANITY_API_TOKEN="token" node scripts/analyze-article-fields.js
```

## 🎨 Content Templates & Guidelines

### Article Structure Requirements
1. **Title**: Clear, descriptive, includes target location/topic
2. **Excerpt**: 2-3 sentences highlighting key benefits and target audience
3. **Featured Image**: 1200x630px recommended, relevant to topic
4. **Content Structure**:
   - Introduction (hook + overview)
   - 3-5 main sections with H2 headings
   - Practical information (requirements, costs, timelines)
   - Call-to-action or next steps
5. **Word Count**: Minimum 800 words, target 1200-1500 words

### Content Quality Standards
- **Expertise**: Cite official government sources where possible
- **Accuracy**: Update with latest program requirements and dates
- **Practical Value**: Include specific steps, requirements, and costs
- **SEO Optimization**: Natural keyword integration, descriptive headings
- **User Intent**: Address common questions and pain points

### Content Prioritization
**High Priority Topics:**
- Golden Visa programs with active investment thresholds
- Tax optimization strategies for digital nomads
- Business setup in popular jurisdictions
- Recent immigration policy changes

**Medium Priority Topics:**
- Lifestyle guides for established expat destinations
- Education and healthcare system overviews
- Cultural adaptation and practical living advice

## 🔧 Technical Operations

### Content Scripts Documentation
Located in `/scripts/` directory:

1. **auto-categorize-articles.js**
   - Intelligently categorizes articles based on title/content
   - Focuses on topical categorization, not geographic
   - Handles edge cases and special content types

2. **auto-generate-seo-data.js**  
   - Generates complete SEO metadata for all articles
   - Creates focus keywords, meta descriptions, tags
   - Sets realistic published dates for content freshness

3. **check-article-categories.js**
   - Validates article categorization
   - Reports uncategorized content
   - Suggests appropriate categories

4. **remove-country-categories.js**
   - Removes geographic categories (completed)
   - Moves articles to appropriate topical categories
   - Maintains content organization integrity

### Enhanced Sanity Schema Features
- **Comprehensive field descriptions** for all content types
- **Organized fieldsets**: Content, Media, SEO, Taxonomy, Publishing
- **Enhanced validation** with helpful error messages
- **Rich preview configurations** with status indicators
- **AI-friendly context** for better content generation assistance

## 📊 Performance Monitoring

### Content Metrics to Track
- **Publishing Rate**: Target 12-18 articles per week
- **SEO Completion**: Maintain 100% metadata completion
- **Category Balance**: Even distribution across topic areas
- **Content Freshness**: Regular updates to popular articles

### Quality Assurance Checklist
- [ ] All articles have featured images with alt text
- [ ] SEO metadata complete and optimized
- [ ] Proper category assignment (topical, not geographic)
- [ ] Author assignment for credibility
- [ ] External links to authoritative sources
- [ ] Content structure with proper headings
- [ ] Mobile-responsive formatting

### Automation Health Checks
```bash
# Check cron job status
VERCEL_TOKEN="token" npx vercel logs https://relocation.quest --token $VERCEL_TOKEN

# Test cron endpoints manually
curl -X POST https://relocation.quest/api/cron/publish-content \
  -H "Authorization: Bearer $CRON_SECRET"

# Verify environment variables
VERCEL_TOKEN="token" npx vercel env ls --token $VERCEL_TOKEN
```

## 🚀 Content Strategy

### Target Audience Segments
1. **High-Net-Worth Individuals** - Golden visa and citizenship programs
2. **Digital Nomads** - Remote work visas and tax optimization
3. **Business Owners** - Company setup and investment opportunities
4. **Expat Families** - Education, healthcare, and lifestyle guidance
5. **Retirees** - Residency programs and cost-of-living analysis

### Content Distribution Strategy
- **Homepage**: Popular destinations with visual country cards
- **Category Pages**: Topical content organization for easy discovery
- **Article Cross-Links**: Related content suggestions within articles
- **SEO Optimization**: Focus keywords targeting search intent
- **Social Sharing**: Optimized meta tags for platform previews

### Future Content Opportunities
- **Video Integration**: Country spotlights and process walkthroughs
- **Interactive Tools**: Cost calculators and requirements checkers
- **Expert Interviews**: Immigration lawyers and tax advisors
- **Case Studies**: Real relocation success stories
- **Policy Updates**: Breaking news on immigration changes

---

## 📋 Quick Reference

### Essential URLs
- **Live Site**: https://relocation.quest
- **Sanity Studio**: https://relocation.quest/studio
- **Vercel Dashboard**: https://vercel.com/londondannyboys-projects/relocation-quest

### Key File Locations
- **Content Scripts**: `/scripts/`
- **API Endpoints**: `/src/pages/api/`
- **Sanity Schema**: `/sanity.config.ts`
- **Environment Config**: `/vercel.json`

### Emergency Procedures
- **Build Failures**: Check TypeScript errors and imports
- **Cron Job Issues**: Verify authentication and rate limits
- **Content Issues**: Use manual scripts for immediate fixes
- **Schema Problems**: Test changes in Studio before deployment

---
**Last Updated**: September 25, 2025  
**Status**: ✅ Fully Operational - All Systems Active