import './VerticalNav.scss'

import { cva } from 'cva'
import Link from 'next/link'
import React from 'react'

import Arrow from './Arrow.svg'

const componentStyles = cva('vertical-nav')

interface VerticalNavItem {
  title?: string
  url?: string
  target?: string
}

interface VerticalNavProps {
  className?: string
  items?: VerticalNavItem[]
}

export function VerticalNav({
  className = '',
  items = [
    {
      title: 'Sensplastik®',
    },
  ],
}: VerticalNavProps) {
  return (
    <div className={componentStyles({ class: className })}>
      <ul className="vertical-nav__list">
        {items &&
          items.map((item, key) => {
            if (!item?.title) {
              return null
            }

            return (
              <li className="vertical-nav__item" key={key}>
                <Link className="vertical-nav-item" href={item?.url ? item.url : '#'}>
                  <span className="vertical-nav-item__label">{item.title}</span>
                  <span className="vertical-nav-item__icon">
                    <Arrow />
                  </span>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
