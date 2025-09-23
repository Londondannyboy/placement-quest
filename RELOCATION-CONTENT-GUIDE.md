# RELOCATION QUEST CONTENT CREATION GUIDE

## 🎯 Project Mission
Create authoritative, helpful content for individuals and businesses relocating internationally, focusing on practical guidance, tax optimization, visa programs, and lifestyle insights.

## 📋 PROJECT CONFIGURATION

- **Sanity Project ID:** bc08ijz6
- **Dataset:** production
- **Document Type:** post (CRITICAL - must be 'post' not 'article')
- **Live Site:** https://relocation.quest
- **Sanity Studio:** https://relocation.quest/studio

---

## 🔴 MANDATORY CHECKLIST FOR EVERY ARTICLE

### Phase 0: Research Phase (REQUIRED FIRST!)
**ALWAYS use Tavily to research current information:**
- `tavily_search` for latest updates, statistics, and regulations
- `tavily_extract` for authoritative sources (PwC, KPMG, government sites)
- Document all sources for citation
- Find 1-2 HIGH AUTHORITY external links to include

### External Links - REQUIRED:
✅ **MUST ADD 1-2 external links to HIGH AUTHORITY sites:**
- Government sites (.gov)
- Big 4 accounting firms (PwC, KPMG, Deloitte, EY)
- Official EU/UN organizations
- Major universities (.edu)

**FORMAT:** Add naturally in content, not just at the end
**EXAMPLE:** "According to [PwC's latest tax guide](https://www.pwc.com/...)"

### Content Images - EVERY 500 WORDS:
**IMAGE INSERTION FORMULA:**
- Count words as you write
- At 500 words: Insert image placeholder
- At 1000 words: Insert image placeholder  
- At 1500 words: Insert image placeholder

### Visual Hierarchy:
**REQUIRED IMAGES PER ARTICLE:**
- [ ] Hero image (mainImage field)
- [ ] Infographic at 500 words
- [ ] Diagram/chart at 1000 words
- [ ] Illustration at 1500 words
- [ ] Summary graphic at end (optional)

---

## 📚 CONTENT CATEGORIES

### 1. Immigration & Visas
- **Golden Visa Programs**: Investment requirements, benefits, process
- **Digital Nomad Visas**: Remote work permits, requirements
- **Residency Permits**: Standard routes to residency
- **Citizenship Programs**: Naturalization processes

### 2. Tax & Business
- **Tax Optimization**: International tax planning, double taxation
- **Company Formation**: Offshore structures, business setup
- **Non-Dom Status**: Requirements and benefits by country
- **Banking**: International accounts, wealth management

### 3. Lifestyle & Living
- **City Guides**: Best cities for expats by country
- **Cost of Living**: Budget breakdowns, financial planning
- **Healthcare**: International insurance, medical systems
- **Education**: International schools, universities

### 4. Country-Specific Guides
- **Cyprus**: Tax benefits, golden visa, lifestyle
- **Malta**: Permanent residency, citizenship programs
- **Portugal**: NHR regime, golden visa, D7 visa
- **Dubai/UAE**: Zero tax, golden visa, business setup
- **Caribbean**: Citizenship by investment programs

---

## ✍️ ARTICLE CREATION WORKFLOW

### Phase 1: Research with Tavily
```javascript
// Example research queries
await tavily_search({
  query: "Cyprus tax residency 2025 requirements latest updates"
});

await tavily_extract({
  url: "https://www.pwc.com.cy/tax-guide",
  instruction: "Extract key tax rates and requirements"
});
```

### Phase 2: Create the Article Shell
```javascript
{
  "_type": "post",
  "title": "Clear, SEO-friendly title",
  "slug": { "current": "url-friendly-slug" },
  "excerpt": "2-3 sentence summary",
  "publishedAt": "current date/time",
  "seoTitle": "Optimized title (max 60 chars)",
  "metaDescription": "SEO description (max 160 chars)",
  "focusKeyword": "primary target keyword",
  "category": "reference to category",
  "tags": ["array", "of", "tags"]
}
```

### Phase 3: Build Comprehensive Content
**Article Structure (1,500-2,000 words):**

```markdown
# [Compelling Title]

## Introduction (150-200 words)
- Hook the reader
- Include research findings
- Add authority link
- Preview what's covered

## Main Sections (300-400 words each)

### Requirements/Eligibility
[Detailed requirements with official sources]
[IMAGE at 500 words]

### Benefits/Advantages
[Key benefits explained]
[IMAGE at 1000 words]

### Process/Timeline
[Step-by-step guide]
[IMAGE at 1500 words]

### Costs/Fees
[Comprehensive breakdown]

### Practical Tips
[Insider advice and recommendations]

## FAQ Section
[5-7 common questions with detailed answers]

## Conclusion (100-150 words)
[Summary and call to action]

## Related Articles
[5+ internal links with full URLs]
```

### Phase 4: SEO & Publishing
- Set all SEO fields (seoTitle, metaDescription, focusKeyword)
- Assign appropriate category
- Add relevant tags (3-5 tags per article)
- Verify excerpt is compelling
- Ensure publishedAt is set
- Publish the document (not as draft)

