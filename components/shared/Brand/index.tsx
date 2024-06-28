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
  {
    title: 'Sky Environment®',
  },
  {
    title: 'Byredo',
  },
  {
    title: 'Off-White®',
  },
  {
    title: 'Château des Saints',
  },
  {
    title: 'Belbao',
  },
  {
    title:
      "Festival international de mode, de photographie et d'accessoires, Hyères",
  },
  {
    title: 'Marc Audibet',
  },
  {
    title: 'Institut Français de la Mode',
  },
  {
    title: 'Roland-Garros',
  },
  {
    title: 'Flora',
  },
  {
    title: 'L’Imperatrice',
  },
  {
    title: 'Chantal Thomass',
  },
  {
    title: 'La Fée Maraboutée',
  },
  {
    title: 'Opaline Studio',
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
