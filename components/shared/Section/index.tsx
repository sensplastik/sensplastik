import "./Section.scss"

import { cva } from "cva"
import React from "react"

const sectionStyles = cva("section", {
  variants: {
    fullWidth: {
      true: "section--full",
    },
    hasGrid: {
      true: "section--grid",
    }
  },
})

interface SectionProps {
  className?: string
  children?: any
  fullWidth?: boolean
  hasGrid? :boolean
}

export function Section ({ className = "", fullWidth = false, hasGrid=false, children } :SectionProps ) {
  return (
    <section className={sectionStyles({ class: className, fullWidth , hasGrid })}>
      <div className="section__container">
        {children}
      </div>
    </section>
  )
}
