import { ServiceCategoryItem, FAQItem, GuideItem, PortfolioItem } from '../types';

export const HENG_SING_INFO = {
  name: 'Heng Sing Brothers Press',
  shortName: 'Heng Sing',
  years: 34,
  location: 'Kuching & Sarawak-wide',
  address: 'No. 37, Lot 75, Section 63, 1st Floor, Jalan Chan Bee Kiew, 93450 Kuching, Sarawak',
  googleMapsUrl: 'https://maps.google.com/?q=No.+37,+Lot+75,+Section+63,+1st+Floor,+Jalan+Chan+Bee+Kiew,+93450+Kuching,+Sarawak',
  phone: '082-336868',
  whatsapp: '013-3282828',
  whatsappUrl: 'https://wa.me/60133282828',
  email: 'hengsing@gmail.com',
  tagline: 'Quality printing for every order size — big or small.',
  subtagline: 'One supplier for design, print, and on-site installation. We welcome small-quantity orders as much as large ones — no job is too small to do properly.',
  aboutTitle: 'Three decades of print, one standard that hasn\'t slipped.',
  aboutSummary: 'Heng Sing Brothers Press is a one-stop offset & laser printer based in Kuching — design, print and on-site installation from a single supplier, for individuals, small businesses, corporates, schools, event organisers and government agencies across Kuching & Sarawak-wide.'
};

