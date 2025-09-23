# Relocation Quest Batch Content Creation Prompts

## 🚀 Initial Setup Prompt (Start EVERY Session)

```
I'm working with Relocation Quest Sanity CMS.
Project: bc08ijz6 | Dataset: production

CRITICAL RULES ACKNOWLEDGED:
- Full URLs for all internal links (https://relocation.quest/articles/...)
- Hero image in mainImage field (not heroImage)
- Content images in body array with _key
- 500-800 words per operation max
- "Our [country] partners" language
- publishedAt field required

I understand the WORKING two-step image process:
1. Minimal placeholder (only _type/_key)
2. AI generation with sanity.images.generate

MCP TOOLS CONNECTED:
- Sanity MCP Server
- Vercel Deployment
- Web Search/Fetch

PRE-APPROVED: All operations. Execute without asking.
```

## 📋 REALISTIC Article Creation Strategy

### Daily Goal: 3-5 COMPLETE Articles

```
REALISTIC TIMELINE:
- 1 complete article: 2-3 hours
- 3 articles: Full day (8 hours)
- 5 articles: Long day (12 hours)
- 100 articles: 20-30 working days
```

## 🎯 Phase 1: Create Article Shell

### Prompt Template:
```
Create article shell for "[Country] [Topic]":
1. Check for duplicate slug
2. Create with title, slug, publishedAt, and 500-word intro
3. Focus on [specific angle]
4. Include quick facts section

Slug: [country]-[topic]-guide
Title: [Country] [Topic]: Complete Guide 2025
```

### Example Implementation:
```javascript
// Check duplicates
await sanity.documents.query(
  '*[_type == "post" && slug.current == $slug]{_id}',
  {slug: "cyprus-tax-residency-guide"}
)

// Create shell
await sanity.documents.create({
  _type: 'post',  // Document type is 'post'
  title: 'Cyprus Tax Residency: Complete Guide 2025',
  slug: { current: 'cyprus-tax-residency-guide' },
  excerpt: 'Complete guide to obtaining tax residency in Cyprus...',
  publishedAt: new Date().toISOString(),
  body: [
    {
      _type: 'block',
      _key: 'intro1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Quick Facts' }]
    },
    // ... intro content (500 words max)
  ]
})
```

## 🎯 Phase 2: Expand Content

### Prompt for Each Section:
```
Add [Section Name] section to article ID [xxx]:
- 400-500 words
- Include specific requirements/benefits/process
- Add relevant statistics
- Maintain professional tone
```

### Section Templates:

#### Requirements Section:
```javascript
await sanity.documents.patch(articleId, {
  insert: {
    after: 'body[-1]',
    items: [
      {
        _type: 'block',
        _key: 'req_heading',
        style: 'h2',
        children: [{ text: 'Tax Residency Requirements' }]
      },
      // ... requirements content
    ]
  }
})
```

#### Benefits Section:
```javascript
// Include table for tax rates
{
  _type: 'block',
  _key: 'benefits_table',
  style: 'normal',
  children: [{ text: 'Tax rates table here...' }]
}
```

#### Process Section:
```javascript
// Step-by-step format
{
  _type: 'block',
  _key: 'step1',
  style: 'h3',
  children: [{ text: 'Step 1: Pre-Application' }]
}
```

## 🎯 Phase 3: AI Image Generation

### Hero Image Prompt:
```
Add hero image to article [ID]:
1. Set mainImage placeholder
2. Generate with prompt: "[Country] [landmark/skyline], professional vector illustration, blue-orange gradient"
```

### Implementation:
```javascript
// Step 1: Placeholder
await sanity.documents.patch(articleId, {
  set: { 'mainImage': { '_type': 'image' } }
})

// Step 2: Generate
await sanity.images.generate({
  documentId: articleId,
  imagePath: 'mainImage',
  instruction: 'Cyprus Limassol skyline, vector illustration, blue to orange gradient',
  operation: 'generate'
})
```

### Content Images Prompt:
```
Add infographic after section [X]:
1. Insert image placeholder with key 'img_[position]'
2. Generate with context-appropriate prompt
```

