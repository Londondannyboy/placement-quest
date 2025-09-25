# 🚀 RELOCATION BATCH PROMPT - Content Enhancement Instructions

## Purpose
This document provides instructions for Claude Desktop to systematically enhance content quality across the Relocation Quest website using the Content Quality Scoring System.

## Required Reading Before Starting
1. **CLAUDE.md** - Project overview and technical stack
2. **CONTENT-GUIDE.md** - Writing style and content standards
3. Review the Content Quality Scoring System (below)

## 🎯 Content Quality Scoring System

### Scoring Formula (0-100 points)
- **Content Depth (40 pts)**: Word count thresholds
- **Research Quality (25 pts)**: Tavily usage + external links
- **AI Enhancement (20 pts)**: Enhancement tracking
- **Currency/Freshness (15 pts)**: How recent the content is

## 📋 Enhancement Workflow

### Step 1: Analyze Current Content
```javascript
// Query all articles and calculate quality scores
*[_type == "post"] {
  title,
  "wordCount": length(pt::text(body)),
  "hasExternalLinks": count(body[].markDefs[_type == "link"]) > 0,
  publishedAt,
  _updatedAt
}
```

### Step 2: Prioritize Enhancement Targets
**High Priority (Score < 60):**
1. Articles under 1000 words
2. No external links
3. Over 6 months old
4. No Tavily research used

**Medium Priority (Score 60-79):**
1. Articles 1000-2000 words
2. Few external links (1-3)
3. 3-6 months old

### Step 3: Enhancement Process

#### For Each Low-Scoring Article:

1. **Research Phase**
   ```
   - Use Tavily to search for: "[article topic] 2025 latest updates statistics"
   - Use Tavily to find: "[article topic] government official sources"
   - Use Firecrawl for PDF reports if needed
   - Use Critique Labs for fact-checking critical claims
   ```

2. **Content Expansion**
   - Add comprehensive sections missing from the article
   - Include current 2025 data and statistics
   - Add practical tips and actionable advice
   - Expand to minimum 2000 words for important topics

3. **Add Authority Links**
   - Government websites (.gov)
   - Official organizations (.org)
   - Academic institutions (.edu)
   - Industry authorities
   - Minimum 5 external links per article

4. **SEO Optimization**
   - Update meta description with current year
   - Add focus keywords naturally
   - Include related internal links
   - Update title for search intent

5. **Track Enhancement**
   ```javascript
   // Document in article metadata:
   {
     enhancementLog: {
       date: "2025-09-25",
       toolsUsed: ["Tavily", "Critique Labs"],
       beforeScore: 45,
       afterScore: 85,
       improvements: "Added 2025 data, 8 external links, expanded to 2500 words"
     }
   }
   ```

## 🔄 Batch Processing Instructions

### Daily Enhancement Goals
- Enhance 3-5 low-scoring articles per session
- Focus on one category at a time for consistency
- Maintain brand voice throughout

### Quality Checklist
Before marking an article as enhanced:
- [ ] Minimum 2000 words for main topics
- [ ] At least 5 authoritative external links
- [ ] Current year (2025) mentioned with fresh data
- [ ] Tavily research incorporated
- [ ] SEO meta fields updated
- [ ] Internal links to related content added
- [ ] Quality score calculated and logged

## 📊 Tracking Progress

### Create Enhancement Report
After each batch session, create a summary:
```markdown
## Enhancement Report - [Date]

### Articles Enhanced
1. **[Article Title]** - Score: 45 → 85
   - Added: 1500 words, 8 external links
   - Tools: Tavily, Critique Labs
   
2. **[Article Title]** - Score: 35 → 82
   - Added: 2000 words, 6 external links
   - Tools: Tavily, Firecrawl

### Total Progress
- Articles enhanced today: 5
- Average score increase: +42 points
- Articles remaining under 60: 12
```

## 🛠️ Tools Priority Order

1. **Tavily** - ALWAYS use first for current research
2. **Firecrawl** - For PDF/document extraction
3. **Critique Labs** - For fact-checking and citations
4. **LinkUp** - For contextual search (when API key available)

## 📝 Sample Enhancement Prompt

```
Enhance the article "[Article Title]" using the following process:

1. Use Tavily to research:
   - "[topic] 2025 latest regulations changes"
   - "[topic] statistics 2025"
   - "[topic] official government requirements"

2. Expand the article to include:
   - Comprehensive 2025 updates
   - Step-by-step processes
   - Cost breakdowns with current figures
   - Common mistakes to avoid
   - Expert tips and best practices
   - Comparison tables where relevant

3. Add authoritative external links to:
   - Official government sources
   - Recognized industry authorities
   - Recent studies or reports
   - Helpful tools or calculators

4. Target length: 2000-3000 words
5. Maintain professional but approachable tone
6. Include practical, actionable advice
```

## 🎯 Success Metrics

### Weekly Goals
- Enhance 20-25 articles
- Achieve average score of 80+ for enhanced content
- Zero articles below score of 60

### Monthly Goals
- All articles above 70 score
- 90% of articles with Tavily research
- Average article length: 2000+ words

## 🚨 Important Notes

1. **Always verify Mux video IDs** - Don't change these
2. **Preserve existing internal links** - Update but don't remove
3. **Maintain brand voice** - Professional but accessible
4. **Document everything** - Track enhancements for reporting
5. **Test after deployment** - Verify changes on live site

## Quick Reference

### Current Mux Video IDs (DO NOT CHANGE)
- Cyprus: `ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM`
- Portugal: `Z01R9CHNHPpHJU21OLIWoN02GZ2lOLi5fTWltOEKcuOQQ`
- Malta: `rC7EUyqkkODi01yLvxd7GDsjQpcjcrO7gV00IsBRN4Es4`
- Dubai: `6L02MpxKnUJVvHzC3M00n01ZoYH1XMrl01Kv6Zhi8O6ffY8`
- Singapore: `Lq02MyaOxqH9o1Y7NEvQ3Z02w00pNl8kgfpHIkW8SmjrTw`
- Caribbean: `bW029UWH4uUuLmWQMCoDD99JYMsKiY6Z4i500lZ600VBEU`

---

**Last Updated**: September 25, 2025
**Next Review**: Weekly enhancement reports every Monday