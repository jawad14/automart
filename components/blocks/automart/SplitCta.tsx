import { siteConfig } from '@/config/site.config';
import { Reveal } from './Reveal';

export function SplitCta() {
  return (
    <section className="am-split am-section" id="shops">
      <div className="am-wrap">
        <Reveal>
          <div className="am-split-card am-shops">
            <span className="am-tag">For collision shops</span>
            <h3>Order by phone. We&apos;ll be there in an hour.</h3>
            <p>
              Across Chicagoland and the surrounding metro, our own trucks run all day — so the
              parts you need to finish a job today get there today.
            </p>
            <div className="am-scta">
              <a className="am-btn am-btn-yellow" href={siteConfig.phoneHref}>
                Call our shop desk
              </a>
              <a className="am-btn am-ghost-w" href="#quote">
                See delivery zones
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="am-split-card am-drivers">
            <span className="am-tag">For drivers</span>
            <h3>Skip the dealer. We&apos;ll quote you the best price.</h3>
            <p>
              Tell us your year, make, model and what&apos;s damaged. A real parts specialist will
              quote you in minutes — and beat the dealer&apos;s price.
            </p>
            <div className="am-scta">
              <a className="am-btn am-btn-yellow" href={siteConfig.phoneHref}>
                Get a price
              </a>
              <a className="am-btn am-ghost-w" href="#quote">
                Request a quote online
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
