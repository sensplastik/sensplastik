'use client'
import { useEffect } from 'react'

import { Card } from '@/components/shared/Card'
import { Content } from '@/components/shared/Content'
import { ContentRows } from '@/components/shared/ContentRows'
import { HorizontalMenu } from '@/components/shared/HorizontalMenu'
import { Intro } from '@/components/shared/Intro'
import { Message } from '@/components/shared/Message'
import { Picture } from '@/components/shared/Picture'
import { Preface } from '@/components/shared/Preface'
import { Section } from '@/components/shared/Section'
import { Spacer } from '@/components/shared/Spacer'
import { StatusBar } from '@/components/shared/StatusBar'
import { Teaser } from '@/components/shared/Teaser'
import { Title } from '@/components/shared/Title'
import {
  getBackgroundElements,
  updateBackgroundColor,
} from '@/utils/updateBackground'

// Replace with your desired background color
const pageBackgroundColor = '#E3E1DD'

export default function MainContent() {
  useEffect(() => {
    // Cache the original background color
    const originalBackgroundColor = 'var(--color-background)'

    // Get the elements
    const { mainElement, footerElement } = getBackgroundElements()

    // Set the new background color
    updateBackgroundColor({ mainElement, footerElement }, pageBackgroundColor)

    // Reset the background color when the component unmounts
    return () => {
      updateBackgroundColor(
        { mainElement, footerElement },
        originalBackgroundColor,
      )
    }
  }, [])

  return (
    <>
      {/* Message 
      <Section>
        <Message content="<p>If you’re interested in any form of collaboration, please send us an email and we’ll get back shortly. <a href='mailto:studio@sensplastik.com' target='_blank'>studio@sensplastik.com</a></p>" />
      </Section>
      */}
      {/* Status Bar 
          <Section>
            <StatusBar />
          </Section>
          */}

      {/* Spacer 160px */}
      <Spacer
        lineSize={{
          default: '0',
        }}
        paddingBottom={{
          default: '0',
        }}
      />

      {/* Teaser */}
      <Section>
        <Teaser title="Connect with Sensplastik®" titleLevel={1} />
      </Section>

      {/* Spacer 160px */}
      <Spacer
        lineSize={{
          default: '0',
        }}
        paddingBottom={{
          default: '0',
        }}
      />

      {/* Content rows */}
      <Section>
        <ContentRows
          title="Looking to collaborate?"
          items={[
            {
              title: 'Let’s create together',
              content:
                '<p>We’re here to help bring your vision to life. Whether you’re ready to get started, interested in partnering with us, or simply have some questions – we’d love to hear from you! Reach out to discover how we can achieve remarkable results together.</p>',
            },
          ]}
        />
      </Section>

      {/* Spacer  60px */}
      <Spacer
        lineSize={{
          default: '0',
        }}
        paddingTop={{
          default: '60px',
        }}
        paddingBottom={{
          default: '0',
        }}
      />

      {/* Spacer 160px with striped lines*/}
      <Section>
        <Spacer stripedLines bgColor="#E3E1DD" />
      </Section>

      {/* Spacer 60px */}
      <Spacer
        lineSize={{
          default: '0',
        }}
        paddingTop={{
          default: '60px',
        }}
        paddingBottom={{
          default: '0',
        }}
      />

      {/* Content rows */}
      <Section>
        <ContentRows
          title="All enquiries"
          items={[
            {
              title: 'Business',
              content:
                '<p>New business inquiries and collaborations. Please write to <a href="mailto:studio@sensplastik.com" target="_blank">studio@sensplastik.com</a></p>',
            },
            {
              title: 'Collaboration',
              content: '<p>Send us an email, and we’ll set up a meeting.</p>',
            },
            {
              title: 'Public Relations',
              content:
                '<p>Requests for interviews, materials and talks. Please write to <a href="mailto:mi@sensplastik.com" target="_blank">mi@sensplastik.com</a></p>',
            },
          ]}
        />
      </Section>
    </>
  )
}
