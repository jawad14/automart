import { siteConfig } from '@/config/site.config';
import { btnClass } from '@/lib/automart/button';
import { Reveal } from './Reveal';

export function Why() {
  const { why } = siteConfig.content;
  return (
    <section className="am-why am-section" id="why">
      <div className="am-wrap">
        <Reveal>
          <div className="am-why-intro">
            <span className="am-eyebrow">{why.eyebrow}</span>
            <h2>{why.headline}</h2>
            <p className="am-wlede">{why.lede}</p>
            <div className="am-wcta">
              {why.ctas.map((cta) => (
                <a key={cta.label} className={btnClass(cta.variant, 'lg')} href={cta.href}>
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="am-why-list">
            {why.reasons.map((r, i) => (
              <div className="am-wr" key={r.title}>
                <span className="am-num">{i + 1}</span>
                <div>
                  <b>{r.title}</b>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
