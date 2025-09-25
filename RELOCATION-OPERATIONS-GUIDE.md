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

## 🎬 Mux Video Integration

### Video Hero Components
The platform uses Mux Player v2 for professional video streaming with:
- **Connection-aware quality** (2G→360p, 4G+→1080p)
- **Mobile optimizations** (muted, autoplay, playsinline)
- **Country-specific videos** with unique playback IDs

### Country Video Playback IDs
```javascript
const countryVideos = {
  cyprus: 'ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM',
  dubai: '5br2hylJ4F009vDLHrxWZ3C7UDTw5901GcXYBjSOWNV8k',
  portugal: 'Oy1LRvO5eSoXGUTthBNS13r007WorSyGvf2YLh1keA5E',
  malta: 'aeX9W002bzUWYKu3Ryln4hLVAplzOm7DfUKm3iZqGGz00',
  singapore: 'dCBAYhMsKX7v00HaI1gHsW8tMI2HZDLlb01KJv5hGkpkI',
  caribbean: '021dUb7I5L2G9dDKBWup4efv9Sxh7ZNAtElSbYkN8C2k'
}
```

### Article Video Implementation (Planned)
To add videos to articles:

1. **Sanity Schema Update** - Add heroVideo field:
```javascript
{
  name: 'heroVideo',
  title: 'Hero Video (Optional)',
  type: 'object',
  fields: [
    {
      name: 'muxPlaybackId',
      title: 'Mux Playback ID',
      type: 'string'
    }
  ]
}
```

2. **Country-Specific Logic** - Auto-select video based on content:
- Cyprus articles → Cyprus video
- Dubai articles → Dubai video
- Etc.

3. **Video Requirements**
- Always use Playback IDs (NOT Asset IDs)
- Include muted, autoplay, playsinline for mobile
- Provide fallback images for failed loads

## 🤖 Automated Content Publishing (Fully Operational)

### System Overview
**Status**: ✅ **FULLY OPERATIONAL** - Running since September 2024

The project uses Vercel Cron Jobs for automated content publishing, running every 6 hours to maintain consistent content flow and SEO optimization.

### Cron Jobs Configuration

#### 1. **Publish Content** (Every 6 Hours)
- **Schedule**: `0 */6 * * *` (00:00, 06:00, 12:00, 18:00 UTC)
- **Endpoint**: `/api/cron/publish-content`
- **Function**: Publishes draft articles (max 3 per run)
- **Rate Limiting**: 60-second timeout, respects Sanity API limits

#### 2. **Daily Content Creation** (Daily 9 AM UTC)  
- **Schedule**: `0 9 * * *`
- **Endpoint**: `/api/cron/daily-content`
- **Function**: Creates 2-3 new articles from templates
- **Content Focus**: High-priority countries and topics

#### 3. **Weekly Review** (Mondays 10 AM UTC)
- **Schedule**: `0 10 * * 1`  
- **Endpoint**: `/api/cron/weekly-review`
- **Function**: Generates content health reports and analytics
- **Output**: Performance statistics and optimization recommendations

### Implementation Details

#### Vercel Configuration (`/vercel.json`)
```json
{
  "crons": [
    {
      "path": "/api/cron/publish-content",
      "schedule": "0 */6 * * *"
    },
    {
      "path": "/api/cron/daily-content", 
      "schedule": "0 9 * * *"
    },
    {
      "path": "/api/cron/weekly-review",
      "schedule": "0 10 * * 1"
    }
  ]
}
```

#### Security & Authentication
All endpoints require `CRON_SECRET` authentication:
```typescript
const authHeader = request.headers.get('authorization');
if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  return new Response('Unauthorized', { status: 401 });
}
```

### API Endpoints (Location: `/src/pages/api/cron/`)

#### `/api/cron/publish-content.ts`
- Queries unpublished articles from Sanity
- Sets `publishedAt` timestamp for up to 3 articles
- Returns success/error statistics
- Maintains publishing schedule consistency

#### `/api/cron/daily-content.ts`
- Uses content templates for article generation
- Focuses on high-priority topics (Golden Visa, Tax, Business)
- Creates 2-3 articles daily with SEO optimization
- Avoids duplicate content with intelligent checks

#### `/api/cron/weekly-review.ts`
- Calculates weekly publishing statistics
- Identifies content gaps and opportunities
- Provides health score and recommendations
- Monitors automation system performance

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

### Manual Trigger Commands
```bash
# Test publish content endpoint
curl -X POST https://relocation.quest/api/cron/publish-content \
  -H "Authorization: Bearer $CRON_SECRET"

# Test daily content creation  
curl -X POST https://relocation.quest/api/cron/daily-content \
  -H "Authorization: Bearer $CRON_SECRET"

# Test weekly review generation
curl -X POST https://relocation.quest/api/cron/weekly-review \
  -H "Authorization: Bearer $CRON_SECRET"
```

