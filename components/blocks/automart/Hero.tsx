import Image from 'next/image';
import { Fragment } from 'react';
import { siteConfig } from '@/config/site.config';
import { btnClass } from '@/lib/automart/button';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Hero() {
  const { hero } = siteConfig.content;
  return (
    <section className="am-hero">
      <div className="am-wrap">
        <div className="am-hero-left">
          <span className="am-hero-eyebrow">
            <span className="am-dot" />
            {hero.eyebrow}
          </span>
          <h1>
            {hero.headline} <span className="am-accent">{hero.headlineAccent}</span>
          </h1>
          <p className="am-lede">{hero.lede}</p>
          <div className="am-hero-cta">
            {hero.ctas.map((cta, i) => (
              <a key={cta.label} className={btnClass(cta.variant, 'lg')} href={cta.href}>
                {i === 0 ? <PhoneIcon /> : null}
                {cta.label}
              </a>
            ))}
          </div>
          <div className="am-hero-stats">
            {hero.stats.map((s, i) => (
              <Fragment key={s.label}>
                <div className="am-st">
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
                {i < hero.stats.length - 1 ? <div className="am-vline" /> : null}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="am-hero-right">
          <div className="am-hero-photo">
            <Image
              src="/automart/hero-nationwide.webp"
              alt="Automart Nationwide — collision parts delivered across the country"
              width={920}
              height={620}
              priority
              sizes="(max-width: 900px) 100vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
