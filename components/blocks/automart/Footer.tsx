import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import { siteConfig } from '@/config/site.config';

const isInternalRoute = (href: string) => href.startsWith('/') && !href.startsWith('//');

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

const socialIcon: Record<string, ComponentType> = {
  Instagram,
  LinkedIn,
};

export function Footer() {
  const { footer } = siteConfig.content;
  return (
    <footer className="am-footer">
      <div className="am-wrap">
        <div className="am-ftop">
          <div className="am-fbrand">
            <Image
              src={siteConfig.brand.logoLight}
              alt={siteConfig.name}
              width={siteConfig.brand.logoWidth}
              height={siteConfig.brand.logoHeight}
              className="am-logo am-logo-footer"
            />
            <p>{footer.brandTagline}</p>
            {siteConfig.social.length > 0 ? (
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
            ) : null}
          </div>
          {footer.columns.map((col) => (
            <div className="am-fcol" key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {isInternalRoute(l.href) ? (
                      <Link href={l.href}>{l.label}</Link>
                    ) : (
                      <a href={l.href}>{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            <p className="am-fhours">{siteConfig.hours}</p>
          </div>
        </div>
        <div className="am-fbot">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · {footer.legalTagline}
          </span>
          <div className="am-chips">
            {footer.chips.map((c) => (
              <span className="am-chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
