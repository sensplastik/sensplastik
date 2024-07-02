"use client"
import { useEffect } from 'react';

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
import { getBackgroundElements, updateBackgroundColor } from '@/utils/updateBackground';

// Replace with your desired background color
const pageBackgroundColor = 'var(--color-background)';

export default  function MainContent() {
  useEffect(() => {
    // Cache the original background color
    const originalBackgroundColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-background')
      .trim()

    // Get the elements
    const {mainElement ,footerElement }  = getBackgroundElements()

    // Set the new background color
    updateBackgroundColor({mainElement ,footerElement }, pageBackgroundColor)
   
    // Reset the background color when the component unmounts
    return () => {
    updateBackgroundColor({mainElement ,footerElement }, originalBackgroundColor)
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
        <Teaser
          title="Building Timeless Brands for a Better Future"
          subTitle="Innovative Design with Strategic Vision"
        />
      </Section>

      {/* Spacer default */}
      <Spacer />

      {/* Horizontal Menu */}
      <Section>
        <Content title="Achievement" titleBadge="(12)"/>
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

      {/* Showcase projects */}
      <Section hasGrid={true}>
        <Card
         image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
         imageWidth={2880}
         imageHeight={1500}  
         gridStart={1}       
         gridWidth={3}
         title='Re-Store®'
         description='Intelligent managment of renewable energy'
         services={[
          {title: 'Brand identity'},
          {title:'Digital product'}
         ]}
         />
        <Card
         image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
         imageWidth={2880}
         imageHeight={1500}         
         gridStart={4}
         gridWidth={3}
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
        <Card
        isEmpty={true}    
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
        <Card            
         gridStart={4}
         gridWidth={3}
         isEmpty={true}
         />
        <Card
        image="https://cdn.sanity.io/images/m94ln1re/production/7bc1dbc594217e975e8f38a62f08aeb287cb93c5-2880x1500.jpg"
        imageWidth={2880}
        imageHeight={1500}         
        gridStart={7}
        gridWidth={3}
        />
        <Card            
         gridStart={10}
         gridWidth={3}
         isEmpty={true}
         />
      </Section>
    </>
  )
}
