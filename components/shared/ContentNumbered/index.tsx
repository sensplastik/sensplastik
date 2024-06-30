import './ContentNumbered.scss'

import { cva } from 'class-variance-authority'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

const componentStyles = cva('content-numbered')

export interface NumberedArticleProps {
  number?: string
  title?: string
  content?: string
  gridColumnStart?: number
  gridColumnWidth?: number
}

export interface ContentNumberedProps {
  className?: string
  items?: NumberedArticleProps[]
}

// Default data for ContentColumns items
const defaultItems: NumberedArticleProps[] = [
  {
    number: '01',
    title: 'Sensplastik®',
    content: '<p>Building Brands with Lasting Stability</p>',
    gridColumnStart: 7,
    gridColumnWidth: 2,
  },
]

export function ContentNumbered({
  className = '',
  items = defaultItems,
}: ContentNumberedProps) {
  return (
    <div className={componentStyles({ class: className })}>
      {items.map((item, index) => {
        const { number, title, content, gridColumnStart, gridColumnWidth } =
          item

        const renderNumber = number && number.trim() !== ''
        const renderTitle = title && title.trim() !== ''
        const sanitizedContent = content ? sanitizeContent(content) : ''

        return (
          <article
            className="content-numbered__item"
            key={index}
            style={{
              gridColumnStart: gridColumnStart,
              gridColumnEnd: `span ${gridColumnWidth}`,
            }}
          >
            {renderNumber && (
              <span className="content-numbered__number">{number}</span>
            )}
            {renderTitle && (
              <h4 className="content-numbered__title">{title}</h4>
            )}
            {sanitizedContent && (
              <div
                className="content-numbered__content"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />
            )}
          </article>
        )
      })}
    </div>
  )
}
