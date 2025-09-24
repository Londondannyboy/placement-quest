# CLAUDE AI ASSISTANT GUIDELINES

## Project Overview
This is the Relocation Quest project - a content platform focused on international relocation, visas, tax optimization, and global lifestyle information.

### 🎯 UNIFIED PROJECT NAMING
**IMPORTANT**: All services now use the same project name:
- **GitHub Repository**: `relocation-quest`
- **Vercel Project**: `relocation-quest` (previously was relocation-quest-clean)
- **Sanity Project**: `relocation-quest`
- **Local Directory**: `/Users/dankeegan/relocation-quest`

This unified naming eliminates confusion across all platforms.

## Document Management Rules

### 📚 IMPORTANT: Document Organization
When working with project documentation, follow these rules:

1. **UPDATE, DON'T CREATE**: Always check for existing documents before creating new ones
2. **CONSOLIDATE**: Merge related information into unified documents
3. **USE PROPER NAMING**: All project-specific docs should be prefixed with `RELOCATION-`
4. **AVOID DUPLICATION**: Don't create multiple files for the same purpose

### 📁 Key Project Documents
- `RELOCATION-CONTENT-GUIDE.md` - Comprehensive content creation guide
- `README.md` - Project overview and setup
- `package.json` - Project dependencies
- `.env.example` - Environment variables template

### ✅ Before Creating Any Document
1. Check if a similar document already exists
2. Consider if the content belongs in an existing document
3. Use descriptive, project-prefixed names for new documents
4. Remove or archive outdated documents

## Technical Stack
- **Frontend**: Astro + React
- **CMS**: Sanity Studio
- **Video**: Mux Player with advanced optimizations
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: Sanity Cloud
- **Analytics**: Mux Data (integrated)

## Project Structure
```
/relocation-quest
├── src/
│   ├── pages/        # Astro pages
│   ├── components/   # React/Astro components
│   ├── layouts/      # Layout templates
│   └── styles/       # Global styles
├── public/           # Static assets
├── sanity/           # Sanity schema
└── dist/             # Build output
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `git push origin main` - Deploy via Vercel

## Environment Variables
Required environment variables:
- `PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `PUBLIC_SANITY_DATASET` - Sanity dataset (production)
- `PUBLIC_SANITY_API_VERSION` - API version date
- `SANITY_API_TOKEN` - Sanity API token (optional)
- `MUX_TOKEN_ID` - Mux API token ID for video uploads
- `MUX_TOKEN_SECRET` - Mux API secret key
- `PUBLIC_MUX_ENV_KEY` - Mux environment key (26hi0t52rcm3pl738jugp7sp8)
- `VERCEL_AI_GATEWAY_API_KEY` - AI Gateway integration key

## Deployment
- **Production**: https://relocation.quest
- **Sanity Studio**: https://relocation.quest/studio
- **Auto-deploy**: Pushes to main branch trigger Vercel deployment

## Content Guidelines
Refer to `RELOCATION-CONTENT-GUIDE.md` for:
- Article creation workflow
- SEO requirements
- Image guidelines
- Tavily research requirements
- Publishing checklist

## Code Style
- Use existing patterns and conventions
- Check neighboring files for style guidance
- Never add comments unless requested
- Follow TypeScript/JavaScript best practices
- Use Tailwind classes for styling

## Security
- Never commit secrets or API keys
- Use environment variables for sensitive data
- Follow security best practices
- Don't expose internal APIs

## Testing
- Build locally before pushing: `npm run build`
- Check for TypeScript errors
- Verify Sanity schema changes in Studio
- Test responsive design on mobile

## Common Issues
- **npm permission errors**: Use sudo or fix npm permissions
- **Build failures**: Check for missing components or imports
- **Sanity errors**: Verify API keys and project ID
- **Vercel deployment**: Check build logs for errors

## Support
For issues or questions:
- Check existing documentation first
- Review error logs carefully
- Test locally before deploying

## 🤖 Automated Content Publishing (Cron Jobs)

### Available Cron Endpoints
The project has automated content publishing via Vercel cron jobs:

1. **Publish Content** - `/api/cron/publish-content`
   - Schedule: Every 6 hours (00:00, 06:00, 12:00, 18:00 UTC)
   - Publishes up to 3 draft articles

2. **Daily Content** - `/api/cron/daily-content`  
   - Schedule: Daily at 9 AM UTC
   - Creates 2-3 new articles from templates

