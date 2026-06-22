import type { Metadata } from 'next';
import {
  DeliveryRegional,
  type RegionalCoverage,
} from '@/components/blocks/automart/DeliveryRegional';
import { DeliveryRules, type DeliveryRule } from '@/components/blocks/automart/DeliveryRules';
import { DeliveryStats, type DeliveryStat } from '@/components/blocks/automart/DeliveryStats';
import { DeliveryZones, type DeliveryZone } from '@/components/blocks/automart/DeliveryZones';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { PageBanner } from '@/components/blocks/automart/PageBanner';
import { StillHaveQuestion } from '@/components/blocks/automart/StillHaveQuestion';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Same-Day Parts Delivery — Our Own Fleet Across Chicagoland',
  description:
    'Our own branded delivery fleet runs twice-daily routes across the Chicago metro and into surrounding states. Same-day delivery to local shops, no third-party carriers.',
};

const stats: DeliveryStat[] = [
  { value: '2× Daily', label: 'Local delivery runs' },
  { value: 'Same Day', label: 'Metro-area orders' },
  { value: '5 States', label: 'Regional coverage' },
  { value: '25 Yrs', label: 'Serving the industry' },
];

const zones: DeliveryZone[] = [
  {
    label: 'Zone 1 — Immediate Local',
    cadence: 'Twice Daily',
    cutoff: 'AM: 8:30 · PM: 12:30',
    accent: 'var(--am-red)',
    areas: [
      'Melrose Park',
      'Franklin Park',
      'River Grove',
      'Elmwood Park',
      'Northlake',
      'Stone Park',
      'Bellwood',
      'Hillside',
      'Berkeley',
      'Maywood',
      'Broadview',
      'Westchester',
    ],
  },
  {
    label: 'Zone 2 — Chicago & Inner Suburbs',
    cadence: 'Twice Daily',
    cutoff: 'AM: 8:30 · PM: 12:30',
    accent: '#0d4faf',
    areas: [
      'Chicago (all neighborhoods)',
      'Oak Park',
      'Berwyn',
      'Cicero',
      'Evanston',
      'Skokie',
      'Lincolnwood',
      'Niles',
      'Rosemont',
      'Schiller Park',
      'Des Plaines',
    ],
  },
  {
    label: 'Zone 3 — Extended Metro',
    cadence: 'Same Day',
    cutoff: 'Order by 8:45 AM',
    accent: '#0ea5e9',
    areas: [
      'Palatine',
      'Arlington Heights',
      'Schaumburg',
      'Elgin',
      'Aurora',
      'Naperville',
      'Bolingbrook',
      'Joliet',
      'Orland Park',
      'Tinley Park',
      'Homewood',
      'Harvey',
      'Calumet City',
      'Bensenville',
      'Wood Dale',
      'Addison',
    ],
  },
];

