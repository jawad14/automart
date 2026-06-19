import Link from 'next/link';

type CardItem = {
  title: string;
  body: string;
  n?: string | number;
  subtitle?: string;
  href?: string;
};

type Props = {
  variant: 3 | 4;
  items: CardItem[];
};

const isInternalRoute = (href: string) => href.startsWith('/') && !href.startsWith('//');

export function CardGrid({ variant, items }: Props) {
  const className = variant === 4 ? 'am-cards-4' : 'am-cards-3';
  return (
    <div className={className}>
      {items.map((c) => {
        const inner = (
          <>
            {c.n != null ? <span className="am-stepnum">{c.n}</span> : null}
            <h4>{c.title}</h4>
            <p>
              {c.subtitle ? (
                <>
                  <b style={{ color: 'var(--am-black)' }}>{c.subtitle}</b>
                  <br />
                </>
              ) : null}
              {c.body}
            </p>
          </>
        );
        if (!c.href) return <div key={c.title}>{inner}</div>;
        if (isInternalRoute(c.href))
          return (
            <Link key={c.title} href={c.href}>
              {inner}
            </Link>
          );
        return (
          <a key={c.title} href={c.href}>
            {inner}
          </a>
        );
      })}
    </div>
  );
}
