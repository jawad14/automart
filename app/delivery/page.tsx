import type { Metadata } from 'next';
import { CardGrid } from '@/components/blocks/automart/CardGrid';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { Marquee } from '@/components/blocks/automart/Marquee';
import { PageHero } from '@/components/blocks/automart/PageHero';
import { Quote } from '@/components/blocks/automart/Quote';
import { Reviews } from '@/components/blocks/automart/Reviews';
import { SectionHeading } from '@/components/blocks/automart/SectionHeading';
import { SplitCta } from '@/components/blocks/automart/SplitCta';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { Values } from '@/components/blocks/automart/Values';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Same-Day Delivery — Our Own Fleet Across Chicagoland',
  description:
    'Our own trucks, our own drivers, two runs a day. Order a part this morning and have it on your bench by afternoon — across Chicagoland and surrounding metros.',
};

const points = [
  {
    title: 'Two routes a day',
    body: 'A morning run and an afternoon run hit the same metros — so a part ordered before noon is on your bench by close of business.',
  },
  {
    title: 'Our own drivers',
    body: 'No third-party couriers. Our team handles every box from the shelf to your dock — fewer handoffs, fewer damaged panels.',
  },
  {
    title: 'Local first',
    body: 'Chicagoland and the surrounding metro are core. Outside the zone? We ship next-day freight with shop-friendly LTL rates.',
  },
  {
    title: 'Will-call welcome',
    body: 'Stop by the counter in Addison and grab the part on the way back to the shop. No wait, no minimum.',
  },
];

const zones = [
  'Chicago (city)',
  'Cicero · Berwyn',
  'Oak Park · Maywood',
  'Melrose Park · Bellwood',
  'Elmhurst · Addison',
  'Bensenville · Wood Dale',
  'Schaumburg · Hoffman Estates',
  'Naperville · Aurora',
  'Joliet · Bolingbrook',
  'Tinley Park · Orland Park',
  'Skokie · Evanston',
  'Niles · Park Ridge',
];

export default function DeliveryPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageHero
        crumb="Same-Day Delivery"
        eyebrow="Twice-daily local routes"
        headlineLead="Order by phone."
        headlineAccent="On your bench by close."
        lede="The job doesn’t wait — neither do we. Twice a day, our own trucks fan out across Chicagoland so the part you need to finish a job today gets there today."
        ctas={[
          { label: 'Call to order', href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'See if you’re in zone', href: '/#quote', variant: 'ghost-w' },
        ]}
      />
      <Values />
      <Marquee />
      <section className="am-section am-section-alt">
        <div className="am-wrap">
          <SectionHeading
            eyebrow="How it works"
            headline="Built to keep shops moving."
            lede="Our delivery network is designed around how body shops actually work — fast in zone, transparent outside it."
          />
          <CardGrid variant={4} items={points} />
        </div>
      </section>
      <section className="am-section">
        <div className="am-wrap">
          <SectionHeading
            eyebrow="Coverage"
            headline="Where we run."
            lede="A sample of our daily routes — odds are we’re already passing your shop. Call the desk to confirm timing for your zip."
          />
          <div className="am-vt-grid">
            {zones.map((z) => (
              <div className="am-vt" key={z}>
                <b>{z}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SplitCta />
      <Reviews />
      <Quote />
      <Footer />
      <Toast />
    </div>
  );
}
