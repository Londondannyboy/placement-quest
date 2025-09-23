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
        name: 'article',
        title: 'Article',
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