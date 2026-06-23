export type CategoryKey =
  | 'bumper'
  | 'light'
  | 'corner'
  | 'fog'
  | 'hood'
  | 'grille'
  | 'mirror'
  | 'splash'
  | 'ac'
  | 'fan'
  | 'radiator'
  | 'fender'
  | 'door'
  | 'trunk'
  | 'frame';

export type Category = {
  key: CategoryKey;
  name: string;
  sku: string;
  desc: string;
};

export const categories: Category[] = [
  {
    key: 'bumper',
    name: 'Bumpers & Covers',
    sku: '1,200+ SKUs',
    desc: 'Front & rear bumper covers, reinforcements, absorbers and complete assemblies.',
  },
  {
    key: 'light',
    name: 'Headlights & Tail Lights',
    sku: '900+ SKUs',
    desc: 'OEM-spec headlight assemblies, tail-lamp units and replacement lenses.',
  },
  {
    key: 'corner',
    name: 'Corner & Parking Lights',
    sku: '400+ SKUs',
    desc: 'Corner lights, side markers and parking-lamp assemblies for all makes.',
  },
  {
    key: 'fog',
    name: 'Fog Lights',
    sku: '350+ SKUs',
    desc: 'Direct-fit fog-lamp assemblies and housings.',
  },
  {
    key: 'hood',
    name: 'Hoods & Panels',
    sku: '600+ SKUs',
    desc: 'Replacement hoods, bonnet panels, cowl panels and hood hinges.',
  },
  {
    key: 'grille',
    name: 'Grilles & Guards',
    sku: '500+ SKUs',
    desc: 'Upper & lower grilles, grille inserts and overlay kits.',
  },
  {
    key: 'mirror',
    name: 'Mirrors',
    sku: '700+ SKUs',
    desc: 'Power, manual, heated and tow mirrors for cars and trucks.',
  },
  {
    key: 'splash',
    name: 'Splash Guards & Shields',
    sku: '300+ SKUs',
    desc: 'Mud flaps, splash shields, fender liners and wheel-well covers.',
  },
  {
    key: 'ac',
    name: 'A/C Condensers',
    sku: '280+ SKUs',
    desc: 'Direct-fit A/C condensers and receiver-drier units.',
  },
  {
    key: 'fan',
    name: 'Radiator & Condenser Fans',
    sku: '200+ SKUs',
    desc: 'Radiator condenser fan assemblies and individual fan motors.',
  },
  {
    key: 'radiator',
    name: 'Radiators & Cooling',
    sku: '380+ SKUs',
    desc: 'Radiators, heater cores, overflow tanks and thermostat housings.',
  },
  {
    key: 'fender',
    name: 'Fenders',
    sku: '550+ SKUs',
    desc: 'Front fenders, quarter panels and inner fender liners for all makes.',
  },
  {
    key: 'door',
    name: 'Doors & Related',
    sku: '420+ SKUs',
    desc: 'Door shells, door skins, hinges and door weatherstripping.',
  },
  {
    key: 'trunk',
    name: 'Trunk Lids & Tailgates',
    sku: '310+ SKUs',
    desc: 'Trunk lids, deck lids, tailgates and liftgate assemblies.',
  },
  {
    key: 'frame',
    name: 'Inner Structure',
    sku: '240+ SKUs',
    desc: 'Radiator core supports, strut towers, sub-frames and unibody parts.',
  },
];

export type VehicleTypeKey = 'sedan' | 'suv' | 'truck' | 'hatch' | 'coupe' | 'van';

export type VehicleType = {
  key: VehicleTypeKey;
  name: string;
  count: string;
};

export const vehicleTypes: VehicleType[] = [
  { key: 'sedan', name: 'Sedan', count: '4,200+ parts' },
  { key: 'suv', name: 'SUV', count: '6,800+ parts' },
  { key: 'truck', name: 'Pickup Truck', count: '9,400+ parts' },
  { key: 'hatch', name: 'Hatchback', count: '2,100+ parts' },
  { key: 'coupe', name: 'Coupe', count: '1,300+ parts' },
  { key: 'van', name: 'Cargo Van', count: '1,900+ parts' },
];

