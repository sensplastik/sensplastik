import './ProjectInfo.scss'

import { cva } from 'cva'
import Link from 'next/link'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

import ExternalLinkIcon from './ExternalLinkIcon.svg'

const componentStyles = cva('project-info')

export interface ProjectDeliverable {
  title: string
}

export interface ProjectTechnology {
  title: string
}

interface ProjectInfoProps {
  className?: string
  client?: string
  deliverables?: ProjectDeliverable[]
  technologies?: ProjectTechnology[]
  headline?: string
  content?: any
  website?: string
}

export function ProjectInfo(props: ProjectInfoProps) {
  const {
    className,
    client,
    deliverables,
    technologies,
    headline,
    content,
    website,
  } = props

  // Sanitize content on the server side
  const sanitizedContent = sanitizeContent(content)

  // Render article only if sanitizedContent is truthy
  const hasContent = !!sanitizedContent

  function getHostname(url) {
    try {
      const { hostname } = new URL(url)
      return hostname
    } catch (error) {
      console.error('Invalid URL:', error)
      return null
    }
  }

  return (
    <>
      <div className={componentStyles({ class: className })}>
        <div className="project-info__first-column">
          {/* Client  */}
          {client && (
            <div className="project-info__client">
              <span className="project-info__label">Client</span>
              <ul className="project-info__list">
                <li className="project-info__item">{client}</li>
              </ul>
            </div>
          )}

          {/* Deliverables */}
          {deliverables && (
            <div className="project-info__deliverables">
              <span className="project-info__label">Deliverables</span>
              <ul className="project-info__list">
                {deliverables.map((deliverable, index) => {
                  return (
                    <li key={index} className="project-info__item">
                      {deliverable.title}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="project-info__second-column">
          {/* Technologies */}
          {technologies && (
            <div className="project-info__technologies">
              <span className="project-info__label">Technologies</span>
              <ul className="project-info__list">
                {technologies.map((technology, index) => {
                  return (
                    <li key={index} className="project-info__item">
                      {technology.title}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="project-info__main-column">
          <article className="project-info__article">
            {/* Headline */}
            {headline && <h2 className="project-info__headline">{headline}</h2>}

          <div className="project-info__body">
            {/* Content */}
            {hasContent && (
              <div
                className="project-info__content"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />
            )}

            {/* Website */}
            {website && (
              <Link className="project-info__website" target="_blank" href={website}>
                <span>{getHostname(website)}</span> <ExternalLinkIcon />
              </Link>
            )}
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
