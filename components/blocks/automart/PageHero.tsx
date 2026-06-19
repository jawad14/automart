import Link from 'next/link';
import { btnClass } from '@/lib/automart/button';
import type { ButtonVariant } from '@/config/site.config';

type Cta = { label: string; href: string; variant: ButtonVariant };

type Props = {
  crumb: string;
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  lede: string;
  ctas: Cta[];
};

const isInternalRoute = (href: string) => href.startsWith('/') && !href.startsWith('//');

export function PageHero({ crumb, eyebrow, headlineLead, headlineAccent, lede, ctas }: Props) {
  return (
    <section className="am-page-hero">
      <div className="am-wrap">
        <nav className="am-crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="am-crumb-sep">›</span>
          <span>{crumb}</span>
        </nav>
        <span className="am-hero-eyebrow">
          <span className="am-dot" />
          {eyebrow}
        </span>
        <h1>
          {headlineLead} <span className="am-accent">{headlineAccent}</span>
        </h1>
        <p className="am-lede">{lede}</p>
        <div className="am-ph-cta">
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
    </section>
  );
}
