# Placement Quest: Complete Claude Code Execution Plan

## Project Overview

**Mission**: Duplicate the successful relocation.quest Astro architecture and adapt it for placement.quest to dominate private equity placement agent search results.

**Based on Analysis**: 
- Current #1 competitor has weak metrics (Authority 9, 323 visitors/month)
- placement.quest already has 977 impressions from basic Gamma page
- Relocation.quest has proven architecture with excellent SEO and performance

---

## Phase 1: Project Setup & Architecture Duplication (Week 1)

### Claude Code Session 1: Project Initialization

```bash
# Navigate to project directory
cd /path/to/your/development/directory

# Start Claude Code
claude
```

**Claude Instructions:**
```
I need to duplicate our successful relocation.quest Astro project for placement.quest. Here's what I need you to do:

1. Create a new directory called "placement-quest"
2. Copy the entire architecture from our relocation.quest project
3. Update all configurations for placement.quest
4. Modify the color scheme from blue-orange gradient to professional finance colors (navy-gold)
5. Update all project references and names throughout

Key files to update:
- astro.config.mjs (site URL, title)
- package.json (name, description)
- sanity.config.ts (project name)
- All meta tags and site information
- Environment variable names

The goal is to have an identical technical foundation but branded for placement agents.
```

### Configuration Updates Required:

#### astro.config.mjs
```javascript
export default defineConfig({
  site: 'https://placement.quest',
  integrations: [
    sitemap(),
    react(),
    tailwind(),
    sanity({
      projectId: 'YOUR_NEW_SANITY_PROJECT_ID',
      dataset: 'production',
    })
  ]
});
```

#### Environment Variables (.env)
```
PUBLIC_SANITY_PROJECT_ID=YOUR_NEW_PLACEMENT_PROJECT_ID
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=YOUR_PLACEMENT_TOKEN
MUX_TOKEN_ID=YOUR_MUX_TOKEN
MUX_TOKEN_SECRET=YOUR_MUX_SECRET
PUBLIC_MUX_ENV_KEY=YOUR_MUX_KEY
CRON_SECRET=YOUR_CRON_SECRET
```

---

## Phase 2: Content Architecture Translation (Week 1-2)

### Relocation → Placement Translation Map:

| **Relocation.Quest** | **Placement.Quest** | **SEO Focus** |
|---------------------|-------------------|--------------|
| **Countries** → **Agent Profiles** | `/agents/apollo-global/` | "Apollo placement agent" |
| **Golden Visa** → **Fundraising Services** | `/services/fundraising/` | "private equity fundraising" |
| **Tax Optimization** → **Capital Markets** | `/services/capital-markets/` | "placement agent services" |
| **Digital Nomad** → **Investor Relations** | `/services/investor-relations/` | "LP investor relations" |
| **Articles** → **Insights** | `/insights/` | "placement agent news" |

### Claude Code Session 2: Content Schema Creation

```
Create the new Sanity schema for placement.quest based on our relocation schema but adapted for placement agents:

1. Replace "post" with "insight" document type
2. Create "agent" document type for placement agent profiles  
3. Create "service" document type for fundraising services
4. Update all categories to placement-focused terms
5. Maintain the same SEO field structure
6. Add placement-specific fields (AUM raised, sectors, contact info)

Schema Requirements:
- agent: name, description, specializations, contact, track record
- insight: title, content, category, SEO fields, published date
- service: service type, description, process, benefits
- category: placement-focused categories (not geographic)
```

### New Category Structure:
```javascript
// categories for placement.quest
export const placementCategories = [
  {
    title: 'Private Equity Placement',
    slug: 'private-equity-placement',
    description: 'Specialized placement agents for buyout and growth equity funds'
  },
  {
    title: 'Real Estate Placement', 
    slug: 'real-estate-placement',
    description: 'Placement agents focused on real estate private equity'
  },
  {
    title: 'Credit Fund Placement',
    slug: 'credit-fund-placement', 
    description: 'Specialists in private credit and debt fund placement'
  },
  {
    title: 'Infrastructure Placement',
    slug: 'infrastructure-placement',
    description: 'Infrastructure and energy fund placement experts'
  },
  {
    title: 'Emerging Markets',
    slug: 'emerging-markets-placement',
    description: 'Placement agents for emerging market investments'
  },
  {
    title: 'Fundraising Strategies',
    slug: 'fundraising-strategies',
    description: 'Best practices and insights for fund managers'
  }
];
```

