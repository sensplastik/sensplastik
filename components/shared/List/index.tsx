'use client'
import './List.scss'

import { cva } from 'cva'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

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

  const updateItemHeights = () => {
    const lists = container.current?.querySelectorAll('.list__list')

    if (lists && lists?.length > 0) {
      const listHeight = (lists[0] as HTMLElement).offsetHeight
      if (container.current) container.current.style.height = `${listHeight}px`
    }

    lists?.forEach((ul) => {
      if (ul) {
        const list = ul.querySelectorAll('.list__item') || []
        list.forEach((li) => {
          const div = li.querySelector('.list__group > div')
          if (div) {
            const divHeight = (div as HTMLElement)?.offsetHeight
            if (divHeight) {
              ;(li as HTMLElement).style.height = `${divHeight}px`
            }
          }
        })
      }
    })
  }

  useEffect(() => {
    updateItemHeights()
    window.addEventListener('resize', updateItemHeights)
    return () => {
      window.removeEventListener('resize', updateItemHeights)
    }
  }, [items])

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

  const renderAnimatedListItem = (items, keyPrefix) => (
    <ul className="list__list">
      {items.map((group, groupIndex) => (
        <li className="list__item" key={`${keyPrefix}-${groupIndex}`}>
          <div className="list__group">
            {group.map((item, index) => (
              <div key={index}>{item.title}</div>
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
            {renderAnimatedListItem(groupedItems, 'animated-list-1')}
            {renderAnimatedListItem(groupedItems, 'animated-list-2')}
          </>
        ) : (
          <ul className="list__list">
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
