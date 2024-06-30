import './Accordion.scss'

import dynamic from 'next/dynamic'
import React from 'react'

import { AccordionProps } from './Accordion'

// Dynamically import ClientPicture with ssr
const AccordionClient = dynamic(
  () => import('./Accordion').then((mod) => mod.Accordion),
  {
    ssr: true,
  },
)
export function Accordion(props: AccordionProps) {
  return (
    <>
      <AccordionClient {...props} />
    </>
  )
}
