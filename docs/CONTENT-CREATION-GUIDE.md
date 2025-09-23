# Relocation Quest Content Creation Guide

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

#### 2. IMAGE HANDLING - WORKING METHOD CONFIRMED!
- **Hero Image:** Use `mainImage` field (NOT heroImage)
- **Content Images:** Use body array with _key
- **Two-step process:** Minimal placeholder + AI generate
- **NEVER** add alt, caption, or asset in placeholder
- **AI-generated ONLY** - NO stock photo APIs

#### 3. CONTENT CREATION LIMITS
- Maximum 500-800 words per operation
- Build articles through multiple patches
- Never attempt 1,800 words in one operation

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

### Phase 5: Quality Check & Publish (30 min)
- Verify word count
- Check all requirements
- Fix any issues
- Final republish to sync ALL content

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

## 🔧 Troubleshooting

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

*Version: 1.0 - Adapted for Current Relocation Quest*
*Last Updated: September 2025*
*Key Difference from Legacy: mainImage field instead of heroImage*