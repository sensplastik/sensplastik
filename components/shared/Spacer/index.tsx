import './Spacer.scss'
import { cva } from 'cva'
import React from 'react'

// Define the base styles for the spacer component
const spacerStyles = cva('spacer', {
  variants: {
    intent: {
      striped: 'spacer--striped-lines', // Apply striped lines if specified
    },
  },
})

// Define the base styles for the line within the spacer
const lineStyles = cva('spacer__line', {
  variants: {
    intent: {
      custom: 'spacer__line--custom', // Apply custom line styles if a color is provided
    },
  },
})

// Define the props that can be passed to the Spacer component
export interface SpacerProps {
  className?: string // Additional class names to apply
  lineColor?: string // Color of the line within the spacer
  stripedLines?: boolean // Whether to apply striped lines to the spacer
  bgColor?: string // Background color of the spacer
  paddingTop?: { default?: string; laptop?: string; mobile?: string } // Responsive padding top
  paddingBottom?: { default?: string; laptop?: string; mobile?: string } // Responsive padding bottom
  lineSize?: { default?: string; laptop?: string; mobile?: string } // Responsive line size
}

// The Spacer component
export function Spacer({
  className = '',
  lineColor,
  stripedLines = false,
  paddingTop = { default: '160px' },
  paddingBottom = { default: '10px' },
  lineSize = { default: '1px' },
  bgColor,
}: SpacerProps) {
  // Generate the class name for the spacer based on the stripedLines prop
  const spacerClass = spacerStyles({
    className,
    intent: stripedLines ? 'striped' : null,
  })

  // Generate the class name for the line based on the lineColor prop
  const lineClass = lineStyles({ intent: lineColor ? 'custom' : null })

  // Create responsive padding and line size styles for different screen sizes
  const responsivePaddingTop = {
    '--spacer-padding-top': paddingTop.default,
    '--spacer-padding-top-laptop': paddingTop.laptop || paddingTop.default,
    '--spacer-padding-top-mobile': paddingTop.mobile || paddingTop.default,
  } as React.CSSProperties // Type assertion for custom properties

  const responsivePaddingBottom = {
    '--spacer-padding-bottom': paddingBottom.default,
    '--spacer-padding-bottom-laptop': paddingBottom.laptop || paddingBottom.default,
    '--spacer-padding-bottom-mobile': paddingBottom.mobile || paddingBottom.default,
  } as React.CSSProperties // Type assertion for custom properties

  const responsiveLineSize = {
    '--spacer-line-size': lineSize.default,
    '--spacer-line-size-laptop': lineSize.laptop || lineSize.default,
    '--spacer-line-size-mobile': lineSize.mobile || lineSize.default,
  } as React.CSSProperties // Type assertion for custom properties

  return (
    <div
      className={spacerClass}
      style={{
        '--spacer-bg-color': bgColor, // Apply the background color
        ...responsivePaddingTop, // Apply responsive padding top
        ...responsivePaddingBottom, // Apply responsive padding bottom
        ...responsiveLineSize, // Apply responsive line size
      } as React.CSSProperties} // Type assertion for custom properties
    >
      <div
        className={lineClass}
        style={{
          '--spacer-line-color': lineColor || '', // Apply the line color
          ...responsiveLineSize, // Apply responsive line size
        } as React.CSSProperties} // Type assertion for custom properties
      ></div>
    </div>
  )
}
