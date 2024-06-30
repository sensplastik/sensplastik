import './Teaser.scss'

import { cva } from 'class-variance-authority'
import React from 'react'

const teaserStyles = cva('teaser')

interface TeaserProps {
  className?: string
  title?: string
  subTitle?: string
  titleLevel?: number
  subTitleLevel?: number
  titleGridStart?: number
  titleGridWidth?: number
  subTitleGridStart?: number
  subTitleGridWidth?: number
}

export function Teaser({
  className = '',
  title = 'We are Sensplastik®',
  subTitle = '',
  titleLevel = 2,
  subTitleLevel = 3
}: TeaserProps) {
  const TitleTag = `h${titleLevel}` as keyof JSX.IntrinsicElements
  const SubTitleTag = `h${subTitleLevel}` as keyof JSX.IntrinsicElements

  return (
    <div className={teaserStyles({ class: className })}>
      <div className="teaser__left">
        <div className="teaser__sub-title">
        <SubTitleTag>{subTitle}</SubTitleTag>
        </div>
      </div>
      <div className="teaser__right">
        <div className="teaser__title">
        <TitleTag>{title}</TitleTag>
        </div>
      </div>
    </div>
  )
}
