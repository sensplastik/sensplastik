import "./HorizontalMenuItem.scss"

import { cva } from "class-variance-authority"
import Link from "next/link"
import React from "react"

const componentStyles = cva("horizontal-menu-item")

export interface HorizontalMenuItemProps {
  className?: string
  index?: number
  title?: string
  url?: string
}

export function  HorizontalMenuItem({
  className = "",
  url = "#",
  title = "Introduction",
  index = 1,
}:HorizontalMenuItemProps) {

   // Format the index to always be two digits (e.g., 01, 02, 10)
   const formattedIndex = index < 10 ? `0${index}` : index.toString()

  return (
    <div className={componentStyles({ class: className })}>
      <div className="horizontal-menu-item__dot"/>
      <Link href={url} className="horizontal-menu-item__link">
        <div className="horizontal-menu-item__index">{formattedIndex}</div>
        <div className="horizontal-menu-item__title">{title}</div>
      </Link>
    </div>
  )
}
