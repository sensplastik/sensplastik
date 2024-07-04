import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,

  groups: [
    {
      name: 'content',
      title: 'Content',
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
      name: 'options',
      title: 'Options',
    },
  ],

  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your homepage.',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the website homepage.',
      title: 'Description',
      type: 'array',
      group: 'content',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
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
      name: 'showStatusBar',
      title: 'Show Status Bar',
      type: 'boolean',
      group: 'options',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },

    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
