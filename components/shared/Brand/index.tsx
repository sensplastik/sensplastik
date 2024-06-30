import './Brand.scss'

import { cva } from 'cva'
import React from 'react'

const componentStyles = cva('clients')

export interface BrandProps {
  className?: string
  title: string
  website?: string
}

export interface BrandsProps {
  className?: string
  items?: BrandProps[]
}

const defaultItems: BrandProps[] = [
  {
    title: 'Skykapital®',
  },
]

export function Brand({ className = '', items = defaultItems }: BrandsProps) {
  return (
    <div className={componentStyles({ class: className })}>
      <ul className="clients__list">
        {items.map((item, index) => {
          return (
            <li className="clients__item" key={index}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
