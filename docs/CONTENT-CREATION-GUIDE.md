# Relocation Quest Content Creation Guide v4.0

## 🚨 CRITICAL: Publishing Rules

**NEVER delete published articles when "cleaning up drafts"**
- Published articles have clean IDs (no "drafts." prefix)
- Draft articles have "drafts." prefix
- Only delete actual drafts that failed to publish

**PUBLISHING OPTIONS:**
- Option A: Direct publish during creation (set publishedAt during create_document)
- Option B: Draft then publish (create as draft, use publish_document, LEAVE published version alone)

## 🚨 CRITICAL RULES - PROVEN TO WORK!

### Project Configuration
- **Sanity Project ID:** bc08ijz6
- **Dataset:** production  
- **Live Site:** https://relocation.quest
- **Document Type:** post

### ✅ CONFIRMED WORKING REQUIREMENTS

#### 1. LINKS - ALWAYS USE FULL URLs!
- ✅ **WORKING:** `https://relocation.quest/articles/dubai-golden-visa-guide`
- ❌ **BROKEN:** `/dubai-golden-visa-guide` (relative paths WILL NOT RENDER)
- ❌ **BROKEN:** `dubai-golden-visa-guide` (slug only WILL NOT RENDER)
- **EVERY internal link needs full URL including domain**
- Use markDefs format for all links
- External links: add `blank: true` for new tab

#### 2. IMAGE HANDLING - ENHANCED v3.0 METHOD!
- **Hero Image:** Use `mainImage` field (NOT heroImage)
- **Content Images:** Use body array with _key
- **Image Asset References:** Find and reuse existing image assets
- **CRITICAL:** Add descriptions and alt text for SEO and selection
- **Process:** 
  1. Query image asset bank for best matches
  2. Set image with asset reference AND description
  3. Reuse same images across related articles
- **Descriptions:** Rich, keyword-heavy descriptions for better matching

#### 3. CONTENT CREATION LIMITS & BATCH SIZES

**⚠️ RATE LIMITING STRATEGY:**
- **Maximum 2-3 articles per session** to avoid rate limits
- If rate limited, pause and resume later
- Don't rush through all operations at once

**CONTENT LIMITS:**
- Maximum 500-800 words per operation
- Build articles through multiple patches
- Never attempt 1,800 words in one operation

**SEQUENTIAL APPROACH:**
1. Create articles in smaller batches (2-3 at a time)
2. Complete full workflow for each batch
3. Verify articles are live before next batch

#### 4. MANDATORY LANGUAGE
- Always: "our [Country] partners" (e.g., "our Cyprus partners")
- Never: "we recommend" or "our company"
- Keep third-person professional tone

#### 5. PUBLISHING RULES - CRITICAL!
- **Initial creation:** Include publishedAt field
- **After ANY changes:** Verify article is visible
- **MUST republish after EVERY image addition** to sync
- **MUST republish after adding links** to ensure they work

## 📋 Link Implementation Format

### EXACT STRUCTURE REQUIRED!
```javascript
// For internal links (to other articles):
{
  "_type": "block",
  "_key": "block-key-here",
  "style": "normal",
  "markDefs": [{
    "_key": "link1",
    "_type": "link",
    "href": "https://relocation.quest/articles/dubai-golden-visa-guide",
    "blank": false  // false for internal links
  }],
  "children": [{
    "_type": "span",
    "_key": "span-key",
    "text": "Read our guide on Dubai Golden Visa",
    "marks": ["link1"]  // Must match _key in markDefs
  }]
}

// For external links:
{
  "_type": "block",
  "_key": "block-key-here",
  "style": "normal",
  "markDefs": [{
    "_key": "extlink1",
    "_type": "link",
    "href": "https://www.government-site.com/visa-info",
    "blank": true  // true for external links
  }],
  "children": [{
    "_type": "span",
    "_key": "span-key",
    "text": "official government website",
    "marks": ["extlink1"]
  }]
}
```

## 🎯 Working Image Implementation

### Hero Image (mainImage Field):
```javascript
// Step 1: Set mainImage field
await sanity.documents.patch(articleId, {
  set: {
    'mainImage': { '_type': 'image' }
    // ONLY _type, nothing else!
  }
})

// Step 2: Generate AI image
await sanity.images.generate({
  documentId: articleId,
  imagePath: 'mainImage',
  instruction: 'Cyprus coastal skyline, professional vector illustration, blue-orange gradient',
  operation: 'generate'
})
```

### Content Images (Within Body Array):
```javascript
// Step 1: Add placeholder in body
await sanity.documents.patch(articleId, {
  insert: {
    after: 'body[5]',  // After ~500 words
    items: [{
      '_key': 'content_img_1',
      '_type': 'image'
      // ONLY _key and _type!
    }]
  }
})

// Step 2: Generate AI image
await sanity.images.generate({
  documentId: articleId,
  imagePath: 'body[_key=="content_img_1"]',
  instruction: 'Tax benefits infographic, clean design',
  operation: 'generate'
})
```

