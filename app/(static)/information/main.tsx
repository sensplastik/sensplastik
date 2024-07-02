'use client'
import { useEffect } from 'react'

import { Content } from '@/components/shared/Content'
import { ContentColumns } from '@/components/shared/ContentColumns'
import { ContentNumbered } from '@/components/shared/ContentNumbered'
import { ContentTable } from '@/components/shared/ContentTable'
import { HorizontalMenu } from '@/components/shared/HorizontalMenu'
import { Intro } from '@/components/shared/Intro'
import { List } from '@/components/shared/List'
import { Message } from '@/components/shared/Message'
import { Picture } from '@/components/shared/Picture'
import { Preface } from '@/components/shared/Preface'
import { Section } from '@/components/shared/Section'
import { Spacer } from '@/components/shared/Spacer'
import { StatusBar } from '@/components/shared/StatusBar'
import { Title } from '@/components/shared/Title'
import {
  getBackgroundElements,
  updateBackgroundColor,
} from '@/utils/updateBackground'

// Replace with your desired background color
const pageBackgroundColor = 'var(--color-background)'

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
        <Title />
      </Section>

      {/* Spacer default */}
      <Spacer />

      {/* Horizontal Menu */}
      <Section>
        <HorizontalMenu />
      </Section>

      {/* Spacer 120px */}
      <Spacer
        lineSize={{
          default: '0',
        }}
        paddingTop={{
          default: '120px',
        }}
        paddingBottom={{
          default: '0',
        }}
      />

      {/* Preface */}
      <Section>
        <Preface content="<p>We are committed to addressing global brand challenges and providing innovative, long-term solutions. We work worldwide, creating engaging brand experiences and digital designs that are visually captivating, purpose-driven, and practical.</p>" />
      </Section>

      {/* Spacer default */}
      <Spacer lineColor="#8e8d86" />

      {/* Content */}
      <Section>
        <Content
          title="We are Sensplastik®"
          titleGridWidth={3}
          content="<p>At Sensplastik®, we navigate the complexities of a constantly changing world with a blend of flexibility and scalability. As a remote team, we have cultivated a vast network of professionals and studios, enabling us to scale our team as needed to respond to contemporary demands with agility and precision.</p> <p>Our expertise lies at the intersection of brand identity and digital design, covering a diverse range of disciplines, from industrial design to traditional print to app development. We provide functional design solutions tailored for businesses and individuals seeking lasting, reliable outcomes rather than quick fixes. Our deep collaborative spirit drives us to delve into your teams and communities, uncovering unique insights and sparking creative ideas that drive significant change for brands.</p><p>Sensplastik® believes that true excellence in design requires time, dedication, and close collaboration. We prioritize building long-term relationships founded on trust, transparency, and continuous progress. Our goal is to create designs that not only address immediate needs but also endure over time, enhancing daily life and contributing to a smarter, more thoughtful future. By focusing on essential elements, we strive to streamline and improve, ensuring that our work remains impactful and sustainable.</p>"
        />
      </Section>

      {/* Spacer 40px */}
      <Spacer
        paddingTop={{
          default: '40px',
        }}
        lineSize={{
          default: '0',
        }}
      />

      {/* Picture */}
      <Section>
        <Picture />
      </Section>

      {/* Spacer 20/10px */}
      <Spacer
        paddingTop={{
          default: '40px',
        }}
      />

      {/* Content */}
      <Section>
        <Content
          title="Our Capabilities"
          titleLevel={3}
          content="<p>At Sensplastik®, we are driven by a fusion of research and intuition to create innovative solutions that form the backbone of brands, products, and services. Our services are designed to bring your vision to life and ensure a seamless experience for your audience across all touchpoints.</p>"
          contentColumns={1}
        />
      </Section>

      {/* Spacer default */}
      <Spacer />

      {/* Accordion with full width section */}
      <Section fullWidth></Section>

      {/* Spacer default */}
      <Spacer />

      {/* Content */}
      <Section>
        <Content title="What Sets Us Apart" titleGridWidth={3} />
      </Section>

      {/* Spacer default */}
      <Spacer />

      <Section>
        <ContentColumns
          items={[
            {
              title: 'Client-Centric Approach',
              content:
                '<p>At Sensplastik®, our unique business model revolves around providing tailored, independent services. Instead of paying for a large, unnecessary team, we curate a specific global team for each project, working remotely to ensure you get the exact expertise you need. This alignment guarantees that our interests are in perfect harmony with those of our clients, fostering trust and long-term partnerships built on discretion and mutual respect.</p>',
              gridColumnStart: 7,
              gridColumnWidth: 2,
            },
            {
              title: 'Local Insight, Global Reach',
              content:
                "<p>Understanding local nuances is essential in today's diverse business landscape. With our rich multicultural background, we possess deep insights into various local markets and their unique dynamics. This local expertise, combined with a global outlook, enables us to deliver solutions that are both contextually relevant and globally informed, giving our clients a distinct advantage.</p>",
              gridColumnStart: 9,
              gridColumnWidth: 2,
            },
            {
              title: 'Expertise &  Wisdom',
              content:
                '<p>Our clients expect and receive the highest standards of knowledge and guidance. We cherish intellectual curiosity, diverse viewpoints, thoughtful analysis, and the wisdom that comes with experience. By continuously collaborating with top-tier talent and engaging in continuous learning ourselves, we ensure that our clients benefit from the most advanced and insightful expertise available.</p>',
              gridColumnStart: 11,
              gridColumnWidth: 2,
            },
          ]}
        />
      </Section>

      {/* Spacer default */}
      <Spacer />

      {/* Content */}
      <Section>
        <Content title="Transparency & Accountability" />
      </Section>

      {/* Spacer default */}
      <Spacer />

      {/* Content numbered */}
      <Section>
        <ContentNumbered
          items={[
            {
              number: '01',
              title: 'Fair Pricing',
              content:
                '<p>We charge on an hourly basis for each team member, avoiding the use of low-cost juniors to maintain our high standards.</p>',
              gridColumnStart: 7,
              gridColumnWidth: 2,
            },
            {
              number: '02',
              title: 'Dedicated Commitment',
              content:
                '<p>Our minimum engagement fee is €6,500, reflecting our focus on cultivating substantial, long-term relationships rather than one-off projects.</p>',
              gridColumnStart: 11,
              gridColumnWidth: 2,
            },
            {
              number: '03',
              title: 'Balanced Availability',
              content:
                '<p>We believe in a healthy work-life balance, working five days a week while dedicating time to outdoor activities and family, ensuring a fresh and motivated team.</p>',
              gridColumnStart: 7,
              gridColumnWidth: 2,
            },
            {
              number: '04',
              title: 'Remote Collaboration',
              content:
                '<p>Based in Paris, our studio operates remotely, allowing us to partner with clients worldwide and deliver consistent, high-quality service regardless of geographical location.</p>',
              gridColumnStart: 11,
              gridColumnWidth: 2,
            },
          ]}
        />
      </Section>

      {/* Spacer default */}
      <Spacer />

      {/* Content */}
      <Section>
        <Content title="Guiding Principles" titleGridWidth={3} />
      </Section>

      {/* Spacer default */}
      <Spacer />

      {/* Content table */}
      <ContentTable
        title="Excellence"
        items={[
          {
            title: 'Put our clients’ interests first',
            content:
              "<p>We prioritize our clients' needs and objectives above all else, ensuring that every decision and action is aligned with their best interests.</p>",
          },
          {
            title: 'Innovate constantly and welcome change',
            content:
              '<p>We embrace innovation and change as opportunities for growth and improvement, continuously seeking new ways to push boundaries and drive progress.</p>',
          },
          { separator: true },
          {
            title: 'Single-minded focus on success',
            content:
              '<p>While maintaining a commercial mindset, we remain focused on achieving success for our clients. We align our efforts with their business objectives, ensuring tangible results and value.</p>',
          },
          {
            title: 'Act with conviction informed by deep research and analysis',
            content:
              '<p>We approach every project with thorough research and analysis, allowing us to make informed decisions and deliver solutions that are both strategic and effective.</p>',
          },
        ]}
      />

      {/* Spacer 40px */}
      <Spacer
        paddingTop={{
          default: '40px',
        }}
      />

      {/* Content table */}
      <ContentTable
        title="Engagement"
        items={[
          {
            title: 'Collaborate to deliver the our best thinking and skills',
            content:
              '<p>Collaboration is key to our success. We leverage the diverse talents and expertise of our studio and extended team to deliver the highest quality work and innovative solutions.</p>',
          },
          {
            title: 'Be collegial and work together',
            content:
              '<p>Foster a collegial environment where we work together with our clients to achieve the best outcomes.</p>',
          },
          { separator: true },
          {
            title: 'Lead by example with drive and ambition',
            content:
              '<p>We lead by example, inspiring others with our dedication, ambition, and commitment to excellence. We set high standards for ourselves and strive to exceed them in every endeavor.</p>',
          },
        ]}
      />

      {/* Spacer 40px */}
      <Spacer
        paddingTop={{
          default: '40px',
        }}
      />

      {/* Content table */}
      <ContentTable
        title="Planet & People"
        items={[
          {
            title: 'Address the environmental impact of digital design',
            content:
              '<p>Recognizing the environmental impact of digital design, we strive to minimize emissions and energy consumption in our work. By creating efficient, optimized designs and utilizing sustainable practices, we aim to reduce the carbon footprint associated with internet usage.</p>',
          },
          {
            title: 'Promote purposeful intentions and long-lasting quality',
            content:
              '<p>In addition to addressing the environmental impact of digital design, we prioritize purposeful intentions and long-lasting quality in our work. By designing with sustainability in mind and prioritizing quality over quantity, we contribute to a more sustainable future for both people and the planet.</p>',
          },
          { separator: true },
          {
            title: 'Create long-term, sustainable design experiences',
            content:
              '<p>We create design experiences that are aesthetically pleasing, environmentally sustainable, and socially responsible. Research shows internet usage significantly impacts the environment, with digital design contributing to emissions and energy consumption. Estimates suggest that internet usage accounts for 3% to 4% of the global carbon footprint.</p>',
          },
        ]}
      />

      {/* Spacer default */}
      <Spacer />

      {/* Content */}
      <Section>
        <Content
          title="Key Clients"
          content="<p>Over the years, we have collaborated with clients of all sizes, spanning various sectors and industries, both internationally and locally. Guided by a shared set of values and a vision for a better future through design, we take pride in presenting a selection of our esteemed clients and the impactful work we've accomplished together.</p>"
          contentColumns={1}
        />
      </Section>

      {/* Spacer default */}
      <Spacer />

      <Section>
        <List
          items={[
            {
              title: 'Skykapital®',
            },
            {
              title: 'Sky Environment®',
            },
            {
              title: 'Byredo',
            },
            {
              title: 'Off-White®',
            },
            {
              title: 'Château des Saints',
            },
            {
              title: 'Belbao',
            },
            {
              title:
                "Festival international de mode, de photographie et d'accessoires, Hyères",
            },
            {
              title: 'Marc Audibet',
            },
            {
              title: 'Institut Français de la Mode',
            },
            {
              title: 'Roland-Garros',
            },
            {
              title: 'Flora',
            },
            {
              title: 'L’Imperatrice',
            },
            {
              title: 'Chantal Thomass',
            },
            {
              title: 'La Fée Maraboutée',
            },
            {
              title: 'Opaline Studio',
            },
          ]}
        />
      </Section>
    </>
  )
}
