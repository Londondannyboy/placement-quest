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

## 🎬 Mux Video Platform
- **Token ID**: Available in environment
- **Token Secret**: Available in environment  
- **Environment Key**: `26hi0t52rcm3pl738jugp7sp8` (PUBLIC_MUX_ENV_KEY)

## 🤖 AI Gateway
- **API Key**: Available in Vercel environment variables
- Used for AI-powered content generation

## 📧 Resend Email
- **API Key**: Available in Vercel environment for transactional emails

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