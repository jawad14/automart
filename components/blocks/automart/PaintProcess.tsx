import { SectionHeading } from './SectionHeading';

export type PaintStep = { title: string; body: string; products: string };

type Props = {
  eyebrow: string;
  headline: string;
  lede?: string;
  items: PaintStep[];
};

export function PaintProcess({ eyebrow, headline, lede, items }: Props) {
  return (
    <section className="am-section am-section-alt">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <ol className="am-paint-steps">
          {items.map((s, i) => (
            <li className="am-paint-step" key={s.title}>
              <span className="am-paint-step-num">{i + 1}</span>
              <div className="am-paint-step-body">
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <span className="am-paint-step-products">{s.products}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
