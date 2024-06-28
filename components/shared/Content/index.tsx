import './Content.scss'

import { cva } from 'cva'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

const componentStyles = cva('content')

export interface ContentProps {
  className?: string
  title?: string
  content?: string
  contentColumns?: number
}

export function Content({
  className = '',
  title = 'We are Sensplastik®',
  content = '',
  contentColumns = 2,
}: ContentProps) {
  // Sanitize content on the server side
  const sanitizedContent = sanitizeContent(content)

  // Render article only if sanitizedContent is truthy
  const hasContent = !!sanitizedContent

  return (
    <div className={componentStyles({ class: className })}>
      <div className="content__left">
        <h3 className="content__title">{title}</h3>
      </div>
      <div className="content__right">
        {hasContent && (
          <article
            className="content__article"
            style={{ columnCount: contentColumns }}
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          ></article>
        )}
      </div>
    </div>
  )
}