---

## Phase 3: Content Creation Strategy & Implementation (Week 2-3)

### Based on GSC Keyword Data Analysis:

**Primary Target Keywords** (from placement.quest GSC data):
1. "top private equity placement agents" (188 impressions)
2. "quest placement agent" (110 impressions)
3. "private equity placement agent" (67 impressions)  
4. "placement agents" (61 impressions)
5. "list of placement agents" (23 impressions)

### Content Creation Plan:

#### Homepage Content Strategy
```
Create the homepage with this structure:

<h1>Top Private Equity Placement Agents Directory 2025</h1>

Hero Section:
- "The world's most comprehensive directory of private equity placement agents"
- "Connect with specialized fundraising experts for buyout, growth, and alternative investments"
- Feature the top 6 placement agents with photos and key stats

Services Section: (Replace relocation services)
- Private Equity Placement
- Real Estate Fund Placement  
- Credit & Debt Placement
- Infrastructure Placement
- Emerging Markets
- Fundraising Advisory

Featured Insights: (Replace relocation articles)
- Latest placement agent news
- Fundraising market trends
- Agent performance rankings

Directory Section:
- Search/filter functionality
- Agent profiles with specializations
- Geographic coverage
- Track record highlights
```

#### Agent Profile Template
```
For each placement agent, create detailed profiles following this structure:

URL: /agents/[agent-name]/
Title: "[Agent Name] - Private Equity Placement Agent Profile"
Meta: "Detailed profile of [Agent Name], specializing in [sectors]. Track record, contact info, and recent deals."

Content Structure:
1. Overview & Specializations
2. Track Record & AUM Raised  
3. Recent Deal Examples
4. Team & Key Personnel
5. Contact Information
6. Client Testimonials
7. Related Agents in Same Sector

SEO Fields:
- Focus Keyword: "[Agent name] placement agent"
- Secondary: "private equity placement", "[sector] placement agent"
- Tags: agent name, sectors, location, services
```

### Content Creation Sessions:

#### Claude Code Session 3: Top 50 Agent Profiles
```
Create detailed profiles for the top 50 private equity placement agents. Use this priority list:

Tier 1 (Create First - 10 agents):
- Campbell Lutyens
- Eaton Partners  
- Park Hill Group (now PJT Partners)
- Evercore
- UBS O'Connor
- Credit Suisse (now UBS)
- Deutsche Bank
- Goldman Sachs
- Morgan Stanley
- Lazard

For each agent:
1. Research their current specializations and recent deals
2. Create comprehensive profile content (1000+ words)
3. Include proper SEO optimization
4. Add contact information and team details
5. Generate professional placeholder images
6. Set up proper internal linking

Use the agent profile template structure I provided.
```

#### Claude Code Session 4: Core Service Pages
```
Create the main service category pages that target our highest-volume keywords:

1. /private-equity-placement-agents/ (TARGET: 188 impressions keyword)
   - Comprehensive guide to PE placement agents
   - Directory of top agents by AUM raised
   - How to choose the right placement agent
   - Success stories and case studies

2. /placement-agents-list/ (TARGET: 23 impressions keyword)  
   - Complete alphabetical directory
   - Filter by specialization, location, AUM
   - Recent deal tombstones
   - Contact information for each agent

3. /services/fundraising/ 
   - Complete guide to fundraising process
   - Timeline and best practices
   - Cost structures and fee arrangements
   - Working with placement agents effectively

Each page should be 2000+ words with comprehensive information.
```

#### Claude Code Session 5: Insights Content Hub
```
Create the insights/news section to establish authority and freshness:

1. Set up automated content structure for:
   - Daily placement agent news
   - Weekly deal announcements  
   - Monthly market analysis
   - Quarterly rankings and reports

2. Create initial content library:
   - "Ultimate Guide to Private Equity Placement Agents 2025"
   - "How Placement Agents are Adapting to Market Changes"
   - "Top 10 Placement Agents by AUM Raised"
   - "Regional Analysis: US vs European Placement Agents"
   - "Emerging Trends in Fund Placement"

3. Set up content templates for:
   - Agent spotlights
   - Deal announcements
   - Market trend analysis
   - Industry interviews

Each article should target long-tail keywords and internal link to agent profiles.
```

---

## Phase 4: SEO & Technical Optimization (Week 3-4)

### Claude Code Session 6: SEO Implementation

