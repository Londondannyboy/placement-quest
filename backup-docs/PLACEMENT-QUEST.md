# PLACEMENT QUEST - THE BLOOMBERG TERMINAL FOR PLACEMENT AGENTS

## Executive Summary
The definitive intelligence platform for private equity placement agents, providing comprehensive profiles, deal tracking, LP intelligence, and market insights. Built on proven technology stack, deployed and operational at placement.quest.

## 🎯 Project Identity & Mission
- **Domain**: https://placement.quest
- **Mission**: Comprehensive intelligence platform for PE placement agents
- **Architecture**: Based on proven relocation-quest technical stack
- **Content**: 100% focused on placement agents, fundraising, private equity
- **Status**: ✅ LIVE and OPERATIONAL (September 26, 2025)

## Technical Stack
### Core Framework
- **Frontend**: Astro 5.13.10 + React + TypeScript
- **CMS**: Sanity Studio v3 (Project ID: 7gr5b7wx) ✅ CONFIGURED
- **Video**: Mux Player v2 (for agent profile videos)
- **Styling**: Tailwind CSS (professional blue-gold theme)
- **Deployment**: Vercel (Project ID: prj_UllhRcVjX22e9AjRAwlwKwYjBj0x) ✅ LIVE
- **Database**: Sanity Cloud (production dataset) ✅ CONNECTED
- **Automation**: Vercel Cron Jobs for news aggregation

### IMPORTANT: MCP Configuration for Claude Desktop
When working with this project in Claude Desktop, use the **sanity-placement-quest** MCP server:
- **MCP Server Name**: sanity-placement-quest
- **Sanity Project ID**: 7gr5b7wx
- **Dataset**: production
- **Note**: This is different from relocation-quest which uses Project ID bc08ijz6

### Enhanced API Stack
- **Firecrawl**: SEC filings, Form ADVs, fund documents (API key configured)
- **Critique Labs**: Verify AUM claims, deal sizes (API key configured)
- **Tavily**: Daily placement agent news searches (pending)
- **LinkUp**: Deep contextual search for agent intel (pending)
- **Apify**: LinkedIn scraping for team profiles (future)
- **Hume.ai**: Voice interface for agent matching (future)
- **Mem0/Zep**: User preference memory (future)

## Core Features

### 1. Agent Intelligence Hub
- Comprehensive profiles of 500+ placement agents
- Real-time tracking of fund raises
- Team movements and personnel changes
- Historical deal performance

### 2. LP Database
- 2,000+ institutional investors
- Investment preferences and criteria
- Recent commitments and portfolio
- Key decision makers

### 3. Deal Flow Tracker
- Active fundraising campaigns
- Recent fund closes
- Placement agent involvement
- Terms and fee structures

### 4. Market Analytics
- Agent league tables and rankings
- Fee benchmarking by fund size
- Geographic coverage analysis
- Asset class specialization trends

### 5. News & Insights
- AI-powered news aggregation
- Deal announcements
- Personnel moves
- Regulatory updates

## Value Propositions

### For Fund Managers
- Find the right placement agent for your raise
- Benchmark fees and terms
- Research agent track records
- Identify LP targets

### For Placement Agents
- Competitive intelligence
- Market positioning
- Fee benchmarking
- Business development leads

### For LPs
- Discover funds in market
- Research placement agent quality
- Track market trends
- Due diligence support

## Sanity Schema Structure (✅ IMPLEMENTED)

```javascript
// Placement-specific schemas now live in production
schemas/
├── placementAgent.ts    // Complete agent profiles with metrics
├── fundDeal.ts         // Fund closings and deal tracking
├── lpInvestor.ts       // LP database with preferences
├── marketInsight.ts    // Industry analysis and news
└── feeStructure.ts     // Fee benchmarking and analysis
```

### Schema Features
- **Placement Agent**: Full profiles with metrics, services, team, recent deals
- **Fund Deal**: Track fundraising with GP details, size, status, placement agent
- **LP Investor**: Database with AUM, preferences, check sizes, contacts
- **Market Insight**: Categorized news with data points, sources, related entities
- **Fee Structure**: Tiered fees, retainers, market comparisons

## Target Keywords (from GSC data)

### High Priority
- "top private equity placement agents" (188 impressions)
- "placement agents" (61 impressions)
- "list of placement agents" (23 impressions)
- "quest placement agent" (11 impressions)

### Geographic Focus
- "placement agents london"
- "placement agents new york"
- "placement agents san antonio"

## Current Project Status (September 26, 2025)

### ✅ Completed
- [x] Project infrastructure setup with Vercel deployment
- [x] GitHub repository created and configured
- [x] Sanity CMS project created (ID: 7gr5b7wx)
- [x] All placement agent schemas implemented
- [x] Sanity Studio configured at /studio
- [x] Environment variables configured
- [x] API keys documented (Firecrawl, Critique Labs)
- [x] Homepage with placement agent focus
- [x] Build pipeline working

### 🚧 In Progress
- [ ] Content creation in Sanity Studio
- [ ] Placement agent profile pages
- [ ] List pages implementation

### 📋 Next Steps
- [ ] Add initial placement agent profiles (Campbell Lutyens, Park Hill, etc.)
- [ ] Create /placement-agents/ listing page
- [ ] Build /top-private-equity-placement-agents/ page
- [ ] Implement /placement-agent-fees/ guide
- [ ] Set up Tavily API for news aggregation
- [ ] Configure SEO and submit to Google Search Console

## Success Metrics

### Traffic Goals
- Month 1: 5,000 organic visitors
- Month 3: 25,000 organic visitors
- Month 6: 100,000 organic visitors

### Content Targets
- Week 1: 20 agent profiles
- Week 2: 50 agent profiles
- Month 1: 100 agent profiles
- Month 2: 200 agent profiles

### Revenue Model
- Premium subscriptions ($299/month)
- API access for data ($2,999/month)
- Custom reports ($5,000+)
- Lead generation for agents

## Development Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git push origin main

# Check deployment status
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel ls --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

## Key URLs & Access Points

- **Production Site**: https://placement.quest
- **Sanity Studio**: https://placement.quest/studio/
- **GitHub Repository**: https://github.com/Londondannyboy/placement-quest
- **Vercel Dashboard**: https://vercel.com/londondannyboys-projects/placement-quest

## Project IDs & Credentials

- **Vercel Project ID**: prj_UllhRcVjX22e9AjRAwlwKwYjBj0x
- **Sanity Project ID**: 7gr5b7wx
- **Sanity Dataset**: production
- **Full credentials**: See `/Placement-quest/placement-agents-credentials.md`

## Documentation Structure

### Quick Start & Operations
- **placement-restart.md** - Complete restart guide with step-by-step instructions
- **CLAUDE.md** - AI assistant context and guidelines

### Product & Strategy
- **placement-product-requirements.md** - Detailed product requirements
- **placement-quest-ideation.md** - Original ideation and strategy

### Content & SEO
- **placement-content-guide.md** - Content creation guidelines
- **placement-content-list.md** - Priority content to create
- **placement-batch-prompt.md** - Bulk content generation prompts

### Technical & Security
- **placement-agents-credentials.md** - All API keys and tokens (PRIVATE)
- **placement-quest-claude-code-execution-plan.md** - Technical implementation plan

---

**Created**: September 25, 2025
**Last Updated**: September 26, 2025
**Status**: ✅ Live and Operational
**Next Milestone**: Content population and SEO optimization