import './AccordionCard.scss'

import { cva } from 'cva'
import Link from 'next/link'
import { memo } from 'react';

import { Picture } from '../Picture'
export interface AccordionCardProps {
  className?: string
  image?: string
  title?: string
  url?: string
}

const componentStyles = cva('accordion-card')

export function AccordionCardComponent(props: AccordionCardProps) {
  const { className, title, image, url } = props

  return (
    <Link href={url || '#'} className={componentStyles({ class: className })}>
      <Picture className="accordion-card__image" src={image} />
      <p className="accordion-card__title">{title}</p>     
    </Link>
  )
}

export const AccordionCard = memo(AccordionCardComponent);
