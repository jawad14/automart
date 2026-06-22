import Image from 'next/image';

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent?: string;
  lede: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export function PageBanner({ eyebrow, headlineLead, headlineAccent, lede, image }: Props) {
  const className = image ? 'am-page-banner am-page-banner-split' : 'am-page-banner';
  return (
    <section className={className}>
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
      </div>
    </section>
  );
}
