import type { Metadata } from 'next';
import { Footer } from '@/components/blocks/automart/Footer';
import { FaqList } from '@/components/blocks/automart/FaqList';
import { Header } from '@/components/blocks/automart/Header';
import { Marquee } from '@/components/blocks/automart/Marquee';
import { PageHero } from '@/components/blocks/automart/PageHero';
import { Quote } from '@/components/blocks/automart/Quote';
import { Reviews } from '@/components/blocks/automart/Reviews';
import { SplitCta } from '@/components/blocks/automart/SplitCta';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { Values } from '@/components/blocks/automart/Values';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Pricing, fitment, delivery windows, paint matching, account setup — the questions shops and drivers ask us most, answered straight.',
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'How do I order? Is there an online checkout?',
    a: 'No checkout, no sign-up. Call the desk on (630) 628-1888 and a real specialist will confirm fitment, lock in pricing, and queue the part for the next delivery run. You can also request a quote online and we’ll text or call back, usually within minutes.',
  },
  {
    q: 'Do you really match prices?',
    a: 'Yes — show us a written quote for a comparable part from any legitimate supplier and we’ll beat it. Same fair price every time, no haggling on subsequent orders.',
  },
  {
    q: 'Are your parts OEM?',
    a: 'We carry both aftermarket and OEM-comparable parts. Quality lines are selected to bolt up and finish like factory, and we’ll always tell you what you’re getting before you commit.',
  },
  {
    q: 'How fast can I get a part?',
    a: 'In zone (Chicagoland and surrounding metros), most orders go out on the same day’s morning or afternoon run. Outside the zone we ship next-day freight with shop-friendly LTL rates.',
  },
  {
    q: 'Can I open a wholesale account?',
    a: 'Yes. Shop accounts get net-30 terms, dedicated specialists, and account pricing on every order. Start at /register or call the desk and we’ll set you up.',
  },
  {
    q: 'What if the part doesn’t fit?',
    a: 'If the part doesn’t bolt up to the year/make/model on the invoice, we cover return shipping and dispatch a replacement on the next delivery run.',
  },
  {
    q: 'Do you mix paint to a specific color code?',
    a: 'Yes — bring the VIN, the panel, or the OEM code and the paint desk will camera-match and mix in-house while you wait.',
  },
  {
    q: 'What are your hours?',
    a: 'Mon–Fri 8 AM – 6 PM and Sat 8 AM – 3 PM CST. The phone is the fastest path; the counter in Addison is open the same hours.',
  },
];

export default function FaqPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageHero
        crumb="FAQs"
        eyebrow="Straight answers, no script"
        headlineLead="Questions we answer"
        headlineAccent="every day."
        lede="Don’t see what you’re looking for? Call the desk — a real specialist picks up, usually in under a minute."
        ctas={[
          { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Ask in writing', href: '/#quote', variant: 'ghost-w' },
        ]}
      />
      <Values />
      <Marquee />
      <FaqList
        eyebrow="FAQs"
        headline="Pricing, fitment, delivery, returns."
        lede="Tap a question to expand the answer."
        items={faqs}
      />
      <SplitCta />
      <Reviews />
      <Quote />
      <Footer />
      <Toast />
    </div>
  );
}
