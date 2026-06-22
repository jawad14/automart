import { SectionHeading } from './SectionHeading';

export type DeliveryRule = { title: string; body: string };

type Props = {
  eyebrow: string;
  headline: string;
  lede?: string;
  items: DeliveryRule[];
};

export function DeliveryRules({ eyebrow, headline, lede, items }: Props) {
  return (
    <section className="am-section">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <ol className="am-drules">
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
