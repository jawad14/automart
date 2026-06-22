import { btnClass } from '@/lib/automart/button';

export type Opening = {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  applyHref: string;
};

type Props = {
  eyebrow: string;
  headline: string;
  lede: React.ReactNode;
  items: Opening[];
};

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export function Openings({ eyebrow, headline, lede, items }: Props) {
  return (
    <section className="am-section am-section-alt">
      <div className="am-wrap">
        <div className="am-sec-head am-sec-head-center">
          <span className="am-eyebrow">{eyebrow}</span>
          <h2>{headline}</h2>
          <p>{lede}</p>
        </div>
        <ul className="am-jobs">
          {items.map((job) => (
            <li className="am-job" key={job.title}>
              <div className="am-job-head">
                <div className="am-job-title">
                  <h3>{job.title}</h3>
                  <div className="am-job-tags">
                    <span className="am-job-tag am-job-tag-dept">{job.department}</span>
                    <span className="am-job-tag">{job.type}</span>
                  </div>
                </div>
                <span className="am-job-loc">
                  <PinIcon />
                  {job.location}
                </span>
              </div>
              <p className="am-job-desc">{job.description}</p>
              <ul className="am-job-reqs">
                {job.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="am-job-foot">
                <a className={btnClass('red', 'md')} href={job.applyHref}>
                  Apply Now
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
