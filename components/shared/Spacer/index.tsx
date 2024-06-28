import './Spacer.scss'

import { cva } from 'cva'
import React from 'react'

const spacerStyles = cva('spacer')

const lineStyles = cva('spacer__line', {
  variants: {
    intent: {
      custom: 'spacer__line--custom',
    },
  },
})

export interface SpacerProps {
  className?: string
  lineColor?: string
  paddingTop?: {
    default?: string
    desktop?: string
    laptop?: string
    tablet?: string
    mobile?: string
  }
  paddingBottom?: {
    default?: string
    desktop?: string
    laptop?: string
    tablet?: string
    mobile?: string
  }
  lineSize?: {
    default?: string
    desktop?: string
    laptop?: string
    tablet?: string
    mobile?: string
  }
}

export function Spacer({
  className = '',
  lineColor,
  paddingTop = { default: '160px' },
  paddingBottom = { default: '10px' },
  lineSize = { default: '1px' },
}: SpacerProps) {
  const spacerClass = spacerStyles({ className })
  const lineClass = lineStyles({ intent: lineColor ? 'custom' : null })

  const getResponsiveStyle = (
    styleProp: {
      default?: string
      desktop?: string
      laptop?: string
      tablet?: string
      mobile?: string
    },
    defaultStyle: string,
  ) => ({
    default: styleProp.default || defaultStyle,
    [`@media (max-width: 1024px)`]: {
      [styleProp.property]:
        styleProp.laptop || styleProp.default || defaultStyle,
    },
    [`@media (max-width: 850px)`]: {
      [styleProp.property]:
        styleProp.tablet || styleProp.default || defaultStyle,
    },
    [`@media (max-width: 576px)`]: {
      [styleProp.property]:
        styleProp.mobile || styleProp.default || defaultStyle,
    },
  })

  const paddingStyles = {
    paddingTop: paddingTop.default,
    paddingBottom: paddingBottom.default,
  }

  const lineSizeStyles = {
    height: lineSize.default,
    [`@media (max-width: 1024px)`]: {
      height: lineSize.laptop || lineSize.default,
    },
    [`@media (max-width: 850px)`]: {
      height: lineSize.tablet || lineSize.default,
    },
    [`@media (max-width: 576px)`]: {
      height: lineSize.mobile || lineSize.default,
    },
  }

  return (
    <div
      className={spacerClass}
      style={{
        ...paddingStyles,
        ...getResponsiveStyle(paddingTop, paddingTop.default),
        ...getResponsiveStyle(paddingBottom, paddingBottom.default),
      }}
    >
      <div
        className={lineClass}
        style={{ backgroundColor: lineColor || '', ...lineSizeStyles }}
      ></div>
    </div>
  )
}
