# ✅ VIDEO ISSUE SOLVED - Playback IDs vs Asset IDs

## The Problem
All videos except Cyprus were showing network errors. We tried everything:
- Different video components
- iframe embeds
- Animated GIFs
- Static thumbnails

## The Solution 
**We were using ASSET IDs instead of PLAYBACK IDs!**

### Understanding the Difference

#### ❌ Asset ID (WRONG)
```
6L02MpxKnUJVvHzC3M00n01ZoYH1XMrl01Kv6Zhi8O6ffY8
```
- This identifies the video asset in Mux
- Cannot be used for playback
- Found in Mux Dashboard under "Assets"

#### ✅ Playback ID (CORRECT)
```
5br2hylJ4F009vDLHrxWZ3C7UDTw5901GcXYBjSOWNV8k
```
- This is what you need for video playback
- Found in Mux Dashboard under each asset's "Playback IDs" section
- Used in streaming URL: `https://stream.mux.com/{playback-id}.m3u8`

## Current Status

| Country | Old (Asset ID) | New (Playback ID) | Status |
|---------|---------------|-------------------|--------|
| Cyprus | N/A | `ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM` | ✅ Always worked |
| Dubai | `6L02MpxKnUJVvHzC3M00n01ZoYH1XMrl01Kv6Zhi8O6ffY8` | `5br2hylJ4F009vDLHrxWZ3C7UDTw5901GcXYBjSOWNV8k` | ✅ Fixed |
| Portugal | `Z01R9CHNHPpHJU21OLIWoN02GZ2lOLi5fTWltOEKcuOQQ` | **NEED PLAYBACK ID** | ❌ Needs update |
| Malta | `rC7EUyqkkODi01yLvxd7GDsjQpcjcrO7gV00IsBRN4Es4` | **NEED PLAYBACK ID** | ❌ Needs update |
| Singapore | `Lq02MyaOxqH9o1Y7NEvQ3Z02w00pNl8kgfpHIkW8SmjrTw` | **NEED PLAYBACK ID** | ❌ Needs update |
| Caribbean | `bW029UWH4uUuLmWQMCoDD99JYMsKiY6Z4i500lZ600VBEU` | **NEED PLAYBACK ID** | ❌ Needs update |

## How to Get Playback IDs

1. **Login to Mux Dashboard**: https://dashboard.mux.com
2. **Go to Video → Assets**
3. **Click on each asset** (Portugal, Malta, Singapore, Caribbean)
4. **Find "Playback IDs" section**
5. **Copy the Playback ID** (not the Asset ID!)
6. **Update in code**

## Code Location
Update the playback IDs in:
- `/src/pages/index.astro` (lines ~500-580)

## Example Update
```astro
<!-- Portugal - REPLACE WITH CORRECT PLAYBACK ID -->
<VideoThumbnail 
  playbackId="PASTE_PORTUGAL_PLAYBACK_ID_HERE"
  title="Portugal - Golden Visa"
  ...
/>
```

## Additional Fix: Draft Content
We also fixed the site to only show published content:
- Added `&& !(_id in path("drafts.**"))` to all Sanity queries
- Homepage, Articles, and Search pages now exclude drafts

---

**Last Updated**: September 25, 2025
**Status**: Dubai working, need playback IDs for other countries