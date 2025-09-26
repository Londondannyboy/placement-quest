# PLACEMENT QUEST BATCH PROMPT

## CRITICAL: MCP Configuration
**ALWAYS USE THE PLACEMENT QUEST MCP SERVER FOR THIS PROJECT**
- **MCP Server**: `sanity-placement-quest`
- **Sanity Project ID**: `7gr5b7wx`
- **Dataset**: `production`
- **Domain**: placement.quest

⚠️ **DO NOT USE** the relocation-quest MCP server (bc08ijz6) when working on placement.quest!

## Project Context
You are working on **Placement Quest**, a comprehensive intelligence platform for private equity placement agents. This is the "Bloomberg Terminal for PE Placement Agents."

## Content Types for Placement Quest
When creating content for this project, focus exclusively on:

### 1. Placement Agent Profiles
- Campbell Lutyens, Park Hill Group, Evercore, Monument Group
- Agent track records, team profiles, recent deals
- Geographic coverage and sector specializations

### 2. Market Intelligence
- LP investor profiles and preferences
- Fund performance data and benchmarks
- Fundraising trends and market conditions
- Fee structures and terms analysis

### 3. Industry News & Analysis
- Daily PE/VC fundraising news
- Deal announcements and closings
- Agent rankings and league tables
- Market commentary and insights

### 4. Educational Content
- Guide to selecting placement agents
- Understanding placement agent fees
- Fundraising best practices
- LP relationship management

## Sanity Schemas (Placement Quest Specific)
```javascript
// Use these schemas when creating content:
- placementAgent     // Agent profiles
- marketInsight     // Market analysis
- fundDeal          // Fund closings
- lpInvestor        // LP profiles
- jobOpportunity    // PE job listings
- newsArticle       // Industry news
- agentRanking      // Rankings/league tables
- feeStructure      // Fee data
```

## Target Keywords
Focus content creation around these high-value keywords:
- "top private equity placement agents"
- "placement agents list"
- "placement agent fees"
- "best placement agents [city]"
- "fundraising advisors private equity"

## Writing Style
- Professional, authoritative tone
- Data-driven insights with specific metrics
- Name specific firms and deals
- Include AUM figures, fund sizes, IRR percentages
- Reference SEC filings and Form ADVs where relevant

## API Integrations Available
When gathering data, utilize:
- **Firecrawl**: SEC filings, Form ADVs
- **Critique Labs**: Verify claims and data
- **Tavily**: Daily news searches
- **LinkUp**: Deep contextual searches
- **Apify**: LinkedIn scraping for teams

## Development Environment
- Repository: `/tmp/placement-quest-repo/`
- Frontend: Astro + React + TypeScript
- Styling: Tailwind CSS (navy-gold theme)
- Deployment: Vercel

## Common Tasks

### Creating Agent Profiles
1. Research agent using Firecrawl/Tavily
2. Create content in sanity-placement-quest MCP
3. Include: team, track record, recent deals, fees
4. Add LinkedIn profiles via Apify scraping

### Building List Pages
1. Create SEO-optimized list pages at `/placement-agents/[category]/`
2. Include comparison tables
3. Add filtering and search capabilities
4. Implement schema markup for rich snippets

### News Aggregation
1. Set up Tavily searches for daily PE news
2. Filter for placement agent mentions
3. Create automated news digests
4. Tag content with relevant agents/funds

## Quality Checklist
Before creating any content:
- [ ] Using sanity-placement-quest MCP (7gr5b7wx)?
- [ ] Content focused on placement agents/PE?
- [ ] Includes specific firm names and data?
- [ ] SEO-optimized for target keywords?
- [ ] Follows navy-gold design theme?

## DO NOT
- Create content about relocation or moving abroad
- Use the relocation-quest MCP server (bc08ijz6)
- Mix placement and relocation content
- Create generic finance content

---
**Remember**: This is PLACEMENT.QUEST, not relocation.quest. Stay focused on private equity placement agents and fundraising intelligence.