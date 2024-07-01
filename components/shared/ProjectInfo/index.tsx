import './ProjectInfo.scss'

import { cva } from 'cva'
import Link from 'next/link'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

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

  return (
    <>
      <div className={componentStyles({ class: className })}>
        <div className="project-info__first-column">
          {/* Client  */}
          {client && (
            <>
              Client
              <ul className="project-info__list">
                <li className="project-info__item">{client}</li>
              </ul>
            </>
          )}

          {/* Deliverables  */}
          {deliverables && (
            <>
              Deliverables
              <ul className="project-info__list">
                {deliverables.map((deliverable, index) => {
                  return (
                    <li key={index} className="project-info__item">
                      {deliverable}
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>

        <div className="project-info__second-column">
          {/* Technologies  */}
          {technologies && (
            <>
              Technologies
              <ul className="project-info__list">
                {technologies.map((technology, index) => {
                  return (
                    <li key={index} className="project-info__item">
                      {technology}
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>

        <div className="project-info__main-column">
          <article className="project-info__article">
            {/* Headline  */}
            {headline && <h2 className="project-info__headline">{headline}</h2>}

            {/* Content  */}
            {hasContent && (
              <div
                className="project-info__content"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />
            )}

            {/* Website  */}
            {website && (
              <Link className="project-info__website" href={website}>
                {website}
              </Link>
            )}
          </article>
        </div>
      </div>
    </>
  )
}