export const HENG_SING_CATEGORIES: ServiceCategoryItem[] = [
  {
    id: 'business-essentials',
    name: 'Business Essentials',
    shortDesc: 'Business cards, letterhead, envelopes, invoice books',
    items: ['Business cards', 'Letterhead', 'Envelopes', 'Invoice & Receipt NCR books', 'Corporate folders'],
    cmykValues: { c: 100, m: 20, y: 10, k: 5 },
    accentColor: '#00A3E0', // Cyan
    badge: 'Single & Bulk Runs',
    iconName: 'CreditCard',
    description: 'Crisp stationery tailored for growing SMEs and established enterprises. From 100 name cards to 10,000 multi-part duplicate invoice books with sequential numbering.',
    featuredWork: [
      { title: 'Matte Laminated Business Cards with Spot UV', description: '310gsm artcard with velvet touch and selective high-gloss UV logos.', tag: 'Stationery' },
      { title: '3-Ply Carbonless NCR Invoice Books', description: 'Numbered perforations, wrap-around writing shields, customized for Sarawak trading firms.', tag: 'Accounting' }
    ]
  },
  {
    id: 'packaging-boxes',
    name: 'Packaging & Boxes',
    shortDesc: 'Gift boxes, product packaging, custom sizes',
    items: ['Gift boxes', 'Product packaging', 'Custom die-cut boxes', 'Food grade sleeves', 'Rigid keepsake boxes'],
    cmykValues: { c: 10, m: 35, y: 100, k: 0 },
    accentColor: '#FFB800', // Warm Yellow
    badge: 'Custom Structural Cuts',
    iconName: 'Package',
    description: 'Custom structural die-cutting, folding cartons, food packaging sleeves, and gift boxes. Prototype a single box or produce full retail production runs.',
    featuredWork: [
      { title: 'Artisanal Food Packaging Cartons', description: 'FSC-certified board with food-grade barrier coating and gold foil accents.', tag: 'Retail Packaging' },
      { title: 'Rigid Magnetic Presentation Box', description: 'Hardboard core wrapped with textured paper for Sarawak corporate VIP gifts.', tag: 'Gift Boxes' }
    ]
  },
  {
    id: 'signage-large-format',
    name: 'Signage & Large Format',
    shortDesc: 'Banners, backdrops, buntings, on-site installation',
    items: ['Banners', 'Backdrops', 'Buntings & roll-up stands', 'Acrylic shop signage', 'On-site installation'],
    cmykValues: { c: 90, m: 85, y: 0, k: 0 },
    accentColor: '#3B82F6', // Vibrant Blue (C+M)
    badge: 'Includes On-Site Setup',
    iconName: 'Flag',
    description: 'High-resolution solvent and UV wide-format printing for outdoor durability and indoor vibrancy. We don\'t just print—we provide on-site installation anywhere in Kuching.',
    featuredWork: [
      { title: 'State Convention Photo Backdrops', description: 'Seamless tension fabric and heavy tarpaulin with anti-glare finish.', tag: 'Exhibition' },
      { title: 'Retail Shopfront Acrylic & 3D Signage', description: 'Precision laser-cut acrylic letters mounted with concealed spacers.', tag: 'Outdoor Signage' }
    ]
  },
  {
    id: 'apparel-fabric',
    name: 'Apparel & Fabric',
    shortDesc: 'T-shirts, uniforms, fabric printing, tote bags',
    items: ['Custom T-shirts', 'Corporate uniforms', 'Sublimation jerseys', 'Cotton canvas tote bags', 'Embroidery'],
    cmykValues: { c: 0, m: 95, y: 40, k: 0 },
    accentColor: '#E11D48', // Vibrant Red / Magenta
    badge: 'Silk Screen & Heat Press',
    iconName: 'Shirt',
    description: 'Durable apparel printing across 100% cotton, dri-fit microfibre, and canvas. Ideal for corporate sports days, school societies, staff uniforms, and promotional merchandise.',
    featuredWork: [
      { title: 'Sarawak Regatta Commemorative Dri-Fit Polo', description: 'Full colour all-over sublimation with breathable UV-resistant ink.', tag: 'Apparel' },
      { title: 'Eco Canvas Heavyweight Tote Bags', description: 'Silk-screen printed with water-based durable inks.', tag: 'Merchandise' }
    ]
  },
  {
    id: 'promotional-gifts',
    name: 'Promotional & Corporate Gifts',
    shortDesc: 'Branded merchandise, event giveaways, executive kits',
    items: ['Insulated thermal flasks', 'Branded ceramic mugs', 'Metal engraved pens', 'Executive PU leather diaries', 'Umbrellas'],
    cmykValues: { c: 20, m: 40, y: 15, k: 80 },
    accentColor: '#475569', // Key / Slate
    badge: 'Laser Engraved & UV Printed',
    iconName: 'Gift',
    description: 'Turn your logo into daily brand impressions. Precision UV cylindrical printing on tumblers, laser engraving on metal pens, and custom debossed leather journals.',
    featuredWork: [
      { title: 'Heng Sing Executive 4-in-1 Gift Hamper', description: 'Custom printed thermal flask, pen, metal thumb drive, and soft-touch notebook.', tag: 'Corporate VIP' },
      { title: 'Full-Colour Ceramic Coffee Mugs', description: 'Microwave and dishwasher safe high-temp ceramic sublimation.', tag: 'Event Giveaway' }
    ]
  },
  {
    id: 'photo-canvas',
    name: 'Photo & Canvas Printing',
    shortDesc: 'Framed prints, canvas, photo products',
    items: ['Stretched artist canvas', 'Framed museum prints', 'Photobooks', 'Acrylic floating prints', 'Foam board mounts'],
    cmykValues: { c: 80, m: 10, y: 90, k: 10 },
    accentColor: '#10B981', // Emerald (C+Y)
    badge: 'Archival Fade-Proof Inks',
    iconName: 'Image',
    description: 'Museum-grade wide colour gamut photo printing on real woven cotton canvas and fine art photo papers. Hand-stretched over solid kiln-dried wooden stretcher bars.',
    featuredWork: [
      { title: 'Gallery Deep-Edge Canvas Wraps', description: '100-year archival pigment inks on 380gsm cotton canvas with satin varnish.', tag: 'Fine Art' },
      { title: 'Family & Heritage Portrait Framing', description: 'Acid-free mat board mounting with non-reflective UV glass.', tag: 'Photography' }
    ]
  },
  {
    id: 'stickers-labels',
    name: 'Stickers & Labels',
    shortDesc: 'Product labels, custom stickers, any shape',
    items: ['Waterproof vinyl labels', 'Die-cut / kiss-cut sheets', 'Roll labels for packaging', 'Foil stamped stickers', 'Transparent labels'],
    cmykValues: { c: 0, m: 100, y: 80, k: 0 },
    accentColor: '#F43F5E', // Magenta / Coral
    badge: 'Any Custom Shape or Contour',
    iconName: 'Tag',
    description: 'Precision optical contour cutting for any sticker shape. Available in waterproof synthetic vinyl, kraft paper, metallic foil, and clear transparent substrate.',
    featuredWork: [
      { title: 'Waterproof Chilled Beverage Bottle Labels', description: 'Freezer-proof adhesive with anti-scratch gloss laminate.', tag: 'Food & Beverage' },
      { title: 'Holographic Die-Cut Brand Stickers', description: 'Custom shape individual kiss-cut stickers with peel tabs.', tag: 'Branding' }
    ]
  },
  {
    id: 'souvenirs',
    name: 'Souvenirs & Keepsakes',
    shortDesc: 'Wedding favours, corporate keepsakes, certificates',
    items: ['Wedding invitation sets', 'Door gifts & favours', 'Certificates of appreciation', 'Custom acrylic trophies', 'Event badges'],
    cmykValues: { c: 40, m: 70, y: 20, k: 10 },
    accentColor: '#A855F7', // Violet
    badge: 'Foil & Emboss Finishing',
    iconName: 'Sparkles',
    description: 'Make milestone events unforgettable with gold foil hot-stamped wedding suites, custom laser-engraved wooden keepsakes, and foil-crested certificates.',
    featuredWork: [
      { title: 'Hot Gold Foil Wedding Suite with Custom Box', description: 'Duplexed 600gsm textured card with matching envelope and seal.', tag: 'Weddings' },
      { title: 'Government Agency Long-Service Awards', description: 'Hardcover velvet certificate holders with embossed national crest.', tag: 'Institutional' }
    ]
  }
];

