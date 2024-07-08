'use client'
import { useGSAP } from '@gsap/react'
import { cva } from 'cva'
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import { useRef } from 'react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { useSettings } from '@/context/SettingsContext'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)

export default function Footer() {
  const { settings } = useSettings()
  const info = settings?.footer?.info
  const showBrand = settings?.footer?.showBrand
  const showAddress = settings?.footer?.showAddress
  const showInstagram = settings?.footer?.showInstagram
  const showEmail = settings?.footer?.showEmail

  const siteName = settings?.siteName
  const address = settings?.address
  const instagram = settings?.instagram
  const email = settings?.email

  const year = new Date().getFullYear()

  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (container.current) {
        const footer = container.current.querySelector('.footer__inner') as HTMLDivElement
        //const section = footer.closest('.section--footer') as HTMLDivElement

        if (footer) {
          gsap.fromTo(
            footer,
            {
              opacity: 0,
              y: '100%',
            }, // Start from below the viewport
            {
              opacity: 1,
              y: 0,
              delay: 0.3,
              scrollTrigger: {
                trigger: footer,
                markers: true,
                toggleActions: 'play reverse play reset',
              },
            },
          )
        }
      }
    },
    { scope: container },
  )

  return (
    <footer className="footer" aria-label="Footer" ref={container}>
      <div className="footer__inner">
        {siteName && showBrand && (
          <div className="footer__brand" aria-label="Footer Brand">
            <div className="footer__name">{siteName}</div>
            <div className="footer__copyright">
              ©{year} All Rights Reserved
            </div>
          </div>
        )}

        {info && (
          <div className="footer__content" aria-label="Footer Information">
            <CustomPortableText value={info} />
          </div>
        )}

        {address && showAddress && (
          <address className="footer__address" aria-label="Footer Address">
            {address}
          </address>
        )}

        {instagram && showInstagram && (
          <div className="footer__follow" aria-label="Follow Us">
            <label className="footer__label" htmlFor="footer-instagram-link">
              Follow Us
            </label>
            <Link
              id="footer-instagram-link"
              className="footer__link"
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </div>
        )}

        {email && showEmail && (
          <div className="footer__talk" aria-label="Talk to Us">
            <label className="footer__label" htmlFor="footer-email-link">
              Talk to Us
            </label>
            <Link
              id="footer-email-link"
              className="footer__link"
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </div>
        )}
      </div>
    </footer>
  )
}
