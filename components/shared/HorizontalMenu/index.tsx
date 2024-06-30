import './HorizontalMenu.scss'

import { cva } from 'class-variance-authority'
import React from 'react'

import {
  HorizontalMenuItem,
  HorizontalMenuItemProps,
} from './HorizontalMenuItem'

const menuStyles = cva('horizontal-menu')

export interface HorizontalMenuProps {
  className?: string
  items?: HorizontalMenuItemProps[]
}

// Default data for items
const defaultItems: HorizontalMenuItemProps[] = [
  {
    index: 1,
    title: 'Introduction',
  },
  {
    index: 2,
    title: 'Our Capabilities',
  },
  {
    index: 3,
    title: 'What We Sets Us Apart',
  },
  {
    index: 4,
    title: 'Transparency',
  },
  {
    index: 5,
    title: 'Guiding Principles',
  },
  {
    index: 6,
    title: 'Key Clients',
  },
]

export function HorizontalMenu({
  className = '',
  items = defaultItems,
}: HorizontalMenuProps) {
  return (
    <nav className={menuStyles({ class: className })}>
      <ul className="horizontal-menu__list">
        {items.map((item, index) => (
          <li className="horizontal-menu__item" key={index}>
            <HorizontalMenuItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
