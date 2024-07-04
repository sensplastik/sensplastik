import { defineField, defineType } from 'sanity'

/**
 * Creates an image field configuration for Sanity schema.
 *
 * @param {string} name - The name of the field.
 * @param {string} title - The title of the field.
 * @param {string} description - The description of the field.
 * @param {string} [fieldset] - The fieldset for grouping the field.
 * @param {string} [group] - The group for the field.
 *
 * @returns {Object} The image field configuration.
 */
export function imageField(name, title, description?, fieldset?, group?, collapsed = true) {
  return {
    name: name,
    title: title,
    type: 'image',
    description: description,
    fieldset: fieldset,
    group: group,
    options: {
      hotspot: true,
      collapsible: true,
      collapsed:collapsed
    },
    fields: [
      // Caption field
      defineField({
        name: 'caption',
        type: 'string',
        title: 'Caption',
      }),

      // Is Animated Gif field
      defineField({
        title: 'Is Animated Gif',
        name: 'isAnimatedGif',
        type: 'boolean',
        hidden: ({ parent, value }) => parent?.isOptimized,
      }),


      // Optimize field
      defineField({
        title: 'Optimize',
        name: 'isOptimized',
        type: 'boolean',
        hidden: ({ parent, value }) => parent?.isAnimatedGif,
      }),

      // Quality field
      defineField({
        type: 'number',
        name: 'quality',
        title: 'Quality',
        description:
          'The compression quality (where applicable). Defaults are 75 for JPG and WebP and 55 for AVIF.',
        validation: (Rule) => Rule.min(0).max(100),
        hidden: ({ parent, value }) => !parent?.isOptimized,
      }),

      // Sharpen field
      defineField({
        type: 'number',
        name: 'sharpen',
        title: 'Sharpen',
        description: 'from 0 to 100',
        validation: (Rule) => Rule.min(0).max(100),
        hidden: ({ parent, value }) => !parent?.isOptimized,
      }),

      // Flip field
      defineField({
        title: 'Flip',
        name: 'flip',
        type: 'string',
        description: 'Flip image horizontally, vertically or both',
        options: {
          list: [
            { title: 'Horizontally', value: 'h' },
            { title: 'Vertically', value: 'v' },
          ],
        },
        hidden: ({ parent, value }) => !parent?.isOptimized,
      }),

      // Invert field
      defineField({
        title: 'Invert',
        name: 'invert',
        type: 'boolean',
        description: 'Invert the image.',
        hidden: ({ parent, value }) => !parent?.isOptimized,
      }),
      
      // Is SVG field
      defineField({
        title: 'Is SVG',
        name: 'isSVG',
        type: 'boolean',
        hidden: ({ parent, value }) =>
          parent?.isOptimized || parent?.isAnimatedGif,
      }),
    ],
  }
}
