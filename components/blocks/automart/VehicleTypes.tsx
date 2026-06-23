import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { vehicleTypes, type VehicleTypeKey } from '@/lib/automart/data';
import { Reveal } from './Reveal';

const vehicleImages: Record<VehicleTypeKey, string> = {
  sedan: '/automart/vehicles/sedan.svg',
  suv: '/automart/vehicles/suv.svg',
  truck: '/automart/vehicles/pickup-truck.svg',
  hatch: '/automart/vehicles/hatchback.svg',
  coupe: '/automart/vehicles/coupe.svg',
  van: '/automart/vehicles/van-cargo.svg',
};

export function VehicleTypes() {
  const { vehicleTypesHead } = siteConfig.content;
  return (
    <section className="am-section" id="vehicles">
      <div className="am-wrap">
        <Reveal>
          <div className="am-sec-head">
            <span className="am-eyebrow">{vehicleTypesHead.eyebrow}</span>
            <h2>{vehicleTypesHead.headline}</h2>
          </div>
        </Reveal>
        <div className="am-vt-grid">
          {vehicleTypes.map((v) => (
            <a className="am-vt" key={v.key} href={siteConfig.phoneHref}>
              <span className="am-vti">
                <Image
                  className="am-vt-img"
                  src={vehicleImages[v.key]}
                  alt={v.name}
                  width={66}
                  height={66}
                  unoptimized
                />
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
