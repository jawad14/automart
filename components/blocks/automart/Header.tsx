'use client';

import Image from 'next/image';
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
      <header className={`am-header${scrolled ? 'scrolled' : ''}`}>
        <div className="am-wrap">
          <a className="am-brand" href="#" aria-label={`${siteConfig.name} home`}>
            <Image
              src="/automart/automart-white.png"
              alt={siteConfig.name}
              width={180}
              height={42}
              priority
              style={{ height: 42, width: 'auto' }}
            />
          </a>
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
            <a className="am-btn am-btn-yellow" href="#quote">
              Request a quote
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

      <div className={`am-drawer${open ? 'open' : ''}`}>
        <div className="am-drawer-scrim" onClick={close} />
        <div className="am-drawer-panel">
          <div className="am-dh">
            <Image
              src="/automart/automart-red.png"
              alt="Automart"
              width={140}
              height={34}
              style={{ height: 34, width: 'auto' }}
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
