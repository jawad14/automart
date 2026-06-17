import { siteConfig } from '@/config/site.config';
import { reviews } from '@/lib/automart/data';
import { Reveal } from './Reveal';

const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="m12 2 3 6.5 7 .8-5.2 4.7L18.5 21 12 17.3 5.5 21 7.2 14 2 9.3l7-.8z" />
  </svg>
);

export function Reviews() {
  const { reviewsHead } = siteConfig.content;
  return (
    <section className="am-section" id="reviews">
      <div className="am-wrap">
        <Reveal>
          <div className="am-rev-head">
            <div>
              <span className="am-eyebrow">{reviewsHead.eyebrow}</span>
              <h2>{reviewsHead.headline}</h2>
            </div>
            <a className="am-btn am-btn-ghost" href={reviewsHead.seeAllHref}>
              {reviewsHead.seeAllLabel}
            </a>
          </div>
        </Reveal>
        <div className="am-rev-grid">
          {reviews.map((r) => (
            <div className="am-rev" key={r.name}>
              <div className="am-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="am-quote">&ldquo;{r.quote}&rdquo;</p>
              <div className="am-who">
                <span className="am-av">{r.initials}</span>
                <div>
                  <b>{r.name}</b>
                  <span>{r.meta}</span>
                </div>
                <span className="am-vbadge">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
