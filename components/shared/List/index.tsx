'use client'
import './List.scss'

import { useGSAP } from '@gsap/react'
import { cva } from 'cva'
import gsap from 'gsap'
import React, { useRef } from 'react'

gsap.registerPlugin(useGSAP)

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
}: BrandsProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const ul = container.current?.querySelector('.list__list')
      if (ul && container.current) {
        const ulHeight = (ul as HTMLElement).offsetHeight
        container.current.style.height = `${ulHeight}px`
      }
    },
    { scope: container },
  )

  return (
    <div className='list-container' ref={container}>
    <div
      className={componentStyles({
        class: className,
        type: listType,
        animated: enableAnimation,
      })}
      
    >
      <ul className="list__list">
        {items.map((item, index) => {
          return (
            <li className="list__item" key={index}>
              {item.title}
            </li>
          )
        })}
      </ul>
      {/* Duplicated for animation purpose */}
      {enableAnimation && (
        <ul className="list__list">
          {items.map((item, index) => {
            return (
              <li className="list__item" key={index}>
                {item.title}
              </li>
            )
          })}
        </ul>
      )}
      </div>
    </div>
  )
}
