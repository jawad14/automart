import { SectionHeading } from './SectionHeading';

export type DeliveryZone = {
  label: string;
  cadence: string;
  cutoff: string;
  accent: string;
  areas: string[];
};

type Props = {
  eyebrow: string;
  headline: string;
  lede?: string;
  items: DeliveryZone[];
};

export function DeliveryZones({ eyebrow, headline, lede, items }: Props) {
  return (
    <section className="am-section">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <div className="am-dzone-grid">
          {items.map((z) => (
            <article
              className="am-dzone"
              key={z.label}
              style={{ ['--zone-accent' as string]: z.accent }}
            >
              <div className="am-dzone-head">
                <div>
                  <p className="am-dzone-label">{z.label}</p>
                  <h3 className="am-dzone-time">{z.cadence}</h3>
                </div>
                <span className="am-dzone-cutoff">{z.cutoff}</span>
              </div>
              <ul className="am-dzone-areas">
                {z.areas.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
