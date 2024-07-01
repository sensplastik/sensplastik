import './Card.scss'

import { cva } from 'cva'
import React from 'react'

import { Picture } from '@/components/shared/Picture'
import { sanitizeContent } from '@/utils/sanitizeContent'
import Link from 'next/link'

const componentStyles = cva('card')

interface Service {
  title: string
}

export interface CardProps {
  className?: string
  image?: any
  imageWidth?: number
  imageHeight?: number
  gridStart?: number | null
  gridWidth?: number
  title?: string
  description?: string
  services?: Service[]
  isEmpty?: boolean
  link? : string
}

export function Card({
  className = '',
  image = '',
  imageWidth = 1920,
  imageHeight = 1080,
  gridStart = null,
  gridWidth = 3,
  title = 'Sensplastik®',
  description = '',
  services = [],
  isEmpty = false,
  link = '#'
}: CardProps) {
  const gridStyle = {
    gridColumn:
      gridStart !== null ? `${gridStart} / span ${gridWidth}` : undefined,
  }

  if (isEmpty) {
    return (
      <article
        className={componentStyles({ class: className })}
        style={gridStyle}
      ></article>
    )
  }

  return (
    
    <article
      className={componentStyles({ class: className })}
      style={gridStyle} // Apply the grid style object
    >
      <Link href={link}>
      <Picture
        className="card__picture"
        src={image}
        width={imageWidth}
        height={imageHeight}
      />
      {(title || description || services) && (
        <div className="card__body">
          {title && <h4 className="card__title">{title}</h4>}
          {description && <p className="card__description">{description}</p>}
          {services && (
            <ul className="card__services">
              {services.map((service, key) => {
                if (!service?.title) {
                  return null
                }
                return (
                  <li className="card__service" key={key}>
                    <span>{service.title}</span>
                    {key < services.length - 1 ? ', ' : ''}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
       </Link>
    </article>
   
  )
}
