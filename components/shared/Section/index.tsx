import "./Section.scss"

import { cva } from "cva"
import React from "react"

const sectionStyles = cva("section", {
  variants: {
    fullWidth: {
      true: "section--full",
    },
  },
})

interface SectionProps {
  className?: string
  children?: any
  fullWidth?: boolean
}

export function Section ({ className = "", fullWidth = false, children } :SectionProps ) {
  return (
    <section className={sectionStyles({ class: className, fullWidth })}>
      <div className="section__container">
        {children}
      </div>
    </section>
  )
}
