export type DeliveryStat = { value: string; label: string };

type Props = {
  items: DeliveryStat[];
  tone?: 'default' | 'red';
};

export function DeliveryStats({ items, tone = 'default' }: Props) {
  const className = tone === 'red' ? 'am-dstats am-dstats-red' : 'am-dstats';
  return (
    <section className={className}>
      <div className="am-wrap am-dstats-row">
        {items.map((s) => (
          <div className="am-dstat" key={s.label}>
            <span className="am-dstat-val">{s.value}</span>
            <span className="am-dstat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
