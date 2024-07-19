'use client'

import { useGSAP } from '@gsap/react'
import { cva } from 'cva'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { memo, useEffect, useRef, useState } from 'react'

import { useTransitionContext } from '@/context/TransitionContext'
import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

import LinkTransition from '../../shared/LinkTransition'
import { LogoFull } from '../Logo/Full'
import Hamburger from './Hamburger'
import { NavMenu } from './NavMenu'

gsap.registerPlugin(ScrollTrigger)

const componentStyles = cva('navbar', {
  variants: { intent: { 'project-page': 'navbar--project' } },
})

interface NavbarProps {
  data: SettingsPayload
}

function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false)
  const [hamburgerState, setHamburgerState] = useState(undefined)
  const [isNavbarHitContent, setIsNavbarHitContent] = useState(false)

  const container = useRef<HTMLDivElement>(null)
  const navMenuRef = useRef<HTMLDivElement>(null)

  const { timeline } = useTransitionContext()

  const pathname = usePathname()
  const isProjectPage = pathname.startsWith('/projects/')

  const toggleNavMenu = () => {
    setIsNavMenuVisible(!isNavMenuVisible)
  }

  useGSAP(
    () => {
      const scrollTriggers: ScrollTrigger[] = []

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
              // Custom onComplete logic
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

      const scrollTriggerId = 'navbar-project-scroll-trigger'

      const pageNav = container.current?.closest('.page__nav')

      if (isProjectPage) {
        if (pageNav) {
          ScrollTrigger.getById(scrollTriggerId)?.kill()

          gsap.set(pageNav, { backgroundColor: 'transparent' })

          const scrollTrigger = ScrollTrigger.create({
            id: scrollTriggerId,
            trigger: '.project-page-details',
            start: `clamp(bottom top+=${container.current?.offsetHeight})`, // Adjust according to navbar height
            end: `clamp(top bottom+=${container.current?.offsetHeight})`,
            onEnter: () =>
              
              gsap.set(pageNav, {
                backgroundColor: 'var(--color-background)',
                onComplete: () => {
                  container.current?.classList.add('navbar--reset')
                  setIsNavbarHitContent(true)
                },
              }),
            onLeaveBack: () =>
              gsap.set(pageNav, {
                backgroundColor: 'transparent',
                onComplete: () => {
                  container.current?.classList.remove('navbar--reset')
                  setIsNavbarHitContent(false)
                },
              }),
          })

          scrollTriggers.push(scrollTrigger)
        }
      } else {
        // Reset navbar for other pages
        ScrollTrigger.getById(scrollTriggerId)?.kill()
        container.current?.classList.remove('navbar--reset')
        if (pageNav)
          gsap.set(pageNav, { backgroundColor: 'var(--color-background)' })
      }

      return () => {
        ScrollTrigger.getById(scrollTriggerId)?.kill()
      }
    },
    { scope: container, dependencies: [isProjectPage] },
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

  useEffect(() => {
    const pageNav = container.current?.closest('.page__nav')

    if (isProjectPage && pageNav && container.current) {
      pageNav?.classList.add('page__nav--project')
    } else {
      pageNav?.classList.remove('page__nav--project')
    }
  }, [isProjectPage])

  return (
    <div
      className={componentStyles({
        intent: isProjectPage ? 'project-page' : undefined,
      })}
      ref={container}
    >
      <LogoFull color={isProjectPage ? isNavbarHitContent ? 'var(--color-primary)' : 'var(--color-background)' : ''} />
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
                  {key < menuItems.length - 1 ? ',' : ''}
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

export default memo(Navbar)
