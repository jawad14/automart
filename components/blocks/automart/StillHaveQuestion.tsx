import Link from 'next/link';
import { btnClass } from '@/lib/automart/button';
import type { ButtonVariant } from '@/config/site.config';

type Cta = { label: string; href: string; variant: ButtonVariant };

type Props = {
  eyebrow: string;
  headline: string;
  lede: string;
  ctas: Cta[];
};

const isInternalRoute = (href: string) => href.startsWith('/') && !href.startsWith('//');

export function StillHaveQuestion({ eyebrow, headline, lede, ctas }: Props) {
  return (
    <section className="am-section am-stillq">
      <div className="am-wrap">
        <div className="am-stillq-card">
          <span className="am-eyebrow am-eyebrow-light">{eyebrow}</span>
          <h2>{headline}</h2>
          <p>{lede}</p>
          <div className="am-stillq-cta">
            {ctas.map((cta) => {
              const className = btnClass(cta.variant, 'lg');
              return isInternalRoute(cta.href) ? (
                <Link key={cta.label} className={className} href={cta.href}>
                  {cta.label}
                </Link>
              ) : (
                <a key={cta.label} className={className} href={cta.href}>
                  {cta.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
