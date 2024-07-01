import './ProjectHeader.scss'

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

  if (!title) {
    return null
  }

  return (
    <>
      <div className="project-header">
        {/* Project Message */}
        {(messageTitle || messageContent) && (
          <Section className='project-header__message'>
            <Message title={messageTitle} content={messageContent} />
          </Section>
        )}

        {/* Project Cover */}
        <Picture src={coverImage} className='project-header__cover'/>

        {/* Project Title */}
        <div className="project-header__title">
          <h1>{title}</h1>
        </div>

        
      </div>
    </>
  )
}
