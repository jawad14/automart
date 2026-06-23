import type { Metadata } from 'next';

export type NavItem = { label: string; href: string };

export type SocialLink = { label: string; href: string };

export type ButtonVariant = 'red' | 'dark' | 'yellow' | 'ghost' | 'outline-w' | 'ghost-w';

export type Cta = { label: string; href: string; variant: ButtonVariant };

export type ValueIconKey = 'shield' | 'truck' | 'headset' | 'badge';

export type ContentConfig = {
  topbar: {
    flagLabel: string;
    deliveryLabel: string;
    accountLabel: string;
    accountHref: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    lede: string;
    ctas: Cta[];
    stats: { value: string; label: string }[];
    photoCaption: string;
  };
  values: { iconKey: ValueIconKey; title: string; desc: string }[];
  categoriesHead: {
    eyebrow: string;
    headline: string;
    lede: string;
    ctas: Cta[];
  };
  splitCta: {
    variant: 'shops' | 'drivers';
    tag: string;
    headline: string;
    body: string;
    ctas: Cta[];
  }[];
  vehicleTypesHead: {
    eyebrow: string;
    headline: string;
  };
  why: {
    eyebrow: string;
    headline: string;
    lede: string;
    ctas: Cta[];
    reasons: { title: string; body: string }[];
  };
  reviewsHead: {
    eyebrow: string;
    headline: string;
    seeAllLabel: string;
    seeAllHref: string;
  };
  quote: {
    eyebrow: string;
    headline: string;
    lede: string;
    badges: string[];
    callLabel: string;
    callHoursLine: string;
    formNote: string;
    successHeadline: string;
    successBody: string;
  };
  footer: {
    brandTagline: string;
    columns: { title: string; links: NavItem[] }[];
    chips: string[];
    legalTagline: string;
  };
};

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
  brand: {
    logoLight: string;
    logoDark: string;
    logoWidth: number;
    logoHeight: number;
  };
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
  content: ContentConfig;
};

const phone = '(630) 812-2888';
const phoneHref = 'tel:16308122888';

