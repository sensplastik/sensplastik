'use client'
import { cva } from 'cva'
import Image from 'next/image'
import React, { useState } from 'react'

export interface PictureProps {
  src?: string
  alt?: string
  className?: string
  placeholderColor?: string
  placeholderBgColor?: string
}

const componentStyles = cva('picture')

export function PlaceHolder({
  src = '',
  alt = 'Sensplastik®',
  className = '',
  placeholderColor = '#DBD8D4',
  placeholderBgColor = '#F5F4F3',
}: PictureProps) {
  // State to manage image loading error
  const [imageError, setImageError] = useState(false)

  // Function to handle image load error
  const handleError = () => {
    setImageError(true)
  }

  // Rendered image component, default to placeholder if error or no src
  const renderedImage = (
    <div
      className="picture__placeholder"
      style={{ color: placeholderColor, backgroundColor: placeholderBgColor }}
    >
      {alt && <span>{alt}</span>}
    </div>
  )

  return (
    <div className={componentStyles({ class: className })}>
      {src ? (
        <Image
          className="picture__img"
          src={src}
          alt={alt}
          onError={handleError}
        />
      ) : (
        <div
          className="picture__placeholder"
          style={{
            color: placeholderColor,
            backgroundColor: placeholderBgColor,
          }}
        >
          {alt && <span>{alt}</span>}
        </div>
      )}
    </div>
  )
}
