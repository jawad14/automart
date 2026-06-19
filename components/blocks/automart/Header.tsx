'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site.config';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={['am-header', scrolled && 'scrolled'].filter(Boolean).join(' ')}>
        <div className="am-wrap">
          <Link className="am-brand" href="/" aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.brand.logoLight}
              alt={siteConfig.name}
              width={siteConfig.brand.logoWidth}
              height={siteConfig.brand.logoHeight}
              priority
              className="am-logo am-logo-header"
            />
          </Link>
          <nav className="am-nav">
            {siteConfig.nav.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="am-header-actions">
            <a className="am-header-phone" href={siteConfig.phoneHref}>
              <small>Call to order</small>
              <b>{siteConfig.phone}</b>
            </a>
            <button
              type="button"
              className="am-burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={['am-drawer', open && 'open'].filter(Boolean).join(' ')}>
        <div className="am-drawer-scrim" onClick={close} />
        <div className="am-drawer-panel">
          <div className="am-dh">
            <Image
              src={siteConfig.brand.logoDark}
              alt={siteConfig.name}
              width={Math.round(siteConfig.brand.logoWidth * 0.76)}
              height={Math.round(siteConfig.brand.logoHeight * 0.8)}
              className="am-logo am-logo-drawer"
            />
            <button type="button" className="am-dclose" onClick={close} aria-label="Close menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {siteConfig.nav.map((item) => (
            <a key={item.label} className="am-dlink" href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <div className="am-drawer-cta">
            <a className="am-btn am-btn-red am-btn-lg" href={siteConfig.phoneHref} onClick={close}>
              Call {siteConfig.phone}
            </a>
            <a className="am-btn am-btn-ghost am-btn-lg" href="#quote" onClick={close}>
              Request a quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
