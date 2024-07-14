'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { memo, useEffect, useRef, useState } from 'react'

import { useTransitionContext } from '@/context/TransitionContext'
import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

import LinkTransition from '../../shared/LinkTransition'
import { LogoFull } from '../Logo/Full'
import Hamburger from './Hamburger'
import { NavMenu } from './NavMenu'

gsap.registerPlugin(useGSAP)

interface NavbarProps {
  data: SettingsPayload
}

function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false)
  const [hamburgerState, setHamburgerState] = useState(undefined)

  const container = useRef<HTMLDivElement>(null)
  const navMenuRef = useRef<HTMLDivElement>(null)

  const { timeline } = useTransitionContext()

  const toggleNavMenu = () => {
    setIsNavMenuVisible(!isNavMenuVisible)
  }

  useGSAP(
    () => {
      if (navMenuRef.current) {
        // Animate Menu wrapper
        timeline.fromTo(
          navMenuRef.current,
          {
            y: '-100%',
          },
          {
            y: '0%',
            overwrite: true,

            onComplete: () => {
              //
            },
          },
        )

        // Animate Menu items
        const navMenuItems = navMenuRef.current?.querySelectorAll(
          '.nav-menu__item > a',
        )

        if (navMenuItems) {
          timeline.fromTo(
            navMenuItems,
            {
              yPercent: 100,
            },
            { yPercent: 0, stagger: -0.1, duration: 0.3 },
          )
        }
      }
    },
    { scope: container },
  )

  useEffect(() => {
    if (isNavMenuVisible) {
      setHamburgerState('open')
      timeline.play()
    } else {
      setHamburgerState('close')
      timeline.reverse()
    }
  }, [isNavMenuVisible, timeline])

  return (
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
                  <LinkTransition href={href}>{menuItem.title}</LinkTransition>
                </li>
              )
            })}
        </ul>
      </nav>
      <button className="navbar__hamburger" onClick={toggleNavMenu}>
        <Hamburger state={hamburgerState} />
      </button>
      <div ref={navMenuRef} className="navbar__menu">
        <NavMenu items={menuItems} onClose={toggleNavMenu} />
      </div>
    </div>
  )
}

export default memo(Navbar);
