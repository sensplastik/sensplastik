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
  const rows = items.reduce((acc: (JSX.Element | JSX.Element[])[], item, index) => {
    const { title, content, separator } = item

    // Check if title exists and is truthy
    const renderTitle = title && title.trim() !== ''
    // Ensure content exists and sanitize it
    const sanitizedContent = content ? sanitizeContent(content) : ''

    // Create the content item
    const contentItem = (
      <div key={index} className="content-table__item">
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
    )

    // If it's a separator, push it directly to the accumulator
    if (separator) {
      acc.push(<div key={`separator-${index}`} className="content-table__separator" />)
    } else {
      // If it's an item, add it to the current row or start a new row
      const currentRow = acc[acc.length - 1]
      if (Array.isArray(currentRow) && currentRow.length < 2) {
        currentRow.push(contentItem)
      } else {
        acc.push([contentItem])
      }
    }

    // If we just completed a row, push the row into the accumulator
    if (Array.isArray(acc[acc.length - 1]) && acc[acc.length - 1].length === 2) {
      const completedRow = acc.pop() as JSX.Element[]
      acc.push(
        <div key={`row-${index}`} className="content-table__row">
          {completedRow}
        </div>
      )
    }

    return acc
  }, [])

  // Check if the last item is an unpaired item and wrap it in a row
  const lastRow = rows[rows.length - 1]
  if (Array.isArray(lastRow) && lastRow.length === 1) {
    rows[rows.length - 1] = (
      <div key={`row-${rows.length - 1}`} className="content-table__row">
        {lastRow}
      </div>
    )
  }

  return (
    <div className={componentStyles({ class: className })}>
      <Section>
        <div className="content-table__heading">
          {title && <h4 className="content-table__title">{title}</h4>}
        </div>
      </Section>

      {/* Spacer 40px */}
      <Spacer paddingTop={{ default: '40px' }} />

      {rows}
    </div>
  )
}
