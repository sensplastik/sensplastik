import './HorizontalMenu.scss'

import { useGSAP } from '@gsap/react'
import { cva } from 'cva'
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all' // Import GSAP plugins for scroll and animation control
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'

import {
  HorizontalMenuItem,
  HorizontalMenuItemProps,
} from './HorizontalMenuItem'

// Register GSAP plugins to enable their use in animations and scroll interactions
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)

// Utility function to generate class names with conditional styles
const menuStyles = cva('horizontal-menu')

export interface HorizontalMenuProps {
  className?: string
  items?: HorizontalMenuItemProps[]
}

// Default menu items in case no items are provided
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
  const container = useRef<HTMLDivElement>(null) // Reference to the menu container element
  const [navHeight, setNavHeight] = useState(0) // State to store the height of the navigation bar
  const [menuHeight, setMenuHeight] = useState(0) // State to store the height of the horizontal menu

  useLayoutEffect(() => {
    if (container.current) {
      // Calculate and set the height of the horizontal menu
      const menuSection = container.current.closest(
        '.section--horizontal-menu',
      ) as HTMLElement
      if (menuSection) setMenuHeight(menuSection.offsetHeight)

      // Calculate and set the height of the navigation bar
      const nav = document.querySelector('.page__nav') as HTMLElement
      if (nav) {
        setNavHeight(nav.offsetHeight)
        // Adjust the top position of the horizontal menu based on the navigation bar height
        const horizontalMenu = container.current.closest(
          '.section--horizontal-menu',
        ) as HTMLElement
        if (horizontalMenu) horizontalMenu.style.top = `${navHeight}px`
      }
    }
  }, [navHeight]) // Dependency on navHeight ensures the effect runs when navHeight changes

  // Callback function to handle click events on menu links
  const handleClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault() // Prevent the default anchor click behavior
      const target = event.currentTarget as HTMLAnchorElement
      const sectionWrapper = document.querySelector(
        target.getAttribute('href') || '',
      )

      if (sectionWrapper) {
        gsap.to(window, {
          scrollTo: {
            y: sectionWrapper,
            offsetY: menuHeight + navHeight, // Offset to account for the height of the menu and navigation bar
          },
          duration: 1.5,
          ease: 'expo.inOut', // Smooth scrolling animation
        })
      }
    },
    [menuHeight, navHeight],
  ) // Dependencies ensure the handler updates with changes

  useGSAP(() => {
    const links = items.map((item) => item.url) // Extract URLs from menu items
    const scrollTriggers: ScrollTrigger[] = [] // Array to keep track of ScrollTrigger instances
  
    // Remove existing event listeners to prevent duplication
    links.forEach((link) => {
      const menuLink = container.current?.querySelector(`[href="${link}"]`)
      if (menuLink) {
        menuLink.removeEventListener('click', handleClick)
      }
    })
  
    links.forEach((link, index) => {
      if (link?.startsWith('#')) {
        const anchorId = link
        const menuLink = container.current?.querySelector(`[href="${link}"]`)
        const menuItem = menuLink?.closest('.horizontal-menu-item')
        const sectionWrapper = document.querySelector(anchorId)
        const offsetHeight = menuHeight + navHeight
  
        if (sectionWrapper) {
          const scrollTrigger = ScrollTrigger.create({
            trigger: sectionWrapper,
            start: index === 0 ? 'top bottom' : `top-=${offsetHeight}px center`,
            end: `bottom-=${offsetHeight}px center`,
            onEnter: () => {
              menuItem?.classList.add('horizontal-menu-item--active')
            },
            onEnterBack: () => {
              menuItem?.classList.add('horizontal-menu-item--active')
            },
            onLeave: () => {
              menuItem?.classList.remove('horizontal-menu-item--active')
            },
            onLeaveBack: () => {
              menuItem?.classList.remove('horizontal-menu-item--active')
            },
          })
  
          scrollTriggers.push(scrollTrigger)
          if (menuLink) {
            menuLink.addEventListener('click', handleClick)
          }
        }
      }
    })
  
    // Cleanup function to remove event listeners and ScrollTriggers
    return () => {
      links.forEach((link) => {
        const menuLink = container.current?.querySelector(`[href="${link}"]`)
        if (menuLink) {
          menuLink.removeEventListener('click', handleClick)
        }
      })
  
      // Kill all ScrollTriggers to prevent memory leaks
      scrollTriggers.forEach((trigger) => trigger.kill())
    }
  }, [menuHeight, items, handleClick]) // Dependencies ensure the effect updates with changes
  

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