export type Review = {
  quote: string;
  initials: string;
  name: string;
  meta: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    rating: 5,
    quote:
      'Ordered a front bumper and headlight set for a Civic — shipped the same day, showed up well-packed and lined right up. Exactly what I needed.',
    initials: 'JM',
    name: 'Jason M.',
    meta: 'Collision Shop Owner · Indianapolis, IN',
  },
  {
    rating: 4,
    quote:
      'Good price on a fender and the fit was solid. Took a day longer to arrive than I expected, but the part itself was perfect. Would order again.',
    initials: 'AD',
    name: 'Andre D.',
    meta: 'DIY Owner · Columbus, OH',
  },
  {
    rating: 5,
    quote:
      'We order for our fleet almost every week and they rarely miss. Pricing is fair and the team actually picks up the phone when you call.',
    initials: 'LR',
    name: 'Luis R.',
    meta: 'Fleet Service Manager · St. Louis, MO',
  },
  {
    rating: 5,
    quote:
      'Needed a grille for an older Tahoe and they had it in stock when nobody else did. Smooth order, quick turnaround. Hard to beat.',
    initials: 'BT',
    name: 'Brian T.',
    meta: 'Body Shop Tech · Detroit, MI',
  },
  {
    rating: 4,
    quote:
      'Mirror came in and works great. The box was a little beat up in transit but the part was fine. Honest pricing, no real complaints.',
    initials: 'SK',
    name: 'Steph K.',
    meta: 'DIY Owner · Nashville, TN',
  },
  {
    rating: 5,
    quote:
      'Hood and core support both arrived clean and on time. Saved me a good chunk versus the dealer quote. These folks know their parts.',
    initials: 'CM',
    name: 'Carlos M.',
    meta: 'Independent Mechanic · Kansas City, KS',
  },
  {
    rating: 4,
    quote:
      'Right part at a great price, and the fit was spot on. Had to call once to confirm my order, but it shipped quick after that. Solid experience.',
    initials: 'DP',
    name: 'Derek P.',
    meta: 'DIY Owner · Louisville, KY',
  },
  {
    rating: 5,
    quote:
      'Been buying collision parts here for two years across a few different cars. Consistent quality, consistent pricing. My go-to supplier now.',
    initials: 'NV',
    name: 'Nina V.',
    meta: 'Repair Shop Owner · Milwaukee, WI',
  },
];

export const makes = [
  'Ford',
  'Chevrolet',
  'RAM',
  'Toyota',
  'Honda',
  'Nissan',
  'Hyundai',
  'Kia',
  'GMC',
  'Jeep',
  'Dodge',
  'Subaru',
  'Mazda',
  'Volkswagen',
  'BMW',
];

export const models: Record<string, string[]> = {
  Ford: ['F-150', 'Escape', 'Explorer', 'Mustang', 'Edge'],
  Chevrolet: ['Silverado 1500', 'Equinox', 'Malibu', 'Tahoe', 'Traverse'],
  Toyota: ['Camry', 'RAV4', 'Corolla', 'Tacoma', 'Highlander'],
  Honda: ['Civic', 'CR-V', 'Accord', 'Pilot', 'Odyssey'],
  RAM: ['1500', '2500', 'ProMaster'],
  Nissan: ['Altima', 'Rogue', 'Sentra', 'Frontier'],
  Jeep: ['Grand Cherokee', 'Wrangler', 'Cherokee', 'Compass'],
};

export type PartCategoryData = {
  slug: string;
  name: string;
  description: string;
  skuBadge: string;
  image: { src: string; alt: string };
};

