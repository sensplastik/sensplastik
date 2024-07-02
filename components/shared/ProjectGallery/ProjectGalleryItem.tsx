import './ProjectGalleryItem.scss'

import { cva } from 'cva'
import { Image } from 'sanity'

import { Picture } from '../Picture'

const componentStyles = cva('project-gallery-item', {
  variants: {
    gridWidth: {
      half: 'project-gallery-item--half',
      full: 'project-gallery-item--full',
      default: 'project-gallery-item--default',
    },
  },
  defaultVariants: {
    gridWidth: 'default',
  },
})

export interface ProjectGalleryItem {
  className?: string
  reference?: string
  title?: string
  image?: Image | string
  gridWidth?: 'half' | 'full' | 'default'
  isEmpty?: boolean
}

export function ProjectGalleryItem(props: ProjectGalleryItem) {
  const {
    className = '',
    reference,
    title,
    image,
    gridWidth = 'default',
    isEmpty = false,
  } = props

  return (
    <li className={`${componentStyles({ gridWidth })} ${className}`}>
      {!isEmpty && (
        <>
          {image && <Picture src={image} />}
          <div className='project-gallery-item__info'>
          <span className='project-gallery-item__reference'>{reference}</span>
          <p className='project-gallery-item__title'>{title}</p>
          </div>
        </>
      )}
    </li>
  )
}
