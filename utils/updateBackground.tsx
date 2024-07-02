export const getBackgroundElements = () => {
  // Get the elements
  const mainElement = document.querySelector('main')
  const footerElement = document.querySelector('.section--footer')
  return { mainElement, footerElement }
}

export const updateBackgroundColor = (backgroundElements:any, color: string) => {

    const {mainElement ,footerElement }  = backgroundElements

     // Set the new background color
     document.body.style.backgroundColor = color

     if (mainElement) {
       mainElement.style.backgroundColor = color
     }
 
     if (footerElement) {
       footerElement.style.backgroundColor = color
     }

}
