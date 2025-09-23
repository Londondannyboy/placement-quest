# Relocation Quest - Restart Documentation

## 🚀 Project Overview
A clean Astro + Sanity CMS website for relocation content, deployed at https://relocation.quest

## 📁 Project Structure
```
/Users/dankeegan/relocation-quest/
├── src/
│   ├── pages/
│   │   ├── articles/
│   │   │   ├── index.astro      # Articles listing page
│   │   │   └── [slug].astro     # Individual article pages
│   │   └── index.astro          # Homepage
│   ├── components/
│   │   └── PortableText.tsx     # Handles Sanity rich text
│   └── lib/
│       └── sanity.ts            # Sanity client configuration
├── astro.config.mjs             # Astro + Vercel SSR config
├── sanity.config.ts             # Sanity Studio config
└── package.json                 # Dependencies
```

## 🔑 Environment Variables
```bash
# .env file
PUBLIC_SANITY_PROJECT_ID=bc08ijz6
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-03-15
# Note: SANITY_API_TOKEN removed - not needed for public dataset
```

## 🛠️ Key Commands
```bash
# Local development (runs on http://localhost:4321)
npm run dev

# Build for production
npm run build

# Deploy to Vercel
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --prod --yes --token gAYaR1sjB2NTXl4oYQ4CrmeY

# Access Sanity Studio locally
http://localhost:4321/studio

# Access Sanity Studio in production
https://relocation.quest/studio
```

## 🌐 URLs
- **Production**: https://relocation.quest
- **Articles**: https://relocation.quest/articles
- **Studio**: https://relocation.quest/studio
- **Vercel Project**: relocation-quest-clean

## 📊 Sanity Details
- **Project ID**: bc08ijz6
- **Dataset**: production
- **Studio Path**: /studio
- **Content Types**: post (articles)

## ⚙️ Vercel Configuration
- **Adapter**: @astrojs/vercel/serverless
- **Output**: Server-side rendering (SSR)
- **Team**: londondannyboys-projects
- **Token**: gAYaR1sjB2NTXl4oYQ4CrmeY

## 🔄 Current Status
- ✅ Production deployment working
- ✅ Articles displaying correctly
- ✅ Sanity Studio integrated
- ✅ SSR enabled for real-time content
- ⚠️ MCP connection needs re-authentication

## 🐛 Known Issues & Fixes
1. **SANITY_API_TOKEN Error**: Removed from env vars - dataset is public
2. **MCP Authentication**: Needs reconnection in Claude Desktop
3. **Multiple processes**: Clean up duplicate npm/vercel processes

## 🚀 Quick Start After Restart
```bash
# 1. Navigate to project
cd /Users/dankeegan/relocation-quest

# 2. Start local dev
npm run dev

# 3. Deploy to production
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --prod --yes --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

## 📝 Next Steps
1. Fix Claude Desktop MCP authentication
2. Create content publishing workflow
3. Build out Cyprus relocation content
4. Implement frontend design

---
Last Updated: 2025-09-23
Project State: Working ✅