# Sanity Webhook Setup for Auto-Redeployment

## Problem Statement
When you update Sanity content (add images, edit text, publish articles), Vercel doesn't automatically rebuild the site. This means:
- ❌ New content doesn't appear until manual redeployment
- ❌ Image updates aren't reflected on the live site
- ❌ Content changes require manual intervention

## Solution: Sanity Webhook → Vercel Deploy Hook

### Step 1: Get Vercel Deploy Hook URL
```bash
# Get your deploy hook from Vercel dashboard or CLI
VERCEL_DEPLOY_HOOK_URL="https://api.vercel.com/v1/integrations/deploy/prj_xxx/xxx"
```

### Step 2: Add Environment Variables
```bash
# Add to Vercel environment variables
SANITY_WEBHOOK_SECRET="sanity-webhook-secret-relocation-quest-2025"
VERCEL_DEPLOY_HOOK_URL="https://api.vercel.com/v1/integrations/deploy/[YOUR_HOOK_URL]"
```

### Step 3: Configure Sanity Webhook
In Sanity Studio Dashboard (https://relocation.quest/studio):

1. **Go to** → Manage → API → Webhooks
2. **Create New Webhook:**
   - **Name:** `Auto-Deploy Vercel`
   - **URL:** `https://relocation.quest/api/revalidate`
   - **Dataset:** `production`
   - **HTTP Method:** `POST`
   - **HTTP Headers:**
     ```
     Authorization: Bearer sanity-webhook-secret-relocation-quest-2025
     Content-Type: application/json
     ```
   - **Trigger on:** `Create`, `Update`, `Delete`
   - **Filter:** `_type in ["post", "article", "category"]`

### Step 4: Webhook Endpoint (Already Created)
The webhook endpoint at `/api/revalidate.ts` will:
1. ✅ **Verify** webhook secret for security
2. ✅ **Log** the content change for monitoring
3. ✅ **Trigger** Vercel redeployment via deploy hook
4. ✅ **Return** success/error status

### Step 5: Testing
After setup, test by:
1. **Edit any article** in Sanity Studio
2. **Save/Publish** the changes
3. **Check Vercel deployments** - should see new deployment triggered
4. **Verify** changes appear on live site within 2-3 minutes

## How It Works

```
┌─ Content Update ─────────────────────────────────────┐
│ 1. Edit article in Sanity Studio                    │
│ 2. Add image, change text, etc.                     │
│ 3. Click Save/Publish                               │
└──────────────────┬───────────────────────────────────┘
                   ↓
┌─ Sanity Webhook ─────────────────────────────────────┐
│ 1. Sanity detects content change                    │
│ 2. Sends POST to /api/revalidate                    │
│ 3. Includes document type and slug                  │
└──────────────────┬───────────────────────────────────┘
                   ↓
┌─ Vercel Redeployment ────────────────────────────────┐
│ 1. Webhook endpoint validates request               │
│ 2. Triggers Vercel deploy hook                      │
│ 3. Vercel rebuilds entire site with fresh content   │
│ 4. New deployment goes live automatically           │
└─────────────────────────────────────────────────────────┘
```

## Benefits
- ✅ **Instant Updates:** Content changes appear automatically
- ✅ **No Manual Work:** No need to remember to redeploy  
- ✅ **Fresh Images:** Image updates are immediately live
- ✅ **SEO Friendly:** New articles are immediately indexed
- ✅ **Team Friendly:** Non-technical editors can publish directly

## Monitoring
- Check `/api/revalidate` logs in Vercel Function logs
- Monitor webhook delivery in Sanity Studio webhook settings
- View deployment history in Vercel dashboard

## Alternative: Incremental Static Regeneration (ISR)
For more granular updates (single pages instead of full site), consider:
- Vercel's On-Demand ISR for specific pages only  
- Astro's experimental server islands
- But full site rebuild is simpler and more reliable

This setup ensures your content is always fresh without manual intervention!