3. **Weekly Review** - `/api/cron/weekly-review`
   - Schedule: Mondays at 10 AM UTC
   - Generates content health reports

### Manual Triggering from Claude Desktop
```javascript
// Trigger immediate publishing
await fetch('https://relocation.quest/api/cron/publish-content', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer CRON_SECRET' }
});
```

### Documentation
Full details in `docs/CRON-AUTOMATION.md`

## ✅ Phase 1: Foundation & Infrastructure - COMPLETED

**Project Successfully Built & Deployed - September 2024**

### ✅ Core Platform Achievements
- ✅ **Clean Design Implementation** - Removed complex AstroWind theme, created modern gradient design
- ✅ **All Broken Links Fixed** - Created missing country pages, about/contact pages  
- ✅ **Unique Icons Implementation** - Replaced generic icons with meaningful category-specific SVG icons
- ✅ **Sanity CMS Integration** - Full content management with smart queries
- ✅ **Production Deployment** - Stable at https://relocation.quest
- ✅ **Complete Page Structure** - 25+ indexed pages with working navigation

### ✅ Technical Infrastructure
- **Frontend**: Astro + Clean HTML/CSS + Tailwind (no complex dependencies)
- **CMS**: Sanity Studio (fully operational with clean schema)
- **Design**: Professional blue-orange gradient theme with unique icons
- **Performance**: Fast loading, optimized builds
- **Deployment**: Vercel (reliable automation)
- **Content**: Page templates that pull from Sanity dynamically

### ✅ Content Architecture Ready
- **Country Pages**: Cyprus, Portugal, Dubai, Malta, Singapore, Caribbean
- **Category System**: Working with smart Sanity queries
- **Article System**: Full CRUD with Sanity integration
- **Cron Automation**: Automated content publishing active

## ✅ Phase 2: Professional Video & Performance - COMPLETED

**Professional Video Implementation - September 2024**

### ✅ Video System Achievements
- ✅ **Professional Video Banner** - Cyprus video hero with cinematic overlay
- ✅ **Mux Integration** - Official Mux Player v2 with advanced optimizations
- ✅ **Maximum Performance** - 99% mobile, 100% desktop PageSpeed scores maintained
- ✅ **Responsive Design** - Separate desktop (1080p) and mobile (720p) players
- ✅ **Advanced Analytics** - Mux Data integration for performance monitoring
- ✅ **Video Thumbnail System** - Micro-video components for category pages

### ✅ Performance Optimizations
- **Connection-Aware Quality**: 2G→360p, 3G→720p, 4G+→1080p adaptive streaming
- **Smart Loading**: Advanced intersection observers with connection detection
- **Battery Optimization**: Auto-pause when tab not visible, reduced motion support
- **MSE Playback Engine**: Quality selector compatibility and optimal streaming
- **GDPR Compliance**: Cookie-free video delivery for faster loading
- **Advanced Buffering**: Dynamic buffer management based on connection quality

### ✅ Video Components Built
- **VideoHero.astro**: Professional full-screen video banner with overlay text
- **VideoThumbnail.astro**: Ultra-lightweight micro-videos for category thumbnails
- **Mux API Integration**: Upload endpoints and asset management ready

---

## 🚀 Phase 3: Advanced Features & Scale - NEXT

**Focus Areas for Next Development Sprint:**

### 1. 🎬 Video Content Expansion
- Category-specific video heroes (Portugal, Dubai, Malta, Singapore)
- Video thumbnail galleries for country pages
- Interactive video tours and walkthroughs
- User-generated video testimonials

### 2. 🚀 Performance & Analytics
- Advanced Mux analytics integration
- A/B testing video vs gradient performance impact
- Core Web Vitals monitoring and optimization
- Video engagement tracking and optimization

### 3. 🎯 User Engagement Features
- Interactive video overlays with CTAs
- Video-based country comparison tools
- Hover-play category thumbnails
- Video progress tracking and bookmarking

### 4. 📊 Content Intelligence
- Video performance analytics dashboard
- Automated video content optimization
- AI-powered video recommendations
- Video SEO and metadata optimization

### 5. 🌍 International Expansion
- Multi-language video support
- Region-specific video content
- Localized video thumbnails
- Cultural adaptation of video content

### 6. 📱 Mobile Video Experience
- Vertical video formats for mobile
- Video story features
- Mobile-first video interactions
- Offline video caching

---
Last Updated: 2025-09-24