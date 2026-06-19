import { btnClass } from '@/lib/automart/button';
import type { ButtonVariant } from '@/config/site.config';

type Cta = { label: string; href: string; variant: ButtonVariant };
type Reason = { n: number; title: string; body: string };

type Props = {
  eyebrow: string;
  headline: string;
  lede: string;
  ctas: Cta[];
  reasons: Reason[];
};

export function WhyList({ eyebrow, headline, lede, ctas, reasons }: Props) {
  return (
    <section className="am-why am-section">
      <div className="am-wrap">
        <div className="am-why-intro">
          <span className="am-eyebrow">{eyebrow}</span>
          <h2>{headline}</h2>
          <p className="am-wlede">{lede}</p>
          <div className="am-wcta">
            {ctas.map((cta) => (
              <a key={cta.label} className={btnClass(cta.variant, 'lg')} href={cta.href}>
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <div className="am-why-list">
          {reasons.map((r) => (
            <div className="am-wr" key={r.title}>
              <span className="am-num">{r.n}</span>
              <div>
                <b>{r.title}</b>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
