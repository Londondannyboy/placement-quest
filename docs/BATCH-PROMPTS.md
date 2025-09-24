# 🚀 RELOCATION QUEST BATCH ARTICLE SYSTEM v4.0

## 🚨 CRITICAL: Publishing Rules

**NEVER delete published articles when "cleaning up drafts"**
- Published articles have clean IDs (no "drafts." prefix)
- Draft articles have "drafts." prefix
- Only delete actual drafts that failed to publish

**PUBLISHING OPTIONS:**
- Option A: Direct publish during creation (set publishedAt during create_document)
- Option B: Draft then publish (create as draft, use publish_document, LEAVE published version alone)

## ⚠️ Rate Limiting Strategy

**BATCH CREATION LIMITS:**
- Maximum 2-3 documents per session to avoid rate limits
- If rate limited, pause and resume later
- Don't rush through all operations at once

**SEQUENTIAL APPROACH:**
1. Create articles in smaller batches (2-3 at a time)
2. Complete full workflow for each batch
3. Verify articles are live before next batch

## 📊 BATCH SIZES & EXPECTATIONS
- **Per Response**: 2-3 articles maximum (rate limit safe)
- **Per Session**: 5-10 articles before new chat
- **Daily Target**: 20-50 articles (multiple sessions)
- **Time Per Batch**: 20-30 minutes

## 🎯 PHASE 0: PREPARATION (Once Per Session)

### Research Topics with Tavily:
```
tavily_search: "[country] residence visa 2025 requirements"
tavily_extract: Official government sources
Build fact bank for accuracy
```

### Build Image Asset Bank:
```javascript
// Query all images with descriptions
*[_type == "sanity.imageAsset"]{
  _id,
  originalFilename,
  description,
  "keywords": lower(originalFilename + " " + coalesce(description, ""))
}
```

## 🎯 PHASE 1: BATCH ARTICLE CREATION

### Command Template:
```
Create these 3 articles about Cyprus:

1. "cyprus-permanent-residency-guide"
   Focus: Fast-track PR program
   Keywords: permanent residency, investment, EU benefits

2. "cyprus-company-formation-guide"
   Focus: 12.5% corporate tax
   Keywords: business, incorporation, tax benefits

3. "cyprus-banking-for-expats"
   Focus: Account opening process
   Keywords: banking, financial services, non-residents
```

### For EACH Article:
```
✅ 1,800+ words structured as:
- Introduction (300-400 words)
- Requirements section (400-500 words)
- Benefits section (400-500 words)
- Process section (400-500 words)
- Conclusion (200-300 words)

✅ Set publishedAt to current time
✅ Assign to appropriate category
✅ Add focus keyword for SEO
```

## 🎯 PHASE 2: INTELLIGENT IMAGE ASSIGNMENT

### After Article Creation:
```javascript
// For each article
for (article of articles) {
  // 1. Find best matching image
  bestMatch = findImageByKeywords(article.slug, imageBank)
  
  // 2. Set hero image WITH DESCRIPTION
  await patch({
    path: "mainImage",
    value: {
      _type: "image",
      asset: {_ref: bestMatch._id, _type: "reference"},
      alt: "Generated alt text for SEO",
      description: "Cyprus coastal city view - perfect for expats"
    }
  })
  
  // 3. Add same image mid-article
  await patch({
    op: "append",
    path: "body",
    value: [{
      _key: "img_middle",
      _type: "image",
      asset: {_ref: bestMatch._id, _type: "reference"},
      alt: "Different alt text for variety"
    }]
  })
}
```

## 🎯 PHASE 3: LINK INJECTION

### Add Links Systematically:

**External Links (1-2 per article):**
- Government sites (.gov)
- Big 4 firms (PwC, KPMG, EY, Deloitte)
- Official EU portals
- INSERT naturally in first 500 words

**Internal Links (3-5 per article):**
- Related country articles
- Similar visa types
- Comparison articles
- Use FULL URLs: https://relocation.quest/articles/...

## 🎯 PHASE 4: IMAGE DESCRIPTION ENHANCEMENT

### Update Image Descriptions:
```javascript
await patch({
  path: "mainImage.description",
  value: "Panoramic view of Limassol Marina in Cyprus showcasing luxury yachts, modern apartments, and Mediterranean lifestyle - ideal for expatriates considering Cyprus permanent residency through investment programs"
})
```

**This enables:**
- Better keyword matching for future use
- Rich alt text for SEO
- Context for image placement decisions
- Accessibility compliance

## 🎯 PHASE 5: Quality Check ONLY

### Final Checklist Per Article:
```
□ Word count verified (1,800+)
□ Hero image has asset reference
□ Hero image has description/alt text
□ Content image inserted (reused asset)
□ External authority link present
□ 3+ internal links added
□ Category assigned
□ Author set to "Relocation Team"
□ publishedAt timestamp set
□ Article is published and live
□ NEVER delete published articles
□ Only delete drafts if they failed to publish properly
```

## ✅ Success Verification - UPDATED

After Each Batch:
- [ ] Query recent posts to confirm articles exist
- [ ] Verify slugs match naming convention  
- [ ] Check publishedAt is set (not null)
- [ ] Confirm hero images are present
- [ ] Test internal links work
- [ ] Count total Cyprus articles (should increase)

