import type { Metadata } from 'next';
import { Footer } from '@/components/blocks/automart/Footer';
import { Header } from '@/components/blocks/automart/Header';
import { PageBanner } from '@/components/blocks/automart/PageBanner';
import { PaintBrands } from '@/components/blocks/automart/PaintBrands';
import { PaintCategories, type PaintCategory } from '@/components/blocks/automart/PaintCategories';
import { PaintProcess, type PaintStep } from '@/components/blocks/automart/PaintProcess';
import { StillHaveQuestion } from '@/components/blocks/automart/StillHaveQuestion';
import { Toast } from '@/components/blocks/automart/Toast';
import { TopBar } from '@/components/blocks/automart/TopBar';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Automotive Paints & Supplies',
  description:
    'Everything your shop needs to go from bare metal to showroom shine — paint, primer, clear coat, body filler, abrasives, masking, and more. 15+ categories in stock with same-day delivery to the Chicago metro area.',
};

const categories: PaintCategory[] = [
  {
    slug: 'paint',
    title: 'Paint',
    icon: '🎨',
    description:
      'Basecoats, solid colors, and OEM-matched paint for collision repairs. Available in waterborne and solvent-based formulas for every spray system.',
    tags: ['Basecoat', 'Solid Color', 'OEM Match', 'Waterborne', 'Solvent'],
    image: { src: '/automart/paints/paint.webp', alt: 'Automotive paint' },
  },
  {
    slug: 'clear',
    title: 'Clear Coat',
    icon: '✨',
    description:
      'High-gloss clear coats that protect your finish and deliver showroom shine. Choose from standard, high-build, and fast-dry formulas.',
    tags: ['High-Gloss', 'UV Protection', 'Fast Dry', 'High-Build'],
    image: { src: '/automart/paints/clear.webp', alt: 'Clear coat' },
  },
  {
    slug: 'primer',
    title: 'Primer',
    icon: '🪣',
    description:
      'Epoxy, urethane, and self-etching primers for superior adhesion and corrosion resistance on bare metal, plastic, and repaired substrates.',
    tags: ['Epoxy', 'Urethane', 'Self-Etching', 'High-Build', 'Sealer'],
    image: { src: '/automart/paints/primer.webp', alt: 'Primer' },
  },
  {
    slug: 'thinners',
    title: 'Thinners & Reducers',
    icon: '🧪',
    description:
      'Slow, medium, and fast reducers to dial in viscosity and dry time for any shop environment. Compatible with all major paint systems.',
    tags: ['Slow', 'Medium', 'Fast', 'Temperature-Rated'],
    image: { src: '/automart/paints/reduct.webp', alt: 'Thinners and reducers' },
  },
  {
    slug: 'additives',
    title: 'Additives & Cleaners',
    icon: '🧴',
    description:
      'Wax and grease removers, fisheye eliminators, flex additives, and hardeners to prep surfaces and perfect your paint chemistry.',
    tags: ['Wax Remover', 'Fisheye Eliminator', 'Flex Additive', 'Hardener'],
    image: { src: '/automart/paints/additives.webp', alt: 'Additives and cleaners' },
  },
  {
    slug: 'repair',
    title: 'Body Repair & Fillers',
    icon: '🔧',
    description:
      'Premium body filler, spot putty, and glazing compound for achieving a perfectly smooth substrate before primer and paint.',
    tags: ['Body Filler', 'Spot Putty', 'Glazing Compound', 'Lightweight Filler'],
    image: { src: '/automart/paints/repair.webp', alt: 'Body filler and repair' },
  },
  {
    slug: 'adhesives',
    title: 'Adhesives & Sealants',
    icon: '🩹',
    description:
      'Panel bond adhesive, seam sealer, and urethane windshield adhesive for structural repairs and waterproof joints.',
    tags: ['Panel Bond', 'Seam Sealer', 'Urethane', 'Structural'],
    image: { src: '/automart/paints/adhesives.webp', alt: 'Adhesives and sealants' },
  },
  {
    slug: 'sandpaper',
    title: 'Sandpaper & Abrasives',
    icon: '🔴',
    description:
      'Dry and wet-sand abrasives from 40 to 3000 grit for every stage — stripping, block sanding, scuffing, and final color sanding.',
    tags: ['40–80 Grit', '150–320 Grit', '400–800 Grit', '1000–3000 Grit'],
    image: { src: '/automart/paints/sandpaper.webp', alt: 'Sandpaper and abrasives' },
  },
  {
    slug: 'masking',
    title: 'Masking Products',
    icon: '🎭',
    description:
      'Fine-line masking tape, automotive masking paper, plastic sheeting, and pre-taped covers to protect every surface during paint.',
    tags: ['Fine-Line Tape', 'Masking Paper', 'Plastic Sheeting', 'Pre-Taped'],
    image: { src: '/automart/paints/masking.webp', alt: 'Masking products' },
  },
  {
    slug: 'spray',
    title: 'Spray Products',
    icon: '💨',
    description:
      'Aerosol sprays for touch-ups, underbody protection, and quick repairs — ready-to-spray with no gun required.',
    tags: ['Touch-Up', 'Aerosol', 'Ready-to-Spray', 'Underbody'],
    image: { src: '/automart/paints/spray.webp', alt: 'Aerosol spray products' },
  },
  {
    slug: 'toners',
    title: 'Toners',
    icon: '🎯',
    description:
      'Intermix toners for custom color blending and OEM color matching. Compatible with waterborne and solvent mixing systems.',
    tags: ['Intermix', 'Waterborne', 'Solvent', 'Custom Match'],
    image: { src: '/automart/paints/toners.webp', alt: 'Toners for color matching' },
  },
  {
    slug: 'undercoating',
    title: 'Undercoating',
    icon: '🛡️',
    description:
      'Rubberized and asphalt-based undercoating for rust prevention, sound deadening, and underbody protection on any vehicle.',
    tags: ['Rubberized', 'Asphalt', 'Sound Deadening', 'Rust Prevention'],
    image: { src: '/automart/paints/undercoating.webp', alt: 'Undercoating' },
  },
  {
    slug: 'detail',
    title: 'Detail Products',
    icon: '🪄',
    description:
      'Compound, polish, wax, clay bars, and interior dressings to finish and protect repaired vehicles before delivery.',
    tags: ['Compound', 'Polish', 'Wax', 'Clay Bar', 'Interior'],
    image: { src: '/automart/paints/detail.webp', alt: 'Detail and finishing products' },
  },
  {
    slug: 'tools',
    title: 'Tools & Equipment',
    icon: '🔫',
    description:
      'Spray guns, mixing cups, stir sticks, strainers, tack cloths, and safety gear to keep your shop equipped and productive.',
    tags: ['Spray Guns', 'Mixing Cups', 'Strainers', 'Tack Cloths', 'Safety'],
    image: { src: '/automart/paints/tools.webp', alt: 'Tools and equipment' },
  },
  {
    slug: 'misc',
    title: 'Supply & Misc.',
    icon: '📦',
    description:
      'Shop consumables and specialty products — everything from mixing sticks and gloves to paint suits and respirator cartridges.',
    tags: ['Consumables', 'PPE', 'Gloves', 'Respirators', 'Paint Suits'],
    image: { src: '/automart/paints/miscellaneous.webp', alt: 'Shop supplies and consumables' },
  },
];

