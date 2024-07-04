/**
 * Retrieves the background elements from the document.
 *
 * @returns The main page element inside the body.
 */
export const getRootPageElement = () => {
  const page = document.querySelector('body > .page')
  const footer = document.querySelector('.page > .section--footer')
  return { page, footer }
}

/**
 * Updates the background color of the document body and a specified main element.
 *
 * @param backgroundElements - The elements whose background color needs to be updated.
 * @param color - The new background color to set.
 */
export const updateBackgroundColor = (pageElement: any, color: string) => {
      
    // Set the new background color for the document body
    document.body.style.backgroundColor = color

    const { page, footer } = pageElement

    // If a main element is provided, set its background color
    if (page) page.style.backgroundColor = color

    // If a footer element is provided, set its background color
    if (footer) footer.style.backgroundColor = color
  
}
