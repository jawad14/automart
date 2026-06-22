import { SectionHeading } from './SectionHeading';

export type DeliveryRule = { title: string; body: string };

type Props = {
  eyebrow: string;
  headline: string;
  lede?: string;
  items: DeliveryRule[];
  cols?: 2 | 4;
};

export function DeliveryRules({ eyebrow, headline, lede, items, cols = 2 }: Props) {
  const className = cols === 4 ? 'am-drules am-drules-4' : 'am-drules';
  return (
    <section className="am-section">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <ol className={className}>
          {items.map((r, i) => (
            <li className="am-drule" key={r.title}>
              <span className="am-drule-num">{i + 1}</span>
              <div>
                <h4>{r.title}</h4>
                <p>{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
