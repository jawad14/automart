import { siteConfig } from '@/config/site.config';
import { categories } from '@/lib/automart/data';
import { CategoryIcon } from '@/lib/automart/icons';
import { Reveal } from './Reveal';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Categories() {
  return (
    <section className="am-section" id="categories">
      <div className="am-wrap">
        <Reveal>
          <div className="am-sec-head">
            <span className="am-eyebrow">Shop by category</span>
            <h2>The body shop&apos;s catalog — without the markup.</h2>
            <p>
              From front bumpers to heating &amp; cooling, we stock the high-turn collision parts
              your shop needs — all priced for the long haul.
            </p>
          </div>
        </Reveal>
        <div className="am-cat-grid">
          {categories.map((c) => (
            <a className="am-cat" key={c.key} href={siteConfig.phoneHref}>
              <span className="am-ci">
                <CategoryIcon k={c.key} />
              </span>
              <span className="am-sku">{c.sku}</span>
              <h4>{c.name}</h4>
              <p className="am-cdesc">{c.desc}</p>
              <span className="am-clink">
                Call to order <Arrow />
              </span>
            </a>
          ))}
        </div>
        <div className="am-cat-foot">
          <a className="am-btn am-btn-red am-btn-lg" href={siteConfig.phoneHref}>
            Call to order
          </a>
          <a className="am-btn am-btn-ghost am-btn-lg" href="#quote">
            Request a quote
          </a>
        </div>
      </div>
    </section>
  );
}
