# CLAUDE AI ASSISTANT GUIDELINES - PLACEMENT QUEST

## Project Overview
This is the Placement Quest project - The Bloomberg Terminal for Private Equity Placement Agents. A comprehensive intelligence platform focused 100% on placement agents, fundraising, and private equity market intelligence.

### 🎯 PROJECT IDENTITY
- **Domain**: placement.quest
- **Mission**: Comprehensive intelligence platform for PE placement agents
- **Architecture**: Based on proven relocation-quest technical stack
- **Content**: 100% focused on placement agents, fundraising, private equity
- **NO relocation/visa content** - This is purely placement agent focused

### 🚨 IMPORTANT - PROJECT CONFIGURATION
- **GitHub Repository**: `placement-quest`
- **Vercel Project**: `placement-quest` (ID: prj_UllhRcVjX22e9AjRAwlwKwYjBj0x)
- **Sanity Project**: `placement-quest` (ID: 7gr5b7wx)
- **Local Directory**: `/Users/dankeegan/Placement-quest/`

## Technical Stack
### Core Framework
- **Frontend**: Astro 5.13.10 + React + TypeScript
- **CMS**: Sanity Studio v3 (Project ID: 7gr5b7wx)
- **Video**: Mux Player v2 (for agent profile videos)
- **Styling**: Tailwind CSS (professional blue-gold theme)
- **Deployment**: Vercel
- **Database**: Sanity Cloud (production dataset)
- **Automation**: Vercel Cron Jobs for news aggregation

### API Stack for Placement Intelligence
- **Firecrawl**: SEC filings, Form ADVs, fund documents (API configured)
- **Critique Labs**: Verify AUM claims, deal sizes (API configured)
- **Tavily**: Daily placement agent news searches (pending)
- **LinkUp**: Deep contextual search (pending)
- **Apify**: LinkedIn scraping for team profiles (future)
- **Hume.ai**: Voice interface for agent matching (future)
- **Mem0/Zep**: User preference memory (future)

## Content Focus Areas

### Primary Content Types
1. **Placement Agent Profiles**
   - Campbell Lutyens, Park Hill, Evercore, Lazard, etc.
   - Complete profiles with metrics, track records, team info
   - Recent deals and fee structures

2. **Fund Deals Database**
   - Active fundraising campaigns
   - Recent closes with details
   - Placement agent involvement

3. **LP Intelligence**
   - LP investor profiles and preferences
   - Check sizes and investment criteria
   - Geographic and asset class preferences

4. **Market Insights**
   - Fundraising trends and analysis
   - Agent rankings and league tables
   - Fee benchmarking studies

## Sanity Schema Structure (LIVE)

```
schemas/
├── placementAgent.ts    // Agent profiles with full metrics
├── fundDeal.ts         // Fundraising deals and closings
├── lpInvestor.ts       // LP database with preferences
├── marketInsight.ts    // News and market analysis
└── feeStructure.ts     // Fee benchmarking data
```

## Target Keywords (SEO Priority)

### Must Target (High GSC Impressions)
- "top private equity placement agents" (188 impressions)
- "placement agents" (61 impressions)
- "list of placement agents" (23 impressions)
- "quest placement agent" (already ranking)

### Geographic Targets
- "placement agents london"
- "placement agents new york"
- "placement agents san francisco"

## Development Commands
```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git push origin main

# Check deployment
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel ls --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

## Environment Variables (Set in Vercel)
- `PUBLIC_SANITY_PROJECT_ID`: 7gr5b7wx
- `PUBLIC_SANITY_DATASET`: production
- `PUBLIC_SANITY_API_VERSION`: 2024-01-01
- `SANITY_API_TOKEN`: (See credentials file)

## Content Creation Guidelines

### When Creating Placement Agent Profiles
1. Focus on factual, verifiable information
2. Include AUM raised, number of offices, team size
3. List notable recent deals
4. Specify asset classes and geographic focus
5. Include fee structure information when available

### When Writing Market Insights
1. Use data from reliable sources (PEI, Preqin, etc.)
2. Include specific deal examples
3. Reference placement agents by name
4. Add data points with trends
5. Cite sources properly

### SEO Best Practices
1. Use target keywords naturally in content
2. Create comprehensive, authoritative pages
3. Internal link between related agents and deals
4. Use structured data for agent profiles
5. Optimize meta descriptions with keywords

## Security & Best Practices
- Never commit API keys or tokens to repository
- Use environment variables for all sensitive data
- Credentials stored in `/placement-quest/placement-agents-credentials.md`
- Follow Sanity best practices for content management

## Current Status (September 26, 2025)

### ✅ Completed
- Project infrastructure fully deployed
- Sanity CMS configured with placement schemas
- GitHub repository active
- Vercel deployment working
- Homepage with placement focus live

### 🚧 Next Priority Tasks
1. Create initial agent profiles in Sanity
2. Build /placement-agents/ listing page
3. Create /top-private-equity-placement-agents/ page
4. Implement /placement-agent-fees/ guide
5. Set up Tavily API for news aggregation

## Quick Reference

### Key URLs
- **Production**: https://placement.quest
- **Sanity Studio**: https://placement.quest/studio/
- **Sanity Manage**: https://www.sanity.io/manage/project/7gr5b7wx
- **Sanity Studio Direct**: https://www.sanity.io/@o6ssnXM4g/studio/h6kh9pwdspbnmjwf6ipsne3p/default
- **GitHub**: https://github.com/Londondannyboy/placement-quest
- **Vercel**: https://vercel.com/londondannyboys-projects/placement-quest

### Project IDs
- **Vercel**: prj_UllhRcVjX22e9AjRAwlwKwYjBj0x
- **Sanity**: 7gr5b7wx

---
**Last Updated**: September 26, 2025
**Project Status**: Live and Operational
**Focus**: 100% Placement Agents - NO relocation content