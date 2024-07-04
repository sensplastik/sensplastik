'use client'
import { cva } from 'cva'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'

import { urlForImage } from '@/sanity/lib/utils'

export interface PictureProps {
  src?: any
  darkSrc?: any 
  mobileSrc?:any
  mobileDarkSrc?:any
  width?:number
  height?:number
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

  const { resolvedTheme } = useTheme()

  // Function to handle image load error
  const handleError = () => {
    setImageError(true)
  }

  let imageUrl = src

  if (resolvedTheme === 'dark' && darkSrc){
    imageUrl = darkSrc
  }
  
  if (typeof src === 'object' && src?._type === 'image' && src?.asset) {    
     imageUrl = src && urlForImage(src)?.url()
  }  

  return (
    <div className={componentStyles({ class: className })}>
      {imageUrl ? (
        <Image
          className="picture__img"
          src={imageUrl}
          alt={alt}
          onError={handleError}
          width={width}
          height={height}
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