```
Implement comprehensive SEO optimization based on relocation.quest success:

1. Technical SEO:
   - XML sitemap with all agent profiles and services
   - Schema.org markup for:
     * Organization (placement.quest)
     * Person (each placement agent)
     * Service (fundraising services)
     * LocalBusiness (geographic targeting)
   - Page speed optimization (target 90+ mobile)
   - Image optimization and lazy loading

2. On-Page SEO:
   - Optimize all title tags (50-60 characters)
   - Meta descriptions (150-160 characters) 
   - H1/H2 structure with target keywords
   - Internal linking strategy
   - Image alt text with keywords

3. Content SEO:
   - Focus keyword in first paragraph
   - Natural keyword density (1-2%)
   - Related keywords in headings
   - External links to authority sites (Reuters, Bloomberg, PE publications)
   - Internal links to related agent profiles
```

### URL Structure Implementation:
```
/                           # Homepage - "placement agents directory"
/private-equity-placement-agents/  # Main category page
/agents/                    # Agent directory hub
/agents/[agent-name]/       # Individual agent profiles
/services/                  # Service category hub
/services/[service-type]/   # Service detail pages  
/insights/                  # Content/news hub
/insights/[article-slug]/   # Individual articles
/location/[city]-placement-agents/  # Geographic pages
/sector/[sector]-placement-agents/  # Sector-specific pages
```

---

## Phase 5: Automation & Content Systems (Week 4)

### Claude Code Session 7: Automated Systems Setup

```
Set up the same automated content systems from relocation.quest but adapted for placement agents:

1. Vercel Cron Jobs Configuration:
   - /api/cron/publish-insights (every 6 hours)
   - /api/cron/daily-placement-news (daily 9 AM UTC)
   - /api/cron/weekly-agent-spotlight (weekly Monday)

2. Content Templates for Automation:
   - Agent news updates
   - Deal announcements 
   - Market analysis pieces
   - Ranking updates

3. SEO Automation:
   - Auto-generate SEO titles and descriptions
   - Auto-tag content with relevant keywords
   - Auto-assign categories based on content
   - Auto-set publish dates for content freshness

4. Content Scripts:
   - auto-categorize-insights.js
   - auto-generate-seo-data.js  
   - check-agent-profiles.js
   - update-deal-tombstones.js
```

### Content Publishing Schedule:
```javascript
// Weekly content calendar
const contentCalendar = {
  monday: 'Agent Spotlight + Market Analysis',
  tuesday: 'Deal Announcements + Tombstones', 
  wednesday: 'Industry Trends + Best Practices',
  thursday: 'Regional Focus + Geographic Analysis',
  friday: 'Weekly Roundup + Performance Rankings',
  saturday: 'Weekend Reading + Long-form Guides',
  sunday: 'Week Ahead Preview + Calendar'
};
```

---

## Phase 6: Advanced Features & Differentiation (Month 2)

### Claude Code Session 8: Advanced Functionality

```
Add features that differentiate us from the weak competition:

1. Advanced Search & Filtering:
   - Filter agents by AUM raised, sectors, geography
   - Sort by recent deals, track record, specialization
   - Advanced search with multiple criteria

2. Interactive Features:
   - Agent comparison tool
   - Fundraising timeline calculator
   - Fee structure estimator
   - Market data visualizations

3. Lead Generation:
   - Contact forms for each agent
   - Request for proposal system
   - Newsletter signup with market insights
   - Agent matching questionnaire

4. Performance Tracking:
   - Agent performance metrics
   - Deal success tracking
   - Market share analysis
   - Quarterly ranking updates
```

### Competitive Differentiation:
```
Features that beat privateequitymarketeer.com:

✅ Comprehensive agent profiles (vs basic list)
✅ Real-time deal tracking (vs static information)  
✅ Advanced search functionality (vs simple directory)
✅ Regular news updates (vs outdated content)
✅ Professional design (vs basic Squarespace)
✅ Fast loading speed (vs slow 60/100 score)
✅ Mobile optimization (vs poor mobile UX)
✅ Lead generation system (vs no monetization)
```

---

## Content Creation Templates & Guidelines