---

## 🚨 CRITICAL RULES FOR SUCCESS

### 1. DOCUMENT TYPE
- Always use `_type: 'post'` when creating documents
- The schema expects 'post' not 'article'

### 2. LINKS - MUST USE FULL URLs
- ✅ CORRECT: https://relocation.quest/articles/dubai-golden-visa-guide
- ❌ WRONG: /articles/dubai-golden-visa-guide
- ❌ WRONG: dubai-golden-visa-guide
- EVERY internal link needs the complete URL including domain

### 3. LANGUAGE REQUIREMENTS
- Always use: "our [Country] partners" (e.g., "our Cyprus partners")
- Never use: "we recommend" or "our company"
- Maintain third-person professional tone
- Focus on facts and practical information

### 4. CONTENT CREATION LIMITS
- Maximum 500-800 words per operation if encountering errors
- Build longer articles through multiple patches
- Always include publishedAt field with current date/time

---

## ✅ QUALITY CHECKLIST

Before completing any article, ensure:
- [ ] Tavily research completed and sources documented
- [ ] Document type is 'post'
- [ ] 1,500+ words of valuable content
- [ ] 1-2 external authority links included
- [ ] 5+ internal links with full URLs
- [ ] Images at 500, 1000, 1500 word marks
- [ ] All SEO fields populated
- [ ] Category and tags assigned
- [ ] Professional, third-person tone
- [ ] publishedAt field is set
- [ ] Excerpt field filled for article cards
- [ ] "Our [Country] partners" language used

---

## 📅 PUBLISHING SCHEDULE

### Content Pipeline
1. **Monday**: Tax/Business topics
2. **Tuesday**: Golden Visa/Investment programs
3. **Wednesday**: Practical guides/How-tos
4. **Thursday**: Country spotlights
5. **Friday**: Lifestyle/Living guides

### Performance Metrics
- Page views per article
- Time on page (target: 3+ minutes)
- Bounce rate (target: <50%)
- Internal link clicks
- Contact form submissions

---

## 🔗 INTERNAL LINKING STRATEGY

### Link Types
1. **Related Topics**: Similar content in same category
2. **Next Steps**: Logical progression articles
3. **Prerequisites**: Required reading before current article
4. **Deep Dives**: More detailed explanations

### Example Link Structure
```
/articles/cyprus-residency-guide → /articles/cyprus-non-dom-status
/articles/cyprus-non-dom-status → /articles/cyprus-tax-benefits
/articles/malta-golden-visa → /articles/malta-citizenship-program
```

---

## 🔧 MCP CONTENT CREATION COMMANDS

### Create New Article
```javascript
// In Claude Desktop with MCP
Create a blog post about [topic] with:
- Research using Tavily for current requirements
- Title: '[SEO-optimized title]'
- Slug: '[url-friendly-slug]'
- External links to government/authority sites
- Images at 500-word intervals
- Target length: 1,800-2,000 words
```

### Update Existing Article
```javascript
// Find article first
Query: *[_type == "post" && slug.current == "[slug]"][0]

// Then update
Update document with id '[document-id]':
- Add new section about [topic]
- Update statistics to 2025 data
- Add link to [related-article]
```

---

## 📊 EXAMPLE ARTICLE TEMPLATES

### Golden Visa Template
```markdown
# [Country] Golden Visa: Complete Guide 2025

Discover how [Country]'s golden visa program offers residency through investment of €[amount].

## What is the [Country] Golden Visa?
[Definition and overview]

## Investment Requirements
- Real Estate: €[amount]
- Government Bonds: €[amount]
- Business Investment: €[amount]

## Benefits for Investors
[List key advantages]

## Application Process
[Step-by-step guide]

## Timeline and Costs
[Processing times and fees]

## Tax Implications
[Tax benefits and obligations]

## FAQ
[Common questions answered]

## Next Steps
[Call to action with contact info]
```

### Tax Guide Template
```markdown
# [Country] Tax System: Guide for New Residents

Learn how relocating to [Country] can reduce your tax burden by up to [percentage].

## Tax Rates and Brackets
[Current tax structure]

## Tax Residency Rules
[Days test and other criteria]

## Special Tax Regimes
[Non-dom, NHR, or similar]

## Double Taxation Treaties
[Key treaty benefits]

## Tax Planning Strategies
[Legal optimization methods]

## Compliance Requirements
[Filing obligations]

## Professional Assistance
[When to seek help]
```

---

## 🚀 PRE-APPROVED OPERATIONS

All Sanity operations are pre-approved. Execute all create, patch, and publish operations without asking for confirmation.

---

## 📱 CONTENT DISTRIBUTION

1. **Website**: Primary channel at https://relocation.quest
2. **Sitemap**: Auto-generated at /sitemap-index.xml
3. **Categories**: Organized by topic with dedicated pages
4. **Tags**: Cross-referenced for better discovery
5. **SEO**: Optimized for Google with structured data

---

**Last Updated:** 2025-09-23
**Remember:** Quality content with proper research, authority links, regular images, and SEO optimization is what makes articles successful on Google!