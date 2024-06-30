import './ContentTable.scss'
import { cva } from 'cva'
import React from 'react'
import { sanitizeContent } from '@/utils/sanitizeContent'
import { Section } from '../Section'
import { Spacer } from '../Spacer'

const componentStyles = cva('content-table')

export interface TableItemProps {
  title?: string
  content?: string
  titleColor?: string
  contentColor?: string
  separator?: boolean
}

export interface TableRowsProps {
  className?: string
  title?: string
  items?: TableItemProps[]
}

// Default data for TableRowsProps items
const defaultItems: TableRowsProps[] = [
  {
    title: 'Sensplastik®',
    items: [],
  },
]

export function ContentTable({
  className = '',
  title = 'Sensplastik®',
  items = defaultItems,
}: TableRowsProps) {
  return (
    <div className={componentStyles({ class: className })}>
      <Section>
        <div className="content-table__heading">
          {title && <h4 className="content-table__title">{title}</h4>}
        </div>
      </Section>

      {/* Spacer 40px */}
      <Spacer paddingTop={{ default: '40px' }} />

      <div className="content-table__row">
        {items &&
          items.map((item, index) => {
            const { title, content, titleColor, contentColor, separator } = item

            // Check if title exists and is truthy
            const renderTitle = title && title.trim() !== ''
            // Ensure content exists and sanitize it
            const sanitizedContent = content ? sanitizeContent(content) : ''

            return (
              <React.Fragment key={index}>                
                {separator ? (
                  <div className="content-table__separator" />
                ) : (
                  <div className="content-table__item">
                    <article className="content-table-item">
                      {renderTitle && (
                        <h5 className="content-table-item__title">{title}</h5>
                      )}
                      {sanitizedContent && (
                        <div
                          className="content-table-item__content"
                          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                        />
                      )}
                    </article>
                  </div>
                )}
              </React.Fragment>
            )
          })}
      </div>
    </div>
  )
}
