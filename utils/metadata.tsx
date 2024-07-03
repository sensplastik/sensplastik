import { toPlainText } from 'next-sanity';

/**
 * Extracts metadata for a given page, including title and description.
 * If the page has an overview, it converts it to plain text. 
 * If not, it falls back to a default description from the parent context.
 *
 * @param page - The page object containing metadata.
 * @param parent - The parent context providing a fallback description.
 * @returns The page metadata with title and description.
 */
export async function fetchPageMetadata(page: any, parent: any) {
  return {
    title: page?.title || 'Default Title', // Fallback title if not provided
    description: page?.overview
      ? toPlainText(page.overview) // Convert overview to plain text if available
      : (await parent).description // Fallback to parent description if overview is not present
  };
}