'use client'
import './ProjectHeader.scss'

import { useEffect, useRef, useState } from 'react'
import { Image } from 'sanity'

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

export function ProjectHeader(props: ProjectHeaderProps) {
  const { messageTitle, messageContent, title, coverImage } = props
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const pictureRef = useRef<HTMLDivElement>(null)

  const updateHeaderHeight = () => {
    if (pictureRef.current) {
      setHeaderHeight(pictureRef.current.clientHeight)
    }
  }

  useEffect(() => {
    // Initial height update
    updateHeaderHeight()

    // Update height on window resize
    window.addEventListener('resize', updateHeaderHeight)

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [coverImage])

  if (!title) {
    return null
  }

  return (
    <>
      <div className="project-header" style={{ height: headerHeight }}>
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
        <div ref={pictureRef} className="project-header__cover">
          <Picture src={coverImage} />
        </div>
      </div>
    </>
  )
}
