import type { Metadata } from 'next';
import { FaqLinear } from '@/components/blocks/automart/FaqLinear';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { PageBanner } from '@/components/blocks/automart/PageBanner';
import { StillHaveQuestion } from '@/components/blocks/automart/StillHaveQuestion';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to the questions most people have about our parts, certifications, warranties, and ordering process.',
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'What are Aftermarket Parts?',
    a: 'Aftermarket parts are the parts of a vehicle available in the market and used as replacements for the original parts of a vehicle.',
  },
  {
    q: 'What is OEM?',
    a: 'Original Equipment Manufacturer (OEM) parts are those components of a vehicle that were used during its original construction and assembly by the manufacturer. These parts are not necessarily manufactured by the car builder but are used in its original assembly.',
  },
  {
    q: 'What is meant by CAPA Certified Parts?',
    a: 'The Certified Automotive Parts Association (CAPA) was established in the public interest in 1987 to set up and oversee a testing program to assure the suitability and quality of automotive replacement parts. CAPA Certification is even recognized by government regulators as an assurance of quality.',
  },
  {
    q: 'What is Partslink?',
    a: 'Partslink is a universal numbering system for the identification of aftermarket collision replacement parts. It provides a unique, universal part number for each independently reproduced replacement part as supplied by all aftermarket manufacturers and suppliers.',
  },
  {
    q: 'How do I know I am ordering the correct part?',
    a: 'We include the OEM Part Number and Partslink in our listings. The OEM part number and Partslink ensure that the part is the same as the one your dealership would use, giving you confidence that you are ordering exactly the right part for your vehicle.',
  },
  {
    q: 'What are NSF-certified parts?',
    a: 'NSF Automotive is an independent third-party certifier of automotive aftermarket parts, providing global certification services throughout the automotive supply chain. It is accredited to develop and certify to a range of automotive industry standards and is established to certify aftermarket auto parts in North America and Australia.',
  },
  {
    q: 'What is the warranty on the parts?',
    a: 'All merchandise sold by Automart is subject only to the manufacturer’s warranty and conditions, if any, and is subject to submission to the manufacturer for inspection and approval for repair or replacement of merchandise. All other accessories carry a 30-day warranty; light bulbs carry a 90-day warranty. No warranty whatsoever will be valid if the defect was caused by the customer’s abuse, negligence, or mishandling.',
  },
  {
    q: 'Do the parts come with hardware like nuts, screws, bolts and brackets?',
    a: 'Our parts do not come with any accessories or hardware. We highly recommend reusing any accessories from the old parts that are not damaged. If you do need installation hardware, your local dealership, hardware store, or auto parts store will typically have what you need.',
  },
];

export default function FaqPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageBanner
        eyebrow="Support"
        headlineLead="Frequently Asked Questions"
        lede="Here you can find answers to the questions most people have about our parts, certifications, warranties, and ordering process."
      />
      <FaqLinear eyebrow="FAQs" headline="Answers, in plain English." items={faqs} />
      <StillHaveQuestion
        eyebrow="Still have a question?"
        headline="Talk to a real parts specialist."
        lede="Our desk in Melrose Park, IL picks up on the first or second ring — 8:00 AM – 6:00 PM CST."
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
