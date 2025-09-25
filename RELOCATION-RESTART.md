# 🚀 RELOCATION-RESTART.md - Quick Context for Claude

## 🎯 IMMEDIATE CONTEXT
**Project**: Relocation Quest - International relocation content platform
**Directory**: `/Users/dankeegan/relocation-quest`
**Live Site**: https://relocation.quest
**Tech Stack**: Astro + React + Sanity CMS + Mux Video

## 🔥 CURRENT ISSUES TO SOLVE

### 1. Mobile Video Not Playing
**Problem**: Videos not playing on mobile devices - likely due to static rendering
**Symptoms**: Works on desktop, fails on mobile browsers
**Suspected Cause**: Static line in code preventing dynamic loading on mobile
**Files to Check**: 
- `/src/components/HeroVideo.astro`
- `/src/pages/index.astro`
- `/src/pages/destinations/[country].astro`

### 2. Article Video Implementation
**Task**: Add Mux video support to articles with country-specific URLs
**Test Case**: Cyprus articles should use Cyprus video playback ID
**Implementation**: Add heroVideo field to Sanity schema, update article template
**Cyprus Video ID**: `ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM`

### 3. Video Size Standardization
**Issue**: Directory videos have inconsistent sizes
**Solution**: Standardize aspect ratio and responsive sizing
**Target**: Consistent 16:9 aspect ratio across all videos

### 4. MCP Connection with Mux
**Status**: Not yet implemented
**Goal**: Enable direct Mux operations via MCP for video management
**Benefits**: Automated video uploads, metadata management, analytics

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

## 📊 PROJECT STATE

### Working Features
- ✅ Desktop video playback
- ✅ Sanity CMS integration
- ✅ 91+ articles with SEO
- ✅ Automated publishing (cron jobs)
- ✅ Production deployment

### Needs Fixing
- ❌ Mobile video playback
- ❌ Article video integration
- ❌ Video size standardization
- ❌ MCP-Mux connection

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