const steps: PaintStep[] = [
  {
    title: 'Wash & Strip',
    body: 'Wash the panel and strip old paint or rust with 40–80 grit abrasive. Use a wax & grease remover before any sanding.',
    products: 'Wax & Grease Remover · 40–80 Grit Disc',
  },
  {
    title: 'Fill & Block',
    body: 'Apply body filler to low spots, block-sand with 80–180 grit, then finish with spot putty and 220–320 grit for a smooth substrate.',
    products: 'Body Filler · Spot Putty · 80–320 Grit',
  },
  {
    title: 'Prime',
    body: 'Spray epoxy primer over bare metal for corrosion protection, then top with urethane high-build primer. Block-sand to 400–600 grit.',
    products: 'Epoxy Primer · Urethane High-Build · 400–600 Grit',
  },
  {
    title: 'Seal & Basecoat',
    body: 'Apply a sealer coat for uniform color holdout, then spray your OEM-matched basecoat. Allow flash time between coats.',
    products: 'Sealer · Basecoat Paint · Reducer',
  },
  {
    title: 'Clear Coat',
    body: 'Apply 2–3 coats of clear over the basecoat while it’s still tacky. Wet-sand with 1500–2000 grit if needed.',
    products: 'Clear Coat · 1500–2000 Grit · Hardener',
  },
  {
    title: 'Detail & Deliver',
    body: 'Compound and polish to remove sanding marks, then finish with wax for a showroom-quality result.',
    products: 'Compound · Polish · Wax',
  },
];

const brands = [
  'SEM',
  'U-POL',
  'Evercoat',
  '3M',
  'Dupli-Color',
  'Sherwin-Williams',
  'Norton',
  'Mirka',
  'Transtar',
  'Matrix',
];

export default function PaintsPage() {
  const mailto = `mailto:${siteConfig.email}`;
  return (
    <div className="am-page">
      <TopBar />
      <Header />
      <PageBanner
        eyebrow="Refinishing Supplies"
        headlineLead="Automotive Paints &"
        headlineAccent="Supplies"
        lede="Everything your shop needs to go from bare metal to showroom shine — paint, primer, clear coat, body filler, abrasives, masking, and more. 15+ categories in stock with same-day delivery to the Chicago metro area."
        backgroundImage={{ src: '/automart/paints/paints-hero.webp', alt: '' }}
        ctas={[
          { label: 'Call to Order', href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Request a Quote', href: '/#quote', variant: 'ghost-w' },
        ]}
      />
      <PaintCategories
        eyebrow="Paint Categories"
        headline="Shop by Product Type"
        lede={
          <>
            Click <strong>Inquire</strong> on any category to send us a quick request and we’ll get
            back to you with pricing and availability.
          </>
        }
        items={categories}
        inquireHref={mailto}
      />
      <PaintProcess
        eyebrow="Process Guide"
        headline="The 6-Step Refinishing Process"
        lede="Use this as a product checklist. We stock everything for every step."
        items={steps}
      />
      <PaintBrands
        eyebrow="Brands We Carry"
        headline="Industry-Leading Refinishing Brands"
        items={brands}
      />
      <StillHaveQuestion
        eyebrow="Need help speccing your job?"
        headline="Talk to a paint specialist — we’ll get you the right products."
        lede="Whether you need a single quart of reducer or a full shop supply of primers and clears, our team will put together the right order and get it to you the same day."
        ctas={[
          { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref, variant: 'yellow' },
          { label: 'Request a Quote', href: '/#quote', variant: 'outline-w' },
        ]}
      />
      <Footer />
      <Toast />
    </div>
  );
}
