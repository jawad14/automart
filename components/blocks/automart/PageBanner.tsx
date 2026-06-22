import Image from 'next/image';
import Link from 'next/link';
import { btnClass } from '@/lib/automart/button';
import type { ButtonVariant } from '@/config/site.config';

type Cta = { label: string; href: string; variant: ButtonVariant };

type MosaicTile = { src: string; alt: string };

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent?: string;
  lede: string;
  image?: { src: string; alt: string; width: number; height: number };
  backgroundImage?: { src: string; alt: string };
  ctas?: Cta[];
  trustItems?: string[];
  mosaic?: MosaicTile[];
};

const isInternalRoute = (href: string) => href.startsWith('/') && !href.startsWith('//');

export function PageBanner({
  eyebrow,
  headlineLead,
  headlineAccent,
  lede,
  image,
  backgroundImage,
  ctas,
  trustItems,
  mosaic,
}: Props) {
  const classes = ['am-page-banner'];
  const hasRightVisual = !!image || !!mosaic;
  if (hasRightVisual) classes.push('am-page-banner-split');
  if (backgroundImage) classes.push('am-page-banner-bg');
  return (
    <section className={classes.join(' ')}>
      {backgroundImage ? (
        <div className="am-page-banner-bgimg" aria-hidden="true">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : null}
      <div className="am-wrap am-page-banner-inner">
        <div className="am-page-banner-copy">
          <span className="am-page-banner-eyebrow">{eyebrow}</span>
          <h1>
            {headlineLead}
            {headlineAccent ? (
              <>
                {' '}
                <span className="am-accent">{headlineAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="am-lede">{lede}</p>
          {ctas && ctas.length > 0 ? (
            <div className="am-page-banner-cta">
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
          ) : null}
          {trustItems && trustItems.length > 0 ? (
            <div className="am-page-banner-trust">
              {trustItems.map((t) => (
                <span key={t}>✓ {t}</span>
              ))}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="am-page-banner-visual" aria-hidden="true">
            <Image
              className="am-page-banner-img"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 900px) 0px, 420px"
              priority
            />
          </div>
        ) : null}
        {mosaic && mosaic.length > 0 ? (
          <div className="am-page-banner-mosaic" aria-hidden="true">
            {mosaic.map((m) => (
              <div className="am-page-banner-tile" key={m.src}>
                <Image
                  src={m.src}
                  alt={m.alt}
                  width={300}
                  height={220}
                  sizes="(max-width: 900px) 33vw, 160px"
                  priority
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
