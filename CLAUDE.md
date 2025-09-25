# CLAUDE AI ASSISTANT GUIDELINES

## Project Overview
This is the Relocation Quest project - a content platform focused on international relocation, visas, tax optimization, and global lifestyle information.

### 🎯 UNIFIED PROJECT NAMING
**IMPORTANT**: All services now use the same project name:
- **GitHub Repository**: `relocation-quest`
- **Vercel Project**: `relocation-quest`
- **Sanity Project**: `relocation-quest`
- **Local Directory**: `/Users/dankeegan/relocation-quest`

This unified naming eliminates confusion across all platforms.

## Technical Stack
### Core Framework
- **Frontend**: Astro 5.13.10 + React + TypeScript
- **CMS**: Sanity Studio with enhanced schema
- **Video**: Mux Player v2 with advanced optimizations
- **Styling**: Tailwind CSS with custom animations
- **Deployment**: Vercel with automated CI/CD
- **Database**: Sanity Cloud (production dataset)
- **Analytics**: Mux Data integration
- **Automation**: Vercel Cron Jobs for content publishing

### Content Quality APIs (December 2024)
- **Firecrawl**: Web scraping, PDF parsing, government site monitoring
- **Critique Labs**: Autonomous fact-checking, inline citations, verification
- **LinkUp/Tavily**: Contextual search, real-time web data access
- **Pipeline**: Automated research → fact-checking → citation-rich content generation

### Video Infrastructure
All country destinations now feature professional video thumbnails:
- **Cyprus**: ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM
- **Portugal**: Z01R9CHNHPpHJU21OLIWoN02GZ2lOLi5fTWltOEKcuOQQ  
- **Malta**: rC7EUyqkkODi01yLvxd7GDsjQpcjcrO7gV00IsBRN4Es4
- **Dubai**: 6L02MpxKnUJVvHzC3M00n01ZoYH1XMrl01Kv6Zhi8O6ffY8
- **Singapore**: Lq02MyaOxqH9o1Y7NEvQ3Z02w00pNl8kgfpHIkW8SmjrTw
- **Caribbean**: bW029UWH4uUuLmWQMCoDD99JYMsKiY6Z4i500lZ600VBEU

## Project Structure
```
/relocation-quest
├── src/
│   ├── pages/        # Astro pages + API routes
│   ├── components/   # React/Astro components
│   ├── layouts/      # Layout templates
│   └── styles/       # Global styles
├── public/           # Static assets
├── sanity/           # Sanity schema (deprecated structure)
├── scripts/          # Content management scripts
└── dist/             # Build output
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `git push origin main` - Deploy via Vercel

## Environment Variables
Required environment variables:
- `PUBLIC_SANITY_PROJECT_ID` - bc08ijz6
- `PUBLIC_SANITY_DATASET` - production
- `PUBLIC_SANITY_API_VERSION` - 2024-01-01
- `SANITY_API_TOKEN` - Read/write token for scripts
- `MUX_TOKEN_ID` - Mux API token ID for video uploads
- `MUX_TOKEN_SECRET` - Mux API secret key
- `PUBLIC_MUX_ENV_KEY` - Mux environment key
- `VERCEL_AI_GATEWAY_API_KEY` - AI Gateway integration
- `CRON_SECRET` - Authentication for automated jobs

## Content Quality API Credentials
Advanced content research and verification APIs:
- `FIRECRAWL_API_KEY` - fc-fcc00e00206d4c1db2653d3815a2b0b0 (Web scraping, PDF parsing)
- `CRITIQUE_LABS_API_KEY` - 4W8L4b9IY0xIzPBsFHRngwQ0M-9v9TcAysgauLqh6s4 (Fact-checking, citations)
- `LINKUP_API_KEY` - (Advanced contextual search - API key needed)

## Deployment & Live Sites
- **Production**: [relocation.quest](https://relocation.quest)
- **Sanity Studio**: [relocation.quest/studio](https://relocation.quest/studio)
- **Auto-deploy**: Pushes to main branch trigger Vercel deployment
- **Cron Jobs**: Automated content publishing every 6 hours

## Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
git push origin main # Deploy to production
```

## Content Management

### Current Content State (September 2025)
- **91+ articles** with complete SEO optimization
- **14 categories** organized by topic (not geography)
- **Enhanced Sanity schema** with comprehensive field descriptions
- **Automated SEO generation** for all content
- **100% categorized content** with proper organization

### Category Organization
**Topical Categories (NOT Geographic):**
- Golden Visa, Business & Investment, Digital Nomad
- Tax & Finance, Healthcare & Education, Lifestyle & Culture
- Residency & Immigration, and country-specific categories for active programs

**Geographic Content:**
- Countries featured in "Popular Destinations" homepage section
- No separate category pages for countries
- Country-specific content categorized by topic

### SEO Optimization (Completed September 2025)
- ✅ **Homepage SEO**: Title (47 chars), meta description (127 chars)
- ✅ **Schema.org markup**: Organization, Website structured data  
- ✅ **Image caching**: Vercel headers configured (24h cache)
- ✅ **External links**: Strategic government/authority links added
- ✅ **All articles**: Complete SEO titles, meta descriptions, focus keywords, tags

