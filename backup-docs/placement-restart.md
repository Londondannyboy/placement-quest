# PLACEMENT QUEST - PROJECT RESTART GUIDE

## 📁 CRITICAL: LOCAL PROJECT LOCATION
**THE ACTUAL LOCAL FOLDER IS: `/Users/dankeegan/Placement-quest/`**
- This is your REAL project folder that you can see in Finder
- NOT /tmp/ (temporary files get deleted)
- NOT placement-quest-code (doesn't exist)
- The folder is called `Placement-quest` with capital P

## 🚀 QUICK START CHECKLIST

### Step 1: Verify Everything is Connected
```bash
# IMPORTANT: Navigate to the CORRECT local directory
cd /Users/dankeegan/Placement-quest/

# Verify git status
git status

# Check Vercel deployment
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel ls --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

### Step 2: Start Local Development
```bash
# Install dependencies if needed
npm install

# Start development server
npm run dev
# Should run on http://localhost:4321
```

### Step 3: Access Key Services
- **Production Site**: https://placement.quest
- **Sanity Studio**: https://placement.quest/studio/ ✅ LIVE
- **Sanity Manage**: https://www.sanity.io/manage/project/7gr5b7wx
- **Sanity Direct Access**: https://www.sanity.io/@o6ssnXM4g/studio/h6kh9pwdspbnmjwf6ipsne3p/default
- **GitHub**: https://github.com/Londondannyboy/placement-quest
- **Vercel Dashboard**: https://vercel.com/londondannyboys-projects/placement-quest

## 📋 CURRENT PROJECT STATUS (September 26, 2025)

### ✅ What's Complete
1. **Infrastructure**: Full deployment pipeline working
2. **Sanity Studio**: LIVE at https://placement.quest/studio/
3. **Sanity CMS**: Project 7gr5b7wx deployed and accessible
4. **GitHub**: Repository active and connected
5. **Schemas**: Ready to be deployed to Sanity
   - placementAgent
   - fundDeal
   - lpInvestor
   - marketInsight
   - feeStructure
5. **Homepage**: Placement agent focused content
6. **Documentation**: All guides and requirements documented

### 🚧 What Needs Work
1. **Content Creation**: No agent profiles yet in Sanity
2. **Page Routes**: Need to create /placement-agents/ pages
3. **SEO Setup**: Submit to Google Search Console
4. **API Integration**: Tavily news aggregation pending

## 🔑 CRITICAL INFORMATION

### Local Folder & Project IDs
```
LOCAL FOLDER: /Users/dankeegan/Placement-quest/
Vercel Project ID: prj_UllhRcVjX22e9AjRAwlwKwYjBj0x
Sanity Project ID: 7gr5b7wx
Sanity Dataset: production
GitHub Repo: placement-quest
MCP Server Name: sanity-placement-quest (NOT relocation-quest)
```

### Environment Variables (Set in Vercel)
```
PUBLIC_SANITY_PROJECT_ID=7gr5b7wx
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

### API Keys (See credentials file for full tokens)
- Firecrawl: ✅ Configured
- Critique Labs: ✅ Configured
- Tavily: ⏳ Pending
- Sanity Tokens: ✅ All 3 tokens configured

## 📝 NEXT STEPS TO CONTINUE

### Priority 1: Add Content (Week 1)
1. Log into Sanity Studio: https://placement.quest/studio/
2. Create first 5 placement agent profiles:
   - Campbell Lutyens
   - Park Hill Group
   - Evercore
   - Lazard
   - Credit Suisse/UBS

### Priority 2: Build Pages (Week 1-2)
1. Create `/placement-agents/` listing page
2. Build `/top-private-equity-placement-agents/` ranking page
3. Implement `/placement-agent-fees/` guide
4. Add individual agent profile pages

### Priority 3: SEO Implementation (Week 2)
1. Submit sitemap to Google Search Console
2. Implement structured data for agent profiles
3. Create meta descriptions for all pages
4. Build internal linking structure

### Priority 4: Features (Week 3-4)
1. Set up Tavily API for news
2. Build fee calculator tool
3. Implement search functionality
4. Add email capture forms

## 🛠️ TROUBLESHOOTING

### If Deployment Fails
```bash
# Check logs
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel logs https://placement.quest --token gAYaR1sjB2NTXl4oYQ4CrmeY

# Force rebuild
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --prod --yes --token gAYaR1sjB2NTXl4oYQ4CrmeY --force
```

### If Sanity Studio is Empty
1. Check you're logged in with: keegan.dan@gmail.com
2. Verify project ID: 7gr5b7wx
3. Use developer token for API access (see credentials)

### If Build Errors Occur
1. Check sanity.config.ts has correct project ID
2. Verify environment variables in Vercel
3. Ensure schemas are in /schemas/ directory

## 📚 KEY DOCUMENTATION FILES

### Must Read First (All in /Users/dankeegan/Placement-quest/)
1. **CLAUDE.md** - AI assistant context
2. **placement-product-requirements.md** - What we're building
3. **placement-content-list.md** - Priority content to create
4. **placement-agents-credentials.md** - All API keys and tokens

### Reference Guides
- **placement-content-guide.md** - How to write content
- **placement-batch-prompt.md** - Prompts for bulk content
- **PLACEMENT-QUEST.md** - Technical overview

## 🎯 30-DAY ROADMAP

### Days 1-7: Content Foundation
- [ ] Create 20 placement agent profiles in Sanity
- [ ] Build main listing pages
- [ ] Implement basic search

### Days 8-14: SEO Optimization
- [ ] Submit to Google Search Console
- [ ] Create all geographic pages
- [ ] Build comparison tools

### Days 15-21: Features
- [ ] Tavily news integration
- [ ] Fee calculator
- [ ] Email capture

### Days 22-30: Growth
- [ ] Launch newsletter
- [ ] Create market insights
- [ ] Track fund deals

## 💡 QUICK WINS

### Immediate Actions (Do Today)
1. Create Campbell Lutyens profile - #1 placement agent
2. Build /placement-agents/ page - main directory
3. Submit sitemap to GSC - start indexing

### This Week's Focus
- Top 5 agent profiles
- Main list pages
- Basic SEO setup

## 🚨 IMPORTANT REMINDERS

### DO NOT
- ❌ Add relocation/visa content
- ❌ Change Sanity project ID
- ❌ Modify deployment settings
- ❌ Commit API keys to git

### ALWAYS
- ✅ Focus 100% on placement agents
- ✅ Check credentials file for API keys
- ✅ Test locally before deploying
- ✅ Keep documentation updated

## 📞 CONTACT & SUPPORT

### Working Directory Reminder
**ALWAYS WORK IN: `/Users/dankeegan/Placement-quest/`**
- This is the folder you can see in Finder
- All files should be edited here
- Never use /tmp/ folders (they're temporary)

### Technical Issues
- Vercel Support: Dashboard tickets
- Sanity Community: https://slack.sanity.io
- GitHub Issues: Create in repository

### API Support
- Firecrawl: support@firecrawl.dev
- Critique Labs: Via website
- Mux: support@mux.com

## 🔄 DAILY WORKFLOW

### Morning Routine
1. Check deployment status
2. Review overnight builds
3. Plan day's content

### Content Creation
1. Use batch prompts for efficiency
2. Add to Sanity Studio
3. Test on local dev

### End of Day
1. Push any code changes
2. Verify deployment success
3. Document progress

---

## COMMAND REFERENCE

```bash
# Start fresh - USE THE CORRECT LOCAL FOLDER
cd /Users/dankeegan/Placement-quest/
git pull origin main
npm install
npm run dev

# Deploy changes
git add -A
git commit -m "Your message"
git push origin main

# Check status
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel ls --token gAYaR1sjB2NTXl4oYQ4CrmeY

# View logs
VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel logs https://placement.quest --token gAYaR1sjB2NTXl4oYQ4CrmeY
```

---

**Document Status**: Complete and Current
**Last Updated**: September 26, 2025
**Project Phase**: Content Creation
**Success Metric**: 20 agent profiles by October 3, 2025