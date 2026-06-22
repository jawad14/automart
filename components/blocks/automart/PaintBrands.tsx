import { SectionHeading } from './SectionHeading';

type Props = {
  eyebrow: string;
  headline: string;
  items: string[];
};

export function PaintBrands({ eyebrow, headline, items }: Props) {
  return (
    <section className="am-section">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} />
        <div className="am-paint-brands">
          {items.map((b) => (
            <span className="am-paint-brand" key={b}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