### Agent Profile Content Template:
```markdown
# [Agent Name] - Private Equity Placement Agent

## Overview
[Agent Name] is a leading placement agent specializing in [primary sectors], with over $[X billion] in capital raised across [X] funds since [founding year].

## Specializations  
- [Primary sector 1]
- [Primary sector 2]  
- [Geographic focus]
- [Fund size focus]

## Track Record
- **Total AUM Raised**: $[X] billion
- **Number of Funds**: [X] funds
- **Average Fund Size**: $[X] million
- **Recent Deals**: [3-5 recent examples]

## Team & Leadership
[Key personnel with backgrounds]

## Recent Deal Examples
[3-5 recent successful placements with details]

## Contact Information
- **Address**: [Full address]
- **Phone**: [Phone number]
- **Email**: [Contact email]
- **Website**: [Website URL]

## Client Testimonials
[2-3 testimonials from fund managers]

## Related Agents
[Links to similar agents in same sector/geography]
```

### Insights Article Template:
```markdown
# [Article Title with Focus Keyword]

## Introduction
[Hook + overview with focus keyword in first paragraph]

## Key Findings/Points
[Main content sections with H2 headings containing keywords]

## Market Implications  
[Analysis of what this means for fund managers]

## Agent Perspectives
[Quotes from placement agents - link to their profiles]

## Looking Ahead
[Future predictions and trends]

## Related Insights
[Links to related articles]
```

---

## Success Metrics & KPIs

### Traffic Targets:
- **Month 1**: 2,000 monthly visitors (6x current leader)
- **Month 3**: 8,000 monthly visitors (25x current leader)  
- **Month 6**: 20,000 monthly visitors
- **Month 12**: 50,000+ monthly visitors

### Ranking Targets:
- **Month 1**: Top 10 for "placement agents"
- **Month 3**: Top 5 for "private equity placement agents"
- **Month 6**: #1 for primary keywords
- **Month 12**: Dominant across all placement agent keywords

### Lead Generation:
- **Month 3**: 50 qualified leads/month
- **Month 6**: 200 qualified leads/month  
- **Month 12**: 500+ qualified leads/month

### Revenue Projections:
- **Year 1**: $600K (conservative - 50 leads/month, 10% conversion, $10K avg)
- **Year 2**: $2.4M (optimistic - 200 leads/month, 15% conversion, $15K avg)

---

## Implementation Timeline

### Week 1: Foundation
- [ ] Duplicate Astro architecture
- [ ] Set up new Sanity project
- [ ] Configure domain and hosting
- [ ] Update branding and colors

### Week 2: Content Structure  
- [ ] Create top 20 agent profiles
- [ ] Build main service pages
- [ ] Set up insights content system
- [ ] Implement SEO optimization

### Week 3: Advanced Features
- [ ] Add search and filtering
- [ ] Create lead generation forms
- [ ] Set up automated content systems
- [ ] Build geographic/sector pages

### Week 4: Launch Preparation
- [ ] Complete SEO audit
- [ ] Test all functionality
- [ ] Set up analytics and tracking
- [ ] Submit sitemaps to search engines

### Month 2: Scaling
- [ ] Expand to 100+ agent profiles
- [ ] Daily content publication
- [ ] Lead generation optimization
- [ ] Performance monitoring and optimization

---

## Final Claude Code Session: Launch Checklist

```
Complete final launch preparation:

1. Technical Audit:
   - All pages load under 3 seconds
   - Mobile responsiveness perfect
   - All forms working correctly
   - Analytics tracking implemented
   - Search functionality operational

2. Content Audit:  
   - All agent profiles complete with SEO
   - Service pages comprehensive and optimized
   - Insights section active with fresh content
   - Internal linking strategy implemented
   - External authority links added

3. SEO Audit:
   - All pages have optimized title tags
   - Meta descriptions under 160 characters
   - Schema markup implemented
   - XML sitemap comprehensive
   - Search Console configured

4. Launch Preparation:
   - Domain configured (placement.quest)
   - SSL certificate active
   - CDN configured for global performance
   - Backup systems in place
   - Monitoring alerts configured

Deploy to production and begin dominating the placement agent search results!
```

---

## Conclusion

This comprehensive plan leverages the proven success of relocation.quest while targeting the vulnerable placement agent market. With weak competition (current #1 has authority score of only 9) and strong existing demand (977 impressions from basic Gamma page), this represents a high-probability success opportunity.

The combination of superior technical architecture, comprehensive content strategy, and automated systems will quickly establish placement.quest as the dominant resource for private equity placement agents.

**Expected Result**: #1 rankings within 6 months and multi-million dollar lead generation business within 12-18 months.
