import './HorizontalMenu.scss'

import { useGSAP } from '@gsap/react'
import { cva } from 'cva'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

import {
  HorizontalMenuItem,
  HorizontalMenuItemProps,
} from './HorizontalMenuItem'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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
]

export function HorizontalMenu({
  className = '',
  items = defaultItems,
}: HorizontalMenuProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const links = items.map((item) => item.url)
    /*console.log({ links })*/

    if (links) {
      links.forEach((link, index) => {
        if (link?.startsWith('#')) {
          const sectionId = link
          const menuItemLink = container.current?.querySelector(
            `[href="${link}"]`,
          )
          if (menuItemLink) {
            const menuItem = menuItemLink.closest('.horizontal-menu-item')
            if (menuItem) {
              console.log(sectionId, menuItem)
              gsap.to(menuItem, {
                scrollTrigger: {
                  trigger: sectionId,
                  toggleClass: 'section--active',
                  onToggle: (self) =>
                    self.isActive
                      ? menuItem.classList.add('horizontal-menu-item--active')
                      : menuItem.classList.remove(
                          'horizontal-menu-item--active',
                        ),
                },
              })
            }
          }
        }
      })
    }
  }, {})

  return (
    <nav className={menuStyles({ class: className })} ref={container}>
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
