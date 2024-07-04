/**
 * Description: Defines the 'Theme' type for Sanity as an object,
 * allowing users to select a theme option, specify a background image,
 * and set a background color for the theme.
 */

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'theme', // Internal name for the type in the schema
  title: 'Theme', // Display name of the type in the Sanity Studio
  type: 'object', // Defines this type as an object with multiple fields
  fields: [
    defineField({
      name: 'mode', // Field name for the theme option
      title: 'Mode', // Display name for the theme field
      type: 'string', // Data type for the theme field
      description: 'Choose between Dark or Light theme options.', // Description of the field
      options: {
        list: [
          { title: 'Dark', value: 'dark' }, // Option for Dark theme
          { title: 'Light', value: 'light' }, // Option for Light theme
        ],
      },
    }),
    defineField({
      name: 'backgroundImage', // Field name for the background image
      title: 'Background Image', // Display name for the background image field
      type: 'image', // Data type for the background image field
      description:
        'Upload an image to be used as the background for the theme.', // Description of the field
      options: {
        hotspot: true, // Enable hotspot for better image cropping
      },
    }),
    defineField({
      name: 'backgroundColor', // Field name for the background color
      title: 'Background Color', // Display name for the background color field
      type: 'color', // Data type for the background color field
      description: 'Select a color to set as the background for the theme.', // Description of the field
      options: {
        disableAlpha: true,
        colorList: [
          { hex: "#1f1e1c" },
          { hex: "#7c7c7a" },
          { hex: "#8e8d86" },
          { hex: "#5f5a5a" },
          { hex: "#e3e1dd" },
          { hex: "#ebd248"},
          { hex: "#ffffff" },
        ],
      },
    }),
  ],
})
