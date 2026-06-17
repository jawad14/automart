import { siteConfig } from '@/config/site.config';
import { ValueIcon } from '@/lib/automart/icons';

export function Values() {
  return (
    <section className="am-values">
      <div className="am-wrap">
        {siteConfig.content.values.map((v) => (
          <div className="am-value" key={v.title}>
            <span className="am-vi">
              <ValueIcon k={v.iconKey} />
            </span>
            <div>
              <b>{v.title}</b>
              <span>{v.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
