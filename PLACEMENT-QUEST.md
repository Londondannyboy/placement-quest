# PLACEMENT-QUEST PROJECT DOCUMENTATION

## Project Overview
**Placement Quest** - The Bloomberg Terminal for Private Equity Placement Agents

### 🎯 PROJECT IDENTITY
- **Domain**: placement.quest
- **Mission**: Comprehensive intelligence platform for PE placement agents
- **Architecture**: Based on proven relocation-quest technical stack
- **Content**: 100% focused on placement agents, fundraising, private equity

## Technical Stack (Inherited from Relocation-Quest)
### Core Framework
- **Frontend**: Astro 5.13.10 + React + TypeScript
- **CMS**: Sanity Studio (new project needed)
- **Video**: Mux Player v2 (for agent profile videos)
- **Styling**: Tailwind CSS (navy-gold theme)
- **Deployment**: Vercel
- **Database**: Sanity Cloud (production dataset)
- **Automation**: Vercel Cron Jobs for news aggregation

### Enhanced API Stack
- **Firecrawl**: SEC filings, Form ADVs, fund documents
- **Critique Labs**: Verify AUM claims, deal sizes
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

## Sanity Schema Structure

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

## Target Keywords (from GSC data)

### High Priority
- "top private equity placement agents" (188 impressions)
- "placement agents" (61 impressions)
- "list of placement agents" (23 impressions)

### Geographic
- "placement agents london"
- "placement agents new york"
- "placement agents san antonio"

## Development Roadmap

### Week 1: Foundation
- [x] Clone relocation-quest architecture
- [x] Update configurations
- [ ] Create Sanity project
- [ ] Implement navy-gold theme
- [ ] Build agent schemas

### Week 2: Content
- [ ] Create 50 agent profiles
- [ ] Build list pages
- [ ] Set up news aggregation
- [ ] Implement Tavily searches

### Week 3: Features
- [ ] Search functionality
- [ ] Lead generation forms
- [ ] API integrations
- [ ] Mobile optimization

### Week 4: Launch
- [ ] SEO optimization
- [ ] Submit to GSC
- [ ] Begin link building
- [ ] Monitor performance

## Success Metrics

### Traffic Goals
- Month 1: 5,000 visitors
- Month 3: 20,000 visitors
- Month 6: 50,000 visitors

### Revenue Projections
- Year 1: $600K-$1M
- Year 2: $2-3M

## Relationship to Other Quest Properties

### Master-Quest
- Central control for all Quest properties
- Shared component library
- Unified analytics

### Rainmaker-Quest
- Sister site with Gonzo voice
- Same backend, different personality
- Cross-promotion opportunities

## Quick Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git push origin main

# Create new agent profile
npm run create:agent [name]
```

---

**Created**: September 25, 2025
**Status**: Active Development
**Priority**: Launch within 4 weeks