**RED FLAGS:**
- Articles created but disappeared later
- publishedAt is null
- No mainImage despite generation attempts

## 📋 QUALITY METRICS

### Track Per Batch:
- Articles completed: X/5
- Images successfully linked: X/10
- Links added: X external, Y internal
- Categories used: [list]
- Time taken: XX minutes

## 🔄 ITERATION PATTERN

### Session Structure:
```
Batch 1 (Cyprus): 5 articles → 20 mins
Batch 2 (Malta): 5 articles → 20 mins
Batch 3 (Portugal): 5 articles → 20 mins
--- BREAK / CLEAR CONTEXT ---
Batch 4 (Spain): 5 articles → 20 mins
```

## 🔧 Common Issues & Fixes

**ARTICLES DISAPPEAR AFTER CREATION:**
- Check if accidentally deleted during "cleanup"
- Query both drafts and published versions
- Never delete published articles (IDs without "drafts.")

**RATE LIMITING:**
- Error: "Too Many Requests - Agent actions request limit"
- Solution: Wait and continue in smaller batches
- Create 2-3 articles max per session

**NAMING CONVENTION ISSUES:**
- Always use kebab-case: cyprus-permanent-residency-guide
- Follow pattern: [country]-[topic]-guide
- Check existing articles to avoid duplicates

**IMAGE ASSET MISSING:**
```javascript
// Get latest uploaded image
const fallback = await query(
  '*[_type == "sanity.imageAsset"] | order(_createdAt desc)[0]'
)
// Use as temporary placeholder
```

**TIMEOUT OCCURS:**
- Complete current article only
- Publish what's done
- Start fresh batch

## 📊 SAMPLE BATCH COMMAND

```
Create 3 Cyprus articles NOW:

1. cyprus-non-dom-tax-regime
   Topic: 17-year tax exemptions
   Research: Use Tavily for 2025 updates
   Image hint: Financial/business theme

2. cyprus-real-estate-investment  
   Topic: Property purchase process
   Research: Current price ranges
   Image hint: Coastal properties

3. cyprus-crypto-regulations
   Topic: Blockchain-friendly laws
   Research: Latest regulations
   Image hint: Tech/finance theme

For ALL articles:
- 1,800+ words
- Add to "Tax & Finance" category
- Include PwC.com external link
- Cross-link between all three
- Reuse best matching images from bank
- Add detailed image descriptions
```

## 📈 Session Report Template - UPDATED

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

## ✅ SUCCESS CRITERIA

### Per Article:
- Published and live (not draft)
- publishedAt is not null
- Properly formatted
- Images displaying
- Links working
- SEO optimized

### Per Batch (2-3 articles):
- Completed without rate limits
- Zero broken images
- All cross-linked
- Consistent quality
- No articles deleted

### Per Day (20-50 articles):
- Multiple sessions completed
- Full site interconnected
- Image bank enriched
- No missing articles

## 🚀 INITIAL SETUP PROMPT (Start EVERY Session)

```
I'm working with Relocation Quest Sanity CMS.
Project: bc08ijz6 | Dataset: production

CRITICAL RULES ACKNOWLEDGED:
- Full URLs for all internal links (https://relocation.quest/articles/...)
- Hero image in mainImage field (not heroImage)
- Content images in body array with _key
- 3-5 articles per batch for Sonnet
- "Our [country] partners" language
- publishedAt field required
- Image asset references with descriptions

WORKING IMAGE PROCESS:
1. Find existing image assets
2. Assign with proper references and descriptions
3. Reuse assets across articles for efficiency

MCP TOOLS CONNECTED:
- Sanity MCP Server
- Vercel Deployment
- Web Search/Fetch (Tavily)

PRE-APPROVED: All operations. Execute without asking.
```

## 🔧 DEPLOYMENT

After batch creation:
```bash
cd /Users/dankeegan/relocation-quest
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --token gAYaR1sjB2NTXl4oYQ4CrmeY --yes --prod
```

## ✅ PROJECT STATUS UPDATE - SEPTEMBER 2024

**CLEAN DESIGN SUCCESSFULLY IMPLEMENTED:**
- ✅ Removed complex AstroWind theme that was causing build failures
- ✅ Fixed all import/dependency conflicts (astro-icon/components → astro-icon)
- ✅ Created clean, modern design with HTML/CSS + Tailwind
- ✅ All core functionality preserved (Sanity CMS, articles, cron jobs)
- ✅ Production deployment stable at https://relocation.quest
- ✅ Sitemap functional with 25+ indexed pages

**CURRENT ARCHITECTURE:**
- Frontend: Astro + Clean HTML/CSS + Tailwind (no complex widgets)
- Backend: Sanity CMS (fully operational)
- Design: Professional gradient theme (blue-orange)
- Performance: Fast loading, no theme dependency issues
- Deployment: Vercel (reliable builds)

**NEXT PHASE READY:**
The project is now in an excellent state for content enhancement and design refinement. All batch content creation workflows remain fully functional with the simplified, clean architecture.

---

*Version: 4.0 - Post-Clean Design Implementation*
*Last Updated: September 2024*
*Optimized for Clean Astro Architecture + Sonnet*