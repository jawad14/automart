import type { Metadata } from 'next';

export type NavItem = { label: string; href: string };

export type SocialLink = { label: string; href: string };

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  author: { name: string; url?: string };
  phone: string;
  phoneTel: string;
  phoneHref: string;
  email: string;
  hours: string;
  address: { line1: string; line2: string };
  nav: NavItem[];
  social: SocialLink[];
  providers: {
    logger: 'console' | 'pino';
    analytics: 'none' | 'plausible' | 'umami' | 'posthog' | 'ga4';
    email: 'none' | 'resend' | 'smtp' | 'web3forms' | 'formspree';
    cms: 'mdx' | 'sanity' | 'payload';
    errors: 'console' | 'sentry';
    search: 'pagefind' | 'algolia' | 'meilisearch';
  };
  features: {
    blog: boolean;
    darkMode: boolean;
    newsletter: boolean;
  };
};

export const siteConfig: SiteConfig = {
  name: 'Automart Nationwide',
  shortName: 'Automart',
  description:
    "Chicago's wholesale auto body & collision parts supplier. OEM-comparable bumpers, headlights, fenders, mirrors. Twice-daily delivery across Chicagoland.",
  url: 'https://automartnationwide.com',
  ogImage: '/opengraph-image',
  locale: 'en_US',
  author: { name: 'Automart Nationwide Inc', url: 'https://automartnationwide.com' },
  phone: '(773) 762-1000',
  phoneTel: '17737621000',
  phoneHref: 'tel:17737621000',
  email: 'info@automartnationwide.com',
  hours: 'Mon–Fri 8–6 · Sat 8–3 CST',
  address: { line1: '160–150 25th Ave', line2: 'Melrose Park, IL 60160' },
  nav: [
    { label: 'Shop All Parts', href: '#categories' },
    { label: 'Automotive Paints', href: '#categories' },
    { label: 'Same-Day Delivery', href: '#shops' },
    { label: 'Returns & Warranty', href: '#quote' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Careers', href: '#account' },
  ],
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
  providers: {
    logger: 'console',
    analytics: 'none',
    email: 'none',
    cms: 'mdx',
    errors: 'console',
    search: 'pagefind',
  },
  features: {
    blog: false,
    darkMode: false,
    newsletter: false,
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Automart Nationwide — Wholesale Collision Parts · Chicago',
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};
