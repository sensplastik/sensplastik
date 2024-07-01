import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import { Message } from '@/components/shared/Message'
import { ProjectHeader } from '@/components/shared/ProjectHeader'
import { Section } from '@/components/shared/Section'
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
    duration,
    overview,
    site,
    tags,
    title,
    messageTitle,
    messageContent,
  } = data ?? {}

  const startYear = new Date(duration?.start!).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <>            
      {/* Project Header*/}
      <ProjectHeader 
      title={title} 
      coverImage={coverImage}
      messageTitle={messageTitle} 
      messageContent={messageContent}
      />

      {/* Project Info*/}

      
    </>
  )
}

export default ProjectPage
