'use client'
import './List.scss'

import { cva } from 'cva'
import React, { useEffect, useRef } from 'react'

import useResizeObserver, {Size} from '@/hooks/useResizeObserver'

const componentStyles = cva('list', {
  variants: {
    type: {
      default: 'list--default',
      brands: 'list--brands',
      services: 'list--services',
    },
    animated: {
      true: 'list--animated',
    },
  },
  defaultVariants: {
    type: 'default',
    animated: false,
  },
})

export interface BrandProps {
  className?: string
  title: string
  website?: string
}

export interface BrandsProps {
  className?: string
  items?: BrandProps[]
  listType?: 'default' | 'brands' | 'services'
  enableAnimation?: boolean
  enableFadeEffect?: boolean
  animationDuration?: string
}

const defaultItems: BrandProps[] = [
  {
    title: 'Skykapital®',
  },
]

export function List({
  className = '',
  items = defaultItems,
  listType = 'default',
  enableAnimation = false,
  enableFadeEffect = true,
  animationDuration = '20s',
}: BrandsProps) {
  const container = useRef<HTMLDivElement>(null)

  const [size, listRef] = useResizeObserver();
  
  useEffect(() => {
     if (container.current && size?.height > 0) container.current.style.height = `${size?.height}px`     
  }, [size])

  const getGroupedItems = (items) => {
    const groups = []
    const numItems = items.length

    for (let i = 0; i < numItems - 1; i += 2) {
      const currentItem = items[i]
      const nextItem = items[i + 1]
      groups.push([currentItem, nextItem, currentItem])
    }

    if (numItems % 2 !== 0) {
      const lastItem = items[numItems - 1]
      groups.push([lastItem, lastItem, lastItem])
    }

    return groups
  }

  const groupedItems = getGroupedItems(items)

  const renderAnimatedListItem = (items, keyPrefix, ref?) => (
    <ul className="list__list" ref={ref ? ref : undefined}>
      {items.map((group, groupIndex) => (
        <li className="list__item" key={`${keyPrefix}-${groupIndex}`}>
          <div className="list__group">
            {group.map((item, index) => (
              <div key={index}><span>{item.title}</span></div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="list-container" ref={container}>
      <div
        style={{ '--list-animation-duration': animationDuration }}
        className={componentStyles({
          class: className,
          type: listType,
          animated: enableAnimation,
        })}
      >
        {enableAnimation ? (
          <>
            {renderAnimatedListItem(groupedItems, 'animated-list-1', listRef)}
            {renderAnimatedListItem(groupedItems, 'animated-list-2')}
          </>
        ) : (
          <ul className="list__list" ref={listRef}>
            {items.map((item, index) => (
              <li className="list__item" key={index}>
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      {enableAnimation && enableFadeEffect && <div className="fade-bottom" />}
    </div>
  )
}
