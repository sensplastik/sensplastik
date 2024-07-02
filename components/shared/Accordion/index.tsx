import './Accordion.scss'

import dynamic from 'next/dynamic'
import React from 'react'

import { AccordionProps } from './Accordion'

// Dynamically import Component with ssr
const AccordionComponent = dynamic(
  () => import('./Accordion').then((mod) => mod.Accordion),
  {
    ssr: true,
  },
)
export function Accordion(props: AccordionProps) {
  return (
    <>
      <AccordionComponent {...props} />
    </>
  )
}
