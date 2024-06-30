import { Card } from '@/components/shared/Card'
import { Content } from '@/components/shared/Content'
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

export default async function MainContent() {
  return (
    <>
      {/* Message */}
      <Section>
        <Message content="<p>If you’re interested in any form of collaboration, please send us an email and we’ll get back shortly. <a href='mailto:studio@sensplastik.com' target='_blank'>studio@sensplastik.com</a></p>" />
      </Section>

      {/* Status Bar 
          <Section>
            <StatusBar />
          </Section>
          */}

      {/* Title */}
      <Section>
        <Teaser
          title="Connect with Sensplastik®"
          titleLevel={1}
        />
      </Section>

      {/* Spacer default */}
      <Spacer
        lineSize={{
          default: '0',
        }}
        paddingBottom={{
          default: '0',
        }}
      />
    </>
  )
}
