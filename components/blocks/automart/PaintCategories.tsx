import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

export type PaintCategory = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
  image: { src: string; alt: string };
};

type Props = {
  eyebrow: string;
  headline: string;
  lede?: React.ReactNode;
  items: PaintCategory[];
  inquireHref: string;
};

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M3 8h10m-3-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function PaintCategories({ eyebrow, headline, lede, items, inquireHref }: Props) {
  return (
    <section className="am-section">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <div className="am-paint-cats">
          {items.map((c) => (
            <article className="am-paint-cat" key={c.slug}>
              <div className="am-paint-cat-img">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  width={400}
                  height={220}
                  sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="am-paint-cat-body">
                <div className="am-paint-cat-head">
                  <span className="am-paint-cat-icon" aria-hidden="true">
                    {c.icon}
                  </span>
                  <h3>{c.title}</h3>
                </div>
                <p>{c.description}</p>
                <div className="am-paint-cat-tags">
                  {c.tags.map((t) => (
                    <span className="am-paint-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  className="am-paint-cat-cta"
                  href={`${inquireHref}?subject=${encodeURIComponent(`Inquiry: ${c.title}`)}`}
                >
                  Inquire about {c.title}
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
