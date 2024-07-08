import './HorizontalMenu.scss'

import { useGSAP } from '@gsap/react'
import { cva } from 'cva'
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all' // Import ScrollToPlugin
import React, { useLayoutEffect, useRef, useState } from 'react'

import {
  HorizontalMenuItem,
  HorizontalMenuItemProps,
} from './HorizontalMenuItem'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin) // Register ScrollToPlugin

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
  const [navHeight, setNavHeight] = useState(0)
  const [menuHeight, setMenuHeight] = useState(0)

  useLayoutEffect(() => {
    if (container.current) {
      const menuSection = container.current.closest('.section--horizontal-menu') as HTMLElement
      if (menuSection)
        setMenuHeight(menuSection.offsetHeight)
      //
      const nav = document.querySelector('.section--navbar') as HTMLElement
      if (nav) {
        setNavHeight(nav.offsetHeight)
        //
        const horizontalMenu = container.current.closest(
          '.section--horizontal-menu',
        ) as HTMLElement
        if (horizontalMenu) horizontalMenu.style.top = `${navHeight}px`
      }
    }
  }, [navHeight])

  useGSAP(() => {
    const links = items.map((item) => item.url)

    // Remove existing event listeners to prevent duplication
    links.forEach((link) => {
      const menuLink = container.current?.querySelector(`[href="${link}"]`)
      menuLink?.removeEventListener('click', handleClick)
    })

    links.forEach((link, index) => {
      if (link?.startsWith('#')) {
        const anchorId = link
        const menuLink = container.current?.querySelector(`[href="${link}"]`)
        const menuItem = menuLink?.closest('.horizontal-menu-item')
        const sectionWrapper = document.querySelector(anchorId)
        const offsetHeight = menuHeight + navHeight
        console.log({offsetHeight, menuHeight, navHeight})

        if (sectionWrapper) {
          ScrollTrigger.create({
            trigger: sectionWrapper,
            start: index === 0 ? 'top bottom' : `top-=${offsetHeight}px center`, // Adjust for nav height
            end: `bottom-=${offsetHeight}px center`, // Adjust for nav height
            onEnter: function () {
              menuItem?.classList.add('horizontal-menu-item--active')
            },
            onEnterBack: function () {
              menuItem?.classList.add('horizontal-menu-item--active')
            },
            onLeave: () => {
              menuItem?.classList.remove('horizontal-menu-item--active')
            },
            onLeaveBack: () => {
              menuItem?.classList.remove('horizontal-menu-item--active')
            },
          })

          // Add click handler here
          menuLink?.addEventListener('click', (event) => handleClick(event as MouseEvent, index))
        }
      }
    })

    // Cleanup function
    return () => {
      links.forEach((link) => {
        const menuLink = container.current?.querySelector(`[href="${link}"]`)
        menuLink?.removeEventListener('click', handleClick)
      })
    }
  }, [menuHeight, items])

  const handleClick = (event: MouseEvent, index: number) => {
    event.preventDefault()
    const target = event.currentTarget as HTMLAnchorElement
    const sectionWrapper = document.querySelector(
      target.getAttribute('href') || '',
    )

    if (sectionWrapper) {
      gsap.to(window, {
        scrollTo: {
          y: sectionWrapper,
          offsetY:  menuHeight + navHeight  +  (index === 0 ? 0 :  20),
        },
        duration: 1.5,
        ease: 'expo.inOut',
      })
    }
  }

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
