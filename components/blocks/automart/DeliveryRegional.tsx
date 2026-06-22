import { SectionHeading } from './SectionHeading';

export type RegionalCoverage = {
  state: string;
  coverage: string;
  time: string;
  cities: string[];
};

type Props = {
  eyebrow: string;
  headline: string;
  lede?: string;
  items: RegionalCoverage[];
};

export function DeliveryRegional({ eyebrow, headline, lede, items }: Props) {
  return (
    <section className="am-section am-section-alt">
      <div className="am-wrap">
        <SectionHeading eyebrow={eyebrow} headline={headline} lede={lede} />
        <div className="am-regional-grid">
          {items.map((r) => (
            <article className="am-regional" key={r.state}>
              <div className="am-regional-head">
                <div>
                  <div className="am-regional-state">{r.state}</div>
                  <div className="am-regional-coverage">{r.coverage}</div>
                </div>
                <span className="am-regional-time">{r.time}</span>
              </div>
              <div className="am-regional-body">
                <div className="am-regional-label">Coverage includes</div>
                <div className="am-regional-cities">
                  {r.cities.map((c) => (
                    <span className="am-regional-city" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
