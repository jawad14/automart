import type { Metadata } from 'next';
import { DeliveryRules, type DeliveryRule } from '@/components/blocks/automart/DeliveryRules';
import { DeliveryStats, type DeliveryStat } from '@/components/blocks/automart/DeliveryStats';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { PageBanner } from '@/components/blocks/automart/PageBanner';
import { PartsCategories, type PartCategory } from '@/components/blocks/automart/PartsCategories';
import { StillHaveQuestion } from '@/components/blocks/automart/StillHaveQuestion';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { siteConfig } from '@/config/site.config';

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

const categories: PartCategory[] = [
  {
    slug: 'bumpers',
    name: 'Bumpers & Bumper Covers',
    description: 'Front & rear bumper covers, reinforcements, absorbers, and complete assemblies.',
    skuBadge: '1,200+ SKUs',
    image: { src: '/automart/parts-cat/bumper.webp', alt: 'Bumpers and bumper covers' },
  },
  {
    slug: 'headlights',
    name: 'Headlights & Tail Lights',
    description: 'OEM-spec headlight assemblies, tail lamp units, and replacement lenses.',
    skuBadge: '900+ SKUs',
    image: { src: '/automart/parts-cat/headlights.webp', alt: 'Headlights and tail lights' },
  },
  {
    slug: 'corner-lights',
    name: 'Corner & Parking Lights',
    description: 'Corner lights, side markers, and parking lamp assemblies for all makes.',
    skuBadge: '400+ SKUs',
    image: { src: '/automart/parts-cat/corner-lights.webp', alt: 'Corner and parking lights' },
  },
  {
    slug: 'fog-lights',
    name: 'Fog Lights',
    description: 'Direct-fit fog lamp assemblies and housings.',
    skuBadge: '350+ SKUs',
    image: { src: '/automart/parts-cat/fog-light.webp', alt: 'Fog lights' },
  },
  {
    slug: 'hoods',
    name: 'Hoods & Panels',
    description: 'Replacement hoods, bonnet panels, cowl panels, and hood hinges.',
    skuBadge: '600+ SKUs',
    image: { src: '/automart/parts-cat/front-bonnet.webp', alt: 'Hoods and front panels' },
  },
  {
    slug: 'grilles',
    name: 'Grilles & Grille Guards',
    description: 'Upper & lower grilles, grille inserts, and overlay kits.',
    skuBadge: '500+ SKUs',
    image: { src: '/automart/parts-cat/grill.webp', alt: 'Grilles and grille guards' },
  },
  {
    slug: 'mirrors',
    name: 'Mirrors',
    description: 'Power, manual, heated, and tow mirrors for cars and trucks.',
    skuBadge: '700+ SKUs',
    image: { src: '/automart/parts-cat/side-mirror.webp', alt: 'Side mirrors' },
  },
  {
    slug: 'splash-guards',
    name: 'Splash Guards & Shields',
    description: 'Mud flaps, splash shields, fender liners, and wheel well covers.',
    skuBadge: '300+ SKUs',
    image: { src: '/automart/parts-cat/splash-shield.webp', alt: 'Splash guards and shields' },
  },
  {
    slug: 'ac-condensers',
    name: 'A/C Condensers',
    description: 'Direct-fit A/C condensers and receiver-drier units.',
    skuBadge: '280+ SKUs',
    image: { src: '/automart/parts-cat/ac-condenser.webp', alt: 'A/C condensers' },
  },
  {
    slug: 'fans',
    name: 'Radiator & Condenser Fans',
    description: 'Radiator condenser fan assemblies and individual fan motors.',
    skuBadge: '200+ SKUs',
    image: {
      src: '/automart/parts-cat/condenser-fan.webp',
      alt: 'Radiator and condenser fans',
    },
  },
  {
    slug: 'radiators',
    name: 'Radiators & Cooling',
    description: 'Radiators, heater cores, coolant overflow tanks, and thermostat housings.',
    skuBadge: '380+ SKUs',
    image: { src: '/automart/parts-cat/radiator-cooling.webp', alt: 'Radiators and cooling' },
  },
  {
    slug: 'fenders',
    name: 'Fenders',
    description: 'Front fenders, quarter panels, and inner fender liners for all makes.',
    skuBadge: '550+ SKUs',
    image: { src: '/automart/parts-cat/handles.webp', alt: 'Fenders' },
  },
  {
    slug: 'doors',
    name: 'Doors & Related',
    description: 'Door shells, door skins, hinges, and door weatherstripping.',
    skuBadge: '420+ SKUs',
    image: { src: '/automart/parts-cat/door.webp', alt: 'Doors and door hardware' },
  },
  {
    slug: 'trunks',
    name: 'Trunk Lids & Tailgates',
    description: 'Trunk lids, deck lids, tailgates, and liftgate assemblies.',
    skuBadge: '310+ SKUs',
    image: { src: '/automart/parts-cat/trunk.webp', alt: 'Trunk lids and tailgates' },
  },
  {
    slug: 'inner-structure',
    name: 'Inner Structure',
    description: 'Radiator core supports, strut towers, sub-frames, and unibody parts.',
    skuBadge: '240+ SKUs',
    image: { src: '/automart/parts-cat/inner-structure.webp', alt: 'Inner body structure' },
  },
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
          { src: '/automart/parts-cat/bumper.webp', alt: 'Bumper' },
          { src: '/automart/parts-cat/headlights.webp', alt: 'Headlight' },
          { src: '/automart/parts-cat/grill.webp', alt: 'Grille' },
          { src: '/automart/parts-cat/side-mirror.webp', alt: 'Mirror' },
          { src: '/automart/parts-cat/front-bonnet.webp', alt: 'Hood' },
          { src: '/automart/parts-cat/corner-lights.webp', alt: 'Corner light' },
        ]}
      />
      <DeliveryStats items={stats} tone="red" />
      <PartsCategories
        eyebrow="Browse by Category"
        headline="All Parts Categories"
        lede="Can’t find what you need? Call us — our team locates hard-to-find parts daily."
        items={categories}
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
