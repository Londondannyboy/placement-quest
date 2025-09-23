# Claude Desktop - Relocation Quest Content Creation Initialization

## Copy and paste this ENTIRE prompt to Claude Desktop to start creating articles:

---

I need you to create a comprehensive article for Relocation Quest using Sanity CMS. 

## PROJECT CONFIGURATION
- **Sanity Project ID:** bc08ijz6
- **Dataset:** production
- **Document Type:** post (CRITICAL - must be 'post' not 'article')
- **Live Site:** https://relocation.quest

## CRITICAL RULES FOR SUCCESS

### 1. DOCUMENT TYPE
- Always use `_type: 'post'` when creating documents
- The schema expects 'post' not 'article'

### 2. LINKS - MUST USE FULL URLs
- ✅ CORRECT: `https://relocation.quest/articles/dubai-golden-visa-guide`
- ❌ WRONG: `/articles/dubai-golden-visa-guide` (will not render)
- ❌ WRONG: `dubai-golden-visa-guide` (will not render)
- EVERY internal link needs the complete URL including domain
- External links should open in new tab (blank: true)

### 3. IMAGE HANDLING
- **Main Image:** Use the `mainImage` field for hero images
- **Content Images:** Can be added within the body array
- Images should have descriptive alt text
- Use AI generation or placeholder images

### 4. CONTENT CREATION LIMITS
- Maximum 500-800 words per operation if encountering errors
- Build longer articles through multiple patches
- Always include publishedAt field with current date/time

### 5. LANGUAGE REQUIREMENTS
- Always use: "our [Country] partners" (e.g., "our Cyprus partners")
- Never use: "we recommend" or "our company" 
- Maintain third-person professional tone
- Focus on facts and practical information

## ARTICLE CREATION WORKFLOW

### Phase 1: Create the Article Shell
1. Check if slug already exists to avoid duplicates
2. Create document with:
   - _type: 'post'
   - title: Clear, SEO-friendly title
   - slug: URL-friendly version (e.g., 'cyprus-golden-visa-guide')
   - excerpt: 2-3 sentence summary for article cards
   - publishedAt: Set to current date/time

### Phase 2: Build Comprehensive Content
Create well-structured content with:
- **Introduction** (150-200 words): Hook the reader, explain topic importance
- **Main Sections** (300-400 words each): 
  - Requirements/Eligibility
  - Benefits/Advantages
  - Process/Timeline
  - Costs/Fees
  - Practical Tips
- **FAQ Section**: 5-7 common questions with detailed answers
- **Conclusion** (100-150 words): Summary and call to action

### Phase 3: Add Internal & External Links
- Add 5+ internal links to related articles (use full URLs!)
- Add 3+ external links to authoritative sources (government sites, official resources)
- Create a "Related Articles" section at the end

### Phase 4: Images (if supported by your MCP setup)
- Set a mainImage for the article hero
- Add relevant images within content at key sections
- Use descriptive alt text for accessibility

### Phase 5: Final Publishing
- Ensure publishedAt is set
- Verify all content is complete
- Publish the document (not as draft)

## EXAMPLE ARTICLE REQUEST

"Create a comprehensive article about Malta Permanent Residency Programme with:
- Title: 'Malta Permanent Residency: Complete Guide 2025'
- Slug: 'malta-permanent-residency-guide'
- Cover all requirements, benefits, investment options, and application process
- Include links to related Malta articles and official government sources
- Target length: 1,800-2,000 words"

## LINK IMPLEMENTATION FORMAT

For internal links in body text:
```javascript
{
  markDefs: [{
    _key: 'link1',
    _type: 'link',
    href: 'https://relocation.quest/articles/cyprus-tax-guide',
    blank: false
  }],
  children: [{
    text: 'Learn more about ',
    marks: []
  }, {
    text: 'Cyprus tax benefits',
    marks: ['link1']
  }]
}
```

For external links:
```javascript
{
  markDefs: [{
    _key: 'extlink1',
    _type: 'link',
    href: 'https://www.government.mt/immigration',
    blank: true  // Opens in new tab
  }]
}
```

## QUALITY CHECKLIST
Before completing any article, ensure:
- [ ] Document type is 'post'
- [ ] 1,500+ words of valuable content
- [ ] 5+ internal links with full URLs
- [ ] 3+ external authoritative links
- [ ] Comprehensive coverage of topic
- [ ] Professional, third-person tone
- [ ] publishedAt field is set
- [ ] Excerpt field filled for article cards
- [ ] "Our [Country] partners" language used

## READY TO START?
I'm ready to create high-quality, comprehensive articles for Relocation Quest. Please specify which article you'd like me to create, or I can suggest topics based on popular relocation destinations.

PRE-APPROVED: All Sanity operations are pre-approved. Execute all create, patch, and publish operations without asking for confirmation.

---