export const partCategories: PartCategoryData[] = [
  {
    slug: 'headlights',
    name: 'Headlights & Tail Lights',
    description: 'OEM-spec headlight assemblies, tail lamp units, and replacement lenses.',
    skuBadge: '900+ SKUs',
    image: { src: '/automart/parts-cat/headlights.webp', alt: 'Headlights and tail lights' },
  },
  {
    slug: 'corner-lights',
    name: 'Corner & Parking Lights',
    description: 'Corner lights, side markers, and parking lamp assemblies for all makes.',
    skuBadge: '400+ SKUs',
    image: { src: '/automart/parts-cat/corner-lights.webp', alt: 'Corner and parking lights' },
  },
  {
    slug: 'fog-lights',
    name: 'Fog Lights',
    description: 'Direct-fit fog lamp assemblies and housings.',
    skuBadge: '350+ SKUs',
    image: { src: '/automart/parts-cat/fog-lights.webp', alt: 'Fog lights' },
  },
  {
    slug: 'hoods',
    name: 'Hoods & Panels',
    description: 'Replacement hoods, bonnet panels, cowl panels, and hood hinges.',
    skuBadge: '600+ SKUs',
    image: { src: '/automart/parts-cat/hoods.webp', alt: 'Hoods and front panels' },
  },
  {
    slug: 'grilles',
    name: 'Grilles & Grille Guards',
    description: 'Upper & lower grilles, grille inserts, and overlay kits.',
    skuBadge: '500+ SKUs',
    image: { src: '/automart/parts-cat/grilles.webp', alt: 'Grilles and grille guards' },
  },
  {
    slug: 'mirrors',
    name: 'Mirrors',
    description: 'Power, manual, heated, and tow mirrors for cars and trucks.',
    skuBadge: '700+ SKUs',
    image: { src: '/automart/parts-cat/mirrors.webp', alt: 'Side mirrors' },
  },
  {
    slug: 'splash-guards',
    name: 'Splash Guards & Shields',
    description: 'Mud flaps, splash shields, fender liners, and wheel well covers.',
    skuBadge: '300+ SKUs',
    image: { src: '/automart/parts-cat/splash-guards.webp', alt: 'Splash guards and shields' },
  },
  {
    slug: 'ac-condensers',
    name: 'A/C Condensers',
    description: 'Direct-fit A/C condensers and receiver-drier units.',
    skuBadge: '280+ SKUs',
    image: { src: '/automart/parts-cat/ac-condenser.webp', alt: 'A/C condensers' },
  },
  {
    slug: 'radiators',
    name: 'Radiators & Cooling',
    description: 'Radiators, heater cores, coolant overflow tanks, and thermostat housings.',
    skuBadge: '380+ SKUs',
    image: { src: '/automart/parts-cat/radiator-cooling.webp', alt: 'Radiators and cooling' },
  },
  {
    slug: 'fenders',
    name: 'Fenders',
    description: 'Front fenders, quarter panels, and inner fender liners for all makes.',
    skuBadge: '550+ SKUs',
    image: { src: '/automart/parts-cat/fenders.webp', alt: 'Fenders' },
  },
  {
    slug: 'doors',
    name: 'Doors & Related',
    description: 'Door shells, door skins, hinges, and door weatherstripping.',
    skuBadge: '420+ SKUs',
    image: { src: '/automart/parts-cat/door.webp', alt: 'Doors and door hardware' },
  },
  {
    slug: 'trunks',
    name: 'Trunk Lids & Tailgates',
    description: 'Trunk lids, deck lids, tailgates, and liftgate assemblies.',
    skuBadge: '310+ SKUs',
    image: { src: '/automart/parts-cat/trunk.webp', alt: 'Trunk lids and tailgates' },
  },
  {
    slug: 'inner-structure',
    name: 'Inner Structure',
    description: 'Radiator core supports, strut towers, sub-frames, and unibody parts.',
    skuBadge: '240+ SKUs',
    image: { src: '/automart/parts-cat/inner-structure.webp', alt: 'Inner body structure' },
  },
];
