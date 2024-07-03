import './Spacer.scss'
import { cva } from 'cva'
import React from 'react'

const spacerStyles = cva('spacer', {
  variants: {
    intent: {
      striped: 'spacer--striped-lines',
    },
  },
})

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
  stripedLines?: boolean
  bgColor?: string
  paddingTop?: {
    default?: string
    laptop?: string
    mobile?: string
  }
  paddingBottom?: {
    default?: string
    laptop?: string
    mobile?: string
  }
  lineSize?: {
    default?: string
    laptop?: string
    mobile?: string
  }
}

export function Spacer({
  className = '',
  lineColor,
  stripedLines = false,
  paddingTop = { default: '160px' },
  paddingBottom = { default: '10px' },
  lineSize = { default: '1px' },
  bgColor,
}: SpacerProps) {
  const spacerClass = spacerStyles({
    className,
    intent: stripedLines ? 'striped' : null,
  })
  const lineClass = lineStyles({ intent: lineColor ? 'custom' : null })

  // Generate responsive padding and line size styles
  const responsivePaddingTop = {
    '--spacer-padding-top': paddingTop.default,
    '--spacer-padding-top-laptop': paddingTop.laptop || paddingTop.default,
    '--spacer-padding-top-mobile': paddingTop.mobile || paddingTop.default,
  }
  const responsivePaddingBottom = {
    '--spacer-padding-bottom': paddingBottom.default,
    '--spacer-padding-bottom-laptop': paddingBottom.laptop || paddingBottom.default,
    '--spacer-padding-bottom-mobile': paddingBottom.mobile || paddingBottom.default,
  }
  const responsiveLineSize = {
    '--spacer-line-size': lineSize.default,
    '--spacer-line-size-laptop': lineSize.laptop || lineSize.default,
    '--spacer-line-size-mobile': lineSize.mobile || lineSize.default,
  }

  return (
    <div
      className={spacerClass}
      style={{
        '--spacer-bg-color': bgColor,
        ...responsivePaddingTop,
        ...responsivePaddingBottom,
        ...responsiveLineSize,
      }}
    >
      <div
        className={lineClass}
        style={{
          '--spacer-line-color': lineColor || '',
          ...responsiveLineSize,
        }}
      ></div>
    </div>
  )
}
