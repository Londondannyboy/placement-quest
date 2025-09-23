# 🤖 RELOCATION QUEST AUTOMATED CONTENT PUBLISHING

## Overview
This document explains the cron job system for automated content publishing to Sanity CMS via Vercel's cron functionality.

## 🚀 How It Works

### Architecture
- **Platform**: Vercel Cron Jobs (scheduled serverless functions)
- **Framework**: Astro with API routes
- **CMS**: Sanity
- **Schedule**: Multiple cron jobs for different tasks

### Cron Jobs Configuration

#### 1. **Publish Content** (Every 6 hours)
- **Schedule**: `0 */6 * * *` (00:00, 06:00, 12:00, 18:00 UTC)
- **Endpoint**: `/api/cron/publish-content`
- **Purpose**: Automatically publishes draft articles
- **Batch Size**: 3 articles per run (rate limit safe)

#### 2. **Daily Content Creation** (Daily at 9 AM UTC)
- **Schedule**: `0 9 * * *`
- **Endpoint**: `/api/cron/daily-content`
- **Purpose**: Creates new articles from templates
- **Batch Size**: 2-3 articles per day

#### 3. **Weekly Review** (Mondays at 10 AM UTC)
- **Schedule**: `0 10 * * 1`
- **Endpoint**: `/api/cron/weekly-review`
- **Purpose**: Generates content health reports
- **Output**: Statistics and recommendations

## 🔧 Setup Instructions

### Step 1: Environment Variables
Add these to your Vercel project settings:

```bash
# Required
SANITY_API_TOKEN=your_sanity_write_token
CRON_SECRET=your_secure_random_string

# Already configured
PUBLIC_SANITY_PROJECT_ID=bc08ijz6
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Step 2: Generate Cron Secret
```bash
# Generate a secure random string
openssl rand -hex 32
```

### Step 3: Add to Vercel
```bash
# Add environment variable via CLI
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel env add CRON_SECRET production --token gAYaR1sjB2NTXl4oYQ4CrmeY
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel env add SANITY_API_TOKEN production --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

### Step 4: Deploy
```bash
# Deploy with cron jobs enabled
git add -A
git commit -m "Add cron job automation"
git push origin main

# Or force deploy
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --prod --yes --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

## 📋 Cron Job Details

### Publish Content Job
```typescript
// src/pages/api/cron/publish-content.ts
- Queries unpublished drafts
- Publishes up to 3 articles
- Sets publishedAt timestamp
- Returns success/error report
```

### Daily Content Job
```typescript
// src/pages/api/cron/daily-content.ts
- Selects random content templates
- Generates article metadata
- Creates 2-3 new articles
- Avoids duplicate content
```

### Weekly Review Job
```typescript
// src/pages/api/cron/weekly-review.ts
- Calculates weekly statistics
- Identifies content gaps
- Checks content health
- Provides recommendations
```

## 🔐 Security

### Authentication
All cron endpoints verify the request comes from Vercel:
```typescript
const authHeader = request.headers.get('authorization');
if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  return new Response('Unauthorized', { status: 401 });
}
```

### Rate Limiting
- Maximum 3 articles per cron run
- 60-second timeout per function
- Respects Sanity API limits

## 📊 Monitoring

### Vercel Dashboard
Monitor cron jobs at:
```
https://vercel.com/londondannyboys-projects/relocation-quest-clean/functions
```

### Manual Testing
Test endpoints locally:
```bash
# Test publish content
curl -X POST https://relocation.quest/api/cron/publish-content \
  -H "Authorization: Bearer YOUR_CRON_SECRET"

# Test daily content
curl -X POST https://relocation.quest/api/cron/daily-content \
  -H "Authorization: Bearer YOUR_CRON_SECRET"

# Test weekly review
curl -X POST https://relocation.quest/api/cron/weekly-review \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

## 📈 Content Strategy

### Publishing Cadence
- **Every 6 hours**: Publish pending drafts
- **Daily**: Create 2-3 new articles
- **Weekly**: Review and optimize

### Content Templates
```javascript
const contentTemplates = [
  { country: 'cyprus', topic: 'tax-optimization', priority: 'high' },
  { country: 'dubai', topic: 'golden-visa', priority: 'high' },
  { country: 'portugal', topic: 'd7-visa', priority: 'medium' },
  { country: 'malta', topic: 'citizenship', priority: 'medium' },
  { country: 'singapore', topic: 'business-setup', priority: 'low' }
];
```

## 🔧 Troubleshooting

### Common Issues

#### Cron Not Triggering
- Check vercel.json configuration
- Verify deployment includes cron settings
- Check Vercel function logs

#### Authentication Failures
- Verify CRON_SECRET is set in Vercel
- Check authorization header format
- Ensure Bearer token matches

#### Rate Limiting
- Reduce batch size to 2 articles
- Increase time between runs
- Check Sanity API usage

### Debug Commands
```bash
# Check environment variables
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel env ls --token gAYaR1sjB2NTXl4oYQ4CrmeY

# View function logs
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel logs https://relocation.quest --token gAYaR1sjB2NTXl4oYQ4CrmeY

# Check cron status
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel inspect https://relocation.quest --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

## 🎯 Success Metrics

### Daily Goals
- 2-3 new articles created
- 12-18 drafts published
- Zero rate limit errors

### Weekly Goals
- 14-21 new articles
- 100% draft clearance
- Content health score > 80%

### Monthly Goals
- 60-90 articles published
- Consistent publishing schedule
- Growing content library

## 🚀 Advanced Features (Future)

### Planned Enhancements
1. **AI Content Enhancement**
   - Use GPT-4 for content expansion
   - Automatic image generation
   - SEO optimization

2. **Smart Scheduling**
   - Peak traffic time publishing
   - Geographic timezone optimization
   - Holiday/event awareness

3. **Performance Tracking**
   - View count integration
   - Engagement metrics
   - A/B testing support

4. **Content Personalization**
   - User preference learning
   - Dynamic content selection
   - Regional content variants

## 📝 Notes

### Best Practices
- Always test endpoints manually first
- Monitor first week closely
- Adjust schedules based on performance
- Keep batch sizes small (2-3 articles)

### Integration with Claude Desktop
Claude Desktop can trigger these endpoints manually for immediate content publishing:
```javascript
// Trigger from Claude Desktop
await fetch('https://relocation.quest/api/cron/publish-content', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_CRON_SECRET'
  }
});
```

---

*Version: 1.0*
*Last Updated: September 2025*
*Compatible with: Astro + Sanity + Vercel*