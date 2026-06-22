export type DeliveryStat = { value: string; label: string };

type Props = { items: DeliveryStat[] };

export function DeliveryStats({ items }: Props) {
  return (
    <section className="am-dstats">
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
