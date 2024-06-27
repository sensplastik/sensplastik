import './HomePage.scss'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { Message } from '@/components/shared/Message'
import { Section } from '@/components/shared/Section'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { StatusBar } from '@/components/shared/StatusBar'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview = [],
    message = null,
    showStatusBar = true,
    showcaseProjects = [],
    title = '',    
  } = data ?? {}
  
  const messageTitle = message?.title
  const messageContent = message?.content

  return (
    <>
      {/* Page Message */}
      {messageTitle && messageContent && (
        <Section>
          <Message title={messageTitle} content={messageContent} />
        </Section>
      )}
      {/* Status Bar */}
      {showStatusBar && (
      <Section>
        <StatusBar/>
      </Section>
      )}
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project?._type, project?.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default HomePage
