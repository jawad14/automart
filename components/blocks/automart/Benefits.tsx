export type BenefitIconKey = 'pay' | 'truck' | 'health' | 'growth';

export type Benefit = { iconKey: BenefitIconKey; title: string; desc: string };

type Props = {
  eyebrow: string;
  headline: string;
  lede: string;
  items: Benefit[];
};

function BenefitIcon({ k }: { k: BenefitIconKey }) {
  switch (k) {
    case 'pay':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="12" cy="12" r="9" />
          <path
            d="M14 9.5a3 3 0 0 0-2-1c-1.7 0-3 1-3 2.3 0 3 5 1.5 5 4.4 0 1.4-1.3 2.3-3 2.3-1 0-1.8-.4-2.3-1"
            strokeLinecap="round"
          />
          <path d="M12 6.5v1M12 16.5v1" strokeLinecap="round" />
        </svg>
      );
    case 'truck':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M1 4h13v11H1z" strokeLinejoin="round" />
          <path d="M14 8h4l3 3v4h-7" strokeLinejoin="round" />
          <circle cx="5.5" cy="17.5" r="2" />
          <circle cx="17.5" cy="17.5" r="2" />
        </svg>
      );
    case 'health':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" strokeLinejoin="round" />
          <path d="M12 8v8M8 12h8" strokeLinecap="round" />
        </svg>
      );
    case 'growth':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M3 17 9 11l4 4 8-8" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M14 5h7v7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function Benefits({ eyebrow, headline, lede, items }: Props) {
  return (
    <section className="am-section">
      <div className="am-wrap">
        <div className="am-sec-head am-sec-head-center">
          <span className="am-eyebrow">{eyebrow}</span>
          <h2>{headline}</h2>
          <p>{lede}</p>
        </div>
        <div className="am-benefits">
          {items.map((b) => (
            <div className="am-benefit" key={b.title}>
              <span className="am-benefit-ico">
                <BenefitIcon k={b.iconKey} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
