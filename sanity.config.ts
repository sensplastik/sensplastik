'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import {colorInput} from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {media} from 'sanity-plugin-media'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import link from '@/sanity/schemas/documents/link'
import page from '@/sanity/schemas/documents/page'
import project from '@/sanity/schemas/documents/project'
import duration from '@/sanity/schemas/objects/duration'
import message from '@/sanity/schemas/objects/message'
import milestone from '@/sanity/schemas/objects/milestone'
import picture from '@/sanity/schemas/objects/picture'
import theme from '@/sanity/schemas/objects/theme'
import timeline from '@/sanity/schemas/objects/timeline'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

import client from './sanity/schemas/documents/client'
import deliverable from './sanity/schemas/documents/deliverable'
import technology from './sanity/schemas/documents/technology'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Sensplastik® Studio'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      duration,
      page,
      link,      
      client,
      deliverable,
      technology,
      project,                  
      // Objects
      milestone,
      timeline,
      picture,
      theme,
      message
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    media(),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput()
  ],
})