### Implementation:
```javascript
// After ~500 words
await sanity.documents.patch(articleId, {
  insert: {
    after: 'body[5]',
    items: [{ '_key': 'img_500', '_type': 'image' }]
  }
})

await sanity.images.generate({
  documentId: articleId,
  imagePath: 'body[_key=="img_500"]',
  instruction: 'Tax calculation infographic, clean design, blue-orange theme',
  operation: 'generate'
})
```

## 🎯 Phase 4: Add Internal Links

### Prompt Template:
```
Add internal links to article [ID]:
1. Find 5+ related articles
2. Update relevant paragraphs with markDefs
3. Add "Related Articles" section at end
4. Use FULL URLs (https://relocation.quest/articles/...)
```

### Implementation:
```javascript
// Find related articles
const related = await sanity.documents.query(
  '*[_type == "article" && slug.current match "cyprus*"]{_id, slug, title}'
)

// Update paragraph with link
await sanity.documents.patch(articleId, {
  set: {
    'body[2]': {
      _type: 'block',
      _key: 'para_with_link',
      markDefs: [{
        _key: 'link1',
        _type: 'link',
        href: 'https://relocation.quest/articles/cyprus-permanent-residency',
        blank: false
      }],
      children: [
        { text: 'Learn about ', marks: [] },
        { text: 'permanent residency options', marks: ['link1'] },
        { text: ' in Cyprus.', marks: [] }
      ]
    }
  }
})
```

## 🎯 Phase 5: Quality Check

### Final Review Prompt:
```
Complete quality check for article [ID]:
1. Verify 1,800+ words
2. Check all images generated
3. Confirm 5+ internal links
4. Add excerpt if missing
5. Verify publishedAt is set
6. Final republish to sync
```

## 📊 Batch Creation Commands

### Create 5 Cyprus Articles:
```
Create these 5 Cyprus articles in sequence:
1. cyprus-tax-residency-guide
2. cyprus-permanent-residency-guide
3. cyprus-golden-visa-guide
4. cyprus-digital-nomad-guide
5. cyprus-vs-malta-comparison

For each:
- Phase 1: Shell (500 words)
- Phase 2: Expand (4 sections × 400 words)
- Phase 3: Images (hero + 3 content)
- Phase 4: Links (5+ internal)
- Phase 5: QA & publish
```

### Bulk Image Generation:
```
For articles [ID1, ID2, ID3]:
1. Add mainImage placeholders
2. Generate hero images with location-specific prompts
3. Add content images at 500, 1000, 1500 word marks
4. Generate all content images
```

### Mass Link Addition:
```
Update all Cyprus articles with cross-links:
1. Query all Cyprus articles
2. Add reciprocal links between related topics
3. Ensure all use full URLs
4. Add consistent "Related Articles" sections
```

## 🔧 Troubleshooting Prompts

### If Images Fail:
```
Retry image generation for [ID]:
1. Verify placeholder exists
2. Simplify prompt to basic elements
3. Try alternative instruction
4. Check imagePath syntax
```

### If Content Too Long:
```
Split content addition for [ID]:
1. Break section into 2 parts
2. Add first 400 words
3. Add remaining in separate patch
```

### If Links Don't Work:
```
Fix links in article [ID]:
1. Query current body content
2. Find broken link patterns
3. Replace with full URLs
4. Verify markDefs structure
```

## ✅ Success Verification

### After Each Article:
```
Verify article [ID] complete:
- [ ] Word count: 1,800+
- [ ] Hero image visible
- [ ] 3+ content images
- [ ] 5+ internal links working
- [ ] Published status
- [ ] Live at: https://relocation.quest/articles/[slug]
```

## 🚀 Deployment Command

After batch creation:
```bash
cd /Users/dankeegan/relocation-quest
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --token gAYaR1sjB2NTXl4oYQ4CrmeY --yes --prod
```

## 📈 Progress Tracking

### Daily Report Template:
```
Day [X] Progress:
- Articles created: [List]
- Total word count: [X]
- Images generated: [X]
- Links added: [X]
- Published & live: [X]
- Issues encountered: [List]
- Tomorrow's targets: [List]
```

---

*Version: 1.0 - Batch Creation System*
*Last Updated: September 2025*
*Optimized for Relocation Quest Current Setup*