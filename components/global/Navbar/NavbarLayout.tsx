import dynamic from "next/dynamic"
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

import Hamburger from './Hamburger.svg'

interface NavbarProps {
  data: SettingsPayload
}

const Logo = dynamic(() => import("./Logo").then((mod) => mod.Logo), {
  ssr: true
})

export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  console.log(menuItems)
  return (
    <div className="navbar">
      <Link href="/" className="navbar__brand">
        <Logo />
      </Link>

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
      <Link href="#" className="navbar__hamburger">
        <Hamburger />
      </Link>
    </div>
  )
}
