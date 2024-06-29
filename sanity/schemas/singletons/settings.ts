import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: [
    {
      name: 'globals',
      title: 'Globals',
      default: true,
    },
    {
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'globals',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      group: 'globals',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      group: 'globals',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email(),
      group: 'globals',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      group: 'globals',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
    //
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
            {
              type: 'project',
            },
            {
              type: 'link',
            },
          ],
        },
      ],
      group: 'navigation',
    }),
    //
    defineField({
      name: 'footer',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      fields: [
        defineField({
          name: 'info',
          title: 'Footer Info',
          type: 'array',
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
            }),
          ],
        }),
        defineField({
          name: 'showBrand',
          title: 'Show brand',
          type: 'boolean',
        }),
        defineField({
          name: 'showAddress',
          title: 'Show address',
          type: 'boolean',
        }),
        defineField({
          name: 'showInstagram',
          title: 'Show instagram',
          type: 'boolean',
        }),
        defineField({
          name: 'showEmail',
          title: 'Show email',
          type: 'boolean',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
