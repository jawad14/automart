import type { Metadata } from 'next';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { PageHero } from '@/components/blocks/automart/PageHero';
import { Register } from '@/components/blocks/automart/Register';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { Values } from '@/components/blocks/automart/Values';
import { WhyList } from '@/components/blocks/automart/WhyList';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Register a Business Account',
  description:
    'Open a wholesale account with Automart Nationwide. Net-30 terms, dedicated specialists, account pricing on every order.',
};

const perks = [
  {
    n: 1,
    title: 'Account pricing',
    body: 'Tiered shop pricing on every SKU — lower the more you order, no quote required.',
  },
  {
    n: 2,
    title: 'Net-30 terms',
    body: 'Standard terms for shops in good standing after the first 30 days. Higher limits available on request.',
  },
  {
    n: 3,
    title: 'Dedicated specialist',
    body: 'You get a single point of contact who knows your account, your trucks, and your typical orders.',
  },
  {
    n: 4,
    title: 'Priority dispatch',
    body: 'Account orders go on the next truck out — no holding for batch loads.',
  },
];

export default function RegisterPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageHero
        crumb="Register Account"
        eyebrow="Net-30 terms · Account pricing"
        headlineLead="Open a"
        headlineAccent="wholesale account."
        lede="Built for collision shops, mechanics and refinishers. Net-30 terms, account pricing, and a dedicated specialist who knows your shop. Fill out the form and we’ll get back to you within one business day."
        ctas={[
          { label: 'Start application', href: '#register-form', variant: 'yellow' },
          { label: `Or call ${siteConfig.phone}`, href: siteConfig.phoneHref, variant: 'ghost-w' },
        ]}
      />
      <Values />
      <WhyList
        eyebrow="Account perks"
        headline="What you get when you open an account."
        lede="Built for collision shops, mechanics and refinishers — net-30 terms, account pricing, and someone who knows your shop."
        ctas={[
          { label: 'Start application', href: '#register-form', variant: 'red' },
          {
            label: `Or call ${siteConfig.phone}`,
            href: siteConfig.phoneHref,
            variant: 'outline-w',
          },
        ]}
        reasons={perks}
      />
      <Register />
      <Footer />
      <Toast />
    </div>
  );
}
