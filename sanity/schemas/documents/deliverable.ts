import { RetrieveIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'deliverable',
  title: 'Deliverable',
  icon: RetrieveIcon,
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
        subtitle: 'Deliverable',
        title,
      }
    },
  },
})
