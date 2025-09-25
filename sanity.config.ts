import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'relocation-quest',
  title: 'Relocation Quest',
  projectId: 'bc08ijz6',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'post',
        title: 'Blog Post',
        type: 'document',
        description: 'Articles about international relocation, visas, tax optimization, and global lifestyle. Each post provides expert guidance for people moving between countries.',
        icon: () => '📝',
        fieldsets: [
          {
            name: 'content',
            title: 'Content',
            description: 'Main article content and metadata',
            options: { collapsible: false }
          },
          {
            name: 'media',
            title: 'Media & Images', 
            description: 'Visual content for the article',
            options: { collapsible: true, collapsed: false }
          },
          {
            name: 'seo',
            title: 'SEO Optimization',
            description: 'Search engine optimization settings for better visibility',
            options: { collapsible: true, collapsed: true }
          },
          {
            name: 'taxonomy',
            title: 'Categories & Tags',
            description: 'Organize content for better discoverability',
            options: { collapsible: true, collapsed: true }
          },
          {
            name: 'publishing',
            title: 'Publishing Settings',
            description: 'Author, dates, and publication status',
            options: { collapsible: true, collapsed: true }
          }
        ],
        fields: [
          {
            name: 'title',
            title: 'Article Title',
            type: 'string',
            description: 'Main headline for the article. Should be clear, descriptive and include primary location/topic (e.g., "Cyprus Golden Visa Guide 2024")',
            fieldset: 'content',
            validation: (Rule) => Rule.required().min(10).max(100).error('Title must be between 10-100 characters for optimal SEO'),
          },
          {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: 'URL-friendly version used in web addresses. Auto-generated from title but can be customized for SEO.',
            fieldset: 'content',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required().error('URL slug is required for publication. Click "Generate" to create from title.'),
          },
          {
            name: 'excerpt',
            title: 'Article Excerpt',
            type: 'text',
            description: 'Brief summary shown in article previews and search results. Should highlight key benefits and target audience.',
            fieldset: 'content',
            rows: 3,
            validation: (Rule) => Rule.max(300).warning('Keep excerpt under 300 characters for better display in previews'),
          },
          {
            name: 'body',
            title: 'Article Content',
            type: 'array',
            description: 'Main content of the article. Use headings to structure content logically for better readability and SEO.',
            fieldset: 'content',
            of: [
              {
                type: 'block',
                title: 'Rich Text',
                styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'Heading 1', value: 'h1'},
                  {title: 'Heading 2', value: 'h2'},
                  {title: 'Heading 3', value: 'h3'},
                  {title: 'Quote', value: 'blockquote'},
                ],
                marks: {
                  decorators: [
                    {title: 'Bold', value: 'strong'},
                    {title: 'Italic', value: 'em'},
                    {title: 'Code', value: 'code'},
                  ],
                  annotations: [
                    {
                      title: 'External Link',
                      name: 'link',
                      type: 'object',
                      fields: [
                        {
                          title: 'URL',
                          name: 'href',
                          type: 'url',
                          description: 'External website link (include https://)',
                        },
                        {
                          title: 'Open in New Tab',
                          name: 'blank',
                          type: 'boolean',
                          description: 'Check to open link in new tab (recommended for external links)',
                          initialValue: true
                        }
                      ]
                    }
                  ]
                },
                lists: [
                  {title: 'Bullet List', value: 'bullet'},
                  {title: 'Numbered List', value: 'number'}
                ]
              },
              {
                type: 'image',
                title: 'Inline Image',
                description: 'Add images within article content for visual breaks and illustration',
                options: {
                  hotspot: true,
                },
                fields: [
                  {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    description: 'Describe the image for screen readers and SEO (required for accessibility)',
                    validation: (Rule) => Rule.required().error('Alt text is required for accessibility and SEO'),
                  },
                  {
                    name: 'caption',
                    type: 'string', 
                    title: 'Caption',
                    description: 'Optional caption shown below the image',
                  }
                ],
              },
            ],
            validation: (Rule) => Rule.required().error('Article content cannot be empty'),
          },
          {
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            description: 'Main image for the article, shown in previews and social media shares. Recommended: 1200x630px for optimal social sharing.',
            fieldset: 'media',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alt Text',
                description: 'Describe the featured image for screen readers and SEO',
                validation: (Rule) => Rule.required().error('Alt text is required for the featured image'),
              },
            ],
            validation: (Rule) => Rule.required().error('Featured image is required for article promotion and SEO'),
          },
          {
            name: 'thumbnailVideo',
            title: 'Thumbnail Video (Optional)',
            type: 'object',
            description: '🎬 Add a video thumbnail to make this article stand out on the homepage and category pages. Short, engaging clips work best (5-15 seconds).',
            fieldset: 'media',
            fields: [
              {
                name: 'muxPlaybackId',
                title: 'Mux Playback ID',
                type: 'string',
                description: 'Enter the Playback ID from Mux dashboard (e.g., ew9vFwrawM3Eq1MVGHUZwu4IPoFOHVv002Hal1ei02JXM)',
                validation: (Rule) => Rule.custom((value) => {
                  if (!value) return true;
                  if (value.length < 10 || value.length > 60) {
                    return 'Invalid Mux Playback ID format';
                  }
                  return true;
                }),
              },
              {
                name: 'posterImage',
                title: 'Poster Frame (Optional)',
                type: 'image',
                description: 'Static frame shown before video loads. If not set, will use main image.',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'autoplay',
                title: 'Autoplay on Hover',
                type: 'boolean',
                description: 'Start playing when user hovers over the thumbnail',
                initialValue: true,
              }
            ],
          },
          {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'Custom title for search engines. If empty, main title will be used. Include primary keyword and keep under 60 characters.',
            fieldset: 'seo',
            validation: (Rule) => Rule.max(60).warning('SEO title should be under 60 characters to display fully in search results'),
          },
          {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            description: 'Brief description for search engines and social media. Should include focus keyword and compelling call-to-action.',
            fieldset: 'seo',
            rows: 3,
            validation: (Rule) => Rule.max(160).warning('Meta description should be under 160 characters for optimal display in search results'),
          },
          {
            name: 'focusKeyword',
            title: 'Focus Keyword',
            type: 'string',
            description: 'Primary keyword to rank for (e.g., "cyprus golden visa", "portugal residency"). Should appear in title and meta description.',
            fieldset: 'seo',
            validation: (Rule) => Rule.required().error('Focus keyword is essential for SEO optimization'),
          },
          {
            name: 'category',
            title: 'Primary Category',
            type: 'reference',
            description: 'Main category for this article. Choose the most relevant topic.',
            fieldset: 'taxonomy',
            to: [{ type: 'category' }],
            validation: (Rule) => Rule.required().error('Category is required for content organization'),
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            description: 'Additional topics and keywords. Use for secondary locations, visa types, or specific subjects (max 6 recommended).',
            fieldset: 'taxonomy',
            of: [
              {
                type: 'reference',
                to: [{ type: 'tag' }],
              },
            ],
            validation: (Rule) => Rule.max(8).warning('Consider limiting to 6-8 tags for better organization'),
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            description: 'Article author. Their credentials and expertise will be shown with the article for trust and authority.',
            fieldset: 'publishing',
            to: [{ type: 'author' }],
            validation: (Rule) => Rule.required().error('Author must be assigned for credibility and accountability'),
          },
          {
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            description: 'Publication date and time. Leave empty for drafts. Future dates can schedule publication.',
            fieldset: 'publishing',
          },
        ],
        preview: {
          select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
            category: 'category.title',
            publishedAt: 'publishedAt'
          },
          prepare(selection) {
            const {title, author, category, publishedAt} = selection;
            const publishStatus = publishedAt ? `Published ${new Date(publishedAt).toLocaleDateString()}` : 'Draft';
            return {
              title: title,
              subtitle: `${category || 'Uncategorized'} • ${author || 'No author'} • ${publishStatus}`,
              media: selection.media
            };
          }
        }
      },
      {
        name: 'category',
        title: 'Category',
        type: 'document',
        description: 'Content categories for organizing articles by location or topic. Categories appear in main navigation and help users find related content.',
        icon: () => '📁',
        fields: [
          {
            name: 'title',
            title: 'Category Name',
            type: 'string',
            description: 'Display name for the category (e.g., "Cyprus", "Golden Visas", "Tax Planning"). Keep concise and descriptive.',
            validation: (Rule) => Rule.required().min(2).max(50).error('Category name must be between 2-50 characters'),
          },
          {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: 'URL-friendly version for category pages (/categories/slug). Auto-generated but can be customized.',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required().error('URL slug is required for category pages'),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Brief description of what content belongs in this category. Shown on category pages and helps with SEO.',
            rows: 3,
            validation: (Rule) => Rule.max(200).warning('Keep description under 200 characters for better display'),
          },
          {
            name: 'color',
            title: 'Brand Color',
            type: 'string',
            description: 'Hex color code for category branding (e.g., #3B82F6). Used in category badges and navigation highlights.',
            validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error('Please enter a valid hex color code (e.g., #3B82F6)'),
          },
        ],
        preview: {
          select: {
            title: 'title',
            description: 'description',
            color: 'color'
          },
          prepare(selection) {
            const {title, description, color} = selection;
            return {
              title: title,
              subtitle: description || 'No description',
              media: color ? () => `🎨` : () => '📁'
            };
          }
        }
      },
      {
        name: 'tag',
        title: 'Tag',
        type: 'document',
        description: 'Content tags for detailed categorization. Use for specific topics, visa types, or secondary locations that don\'t warrant full categories.',
        icon: () => '🏷️',
        fields: [
          {
            name: 'title',
            title: 'Tag Name',
            type: 'string',
            description: 'Short, specific tag name (e.g., "Digital Nomad", "Investment", "Healthcare"). Keep under 25 characters.',
            validation: (Rule) => Rule.required().min(2).max(25).error('Tag name must be between 2-25 characters for optimal display'),
          },
          {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: 'URL-friendly version for tag pages (/tags/slug). Auto-generated from title.',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required().error('URL slug is required for tag pages'),
          },
        ],
        preview: {
          select: {
            title: 'title'
          },
          prepare(selection) {
            const {title} = selection;
            return {
              title: title,
              subtitle: 'Tag',
              media: () => '🏷️'
            };
          }
        }
      },
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        description: 'Content authors and experts. Authors build trust and authority for relocation advice. Include credentials and expertise areas.',
        icon: () => '👤',
        fieldsets: [
          {
            name: 'profile',
            title: 'Profile Information',
            description: 'Basic author details and contact',
            options: { collapsible: false }
          },
          {
            name: 'expertise',
            title: 'Expertise & Credentials',
            description: 'Professional background and specializations',
            options: { collapsible: true, collapsed: false }
          }
        ],
        fields: [
          {
            name: 'name',
            title: 'Full Name',
            type: 'string',
            description: 'Author\'s display name as it appears on articles and profile pages.',
            fieldset: 'profile',
            validation: (Rule) => Rule.required().min(2).max(100).error('Author name must be between 2-100 characters'),
          },
          {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: 'URL-friendly version for author profile pages (/authors/slug). Auto-generated from name.',
            fieldset: 'profile',
            options: {
              source: 'name',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required().error('URL slug is required for author profile pages'),
          },
          {
            name: 'image',
            title: 'Profile Photo',
            type: 'image',
            description: 'Professional headshot or profile picture. Square format recommended (400x400px minimum) for consistent display.',
            fieldset: 'profile',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alt Text',
                description: 'Describe the photo for accessibility (e.g., "Professional headshot of John Smith")',
                validation: (Rule) => Rule.required().error('Alt text is required for profile photos'),
              }
            ],
            validation: (Rule) => Rule.required().error('Profile photo builds trust and credibility with readers'),
          },
          {
            name: 'bio',
            title: 'Biography',
            type: 'text',
            description: 'Brief professional bio highlighting expertise in international relocation, tax, or immigration. Shown with articles and on profile page.',
            fieldset: 'expertise',
            rows: 4,
            validation: (Rule) => Rule.required().min(50).max(500).error('Bio should be 50-500 characters to establish credibility without being too long'),
          },
        ],
        preview: {
          select: {
            title: 'name',
            subtitle: 'bio',
            media: 'image'
          },
          prepare(selection) {
            const {title, subtitle} = selection;
            return {
              title: title,
              subtitle: subtitle ? `${subtitle.substring(0, 60)}...` : 'No bio added',
              media: selection.media
            };
          }
        }
      },
    ],
  },
});