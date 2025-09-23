# Relocation Quest Article Creation Guide - UPDATED WITH MANDATORY REQUIREMENTS

## 🔴 MANDATORY CHECKLIST FOR EVERY ARTICLE

### Phase 0: Research Phase (NEW - REQUIRED FIRST!)
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

## 🚨 NON-NEGOTIABLES - DO THESE OR ARTICLE FAILS:
1. ✅ Research with Tavily FIRST
2. ✅ Add external link to authority site in first 500 words  
3. ✅ Insert image placeholders at 500, 1000, 1500 words
4. ✅ Generate ALL images before publishing
5. ✅ Assign category and create tags
6. ✅ Add meta description and SEO fields
7. ✅ Use full URLs for ALL internal links (https://relocation.quest/...)

---

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
- ✅ CORRECT: https://relocation.quest/articles/dubai-golden-visa-guide
- ❌ WRONG: /articles/dubai-golden-visa-guide (will not render)
- ❌ WRONG: dubai-golden-visa-guide (will not render)
- EVERY internal link needs the complete URL including domain
- External links should open in new tab (blank: true)

### 3. IMAGE HANDLING
- **Main Image:** Use the mainImage field for hero images
- **Content Images:** Add within the body array at regular intervals
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

### Phase 0: Tavily Research (NEW - MANDATORY!)
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
- Note statistics, recent changes, authoritative sources
- Identify external links to include

### Phase 1: Create the Article Shell
1. Check if slug already exists to avoid duplicates
2. Create document with:
   - `_type: 'post'`
   - title: Clear, SEO-friendly title
   - slug: URL-friendly version
   - excerpt: 2-3 sentence summary for article cards
   - publishedAt: Set to current date/time
   - seoTitle: Optimized for search (max 60 chars)
   - metaDescription: SEO description (max 160 chars)
   - focusKeyword: Primary target keyword
   - category: Reference to category document
   - tags: Array of tag references

### Phase 2: Build Comprehensive Content
Create well-structured content with:
- **Introduction (150-200 words):** Hook the reader, include research findings, add authority link
- **Main Sections (300-400 words each):**
  - Requirements/Eligibility
  - Benefits/Advantages
  - Process/Timeline
  - Costs/Fees
  - Practical Tips
- **FAQ Section:** 5-7 common questions with detailed answers
- **Conclusion (100-150 words):** Summary and call to action

### Phase 3: Add Images at Intervals
```javascript
// After ~500 words
await sanity.documents.patch(articleId, {
  insert: {
    after: 'body[5]',
    items: [{
      '_key': 'img_500',
      '_type': 'image',
      'alt': 'Descriptive alt text'
    }]
  }
});

// Generate the image
await sanity.images.generate({
  documentId: articleId,
  imagePath: 'body[_key=="img_500"]',
  instruction: 'Create an infographic showing visa requirements',
  operation: 'generate'
});
```

### Phase 4: Internal & External Links
- Add 5+ internal links to related articles (use full URLs!)
- Add 1-2 external links to authoritative sources
- Create a "Related Articles" section at the end
- Ensure all links use complete URLs

### Phase 5: SEO Optimization
- Set all SEO fields (seoTitle, metaDescription, focusKeyword)
- Assign appropriate category
- Add relevant tags (3-5 tags per article)
- Verify excerpt is compelling for search results

### Phase 6: Final Publishing
- Ensure publishedAt is set
- Verify all images are generated and placed
- Check all links use full URLs
- Confirm category and tags are assigned
- Publish the document (not as draft)

## QUALITY CHECKLIST

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

## COMMON ISSUES AND SOLUTIONS

### Image Generation Issues
- If images fail, use placeholder with descriptive alt text
- Ensure _key is unique for each image
- Place images after complete paragraphs, not mid-sentence

### Link Rendering Issues
- Always use full URLs starting with https://relocation.quest
- Test links in preview before publishing
- Use markdown format for inline links

### Content Length Issues
- Break long content into multiple patches
- Save after each major section
- Use Phase approach to build incrementally

## EXAMPLE ARTICLE REQUEST

"Create a comprehensive article about Malta Permanent Residency Programme with:
- Research current requirements using Tavily
- Title: 'Malta Permanent Residency: Complete Guide 2025'
- Slug: 'malta-permanent-residency-guide'
- Include links to Malta government sites
- Cover all requirements, benefits, investment options, and application process
- Add images at appropriate intervals
- Target length: 1,800-2,000 words"

## PRE-APPROVED OPERATIONS

All Sanity operations are pre-approved. Execute all create, patch, and publish operations without asking for confirmation.

---

**Remember: Quality content with proper research, authority links, regular images, and SEO optimization is what makes articles successful on Google!**