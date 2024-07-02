import './ProjectGallery.scss'

import { cva } from 'cva'
import Link from 'next/link'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

import { ProjectGalleryItem } from './ProjectGalleryItem'

const componentStyles = cva('project-gallery')

interface ProjectGalleryProps {
  className?: string
  items?: ProjectGalleryItem[]
}

export function ProjectGallery(props: ProjectGalleryProps) {
  const { className, items } = props

  return (
    <>
      <div className={componentStyles({ class: className })}>
        {/* Gallery */}
        {items && (
          <>
            <ul className="project-gallery__list">
              {items.map((item, index) => {
                const { reference, title, image, gridWidth, isEmpty } = item

                return (
                  <ProjectGalleryItem
                    key={index}
                    className="project-gallery__item"
                    reference={reference}
                    title={title}
                    image={image}
                    gridWidth={gridWidth}
                    isEmpty={isEmpty}
                  />
                )
              })}
            </ul>
          </>
        )}
      </div>
    </>
  )
}
