import Link from 'next/link';
import Head from 'next/head';
import type { PortableTextBlock } from 'next-sanity';

import { CustomPortableText } from '@/components/shared/CustomPortableText';
import type { FooterSettings, SettingsPayload } from '@/types';

interface FooterProps {
  data: SettingsPayload;
}

export default function Footer(props: FooterProps) {
  const { data } = props;
  const footer = data?.footer || ({} as FooterSettings);

  const info = footer?.info;
  const address = footer?.address;
  const instagram = footer?.instagram;
  const email = footer?.email;

  const year = new Date().getFullYear();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sensplastik",
    "url": "https://www.sensplastik.com",
    "sameAs": instagram ? [instagram] : [],
    "address": address ? {
      "@type": "PostalAddress",
      "streetAddress": address
    } : undefined,
    "contactPoint": email ? {
      "@type": "ContactPoint",
      "email": email
    } : undefined
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <footer className="footer" aria-label="Footer">
        <div className="footer__brand" aria-label="Footer Brand">
          <div className="footer__name">Sensplastik®</div>
          <div className="footer__copyright">©{year} All Rights Reserved</div>
        </div>

        {info && (
          <div className="footer__content" aria-label="Footer Information">
            <CustomPortableText value={info} />
          </div>
        )}

        {address && (
          <address className="footer__address" aria-label="Footer Address">
            {address}
          </address>
        )}

        {instagram && (
          <div className="footer__follow" aria-label="Follow Us">
            <label className="footer__label" htmlFor="footer-instagram-link">Follow Us</label>
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

        {email && (
          <div className="footer__talk" aria-label="Talk to Us">
            <label className="footer__label" htmlFor="footer-email-link">Talk to Us</label>
            <Link
              id="footer-email-link"
              className="footer__link"
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </div>
        )}
      </footer>
    </>
  );
}
