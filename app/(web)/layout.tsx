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

const [{ data: settings }, { data: homePage }] = await Promise.all([
  loadSettings(),
  loadHomePage(),
])

export async function generateMetadata(): Promise<Metadata> {
  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.overview
      ? toPlainText(homePage.overview)
      : undefined,
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
          <Section>
            <Footer />
          </Section>
        </Suspense>
        {draftMode().isEnabled && <LiveVisualEditing />}
      </SettingsProvider>
    </>
  )
}
