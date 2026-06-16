import { siteConfig } from '@/config/site.config';
import { Reveal } from './Reveal';

const reasons = [
  {
    title: '25 years of trust',
    body: 'Family-run since 2001. Generations of body shops have built their work on Automart parts.',
  },
  {
    title: 'Twice-daily delivery',
    body: 'Our own fleet of trucks and drivers across Chicagoland — two routes a day so parts arrive when you need them.',
  },
  {
    title: 'Best price, guaranteed',
    body: "Show us a lower written quote on a comparable part and we'll beat it. Same fair price every time.",
  },
  {
    title: 'Largest call center',
    body: 'Dozens of US-based parts specialists answering the phone — personalised service on every order, no scripts.',
  },
];

export function Why() {
  return (
    <section className="am-why am-section" id="why">
      <div className="am-wrap">
        <Reveal>
          <div className="am-why-intro">
            <span className="am-eyebrow">Why Automart</span>
            <h2>Professional quality without the markup.</h2>
            <p className="am-wlede">
              For 25 years we&apos;ve supplied collision repair shops, mechanics and drivers across
              the US with parts that fit, arrive fast, and don&apos;t cost dealer money. No online
              checkout, no sign-ups — just a call to a real parts pro and the right part at your
              door.
            </p>
            <div className="am-wcta">
              <a className="am-btn am-btn-red am-btn-lg" href={siteConfig.phoneHref}>
                Call {siteConfig.phone}
              </a>
              <a className="am-btn am-btn-outline-w am-btn-lg" href="#quote">
                About Automart
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="am-why-list">
            {reasons.map((r, i) => (
              <div className="am-wr" key={r.title}>
                <span className="am-num">{i + 1}</span>
                <div>
                  <b>{r.title}</b>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
