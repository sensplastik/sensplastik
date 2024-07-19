'use client'
import './ProjectHeader.scss'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Image } from 'sanity'

import useResizeObserver from '@/hooks/useResizeObserver'

import { Message } from '../Message'
import { Picture } from '../Picture'
import { PictureProps } from '../Picture/PlaceHolder'
import { Section } from '../Section'

interface ProjectHeaderProps {
  messageTitle?: string
  messageContent?: string
  title?: string
  coverImage?: Image
}

gsap.registerPlugin(useGSAP, ScrollTrigger)

function ProjectHeader(props: ProjectHeaderProps) {
  const { messageTitle, messageContent, title, coverImage } = props

  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      //
      const projectMessage = container.current?.querySelector(
        '.project-header__message',
      )
      const projectTitle = container.current?.querySelector(
        '.project-header__title',
      )

      if (projectMessage) {
        gsap.fromTo(
          projectMessage,
          { opacity: 0, x: 10 },
          { opacity: 1, x: 0, duration: 0.8 },
        )
      }

      if (projectTitle) {
        gsap.fromTo(
          projectTitle,
          { y: '200%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.8, delay: 0.1 },
        )
      }

      const scrollTriggerId = 'project-header-scroll-trigger'
      ScrollTrigger.getById(scrollTriggerId)?.kill()
      const coverPicture = container.current?.querySelector(
        '.project-header__cover .picture',
      )

      if (coverPicture) {
        gsap.fromTo(coverPicture, { y: 0 }, { y: '-50%' ,scrollTrigger:{
          scrub:true,
        }})
      }

      return () => {
        ScrollTrigger.getById(scrollTriggerId)?.kill()
      }
    },
    { scope: container },
  )

  if (!title) {
    return null
  }

  return (
    <div className="project-header" ref={container}>
      {/* Project Message */}
      {(messageTitle || messageContent) && (
        <Section className="project-header__message">
          <Message title={messageTitle} content={messageContent} />
        </Section>
      )}

      {/* Project Title */}
      <Section hasGrid>
        <h1 className="project-header__title">{title}</h1>
      </Section>

      {/* Project Cover */}
      <div className="project-header__cover">
        <Picture src={coverImage} />
      </div>
    </div>
  )
}

export default memo(ProjectHeader)
