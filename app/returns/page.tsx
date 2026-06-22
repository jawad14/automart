import type { Metadata } from 'next';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { PageBanner } from '@/components/blocks/automart/PageBanner';
import { ReturnsPolicy, type PolicyCard } from '@/components/blocks/automart/ReturnsPolicy';
import { StillHaveQuestion } from '@/components/blocks/automart/StillHaveQuestion';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Returns & Warranty Policy',
  description:
    'Return and exchange policy for auto body parts at Automart Nationwide. RMA required, restocking fees, manufacturer warranty, and specific part warranty details.',
};

const cards: PolicyCard[] = [
  {
    kind: 'list',
    title: 'Return Policy',
    bullets: [
      'All returns and exchanges must be notified to and authorized by a sales representative within 15 days of delivery, for no charge or fee.',
      'Products that have been worked on cannot be returned.',
      'No returns will be accepted after 1 year of receipt.',
      'A 20% to 50% restocking fee applies to all returns after 15 days of delivery, covering shipping, handling, and processing costs.',
      'Special order items may be returned with a 25% restocking fee.',
      'The original customer’s invoice copy must accompany all walk-in returns.',
      'Parts must be in new, resalable condition and in their original packaging.',
      'Painted or otherwise altered parts are not eligible for return.',
      'All parts delivered at a discount are final sale and will not be accepted for return.',
    ],
    notes: [
      {
        label: 'Refused shipments',
        text: 'Customers who reject deliveries at the door must pay the return freight charges plus a 25% restocking fee before any future orders can be processed.',
      },
      {
        tone: 'danger',
        label: 'RMA required',
        text: 'For all deliveries, a Return Merchandise Authorization (RMA) must be requested. Contact our sales team to schedule your RMA before any parts are picked up.',
      },
    ],
  },
  {
    kind: 'list',
    title: 'Received an Incorrect Part?',
    subtitle: '(Part received is different from what was on the invoice)',
    bullets: [
      'Report any incorrect items to our team immediately upon delivery. Do not install or modify the part.',
      'We will issue an RMA for the return at no cost to you and arrange replacement delivery via the original shipping method.',
      'Replacement is contingent on receiving the incorrect part back in its original condition.',
    ],
  },
  {
    kind: 'list',
    title: 'Warranty Coverage',
    bullets: [
      'All merchandise is subject only to the manufacturer’s warranty terms and conditions.',
      'Lights, mirrors, and fans carry a 6-month warranty from the date of delivery.',
      'Defects resulting from customer abuse, negligence, or mishandling void all warranty coverage.',
      'The customer is responsible for all shipping costs associated with warranty claims.',
      'No labor costs or inconvenience claims are covered under any warranty.',
      'Automart Nationwide is not responsible for any damages caused by a product.',
      'We strongly recommend retaining original parts. Non-operational vehicles resulting from a warranty claim remain the customer’s responsibility.',
    ],
  },
  {
    kind: 'table',
    title: 'Parts Warranty Details',
    subtitle:
      'Specific warranty periods by part type. All warranties apply from the date of purchase and cover exchange or full refund.',
    head: ['Part Type', 'Covered Condition', 'Coverage Period', 'Resolution'],
    rows: [
      {
        part: 'Radiator & A/C Condenser',
        condition: 'Normal leaking without any damage',
        period: '1-Year',
        periodTone: 'red',
        action: 'Exchange or full refund from date of purchase',
      },
      {
        part: 'Radiator Fan & A/C Fan Motor',
        condition: 'Does not work or fan blade shaking',
        period: '6-Month',
        periodTone: 'dark',
        action: 'Exchange or full refund from date of purchase',
      },
      {
        part: 'All Lights & Mirror Glass',
        condition: 'Normal leaking (lights) or glass shaking (mirrors)',
        period: '6-Month',
        periodTone: 'dark',
        action: 'Exchange or full refund from date of purchase',
      },
      {
        part: 'Black & Chrome Steel Bumpers',
        condition: 'Rusted',
        period: '1-Year',
        periodTone: 'red',
        action: 'Exchange or full refund from date of purchase',
      },
    ],
  },
  {
    kind: 'steps',
    title: 'Return Merchandise Authorization (RMA) Procedure',
    subtitle:
      'The following procedures are required to return parts and are effective April 14, 2025.',
    steps: [
      'Make sure your parts are the correct ones. When receiving parts, check for damage and that the side matches the box label.',
      'Ask our driver to give you the Customer Copy and save it. You will need this to return your parts.',
      'Call our sales representatives to schedule an RMA (Return Merchandise Authorization).',
      'Part must be unaltered and undamaged, with its original packaging and in resalable form.',
      'Once the part is picked up by the driver, it will be inspected and approved by the warehouse manager.',
      'If the part is accepted for return, credit will take 24 hours to be posted to your account.',
      'If the part is not accepted for return, the part will be returned the next business day.',
      'Drivers are not allowed to pick up parts without a scheduled RMA.',
      'Drivers are not allowed to give credit for any returned parts.',
      'Credits will not be available instantly or used for exchanges while the part is being returned.',
    ],
    spanish: {
      title: 'Procedimiento de Devoluciones y Reembolsos',
      subtitle:
        'Los siguientes procedimientos son necesarios para devolver piezas, vigente a partir del 14 de abril de 2025:',
      steps: [
        {
          lead: 'Asegúrese de que las piezas sean las correctas.',
          rest: 'Al recibirlas, compruebe que no presenten daños y que el lado coincida con lo que dice la etiqueta de la caja.',
        },
        {
          lead: 'Solicite a nuestro conductor la Copia del Cliente y guárdela,',
          rest: 'la necesitará para devolver las piezas.',
        },
        {
          lead: 'Deberá llamar a nuestros representantes de ventas para programar un RMA',
          rest: '(Autorización de Devolución de Mercancía).',
        },
        {
          lead: 'La pieza debe estar intacta y sin daños,',
          rest: 'en su empaque original y en condiciones aptas para su reventa.',
        },
        {
          lead: 'Una vez que el conductor recoja la pieza,',
          rest: 'el encargado de bodega deberá inspeccionar y aprobar.',
        },
        {
          lead: 'Si se acepta la devolución,',
          rest: 'el crédito toma 24 horas para ser acreditado en su cuenta.',
        },
        {
          lead: 'Si no se acepta la devolución,',
          rest: 'se devolverá la parte el siguiente día hábil.',
        },
        { lead: 'Los conductores no pueden recoger piezas sin un RMA programado.', rest: '' },
        {
          lead: 'Los conductores no pueden autorizar el reembolso de las piezas devueltas.',
          rest: '',
        },
        {
          lead: 'Los créditos no estarán disponibles instantáneamente,',
          rest: 'ni se podrán utilizar para hacer cambios cuando se devuelva otra parte.',
        },
      ],
    },
  },
];

export default function ReturnsPage() {
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageBanner
        eyebrow="Policies"
        headlineLead="Returns & Warranty"
        lede="We stand behind every part we sell. Review our return and warranty policies below, or call a specialist if you need help with an order."
      />
      <ReturnsPolicy cards={cards} />
      <StillHaveQuestion
        eyebrow="Need help with a return?"
        headline="Talk to a parts specialist — we’ll sort it out fast."
        lede="Call or submit a request and one of our team members will walk you through the return or warranty process, usually within minutes."
        ctas={[
          { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Submit a request', href: '/#quote', variant: 'outline-w' },
        ]}
      />
      <Footer />
      <Toast />
    </div>
  );
}
