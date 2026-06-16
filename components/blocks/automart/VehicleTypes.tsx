import { siteConfig } from '@/config/site.config';
import { vehicleTypes } from '@/lib/automart/data';
import { VehicleIcon } from '@/lib/automart/icons';
import { Reveal } from './Reveal';

export function VehicleTypes() {
  return (
    <section className="am-section" id="vehicles">
      <div className="am-wrap">
        <Reveal>
          <div className="am-sec-head">
            <span className="am-eyebrow">Shop by vehicle type</span>
            <h2>Find parts faster.</h2>
          </div>
        </Reveal>
        <div className="am-vt-grid">
          {vehicleTypes.map((v) => (
            <a className="am-vt" key={v.key} href={siteConfig.phoneHref}>
              <span className="am-vti">
                <VehicleIcon k={v.key} />
              </span>
              <b>{v.name}</b>
              <span>{v.count}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
