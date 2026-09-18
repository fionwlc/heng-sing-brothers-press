import { ServiceCategory } from '../types';

export const PRINTING_SERVICES: ServiceCategory[] = [
  {
    id: 'offset',
    name: 'Commercial Offset Lithography',
    tagline: 'High-Volume Precision at Uncompromising Color Density',
    shortDesc: 'State-of-the-art multi-unit sheetfed offset printing for high-volume catalogs, fine-art books, corporate collateral, and luxury publications.',
    fullDesc: 'Our pressroom runs synchronized Heidelberg Speedmaster XL 106 8-color configurations featuring Inpress Control-3 spectral spectrophotometry. Every sheet is calibrated at 18,000 sheets per hour with in-line sheet inspection, ensuring zero color drift across 1,000 or 1,000,000 impressions.',
    cmykValues: { c: 100, m: 15, y: 0, k: 5 },
    accentColor: '#00E5FF', // Vibrant Cyan accent
    badge: 'High-Volume Production',
    specs: {
      maxSheetSize: '750 × 1060 mm (B1+)',
      stockRange: '60 gsm Bible paper to 600 gsm folding board',
      resolution: 'Up to 3,600 DPI Suprasetter CTP Plates',
      productionSpeed: '18,000 sheets / hour',
      dryingTech: 'Instant LED-UV Curing & Dispersion Varnish',
      standardTurnaround: '3–5 business days'
    },
    equipment: {
      model: 'Heidelberg Speedmaster XL 106 8-Color UV',
      maker: 'Heidelberg Druckmaschinen AG (Germany)',
      features: [
        'Spectral in-line spectrophotometer scanning 160 color patches/sec',
        'AutoPlate Pro fully automated 2-minute plate changeover',
        'LE-UV and LED-UV dual curing for instant touch-dry bindery',
        'FOGRA 51/52 and ISO 12647-2 certified color management'
      ]
    },
    featuredProducts: [
      {
        title: 'Hardcover Fine Art Monograph',
        description: 'Case-bound art catalogs printed on Munken Lynx 170gsm with 2400 DPI stochastic screening for continuous-tone photography.',
        tags: ['Thread Sewn', 'Foil Debossed Cloth', 'Stochastic Halftone'],
        finishingHighlights: ['Cloth spine with foil stamping', 'Spot UV on jacket', 'Custom endpapers']
      },
      {
        title: 'Quarterly Corporate Annual Report',
        description: 'Gatefolded annual reports combining metallic Pantone 871C gold and 4-color process on Fedrigoni Splendorgel.',
        tags: ['FSC Recycled', 'Pantone Metallic', 'Pur Binding'],
        finishingHighlights: ['Soft-touch velvet laminate', 'Scodix raised foil', 'Die-cut tabs']
      },
      {
        title: 'High-Volume Retail Lookbook',
        description: 'Saddle-stitched 64-page fashion lookbook produced in 25,000 units with uniform ink density and zero set-off.',
        tags: ['Magazines', 'Saddle Stitch', 'Silk 150gsm'],
        finishingHighlights: ['Overall matte aqueous dispersion', 'Precision three-knife trim']
      }
    ],
    substrateOptions: [
      { name: 'Munken Kristall & Lynx Pure', weight: '120 - 300 gsm', finish: 'Tactile Uncoated Premium', certified: 'FSC & Nordic Swan' },
      { name: 'Fedrigoni Splendorgel White', weight: '160 - 340 gsm', finish: 'Ultra-Smooth Velvet', certified: 'ECF & Acid-Free' },
      { name: 'Magno Satin Silk', weight: '130 - 350 gsm', finish: 'Semi-Gloss Coated Silk', certified: 'ISO 14001 / PEFC' },
      { name: 'Gmund Colors Matt', weight: '240 - 400 gsm', finish: 'Pigmented Through-Dyed', certified: '100% Green Energy' }
    ]
  },
  {
    id: 'digital',
    name: 'Digital Indigo & Short-Run Studio',
    tagline: 'Liquid ElectroInk Agility with Offset-Matched Quality',
    shortDesc: 'On-demand production, variable data personalization, white ink layering, and micro-batches down to quantity one.',
    fullDesc: 'Driven by HP Indigo 12000 HD digital presses utilizing 7-color liquid ElectroInk chemistry. Digital print without the dry plastic shine of toner—liquid pigment sinks into paper fibers identical to offset ink, enabling white ink underprints on black stocks, fluorescent accents, and personalized runs.',
    cmykValues: { c: 10, m: 100, y: 15, k: 0 },
    accentColor: '#FF007F', // Vibrant Magenta accent
    badge: 'Instant Proofing & On-Demand',
    specs: {
      maxSheetSize: '530 × 750 mm (B2 Digital)',
      stockRange: '70 gsm to 450 gsm synthetic & textured',
      resolution: 'True 1,600 DPI HD Liquid Imaging',
      productionSpeed: '4,600 full-color B2 sheets / hour',
      dryingTech: 'Instant Polymer Thermal Transfer',
      standardTurnaround: '24 to 48 hours'
    },
    equipment: {
      model: 'HP Indigo 12000 HD Digital Press',
      maker: 'HP Indigo Division (Israel)',
      features: [
        '7-color ink stations: CMYK + Premium White + Fluorescent Pink + Silver',
        'High Definition Laser Imaging head producing 1,600 DPI addressability',
        'One-Shot Color technology for printing plastics, synthetics, and metallics',
        'Full variable data dynamic composition via SmartStream Mosaic'
      ]
    },
    featuredProducts: [
      {
        title: 'Numbered Limited-Edition Giclée Folio',
        description: 'Bespoke art print portfolios on Hahnemühle Photo Rag 308gsm with serialized security numbering and blind emboss stamp.',
        tags: ['Variable Serialization', 'Archival Rag', 'Cotton Stock'],
        finishingHighlights: ['Deckled edge tearing', 'Archival portfolio sleeve']
      },
      {
        title: 'Executive Presentation Decks',
        description: 'Short-run wire-o bound pitch documents featuring opaque white ink printed over Colorplan Ebony cardstock.',
        tags: ['Opaque White Ink', 'Black Substrate', 'Wire-O Bound'],
        finishingHighlights: ['Matte black wire-o', 'Translucent frosted acetate cover']
      },
      {
        title: 'Personalized VIP Event Invitations',
        description: 'Custom attendee name personalization with digital gold sleeking and matching die-cut RSVP envelopes.',
        tags: ['Dynamic VDP', 'Digital Sleeking', 'Duplexed 600gsm'],
        finishingHighlights: ['Edge beveling', 'Digital gold foil accents']
      }
    ],
    substrateOptions: [
      { name: 'Colorplan Dark Palette (Ebony & Imperial Blue)', weight: '270 - 350 gsm', finish: 'Vivid Uncoated Colored', certified: 'FSC Mixed' },
      { name: 'Hahnemühle Photo Rag 100% Cotton', weight: '308 gsm', finish: 'Museum Grade Matte', certified: 'Acid-Free ISO 9706' },
      { name: 'Curious Metallics Cryogen White', weight: '240 - 300 gsm', finish: 'Iridescent Mineral Shimmer', certified: 'ECF Bleached' },
      { name: 'Yupo Synthetic Waterproof Paper', weight: '150 - 250 gsm', finish: 'Ultra-Durable Tearproof', certified: '100% Recyclable Polypropylene' }
    ]
  },
  {
    id: 'packaging',
    name: 'Luxury Packaging & Structural Boxes',
    tagline: 'Engineered Paperboard, Rigid Boxes & Custom Cartons',
    shortDesc: 'Custom structural CAD engineering, magnetic closure rigid boxes, folding cartons, and unboxing experiences tailored to your brand identity.',
    fullDesc: 'Packaging is the first physical touchpoint of luxury. From 2mm solid greyboard wrapped in soft-touch Italian paper to corrugated direct-to-flute mailers, we combine structural durability with micro-precision die-cutting, hidden neodymium magnets, and tailored EVA foam cavities.',
    cmykValues: { c: 5, m: 20, y: 100, k: 0 },
    accentColor: '#FFD700', // Yellow/Gold accent
    badge: 'Custom Structural CAD',
    specs: {
      maxSheetSize: '1040 × 1420 mm Large Format Die-Cut',
      stockRange: '250 gsm folding board to 3.5 mm rigid board',
      resolution: 'Direct Litho Laminate & Screen Printing',
      productionSpeed: 'Up to 9,000 boxes / shift',
      dryingTech: 'Hybrid UV & Food-Safe Barrier Coating',
      standardTurnaround: '7–12 business days (Prototypes in 3 days)'
    },
    equipment: {
      model: 'Bobst Novacut 106 E & Emmeci Rigid Box Line',
      maker: 'Bobst Group (Switzerland) / Emmeci (Italy)',
      features: [
        'Optical dynamic optical register register-to-print alignment',
        'Automatic stripping and blanking for clean cut edges',
        'Precision V-groove scoring for 90-degree razor-sharp box corners',
        'In-line magnetic disc insertion & ultrasonic robotic folding'
      ]
    },
    featuredProducts: [
      {
        title: 'Rigid Magnetic Luxury Keepsake Box',
        description: '2.5mm greyboard wrapped in Fedrigoni Ispira soft-touch paper with concealed double neodymium magnetic closure flap.',
        tags: ['Magnetic Flap', 'V-Groove Sharp Edge', 'Custom Foam Insert'],
        finishingHighlights: ['Deep blind debossed logo', 'Black velvet die-cut tray', 'Satin pull ribbon']
      },
      {
        title: 'Holographic Perfume Folding Carton',
        description: 'SBS C1S 350gsm bleached sulfate board with cold-foil rainbow iridescent stamping and overall anti-scratch matte film.',
        tags: ['Cold Foil', 'Crash-Lock Base', 'Window Patching'],
        finishingHighlights: ['Embossed micro-pattern texture', 'Security holographic seal']
      },
      {
        title: 'Eco E-Flute Illustrated Mailer Box',
        description: 'Heavy duty unbleached kraft corrugated box printed with vegetable-based inks inside and out for zero-plastic e-commerce.',
        tags: ['100% Recycled', 'Tear Strip', 'Two-Sided Print'],
        finishingHighlights: ['Self-sealing adhesive strips', 'Inside contrast flood coat']
      }
    ],
    substrateOptions: [
      { name: 'Kappaline Rigid Bookbinder Greyboard', weight: '1.5 - 3.0 mm', finish: 'High-Density Warp-Free Core', certified: '100% Post-Consumer' },
      { name: 'Invercote Creato Solid Bleached Board', weight: '280 - 400 gsm', finish: 'Double-Coated Smooth Silk', certified: 'FSC / Food-Grade Safe' },
      { name: 'Brown Kraft Virgin Flute', weight: '1.2 - 2.0 mm (E/F Flute)', finish: 'Natural Raw Texture', certified: 'Biodegradable Compostable' },
      { name: 'Fedrigoni Materica Clay & Gesso', weight: '180 - 360 gsm', finish: 'Cotton & Recycled Cotton Blend', certified: 'FSC 40% CTN' }
    ]
  },
  {
    id: 'large-format',
    name: 'Grand Format & Architectural Graphics',
    tagline: 'Museum Walls, Exhibition Lightboxes & Massive Scale',
    shortDesc: 'Seamless UV-curable flatbed and roll-to-roll printing up to 5 meters wide for museum galleries, storefront displays, and interior architecture.',
    fullDesc: 'Our flatbed SwissQprint Nyala systems print directly onto acrylic, brushed aluminum Dibond, acoustic felt, birch plywood, and backlit textiles. With 9-picoliter drop sizes and 1,080 DPI native resolution, close-up inspection reveals razor-sharp vector type and photographic gradients at billboard scale.',
    cmykValues: { c: 90, m: 80, y: 10, k: 0 },
    accentColor: '#3B82F6', // Deep Blue accent (C+M mix)
    badge: 'Seamless 5-Meter Printing',
    specs: {
      maxSheetSize: '3.2 × 2.0 m Rigid Bed / 5 m Continuous Roll',
      stockRange: 'Up to 50 mm thick rigid substrates',
      resolution: 'Up to 1,350 DPI true photographic droplet',
      productionSpeed: '206 m² / hour',
      dryingTech: 'Cold LED-UV Low-Heat Curing',
      standardTurnaround: '2–4 business days'
    },
    equipment: {
      model: 'swissQprint Nyala 4 & Canon Colorado UVgel',
      maker: 'swissQprint (Switzerland) & Canon Production Printing',
      features: [
        'Tandem vacuum zones for non-stop continuous production',
        'Print-on-demand 3D textured varnish layering up to 2mm relief',
        'Drop-on-demand piezo printheads with 9pl droplet control',
        'UVgel ink technology with scratch resistance and zero odour'
      ]
    },
    featuredProducts: [
      {
        title: 'SEG Fabric Backlit Lightbox Displays',
        description: 'Dye-sublimation printed Samban stretch textile with silicone edge beading for frameless LED illuminated retail backdrops.',
        tags: ['Silicone Edge Graphic', 'Backlit Diffusion', 'Washable Fabric'],
        finishingHighlights: ['Non-glare light diffusion', 'Rollable crease-free transit']
      },
      {
        title: 'Brushed Aluminum Gallery Dibond Prints',
        description: 'Direct-to-metal UV printing on brushed silver Dibond where raw metal highlights shine through white-free image zones.',
        tags: ['Brushed Metal', 'Floating Frame', 'UV Architectural'],
        finishingHighlights: ['Rear concealed aluminum subframe', 'Anti-UV protective clear coat']
      },
      {
        title: 'Architectural Frosted Glass Window Murals',
        description: 'Multi-layer optically clear film with graduated gradient white ink for modern conference room acoustic privacy walls.',
        tags: ['Optically Clear', 'Graduated Privacy', 'White Ink Vector'],
        finishingHighlights: ['Easy wet-install adhesive', 'Removable clean release']
      }
    ],
    substrateOptions: [
      { name: 'Alupanel Dibond Composite (Silver & White)', weight: '3 mm thickness', finish: 'Brushed Metallic / Enamel', certified: 'Class 1 Fire Rated' },
      { name: 'Plexiglas XT Acrylic Crystal Clear', weight: '3 - 10 mm thickness', finish: 'High-Gloss Polished Edge', certified: '100% Recyclable PMMA' },
      { name: 'Kvadrat Acoustic PET Felt Board', weight: '9 - 12 mm thickness', finish: 'Sound Absorbent Soft Felt', certified: 'Cradle-to-Cradle Silver' },
      { name: 'Samban Samba Backlit Textile', weight: '195 gsm', finish: 'Even Diffusion Matte', certified: 'OEKO-TEX Standard 100' }
    ]
  },
  {
    id: 'finishing',
    name: 'Specialty Finishes & Embellishments',
    tagline: 'Tactile Sensory Alchemy: Foils, Emboss & 3D Varnish',
    shortDesc: 'Elevate printed matter with multi-level sculptural embossing, liquid digital foil sleeking, raised spot UV, and artisan edge gilding.',
    fullDesc: 'Great print is not merely seen—it is felt. Our finishing studio combines century-old brass die hot foil stamping with Scodix Ultra digital enhancement. We can apply tactile crystal polymers that rise 250 microns above the paper surface, match bespoke Pantone neon inks, and hand-bevel card edges with 24k gold leaf.',
    cmykValues: { c: 20, m: 30, y: 15, k: 90 },
    accentColor: '#E2E8F0', // Platinum / Silver finish
    badge: 'Tactile Sensory Craft',
    specs: {
      maxSheetSize: '740 × 1050 mm Embellishment Area',
      stockRange: '135 gsm to 1200 gsm duplexed sandwich stocks',
      resolution: 'Variable height UV polymers (20 to 250 microns)',
      productionSpeed: '1,250 sheets / hour precision finishing',
      dryingTech: 'Targeted Instant UV Polymer Cross-Linking',
      standardTurnaround: '3–6 business days'
    },
    equipment: {
      model: 'Scodix Ultra 6000 & Heidelberg Cylinder Foil Press',
      maker: 'Scodix (Israel) / Original Heidelberg Cylinder (Germany)',
      features: [
        'Scodix RSP (Rotate, Scale, Position) optical registration cameras',
        'Variable polymer density creating braille, leather, and droplet textures',
        'Heating platen with multi-zone digital PID thermal control for foil',
        'Custom hand-tooled brass micro-etched counter-dies'
      ]
    },
    featuredProducts: [
      {
        title: 'Triplex 900gsm Edge-Gilded Business Cards',
        description: 'Three layers of Gmund Cotton sandwiching a fluorescent magenta paper core, finished with mirror rose gold edge gilding.',
        tags: ['900gsm Ultra-Thick', 'Colored Core', 'Mirror Rose Gold Edge'],
        finishingHighlights: ['Multi-level blind deboss', '3-layer color sandwich', 'Hand-polished edges']
      },
      {
        title: 'Dimensional Tactile Spot UV Book Jacket',
        description: 'Liquid drop-effect gloss varnish applied selectively over deep matte velvet lamination, creating a striking sensory contrast.',
        tags: ['Raised 100 Micron Varnish', 'Soft-Touch Base', 'Braille Detail'],
        finishingHighlights: ['Fingerprint-resistant matte base', 'High-refractive gloss polymer']
      },
      {
        title: 'Holographic Security Foil Certificate',
        description: 'Custom optical diffraction foil stamped onto mold-made watermarked cotton certificate paper with tamper-evident micro-text.',
        tags: ['Security Foil', 'Deckled Watermark', 'Hot Stamping'],
        finishingHighlights: ['Micro-engraved brass die', 'Individually serialized cold stamp']
      }
    ],
    substrateOptions: [
      { name: 'Gmund Cotton Max White', weight: '300 - 900 gsm', finish: 'Pure Virgin Cotton Fluff', certified: 'Chlorine-Free 100% Cotton' },
      { name: 'Soft-Touch Matte Thermal Laminate', weight: '28 micron film', finish: 'Peach-Skin Velvet Feel', certified: 'Food Safe / Heavy Metal Free' },
      { name: 'Kurz Luxor & Alufin Stamping Foil', weight: 'Precision micro-film', finish: 'Mirror Metallic (36 Colors)', certified: 'REACH Compliant' },
      { name: 'Colorplan Duplex & Triplex Laminates', weight: '540 - 1050 gsm', finish: 'Rigid Architectural Card', certified: 'FSC Mixed Sources' }
    ]
  },
  {
    id: 'eco',
    name: 'EcoLab Sustainable Printing',
    tagline: 'Algae Inks, 100% Recycled Cotton & Carbon Negative Cycles',
    shortDesc: 'Pioneering ecological printing with Living Ink carbon-negative algae black pigments, organic vegetable oils, and circular waterless presses.',
    fullDesc: 'We reject the myth that sustainable print requires aesthetic compromise. In our EcoLab, petroleum-based black ink is replaced with carbon-sequestering algae pigment; our offset runs use 100% vegetable soy oils; and our papers are certified FSC recycled or agricultural waste (wheat straw and hemp).',
    cmykValues: { c: 75, m: 10, y: 85, k: 25 },
    accentColor: '#10B981', // Emerald Green (Cyan + Yellow blend)
    badge: '100% Carbon-Neutral Certified',
    specs: {
      maxSheetSize: '750 × 1060 mm Sheetfed Eco-Offset',
      stockRange: '80 gsm recycled book paper to 450 gsm agricultural board',
      resolution: 'Chemical-Free Processless CTP Plates',
      productionSpeed: '16,000 sheets / hour with zero VOC emission',
      dryingTech: 'Natural Oxidation & Low-Energy LED UV',
      standardTurnaround: '3–5 business days'
    },
    equipment: {
      model: 'KBA Rapida 106 Eco-Config & Processless Kodak Sonora',
      maker: 'Koenig & Bauer (Germany) & Kodak Graphic Communications',
      features: [
        'Kodak Sonora processless plates eliminating water, developer, and acid baths',
        '100% vegetable soy and algae-derived bio pigments',
        'Closed-loop alcohol-free dampening with 98% recycled press water',
        'Plant powered with 100% rooftop solar array and waste heat recapture'
      ]
    },
    featuredProducts: [
      {
        title: 'Algae Ink Carbon-Negative Lookbook',
        description: 'Printed using Living Ink Algae Black—each kilogram of ink sequesters carbon from the atmosphere rather than burning fossil fuels.',
        tags: ['Algae Ink', '100% Post-Consumer', 'No Petroleum'],
        finishingHighlights: ['Biodegradable water-based coating', 'Saddle stitched with copper-free wire']
      },
      {
        title: 'Hemp & Cotton Eco-Packaging Sleeve',
        description: '50% hemp fiber, 50% post-consumer cotton carton sleeve with zero bleach and natural botanical dye coloring.',
        tags: ['Tree-Free', 'Hemp Fiber', 'Unbleached'],
        finishingHighlights: ['Water-soluble inks', 'Home-compostable certified']
      },
      {
        title: 'Seed Paper Plantable Botanical Cards',
        description: 'Handmade 280gsm cotton paper embedded with non-GMO wildflower seeds, printed with non-toxic soy inks that bloom when buried in soil.',
        tags: ['Plantable Seeds', 'Wildflower Bloom', 'Artisan Handmade'],
        finishingHighlights: ['Low-pressure letterpress kiss', '100% compostable packaging']
      }
    ],
    substrateOptions: [
      { name: 'Crush Corn & Cocoa Paper (Favini)', weight: '120 - 350 gsm', finish: 'Agricultural Byproduct Fibers', certified: 'FSC / Upcycled Organic 15%' },
      { name: 'Remake Leather-Waste Paper', weight: '180 - 380 gsm', finish: 'Tactile Leather Grain', certified: '25% Upcycled Leather Scraps' },
      { name: 'Nautilus Classic 100% Recycled', weight: '80 - 350 gsm', finish: 'High-White 100% Waste', certified: 'Blue Angel & EU Ecolabel' },
      { name: 'Hemp Heritage 50/50 Cotton Blend', weight: '320 gsm', finish: 'Raw Tree-Free Texture', certified: 'Chlorine-Free Non-GMO' }
    ]
  }
];

