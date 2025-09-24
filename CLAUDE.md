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
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: Sanity Cloud

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

---

## 🚀 Phase 2: Enhancement & Optimization - NEXT

**Focus Areas for Next Development Sprint:**

### 1. 🎨 Design Enhancement
- Advanced UI/UX improvements
- Interactive elements and animations
- Visual hierarchy optimization
- Mobile experience refinement

### 2. 🔍 SEO & Performance
- Technical SEO optimization
- Page speed improvements
- Meta tags and structured data
- Search functionality

### 3. 👥 User Experience
- Navigation improvements
- Content discovery features
- Search and filtering
- User engagement features

### 4. 📱 Look & Feel Polish
- Design consistency review
- Brand identity strengthening
- Visual element refinement
- Accessibility improvements

### 5. 📋 Content Strategy
- Content gap analysis
- Editorial calendar planning
- Country-specific content expansion
- Article optimization

---
Last Updated: 2025-09-24