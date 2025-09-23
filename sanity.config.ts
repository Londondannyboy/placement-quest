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
        title: 'Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
          },
          {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
              },
            ],
          },
          {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
              {
                type: 'block',
              },
              {
                type: 'image',
                options: {
                  hotspot: true,
                },
                fields: [
                  {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                  },
                ],
              },
            ],
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
          },
          {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
          },
          {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            validation: (Rule) => Rule.max(60),
            description: 'Override title for SEO (60 chars max)',
          },
          {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.max(160),
            description: 'SEO meta description (160 chars max)',
          },
          {
            name: 'focusKeyword',
            title: 'Focus Keyword',
            type: 'string',
            description: 'Primary keyword for SEO optimization',
          },
          {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'tag' }],
              },
            ],
          },
        ],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Hex color code for category',
          },
        ],
      },
      {
        name: 'tag',
        title: 'Tag',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'bio',
            title: 'Bio',
            type: 'text',
          },
        ],
      },
    ],
  },
});