/**
 * Retrieves the background elements from the document.
 *
 * @returns The main page element inside the body.
 */
export const getRootPageElement = () => {
  return document.querySelector('body > .page');
};

/**
 * Updates the background color of the document body and a specified main element.
 *
 * @param backgroundElements - The elements whose background color needs to be updated.
 * @param color - The new background color to set.
 */
export const updateBackgroundColor = (pageElement: any, color: string) => {

  // Set the new background color for the document body
  document.body.style.backgroundColor = color;

  // If a main element is provided, set its background color
  if (pageElement) {
    pageElement.style.backgroundColor = color;
  }
};