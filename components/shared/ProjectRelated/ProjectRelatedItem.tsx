import './ProjectRelatedItem.scss'

import { cva } from 'cva'
import Link from 'next/link'

import { Section } from '../Section'
import ArrowIcon from './ArrowIcon.svg'

export interface ProjectDeliverable {
  title: string
}

const componentStyles = cva('project-related-item')

export interface ProjectRelatedItem {
  className?: string
  index?: number
  slug: string
  title: string
  deliverables: ProjectDeliverable[]
}

export function ProjectRelatedItem({
  className = '',
  index = 0,
  slug,
  title,
  deliverables,
}: ProjectRelatedItem) {
  // Construct the project URL or use a placeholder if slug is missing
  const projectUrl = slug ? `/projects/${slug}` : '#'

  // Format the index to always be two digits (e.g., 01, 02, 10)
  const formattedIndex = index < 10 ? `0${index}` : index.toString()

  // Format deliverables as a comma-separated string
  const formattedDeliverables = deliverables.map((d) => d.title).join(', ')

  return (
    <Link href={projectUrl} className={componentStyles({ class: className })}>
      <Section hasGrid>
        <div className="project-related-item__index">{formattedIndex}</div>
        <div className="project-related-item__title">{title}</div>
        <div className="project-related-item__deliverables">{formattedDeliverables}</div>
        <div className="project-related-item__icon"><ArrowIcon /></div>
        
      </Section>
    </Link>
  )
}
