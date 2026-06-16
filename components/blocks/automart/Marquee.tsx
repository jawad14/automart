import { makes } from '@/lib/automart/data';

export function Marquee() {
  const items = [...makes, ...makes];
  return (
    <div className="am-marquee" aria-hidden="true">
      <div className="am-track">
        {items.map((m, i) => (
          <span key={`${m}-${i}`} className={`am-mi${i % 3 === 0 ? 'am-on' : ''}`}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
