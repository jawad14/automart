import { SectionHeading } from './SectionHeading';

type Props = {
  eyebrow: string;
  headline: string;
  lede?: string;
  items: { q: string; a: string }[];
};

export function FaqLinear({ eyebrow, headline, lede, items }: Props) {
  return (
    <section className="am-section am-section-alt">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <ol className="am-faq-linear">
          {items.map((f, i) => (
            <li className="am-faq-li" key={i}>
              <details className="am-faq-acc">
                <summary>
                  <span className="am-faq-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="am-faq-q">{f.q}</span>
                  <span className="am-faq-toggle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <p className="am-faq-a">{f.a}</p>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
