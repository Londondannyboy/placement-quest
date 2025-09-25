# Project Credentials & API Access Tokens

## 🔐 Sanity CMS Tokens
- **Project ID**: `bc08ijz6`
- **Dataset**: `production`
- **API Version**: `2024-01-01`

### API Tokens:
- **Deploy API**: `skf4GZNRREsHlt4NF8PP0rutrMiL6QGKpBCLjH6xOGmWPWwpeJWLO6H0OEjGojdEfNEg2msG6lNvKQOJgsW9TCJpVNsnAkK5prKVM5JlTzCinOFuBLys8YAPlpGc79UIq15jMe42is0Wk7qmbUG0n9OEXoTJF39Pq98ly1XGmdlhXX2m3nPb`
- **Developer**: `sk10CmWIpejvvFVicA6LIVXqf33JPHNDOEAtXM5DytRyOYiTOQKbEv5At6AX1ObHIQqEc3WR5grJHiN28afJvOy1BWSoy1RNMMVM8DOIVTZVpG4bDCHXDEhLvisJ3AscPRRrAyICM7Z15yJ6ZFJf1upFE3LqoLJd9FJajJeJqu6tGkomxs78`
- **Editor**: `skYp9AF9l3Ggg7dNhZpSA2GffRtt0ivWzVrbMHVMDHdr45kywR2QYNQn7Nvxml5eaAj02P1LiMzyGHveLVLL6wMdoD1ACrz61WPqgbZrjC2eXx2XErNBmJbyuX3Itdnv5poxFSwqhqWLMfpF2TTqVgyXHQUUDWaVDiz3q2zRf4aVUZQGYcao`

## 🚀 Vercel Deployment
- **Token**: `gAYaR1sjB2NTXl4oYQ4CrmeY` (used in previous sessions)
- **Project**: `relocation-quest`
- **Domain**: `relocation.quest`

## 🔍 Tavily Research API
- **API Key**: `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` (from environment)

## 🧠 Content Quality APIs (December 2024)

### Firecrawl - Web Scraping & PDF Parsing
- **API Key**: `fc-fcc00e00206d4c1db2653d3815a2b0b0`
- **Documentation**: https://docs.firecrawl.dev/api-reference/introduction
- **Use Cases**: Government site scraping, PDF document parsing, policy monitoring
- **Pricing**: ~$50-200/month for regular monitoring

### Critique Labs - Fact-Checking & Citations  
- **API Key**: `4W8L4b9IY0xIzPBsFHRngwQ0M-9v9TcAysgauLqh6s4`
- **Documentation**: https://docs.critique-labs.ai/api-reference/search
- **Use Cases**: Autonomous fact-checking, inline citations, content verification
- **Features**: Government source verification, confidence scoring

### LinkUp - Advanced Contextual Search
- **API Key**: [NEEDED - Not yet provided]
- **Documentation**: https://docs.linkup.so/pages/documentation/api-reference/endpoint/post-search
- **Use Cases**: Superior contextual search vs Tavily, real-time web indexing
- **Comparison**: Test vs Tavily for relocation content research

## 🎬 Mux Video Platform
- **Token ID**: Available in environment
- **Token Secret**: Available in environment  
- **Environment Key**: `26hi0t52rcm3pl738jugp7sp8` (PUBLIC_MUX_ENV_KEY)

### Country Video Assets (Mux Playback IDs)
- **Cyprus**: `ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM` ✅
- **Portugal**: `Z01R9CHNHPpHJU21OLIWoN02GZ2lOLi5fTWltOEKcuOQQ` 
- **Malta**: `rC7EUyqkkODi01yLvxd7GDsjQpcjcrO7gV00IsBRN4Es4`
- **Dubai**: `6L02MpxKnUJVvHzC3M00n01ZoYH1XMrl01Kv6Zhi8O6ffY8`
- **Singapore**: `Lq02MyaOxqH9o1Y7NEvQ3Z02w00pNl8kgfpHIkW8SmjrTw`
- **Caribbean**: `bW029UWH4uUuLmWQMCoDD99JYMsKiY6Z4i500lZ600VBEU`

### Banner/Hero Videos
- **Desktop Hero**: `ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM` (Cyprus)
- **Mobile Hero**: `lKoMAX9eQ1aNdFc6squdJgBlkhBMUDjuq43tf00jZpik` (Low-res)

## 🤖 AI Gateway
- **API Key**: Available in Vercel environment variables
- Used for AI-powered content generation

## 📧 Resend Email
- **API Key**: Available in Vercel environment for transactional emails

## 🔧 Automation & Cron Jobs
- **CRON_SECRET**: Available in Vercel environment variables
- **Publish Endpoint**: `/api/cron/publish-content` (every 6 hours)
- **Daily Content**: `/api/cron/daily-content` (daily 9 AM UTC)
- **Weekly Review**: `/api/cron/weekly-review` (Mondays 10 AM UTC)

## 🔧 Usage Instructions

### Sanity Operations:
```bash
# Use Developer token for read/write operations
SANITY_API_TOKEN="sk10CmWI..." node script.js

# Use Editor token for content management
SANITY_API_TOKEN="skYp9AF9..." node script.js

# Use Deploy token for deployment operations  
SANITY_API_TOKEN="skf4GZNR..." node script.js
```

### Vercel Operations:
```bash
# Deploy to production
VERCEL_TOKEN="gAYaR1sjB2NTXl4oYQ4CrmeY" npx vercel --prod --yes --token $VERCEL_TOKEN
```

### Environment Variables Setup:
```bash
# For local development
PUBLIC_SANITY_PROJECT_ID=bc08ijz6
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=sk10CmWI... # Developer token for most operations
```

## 🛡️ Security Notes
- **Never commit this file to Git** - added to .gitignore
- Developer token has full read/write access
- Editor token has content management permissions
- Deploy token is for CI/CD operations only
- All tokens are project-specific to `bc08ijz6`

## 📝 Token Permissions
- **Developer**: Full database access, schema changes, content CRUD
- **Editor**: Content management, publishing, categories
- **Deploy**: Deployment operations, build triggers

---
**Last Updated**: September 25, 2024  
**Project**: Relocation Quest (relocation.quest)