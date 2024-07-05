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

  // Forced theme mode
  if (forcedTheme) {
    // Forced dark mode
    if (forcedTheme === 'dark') {
      // Normale string url in forced dark mode
      if (darkSrc && typeof darkSrc === 'string') {
        imageUrl = darkSrc
      }
      // fallback to default image if exists
      else if (src && typeof src === 'string') {
        imageUrl = src
      }

      // Sanity image object in forced dark mode
      else if (
        src &&
        typeof src === 'object' &&
        src?._type === 'image' &&
        src?.asset
      ) {
        imageUrl = urlForImage(src)?.url()
      }

      // Custom picture object in forced dark mode
      else if (src && typeof src === 'object' && src?.dark) {
        imageUrl = urlForImage(src.dark)?.url()
      }

      // Forced default light  mode
    } else {
      // Normale string url in forced light mode
      if (src && typeof src === 'string') {
        imageUrl = src
      }

      // Sanity image object in forced light mode
      else if (
        src &&
        typeof src === 'object' &&
        src?._type === 'image' &&
        src?.asset
      ) {
        imageUrl = urlForImage(src)?.url()
      }

      // Custom picture object in forced light mode
      else if (src && typeof src === 'object' && src?.default) {
        imageUrl = urlForImage(src.default)?.url()
      }
    }
  }

  // Global dark mode
  else if (resolvedTheme === 'dark') {
    // Normale string url in global dark mode
    if (darkSrc && typeof darkSrc === 'string') {
      imageUrl = darkSrc
    }
    // fallback to default image if exists
    else if (src && typeof src === 'string') {
      imageUrl = src
    }

    // Sanity image object in global dark mode
    else if (
      src &&
      typeof src === 'object' &&
      src?._type === 'image' &&
      src?.asset
    ) {
      imageUrl = urlForImage(src)?.url()
    }

    // Custom picture object in global dark mode
    else if (src && typeof src === 'object' && src?.dark) {
      imageUrl = urlForImage(src.dark)?.url()
    }

    // Default light mode
  } else {
    // Normale string url in default light mode
    if (src && typeof src === 'string') {
      imageUrl = src
    }

    // Sanity image object in default light mode
    else if (
      src &&
      typeof src === 'object' &&
      src?._type === 'image' &&
      src?.asset
    ) {
      imageUrl = urlForImage(src)?.url()
    }

    // Custom picture object in default light mode
    else if (src && typeof src === 'object' && src?.default) {
      imageUrl = urlForImage(src.default)?.url()
    }
  }

  console.log({ resolvedTheme, src, darkSrc, imageUrl })
  // TODO: Add Mobile and Dark mobile mode support

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
