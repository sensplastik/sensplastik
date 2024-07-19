'use client'
import './ProjectGallery.scss'

import { useGSAP } from '@gsap/react'
import { cva } from 'cva'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import React, { useRef } from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

import { ProjectGalleryItem } from './ProjectGalleryItem'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const componentStyles = cva('project-gallery')

interface ProjectGalleryProps {
  className?: string
  items?: ProjectGalleryItem[]
}

export function ProjectGallery(props: ProjectGalleryProps) {
  const { className, items } = props
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {

      const pageNav = document.querySelector('.page__nav')

      const scrollTriggerId = 'project-gallery-scroll-trigger'
      ScrollTrigger.getById(scrollTriggerId)?.kill()


      const largePictures = container.current?.querySelectorAll(
        '.project-gallery-item--full .picture',
      )

      if (largePictures){        
        largePictures.forEach((picture,index)=>{
          gsap.fromTo(picture, { scaleX: 0.5}, { scaleX: 1 ,scrollTrigger:{
            id:scrollTriggerId,
            trigger:picture,
            scrub:true,
            start :`top bottom-=${pageNav?.offsetHeight})`,
            end :`bottom bottom-=${pageNav?.offsetHeight})`,
            
            //markers:true,          
          }})
        })
        
      }
        

      return () => {
        ScrollTrigger.getById(scrollTriggerId)?.kill()
      }
    },
    { scope: container },
  )

  return (
    <>
      <div className={componentStyles({ class: className })} ref={container}>
        {/* Gallery */}
        {items && (
          <>
            <ul className="project-gallery__list">
              {items.map((item, index) => {
                const { reference, title, image, gridWidth, isEmpty } = item

                return (
                  <ProjectGalleryItem
                    key={index}
                    className="project-gallery__item"
                    reference={reference}
                    title={title}
                    image={image}
                    gridWidth={gridWidth || 'default'}
                    isEmpty={isEmpty}
                  />
                )
              })}
            </ul>
          </>
        )}
      </div>
    </>
  )
}
