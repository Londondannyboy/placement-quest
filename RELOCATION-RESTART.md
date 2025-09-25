# 🚀 RELOCATION-RESTART.md - Quick Context for Claude

## 🎯 IMMEDIATE CONTEXT
**Project**: Relocation Quest - International relocation content platform
**Directory**: `/Users/dankeegan/relocation-quest`
**Live Site**: https://relocation.quest
**Tech Stack**: Astro + React + Sanity CMS + Mux Video

## ✅ COMPLETED TASKS (September 25, 2025)

### 1. Mobile Video Playback - FIXED ✅
**Solution**: Removed static prerendering, enabled dynamic loading
**Result**: Videos play perfectly on all mobile devices
**Changes**: 
- Removed `export const prerender = true` from homepage
- Mux Player loads for all devices (not just desktop)
- Added required mobile attributes (muted, autoplay, playsinline)

### 2. Article Video Implementation - COMPLETED ✅
**Implementation**: Country-specific videos auto-display in articles
**Features**: 
- Cyprus articles automatically show Cyprus video
- Other countries show their respective videos
- Fallback to hero image if no country match
- Added `thumbnailVideo` field to Sanity schema

### 3. Video Size Standardization - DONE ✅
**Solution**: Responsive video sizing across devices
**Breakpoints**: 
- Mobile: 60vh height
- Tablet: 80vh height  
- Desktop: Full screen (100vh)
**Result**: No more oversized videos on mobile

### 4. MCP Connection with Mux - DOCUMENTED ✅
**Status**: Available at https://mcp.mux.com
**Authentication**: OAuth through WorkOS
**Setup**: Requires browser authentication to complete

## 📁 KEY FILES TO REFERENCE

### Documentation
- `CLAUDE.md` - Main project guidelines and state
- `RELOCATION-VIDEO-INTEGRATION-GUIDE.md` - Mux video implementation details
- `RELOCATION-CREDENTIALS.md` - API keys and tokens (if exists)
- `RELOCATION-PRODUCT-REQUIREMENTS.md` - Feature requirements

### Code Files
- `/src/components/HeroVideo.astro` - Main video component
- `/src/pages/index.astro` - Homepage with hero video
- `/src/pages/destinations/[country].astro` - Country pages with videos
- `/sanity.config.ts` - Sanity schema configuration

## 🎬 MUX VIDEO PLAYBACK IDs

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

**CRITICAL**: Use Playback IDs, NOT Asset IDs!

## 🛠 DEVELOPMENT COMMANDS

```bash
# Navigate to project
cd /Users/dankeegan/relocation-quest

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to production
git push origin main

# Check deployment logs
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel logs https://relocation.quest --token $VERCEL_TOKEN --since 5m
```

## 🔍 DEBUGGING MOBILE VIDEO ISSUE

### Quick Checks
1. Check if videos have `muted` attribute (required for mobile autoplay)
2. Verify `playsinline` attribute is present for iOS
3. Look for any `prerender` or `static` directives preventing dynamic loading
4. Check browser console on mobile for specific errors

### Mobile Video Requirements
```html
<mux-player
  playback-id="..."
  muted
  autoplay
  playsinline
  controls="false"
/>
```

## 📊 PROJECT STATE (FULLY OPERATIONAL)

### ✅ Working Features
- ✅ Mobile & desktop video playback
- ✅ Sanity CMS with video thumbnail support
- ✅ 91+ articles with SEO optimization
- ✅ Automated publishing (cron jobs)
- ✅ Production deployment at https://relocation.quest
- ✅ Country-specific video system
- ✅ Video thumbnail previews for articles
- ✅ Clean video overlays without play buttons
- ✅ Responsive video sizing across all devices

### 🚀 Recent Improvements (September 25, 2025)
- Fixed mobile video playback issues
- Added country name overlays on video thumbnails
- Implemented curated video thumbnail system
- Suppressed distracting play button overlays
- Created comprehensive documentation
- Enhanced mobile UX with responsive video heights

## 🚨 PRIORITY ORDER

1. **Fix mobile video** - Critical user experience issue
2. **Implement article videos** - Content enhancement
3. **Standardize video sizes** - Visual consistency
4. **Setup MCP connection** - Future automation

## 💡 HELPFUL CONTEXT

### Previous Solution Attempts
- Videos work perfectly on desktop
- Issue appears to be mobile-specific
- Likely related to static rendering or missing mobile attributes

### Testing Approach
1. Check local development first: `npm run dev`
2. Test on actual mobile device or Chrome DevTools mobile mode
3. Deploy and verify on production

## 🔐 ENVIRONMENT VARIABLES
All necessary environment variables are set in Vercel:
- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `PUBLIC_MUX_ENV_KEY`
- `MUX_TOKEN_ID`
- `MUX_TOKEN_SECRET`

---

**Quick Start**: 
1. Read this file for context
2. Check mobile video issue in HeroVideo.astro
3. Look for static/prerender directives
4. Test with required mobile attributes
5. Deploy fix and verify

**Last Known State**: Deployment successful, mobile video not working, ready to implement fixes.