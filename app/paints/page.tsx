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
  title: 'Automotive Paints — Refinish Coatings & Clears',
  description:
    'Pro-grade automotive refinish coatings, primers, basecoats and clears — color-matched, mixed in-house and ready for pickup or twice-daily delivery.',
};

const lines = [
  {
    title: 'Basecoats',
    body: 'OEM-matched solvent and waterborne basecoats — single-stage and tri-coat formulas in stock.',
  },
  {
    title: 'Clears',
    body: 'High-solids urethane clears with fast flash-off — designed for production booths and small-shop bake cycles.',
  },
  {
    title: 'Primers & Sealers',
    body: 'Epoxy, urethane and self-etch primers — full system support from bare metal to topcoat.',
  },
  {
    title: 'Color match',
    body: 'Camera-matched on-site mixing. Bring the panel or VIN and we mix to spec while you wait.',
  },
  {
    title: 'Reducers & Hardeners',
    body: 'Temperature-tuned reducers, slow/medium/fast activators — matched to your booth and humidity.',
  },
  {
    title: 'Body & Prep',
    body: 'Body filler, glaze, sandpaper, masking, prep wipes — the full counter for a complete refinish job.',
  },
];

export default function PaintsPage() {
  const linesWithHref = lines.map((l) => ({ ...l, href: siteConfig.phoneHref }));
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageHero
        crumb="Automotive Paints"
        eyebrow="Mixed in-house, matched to your VIN"
        headlineLead="Refinish coatings,"
        headlineAccent="mixed to match."
        lede="Whether you’re respraying a quarter panel or refinishing a full job, we carry the full line — basecoats, clears, primers and prep — and mix to your VIN in-house. Tell us the job; we’ll set you up with the right system."
        ctas={[
          { label: 'Call the paint desk', href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Get a paint quote', href: '/#quote', variant: 'ghost-w' },
        ]}
      />
      <Values />
      <section className="am-section am-section-alt">
        <div className="am-wrap">
          <SectionHeading
            eyebrow="Product lines"
            headline="The full refinish system."
            lede="Tell us the job and we’ll line up the right basecoat, clear, primer and prep — and mix it to your VIN in-house."
          />
          <CardGrid variant={3} items={linesWithHref} />
        </div>
      </section>
      <Marquee />
      <SplitCta />
      <Reviews />
      <Quote />
      <Footer />
      <Toast />
    </div>
  );
}
