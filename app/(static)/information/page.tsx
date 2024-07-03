// Import types for metadata handling from Next.js
import type { Metadata, ResolvingMetadata } from 'next'
// Import the notFound function from Next.js for handling 404 errors
import { notFound } from 'next/navigation'

// Import custom functions to load page data and fetch metadata
import { loadPage } from '@/sanity/loader/loadQuery'
import { fetchPageMetadata } from '@/utils/metadata'
import { resolveFolderSlug } from '@/utils/string'

// Import the main content component for the page
import MainContent from './main'

// Resolve the folder slug for the page
export const pageSlug = resolveFolderSlug()

// Generate metadata for the page
export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Load the page data using the resolved slug
  const { data: page } = await loadPage(pageSlug)

  // Fetch and return the metadata for the page, incorporating parent metadata
  return fetchPageMetadata(page, parent)
}

// Default export function for rendering the static page
export default async function StaticPageInformation() {
  // Load the initial page data using the resolved slug
  const initial = await loadPage(pageSlug)

  // If no data is found, trigger a 404 error
  if (!initial.data) {
    notFound()
  }

  // Return the main content component for the page
  return (<MainContent/>)
}