const regional: RegionalCoverage[] = [
  {
    state: 'Illinois',
    coverage: 'Chicago & Surrounding Suburbs',
    time: 'Twice a Day',
    cities: [
      'Chicago',
      'Melrose Park',
      'Oak Park',
      'Evanston',
      'Skokie',
      'Cicero',
      'Berwyn',
      'Wilmette',
      'Niles',
      'Schiller Park',
    ],
  },
  {
    state: 'Indiana',
    coverage: 'Northwest & Central IN',
    time: 'Same Day / Next Day',
    cities: [
      'Whiting',
      'East Chicago',
      'Hammond',
      'Gary',
      'Dyer',
      'Highland',
      'Griffith',
      'Schererville',
      'Merrillville',
    ],
  },
  {
    state: 'Wisconsin',
    coverage: 'Southeast WI',
    time: 'Next Business Day',
    cities: [
      'Kenosha',
      'Racine',
      'Elkhorn',
      'Milwaukee',
      'Waukesha',
      'Cudahy',
      'Brookfield',
      'Franklin',
      'Big Bend',
    ],
  },
  {
    state: 'Iowa',
    coverage: 'Eastern IA',
    time: '1–2 Business Days',
    cities: [
      'Silvis',
      'Moline',
      'Davenport',
      'Muscatine',
      'West Liberty',
      'Iowa City',
      'Cedar Rapids',
      'Des Moines',
      'Marshalltown',
      'Perry',
      'Adel',
      'Polk City',
      'Urbandale',
      'Indianola',
      'Newton',
    ],
  },
  {
    state: 'Indiana (Extended)',
    coverage: 'Central & South IN',
    time: '1 Business Day',
    cities: [
      'South Bend',
      'Elkhart',
      'Lafayette',
      'Frankfort',
      'Lebanon',
      'Indianapolis',
      'Carmel',
      'Fishers',
      'Lawrence',
      'Beech Grove',
      'Greenwood',
      'Plainfield',
      'Brownsburg',
      'Avon',
      'Valparaiso',
      'Michigan City',
      'La Porte',
      'Knox',
      'Plymouth',
    ],
  },
  {
    state: 'Illinois (South)',
    coverage: 'Central & South IL',
    time: 'Mon & Thu — Twice a Week',
    cities: [
      'Pontiac',
      'Peoria',
      'Morton',
      'Bloomington',
      'Farmer City',
      'Champaign',
      'Urbana',
      'Rantoul',
      'Paxton',
      'Chatsworth',
      'Onarga',
      'Kankakee',
      'Monee',
      'Rankin',
    ],
  },
];

const rules: DeliveryRule[] = [
  {
    title: 'Order Cutoff Times',
    body: 'Zone 1 and Zone 2 run twice daily — AM route cutoff is 8:30 AM, PM route cutoff is 12:30 PM. Zone 3 same-day cutoff is 8:45 AM. Orders placed after cutoff are scheduled for the next available route.',
  },
  {
    title: 'Signature & Receiving',
    body: 'A signature is required upon delivery for all orders over $500. Please ensure someone is available to receive and inspect parts at the time of delivery. Damages must be reported immediately.',
  },
  {
    title: 'Refused or Missed Deliveries',
    body: 'Refused deliveries are subject to a 25% restocking fee plus return freight charges. If our driver cannot reach you, we will call ahead — a second attempt may incur a redelivery fee.',
  },
  {
    title: 'Scheduling & Route Changes',
    body: 'Need to schedule a specific delivery window? Call our dispatch team by 9:00 AM and we will do our best to accommodate. Route changes after dispatch may not always be possible.',
  },
  {
    title: 'Damaged or Incorrect Parts',
    body: 'Inspect all parts before signing. Report damage or incorrect items immediately — do not install or modify the part. We will issue an RMA and arrange a replacement at no cost to you.',
  },
];

export default function DeliveryPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageBanner
        eyebrow="Our Fleet"
        headlineLead="Fast, Reliable Parts"
        headlineAccent="Delivery"
        lede="Our own branded delivery fleet runs daily routes across the Chicago metro area and into surrounding states. Same-day delivery to local shops — no third-party carriers, no excuses."
        image={{
          src: '/automart/delivery-truck.webp',
          alt: 'Automart delivery truck',
          width: 835,
          height: 520,
        }}
      />
      <DeliveryStats items={stats} />
      <DeliveryZones
        eyebrow="Chicago Metro"
        headline="Local Delivery Zones & Times"
        lede="We run multiple routes daily. The earlier you order, the faster we deliver."
        items={zones}
      />
      <DeliveryRegional
        eyebrow="Beyond Illinois"
        headline="Regional State Coverage"
        lede="We ship to 5 surrounding states. Call to confirm coverage for your specific location."
        items={regional}
      />
      <DeliveryRules eyebrow="Policies" headline="Delivery Rules & Policies" items={rules} />
      <StillHaveQuestion
        eyebrow="Ready to order?"
        headline="Call now and we’ll dispatch today."
        lede="Our dispatch team is standing by. Tell us what you need and your location — we’ll confirm your delivery window on the spot."
        ctas={[
          { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Request a quote', href: '/#quote', variant: 'outline-w' },
        ]}
      />
      <Footer />
      <Toast />
    </div>
  );
}
