import './HomePage.scss'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Card } from '@/components/shared/Card'
import { Content } from '@/components/shared/Content'
import { Header } from '@/components/shared/Header'
import { Intro } from '@/components/shared/Intro'
import { List } from '@/components/shared/List'
import { Message } from '@/components/shared/Message'
import { Picture } from '@/components/shared/Picture'
import { Section } from '@/components/shared/Section'
import { Spacer } from '@/components/shared/Spacer'
import { StatusBar } from '@/components/shared/StatusBar'
import { VerticalNav } from '@/components/shared/VerticalNav'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

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
      {(messageTitle || messageContent) && (
        <Section>
          <Message title={messageTitle} content={messageContent} />
        </Section>
      )}

      {/* Status Bar */}
      {showStatusBar && (
        <>
          {/* Spacer */}
          <Spacer
            lineColor='var(--color-lines)'
            paddingTop={{ default: '0' }}
            paddingBottom={{ default: '10px' }}
          />
          <Section>
            <StatusBar />
          </Section>
        </>
      )}
      <Spacer lineSize={{ default: '0' }} paddingBottom={{ default: '0' }} />
      {/* Picture */}
      <Section>
        <Picture
          src="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          width={2880}
          height={1500}
        />
      </Section>

      {/* Spacer */}
      <Spacer
        lineSize={{ default: '0' }}
        paddingTop={{ default: '60px' }}
        paddingBottom={{ default: '0' }}
      />

      {/* Intro */}
      <Section>
        <Intro
          title="Corporate made Beautiful"
          intro="Sensplastik® is a Paris-based design studio working internationally to create compelling brand experiences and digital designs for clients globally."
          content="<p>From leading corporations and luxury brands to visionary startups and creative artists, we harness the latest technological advancements to deliver groundbreaking solutions that drive progress and set new standards. Explore how we bring ideas to life, creating impactful and sustainable designs that shape the future.</p>"
        />
      </Section>
      <Spacer
        lineSize={{ default: '0' }}
        paddingTop={{ default: '80px' }}
        paddingBottom={{ default: '0' }}
      />
      {/* Vertical Navigation */}
      <Section>
        <VerticalNav
          items={[
            { title: 'Selected Work' },
            { title: 'About Us' },
            { title: 'Get in Touch' },
          ]}
        />
      </Section>
      <Spacer />
      {/* Content */}
      <Section>
        <Content
          title="What we do"
          content="<p>We have partnered with numerous clients on a wide range of projects, gaining valuable insights along the way. Here is a selection of key highlights.</p>"
          contentColumns={1}
          titleLevel={1}
          titleGridWidth={5}
          contentGridWidth={4}
          isVerticallyCentered={true}
        />
      </Section>
      <Spacer />
      <List
        listType="services"
        items={[
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
        ]}
      />
      <Spacer />
      <Section>
        <Content title="Feed" />
      </Section>
      <Spacer
        lineSize={{ default: '0' }}
        paddingTop={{ default: '120px' }}
        paddingBottom={{ default: '0' }}
      />
      {/* Showcase projects */}
      <Section hasGrid={true}>
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={1}
          gridWidth={3}
          title="Re-Store®"
          description="Intelligent managment of renewable energy"
          services={[{ title: 'Brand identity' }, { title: 'Digital product' }]}
        />
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/b94388a123c7455df5813b08aa035190043877eb-4096x2731.jpg"
          imageWidth={4096}
          imageHeight={2731}
          gridStart={4}
          gridWidth={3}
          title="Today Mobility"
          description="Where travel meets the power of collaborative AI"
          services={[
            { title: 'Visual Identity' },
            { title: 'Web Design' },
            { title: 'Web Development' },
          ]}
          link="/projects/today-mobility"
        />
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={7}
          gridWidth={6}
        />
      </Section>
      <Spacer
        lineSize={{ default: '0' }}
        paddingTop={{ default: '120px' }}
        paddingBottom={{ default: '0' }}
      />
      <Section hasGrid={true}>
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={1}
          gridWidth={3}
        />
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={4}
          gridWidth={3}
        />
        <Card isEmpty={true} gridStart={7} gridWidth={3} />
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={10}
          gridWidth={3}
        />
      </Section>
      <Spacer
        lineSize={{ default: '0' }}
        paddingTop={{ default: '120px' }}
        paddingBottom={{ default: '0' }}
      />
      <Section hasGrid={true}>
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={1}
          gridWidth={6}
        />
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={7}
          gridWidth={3}
        />
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={10}
          gridWidth={3}
        />
      </Section>
      <Spacer
        lineSize={{ default: '0' }}
        paddingTop={{ default: '120px' }}
        paddingBottom={{ default: '0' }}
      />
      <Section hasGrid={true}>
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={1}
          gridWidth={3}
        />
        <Card gridStart={4} gridWidth={3} isEmpty={true} />
        <Card
          image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
          imageWidth={2880}
          imageHeight={1500}
          gridStart={7}
          gridWidth={3}
        />
        <Card gridStart={10} gridWidth={3} isEmpty={true} />
      </Section>
      {/* {showcaseProjects && showcaseProjects.length > 0 && (
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
      )} */}
    </>
  )
}

export default HomePage
