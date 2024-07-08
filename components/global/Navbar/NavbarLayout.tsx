'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import Portal from '@/components/shared/Portal'
import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

import { LogoFull } from '../Logo/Full'
import Hamburger from './Hamburger'
import { NavMenu } from './NavMenu'

gsap.registerPlugin(useGSAP)

interface NavbarProps {
  data: SettingsPayload
}

export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  const [isNavMenuVisible, setIsNavMenuVisible] = useState(true)

  const container = useRef<HTMLDivElement>(null)
  const navMenuRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP({ scope: container })

  const toggleNavMenu = contextSafe(() => {
    setIsNavMenuVisible(!isNavMenuVisible)

    console.log(isNavMenuVisible)

    if (navMenuRef.current) {
      const closeBtn = navMenuRef.current?.querySelector('.nav-menu__close')
 

      if (isNavMenuVisible) {
        gsap.fromTo(
          navMenuRef.current,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            delay: 0.3,
            onComplete: () => {
              if (closeBtn) closeBtn.classList.add('nav-menu__close--show')

            
            },
          },
        )
      } else {

        if (closeBtn) closeBtn.classList.remove('nav-menu__close--show')

        gsap.fromTo(
          navMenuRef.current,
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            delay: 0.3,
            onComplete: () => {
              

              
            },
          },
        )
      }
    }
  })

  return (
    <>
      <div className="navbar" ref={container}>
        <LogoFull />
        <nav className="navbar__nav">
          <ul className="navbar__list">
            {menuItems &&
              menuItems.map((menuItem, key) => {
                const href = resolveHref(
                  menuItem?._type,
                  menuItem?._type === 'link' ? menuItem?.url : menuItem?.slug,
                )
                if (!href) {
                  return null
                }
                return (
                  <li className="navbar__item" key={key}>
                    <Link href={href}>{menuItem.title}</Link>
                  </li>
                )
              })}
          </ul>
        </nav>
        <button className="navbar__hamburger" onClick={toggleNavMenu}>
          <Hamburger hide={!isNavMenuVisible} show={isNavMenuVisible}/>
        </button>
      </div>

      <Portal>
        <div ref={navMenuRef} className="navbar__menu">
          <NavMenu items={menuItems} onClose={toggleNavMenu} />
        </div>
      </Portal>
    </>
  )
}
