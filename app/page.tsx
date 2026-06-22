import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { Hero } from '@/components/blocks/automart/Hero';
import { Marquee } from '@/components/blocks/automart/Marquee';
import { PartsCategories } from '@/components/blocks/automart/PartsCategories';
import { Quote } from '@/components/blocks/automart/Quote';
import { Reviews } from '@/components/blocks/automart/Reviews';
import { SplitCta } from '@/components/blocks/automart/SplitCta';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { Values } from '@/components/blocks/automart/Values';
import { VehicleTypes } from '@/components/blocks/automart/VehicleTypes';
import { Why } from '@/components/blocks/automart/Why';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';
import { partCategories } from '@/lib/automart/data';

export default function HomePage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <Hero />
      <Values />
      <Marquee />
      <PartsCategories
        eyebrow={siteConfig.content.categoriesHead.eyebrow}
        headline={siteConfig.content.categoriesHead.headline}
        lede={siteConfig.content.categoriesHead.lede}
        items={partCategories}
        callHref={siteConfig.phoneHref}
      />
      <SplitCta />
      <VehicleTypes />
      <Why />
      <Reviews />
      <Quote />
      <Footer />
      <Toast />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AutoPartsStore',
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          telephone: `+1${siteConfig.phoneTel.slice(1)}`,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.line1,
            addressLocality: 'Melrose Park',
            addressRegion: 'IL',
            postalCode: '60160',
            addressCountry: 'US',
          },
        }}
      />
    </div>
  );
}
