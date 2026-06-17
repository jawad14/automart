import { siteConfig } from '@/config/site.config';
import { btnClass } from '@/lib/automart/button';
import { Reveal } from './Reveal';

export function SplitCta() {
  return (
    <section className="am-split am-section" id="shops">
      <div className="am-wrap">
        {siteConfig.content.splitCta.map((card) => (
          <Reveal key={card.variant}>
            <div className={`am-split-card am-${card.variant}`}>
              <span className="am-tag">{card.tag}</span>
              <h3>{card.headline}</h3>
              <p>{card.body}</p>
              <div className="am-scta">
                {card.ctas.map((cta) => (
                  <a key={cta.label} className={btnClass(cta.variant)} href={cta.href}>
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