## 🚀 Phased Creation Workflow

### Phase 1: Create Shell (15 min)
```javascript
// Check for duplicates first
await sanity.documents.query(
  '*[_type == "post" && slug.current == $slug]{_id, title}',
  {slug: "proposed-slug-here"}
)

// Create article
const article = await sanity.documents.create({
  _type: 'post',  // Document type is 'post'
  title: 'Title <60 chars',
  slug: { current: 'unique-slug' },
  publishedAt: new Date().toISOString(),
  body: [introSection] // 500 words MAX
})
```

### Phase 2: Expand Content (45 min)
Add sections ONE AT A TIME:
- Patch 1: Requirements section (400-500 words)
- Patch 2: Benefits section (400-500 words)
- Patch 3: Process section (400-500 words)
- Patch 4: FAQ section (400-500 words)

### Phase 3: AI Image Generation (30 min)
1. Add mainImage placeholder and generate
2. Add content image placeholders at strategic points
3. Generate each content image

### Phase 4: Add Links (30 min)
1. Find related articles
2. Update paragraphs with markDefs format
3. Add Related Articles section
4. Verify all URLs start with https://relocation.quest/

### Phase 5: Quality Check ONLY (30 min)
- Verify word count
- Check all requirements
- Fix any issues
- Verify article is published and live
- NEVER delete published articles
- Only delete drafts if they failed to publish properly

## 📊 Image Prompt Templates

### Hero Images:
```
"[Location] skyline or landmark, professional vector illustration, 
blue (#1E40AF) to orange (#9A3412) gradient, minimalist geometric style, 
clean lines, no text, suitable for web header"
```

### Process/Infographic Images:
```
"[Process type] flowchart or diagram, clean infographic design,
blue-orange color scheme, simple icons, professional business style,
no photorealistic elements"
```

### Lifestyle/Location Images:
```
"[Location] lifestyle scene, vector illustration with simple human silhouettes,
Mediterranean or urban setting, warm gradient colors, minimalist style"
```

## ✅ Quality Checklist

After each article:
- [ ] 1,800+ words via multiple patches
- [ ] Hero image in mainImage field
- [ ] 3-4 content images in body array
- [ ] All images generated successfully
- [ ] 5+ internal links with full URLs
- [ ] 3+ external authority links
- [ ] Links using markDefs format
- [ ] PublishedAt field set
- [ ] Article visible on site

## 🔧 Troubleshooting & Common Issues

### ARTICLES DISAPPEAR AFTER CREATION:
- Check if accidentally deleted during "cleanup"
- Query both drafts and published versions
- Never delete published articles (IDs without "drafts.")

### RATE LIMITING:
- Error: "Too Many Requests - Agent actions request limit"
- Solution: Wait and continue in smaller batches
- Create 2-3 articles max per session

### NAMING CONVENTION ISSUES:
- Always use kebab-case: cyprus-permanent-residency-guide
- Follow pattern: [country]-[topic]-guide
- Check existing articles to avoid duplicates

### Images Not Generating?
1. Check hero uses `mainImage` field (not heroImage)
2. Check content images have _key
3. Verify imagePath matches exactly
4. Try simpler prompt if generation fails

### Links Not Clickable?
1. Verify using full URLs (https://relocation.quest/...)
2. Check markDefs format is correct
3. Ensure marks array references correct _key

### Content Too Long Error?
1. Break into 400-500 word patches
2. Use multiple patch operations
3. Never exceed 800 words per operation

## 📈 Session Report Template

Batch [X] Results:
- Articles INTENDED: [List planned articles]
- Articles CREATED: [Query result count] 
- Articles PUBLISHED: [List with IDs]
- Articles MISSING: [Any that disappeared]
- Rate Limits Hit: [Yes/No - if yes, continue next session]
- Next Session Plan: [Remaining articles to create]

**VERIFICATION QUERIES:**
```groq
// Check all Cyprus articles exist
*[_type == "post" && slug.current match "cyprus*"]{
  _id, title, slug, publishedAt, mainImage
}

// Count recent articles  
count(*[_type == "post" && _createdAt > "2025-09-23T00:00:00Z"])
```

## 🎯 Success Metrics

### Per Article (Proven Achievable):
- ✅ 1,800 words (4 patches)
- ✅ 1 hero image (mainImage field)
- ✅ 3-4 content images (body array)
- ✅ 5+ internal links (full URLs)
- ✅ 3+ external links
- ✅ Published and live
- ✅ Images visible in production

### Timeline:
- Phase 1 (Shell): 15 minutes
- Phase 2 (Expand): 45 minutes
- Phase 3 (Images): 30 minutes
- Phase 4 (Links): 30 minutes
- Phase 5 (QA): 30 minutes
- **Total**: 2.5 hours per article

---

*Version: 4.0 - Critical Updates for Batch Content Creation*
*Last Updated: September 2025*
*Key Changes: Rate limiting strategy, no draft deletion, smaller batches*