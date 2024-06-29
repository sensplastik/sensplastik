"use client"
import Link from 'next/link';

import { CustomPortableText } from '@/components/shared/CustomPortableText';
import { useSettings } from '@/context/SettingsContext';

export default function Footer() {
  const { settings } = useSettings();
  const info = settings?.footer?.info;
  const showBrand = settings?.footer?.showBrand;
  const showAddress = settings?.footer?.showAddress;
  const showInstagram = settings?.footer?.showInstagram;
  const showEmail = settings?.footer?.showEmail;

  const siteName = settings?.siteName;
  const address = settings?.address;
  const instagram = settings?.instagram;
  const email = settings?.email;

  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      {siteName && showBrand && (
        <div className="footer__brand" aria-label="Footer Brand">
          <div className="footer__name">{siteName}</div>
          <div className="footer__copyright">©{year} All Rights Reserved</div>
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
          <Link id="footer-email-link" className="footer__link" href={`mailto:${email}`}>
            {email}
          </Link>
        </div>
      )}
    </footer>
  );
}
