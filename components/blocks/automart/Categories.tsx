import { siteConfig } from '@/config/site.config';
import { btnClass } from '@/lib/automart/button';
import { categories } from '@/lib/automart/data';
import { CategoryIcon } from '@/lib/automart/icons';
import { Reveal } from './Reveal';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Categories() {
  const { categoriesHead } = siteConfig.content;
  return (
    <section className="am-section" id="categories">
      <div className="am-wrap">
        <Reveal>
          <div className="am-sec-head">
            <span className="am-eyebrow">{categoriesHead.eyebrow}</span>
            <h2>{categoriesHead.headline}</h2>
            <p>{categoriesHead.lede}</p>
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
          {categoriesHead.ctas.map((cta) => (
            <a key={cta.label} className={btnClass(cta.variant, 'lg')} href={cta.href}>
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
