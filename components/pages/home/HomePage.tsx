import './HomePage.scss'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { Message } from '@/components/shared/Message'
import { Picture } from '@/components/shared/Picture'
import { Section } from '@/components/shared/Section'
import { Spacer } from '@/components/shared/Spacer'
import { StatusBar } from '@/components/shared/StatusBar'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { Content } from '@/components/shared/Content'
import { Brand } from '@/components/shared/Brand'

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

  const whatWeDo = [
    { title: 'Brand Design' },
    { title: 'Visual Identity' },
    { title: 'Graphic Design' },
    { title: 'Websites Design' },
    { title: 'Platforms Design' },
    { title: 'Apps Design' },
    { title: 'Websites Development' },
    { title: 'Apps Development' },
    { title: 'Platforms Development' },
    { title: 'System Development' },
    { title: 'System Integration' },
    { title: 'Backend' },
    { title: 'Frontend' },
    { title: 'API Development' },
    { title: 'Print & Production' },
    { title: 'React' },
    { title: 'Next' },
    { title: 'Vue.js' },
    { title: 'Nuxt' },
    { title: 'JavaScript' },
    { title: 'HTML | CSS' },
    { title: 'Tailwind CSS' },
    { title: 'SASS' },
  ];

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
      <Spacer lineSize={{default:'0'}} paddingBottom={{default:'0'}}/>
      {/* Picture */}
      <Section>
        <Picture/>
      </Section>
      <Spacer lineSize={{default:'0'}} paddingTop={{default:'60px'}} paddingBottom={{default:'0'}}/>
      {/* Intro */}
      <Spacer lineSize={{default:'0'}} paddingTop={{default:'80px'}} paddingBottom={{default:'0'}}/>
      {/* Vertical Navigation */}
      <Spacer/>
      {/* Content */}
      <Section>
        <Content title='What we do' contentColumns={1} content='<p>We have partnered with numerous clients on a wide range of projects, gaining valuable insights along the way. Here is a selection of key highlights.</p>'/>
      </Section>
      <Spacer/>
      <Brand items={whatWeDo}/>
      <Spacer/>
      <Section>
        <Content title='Feed'/>
      </Section>
      <Spacer lineSize={{default:'0'}} paddingTop={{default:'120px'}} paddingBottom={{default:'0'}}/>
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
