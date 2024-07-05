'use client'
import { cva } from 'cva'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'

import { urlForImage } from '@/sanity/lib/utils'

export interface PictureProps {
  src?: any
  darkSrc?: any
  mobileSrc?: any
  mobileDarkSrc?: any
  width?: number
  height?: number
  alt?: string
  className?: string
  placeholderColor?: string
  placeholderBgColor?: string
}

const componentStyles = cva('picture')

export function PlaceHolder({
  src = '',
  darkSrc = '',
  width = 1920,
  height = 1080,
  alt = 'Sensplastik®',
  className = '',
  placeholderColor = '#DBD8D4',
  placeholderBgColor = '#F5F4F3',
}: PictureProps) {
  // State to manage image loading error
  const [imageError, setImageError] = useState(false)

  const { resolvedTheme, forcedTheme } = useTheme()

  // Function to handle image load error
  const handleError = () => {
    setImageError(true)
  }

  let imageUrl: string | undefined

  // Manual switch to the dark image if set in the static props mode
  if (darkSrc) {
    if (forcedTheme) {
      if (forcedTheme === 'dark') {
        imageUrl = darkSrc
      }
    } else if (resolvedTheme === 'dark') {
      imageUrl = darkSrc
    }
  }

  // Normal Sanity image object mode
  if (typeof src === 'object' && src?._type === 'image' && src?.asset) {
    imageUrl = src && urlForImage(src)?.url()
  }

  // Custom picture Sanity object mode
  else if (typeof src === 'object') {
    // Determine image URL based on theme and forced theme
    if (forcedTheme) {
      imageUrl =
        forcedTheme === 'dark' && src.dark
          ? urlForImage(src.dark)?.url()
          : urlForImage(src.default)?.url()
    } else {
      imageUrl =
        resolvedTheme === 'dark' && src.dark
          ? urlForImage(src.dark)?.url()
          : urlForImage(src.default)?.url()
    }

    // TODO: Add Mobile and Dark mobile mode support
  }

  return (
    <div className={componentStyles({ class: className })}>
      {imageUrl ? (
        <>
          {/* The imageUrl is a regular string url*/}
          <Image
            className="picture__img"
            src={imageUrl}
            alt={alt}
            onError={handleError}
            width={width}
            height={height}
          />
        </>
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
