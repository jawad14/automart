import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

export type PartCategory = {
  slug: string;
  name: string;
  description: string;
  skuBadge: string;
  image: { src: string; alt: string };
};

type Props = {
  eyebrow: string;
  headline: string;
  lede?: string;
  items: PartCategory[];
  callHref: string;
};

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M3 8h10m-3-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function PartsCategories({ eyebrow, headline, lede, items, callHref }: Props) {
  return (
    <section className="am-section">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <div className="am-parts-grid">
          {items.map((c) => (
            <a
              className="am-part-card"
              key={c.slug}
              href={callHref}
              aria-label={`Inquire about ${c.name}`}
            >
              <div className="am-part-card-img-wrap">
                <Image
                  className="am-part-card-img"
                  src={c.image.src}
                  alt={c.image.alt}
                  width={400}
                  height={260}
                  sizes="(max-width: 700px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span className="am-part-card-badge">{c.skuBadge}</span>
              </div>
              <div className="am-part-card-body">
                <h3 className="am-part-card-name">{c.name}</h3>
                <p className="am-part-card-desc">{c.description}</p>
                <span className="am-part-card-cta">
                  Call to Order
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