export const siteConfig: SiteConfig = {
  name: 'Automart',
  shortName: 'Automart',
  description:
    "Chicago's wholesale auto body & collision parts supplier. OEM-comparable bumpers, headlights, fenders, mirrors. Same-day delivery across Chicagoland.",
  url: 'https://www.automartparts.com',
  ogImage: '/opengraph-image',
  locale: 'en_US',
  author: { name: 'Automart - Auto Body Supply', url: 'https://www.automartparts.com' },
  phone,
  phoneTel: '16308122888',
  phoneHref,
  email: 'info@automartparts.com',
  hours: '8:00 AM – 6:00 PM CST',
  address: { line1: '160 25th Ave', line2: 'Melrose Park, IL 60160' },
  brand: {
    logoLight: '/automart/automart-white.png',
    logoDark: '/automart/automart-red.png',
    logoWidth: 420,
    logoHeight: 98,
  },
  nav: [
    { label: 'Shop All Parts', href: '/parts' },
    { label: 'Automotive Paints', href: '/paints' },
    { label: 'Returns & Warranty', href: '/returns' },
    { label: 'Same-Day Delivery', href: '/delivery' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Careers', href: '/careers' },
    { label: 'Register Account', href: '/register' },
  ],
  social: [],
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
  content: {
    topbar: {
      flagLabel: '★ 25 years supplying collision parts',
      deliveryLabel: 'Twice-daily local delivery',
      accountLabel: 'Register account',
      accountHref: '/register',
    },
    hero: {
      eyebrow: 'Built on Trust. Driven by Value.',
      headline: 'Collision parts that fit right the',
      headlineAccent: 'first time.',
      lede: 'Aftermarket & OEM-comparable bumpers, headlights, fenders and body parts at the best prices in the industry — backed by our own twice-daily delivery fleet and a real parts specialist on every call.',
      ctas: [
        { label: `Call to order — ${phone}`, href: phoneHref, variant: 'yellow' },
        { label: 'Request a free quote', href: '#quote', variant: 'outline-w' },
      ],
      stats: [
        { value: '25 yrs', label: 'Serving the industry' },
        { value: 'Twice daily', label: 'Local delivery' },
        { value: '120,000+', label: 'Parts in stock' },
      ],
      photoCaption: 'Drop a collision-parts hero photo (bumpers, headlights, fenders)',
    },
    values: [
      {
        iconKey: 'shield',
        title: 'Best price, guaranteed',
        desc: "We beat any competitor's written quote.",
      },
      {
        iconKey: 'truck',
        title: 'Delivered twice daily',
        desc: 'Our own fleet, our own drivers.',
      },
      {
        iconKey: 'headset',
        title: 'Largest call center',
        desc: 'A real parts pro on every call.',
      },
      {
        iconKey: 'badge',
        title: '25 years of trust',
        desc: 'Family-run since 2001.',
      },
    ],
    categoriesHead: {
      eyebrow: 'Shop by category',
      headline: "The body shop's catalog — without the markup.",
      lede: 'From front bumpers to heating & cooling, we stock the high-turn collision parts your shop needs — all priced for the long haul.',
      ctas: [
        { label: 'Call to order', href: phoneHref, variant: 'red' },
        { label: 'Request a quote', href: '#quote', variant: 'ghost' },
      ],
    },
    splitCta: [
      {
        variant: 'shops',
        tag: 'For collision shops',
        headline: "Order by phone. We'll be there in an hour.",
        body: 'Across Chicagoland and the surrounding metro, our own trucks run all day — so the parts you need to finish a job today get there today.',
        ctas: [
          { label: 'Call our shop desk', href: phoneHref, variant: 'yellow' },
          { label: 'See delivery zones', href: '#quote', variant: 'ghost-w' },
        ],
      },
      {
        variant: 'drivers',
        tag: 'For drivers',
        headline: "Skip the dealer. We'll quote you the best price.",
        body: "Tell us your year, make, model and what's damaged. A real parts specialist will quote you in minutes — and beat the dealer's price.",
        ctas: [
          { label: 'Get a price', href: phoneHref, variant: 'yellow' },
          { label: 'Request a quote online', href: '#quote', variant: 'ghost-w' },
        ],
      },
    ],
    vehicleTypesHead: {
      eyebrow: 'Shop by vehicle type',
      headline: 'Find parts faster.',
    },
    why: {
      eyebrow: 'Why Automart',
      headline: 'Professional quality without the markup.',
      lede: "For 25 years we've supplied collision repair shops, mechanics and drivers across the US with parts that fit, arrive fast, and don't cost dealer money. No online checkout, no sign-ups — just a call to a real parts pro and the right part at your door.",
      ctas: [
        { label: `Call ${phone}`, href: phoneHref, variant: 'red' },
        { label: 'About Automart', href: '#quote', variant: 'outline-w' },
      ],
      reasons: [
        {
          title: '25 years of trust',
          body: 'Family-run since 2001. Generations of body shops have built their work on Automart parts.',
        },
        {
          title: 'Twice-daily delivery',
          body: 'Our own fleet of trucks and drivers across Chicagoland — two routes a day so parts arrive when you need them.',
        },
        {
          title: 'Best price, guaranteed',
          body: "Show us a lower written quote on a comparable part and we'll beat it. Same fair price every time.",
        },
        {
          title: 'Largest call center',
          body: 'Dozens of US-based parts specialists answering the phone — personalised service on every order, no scripts.',
        },
      ],
    },
    reviewsHead: {
      eyebrow: 'Trusted by 14,000+ shops & drivers',
      headline: 'What customers are saying.',
      seeAllLabel: 'Read all reviews',
      seeAllHref: '#',
    },
    quote: {
      eyebrow: 'Request a quote',
      headline: "Tell us the vehicle & the damage. We'll quote your best price.",
      lede: "No checkout, no sign-up. Send us the year, make, model and what you're looking for — a real specialist will text or call back, usually within minutes.",
      badges: ['Price-match guarantee', 'Twice-daily delivery', 'Real specialists, no scripts'],
      callLabel: 'Or call us directly',
      callHoursLine: 'Mon–Fri 8 AM – 6 PM CST · Sat 8 – 3',
      formNote: "We'll only use your info to respond to this request. No spam, ever.",
      successHeadline: 'Thanks — request received.',
      successBody:
        'A real parts specialist will text or call you back, usually within minutes. Need it now? Call',
    },
    footer: {
      brandTagline:
        'Automart — House of Aftermarket Auto Parts. Supplying collision repair shops, mechanics and drivers with aftermarket / OEM-comparable quality parts at honest prices, backed by our own delivery fleet and the industry’s largest call center.',
      columns: [
        {
          title: 'Shop',
          links: [
            { label: 'Bumpers', href: '/parts' },
            { label: 'Headlights & Tail Lights', href: '/parts' },
            { label: 'Fenders', href: '/parts' },
            { label: 'Mirrors', href: '/parts' },
            { label: 'Grilles', href: '/parts' },
            { label: 'Hoods & Panels', href: '/parts' },
            { label: 'Automotive Paints', href: '/paints' },
          ],
        },
        {
          title: 'How we work',
          links: [
            { label: 'Call to order', href: phoneHref },
            { label: 'Request a quote', href: '/#quote' },
            { label: 'Same-day delivery', href: '/delivery' },
            { label: 'Best price guarantee', href: '/#why' },
            { label: 'Returns & warranty', href: '/returns' },
            { label: 'Visit our counter', href: '/delivery' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'Our story', href: '/#why' },
            { label: 'Service area', href: '/delivery' },
            { label: 'Wholesale accounts', href: '/register' },
            { label: 'Careers', href: '/careers' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Reviews', href: '/#reviews' },
          ],
        },
      ],
      chips: ['EST. 2001', '25 YRS', 'TWICE A DAY', 'BEST PRICE'],
      legalTagline: 'Built on Trust. Driven by Value.',
    },
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Automart — Auto Body Supply · Melrose Park, IL',
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
