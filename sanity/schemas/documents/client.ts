import { CaseIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'client',
  title: 'Client',
  icon: CaseIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'url',
      name: 'website',
      title: 'Website',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',     
    },
    prepare({ title }) {
      return {
        subtitle: 'Client',
        title,
      }
    },
  },
})
