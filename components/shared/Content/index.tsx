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
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6
  titleGridWidth?: 1 | 2 | 3 | 4 | 5 | 6 
}

export function Content({
  className = '',
  title = 'We are Sensplastik®',
  content = '',
  contentColumns = 2,
  /** The size of the title, from 1 to 6 (corresponding to h1, h2...)*/
  titleLevel = 3,
  /** The width span of the title grid container, default to 4 */
  titleGridWidth = 4,
}: ContentProps) {
  const HeadingTag = titleLevel
    ? (`h${titleLevel}` as keyof JSX.IntrinsicElements)
    : 'h3'

  // Sanitize content on the server side
  const sanitizedContent = sanitizeContent(content)

  // Render article only if sanitizedContent is truthy
  const hasContent = !!sanitizedContent

  return (
    <div className={componentStyles({ class: className })}>
      <div className="content__left" style={{gridColumn: `span ${titleGridWidth}`}}>
        <span className="content__title">
        <HeadingTag >{title}</HeadingTag>
        </span>
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
