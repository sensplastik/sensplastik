import "./Picture.scss"

import dynamic from "next/dynamic"
import React from "react"

import {PictureProps} from './PlaceHolder'

// Dynamically import PlaceHolder with ssr
const PlaceHolder = dynamic(() => import("./PlaceHolder").then((mod) => mod.PlaceHolder), {
  ssr: true
})

export function  Picture  (props:PictureProps)  {
  return (
    <>
      {/* Render PlaceHolder dynamically */}
      <PlaceHolder {...props} />
    </>
  )
}
