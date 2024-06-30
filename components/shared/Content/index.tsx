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
  contentGridWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  contentGridStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  titleBadge?: any
}

export function Content({
  className = '',
  title = 'We are Sensplastik®',
  content = '',
  contentColumns = 2,
  titleLevel = 3,
  titleBadge = null,
  titleGridWidth = 4,
  contentGridWidth = 7,
  contentGridStart = 7
}: ContentProps) {
  //
  const HeadingTag = titleLevel
    ? (`h${titleLevel}` as keyof JSX.IntrinsicElements)
    : 'h3'

  // Sanitize content on the server side
  const sanitizedContent = sanitizeContent(content)

  // Render article only if sanitizedContent is truthy
  const hasContent = !!sanitizedContent

  const contentStyle = {
    gridColumn:
    contentGridStart !== null ? `${contentGridStart} / span ${contentGridWidth}` : undefined,
  }
  

  return (
    <div className={componentStyles({ class: className })}>
      <div className="content__left" style={{ gridColumn: `span ${titleGridWidth}` }}>
        <span className="content__title">
          <HeadingTag>
            {title}
            {titleBadge && (
              <span className='content__title-badge'>{titleBadge}</span>
            )}
          </HeadingTag>
        </span>
      </div>
      <div className="content__right" style={contentStyle}>
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
