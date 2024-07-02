"use client"

import Link from 'next/link'
import { useEffect,useState } from 'react'

import Portal from '@/components/shared/Portal'
import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

import { LogoFull } from "../Logo/Full"
import Hamburger from './Hamburger.svg'
import { NavMenu } from "./NavMenu"

interface NavbarProps {
  data: SettingsPayload
}

export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false)

  const toggleNavMenu = () => {
    setIsNavMenuVisible(!isNavMenuVisible)
  }

  useEffect(() => {
    /*if (isNavMenuVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }*/
  }, [isNavMenuVisible])

  return (
    <>
      <div className="navbar">
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
          <Hamburger />
        </button>
      </div>
      {isNavMenuVisible && (
        <Portal>
          <NavMenu items={menuItems} onClose={toggleNavMenu} />
        </Portal>
      )}
    </>
  )
}
