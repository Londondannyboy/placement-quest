# CLAUDE AI ASSISTANT GUIDELINES

## Project Overview
This is the Placement Quest project - The Bloomberg Terminal for Private Equity Placement Agents. A comprehensive intelligence platform focused on placement agents, fundraising, and private equity market intelligence.

### 🎯 PROJECT IDENTITY
- **Domain**: placement.quest (future: rainmakrr.com for gonzo version)
- **Mission**: Comprehensive intelligence platform for PE placement agents
- **Architecture**: Based on proven relocation-quest technical stack
- **Content**: 100% focused on placement agents, fundraising, private equity

### 🚨 IMPORTANT - PROJECT NAMING
- **GitHub Repository**: `placement-quest`
- **Vercel Project**: `placement-quest`
- **Vercel Project ID**: `prj_UllhRcVjX22e9AjRAwlwKwYjBj0x`
- **Sanity Project ID**: `7gr5b7wx`
- **Local Directory**: `/Users/dankeegan/Placement-quest/`

## Technical Stack (Inherited from Relocation-Quest)
### Core Framework
- **Frontend**: Astro 5.13.10 + React + TypeScript
- **CMS**: Sanity Studio (new project needed)
- **Video**: Mux Player v2 (for agent profile videos)
- **Styling**: Tailwind CSS (navy-gold theme)
- **Deployment**: Vercel
- **Database**: Sanity Cloud (production dataset)
- **Automation**: Vercel Cron Jobs for news aggregation

### Enhanced API Stack for Placement Intelligence
- **Firecrawl**: SEC filings, Form ADVs, fund documents
- **Critique Labs**: Verify AUM claims, deal sizes, fund performance
- **Tavily**: Daily placement agent news searches
- **LinkUp**: Deep contextual search for agent intel
- **Apify**: LinkedIn scraping for team profiles
- **Hume.ai**: Voice interface for agent matching (future)
- **Mem0/Zep**: User preference memory (future)

## Content Structure

### Primary Content Types
1. **Placement Agent Profiles** (/placement-agents/[name]/)
   - Campbell Lutyens, Park Hill, Evercore, etc.
   - Comprehensive profiles with track records
   - Team information from LinkedIn scraping
   - Recent deals and news

2. **List Pages** (SEO-focused)
   - /top-private-equity-placement-agents/
   - /placement-agents-list/
   - /placement-agents/[city]/
   - /placement-agent-fees/

3. **News & Insights**
   - Daily aggregated PE news
   - Deal announcements
   - Agent rankings
   - Market analysis

4. **Interactive Features**
   - Agent matching quiz
   - Fee calculator
   - Deal probability scoring
   - 3D relationship visualizer

## Target Keywords (from GSC data)

### High Priority
- "top private equity placement agents" (188 impressions)
- "placement agents" (61 impressions)
- "list of placement agents" (23 impressions)
- "quest placement agent" (ranking well)

### Geographic
- "placement agents london"
- "placement agents new york"
- "placement agents san antonio"

## Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
git push origin main # Deploy to production
```

## Environment Variables Needed
- `PUBLIC_SANITY_PROJECT_ID` - TO BE CREATED
- `PUBLIC_SANITY_DATASET` - production
- `PUBLIC_SANITY_API_VERSION` - 2024-01-01
- `SANITY_API_TOKEN` - TO BE GENERATED
- `MUX_TOKEN_ID` - For agent profile videos
- `MUX_TOKEN_SECRET` - For video uploads
- `PUBLIC_MUX_ENV_KEY` - Mux environment key
- `VERCEL_AI_GATEWAY_API_KEY` - AI Gateway integration
- `CRON_SECRET` - For automated news aggregation

## Content Research APIs
- `FIRECRAWL_API_KEY` - fc-fcc00e00206d4c1db2653d3815a2b0b0
- `CRITIQUE_LABS_API_KEY` - 4W8L4b9IY0xIzPBsFHRngwQ0M-9v9TcAysgauLqh6s4
- `TAVILY_API_KEY` - TO BE OBTAINED
- `LINKUP_API_KEY` - TO BE OBTAINED

## Sanity Schema Structure (To Be Created)

```javascript
// Placement-specific schemas
schemas/
├── placementAgent.js    // Agent profiles
├── fundDeal.js         // Fund closings
├── lpInvestor.js       // LP profiles
├── marketInsight.js    // Analysis
├── agentRanking.js     // Rankings
├── feeStructure.js     // Fee data
└── newsArticle.js      // PE news
```

## Current Development Status

### ✅ Completed
- Project structure created
- Homepage with placement agent content
- Basic routing structure
- Vercel deployment configured
- Project ID recorded: prj_UllhRcVjX22e9AjRAwlwKwYjBj0x

### 🔧 In Progress
- Fixing deployment issues
- Creating Sanity project for placement agents
- Building additional pages

### 📋 TODO
- Create Sanity project
- Set up environment variables in Vercel
- Build agent profile pages
- Implement news aggregation
- Set up Tavily API
- Create fee calculator
- Build agent matching quiz

## Success Metrics

### Traffic Goals
- Month 1: 5,000 visitors
- Month 3: 20,000 visitors
- Month 6: 50,000 visitors

### Revenue Projections
- Year 1: $600K-$1M
- Year 2: $2-3M

## Quick Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Deploy to Vercel (with token)
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --prod --yes --token gAYaR1sjB2NTXl4oYQ4CrmeY

# Check deployment status
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel ls --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

## Security & Best Practices
- Never commit secrets or API keys to repository
- Use environment variables for all sensitive data
- Follow security best practices for Sanity operations
- Validate all user inputs and external data

---
**Last Updated**: September 26, 2025
**Project Status**: 🚧 Active Development
**Priority**: Launch within 4 weeks
**Vercel Project ID**: prj_UllhRcVjX22e9AjRAwlwKwYjBj0x