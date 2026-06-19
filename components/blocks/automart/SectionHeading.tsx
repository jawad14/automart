import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  headline: string;
  lede?: ReactNode;
  center?: boolean;
};

export function SectionHeading({ eyebrow, headline, lede, center = true }: Props) {
  const className = ['am-sec-head', center && 'am-sec-head-center'].filter(Boolean).join(' ');
  return (
    <div className={className}>
      <span className="am-eyebrow">{eyebrow}</span>
      <h2>{headline}</h2>
      {lede ? <p>{lede}</p> : null}
    </div>
  );
}
