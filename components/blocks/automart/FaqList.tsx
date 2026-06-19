import { SectionHeading } from './SectionHeading';

type Props = {
  eyebrow: string;
  headline: string;
  lede?: string;
  items: { q: string; a: string }[];
};

export function FaqList({ eyebrow, headline, lede, items }: Props) {
  return (
    <section className="am-section am-section-alt">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <div className="am-faq-list">
          {items.map((f, i) => (
            <details className="am-faq" key={i}>
              <summary>
                <span>{f.q}</span>
                <span className="am-faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
