import type { Metadata } from 'next';
import { CardGrid } from '@/components/blocks/automart/CardGrid';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { PageHero } from '@/components/blocks/automart/PageHero';
import { SectionHeading } from '@/components/blocks/automart/SectionHeading';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { Values } from '@/components/blocks/automart/Values';
import { WhyList } from '@/components/blocks/automart/WhyList';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Careers — Build Something That Lasts',
  description:
    'We’re a family-run, 25-year-old parts business that grew the old-fashioned way: real people answering the phone. If that sounds like work you’d be proud of, talk to us.',
};

const openings = [
  {
    title: 'Parts Specialist · Call Desk',
    subtitle: 'Full-time · Addison, IL',
    body: 'Pick up the phone, find the right part, beat the dealer’s price. Hands-on training, weekly cell-based shifts, real growth into senior desk roles.',
  },
  {
    title: 'Delivery Driver · Chicagoland Routes',
    subtitle: 'Full-time · Addison, IL',
    body: 'Run our morning and afternoon routes in company vehicles. Clean record, courteous on the dock, comfortable with shop customers.',
  },
  {
    title: 'Warehouse Associate · Inbound/Outbound',
    subtitle: 'Full-time · Addison, IL',
    body: 'Receive inbound containers, pick orders for the trucks, keep the floor organized. Reach truck experience a plus.',
  },
  {
    title: 'Paint Desk · Color Matching',
    subtitle: 'Full-time · Addison, IL',
    body: 'Camera-match colors, mix to spec, advise refinishers on system selection. Refinish or paint-counter background required.',
  },
];

const why = [
  {
    n: 1,
    title: 'Family-run since 2001',
    body: 'No private-equity churn. Decisions are made on the floor, not in a quarterly board deck.',
  },
  {
    n: 2,
    title: 'Promote from within',
    body: 'Most senior desk leads, route managers and buyers started here. We grow people up.',
  },
  {
    n: 3,
    title: 'Real benefits',
    body: 'Health, dental, vision, 401(k) match, PTO and paid holidays — all from day 91.',
  },
  {
    n: 4,
    title: 'Stable hours',
    body: 'Mon–Sat schedule, no Sundays. You’ll know when you’re working a month out.',
  },
];

export default function CareersPage() {
  const mailto = `mailto:${siteConfig.email}`;
  const openingsWithHref = openings.map((o) => ({ ...o, href: mailto }));
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageHero
        crumb="Careers"
        eyebrow="Family-run since 2001"
        headlineLead="Work somewhere that"
        headlineAccent="picks up the phone."
        lede="Twenty-five years in, we’re still growing because customers still call. If you like the idea of being on the other end of that line — solving problems, beating prices, shipping parts that fit — we’d like to hear from you."
        ctas={[
          { label: 'Email your résumé', href: mailto, variant: 'yellow' },
          { label: 'Call to apply', href: siteConfig.phoneHref, variant: 'ghost-w' },
        ]}
      />
      <Values />
      <section className="am-section am-section-alt">
        <div className="am-wrap">
          <SectionHeading
            eyebrow="Open roles"
            headline="We’re hiring."
            lede="All positions are based at our Addison, IL warehouse and counter."
          />
          <CardGrid variant={4} items={openingsWithHref} />
        </div>
      </section>
      <WhyList
        eyebrow="Why Automart"
        headline="What it’s like to work here."
        lede="We grew the old-fashioned way — real people answering the phone, year after year. That culture is the job, and it’s why people stay."
        ctas={[
          { label: 'Email your résumé', href: mailto, variant: 'red' },
          { label: 'Call to apply', href: siteConfig.phoneHref, variant: 'outline-w' },
        ]}
        reasons={why}
      />
      <Footer />
      <Toast />
    </div>
  );
}