export const CMYK_ROSETTE_ANGLES = {
  c: 15,
  m: 75,
  y: 0,
  k: 45
};

export const SAMPLE_COLOR_PRESETS: { name: string; cmyk: { c: number; m: number; y: number; k: number }; hex: string; desc: string }[] = [
  { name: 'Warm Ultra Blue', cmyk: { c: 100, m: 70, y: 0, k: 10 }, hex: '#0B4EA2', desc: 'Deep corporate catalog blue with rich Cyan + Magenta saturation' },
  { name: 'Refined Carmine Red', cmyk: { c: 0, m: 100, y: 85, k: 5 }, hex: '#DC0032', desc: 'Vibrant packaging red blending 100% Magenta and 85% Yellow' },
  { name: 'Emerald Botanical Green', cmyk: { c: 85, m: 10, y: 100, k: 20 }, hex: '#147A3F', desc: 'Crisp eco-friendly foliage green with high Cyan and Yellow density' },
  { name: 'Rich Black (Press Master)', cmyk: { c: 60, m: 40, y: 40, k: 100 }, hex: '#050505', desc: 'Deep offset composite black preventing dry gray undertones' },
  { name: 'Warm Ochre Gold', cmyk: { c: 15, m: 35, y: 95, k: 0 }, hex: '#D79F2B', desc: 'Warm metallic-simulated gold ideal for luxury stationery' },
  { name: 'Neon Electric Purple', cmyk: { c: 70, m: 100, y: 0, k: 0 }, hex: '#6A1B9A', desc: 'Punchy digital Indigo synthetic shade with pure Cyan-Magenta mix' }
];
