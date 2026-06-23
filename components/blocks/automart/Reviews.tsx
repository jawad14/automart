'use client';

import '@splidejs/splide/css/core';
import { Splide } from '@splidejs/splide';
import { useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site.config';
import { reviews } from '@/lib/automart/data';
import { Reveal } from './Reveal';

const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="m12 2 3 6.5 7 .8-5.2 4.7L18.5 21 12 17.3 5.5 21 7.2 14 2 9.3l7-.8z" />
  </svg>
);

const Arrow = ({ dir }: { dir: 'prev' | 'next' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      d={dir === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Reviews() {
  const { reviewsHead } = siteConfig.content;
  const sliderRef = useRef<HTMLDivElement>(null);
  const splideRef = useRef<Splide | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    const splide = new Splide(sliderRef.current, {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '18px',
      autoplay: true,
      interval: 4500,
      pauseOnHover: true,
      arrows: false,
      pagination: false,
      breakpoints: {
        900: { perPage: 2 },
        600: { perPage: 1 },
      },
    }).mount();
    splideRef.current = splide;
    return () => {
      splide.destroy();
      splideRef.current = null;
    };
  }, []);

  return (
    <section className="am-section" id="reviews">
      <div className="am-wrap">
        <Reveal>
          <div className="am-rev-head">
            <div>
              <span className="am-eyebrow">{reviewsHead.eyebrow}</span>
              <h2>{reviewsHead.headline}</h2>
            </div>
            <div className="am-rev-nav">
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={() => splideRef.current?.go('<')}
              >
                <Arrow dir="prev" />
              </button>
              <button
                type="button"
                aria-label="Next reviews"
                onClick={() => splideRef.current?.go('>')}
              >
                <Arrow dir="next" />
              </button>
            </div>
          </div>
        </Reveal>
        <div className="splide am-rev-splide" ref={sliderRef} aria-label="Customer reviews">
          <div className="splide__track">
            <ul className="splide__list">
              {reviews.map((r) => (
                <li className="splide__slide" key={r.name}>
                  <div className="am-rev">
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
