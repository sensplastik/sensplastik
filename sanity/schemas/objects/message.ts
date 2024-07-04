import { defineField, defineType } from 'sanity'

/**
 * Description: Defines the 'message' type as an object in Sanity,
 * with fields for a title and content. The content field allows for 
 * rich text editing using Sanity's block content.
 */
export default defineType({
  name: 'message',       // Internal name for the type in the schema
  title: 'Message',      // Display name for the type in the Sanity Studio
  type: 'object',        // Defines this type as an object with multiple fields
  fields: [
    defineField({
      name: 'title',     // Field name for the message title
      title: 'Title',    // Display name for the title field
      type: 'string',    // Data type for the title field
      // Uncomment the line below if you want to make the title field required
      // validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'content',   // Field name for the message content
      title: 'Content',  // Display name for the content field
      type: 'array',     // Data type for the content field
      of: [{ type: 'block' }], // Defines the content as an array of block content (rich text)
    }),
  ],
})
