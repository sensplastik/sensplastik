import './ProjectPage.scss'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'
import { Suspense } from 'react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import { Message } from '@/components/shared/Message'
import { ProjectGallery } from '@/components/shared/ProjectGallery'
import { ProjectHeader } from '@/components/shared/ProjectHeader'
import { ProjectInfo } from '@/components/shared/ProjectInfo'
import { Section } from '@/components/shared/Section'
import { Spacer } from '@/components/shared/Spacer'
import type { ProjectPayload } from '@/types'
import { Title } from '@/components/shared/Title'
import { ProjectRelated } from '@/components/shared/ProjectRelated'

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

      {/* Project Details */}
      <div className="project-page-details">
        <Section>
          {/* Project Info */}
          <ProjectInfo
            headline="Where travel meets the power of collaborative AI"
            content="<p>Today Mobility excels in precision vehicle logistics and seamlessly integrated customer experiences. With cutting-edge technology at their disposal and a team of dedicated expert drivers, they guarantee vehicles arrive at their destinations with pinpoint precision exactly when needed. Their real-time solutions yield measurable improvements in control, traceability, and overall operational efficiency.</p><p>Our mission was to create a distinct brand identity for Today Mobility, followed by comprehensive design solutions that span the digital landscape, physical environments, apparel, and environmental considerations. Rooted in the concept of 'Direction' as our guiding principle, we've nurtured a unified design language adaptable to any context. This design philosophy is firmly grounded in functional values meticulously tailored for the global market, fostering scalable innovations.</p>"
            website="https://todaymobility.com"
            client="Today Mobility"
            deliverables={[
              { title: 'Visual Identity ' },
              { title: 'Web Design' },
              { title: 'Web Development' },
            ]}
            technologies={[
              { title: 'HTML' },
              { title: 'CSS' },
              { title: 'JavaScript' },
              { title: 'Nuxt' },
              { title: 'Vue.js' },
            ]}
          />

          {/* Spacer 120px */}
          <Spacer
            lineSize={{ default: '0' }}
            paddingBottom={{ default: '0' }}
            paddingTop={{ default: '120px' }}
          />

          {/* Project Gallery */}
          <ProjectGallery
            items={[
              {
                reference: '1.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
                gridWidth: 'full',
              },
              {
                reference: '2.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
                gridWidth: 'half',
              },
              {
                reference: '3.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
                gridWidth: 'half',
              },
              {
                reference: '4.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
                gridWidth: 'half',
              },
              {
                reference: '5.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
                gridWidth: 'half',
              },
              {
                reference: '6.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
                gridWidth: 'full',
              },
              {
                isEmpty: true,
              },

              {
                reference: '7.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
              },
              {
                reference: '8.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
                gridWidth: 'full',
              },
              {
                reference: '9.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
                gridWidth: 'full',
              },
              {
                reference: '10.10',
                title: 'Intelligent managment of renewable energy',
                image:
                  'https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg',
              },
            ]}
          />
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
        <ProjectRelated
          items={[
            {
              title: 'Today Mobility',
              slug: 'today-mobility',
              deliverables: [
                { title: 'Brand Identity' },
                { title: 'Website Design' },
                { title: 'Print' },
              ],
            },
            {
              title: 'Today Mobility',
              slug: 'today-mobility',
              deliverables: [
                { title: 'Brand Identity' },
                { title: 'Website Design' },
                { title: 'Print' },
              ],
            },
          ]}
        />
      </div>
    </>
  )
}

export default ProjectPage
