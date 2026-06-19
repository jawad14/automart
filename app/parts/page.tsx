import type { Metadata } from 'next';
import { CardGrid } from '@/components/blocks/automart/CardGrid';
import { Categories } from '@/components/blocks/automart/Categories';
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
import { CategoryIcon } from '@/lib/automart/icons';

export const metadata: Metadata = {
  title: 'Shop All Auto Body Parts — Bumpers, Lights, Fenders & More',
  description:
    'Over 120,000 aftermarket and OEM-comparable collision parts in stock. Twice-daily delivery across Chicagoland and shop-friendly pricing on every SKU.',
};

const quickTiles = [
  { key: 'bumper', label: 'Bumpers' } as const,
  { key: 'light', label: 'Headlights' } as const,
  { key: 'grille', label: 'Grilles' } as const,
  { key: 'mirror', label: 'Mirrors' } as const,
  { key: 'hood', label: 'Hoods' } as const,
  { key: 'corner', label: 'Corner Lights' } as const,
];

const steps = [
  {
    n: '01',
    title: 'Pick a category',
    body: 'Browse the catalog or just tell us what panel is damaged — bumper, fender, headlight, hood. No part numbers required.',
  },
  {
    n: '02',
    title: 'Tell us the vehicle',
    body: 'Year, make, model and trim — and the VIN if you have it. A specialist confirms fitment in seconds, not days.',
  },
  {
    n: '03',
    title: 'Lock in the price',
    body: 'We quote you the best price up front, beat any written competitor quote, and apply your account tier if you’re a shop.',
  },
  {
    n: '04',
    title: 'On the next truck',
    body: 'In zone? It’s on the morning or afternoon run. Outside zone? Next-day freight at shop-friendly LTL rates.',
  },
];

export default function PartsPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageHero
        crumb="Shop All Parts"
        eyebrow="120,000+ SKUs in stock"
        headlineLead="Shop all"
        headlineAccent="auto body parts."
        lede="Aftermarket and OEM-comparable collision parts — bumpers, lights, fenders, mirrors, hoods, grilles and cooling. Browse the catalog, then call the desk to confirm fitment and lock in pricing."
        ctas={[
          { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Request a quote', href: '/#quote', variant: 'ghost-w' },
        ]}
      />
      <Values />
      <section className="am-section">
        <div className="am-wrap">
          <SectionHeading
            eyebrow="Quick shop"
            headline="Top categories."
            lede="The most-ordered parts on our shelf. Tap a tile to jump to the full catalog."
          />
          <div className="am-vt-grid">
            {quickTiles.map((t) => (
              <a className="am-vt" key={t.key} href="#categories">
                <span className="am-vti">
                  <CategoryIcon k={t.key} />
                </span>
                <b>{t.label}</b>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Marquee />
      <Categories />
      <section className="am-section am-section-alt">
        <div className="am-wrap">
          <SectionHeading
            eyebrow="Simple process"
            headline="How to order parts."
            lede="No checkout, no sign-up — just a quick call to a real parts specialist. Four steps and the part’s on the next truck."
          />
          <CardGrid variant={4} items={steps} />
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
