import { ImageIcon, ProjectsIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

import { flagEmoji } from './emoji'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,

  groups: [
    {
      name: 'info',
      title: 'Info',
      default: true,
    },
    {
      name: 'message',
      title: 'Message',
    },
    {
      name: 'theme',
      title: 'Theme',
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'gallery',
      title: 'Gallery',
    },
    {
      name: 'options',
      title: 'Options',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],

  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      group: 'info',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'info',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and project overview.',
      title: 'Overview',
      type: 'array',
      group: 'seo',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),

    defineField({
      name: 'headline',
      description: 'This field is the headline  of your project (subtitle)',
      title: 'Headline',
      type: 'string',
      group: 'info',
    }),

    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'array',
      group: 'info',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        }),
        // Custom blocks
        defineArrayMember({
          name: 'timeline',
          type: 'timeline',
        }),
        defineField({
          type: 'image',
          icon: ImageIcon,
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: 'asset.url',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              title: 'Caption',
              name: 'caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description:
                'Alternative text for screenreaders. Falls back on caption if not set',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      group: 'info',
    }),

    defineField({
      name: 'message',
      title: 'Message',
      type: 'message',
      group: 'message',
    }),

    defineField({
      name: 'theme',
      type: 'theme',
      group: 'theme',
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description:
        'This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the projects page.',
      type: 'picture',
      group: 'media',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'gallery',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'isEmpty',
              title: 'Is Empty',
              type: 'boolean',
            }),

            defineField({
              name: 'reference',
              title: 'Reference',
              type: 'string',
              hidden: ({ parent, value }) => parent.isEmpty,
            }),

            defineField({
              name: 'title',
              type: 'string',
              hidden: ({ parent, value }) => parent.isEmpty,
            }),

            defineField({
              name: 'image',
              title: 'Image',
              type: 'picture',
              hidden: ({ parent, value }) => parent.isEmpty,
            }),

            defineField({
              name: 'gridWidth',
              title: 'Grid Width',
              type: 'string',
              options: {
                layout: 'radio',
                list: [
                  { title: 'Half Width', value: 'half' },
                  { title: 'Full Width', value: 'full' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              reference: 'reference',
              gridWidth: 'gridWidth',
              image: 'image',
              title: 'title',
              isEmpty: 'isEmpty',
            },
            prepare({ isEmpty, reference, title, image, gridWidth }) {
              return {
                media: image?.default?.asset ? image.default : flagEmoji,
                title: isEmpty ? 'Empty Item' : title ? title : 'Gallery Item',
                subtitle: `${reference ? `${reference} - ` : ''}  ${gridWidth ? gridWidth : 'default'}`,
              }
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      group: 'info',
      to: { type: 'client' },
    }),

    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      group: 'info',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'deliverable' }],
        }),
      ],
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      group: 'info',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'technology' }],
        }),
      ],
    }),

    /*defineField({
      name: 'duration',
      title: 'Duration',
      type: 'duration',
    }),*/

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'related',
      title: 'Related Projects',
      type: 'array',
      group: 'options',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
  ],
})
