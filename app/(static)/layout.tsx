import '@/styles/index.scss'

import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Script from 'next/script'
import { toPlainText } from 'next-sanity'
import { Suspense } from 'react'

import { Footer } from '@/components/global/Footer'
import { Navbar } from '@/components/global/Navbar'
import { Section } from '@/components/shared/Section'
import { SettingsProvider } from '@/context/SettingsContext'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

const LiveVisualEditing = dynamic(
  () => import('@/sanity/loader/LiveVisualEditing'),
)

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }] = await Promise.all([
    loadSettings()
  ])
  const ogImage = urlForOpenGraphImage(settings?.ogImage)

  const siteName = settings?.siteName
  const siteDescription = settings?.siteDescription
  const pageDescription = ''
  return {
    title: siteName
      ? {
          template: `%s | ${siteName}`,
          default: siteName || 'Personal website',
        }
      : undefined,
    description: pageDescription ? pageDescription : siteDescription,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {

  const [{ data: settings }] = await Promise.all([
    loadSettings(),
  ])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: settings?.siteName,
    url: process.env.NEXT_PUBLIC_WEBSITE_HOST,
    sameAs: settings?.instagram ? [settings.instagram] : [],
    address: settings?.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: settings.address,
        }
      : undefined,
    contactPoint: settings?.email
      ? {
          '@type': 'ContactPoint',
          email: settings.email,
        }
      : undefined,
  }
  return (
    <>
      <Script
        id="organization-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SettingsProvider settings={settings}>
        <main>
          <Suspense>
            <Section className="section--navbar">
              <Navbar />
            </Section>
          </Suspense>
          <Suspense>{children}</Suspense>
        </main>
        <Suspense>
          <Section className="section--footer">
            <Footer />
          </Section>
        </Suspense>
        {draftMode().isEnabled && <LiveVisualEditing />}
      </SettingsProvider>
    </>
  )
}
