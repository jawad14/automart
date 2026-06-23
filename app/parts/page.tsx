import type { Metadata } from 'next';
import { DeliveryRules, type DeliveryRule } from '@/components/blocks/automart/DeliveryRules';
import { DeliveryStats, type DeliveryStat } from '@/components/blocks/automart/DeliveryStats';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { PageBanner } from '@/components/blocks/automart/PageBanner';
import { PartsCategories } from '@/components/blocks/automart/PartsCategories';
import { StillHaveQuestion } from '@/components/blocks/automart/StillHaveQuestion';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { siteConfig } from '@/config/site.config';
import { partCategories } from '@/lib/automart/data';

export const metadata: Metadata = {
  title: 'Shop All Auto Body Parts — OEM-Quality Collision Parts',
  description:
    'Over 8,000 SKUs in stock — bumpers, lights, fenders, mirrors, grilles, and more. Aftermarket/OEM-comparable quality at honest prices with same-day delivery across the Chicago metro.',
};

const stats: DeliveryStat[] = [
  { value: '500+', label: 'Vehicle Makes & Models' },
  { value: 'Twice a Day', label: 'Local Delivery' },
  { value: '25 Yrs', label: 'Industry Experience' },
];

const steps: DeliveryRule[] = [
  {
    title: 'Call or Request a Quote',
    body: `Reach our parts specialists at ${siteConfig.phone} or submit an online quote request. Have your vehicle year, make, model, and VIN handy.`,
  },
  {
    title: 'Get Your Price',
    body: 'We check stock and give you an honest price — guaranteed to be the best you’ll find. No hidden fees, no surprises.',
  },
  {
    title: 'Confirm & Schedule Delivery',
    body: 'Confirm your order and we’ll schedule same-day or next-day delivery to your shop or location.',
  },
  {
    title: 'Receive & Inspect',
    body: 'Our driver delivers direct to your bay. Inspect parts on arrival — any issues are resolved immediately, no hassle.',
  },
];

export default function PartsPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageBanner
        eyebrow="OEM-Quality Parts"
        headlineLead="Shop All Auto"
        headlineAccent="Body Parts"
        lede="Over 8,000 SKUs in stock — bumpers, lights, fenders, mirrors, grilles, and more. All aftermarket/OEM comparable quality at honest prices, with same-day delivery across the Chicago metro."
        ctas={[
          { label: 'Call to Order', href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Request a Quote', href: '/#quote', variant: 'ghost-w' },
        ]}
        trustItems={['Same-Day Delivery', 'Best Price Guarantee', '25 Years in Business']}
        mosaic={[
          { src: '/automart/parts-cat/fenders.webp', alt: 'Fender' },
          { src: '/automart/parts-cat/headlights.webp', alt: 'Headlight' },
          { src: '/automart/parts-cat/grilles.webp', alt: 'Grille' },
          { src: '/automart/parts-cat/mirrors.webp', alt: 'Mirror' },
          { src: '/automart/parts-cat/hoods.webp', alt: 'Hood' },
          { src: '/automart/parts-cat/corner-lights.webp', alt: 'Corner light' },
        ]}
      />
      <DeliveryStats items={stats} tone="red" />
      <PartsCategories
        eyebrow="Browse by Category"
        headline="All Parts Categories"
        lede="Can’t find what you need? Call us — our team locates hard-to-find parts daily."
        items={partCategories}
        callHref={siteConfig.phoneHref}
      />
      <DeliveryRules
        eyebrow="Simple Process"
        headline="How to Order Parts"
        items={steps}
        cols={4}
      />
      <StillHaveQuestion
        eyebrow="Ready to order?"
        headline="We have the part. Let’s get it to you today."
        lede={`Our parts specialists are standing by ${siteConfig.hours}. Same-day delivery available for orders placed before cutoff.`}
        ctas={[
          { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Request a Quote', href: '/#quote', variant: 'outline-w' },
        ]}
      />
      <Footer />
      <Toast />
    </div>
  );
}
