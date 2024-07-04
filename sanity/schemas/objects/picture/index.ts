import { defineField, defineType } from 'sanity'

import { imageField } from './image'

export default defineType({
  name: 'picture',
  title: 'Picture',
  type: 'object',
  fields: [
    imageField('default', 'Default Image', undefined, undefined, undefined, false),
    imageField('dark', 'Dark Image'),
    imageField('mobile', 'Mobile Image'),
    imageField('darkMobile', 'Dark Mobile Image'),
  ],
  preview: {
    select: {
      defaultImage: 'default',
    },
    prepare({ defaultImage }) {
      return {
        media: defaultImage,
      }
    },
  },
})
