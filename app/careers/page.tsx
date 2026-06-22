import type { Metadata } from 'next';
import { Benefits, type Benefit } from '@/components/blocks/automart/Benefits';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { Openings, type Opening } from '@/components/blocks/automart/Openings';
import { PageBanner } from '@/components/blocks/automart/PageBanner';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Careers — Build Your Career at Automart',
  description:
    'Join a 25-year-old company that’s still growing. We’re looking for driven, customer-focused people to help us serve collision shops and drivers across Chicagoland.',
};

const mailto = `mailto:${siteConfig.email}`;

const openings: Opening[] = [
  {
    title: 'Warehouse Associate',
    department: 'Operations',
    type: 'Full-time',
    location: 'Addison, IL',
    description:
      'Pick, pack, and stage orders for our twice-daily delivery fleet. Keep inventory accurate and the warehouse organized so we can ship fast every single day.',
    requirements: [
      'Ability to lift up to 75 lbs',
      'Experience in a warehouse or distribution center preferred',
      'Forklift certification a plus',
      'Reliable and punctual — early shift starts at 6 AM',
    ],
    applyHref: `${mailto}?subject=Application:%20Warehouse%20Associate`,
  },
  {
    title: 'Delivery Driver',
    department: 'Logistics',
    type: 'Full-time',
    location: 'Chicago Metro Area',
    description:
      'Drive our company fleet to deliver parts to collision shops and customers across the Chicago metro area. Twice-daily routes, company vehicle, and competitive pay.',
    requirements: [
      'Valid Illinois driver’s license with clean driving record',
      'Familiarity with Chicago metro streets and suburbs',
      'Ability to lift and carry auto parts (up to 75 lbs)',
      'DOT medical card or willingness to obtain one',
    ],
    applyHref: `${mailto}?subject=Application:%20Delivery%20Driver`,
  },
  {
    title: 'Customer Service Specialist',
    department: 'Customer Service',
    type: 'Full-time',
    location: 'Addison, IL',
    description:
      'Be the voice of Automart for our customers — resolving order issues, tracking deliveries, handling returns, and making sure every customer leaves satisfied.',
    requirements: [
      '2+ years customer service experience',
      'Calm under pressure with strong problem-solving skills',
      'Proficiency with order management or CRM systems',
      'Bilingual (English/Spanish) a plus',
    ],
    applyHref: `${mailto}?subject=Application:%20Customer%20Service%20Specialist`,
  },
  {
    title: 'Parts Sales Representative',
    department: 'Sales',
    type: 'Full-time',
    location: 'Addison, IL',
    description:
      'Handle inbound calls and quotes from collision repair shops and independent mechanics. Match customers with the right OEM-comparable parts quickly and accurately.',
    requirements: [
      'Experience in automotive parts sales or counter sales',
      'Strong phone communication skills',
      'Ability to work in a fast-paced call center environment',
      'Basic knowledge of auto body or collision parts a plus',
    ],
    applyHref: `${mailto}?subject=Application:%20Parts%20Sales%20Representative`,
  },
  {
    title: 'Counter Sales Associate',
    department: 'Sales',
    type: 'Full-time',
    location: 'Addison, IL',
    description:
      'Serve walk-in customers at our Addison counter. Help mechanics and DIY customers find the right parts, process orders, and keep the counter running smoothly.',
    requirements: [
      'Previous counter or retail sales experience',
      'Knowledge of auto parts or willingness to learn quickly',
      'Strong interpersonal skills and customer-first attitude',
      'Spanish language skills a plus',
    ],
    applyHref: `${mailto}?subject=Application:%20Counter%20Sales%20Associate`,
  },
];

const benefits: Benefit[] = [
  {
    iconKey: 'pay',
    title: 'Competitive Pay',
    desc: 'Market-rate wages plus performance bonuses for sales roles.',
  },
  {
    iconKey: 'truck',
    title: 'Company Vehicle',
    desc: 'Delivery drivers get a fully maintained company vehicle.',
  },
  {
    iconKey: 'health',
    title: 'Health Benefits',
    desc: 'Medical, dental, and vision coverage for full-time employees.',
  },
  {
    iconKey: 'growth',
    title: 'Room to Grow',
    desc: '25 years of growth — we promote from within whenever possible.',
  },
];

export default function CareersPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageBanner
        eyebrow="We’re hiring"
        headlineLead="Build Your Career at"
        headlineAccent="Automart"
        lede="Join a 25-year-old company that’s still growing. We’re looking for driven, customer-focused people to help us serve collision shops and drivers across the Chicago metro area."
        image={{
          src: '/automart/careers/careers-hero.webp',
          alt: 'Automart team supplying collision shops and drivers',
          width: 835,
          height: 520,
        }}
      />
      <Openings
        eyebrow="Now hiring"
        headline="Current Openings"
        lede={
          <>
            All positions are based at our Addison, IL headquarters or on Chicagoland delivery
            routes. Don’t see a fit? Email your résumé to{' '}
            <a className="am-success-link" href={mailto}>
              {siteConfig.email}
            </a>{' '}
            and we’ll keep it on file.
          </>
        }
        items={openings}
      />
      <Benefits
        eyebrow="Why Automart"
        headline="Benefits that come with the job."
        lede="Real benefits for real work — the kind people stay around for."
        items={benefits}
      />
      <Footer />
      <Toast />
    </div>
  );
}