### Monitoring & Debugging
```bash
# Check cron job execution logs
VERCEL_TOKEN="token" npx vercel logs https://relocation.quest --token $VERCEL_TOKEN --since 24h

# View function performance metrics
VERCEL_TOKEN="token" npx vercel inspect https://relocation.quest --token $VERCEL_TOKEN

# Check environment variables
VERCEL_TOKEN="token" npx vercel env ls --token $VERCEL_TOKEN
```

### Performance Metrics
- **Daily Goals**: 2-3 new articles created, 12-18 drafts published
- **Weekly Goals**: 14-21 new articles, 100% draft clearance
- **Monthly Goals**: 60-90 articles published consistently
- **System Reliability**: >99% uptime since implementation

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

## 🚀 Deployment & CI/CD Operations

### Automatic Deployment
- **Trigger**: Push to `main` branch on GitHub
- **Platform**: Vercel with automated CI/CD
- **Build Time**: ~2-3 minutes average
- **Domain**: https://relocation.quest (production)

### Manual Deployment (When Needed)
```bash
# Force deployment with latest changes
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --prod --yes --token $VERCEL_TOKEN --force

# Check deployment status
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel ls --token $VERCEL_TOKEN

# View deployment logs
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel logs https://relocation.quest --token $VERCEL_TOKEN
```

### Environment Variables Management
```bash
# Add new environment variable
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel env add VARIABLE_NAME production --token $VERCEL_TOKEN

# List all environment variables  
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel env ls --token $VERCEL_TOKEN

# Remove environment variable
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel env rm VARIABLE_NAME production --yes --token $VERCEL_TOKEN
```

## 🎬 Video Management (Mux Integration)

### Video Asset Organization
- **Country Videos**: All destinations have professional video thumbnails
- **Hero Banner**: Cyprus video for desktop, mobile fallback image
- **Aspect Ratios**: 16:9 for country thumbnails, optimized for web

### Video Troubleshooting
```html
<!-- Test video IDs at: https://relocation.quest/test-video-ids.html -->
<!-- This page tests all country videos with identical Mux configuration -->
```

### Video ID Reference
```javascript
// Working video configuration (from VideoHero.astro)
const workingConfig = {
  envKey: "26hi0t52rcm3pl738jugp7sp8",
  settings: {
    autoplay: true,
    muted: true, 
    loop: true,
    maxResolution: "720p",
    preload: "metadata",
    controls: false,
    disableCookies: true
  }
};
```

### Video Performance Monitoring
- **Intersection Observer**: Videos pause when out of viewport (battery optimization)
- **Error Handling**: Fallback to poster images on network failure
- **Loading Strategy**: Lazy loading with performance optimization

## 🔧 Webhook Configuration & Management

### Sanity Webhooks (Optional Enhancement)
Webhooks can be configured to trigger automatic updates when content changes in Sanity.

#### Setup Process:
1. **Create Webhook in Sanity Studio**:
   ```
   Project Settings → API → Webhooks → Add New
   ```

2. **Configure Endpoint**:
   ```
   URL: https://relocation.quest/api/webhooks/sanity
   Secret: [Use SANITY_WEBHOOK_SECRET environment variable]
   Triggers: Create, Update, Delete
   Filter: _type == "post"
   ```

3. **Webhook Handler** (`/api/webhooks/sanity.ts`):
   ```typescript
   export const POST: APIRoute = async ({ request }) => {
     const signature = request.headers.get('sanity-webhook-signature');
     const secret = process.env.SANITY_WEBHOOK_SECRET;
     
     // Verify webhook authenticity
     // Trigger cache invalidation
     // Update search indexes
     // Send notifications
   };
   ```

#### Webhook Use Cases:
- **Cache Invalidation**: Clear Vercel cache when content updates
- **Search Index Updates**: Update search functionality with new content  
- **Notification Systems**: Alert team of content changes
- **Analytics Triggers**: Track content publishing patterns

#### Security Considerations:
- **Secret Validation**: Always verify webhook signatures
- **Rate Limiting**: Prevent webhook abuse
- **Error Handling**: Graceful failure for webhook processing
- **Logging**: Track webhook events for debugging

### Alternative: Polling-Based Updates
Current system uses cron-based polling instead of webhooks for simplicity and reliability.

## 🔍 Content Quality Automation (Planned)

### API Integration Pipeline
1. **Firecrawl**: Scrape government immigration sites for policy changes
2. **Critique Labs**: Auto-fact-check financial claims and requirements  
3. **LinkUp/Tavily**: Cross-reference with latest news and updates
4. **Citation Generation**: Auto-link to official sources

### Testing Framework
```bash
# Test content quality APIs
node scripts/test-content-apis.js

# Compare search API performance
node scripts/compare-search-apis.js
```

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