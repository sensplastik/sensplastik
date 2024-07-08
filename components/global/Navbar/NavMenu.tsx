'use client'
import './NavMenu.scss'

import { cva } from 'cva'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { LogoFull } from '@/components/global/Logo/Full'
import { Section } from '@/components/shared/Section'
import { useSettings } from '@/context/SettingsContext'
import { resolveHref } from '@/sanity/lib/utils'
import { MenuItem } from '@/types'

import Close from './Close.svg'

const componentStyles = cva('nav-menu')

export interface NavMenuProps {
  className?: string
  items: MenuItem[]
  onClose: () => void
}

export function NavMenu(props: NavMenuProps) {
  const { className, items: menuItems, onClose } = props

  const pathname = usePathname()
  const { settings } = useSettings()

  const instagramUrl = settings?.instagram || '#'
  const linkedinUrl = '#'
  const behanceUrl = '#'

  return (
    <>
      <div className={componentStyles({ class: className })}>
        <Section hasGrid>
          {/* Menu Toggle */}
          <div className="nav-menu__toggle">
            <Link className="nav-menu__toggle-link" href="javascript:void(0)">
              Menu
            </Link>
          </div>
          {/* Menu Close */}
          <div className="nav-menu__close">
            <span>
              <button onClick={onClose}>
                <Close />
              </button>
            </span>
          </div>
          {/* Navigation */}
          <nav className="nav-menu__nav">
            {menuItems && (
              <ul className="nav-menu__list">
                <li
                  className={
                    pathname == '/'
                      ? 'nav-menu__item nav-menu__item--active'
                      : 'nav-menu__item'
                  }
                >
                  <Link href="/">Home</Link>
                </li>

                {menuItems.map((menuItem, key) => {
                  const href = resolveHref(
                    menuItem?._type,
                    menuItem?._type === 'link' ? menuItem?.url : menuItem?.slug,
                  )
                  if (!href) {
                    return null
                  }

                  return (
                    <li
                      key={key}
                      className={
                        pathname == href
                          ? 'nav-menu__item nav-menu__item--active'
                          : 'nav-menu__item'
                      }
                    >
                      <Link href={href}>{menuItem.title}</Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </nav>
          {/* Social network */}
          <div className="nav-menu__social">
            <ul className="nav-menu-social">
              <li className="nav-menu-social__item">
                <Link
                  className="nav-menu-social__link"
                  href={instagramUrl}
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li className="nav-menu-social__item">
                <Link
                  className="nav-menu-social__link"
                  href={linkedinUrl}
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="nav-menu-social__item">
                <Link
                  className="nav-menu-social__link"
                  href={behanceUrl}
                  target="_blank"
                >
                  Behance
                </Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <LogoFull className="nav-menu__brand" />
        </Section>
      </div>
    </>
  )
}
