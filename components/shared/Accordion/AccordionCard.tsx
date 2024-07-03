import './AccordionCard.scss'

import { cva } from 'cva'
import Link from 'next/link'

import { Picture } from '../Picture'
export interface AccordionCardProps {
  className?: string
  image?: string
  title?: string
  url?: string
}

const componentStyles = cva('accordion-card')

export function AccordionCard(props: AccordionCardProps) {
  const { className, title, image, url } = props

  return (
    <Link href={url || '#'} className={componentStyles({ class: className })}>
      <Picture className="accordion-card__image" src={image} />
      <p className="accordion-card__title">{title}</p>     
    </Link>
  )
}
