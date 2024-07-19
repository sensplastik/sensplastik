import './ProjectPage.scss'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { ProjectGallery } from '@/components/shared/ProjectGallery'
import  ProjectHeader  from '@/components/shared/ProjectHeader'
import { ProjectInfo } from '@/components/shared/ProjectInfo'
import { ProjectRelated } from '@/components/shared/ProjectRelated'
import { Section } from '@/components/shared/Section'
import { Spacer } from '@/components/shared/Spacer'
import { Title } from '@/components/shared/Title'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectPage({ data, encodeDataAttribute }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    client,
    coverImage,
    description,
    overview,
    headline,
    website,
    deliverables,
    technologies,
    gallery,
    related,
    tags,
    title,
    message,
  } = data ?? {}

  //const startYear = new Date(duration?.start!).getFullYear()
  //const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <>
      {/* Project Header*/}
      <ProjectHeader
        title={title}
        coverImage={coverImage}
        messageTitle={message?.title}
        messageContent={message?.content}
      />

      {/* Project Details */}
      <div className="project-page-details">
        <Section>
          {/* Project Info */}
          <ProjectInfo
            headline={headline}
            content={description}
            website={website}
            client={client}
            deliverables={deliverables}
            technologies={technologies}
          />

          {/* Spacer 120px */}
          <Spacer
            lineSize={{ default: '0' }}
            paddingBottom={{ default: '0' }}
            paddingTop={{ default: '120px' }}
          />

          {/* Project Gallery */}
          <ProjectGallery items={gallery} />
        </Section>

        {/* Spacer default */}
        <Spacer />

        {/* Title */}
        <Section>
          <Title text="More Work" level={2} />
        </Section>

        {/* Spacer 160px */}
        <Spacer
          lineSize={{ default: '0' }}
          paddingBottom={{ default: '0' }}
          paddingTop={{ default: '160px' }}
        />

        {/* Project related */}
        <ProjectRelated items={related} />
      </div>
    </>
  )
}

export default ProjectPage
