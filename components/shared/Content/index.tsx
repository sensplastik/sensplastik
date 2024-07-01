import './Content.scss'

import { cva } from 'cva'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

const componentStyles = cva('content', {
  variants: {
    isVerticallyCentered: {
      true: 'content--vertically-centered',
      false: '',
    },
  },
  defaultVariants: {
    isVerticallyCentered: false,
  },
})

export interface ContentProps {
  className?: string
  title?: string
  content?: string
  contentColumns?: number
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6
  titleGridWidth?: 1 | 2 | 3 | 4 | 5 | 6 
  titleBadge?: any
  contentGridWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  contentGridStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  isVerticallyCentered?: boolean
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
  contentGridStart = 7,
  isVerticallyCentered = false
}: ContentProps) {
  const HeadingTag = titleLevel
    ? (`h${titleLevel}` as keyof JSX.IntrinsicElements)
    : 'h3'

  const sanitizedContent = sanitizeContent(content)

  const hasContent = !!sanitizedContent

  const contentStyle = {
    gridColumn:
    contentGridStart !== null ? `${contentGridStart} / span ${contentGridWidth}` : undefined,
  }

  return (
    <div
      className={componentStyles({ class: className, isVerticallyCentered })}
    >
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