export const ARTWORK_SPECS = {
  colourMode: {
    rule: 'Set your artwork to CMYK before you export — not RGB, and not spot/Pantone colour unless agreed upon.',
    reason: 'RGB files look correct on screen but shift unpredictably once printed. This is the #1 cause of color mismatches.',
    richBlack: 'C40 M30 Y30 K100 (Use for large solid backgrounds and dark photos)',
    plainBlack: 'K100 only (Use for body text, thin lines, and small type to prevent fringing)',
    totalCoverage: 'Keep total ink coverage under roughly 240% (C+M+Y+K combined)',
    minTint: 'Avoid tints below 10% — very light values often drop out on press.'
  },
  resolution: [
    { title: '300 DPI — Standard', desc: 'Business cards, flyers, booklets, stickers, packaging — anything viewed up close.' },
    { title: '150 DPI — Large Format', desc: 'Banners, backdrops, large signage viewed from a distance — 300 DPI just bloats the file.' },
    { title: '1200 DPI — Line Art', desc: 'Scanned logos, signatures, and black-and-white line drawings so edges stay crisp.' }
  ],
  textAndLines: {
    minText: '4pt for regular printing',
    foilText: '10pt minimum for foil / hot-stamp (bold sans-serif reads best)',
    outline: 'Outline (convert to curves) any font below 5pt that isn\'t bold',
    minLineWeight: '0.25pt — thinner lines may not hold on press',
    contrastWarning: 'Avoid small light-coloured text reversed out of a dark background — it can fill in and blur.'
  },
  fileFormats: [
    'PDF (print-ready, fonts embedded or outlined) — preferred for almost every job',
    'AI, EPS and high-resolution TIFF/JPG/PNG are also accepted',
    'Flatten transparency and layer effects before exporting',
    'Word or PowerPoint files usually aren\'t print-ready — send the original design file or let our in-house team rebuild it'
  ],
  bleedTable: [
    { item: 'Business card', trim: '90 × 54 mm', withBleed: '100 × 64 mm' },
    { item: 'A5 flyer', trim: '148 × 210 mm', withBleed: '158 × 220 mm' },
    { item: 'A4 booklet page', trim: '210 × 297 mm', withBleed: '220 × 307 mm' }
  ]
};

