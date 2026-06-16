import { Footer } from '@/components/blocks/Footer';
import { Header } from '@/components/blocks/Header';
import { Hero } from '@/components/blocks/Hero';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero
        eyebrow="Reusable, static-first"
        title={siteConfig.name}
        description={siteConfig.description}
        primaryCta={{ label: 'Get started', href: '/contact' }}
        secondaryCta={{ label: 'Learn more', href: '/about' }}
      />
      <Footer />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
        }}
      />
    </>
  );
}
