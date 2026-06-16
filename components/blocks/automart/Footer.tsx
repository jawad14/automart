import Image from 'next/image';
import type { ComponentType } from 'react';
import { siteConfig } from '@/config/site.config';

const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.5.5-1 1-1z" />
  </svg>
);
const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h4v16H4zM6 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3.8v2h.05c.53-1 1.83-2.05 3.76-2.05 4 0 4.74 2.64 4.74 6.07V20h-4v-4.6c0-1.1-.02-2.5-1.53-2.5s-1.77 1.2-1.77 2.43V20h-4z" />
  </svg>
);
const YouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-2-.2-3.3-.4-4-.3-1-1-1.6-2-1.8C17.9 6 12 6 12 6s-5.9 0-7.6.2c-1 .2-1.7.8-2 1.8C2.2 8.7 2 10 2 12s.2 3.3.4 4c.3 1 1 1.6 2 1.8C6.1 18 12 18 12 18s5.9 0 7.6-.2c1-.2 1.7-.8 2-1.8.2-.7.4-2 .4-4zM10 15V9l5 3z" />
  </svg>
);

const socialIcon: Record<string, ComponentType> = {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
};

export function Footer() {
  return (
    <footer className="am-footer">
      <div className="am-wrap">
        <div className="am-ftop">
          <div className="am-fbrand">
            <Image
              src="/automart/automart-white.png"
              alt={siteConfig.name}
              width={380}
              height={80}
              className="am-logo am-logo-footer"
            />
            <p>
              {siteConfig.name} — supplying collision repair shops, mechanics and drivers with
              aftermarket / OEM-comparable quality parts at honest prices since 2001. 25 years of
              trust, our own delivery fleet, and the industry&apos;s largest call center.
            </p>
            <div className="am-fsocial">
              {siteConfig.social.map((s) => {
                const Icon = socialIcon[s.label];
                return (
                  <a key={s.label} href={s.href} aria-label={s.label}>
                    {Icon ? <Icon /> : null}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="am-fcol">
            <h5>Shop</h5>
            <ul>
              <li>
                <a href="#categories">Bumpers</a>
              </li>
              <li>
                <a href="#categories">Headlights &amp; Tail Lights</a>
              </li>
              <li>
                <a href="#categories">Fenders</a>
              </li>
              <li>
                <a href="#categories">Mirrors</a>
              </li>
              <li>
                <a href="#categories">Grilles</a>
              </li>
              <li>
                <a href="#categories">Hoods &amp; Panels</a>
              </li>
              <li>
                <a href="#categories">Automotive Paints</a>
              </li>
            </ul>
          </div>
          <div className="am-fcol">
            <h5>How we work</h5>
            <ul>
              <li>
                <a href={siteConfig.phoneHref}>Call to order</a>
              </li>
              <li>
                <a href="#quote">Request a quote</a>
              </li>
              <li>
                <a href="#shops">Same-day delivery</a>
              </li>
              <li>
                <a href="#quote">Best price guarantee</a>
              </li>
              <li>
                <a href="#quote">Returns &amp; warranty</a>
              </li>
              <li>
                <a href="#quote">Visit our counter</a>
              </li>
            </ul>
          </div>
          <div className="am-fcol am-fcontact">
            <h5>Contact</h5>
            <p>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
            <p>
              <a href={siteConfig.phoneHref}>+1 {siteConfig.phone}</a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p style={{ fontSize: 13 }}>{siteConfig.hours}</p>
          </div>
        </div>
        <div className="am-fbot">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · Built on Trust. Driven by Value.
          </span>
          <div className="am-chips">
            <span className="am-chip">EST. 2001</span>
            <span className="am-chip">25 YRS</span>
            <span className="am-chip">TWICE A DAY</span>
            <span className="am-chip">BEST PRICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
