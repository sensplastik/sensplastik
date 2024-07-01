import { Image } from 'sanity'

export interface ProjectGalleryItem {
  reference?: string
  title?: string
  image: Image
  gridWidth: 'half' | 'full' | 'default'
  isEmpty: boolean
}

export function ProjectGalleryItem(props: ProjectGalleryItem) {
  const {
    reference,
    title,
    image,
    gridWidth = 'default',
    isEmpty = false,
  } = props
  return (
    <>
      <span>{reference}</span>
      <p>{title}</p>
    </>
  )
}
