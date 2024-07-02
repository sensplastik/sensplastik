import './ProjectRelated.scss'

import { cva } from 'cva'
import Link from 'next/link'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

import { ProjectRelatedItem } from './ProjectRelatedItem'

const componentStyles = cva('project-related')

interface ProjectRelatedProps {
  className?: string
  items?: ProjectRelatedItem[]
}

export function ProjectRelated(props: ProjectRelatedProps) {
  const { className, items } = props

  return (
    <>
      <div className={componentStyles({ class: className })}>
        {/* Related */}
        {items && (
          <>
         
              {items.map((item, index) => {
                const { slug, title, deliverables } = item

                return (
                  <ProjectRelatedItem
                    key={index}
                    index={index +1 }
                    slug={slug}
                    title={title}
                    deliverables={deliverables}
                  />
                )
              })}
           
          </>
        )}
      </div>
    </>
  )
}
