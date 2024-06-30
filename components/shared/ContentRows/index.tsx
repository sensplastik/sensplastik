import './ContentRows.scss'

import { cva } from 'cva'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

const componentStyles = cva('content-rows')

export interface RowArticleProps {
  title?: string
  content?: string
  titleColor?:string
  gridColumnStart?: number
  gridColumnWidth?: number
}

export interface ContentRowsProps {
  className?: string
  title?: string
  items?: RowArticleProps[]
}

// Default data for ContentColumns items
const defaultItems: RowArticleProps[] = [
  {
    title: 'Building Brands with Lasting Stability',
    content: '',
    titleColor:'white',
    gridColumnStart: 7,
    gridColumnWidth: 3,
  },
]

export function ContentRows({
  className = '',
  title = 'Sensplastik®',
  items = defaultItems,
}: ContentRowsProps) {
  return (
    <div className={componentStyles({ class: className })}>
      <div className="content-rows__left">
        {title && <h3 className="content-rows__title">{title}</h3>}
      </div>

      <div className="content-rows__right">
        {items && (
          <ul className="content-rows__list">
            {items.map((item, index) => {
              const { title, content, gridColumnStart, gridColumnWidth } = item

              // Check if title exists and is truthy
              const renderTitle = title && title.trim() !== ''
              // Ensure content exists and sanitize it
              const sanitizedContent = content ? sanitizeContent(content) : ''

              return (
                <li className="content-rows__item" key={index}>
                  <article
                    className="content-row-item"
                    key={index}
                    style={{
                      gridColumnStart: gridColumnStart,
                      gridColumnEnd: `span ${gridColumnWidth}`,
                    }}
                  >
                    {renderTitle && (
                      <h4 className="content-row-item__title">{title}</h4>
                    )}
                    {sanitizedContent && (
                      <div
                        className="content-row-item__content"
                        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                      />
                    )}
                  </article>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