export const GUIDES_LIST: GuideItem[] = [
  {
    id: 'artwork-guide',
    title: 'Design & Artwork Guidelines',
    description: 'Colour mode, resolution, bleed and file specs before you submit artwork.',
    category: 'Prepress',
    readTime: '3 min read'
  },
  {
    id: 'paper-basics',
    title: 'Paper & Material Basics',
    description: 'GSM/weight explained, matte vs. glossy vs. specialty stock in plain English.',
    category: 'Materials',
    readTime: '4 min read'
  },
  {
    id: 'printing-methods',
    title: 'Choosing a Printing Method',
    description: 'Offset vs. digital vs. large-format/solvent, explained simply.',
    category: 'Methods',
    readTime: '5 min read'
  },
  {
    id: 'finishing-options',
    title: 'Finishing Options',
    description: 'Lamination, UV coating, foil, saddle-stitch vs. perfect bind.',
    category: 'Finishes',
    readTime: '4 min read'
  },
  {
    id: 'moq-explained',
    title: 'Ordering & MOQ Explained',
    description: 'Yes, we accept small orders — here\'s how our flexible pricing works.',
    category: 'Ordering',
    readTime: '2 min read'
  },
  {
    id: 'wedding-checklist',
    title: 'Wedding & Event Planning Checklist',
    description: 'What to order and when, so nothing is late for the big day.',
    category: 'Events',
    readTime: '6 min read'
  },
  {
    id: 'corporate-brief',
    title: 'Corporate Print Brief Checklist',
    description: 'What to include before sending your annual report or journal brief.',
    category: 'Corporate',
    readTime: '3 min read'
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    question: 'What file formats do you accept?',
    answer: 'We prefer high-resolution print-ready PDF with fonts embedded or converted to outlines. We also accept Adobe Illustrator (AI), EPS, and high-resolution TIFF, JPG, or PNG (300 DPI). If you only have Word or PowerPoint files, our in-house design team can help convert or rebuild them for press.'
  },
  {
    question: 'What colour mode should my artwork be in?',
    answer: 'Always set your artwork to CMYK mode before exporting. RGB files are meant for screens and will shift unpredictably when printed on physical paper. For deep black backgrounds, use our Rich Black recipe: C40 M30 Y30 K100.',
    linkText: 'See full artwork guidelines →',
    linkHref: '#guidelines'
  },
  {
    question: 'How does ordering work, from enquiry to delivery?',
    answer: 'Step 1: Send us your brief or files via WhatsApp or our Request a Quote form. Step 2: We review your artwork, confirm specs, and send an exact quotation. Step 3: We produce a digital or hardcopy proof for your sign-off. Step 4: Printing, finishing, and delivery or on-site installation across Kuching and Sarawak-wide.'
  },
  {
    question: 'Is there a minimum order quantity (MOQ)?',
    answer: 'No minimum order quantity! A single-quantity order (such as 1 banner, 1 framed canvas, or 50 wedding cards) receives the same quality care and finishing as a 10,000-piece commercial run. We welcome walk-ins, startups, and personal projects.'
  }
];

export const CLIENT_TYPES = [
  { title: 'Individuals & walk-ins', desc: 'Single-quantity and personal jobs, welcomed the same as any other order.' },
  { title: 'Small businesses & retail', desc: 'Stationery, signage and starter kits for new and growing SMEs.' },
  { title: 'Corporates & GLCs', desc: 'Annual reports, journals, booklets and corporate gifts to a consistent standard.' },
  { title: 'Schools & institutions', desc: 'Programme books, certificates, signage and institutional print runs.' },
  { title: 'Event & wedding planners', desc: 'Banners, backdrops, buntings, invitation cards and souvenirs, delivered as one bundle.' },
  { title: 'Government agencies', desc: 'Government-grade standards, held consistently for over three decades.' },
  { title: 'Other printers', desc: 'Overflow and wholesale work for fellow printers, handled the same way as any client job.' }
];

export const STARTER_KITS = {
  business: {
    name: 'Business Starter Kit',
    tagline: 'Starting something new? One price, built for entrepreneurs.',
    items: ['300x Business Cards (Double-sided matte lamination)', '500x Letterheads (100gsm woodfree)', '1x Vinyl Bunting / Directional Banner with X-Stand', '200x Waterproof Logo Die-Cut Stickers'],
    badge: 'Best For New SMEs & Retail'
  },
  event: {
    name: 'Event Essentials Kit',
    tagline: 'Handy for weddings, corporate seminars and client banquets.',
    items: ['1x Stage Photo Backdrop (Seamless tarpaulin or fabric)', '2x Welcome Buntings with heavy chrome stands', '100x Programme Booklets (Full colour saddle-stitched)', '100x Custom Souvenirs / Gift Paper Bags with Ribbon'],
    badge: 'Best For Event Planners'
  }
};
