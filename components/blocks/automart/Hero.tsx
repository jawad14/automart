import { siteConfig } from '@/config/site.config';
import { Finder } from './Finder';

export function Hero() {
  return (
    <section className="am-hero">
      <div className="am-wrap">
        <div className="am-hero-left">
          <span className="am-hero-eyebrow">
            <span className="am-dot" />
            Built on Trust. Driven by Value.
          </span>
          <h1>
            Collision parts that fit right the <span className="am-accent">first time.</span>
          </h1>
          <p className="am-lede">
            Aftermarket &amp; OEM-comparable bumpers, headlights, fenders and body parts at the best
            prices in the industry — backed by our own twice-daily delivery fleet and a real parts
            specialist on every call.
          </p>
          <div className="am-hero-cta">
            <a className="am-btn am-btn-yellow am-btn-lg" href={siteConfig.phoneHref}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call to order — {siteConfig.phone}
            </a>
            <a className="am-btn am-btn-outline-w am-btn-lg" href="#quote">
              Request a free quote
            </a>
          </div>
          <div className="am-hero-stats">
            <div className="am-st">
              <b>25 yrs</b>
              <span>Serving the industry</span>
            </div>
            <div className="am-vline" />
            <div className="am-st">
              <b>Twice daily</b>
              <span>Local delivery</span>
            </div>
            <div className="am-vline" />
            <div className="am-st">
              <b>120,000+</b>
              <span>Parts in stock</span>
            </div>
          </div>
        </div>

        <div className="am-hero-right">
          <Finder />
          <div className="am-hero-photo">
            Drop a collision-parts hero photo (bumpers, headlights, fenders)
          </div>
        </div>
      </div>
    </section>
  );
}