## Sanity CMS Integration

### Enhanced Schema (September 2025)
- **Comprehensive field descriptions** for AI assistance
- **Organized fieldsets**: Content, Media, SEO, Taxonomy, Publishing
- **Enhanced validation** with helpful error messages
- **Rich previews** with status information and visual indicators

### API Tokens Available
- **Developer**: Full read/write access for content management
- **Editor**: Content editing and publishing permissions
- **Deploy**: Deployment operations and schema changes

### Content Scripts (Located in `/scripts/`)
- `auto-categorize-articles.js` - Intelligent article categorization
- `auto-generate-seo-data.js` - Complete SEO metadata generation
- `check-article-categories.js` - Category organization validation
- `remove-country-categories.js` - Geographic vs topical cleanup

## 🤖 Automated Content Publishing (Operational)

### Vercel Cron Jobs (Every 6 Hours)
The project has fully operational automated content publishing:

1. **Publish Content** - `/api/cron/publish-content`
   - Schedule: Every 6 hours (00:00, 06:00, 12:00, 18:00 UTC)
   - Publishes up to 3 draft articles per run

2. **Daily Content** - `/api/cron/daily-content`  
   - Schedule: Daily at 9 AM UTC
   - Creates 2-3 new articles from templates

3. **Weekly Review** - `/api/cron/weekly-review`
   - Schedule: Mondays at 10 AM UTC
   - Generates content health reports and analytics

### Monitoring & Control
- All endpoints secured with `CRON_SECRET` authentication
- Rate limiting: 3 articles max per run, 60s timeout
- Manual triggering available for immediate publishing
- Vercel dashboard monitoring at project functions page

## Security & Best Practices
- Never commit secrets or API keys to repository
- Use environment variables for all sensitive data
- CREDENTIALS.md excluded from git via .gitignore
- Follow security best practices for Sanity operations
- Validate all user inputs and external data

## Testing & Quality
- Build locally before pushing: `npm run build`
- Test responsive design on mobile devices
- Verify Sanity schema changes in Studio interface
- Check TypeScript compilation for errors
- Test cron endpoints manually when modifying

## Phase Completion History

### ✅ Phase 1: Foundation & Infrastructure (COMPLETED)
**Project Successfully Built & Deployed - September 2024**
- Clean design implementation with modern gradient theme
- Complete page structure with working navigation (25+ pages)
- Sanity CMS integration with optimized queries
- Production deployment with reliable automation
- All broken links fixed, unique icons implemented

### ✅ Phase 2: Professional Video & Performance (COMPLETED)  
**Professional Video System - September 2024**
- Mux Player v2 integration with advanced optimizations
- Cyprus video hero with cinematic overlay effects
- Connection-aware quality streaming (2G→360p, 4G+→1080p)
- Video thumbnail system for category pages
- 99% mobile, 100% desktop PageSpeed scores maintained

### ✅ Phase 3: Content & SEO Optimization (COMPLETED)
**Comprehensive Content Management - September 2025**
- 91+ articles with complete SEO optimization
- Enhanced Sanity schema with AI-friendly descriptions
- Automated SEO generation (100% completion rate)
- Category reorganization (topic-based, not geographic)
- All SEO audit recommendations implemented

## Current Project State (September 2025)

### ✅ **Production Ready & Operational**
- **Live Site**: https://relocation.quest (fully functional)
- **Content Management**: Sanity Studio with enhanced schema
- **Automation**: Cron jobs running every 6 hours
- **SEO**: All critical issues resolved, optimal performance
- **Categories**: Clean topical organization implemented
- **Documentation**: Consolidated and up-to-date

### ✅ **Clean Architecture**
- **No technical debt** - all legacy code removed
- **Unified naming** across all platforms and services  
- **Enhanced schemas** with comprehensive descriptions
- **Automated systems** for content management and SEO
- **Security best practices** implemented throughout

### ✅ **Ready for Next Phase**
The project is in excellent condition for future development:
- Solid foundation with clean, maintainable code
- Complete documentation and operational procedures
- Automated content publishing and SEO systems
- Enhanced CMS with AI-friendly field descriptions
- All major SEO and performance optimizations complete

## Support & Troubleshooting

### Common Issues Resolution
- **Build failures**: Check TypeScript errors and import statements
- **Sanity errors**: Verify API tokens and project configuration
- **Vercel deployment**: Review build logs and environment variables
- **Cron job issues**: Check authentication and rate limiting

### Quick Commands
```bash
# Development
npm run dev

# Production build test
npm run build && npm run preview

# Deploy to production  
git add . && git commit -m "Description" && git push origin main

# Check cron job logs
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel logs https://relocation.quest --token $VERCEL_TOKEN

# Test Sanity connection
SANITY_API_TOKEN="token" node scripts/analyze-article-fields.js
```

---
**Last Updated**: September 25, 2025  
**Project Status**: ✅ Production Ready & Fully Operational  
**Next Phase**: Ready for advanced features or new requirements