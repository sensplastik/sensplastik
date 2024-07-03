import './Content.scss'

import { cva } from 'cva'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

// Define the styles for the component using `cva`
const componentStyles = cva('content', {
  variants: {
    isVerticallyCentered: {
      true: 'content--vertically-centered', // Class applied if `isVerticallyCentered` is true
      false: '',
    },
  },
  defaultVariants: {
    isVerticallyCentered: false, // Default to false if `isVerticallyCentered` is not specified
  },
})

// Define the props for the `Content` component
export interface ContentProps {
  className?: string
  title?: string
  content?: string
  contentColumns?: number
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6
  titleGridWidth?: 1 | 2 | 3 | 4 | 5 | 6 
  titleBadge?: any
  contentGridWidth?: 1 | 2 | 3 | 4 | 5 | 6 
  contentGridStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  isVerticallyCentered?: boolean
}

// Main `Content` component function
export function Content({
  className = '', // Default className is an empty string
  title = 'We are Sensplastik®', // Default title
  content = '', // Default content is an empty string
  contentColumns = 2, // Default number of content columns
  titleLevel = 3, // Default heading level is h3
  titleBadge = null, // Default title badge is null
  titleGridWidth = 4, // Default grid width for the title
  contentGridWidth = 6, // Default grid width for the content
  contentGridStart = 7, // Default grid start for the content
  isVerticallyCentered = false // Default vertical centering is false
}: ContentProps) {
  // Determine the heading tag based on `titleLevel`
  const HeadingTag = titleLevel
    ? (`h${titleLevel}` as keyof JSX.IntrinsicElements)
    : 'h3'

  // Sanitize the content before rendering
  const sanitizedContent = sanitizeContent(content)

  // Check if there is any content to display
  const hasContent = !!sanitizedContent

  // Style for the content section
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
