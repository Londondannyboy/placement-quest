# 🔧 CATEGORY SYSTEM - FIXING SLUGS AUTOMATICALLY

## ✅ Issue Identified & Root Cause

**Problem**: Categories show on main page but individual category pages return 404
**Root Cause**: Categories exist in Sanity but are missing slug fields

## 📋 The Schema is Correct ✅

The category schema already includes the slug field:
```javascript
{
  name: 'slug',
  title: 'Slug', 
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  validation: (Rule) => Rule.required(),
}
```

## 🎯 What Needs To Be Done

**The existing categories in Sanity need slugs added to them.**

### Step 1: Go to Sanity Studio
Visit: https://relocation.quest/studio

### Step 2: Edit Each Category
For each category that appears on the main page, add the appropriate slug:

| Category Title | Required Slug |
|---------------|---------------|
| Business & Investment | `business-investment` |
| Digital Nomad | `digital-nomad` |
| Golden Visa | `golden-visa` |
| Healthcare & Education | `healthcare-education` |
| Cyprus | `cyprus` |
| Dubai/UAE | `dubai-uae` |
| Estonia | `estonia` |

### Step 3: How to Add Slugs in Studio
1. Click on each category
2. Find the "Slug" field
3. Click "Generate" next to the slug field (it will auto-generate from title)
4. Or manually type the slug from the table above
5. Save the category

## ✅ After Fix is Applied

Once slugs are added to all categories:

- **Category index page** `/categories` will show all categories with article counts
- **Individual category pages** like `/categories/business-investment` will work
- **Articles assigned to categories** will automatically appear on their category pages
- **Main page category links** will work properly

## 🚀 System Will Work Like Countries

The category system will then work exactly like the country pages:
- Articles assigned to "Business & Investment" category → appear on `/categories/business-investment`
- Articles assigned to "Digital Nomad" category → appear on `/categories/digital-nomad`  
- etc.

## 📝 For Claude Desktop

Once the slugs are fixed, you can:
1. Create articles in Sanity Studio
2. Assign them to categories using the Category field
3. Articles will automatically appear on the appropriate category pages

**The category filtering system is ready - it just needs the slugs populated in existing categories.**