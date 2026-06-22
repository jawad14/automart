type PolicyNote = { tone?: 'default' | 'danger'; label: string; text: string };

type ListCard = {
  kind: 'list';
  title: string;
  subtitle?: string;
  bullets: string[];
  notes?: PolicyNote[];
};

type TableCard = {
  kind: 'table';
  title: string;
  subtitle?: string;
  head: [string, string, string, string];
  rows: {
    part: string;
    condition: string;
    period: string;
    periodTone?: 'red' | 'dark';
    action: string;
  }[];
};

type StepsCard = {
  kind: 'steps';
  title: string;
  subtitle?: string;
  steps: string[];
  spanish?: { title: string; subtitle: string; steps: { lead: string; rest: string }[] };
};

export type PolicyCard = ListCard | TableCard | StepsCard;

type Props = { cards: PolicyCard[] };

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <path d="m4 12 5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function CardHead({ n, title }: { n: number; title: string }) {
  return (
    <div className="am-policy-head">
      <span className="am-policy-num">{n}</span>
      <h3>{title}</h3>
    </div>
  );
}

function ListBody({ card }: { card: ListCard }) {
  return (
    <>
      {card.subtitle ? <p className="am-policy-sub">{card.subtitle}</p> : null}
      <ul className="am-policy-list">
        {card.bullets.map((b) => (
          <li key={b}>
            <span className="am-policy-list-ico">
              <CheckIcon />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {card.notes?.map((n) => (
        <p
          key={n.label}
          className={
            n.tone === 'danger' ? 'am-policy-note am-policy-note-danger' : 'am-policy-note'
          }
        >
          <strong>{n.label}:</strong> {n.text}
        </p>
      ))}
    </>
  );
}

function TableBody({ card }: { card: TableCard }) {
  return (
    <>
      {card.subtitle ? <p className="am-policy-sub">{card.subtitle}</p> : null}
      <div className="am-warranty-table">
        <div className="am-warranty-head">
          {card.head.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        {card.rows.map((r) => (
          <div className="am-warranty-row" key={r.part}>
            <span className="am-warranty-part">{r.part}</span>
            <span className="am-warranty-cond">{r.condition}</span>
            <span
              className={
                r.periodTone === 'red' ? 'am-warranty-period red' : 'am-warranty-period dark'
              }
            >
              {r.period}
            </span>
            <span className="am-warranty-action">{r.action}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function StepsBody({ card }: { card: StepsCard }) {
  return (
    <>
      {card.subtitle ? <p className="am-policy-sub">{card.subtitle}</p> : null}
      <div className="am-rma-steps">
        {card.steps.map((s, i) => (
          <div className="am-rma-step" key={s}>
            <span className="am-rma-step-num">{i + 1}</span>
            <p>{s}</p>
          </div>
        ))}
      </div>
      {card.spanish ? (
        <div className="am-rma-spanish">
          <h4>{card.spanish.title}</h4>
          <p className="am-policy-sub">{card.spanish.subtitle}</p>
          <ol className="am-rma-spanish-list">
            {card.spanish.steps.map((s) => (
              <li key={s.lead}>
                <strong>{s.lead}</strong> {s.rest}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </>
  );
}

export function ReturnsPolicy({ cards }: Props) {
  return (
    <section className="am-section am-section-alt">
      <div className="am-wrap">
        <div className="am-policy-grid">
          {cards.map((c, i) => {
            const full = c.kind === 'table' || c.kind === 'steps' ? ' am-policy-card-full' : '';
            return (
              <article className={`am-policy-card${full}`} key={c.title}>
                <CardHead n={i + 1} title={c.title} />
                {c.kind === 'list' ? <ListBody card={c} /> : null}
                {c.kind === 'table' ? <TableBody card={c} /> : null}
                {c.kind === 'steps' ? <StepsBody card={c} /> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
