# ⚙️ RELOCATION QUEST - OPERATIONS GUIDE

**Technical Operations, Deployment, and Maintenance Procedures**

## 🚀 Deployment & CI/CD

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

## 🔄 Automated Content Publishing

### Vercel Cron Jobs (Active)

#### 1. Content Publisher (`/api/cron/publish-content`)
- **Schedule**: Every 6 hours (00:00, 06:00, 12:00, 18:00 UTC)
- **Function**: Publishes up to 3 draft articles per run
- **Rate Limiting**: 3 articles max, 60s timeout
- **Authentication**: `CRON_SECRET` header required

#### 2. Daily Content Creator (`/api/cron/daily-content`)  
- **Schedule**: Daily at 9:00 AM UTC
- **Function**: Creates 2-3 new articles from templates
- **Content Types**: Country guides, visa updates, tax articles
- **AI Integration**: Uses template-based generation

#### 3. Weekly Content Review (`/api/cron/weekly-review`)
- **Schedule**: Mondays at 10:00 AM UTC  
- **Function**: Generates content health reports
- **Analytics**: Performance metrics, content gaps
- **Alerts**: Outdated content flagging

### Manual Cron Triggering
```bash
# Test content publisher endpoint
curl -X POST https://relocation.quest/api/cron/publish-content \
  -H "Authorization: Bearer $CRON_SECRET"

# Test daily content creator
curl -X POST https://relocation.quest/api/cron/daily-content \
  -H "Authorization: Bearer $CRON_SECRET"
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

## 🗄️ Database Operations (Sanity CMS)

### Content Management Scripts
```bash
# Run content categorization  
SANITY_API_TOKEN="token" node scripts/auto-categorize-articles.js

# Generate SEO data for articles
SANITY_API_TOKEN="token" node scripts/auto-generate-seo-data.js

# Check article categories
SANITY_API_TOKEN="token" node scripts/check-article-categories.js

# Fix broken image references
SANITY_API_TOKEN="token" node scripts/fix-null-image-refs.js
```

### Database Backup & Recovery
- **Automated Backups**: Sanity Cloud handles automatic backups
- **Export Data**: Use Sanity CLI for manual exports if needed
- **Schema Changes**: Always test in development environment first

### Content Publishing Workflow
1. **Draft Creation**: Articles created in draft status
2. **Editorial Review**: Content reviewed in Sanity Studio  
3. **SEO Optimization**: Auto-generated titles, descriptions, keywords
4. **Publication**: Automated via cron jobs or manual publishing
5. **Performance Monitoring**: Track metrics and engagement

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

## 📊 Monitoring & Analytics

### Site Performance
- **Vercel Analytics**: Built-in performance monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **PageSpeed Insights**: Regular performance audits

### Content Performance
- **Mux Analytics**: Video engagement tracking
- **Sanity Analytics**: Content management insights
- **Search Console**: SEO performance monitoring

### Error Monitoring
```bash
# Check recent deployment logs
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel logs https://relocation.quest --token $VERCEL_TOKEN --since 1h

# Monitor function execution
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel inspect deployment-url --logs --token $VERCEL_TOKEN
```

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

## 🚨 Emergency Procedures

### Site Down/Issues
1. **Check Vercel Status**: https://vercel.com/status
2. **Review Deployment Logs**: Use Vercel CLI commands above
3. **Rollback if Needed**: Deploy previous working version
4. **Check Environment Variables**: Ensure all required variables are set

### Content Issues
1. **Sanity Studio Access**: https://relocation.quest/studio
2. **Unpublish Content**: Set to draft status if problems found
3. **Content Recovery**: Use Sanity's document history
4. **Schema Changes**: Always backup before major changes

### Video Problems
1. **Test Page**: https://relocation.quest/test-video-ids.html
2. **Check Mux Dashboard**: Verify video asset status
3. **Fallback Strategy**: Disable video, show fallback images
4. **Performance Issues**: Reduce video quality or disable autoplay

## 📅 Maintenance Schedule

### Daily (Automated)
- **Content Publishing**: Via cron jobs
- **Performance Monitoring**: Automatic alerts
- **Backup Verification**: Sanity Cloud backups

### Weekly (Manual Review)
- **Content Quality**: Review published articles
- **Performance Metrics**: Check PageSpeed, Core Web Vitals
- **Error Monitoring**: Review logs for issues

### Monthly (Comprehensive)
- **Dependencies Update**: npm packages, security patches
- **Content Audit**: Review article accuracy and freshness  
- **Performance Optimization**: Images, videos, caching
- **SEO Review**: Search rankings, keyword performance

### Quarterly (Strategic)
- **Architecture Review**: Evaluate tech stack and performance
- **Content Strategy**: Assess content gaps and opportunities
- **API Integration**: Review and optimize third-party integrations
- **Security Audit**: Credentials, permissions, access control

---

**Last Updated**: December 25, 2024  
**Operations Team**: Technical Lead  
**Emergency Contact**: Check CREDENTIALS.md for access details
**Documentation Review**: Quarterly updates required