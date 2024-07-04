import { BoltIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'technology',
  title: 'Technology',
  icon: BoltIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),    
  ],
  preview: {
    select: {
      title: 'title',     
    },
    prepare({ title }) {
      return {
        subtitle: 'Technology',
        title,
      }
    },
  },
})
