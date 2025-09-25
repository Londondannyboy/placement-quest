# 🎬 Mux Video Integration for Sanity Articles

## Option 1: Video Heroes for Articles

### Sanity Schema Update
Add a `heroVideo` field to your post schema:

```javascript
// In sanity/schemas/post.js
{
  name: 'heroVideo',
  title: 'Hero Video (Optional - replaces hero image if set)',
  type: 'object',
  fields: [
    {
      name: 'muxPlaybackId',
      title: 'Mux Playback ID',
      type: 'string',
      description: 'Enter the Playback ID from Mux (e.g., ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM)'
    },
    {
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      description: 'Fallback image if video fails to load'
    }
  ]
}
```

### Frontend Implementation
In your article template:

```astro
---
// In article/[slug].astro
const { heroVideo, mainImage } = article;
---

{heroVideo?.muxPlaybackId ? (
  <mux-player
    playback-id={heroVideo.muxPlaybackId}
    metadata-video-title={article.title}
    env-key={import.meta.env.PUBLIC_MUX_ENV_KEY}
    autoplay
    muted
    loop
    controls="true"
    style="width: 100%; aspect-ratio: 16/9;"
  />
) : mainImage && (
  <img src={urlFor(mainImage).url()} alt={article.title} />
)}
```

## Option 2: Videos Within Article Content

### Sanity Portable Text Video Block
Create a custom block type for videos:

```javascript
// In sanity/schemas/blockContent.js
{
  type: 'block',
  // ... existing block config
},
{
  name: 'muxVideo',
  title: 'Mux Video',
  type: 'object',
  fields: [
    {
      name: 'playbackId',
      title: 'Mux Playback ID',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string'
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      playbackId: 'playbackId',
      caption: 'caption'
    },
    prepare({ playbackId, caption }) {
      return {
        title: caption || 'Mux Video',
        subtitle: `Video: ${playbackId.substring(0, 10)}...`
      }
    }
  }
}
```

### Portable Text Component
Handle the video block in your content renderer:

```javascript
// In components/PortableTextComponents.jsx
const components = {
  types: {
    muxVideo: ({ value }) => (
      <div className="my-8">
        <mux-player
          playback-id={value.playbackId}
          metadata-video-title={value.caption || 'Video'}
          env-key={process.env.PUBLIC_MUX_ENV_KEY}
          autoplay={value.autoplay}
          muted={value.autoplay}
          controls="true"
          style={{ width: '100%', aspectRatio: '16/9' }}
        />
        {value.caption && (
          <p className="text-center text-sm text-gray-600 mt-2">
            {value.caption}
          </p>
        )}
      </div>
    )
  }
}
```

## Option 3: Smart Video Thumbnails

### Automatic Video Preview on Hover
For article listings, show video preview on hover:

```astro
<div class="group" onmouseenter="this.querySelector('mux-player')?.play()" 
     onmouseleave="this.querySelector('mux-player')?.pause()">
  {article.heroVideo ? (
    <mux-player
      playback-id={article.heroVideo.muxPlaybackId}
      muted
      preload="metadata"
      style="width: 100%; aspect-ratio: 16/9;"
    />
  ) : (
    <img src={urlFor(article.mainImage).url()} />
  )}
</div>
```

## Implementation Strategy

### Phase 1: Test with One Article
1. Add `heroVideo` field to schema
2. Upload a video to Mux
3. Add playback ID to one article
4. Test on staging

### Phase 2: Roll Out
1. Train content editors on Mux upload
2. Gradually add videos to high-traffic articles
3. Monitor performance impact

### Phase 3: Advanced Features
1. Video chapters
2. Closed captions
3. Analytics integration
4. A/B testing video vs image heroes

## Mux Upload Process for Editors

1. **Upload to Mux Dashboard**
   - Go to dashboard.mux.com
   - Upload video file
   - Wait for processing

2. **Get Playback ID**
   - Click on the video asset
   - Copy the Playback ID (NOT Asset ID)
   - Format: `ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM`

3. **Add to Sanity**
   - Edit article in Sanity Studio
   - Paste Playback ID in Hero Video field
   - Publish

## Performance Considerations

- **Lazy Load**: Only load videos when in viewport
- **Poster Images**: Always provide fallback images
- **Mobile**: Consider bandwidth - maybe image-only on mobile
- **Autoplay Policy**: Muted autoplay works, with-sound requires user interaction

## Example Articles That Would Benefit

1. **Country Overview Pages**: Show lifestyle footage
2. **Process Guides**: Step-by-step visa application videos
3. **Success Stories**: Client testimonial videos
4. **Property Tours**: Real estate investment opportunities
5. **City Tours**: "Day in the life" content

This would make Relocation Quest much more engaging and modern!