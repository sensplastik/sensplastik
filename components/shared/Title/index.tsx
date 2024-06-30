import './Title.scss'

import { cva } from 'class-variance-authority'
import React from 'react'

const titleStyles = cva('title')

export interface TitleProps {
  className?: string
  level?: number
  text?: string
}

export function Title({
  className = '',
  level = 1,
  text = 'Building Brands with Lasting Stability',
}: TitleProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <div className={titleStyles({ class: className })}>
      <div className="title__heading">
        <HeadingTag>{text}</HeadingTag>
      </div>
    </div>
  )
}
