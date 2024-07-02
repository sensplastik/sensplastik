import './List.scss'

import { cva } from 'cva'
import React from 'react'

const componentStyles = cva('list', {
  variants: {
    type: {
      default: 'list--default',
      brands: 'list--brands',
      services: 'list--services',
    },
  },
  defaultVariants: {
    type: 'default',
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
}

const defaultItems: BrandProps[] = [
  {
    title: 'Skykapital®',
  },
]

export function List({ className = '', items = defaultItems, listType = 'default' }: BrandsProps) {
  return (
    <div className={componentStyles({ class: className, type: listType })}>
      <ul className="list__list">
        {items.map((item, index) => {
          return (
            <li className="list__item" key={index}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
