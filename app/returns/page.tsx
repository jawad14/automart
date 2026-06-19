import type { Metadata } from 'next';
import { CardGrid } from '@/components/blocks/automart/CardGrid';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { Marquee } from '@/components/blocks/automart/Marquee';
import { PageHero } from '@/components/blocks/automart/PageHero';
import { Quote } from '@/components/blocks/automart/Quote';
import { Reviews } from '@/components/blocks/automart/Reviews';
import { SectionHeading } from '@/components/blocks/automart/SectionHeading';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { Values } from '@/components/blocks/automart/Values';
import { WhyList } from '@/components/blocks/automart/WhyList';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Returns & Warranty — Fair, Fast, No Surprises',
  description:
    'A clear returns and warranty policy built for shops. If a part doesn’t fit, doesn’t arrive right, or fails on the lift — call us and we make it right.',
};

const policy = [
  {
    title: '30-day returns',
    body: 'Unused parts in original packaging can be returned within 30 days. Restocking is waived for shop accounts in good standing.',
  },
  {
    title: 'Fitment guarantee',
    body: 'If the part doesn’t bolt up to the year/make/model on your order, we cover return shipping and dispatch a replacement — same day in zone.',
  },
  {
    title: 'Freight damage',
    body: 'Sign for visible damage on the BOL and notify us within 24 hours. We file the claim with the carrier and reship — you don’t lose a day waiting.',
  },
  {
    title: 'Limited lifetime',
    body: 'Lighting and cooling components carry a limited lifetime warranty against manufacturing defects, registered to the original purchaser.',
  },
];

const steps = [
  {
    n: 1,
    title: 'Call the desk',
    body: 'Have your invoice number ready. We pull the order in seconds and confirm the SKU.',
  },
  {
    n: 2,
    title: 'Tell us what happened',
    body: 'Fitment, finish, damage — be honest. We’ll route the right path on the spot.',
  },
  {
    n: 3,
    title: 'We make it right',
    body: 'Replacement on the next delivery run, refund processed when the part is back on our dock, or credit applied to your account.',
  },
];

export default function ReturnsPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageHero
        crumb="Returns & Warranty"
        eyebrow="Fair, fast, no surprises"
        headlineLead="If something’s off,"
        headlineAccent="we make it right."
        lede="A part not fitting is a bad day for everyone. Our policy is simple: call us, we own it. No forms in triplicate, no waiting on hold — a real specialist gets you back on the job."
        ctas={[
          { label: 'Call to start a return', href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Read the FAQ', href: '/faq', variant: 'ghost-w' },
        ]}
      />
      <Values />
      <Marquee />
      <section className="am-section am-section-alt">
        <div className="am-wrap">
          <SectionHeading
            eyebrow="Policy at a glance"
            headline="What’s covered."
            lede="The four lines below cover most of what you’ll need. Edge case? Call the desk and we’ll figure it out together."
          />
          <CardGrid variant={4} items={policy} />
        </div>
      </section>
      <WhyList
        eyebrow="Process"
        headline="How a return works."
        lede="Three steps, no surprises. Call us with the invoice in hand and we own the rest of the process — refund, replacement or credit, whichever you prefer."
        ctas={[
          { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref, variant: 'red' },
          { label: 'Read the FAQ', href: '/faq', variant: 'outline-w' },
        ]}
        reasons={steps}
      />
      <Reviews />
      <Quote />
      <Footer />
      <Toast />
    </div>
  );
}
