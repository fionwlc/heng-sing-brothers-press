export type Language = 'en' | 'zh' | 'ms';

export interface CategoryTranslation {
  name: string;
  shortDesc: string;
  badge: string;
  description: string;
  items: string[];
}

export interface Translations {
  common: {
    brandName: string;
    brandSub: string;
    sarawakLocation: string;
    registeredPrinter: string;
    estYear: string;
    requestQuote: string;
    chatWhatsapp: string;
    backToTop: string;
    exploreRange: string;
    contactUs: string;
    viewGuidelines: string;
    allRightsReserved: string;
    currentLanguageLabel: string;
    selectLanguage: string;
  };
  nav: {
    home: string;
    catalogue: string;
    corporate: string;
    guides: string;
    partner: string;
    about: string;
    quoteButton: string;
    whatsappButton: string;
  };
  hero: {
    heritageTag: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    ctaWhatsapp: string;
    ctaQuote: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    stat4Val: string;
    stat4Label: string;
  };
  whyUs: {
    tag: string;
    title: string;
    desc: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  smeBanner: {
    tag: string;
    title: string;
    desc: string;
    cta: string;
  };
  fullRange: {
    badge: string;
    title: string;
    subtitle: string;
    viewFullCat: string;
    featuredBundle: string;
    singleAndBulk: string;
    bizEssentialsTitle: string;
    bizEssentialsDesc: string;
    configureBizBundle: string;
    enquire: string;
    customFormatTitle: string;
    customFormatDesc: string;
    customFormatCta: string;
    whatsappReady: string;
  };
  activeDiscipline: {
    tag: string;
    customQuoteFor: string;
    noJobTooSmall: string;
  };
  cmykPlateDemo: {
    badge: string;
    title: string;
    desc: string;
    cyan: string;
    magenta: string;
    yellow: string;
    keyBlack: string;
  };
  corporateSection: {
    badge: string;
    title: string;
    desc: string;
    reportsBullet: string;
    journalsBullet: string;
    giftsBullet: string;
    ctaBtn: string;
  };
  trustProof: {
    tag: string;
    title: string;
    subtitle: string;
    procurementBadge: string;
    statYears: string;
    statYearsLabel: string;
    statClients: string;
    statClientsLabel: string;
    statDelivery: string;
    statDeliveryLabel: string;
    viewCorporateCta: string;
    card1?: string;
    card2?: string;
    card3?: string;
    card4?: string;
    reviewNotice?: string;
  };
  guidesPromo: {
    tag: string;
    title: string;
    guide1Title: string;
    guide1Desc: string;
    guide2Title: string;
    guide2Desc: string;
    guide3Title: string;
    guide3Desc: string;
  };
  card3D: {
    brandTag: string;
    estTag: string;
    fograTag: string;
    ctaTag: string;
    ctaTitle: string;
    phoneText: string;
    locationText: string;
    trustTag: string;
    disciplinesTag: string;
    yearsBadge: string;
    kuchingBadge: string;
  };
  cataloguePage: {
    tag: string;
    title: string;
    desc: string;
    commonFormats: string;
    viewDetails: string;
    enquire: string;
    modalDetailsTitle: string;
    closeBtn: string;
  };
  corporatePage: {
    tag: string;
    title: string;
    desc: string;
    quoteBtn: string;
    whatsappBtn: string;
    whatWePrint: string;
    whatWePrintSub: string;
    tagLine: string;
    items: Array<{ title: string; desc: string }>;
    pillar1: string;
    pillar2: string;
    pillar3: string;
    guideBannerTitle: string;
    guideBannerSub: string;
    readGuideBtn: string;
    sendRequirementsTitle: string;
    requestQuoteEmailBtn: string;
    orWhatsappBtn: string;
  };
  partnerPage: {
    tag: string;
    title: string;
    desc: string;
    cta: string;
    stageTag: string;
    stageLoc: string;
    mockupSub: string;
    mockupTitle: string;
    mockupSpec: string;
    mockupVerified: string;
    mockupFabric: string;
    mockupFabricDesc: string;
    mockupWelcome: string;
    mockupWelcomeDesc: string;
    mockupFoil: string;
    mockupFoilDesc: string;
    mockupRigging: string;
    mockupRiggingDesc: string;
    mockupFooter: string;
    whatWeProduceTitle: string;
    whatWeProduceSub: string;
    capabilities: Array<{ title: string; desc: string }>;
    pillar1: string;
    pillar2: string;
    pillar3: string;
    kitBadge: string;
    kitTitle: string;
    kitDesc: string;
    seeKitBtn: string;
    checklistTitle: string;
    checklistSub: string;
    readGuideBtn: string;
    bottomTitle: string;
    continueWhatsapp: string;
    sendEmail: string;
  };
  aboutPage: {
    tag: string;
    title: string;
    summary: string;
    pillar1: string;
    pillar1Sub: string;
    pillar2: string;
    pillar2Sub: string;
    pillar3: string;
    pillar3Sub: string;
    pillar4: string;
    pillar4Sub: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    whatHasntChanged: string;
    point1: string;
    point2: string;
    point3: string;
    whatWeDoTitle: string;
    whatWeDoSub: string;
    designTitle: string;
    designDesc: string;
    printTitle: string;
    printDesc: string;
    installTitle: string;
    installDesc: string;
    whoWePrintForTitle: string;
    whoWePrintForSub: string;
    clientTypes: Array<{ title: string; desc: string }>;
    notSureTitle: string;
    notSureDesc: string;
    askWhatsapp: string;
    whyMattersTag: string;
    establishedTag: string;
    whyMattersTitle: string;
    whyMattersDesc: string;
    bottomCtaTitle: string;
    bottomCtaDesc: string;
    requestQuoteBtn: string;
    chatWhatsappBtn: string;
  };
  quotePage: {
    tag: string;
    title: string;
    desc: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    catLabel: string;
    qtyLabel: string;
    qtyPlaceholder: string;
    designHelpLabel: string;
    artworkLinkLabel: string;
    uploadLabel: string;
    dropzoneText: string;
    notesLabel: string;
    notesPlaceholder: string;
    whatsappBtn: string;
    emailBtn: string;
    successTitle: string;
    successDesc: string;
    artworkSectionTitle: string;
    seeGuidelinesBtn: string;
    uploadFileTitle: string;
    uploadFileSub: string;
    uploadFileFormats: string;
    driveLinkTitle: string;
    driveLinkPlaceholder: string;
    driveLinkSub: string;
    designHelpCheckbox: string;
    sendViaTitle: string;
    whatsappNote: string;
    quoteReceivedTitle: string;
    quoteReceivedDesc: string;
    whatsappImmediateBtn: string;
    smallQuantityPersonal: string;
    corporateReportOption: string;
    starterKitOption: string;
    eventKitOption: string;
    customPackagingOption: string;
    otherOption: string;
  };
  guidesFaqPage: {
    tag: string;
    title: string;
    desc: string;
    quickAnswers: string;
    readGuideBtn: string;
    guidesTitle: string;
    guidesSub: string;
    readyOrderTitle: string;
    readyOrderDesc: string;
    seeKitsBtn: string;
    faqs: Array<{ question: string; answer: string; linkText?: string }>;
    guides: Array<{ id: string; title: string; desc: string; category: string; readTime: string }>;
  };
  guidelinesPage: {
    backToGuides: string;
    tag: string;
    title: string;
    desc: string;
    metricCmyk: string;
    metricCmykSub: string;
    metricDpi: string;
    metricDpiSub: string;
    metricBleed: string;
    metricBleedSub: string;
    metricSafe: string;
    metricSafeSub: string;
    metricFont: string;
    metricFontSub: string;
    metricPdf: string;
    metricPdfSub: string;
    generalTitle: string;
    generalSub: string;
    colourModeTitle: string;
    colourModeP1: string;
    colourModeBullet1: string;
    colourModeBullet2: string;
    colourModeBullet3: string;
    colourModeBullet4: string;
    blackAtGlance: string;
    richBlackLabel: string;
    richBlackUse: string;
    plainBlackLabel: string;
    plainBlackUse: string;
    resTitle: string;
    resStandard: string;
    resStandardDesc: string;
    resLarge: string;
    resLargeDesc: string;
    resLine: string;
    resLineDesc: string;
    resAlert: string;
    textLineTitle: string;
    textLineBullet1: string;
    textLineBullet2: string;
    textLineBullet3: string;
    textLineBullet4: string;
    textLineBullet5: string;
    fileFormatsTitle: string;
    fileFormatsBullet1: string;
    fileFormatsBullet2: string;
    fileFormatsBullet3: string;
    fileFormatsBullet4: string;
    bleedSectionTag: string;
    bleedSectionTitle: string;
    bleedSectionSub: string;
    bleedBadge: string;
    trimBadge: string;
    safeBadge: string;
    safeKeepLogos: string;
    bleedExpl: string;
    tableHeaderItem: string;
    tableHeaderTrim: string;
    tableHeaderBleed: string;
    customSizesNote: string;
    detailedSpecsTitle: string;
    noArtworkYetTitle: string;
    noArtworkYetDesc: string;
    requestQuoteBtn: string;
    chatWhatsappBtn: string;
    accordion: Array<{ id: string; title: string; content: string }>;
  };
  footer: {
    addressTitle: string;
    addressText: string;
    contactTitle: string;
    siteTitle: string;
    languageTitle: string;
    languageHelp: string;
    currentLabel: string;
    sarawakTrilingual: string;
  };
  firstTimeModal: {
    welcome: string;
    choosePrompt: string;
    subPrompt: string;
    confirmBtn: string;
    changeLaterNote: string;
    enName: string;
    enDesc: string;
    zhName: string;
    zhDesc: string;
    msName: string;
    msDesc: string;
  };
  categories: Record<string, CategoryTranslation>;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    common: {
      brandName: 'Heng Sing Brothers Press',
      brandSub: 'Commercial & Institutional Printing',
      sarawakLocation: 'Kuching, Sarawak',
      registeredPrinter: 'Sarawak Govt Registered Printer • Est. 1990',
      estYear: 'Over 34 Years in Kuching',
      requestQuote: 'Request a Quote',
      chatWhatsapp: 'Chat on WhatsApp',
      backToTop: 'Back to Top',
      exploreRange: 'Explore Full Range',
      contactUs: 'Contact Us',
      viewGuidelines: 'View Artwork Guidelines',
      allRightsReserved: 'Heng Sing Brothers Press. All rights reserved. Kuching, Sarawak.',
      currentLanguageLabel: 'Language',
      selectLanguage: 'Choose Language'
    },
    nav: {
      home: 'Home',
      catalogue: 'Catalogue',
      corporate: 'Corporate & Institutional',
      guides: 'Guides & FAQ',
      partner: 'Partner With Us',
      about: 'About Us',
      quoteButton: 'Request a Quote',
      whatsappButton: 'Chat on WhatsApp'
    },
    hero: {
      heritageTag: '34 YEARS • KUCHING • SARAWAK-WIDE',
      headlinePart1: 'Quality printing for every order size —',
      headlinePart2: 'big or small.',
      subheadline: 'One supplier for design, print, and on-site installation. We welcome small-quantity orders as much as large ones — no job is too small to do properly.',
      ctaWhatsapp: 'Message us on WhatsApp',
      ctaQuote: 'Request a Quote',
      stat1Val: '34',
      stat1Label: 'Years in operation',
      stat2Val: 'In-house',
      stat2Label: 'Design team',
      stat3Val: 'On-site',
      stat3Label: 'Installation service',
      stat4Val: 'No minimum',
      stat4Label: 'Small orders welcome'
    },
    whyUs: {
      tag: 'WHY PRINT WITH US',
      title: 'Built for every order size.',
      desc: 'From single small-quantity, quality-focused runs to big bulk print jobs, we are equipped for both ends — with in-house design help and installation support when you need it.',
      feature1Title: 'In-House Design Help',
      feature1Desc: 'No design file yet? Our own design team can create one for you.',
      feature2Title: 'Small Runs to Big Bulk Orders',
      feature2Desc: 'No minimum order quantity, and no order too large — we handle bulk industrial volume as well as small-quantity runs.',
      feature3Title: 'On-Site Installation',
      feature3Desc: 'We don\'t stop at printing. We deliver and install signboards, vehicle branding, and backdrop setups across Kuching.'
    },
    smeBanner: {
      tag: 'NEW SME PROGRAMME',
      title: 'Starting something new?',
      desc: 'Business Starter Kit: cards + letterhead + basic signage + stickers, one price. Built for entrepreneurs who don\'t need bulk quantities yet.',
      cta: 'See the Starter Kit'
    },
    fullRange: {
      badge: 'COMMERCIAL PRINT CATALOGUE',
      title: 'The full range',
      subtitle: 'Explore complete business bundles and specialized commercial print disciplines',
      viewFullCat: 'View Full Catalogue →',
      featuredBundle: 'Featured Corporate Bundle',
      singleAndBulk: 'Single & Bulk Runs',
      bizEssentialsTitle: 'Business Essentials',
      bizEssentialsDesc: 'Complete corporate identity suite tailored for growing SMEs and established enterprises. Everything your office needs in one unified, color-calibrated run.',
      configureBizBundle: 'Configure Business Essentials Bundle',
      enquire: 'Enquire',
      customFormatTitle: 'Need a Custom Format?',
      customFormatDesc: 'Custom sizes, special folding, spot foil, or small prototype quantities — we quote directly.',
      customFormatCta: 'Request Custom Job',
      whatsappReady: 'WhatsApp Ready'
    },
    activeDiscipline: {
      tag: 'ACTIVE PRINT DISCIPLINE',
      customQuoteFor: 'Custom Quote for',
      noJobTooSmall: 'No job too small — small quantity orders accepted'
    },
    cmykPlateDemo: {
      badge: '34 Years of Press Precision',
      title: 'How 4 Separate Offset Plates Form The Heng Sing Identity',
      desc: 'In precision commercial printing, a brand mark is separated into distinct Cyan, Magenta, Yellow, and Key Black printing plates. Slide the registration control below to see how our pressmen align each plate to within ±0.01 mm tolerances.',
      cyan: 'Cyan',
      magenta: 'Magenta',
      yellow: 'Yellow',
      keyBlack: 'Key Black'
    },
    corporateSection: {
      badge: 'CORPORATE & INSTITUTIONAL',
      title: 'Annual reports, journals & corporate gifts.',
      desc: 'Booklets, journals, academic publications, executive diaries, and corporate gifts, printed to the same consistent standard we have held for over three decades in Kuching.',
      reportsBullet: 'Hardcover & PUR Perfect Bound Annual Reports',
      journalsBullet: 'Association & Academic Peer-Reviewed Journals',
      giftsBullet: 'Laser-Engraved Flasks, PU Planners & VIP Sets',
      ctaBtn: 'Explore Full Institutional Range'
    },
    trustProof: {
      tag: 'INSTITUTIONAL TRUST',
      title: 'Trusted by our clients',
      subtitle: 'From premier public universities and state government ministries to municipal city councils, Sarawak\'s leading institutions trust Heng Sing Brothers Press for precision print and publishing.',
      procurementBadge: 'Official Government & Institutional Vendor Compliance',
      statYears: '34+ Years',
      statYearsLabel: 'Continuous Press Operations in Kuching',
      statClients: '100% On-Spec',
      statClientsLabel: 'Color Fidelity & Finishing Compliance',
      statDelivery: 'Direct-to-Campus & HQ',
      statDeliveryLabel: 'Reliable Sarawak-Wide Logistics',
      viewCorporateCta: 'Enquire for Institutional Print Tenders'
    },
    guidesPromo: {
      tag: 'NEW TO PRINTING?',
      title: 'Start with our guides',
      guide1Title: 'Paper & Material Basics',
      guide1Desc: 'GSM, matte vs. glossy, and when each applies.',
      guide2Title: 'Choosing a Printing Method',
      guide2Desc: 'Offset vs. digital vs. large-format, explained.',
      guide3Title: 'Ordering & MOQ Explained',
      guide3Desc: 'Yes, we accept small orders — here\'s how it works.'
    },
    card3D: {
      brandTag: 'HENG SING BROTHERS PRESS',
      estTag: 'Sarawak Registered • Est. 1990',
      fograTag: 'FOGRA51',
      ctaTag: 'Print • Packaging • Signage',
      ctaTitle: 'Reach us now to get your brand and product done',
      phoneText: 'WhatsApp: +60 13-328 2828',
      locationText: 'Kuching, Sarawak • Fast Turnaround',
      trustTag: '34 YRS TRUST',
      disciplinesTag: 'Commercial • Offset • Digital • Packaging',
      yearsBadge: '34 YRS',
      kuchingBadge: 'KUCHING'
    },
    cataloguePage: {
      tag: 'EVERYTHING WE PRINT',
      title: 'Full product catalogue',
      desc: 'Grouped by category so it\'s easy to find what you need. Don\'t see it here? Ask us — we accept small quantity orders too.',
      commonFormats: 'Common formats:',
      viewDetails: 'View Details',
      enquire: 'Enquire',
      modalDetailsTitle: 'Category Details & Specifications',
      closeBtn: 'Close'
    },
    corporatePage: {
      tag: 'CORPORATE & INSTITUTIONAL',
      title: 'Annual reports, journals & corporate print, done to a standard we\'ve held for 34 years.',
      desc: 'Consistent, reliable printing for corporates, associations and schools — from a supplier that\'s been doing this in Kuching for over three decades.',
      quoteBtn: 'Request a Quote by Email',
      whatsappBtn: 'WhatsApp Us',
      whatWePrint: 'What we print',
      whatWePrintSub: 'Standardised corporate collateral produced to strict brand colour standards.',
      tagLine: 'AGMs • Publications • VIP Merchandise',
      items: [
        { title: 'Annual Reports', desc: 'FSC-certified papers, PUR perfect binding, spot UV and embossed covers for AGMs.' },
        { title: 'Journals & Booklets', desc: 'Academic, association and ministry publications with strict colour consistency.' },
        { title: 'Corporate Gifts', desc: 'Custom thermal tumblers, premium notebooks, metal pens, and umbrellas with logo.' },
        { title: 'Calendars & Diaries', desc: 'Desk tent calendars, wall planners, and executive leatherette weekly agendas.' },
        { title: 'Business Stationery', desc: 'Official letterheads, envelopes, NCR billing books, and corporate folders.' }
      ],
      pillar1: '34-year track record',
      pillar2: 'Consistent quality control',
      pillar3: 'In-house design team',
      guideBannerTitle: 'What to include in your annual report / corporate print brief',
      guideBannerSub: 'A short checklist before you send us your files.',
      readGuideBtn: 'Read the guide',
      sendRequirementsTitle: 'Send us your requirements',
      requestQuoteEmailBtn: 'Request a Quote by Email',
      orWhatsappBtn: 'Or WhatsApp Us'
    },
    partnerPage: {
      tag: 'FOR EVENT PLANNERS & ORGANISERS',
      title: 'Let\'s produce your next event together.',
      desc: 'We partner with event planners, corporate agencies, and conference coordinators in Kuching as a reliable, single-source production supplier — stage backdrops, pull-up banners, delegate passes, lanyards, programme booklets, and on-site setup, all under one roof.',
      cta: 'Discuss Event Production on WhatsApp',
      stageTag: 'CONFERENCE & EVENT STAGE',
      stageLoc: 'KUCHING VENUES (BCCK, HOTELS & EXPOS)',
      mockupSub: 'MAIN STAGE BACKDROP & BRANDING',
      mockupTitle: 'Borneo Business & Tech Summit',
      mockupSpec: 'Seamless Matte Tension Fabric • Anti-Glare Studio Proof',
      mockupVerified: 'Verified Prepress Print Proof',
      mockupFabric: 'STAGE BACKDROP',
      mockupFabricDesc: '20ft × 10ft Tension Fabric',
      mockupWelcome: 'PULL-UP BUNTINGS',
      mockupWelcomeDesc: 'Aluminum Base 85×200cm',
      mockupFoil: 'LANYARDS & PASSES',
      mockupFoilDesc: 'Satin Ribbon + RFID Badges',
      mockupRigging: 'ON-SITE RIGGING',
      mockupRiggingDesc: 'Same-Day Stage Setup',
      mockupFooter: 'Full event branding & production • Handled from large-format printing to stage setup',
      whatWeProduceTitle: 'What we produce for your corporate & public events',
      whatWeProduceSub: 'One dependable Kuching production supplier for your full event checklist, so your team isn\'t coordinating four separate vendors on top of everything else.',
      capabilities: [
        { title: 'Stage & Photo Backdrops', desc: 'High-res seamless tension fabric, heavy truss rigging, and media step-and-repeat backdrops.' },
        { title: 'Pull-Up Buntings & Roll-Ups', desc: 'Heavy-duty aluminum cassette bases with anti-curl synthetic substrate for clean presentation.' },
        { title: 'Delegate Badges & Lanyards', desc: 'Custom dye-sublimated satin ribbons with barcode/QR acrylic or PVC accreditation passes.' },
        { title: 'Event Programme Booklets', desc: 'Saddle-stitched A5 agendas, speaker directory brochures, and full-color abstract booklets.' },
        { title: 'Directional & Foam Board Signs', desc: '5mm rigid compressed foamboards for easel stands, registration desks, and foyer directions.' },
        { title: 'On-Site Delivery & Setup', desc: 'Experienced in-house crew delivers and sets up at your Kuching venue on schedule, not just curbside delivery.' }
      ],
      pillar1: '34 years in business',
      pillar2: 'Fast turnaround for tight timelines',
      pillar3: 'Preferred-vendor terms available',
      kitBadge: 'ALL-IN-ONE EVENT BUNDLE',
      kitTitle: 'Event Essentials Production Pack',
      kitDesc: 'Stage backdrop + pull-up banners + delegate passes + programme booklets + on-site Kuching setup, all in one coordinated quotation.',
      seeKitBtn: 'See the Kit',
      checklistTitle: 'Event Production Checklist: Print, Signage & Stage Setup',
      checklistSub: 'Share this with your committee so all artwork, sign-offs, and venue access permits stay on track.',
      readGuideBtn: 'Read the guide',
      bottomTitle: 'Ready to talk event partnership?',
      continueWhatsapp: 'Continue on WhatsApp',
      sendEmail: 'Send an Email'
    },
    aboutPage: {
      tag: 'ABOUT US',
      title: 'Three decades of print, one standard that hasn\'t slipped.',
      summary: 'Heng Sing Brothers Press is a one-stop offset & laser printer based in Kuching — design, print and on-site installation from a single supplier, for individuals, small businesses, corporates, schools, event organisers and government agencies across Kuching & Sarawak-wide.',
      pillar1: '34 Years',
      pillar1Sub: 'In operation',
      pillar2: 'Design → Print → Install',
      pillar2Sub: 'One supplier, start to finish',
      pillar3: 'Offset & Laser',
      pillar3Sub: 'Full printing capability',
      pillar4: 'Kuching & Sarawak-wide',
      pillar4Sub: 'Service area',
      storyTitle: 'Our story',
      storyP1: 'For 34 years, Heng Sing Brothers Press has been a full-service printer in Kuching — built around one idea: a client should be able to bring us a brief, not a finished file, and walk away with a finished job. That\'s why design, print and on-site installation all sit under one roof here, rather than being split across separate vendors.',
      storyP2: 'Over that time we\'ve printed for a genuinely broad base — individuals and walk-ins, small businesses and retail shops, corporates and GLCs, schools, event and wedding planners, government agencies, and other printers who send us their overflow and wholesale work. That range is deliberate: whether the job is 50 pieces or 5,000, it gets the same standard of finishing.',
      whatHasntChanged: 'WHAT HASN\'T CHANGED',
      point1: 'One supplier for design, print and installation — no juggling separate vendors.',
      point2: 'Small orders treated with the exact same care as bulk production runs.',
      point3: 'Reliable delivery schedules with no surprise fees or hidden costs.',
      whatWeDoTitle: 'What we do',
      whatWeDoSub: 'Design, print and on-site installation — handled in-house so you have one point of contact from start to finish.',
      designTitle: 'Design',
      designDesc: 'In-house design team. Bring a rough brief, a sketch, or an idea — we build the print-ready files.',
      printTitle: 'Print',
      printDesc: 'Offset & laser presses under one roof. Small digital runs from 50 pieces to bulk offset runs of tens of thousands.',
      installTitle: 'Install',
      installDesc: 'On-site installation anywhere in Kuching. Banners, backdrops, signs, vehicle graphics — set up and ready to go.',
      whoWePrintForTitle: 'Who we print for',
      whoWePrintForSub: 'Individuals to corporates to trade clients — the range is deliberate.',
      clientTypes: [
        { title: 'Individuals & Walk-ins', desc: 'Personal cards, custom gift boxes, photo printing, single-piece signs' },
        { title: 'Small Businesses & Retail', desc: 'Stickers, menus, uniform t-shirts, packaging, promotional flyers' },
        { title: 'Corporates & GLCs', desc: 'Annual reports, journals, desk calendars, diaries, branded merchandise' },
        { title: 'Schools & Associations', desc: 'Yearbooks, certificates, event banners, society t-shirts' },
        { title: 'Event & Wedding Planners', desc: 'Backdrops, invitations, favours, stage signage, on-site setup' },
        { title: 'Other Printers & Trade', desc: 'Overflow offset work, large-format finishing, wholesale print' }
      ],
      notSureTitle: 'Not sure which category your job fits?',
      notSureDesc: 'Just ask. We\'ll tell you the best way to print it, what it\'ll cost, and how long it\'ll take.',
      askWhatsapp: 'Ask us on WhatsApp',
      whyMattersTag: 'ABOUT OUR HERITAGE',
      establishedTag: 'Established 1990 • Kuching',
      whyMattersTitle: 'Why it matters that we\'ve been here 34 years',
      whyMattersDesc: 'A print shop that survives 34 years does so because it doesn\'t leave clients stranded with bad files, missed deadlines, or surprise bills. When you work with us, you\'re working with people who know how paper behaves, how inks dry in Sarawak\'s humidity, and how to get a job done right the first time.',
      bottomCtaTitle: 'Want to see if we\'re a fit for your project?',
      bottomCtaDesc: 'No account needed. Tell us what you need and we\'ll give you a straight answer.',
      requestQuoteBtn: 'Request a Quote',
      chatWhatsappBtn: 'Chat on WhatsApp'
    },
    quotePage: {
      tag: 'GET STARTED',
      title: 'Request a Quote',
      desc: 'Tell us what you need. No account required.',
      nameLabel: 'Your Name / Organization',
      namePlaceholder: 'e.g. Alex Wong / Sarawak Enterprise Sdn Bhd',
      contactLabel: 'WhatsApp Number or Email',
      contactPlaceholder: 'e.g. 012-3456789 or name@company.com',
      catLabel: 'Service / Item Category',
      qtyLabel: 'Estimated Quantity',
      qtyPlaceholder: 'e.g. 200 pcs, 5 boxes, 1000 copies',
      designHelpLabel: 'I need design & artwork help from your team',
      artworkLinkLabel: 'Google Drive / Dropbox Artwork Link (Optional)',
      uploadLabel: 'Or upload a sample / draft file (PDF, AI, JPG, PNG)',
      dropzoneText: 'Click to browse or drag file here',
      notesLabel: 'Additional Specifications or Requests',
      notesPlaceholder: 'e.g. Matte lamination, size A5, need delivered by next Friday in Kuching',
      whatsappBtn: 'Send via WhatsApp (Fastest Response)',
      emailBtn: 'Submit via Email Form',
      successTitle: 'Quote Request Submitted!',
      successDesc: 'Our Kuching production team will review your specifications and email you an official quote within 1 business day.',
      artworkSectionTitle: 'Artwork & Files',
      seeGuidelinesBtn: 'See artwork guidelines',
      uploadFileTitle: 'Upload design file',
      uploadFileSub: 'Drag & drop or click to browse',
      uploadFileFormats: 'PDF, AI, EPS, PSD, JPG, PNG (Max 50MB)',
      driveLinkTitle: 'Or paste file / Drive link',
      driveLinkPlaceholder: 'https://drive.google.com/... or Dropbox / WeTransfer link',
      driveLinkSub: 'Make sure anyone with the link has view or download access.',
      designHelpCheckbox: 'I don\'t have artwork — I need your design team to help build it',
      sendViaTitle: 'Send this to us via:',
      whatsappNote: 'Quickest response — we\'ll reply directly in your chat with pricing and delivery time.',
      quoteReceivedTitle: 'Quote Request Ready for hengsing@gmail.com',
      quoteReceivedDesc: 'Thank you! Your quotation details have been prepared and routed directly to hengsing@gmail.com.',
      whatsappImmediateBtn: 'Send via WhatsApp for Immediate Response',
      smallQuantityPersonal: 'Small Quantity / Personal Job',
      corporateReportOption: 'Corporate Annual Report / Journal',
      starterKitOption: 'Business Starter Kit',
      eventKitOption: 'Event Essentials Kit',
      customPackagingOption: 'Custom Packaging / Box Prototype',
      otherOption: 'Other / Not Sure'
    },
    guidesFaqPage: {
      tag: 'GUIDES & FAQ',
      title: 'Everything you need to know before you print',
      desc: 'Clear, jargon-free explanations for beginners, planners, and corporate purchasing officers alike.',
      quickAnswers: 'Quick answers',
      readGuideBtn: 'Read full guide →',
      guidesTitle: 'Guides',
      guidesSub: 'In-depth references to prepare your files and choose the best paper materials.',
      readyOrderTitle: 'Ready to order? Skip the guesswork.',
      readyOrderDesc: 'Check out the Business Starter Kit or the Event Essentials Kit — grouped items, transparent specs.',
      seeKitsBtn: 'See the Kits',
      faqs: [
        {
          question: 'Do you accept small orders? What is the minimum quantity?',
          answer: 'Yes, absolutely. We have dedicated digital production presses specifically for short runs (even 50 or 100 pieces of business cards, single banner prints, or 10 customized t-shirts). You do not need to order thousands to print with us.'
        },
        {
          question: 'Can you help design my artwork if I only have an idea or logo?',
          answer: 'Yes! Heng Sing has an in-house graphic prepress and creative team based right here in our Kuching factory. If you do not have print-ready vector files, simply bring us your brief, sketch, or Word document and we will compose a clean, press-ready file.'
        },
        {
          question: 'Do you deliver and install outside of Kuching city center?',
          answer: 'We deliver throughout Kuching and handle on-site installation for event backdrops, store signboards, and exhibition booths. For other Sarawak divisions (Sibu, Bintulu, Miri, Sri Aman), we ship daily via reliable freight and bus logistics.'
        },
        {
          question: 'How fast can I get my printed order?',
          answer: 'Standard turnaround for digital prints (cards, stickers, banners) is 1–3 working days. Bulk offset production runs (annual reports, NCR books, custom packaging boxes) generally require 5–7 working days depending on finishing steps.'
        }
      ],
      guides: [
        {
          id: 'artwork-guide',
          title: 'Design & Artwork Guidelines',
          desc: 'Colour mode, resolution, bleed and file specs before you submit artwork.',
          category: 'Prepress',
          readTime: '3 min read'
        },
        {
          id: 'paper-basics',
          title: 'Paper & Material Basics',
          desc: 'GSM/weight explained, matte vs. glossy vs. specialty stock in plain English.',
          category: 'Materials',
          readTime: '4 min read'
        },
        {
          id: 'printing-methods',
          title: 'Choosing a Printing Method',
          desc: 'Offset vs. digital vs. large-format/solvent, explained simply.',
          category: 'Methods',
          readTime: '5 min read'
        }
      ]
    },
    guidelinesPage: {
      backToGuides: 'Back to Guides & FAQ',
      tag: 'DESIGN & ARTWORK GUIDELINES',
      title: 'Preparing your artwork for print — the essentials',
      desc: 'Follow these specs and your file goes straight to print with no back-and-forth. Not sure about something, or don\'t have print-ready artwork yet? Message our design team — we\'re happy to check a file before you commit to an order.',
      metricCmyk: 'Colour mode',
      metricCmykSub: 'Not RGB',
      metricDpi: 'Standard resolution',
      metricDpiSub: '150 for banners',
      metricBleed: 'Bleed, all edges',
      metricBleedSub: 'On all 4 edges',
      metricSafe: 'Safe zone inside trim',
      metricSafeSub: 'Keep content inside',
      metricFont: 'Minimum text size',
      metricFontSub: '0.25pt min stroke',
      metricPdf: 'Preferred file format',
      metricPdfSub: 'Fonts outlined',
      generalTitle: 'General Guidelines',
      generalSub: 'These four apply to every job we print, whatever it is.',
      colourModeTitle: 'Colour mode',
      colourModeP1: 'Set your artwork to CMYK before you export — not RGB, and not spot/Pantone colour unless we\'ve agreed on a specific spot-colour job (like foiling). RGB files look correct on screen but shift unpredictably once printed, which is the single most common cause of "the colour doesn\'t match" complaints.',
      colourModeBullet1: 'For a true rich black on large solid areas, use C40 M30 Y30 K100 rather than plain K100, which can print flat and slightly grey.',
      colourModeBullet2: 'For body text and fine lines, use plain K100 only — a rich-black recipe will blur or "fringe" at small sizes.',
      colourModeBullet3: 'Keep total ink coverage under roughly 240% (C+M+Y+K combined) on any one spot — heavier coverage can crack, smudge, or dry slowly.',
      colourModeBullet4: 'Avoid tints below 10% — very light values often don\'t hold on press and can drop out entirely.',
      blackAtGlance: 'BLACK, AT A GLANCE',
      richBlackLabel: 'Rich black — C40 M30 Y30 K100',
      richBlackUse: 'Large solid backgrounds, dark photos',
      plainBlackLabel: 'Plain black — K100 only',
      plainBlackUse: 'Body text, thin lines, small type',
      resTitle: 'Resolution & image quality',
      resStandard: '300 DPI — standard',
      resStandardDesc: 'Business cards, flyers, booklets, stickers, packaging — anything viewed up close.',
      resLarge: '150 DPI — large format',
      resLargeDesc: 'Banners, backdrops, large signage viewed from a distance — full 300 DPI just bloats the file.',
      resLine: '1200 DPI — line art',
      resLineDesc: 'Scanned logos, signatures and black-and-white line drawings, so edges stay crisp, not jagged.',
      resAlert: 'Whatever the DPI, keep placed photos in CMYK mode — an RGB photo pasted into an otherwise-CMYK file is the most common reason a proof comes back looking duller or shifted from what you expected on screen.',
      textLineTitle: 'Text & line weight',
      textLineBullet1: 'Minimum text size: 4pt for regular printing.',
      textLineBullet2: 'Foil / hot-stamp text: 10pt minimum, bold sans-serif fonts read best.',
      textLineBullet3: 'Outline (convert to curves) any font below 5pt that isn\'t bold, so it doesn\'t blur.',
      textLineBullet4: 'Minimum line weight: 0.25pt — thinner lines may not hold on press.',
      textLineBullet5: 'Avoid small light-coloured text reversed out of a dark background — it can fill in and become unreadable.',
      fileFormatsTitle: 'File formats we accept',
      fileFormatsBullet1: 'PDF (print-ready, fonts embedded or outlined) — preferred for almost every job.',
      fileFormatsBullet2: 'AI, EPS and high-resolution TIFF/JPG/PNG are also fine.',
      fileFormatsBullet3: 'Flatten transparency and layer effects before exporting.',
      fileFormatsBullet4: 'A Word, PowerPoint or low-res web export usually isn\'t print-ready — send the original design file if that\'s what you have, or let us rebuild it.',
      bleedSectionTag: 'ARTWORK FILE PREPARATION',
      bleedSectionTitle: 'Bleed, trim & safe zone',
      bleedSectionSub: 'The three measurements that decide whether a file is print-ready — get these right and there\'s nothing else to check.',
      bleedBadge: 'Bleed edge (+5mm)',
      trimBadge: 'Trim line (final cut size)',
      safeBadge: 'Safe zone (−5mm)',
      safeKeepLogos: 'Keep logos & text inside this line',
      bleedExpl: 'Bleed is extra artwork that extends 5mm past the trim line on every edge — it stops thin white slivers from appearing at the edge if the cut shifts slightly. Trim is the final, cut size of the piece. Safe zone is a 5mm margin inside the trim line — keep logos, text and anything important inside it, since content right at the trim edge risks being cut off.',
      tableHeaderItem: 'ITEM',
      tableHeaderTrim: 'FINAL (TRIM)',
      tableHeaderBleed: 'WITH BLEED',
      customSizesNote: 'Custom sizes? Send us the exact trim size and we\'ll confirm the bleed for your job.',
      detailedSpecsTitle: 'Detailed Specification Guides',
      noArtworkYetTitle: 'Don\'t have print-ready artwork yet?',
      noArtworkYetDesc: 'Our in-house design team can build it from your brief — or check a file you already have.',
      requestQuoteBtn: 'Request a Quote',
      chatWhatsappBtn: 'Chat on WhatsApp',
      accordion: [
        {
          id: 'orientation',
          title: 'Artwork Orientation',
          content: 'Always design your front and back artwork in the same orientation (both portrait or both landscape). If a piece is flipped 90 degrees in the file, it may print upside down on duplex offset presses.'
        },
        {
          id: 'booklet',
          title: 'Booklet Artwork & Page Count',
          content: 'For saddle-stitched booklets (stapled spine), total page count must be a multiple of 4 (e.g. 8, 12, 16, 24, 32 pp). Supply as single consecutive PDF pages with 5mm bleed, not printer spreads. We impose pages automatically.'
        },
        {
          id: 'stickers',
          title: 'Sticker Preparation & Cut Lines',
          content: 'For die-cut or kiss-cut stickers, place your cut contour on a separate top layer named "CutContour" as a 100% Magenta 0.5pt vector stroke. Keep artwork extending 2mm past the cut line for bleed.'
        },
        {
          id: 'packaging',
          title: 'Packaging & Boxes Die-Lines',
          content: 'Packaging dielines should indicate cut lines in solid red and fold/crease lines in dashed green. Request our standard CAD dieline templates before starting your package graphic layout.'
        },
        {
          id: 'foil-uv',
          title: 'Foil Stamping & Spot UV Mask Layers',
          content: 'Supply your foil or Spot UV elements on a separate layer or file set to 100% Solid Black (K100) vector only. Do not use gradients, feathering, or transparency on foil mask channels.'
        },
        {
          id: 'running-numbers',
          title: 'Running Numbers & Perforations (NCR Books)',
          content: 'Clearly indicate the position and font size of serial numbers for receipt and invoice books. We support 6-digit red or black sequential mechanical numbering.'
        }
      ]
    },
    footer: {
      addressTitle: 'Production Facility',
      addressText: 'No. 37, Lot 75, Section 63, 1st Floor, Jalan Chan Bee Kiew, 93450 Kuching, Sarawak',
      contactTitle: 'Direct Contact',
      siteTitle: 'Navigation',
      languageTitle: 'Language / 语言 / Bahasa',
      languageHelp: 'Choose your preferred language across the website. Switch anytime.',
      currentLabel: 'Current Language',
      sarawakTrilingual: 'Sarawak Tri-Lingual Edition • English / 中文 / Bahasa Melayu'
    },
    firstTimeModal: {
      welcome: 'Welcome to Heng Sing Brothers Press',
      choosePrompt: 'Please select your preferred language',
      subPrompt: 'Commercial and institutional offset printing in Kuching, Sarawak since 1990.',
      confirmBtn: 'Continue with Selected Language',
      changeLaterNote: 'You can change your language anytime at the bottom of any page.',
      enName: 'English',
      enDesc: 'Official business and technical specifications',
      zhName: '中文 (华语)',
      zhDesc: '砂拉越古晋逾34年老字号专业印刷厂',
      msName: 'Bahasa Melayu',
      msDesc: 'Percetakan Komersial & Pembekal Berdaftar Kerajaan'
    },
    categories: {
      'business-essentials': {
        name: 'Business Essentials',
        shortDesc: 'Business cards, letterhead, envelopes, invoice books',
        badge: 'Single & Bulk Runs',
        description: 'Crisp stationery tailored for growing SMEs and established enterprises. From 100 name cards to 10,000 multi-part duplicate invoice books with sequential numbering.',
        items: ['Business cards', 'Letterhead', 'Envelopes', 'Invoice & Receipt NCR books', 'Corporate folders']
      },
      'packaging-boxes': {
        name: 'Packaging & Boxes',
        shortDesc: 'Gift boxes, product packaging, custom sizes',
        badge: 'Custom Structural Cuts',
        description: 'Custom structural die-cutting, folding cartons, food packaging sleeves, and gift boxes. Prototype a single box or produce full retail production runs.',
        items: ['Gift boxes', 'Product packaging', 'Custom die-cut boxes', 'Food grade sleeves', 'Rigid keepsake boxes']
      },
      'signage-large-format': {
        name: 'Signage & Large Format',
        shortDesc: 'Banners, backdrops, buntings, on-site installation',
        badge: 'Includes On-Site Setup',
        description: 'High-resolution solvent and UV wide-format printing for outdoor durability and indoor vibrancy. We don\'t just print—we provide on-site installation anywhere in Kuching.',
        items: ['Banners', 'Backdrops', 'Buntings & roll-up stands', 'Acrylic shop signage', 'On-site installation']
      },
      'apparel-fabric': {
        name: 'Apparel & Fabric',
        shortDesc: 'T-shirts, uniforms, fabric printing, tote bags',
        badge: 'Silk Screen & Heat Press',
        description: 'Durable apparel printing across 100% cotton, dri-fit microfibre, and canvas. Ideal for corporate sports days, school societies, staff uniforms, and promotional merchandise.',
        items: ['Custom T-shirts', 'Corporate uniforms', 'Sublimation jerseys', 'Cotton canvas tote bags', 'Embroidery']
      },
      'promotional-gifts': {
        name: 'Promotional & Corporate Gifts',
        shortDesc: 'Branded merchandise, event giveaways, executive kits',
        badge: 'Laser Engraved & UV Printed',
        description: 'Turn your logo into daily brand impressions. Precision UV cylindrical printing on tumblers, laser engraving on metal pens, and custom debossed leather journals.',
        items: ['Insulated thermal flasks', 'Branded ceramic mugs', 'Metal engraved pens', 'Executive PU leather diaries', 'Umbrellas']
      },
      'photo-canvas': {
        name: 'Photo & Canvas Printing',
        shortDesc: 'Framed prints, canvas, photo products',
        badge: 'Archival Fade-Proof Inks',
        description: 'Museum-grade wide colour gamut photo printing on real woven cotton canvas and fine art photo papers. Hand-stretched over solid kiln-dried wooden stretcher bars.',
        items: ['Stretched artist canvas', 'Framed museum prints', 'Photobooks', 'Acrylic floating prints', 'Foam board mounts']
      },
      'stickers-labels': {
        name: 'Stickers & Labels',
        shortDesc: 'Product labels, custom stickers, any shape',
        badge: 'Any Custom Shape or Contour',
        description: 'Precision optical contour cutting for any sticker shape. Available in waterproof synthetic vinyl, kraft paper, metallic foil, and clear transparent substrate.',
        items: ['Waterproof vinyl labels', 'Die-cut / kiss-cut sheets', 'Roll labels for packaging', 'Foil stamped stickers', 'Transparent labels']
      },
      'souvenirs': {
        name: 'Souvenirs & Keepsakes',
        shortDesc: 'Wedding favours, corporate keepsakes, certificates',
        badge: 'Foil & Emboss Finishing',
        description: 'Make milestone events unforgettable with gold foil hot-stamped wedding suites, custom laser-engraved wooden keepsakes, and foil-crested certificates.',
        items: ['Wedding invitation sets', 'Door gifts & favours', 'Certificates of appreciation', 'Custom acrylic trophies', 'Event badges']
      }
    }
  },
  zh: {
    common: {
      brandName: '恒成兄弟印务有限公司',
      brandSub: '商业、机构与官方特许印刷厂',
      sarawakLocation: '砂拉越古晋',
      registeredPrinter: '砂拉越政府注册承印商 • 创立于1990年',
      estYear: '立足砂拉越逾34载',
      requestQuote: '索取即时报价',
      chatWhatsapp: 'WhatsApp 专人咨询',
      backToTop: '返回顶部',
      exploreRange: '查看完整印刷方案',
      contactUs: '联系我们',
      viewGuidelines: '查看文件交印规范',
      allRightsReserved: '恒成兄弟印务有限公司 版权所有。砂拉越古晋。',
      currentLanguageLabel: '当前语言',
      selectLanguage: '选择浏览语言'
    },
    nav: {
      home: '首页',
      catalogue: '产品目录',
      corporate: '机构与企业印刷',
      guides: '交印指南与常见问答',
      partner: '业务合作',
      about: '关于恒成',
      quoteButton: '索取即时报价',
      whatsappButton: 'WhatsApp 咨询'
    },
    hero: {
      heritageTag: '创立于1990年 • 砂拉越古晋 • 州政府注册承印商',
      headlinePart1: '精工品质印刷，无论订单大小 —',
      headlinePart2: '数量不拘，严谨如一。',
      subheadline: '一站式自营设计、印刷与古晋现场安装。无论小额试做还是工业级大批量，我们均以同等严谨的标准为您交付高品质印刷品。',
      ctaWhatsapp: '通过 WhatsApp 咨询',
      ctaQuote: '索取即时报价',
      stat1Val: '34+',
      stat1Label: '年自营实体厂房',
      stat2Val: '自营团队',
      stat2Label: '专业排版设计协助',
      stat3Val: '现场安装',
      stat3Label: '全古晋招牌舞台施工',
      stat4Val: '无需低消',
      stat4Label: '支持小额试印与大宗生产'
    },
    whyUs: {
      tag: '选择恒成的优势',
      title: '专为各类规模订单量身打造。',
      desc: '从小批量高精度个性化印刷，到十万级工业轮转与大宗胶印，我们皆有完备自营设备与丰富经验，并配有专业排版设计和现场安装支持。',
      feature1Title: '驻厂设计排版协助',
      feature1Desc: '尚无成熟设计稿？我们的专业排版团队可协助您规范编排交印文件。',
      feature2Title: '小批量至超大宗订单',
      feature2Desc: '无需担心最低起订量限制，大宗印刷更是我们的专长，灵活兼顾。',
      feature3Title: '现场专业安装与配送',
      feature3Desc: '印刷不止于纸面。我们在古晋本地提供招牌、展架、舞台背板及车身贴膜安装。'
    },
    smeBanner: {
      tag: '新创中小企业专享计划',
      title: '新店开张或启动新业务？',
      desc: '企业开业基础套装：精印名片 + 官方信头纸 + 基础招牌展架 + 品牌贴纸，一站式特惠打包价。专为暂不需要大批量的创业者量身定制。',
      cta: '查看开业套装'
    },
    fullRange: {
      badge: '商业印刷全系目录',
      title: '全方位印刷项目',
      subtitle: '探索企业日常必备文具套装与各领域专业商业印制工序',
      viewFullCat: '查看全系目录 →',
      featuredBundle: '精选企业形象套装',
      singleAndBulk: '单品与大宗印制',
      bizEssentialsTitle: '企业必备文具套装',
      bizEssentialsDesc: '专为成长型中小企业与成熟企事业单位打造的完整视觉识别文具方案。单次统一精准校色，全面满足日常办公与对外商务需求。',
      configureBizBundle: '配置企业文具套装',
      enquire: '咨询规格',
      customFormatTitle: '需要特殊定制规格？',
      customFormatDesc: '异形模切、特殊折页、烫金击凸或个性化打样小批量——我们直接为您核算报价。',
      customFormatCta: '提交定制需求',
      whatsappReady: '支持 WhatsApp 直接沟通'
    },
    activeDiscipline: {
      tag: '当前选中印刷工序',
      customQuoteFor: '索取报价：',
      noJobTooSmall: '不计单小，悉心承印 — 诚意承接小批量定制订单'
    },
    cmykPlateDemo: {
      badge: '34年胶印套准工艺',
      title: '四色分色版如何精准套准呈现恒成品牌标识',
      desc: '在精密商业印刷中，品牌标识被分解为青色(C)、品红(M)、黄色(Y)与黑版(K)四块独立印版。滑动下方套准控制器，体验恒成印刷师傅如何将印版校准至 ±0.01mm 的极致公差。',
      cyan: '青色 (Cyan)',
      magenta: '品红 (Magenta)',
      yellow: '黄色 (Yellow)',
      keyBlack: '黑版 (Key Black)'
    },
    corporateSection: {
      badge: '机构、政府与企事业单位',
      title: '企业年报、学术期刊及定制礼品',
      desc: '股东大会年报、学会学术期刊、政府出版物、行政日记本及高档商务礼品，严格恪守古晋三十余年来从未松懈的品质标准。',
      reportsBullet: '精装硬壳与PUR环保热熔胶装年报',
      journalsBullet: '公会与高校同行评审学术出版物',
      giftsBullet: '激光雕刻保温杯、PU皮质笔记本及VIP高档礼盒',
      ctaBtn: '探索完整机构特制系列'
    },
    trustProof: {
      tag: '政府与机构信赖',
      title: '深受客户信赖',
      subtitle: '从砂拉越公立重点大学、州政府部门到南北市政局，各大企事业单位与机构三十余载长期信赖恒盛印务的精准色彩与高品质出品。',
      procurementBadge: '符合政府部门及各大高校官方采购与招投标标准',
      statYears: '34+ 载',
      statYearsLabel: '立足古晋始终如一的品质保障',
      statClients: '严谨色彩校准',
      statClientsLabel: 'FOGRA51高保真分色与装订质检',
      statDelivery: '直达校园与机构',
      statDeliveryLabel: '覆盖全砂各行政区稳妥交付',
      viewCorporateCta: '咨询机构批量印刷与招标合作'
    },
    guidesPromo: {
      tag: '初次接触印刷？',
      title: '从我们编写的指南开始',
      guide1Title: '纸张与材质基础知识',
      guide1Desc: '克重(GSM)、哑光与亮光涂布的实际应用场景解析。',
      guide2Title: '如何选择最适合的印刷工艺',
      guide2Desc: '胶印、数码快印与大幅面写真喷绘的区别与成本对比。',
      guide3Title: '订购流程与最低起印量说明',
      guide3Desc: '是的，我们热情承接小批量订单 — 了解具体下单流程。'
    },
    card3D: {
      brandTag: '恒成兄弟印务有限公司',
      estTag: '砂拉越政府注册 • 创立于1990',
      fograTag: 'FOGRA51 色彩校准',
      ctaTag: '精印 • 包装 • 招牌',
      ctaTitle: '即刻联系我们，打造您的专属品牌与产品包装',
      phoneText: 'WhatsApp: +60 13-328 2828',
      locationText: '砂拉越古晋 • 交付迅速可靠',
      trustTag: '34载信赖',
      disciplinesTag: '商业胶印 • 数码快印 • 精品包装',
      yearsBadge: '34载',
      kuchingBadge: '古晋'
    },
    cataloguePage: {
      tag: '全品类印刷服务',
      title: '全系列产品与工序目录',
      desc: '按类别清晰归类，方便您快速查找所需项目。未找到心仪规格？欢迎随时联系我们 — 我们同样支持小批量定制。',
      commonFormats: '常见制作规格与形式：',
      viewDetails: '查看详情与工艺',
      enquire: '咨询此项目',
      modalDetailsTitle: '规格详情与工艺实样',
      closeBtn: '关闭'
    },
    corporatePage: {
      tag: '机构、政府与企事业单位',
      title: '三十四载如一日，严谨交付年度报告、学术会刊与高端企业礼品。',
      desc: '为砂拉越各企业、专业学会、社团公会与学校提供色彩严谨、交付可靠的一站式印刷服务 — 源自立足古晋三十余载的老字号承印商。',
      quoteBtn: '通过电邮索取正式公函报价',
      whatsappBtn: 'WhatsApp 专人直接对接',
      whatWePrint: '常规承印项目',
      whatWePrintSub: '严格遵循品牌企业色彩规范制作的统一商务纸品与礼品。',
      tagLine: '股东大会 • 学术出版 • VIP尊享礼遇',
      items: [
        { title: '年度财务与审计报告', desc: 'FSC环保认证特种纸，PUR热熔平装与精装锁线，封面局部亮光UV与浮雕烫印。' },
        { title: '期刊论文与纪念特刊', desc: '高校学报、公会年会纪念特刊与政府部门指南，多批次严谨色差管控。' },
        { title: '定制企业商务礼品', desc: '不锈钢真空保温杯、高档烫印笔记本、金属商务圆珠笔、防风logo雨伞。' },
        { title: '桌历、挂历与日程本', desc: '台历三角支架、大幅面墙挂日程表及行政皮质年历周计划本。' },
        { title: '全套商务公文纸品', desc: '官方信头纸、公文大信封、多联无碳复写单据账本、企业高档文件封套。' }
      ],
      pillar1: '34年实体承印信誉',
      pillar2: '严苛色彩一致性质检',
      pillar3: '厂内驻场资深设计团队',
      guideBannerTitle: '准备企业年报与重要商务文件时需要注意的事项',
      guideBannerSub: '交印稿件前的一份实用核对清单。',
      readGuideBtn: '阅读交印指南',
      sendRequirementsTitle: '向我们发送您的印制需求',
      requestQuoteEmailBtn: '通过电邮索取正式报价',
      orWhatsappBtn: '或通过 WhatsApp 联系我们'
    },
    partnerPage: {
      tag: '活动策划与展会公关合作',
      title: '携手打造您的下一场大型峰会与公关盛典。',
      desc: '作为古晋众多大型行业峰会、商业博览会、企业发布会及政府盛典策划团队的实体生产后盾，我们提供主舞台巨幅背板、铝合金易拉宝、参会胸卡挂绳、流程指南手册、会场导视展板及古晋全境现场专业搭建。',
      cta: '在 WhatsApp 洽谈活动物料制作',
      stageTag: '大型会议与行业峰会舞台',
      stageLoc: '古晋各大展馆及会场 (BCCK / 酒店宴会厅)',
      mockupSub: '主舞台及全套盛会物料制作',
      mockupTitle: '砂拉越商业与数字科技峰会',
      mockupSpec: '防眩光无缝弹力布 • 铝合金重型底座 • 展会现场快速就绪',
      mockupVerified: '数码打样校色通过',
      mockupFabric: '主舞台巨幅背板',
      mockupFabricDesc: '20英尺 × 10英尺 铝合金桁架',
      mockupWelcome: '铝合金易拉宝展架',
      mockupWelcomeDesc: '85cm × 200cm 防卷哑光合成纸',
      mockupFoil: '参会胸卡与热升华挂绳',
      mockupFoilDesc: '全彩缎带 + 独立QR码亚克力胸卡',
      mockupRigging: '专业团队现场搭建',
      mockupRiggingDesc: '当天提前进场，牢固组装',
      mockupFooter: '大型公关活动全套物料自营生产 • 涵盖巨幅喷绘、会议纸品至场地现场搭建',
      whatWeProduceTitle: '我们为您的企业盛典与行业展会呈现哪些物料',
      whatWeProduceSub: '一站式对接完整物料清单，省去您在多家印刷厂与广告制作部之间重复协调的精力。',
      capabilities: [
        { title: '舞台与照相区巨幅背板', desc: '无缝防反光弹力布桁架背板、媒体签到采访墙，现场摄影不反光。' },
        { title: '铝合金易拉宝与展架', desc: '加厚铝合金伸缩底座、高密防卷曲合成纸，随附便携加厚外袋。' },
        { title: '嘉宾胸卡与热升华挂绳', desc: '双面全彩热升华缎带、安全扣与高透可变数据防伪QR Code胸卡。' },
        { title: '大会日程画册与指南', desc: 'A5全彩骑马钉流程手册、主讲嘉宾介绍与论文摘要精印。' },
        { title: '会场导视水牌与KT展板', desc: '5mm高密加硬KT板/PVC微发泡板，适于迎宾水牌、分论坛指示。' },
        { title: '古晋市区现场送达与搭建', desc: '经验丰富的专业搭建团队直达会场，严格遵守时间节点进场组装。' }
      ],
      pillar1: '34年古晋实体老字号',
      pillar2: '紧急排期快速响应出件',
      pillar3: '常年合作特惠与优先结账条款',
      kitBadge: '盛会一站式套餐',
      kitTitle: '大型展会与会议必备物料包',
      kitDesc: '主舞台背景板 + 4套铝合金易拉宝 + 200套挂绳胸卡 + 200本大会日程手册 + 古晋现场送货搭建，一次性省心全包报价。',
      seeKitBtn: '查看活动物料包',
      checklistTitle: '大型会议与公关活动筹备核对清单：印刷物料、展板及现场搭建',
      checklistSub: '供组委会与策划团队核对各阶段截稿与进场节点，确保万无一失。',
      readGuideBtn: '阅读筹备指南',
      bottomTitle: '准备好洽谈您的下一场活动物料了吗？',
      continueWhatsapp: '通过 WhatsApp 快速洽谈',
      sendEmail: '发送正式商务电邮'
    },
    aboutPage: {
      tag: '关于恒成',
      title: '三十四载如一日，精工品质，初心未改。',
      summary: '恒成兄弟印务有限公司是扎根砂拉越古晋的一站式胶印与数码快印实体企业。集设计排版、高精印刷与全古晋现场施工于一体，常年服务于个人、中小微商户、大型企事业单位、各级院校、社团公会及政府部门。',
      pillar1: '34 年',
      pillar1Sub: '自营实体厂房经验',
      pillar2: '设计 → 印刷 → 现场安装',
      pillar2Sub: '一站式全自营，省时省心',
      pillar3: '海德堡胶印与数码激光',
      pillar3Sub: '工业级大宗与小量快印兼备',
      pillar4: '古晋及全砂拉越配送',
      pillar4Sub: '业务辐射全砂',
      storyTitle: '恒成的故事',
      storyP1: '34年来，恒成兄弟印务始终坚持一个理念：客户只需带着构思或需求前来，即便没有排版文件，也能安心拿到完美的印刷成品。正因如此，我们将排版设计、印刷生产与现场安装融为一体，免除客户在不同外包商之间奔波沟通的烦恼。',
      storyP2: '三十余年间，我们的客户群涵盖广泛 — 从个人上门散客、零售小微商户，到大型跨国企业、学校、婚庆策划师、政府部门，乃至同行批发的代工外发单。无论订单是50份还是数万件，我们均以同等严苛的标准完成印后装订与质检。',
      whatHasntChanged: '我们从未改变的坚守',
      point1: '设计、印刷与安装一站自营，无需在多家供应商之间周旋。',
      point2: '小额订单与大宗批量享受同等细致的品质对待与校色把控。',
      point3: '交期守信踏实，绝无任何隐藏附加费用或模糊收费。',
      whatWeDoTitle: '我们的一站式服务',
      whatWeDoSub: '设计排版、印刷制作及现场安装 — 厂内全流程自营闭环，全程专人一对一对接。',
      designTitle: '印前排版设计',
      designDesc: '厂内资深设计团队。无论您带着初步构想、草图还是文字资料 — 我们都能将其转化为符合上机标准的印刷完稿。',
      printTitle: '精密印刷生产',
      printDesc: '大型胶印机与数码激光快印机齐备。从50份的紧急数码短版印刷，到数万份的大宗商业胶印生产，游刃有余。',
      installTitle: '现场配送安装',
      installDesc: '覆盖全古晋市区的专业现场安装。广告条幅、活动背板、户外招牌、车体贴画 — 运送并组装稳固，随时交付使用。',
      whoWePrintForTitle: '我们的服务客户群体',
      whoWePrintForSub: '从个人散客、中小型商户到大型集团与同行批发代工 — 丰富多样的客户基础是我们实力的见证。',
      clientTypes: [
        { title: '个人客户与上门散客', desc: '个性化名片、定制礼品盒、照片画册、单件展示牌' },
        { title: '中小微企业与零售商户', desc: '不干胶贴纸、餐饮菜单、工作服T恤、产品纸盒包装、促销传单' },
        { title: '大型企业与政府关联公司', desc: '年度财务报告、学术期刊、高档桌历挂历、商务记事本、品牌礼品' },
        { title: '大中小学与社团公会', desc: '毕业年刊、荣誉奖状证书、活动条幅横幅、社团统一服装' },
        { title: '婚庆公关与活动策划师', desc: '拍照背板、高定请柬、宾客伴手礼盒、舞台标识、现场搭建' },
        { title: '同行印刷厂与广告批发商', desc: '超负荷大单代工、大幅面后道加工、批发纸品印刷代发' }
      ],
      notSureTitle: '不确定您的印品属于哪类工艺？',
      notSureDesc: '直接咨询我们即可。我们将为您推荐最具性价比的工艺方案、透明报价以及准确制作工期。',
      askWhatsapp: '在 WhatsApp 直接咨询',
      whyMattersTag: '源自三十四年的坚守',
      establishedTag: '创立于1990年 • 砂拉越古晋',
      whyMattersTitle: '为什么我们坚持34年实体经营如此重要',
      whyMattersDesc: '一家印刷厂能在古晋风雨兼程稳健立足34年，靠的是从不让客户因文件瑕疵延误交期、因工艺失误损耗物料或遭遇隐形加价。与我们合作，您对接的是真正熟悉各类纸张韧性、深刻理解砂拉越湿热气候油墨干燥特性、并力求首印即成的行家里手。',
      bottomCtaTitle: '想了解我们是否适合您的项目？',
      bottomCtaDesc: '无需注册账号。告诉我们您的需求，我们将为您提供切实可靠的专业解答。',
      requestQuoteBtn: '索取报价单',
      chatWhatsappBtn: '在 WhatsApp 交流'
    },
    quotePage: {
      tag: '开启印刷',
      title: '索取正式印刷报价',
      desc: '告诉我们您的印制需求，无需注册账号，专人即刻跟进。',
      nameLabel: '您的姓名 / 机构名称',
      namePlaceholder: '例如：王先生 / 砂拉越实业有限公司',
      contactLabel: 'WhatsApp 电话或电子邮箱',
      contactPlaceholder: '例如：012-3456789 或 alex@company.com',
      catLabel: '印刷项目类别',
      qtyLabel: '预估印制数量',
      qtyPlaceholder: '例如：200张、5盒、1000本',
      designHelpLabel: '我需要恒成专业团队协助设计与排版',
      artworkLinkLabel: 'Google Drive 或网盘设计文件链接（选填）',
      uploadLabel: '或直接上传样品/草图文件 (PDF, AI, JPG, PNG)',
      dropzoneText: '点击浏览或将文件拖曳至此',
      notesLabel: '其他制作要求或备注',
      notesPlaceholder: '例如：要求双面哑膜、尺寸A5、需要在下周五前送达古晋市区',
      whatsappBtn: '通过 WhatsApp 快速发送（最快获得回复）',
      emailBtn: '提交电邮正式报价请求',
      successTitle: '报价请求已成功提交！',
      successDesc: '我们的古晋印务团队将审核您的规格要求，并在1个工作日内向您发送正式报价单。',
      artworkSectionTitle: '设计图稿与文件准备',
      seeGuidelinesBtn: '查看文件规范',
      uploadFileTitle: '上传设计稿文件',
      uploadFileSub: '拖放文件至此或点击浏览选择',
      uploadFileFormats: '支持 PDF, AI, EPS, PSD, JPG, PNG (最大50MB)',
      driveLinkTitle: '或粘贴网盘文件分享链接',
      driveLinkPlaceholder: 'https://drive.google.com/... 或 Dropbox / WeTransfer 链接',
      driveLinkSub: '请确保开启“任何拥有链接者均可查看或下载”权限。',
      designHelpCheckbox: '我目前没有设计完稿 — 需要恒成驻厂设计师协助排版',
      sendViaTitle: '选择提交方式：',
      whatsappNote: '最快速的回复方式 — 我们将直接在聊天窗口中向您提供准确报价与工期。',
      quoteReceivedTitle: '报价需求已生成并定向至 hengsing@gmail.com',
      quoteReceivedDesc: '非常感谢！您的印制需求已直接整理并定向至 hengsing@gmail.com，团队将尽快与您联系。',
      whatsappImmediateBtn: '通过 WhatsApp 发送以获得即时回复',
      smallQuantityPersonal: '小批量 / 个人定制印品',
      corporateReportOption: '企业年报 / 学术期刊会刊',
      starterKitOption: '企业开业文具启航包',
      eventKitOption: '盛典活动必备物料包',
      customPackagingOption: '定制纸盒包装 / 打样样品',
      otherOption: '其他类别 / 尚不确定'
    },
    guidesFaqPage: {
      tag: '指南与常见问答',
      title: '印刷前您需要了解的全部要点',
      desc: '通俗易懂的专业说明，专为初学者、活动策划师与企业采购人员精心整理。',
      quickAnswers: '常见热点问答',
      readGuideBtn: '阅读完整指南 →',
      guidesTitle: '印刷实务指南',
      guidesSub: '深入浅出的参考手册，助您规范准备文件并挑选最理想的纸张材质。',
      readyOrderTitle: '准备好下单了吗？省去繁琐摸索。',
      readyOrderDesc: '探索“企业开业启航包”或“盛典物料必备包” — 整合套餐，明码实价，省时放心。',
      seeKitsBtn: '查看精选套餐',
      faqs: [
        {
          question: '你们接受小批量订单吗？最低起印量是多少？',
          answer: '是的，完全可以！我们配有专业数码印刷生产线，专门承接几十份的小额订单（无论是50张名片、单张宣传海报，还是10件活动T恤）。您完全不需要订购成千上万件即可享受高品质印刷。'
        },
        {
          question: '如果我只有想法或Logo草图，你们能帮忙排版设计吗？',
          answer: '当然可以！恒成在古晋厂内设有专业的印前图形设计团队。即使您没有印刷完稿，只要带上文字资料、草图或参考样例，我们的设计师即可为您规范排版并输出标准印前格式。'
        },
        {
          question: '古晋市区以外的地区可以安排配送和现场安装吗？',
          answer: '我们在全古晋市区提供上门测量与大型舞台招牌安装服务。对于砂拉越其他省份（诗巫、民都鲁、美里、斯里阿曼等），我们每日通过信誉良好的专线货运物流进行安全快捷的直发配送。'
        },
        {
          question: '印刷制作周期一般需要多长时间？',
          answer: '数码快印产品（名片、普通贴纸、大幅条幅）通常需1至3个工作日。大宗胶印订单（精装企业年报、NCR多联账本、定制包装纸盒）通常根据印后工序在5至7个工作日内完工。'
        }
      ],
      guides: [
        {
          id: 'artwork-guide',
          title: '设计与文件交印规范',
          desc: '提交文件前的色彩模式、分辨率、出血位及格式要求。',
          category: '印前制版',
          readTime: '3 分钟阅读'
        },
        {
          id: 'paper-basics',
          title: '纸张与材质基础知识',
          desc: '克重(GSM)、哑光与亮光涂布的实际应用场景解析。',
          category: '材质认知',
          readTime: '4 分钟阅读'
        },
        {
          id: 'printing-methods',
          title: '如何选择最适合的印刷工艺',
          desc: '胶印、数码快印与大幅面写真喷绘的区别与成本对比。',
          category: '工艺选择',
          readTime: '5 分钟阅读'
        }
      ]
    },
    guidelinesPage: {
      backToGuides: '返回指南与常见问答',
      tag: '设计与文件交印规范',
      title: '交印文件准备的核心规范',
      desc: '遵循以下文件规范，您的交印稿件即可直接上机印制，免除反复修改周折。对文件格式存疑或尚无完稿？欢迎联系我们驻厂设计团队免费协助初审。',
      metricCmyk: '色彩模式',
      metricCmykSub: '严禁RGB模式',
      metricDpi: '标准分辨率',
      metricDpiSub: '大幅喷绘150',
      metricBleed: '四边出血位',
      metricBleedSub: '四周各5mm',
      metricSafe: '安全裁切距离',
      metricSafeSub: '核心内容内缩',
      metricFont: '最小字体字号',
      metricFontSub: '线条最小0.25pt',
      metricPdf: '首选文件格式',
      metricPdfSub: '文字转曲矢量',
      generalTitle: '通用交印准则',
      generalSub: '无论何种印品，以下四项准则均严格适用。',
      colourModeTitle: '色彩模式',
      colourModeP1: '导出文件前请务必将色彩空间转换为 CMYK 模式 — 切勿使用 RGB，也不要使用专色（除非事先已约定烫金等特定专色工艺）。RGB模式在屏幕上鲜艳，但在印机上转色后会出现不可预测的偏色，这是“实物与屏幕颜色不符”最常见的原因。',
      colourModeBullet1: '大面积实心纯黑背景，请使用 C40 M30 Y30 K100 的富贵黑配方，而非单一的 K100，否则印刷可能发灰发虚。',
      colourModeBullet2: '小号正文字体及细线，必须且仅能使用单一 K100 纯黑 — 若使用多色复合黑会导致套印重影或边缘发虚。',
      colourModeBullet3: '单处总油墨覆盖率请控制在 240% 以下（C+M+Y+K叠加值）— 过高的油墨量会导致不易干燥、粘连或折痕爆墨。',
      colourModeBullet4: '避免使用低于 10% 的极淡网点 — 太浅的网点容易在印机上丢失，导致印刷发白无细节。',
      blackAtGlance: '黑色使用快速指南',
      richBlackLabel: '富贵黑 — C40 M30 Y30 K100',
      richBlackUse: '大面积背景底色、暗部照片底色',
      plainBlackLabel: '单色黑 — 仅使用 K100',
      plainBlackUse: '正文文字、细线条、微小字体',
      resTitle: '分辨率与图像清晰度',
      resStandard: '300 DPI — 商业印刷标准',
      resStandardDesc: '名片、宣传单、画册、贴纸、包装盒 — 任何近距离手持阅读的纸品。',
      resLarge: '150 DPI — 大幅面喷绘',
      resLargeDesc: '条幅横幅、舞台背板、大型招牌 — 远距离观看，无需300 DPI以免文件过大。',
      resLine: '1200 DPI — 线条图形与签名',
      resLineDesc: '扫描的品牌Logo、手写签名及单色线条图，确保边缘平滑无锯齿。',
      resAlert: '无论DPI多高，置入的图片务必保持 CMYK 模式 — 将一张RGB照片直接粘贴进CMYK文档中，是打样成品色彩发灰偏暗的最常见隐患。',
      textLineTitle: '文字与线条粗细',
      textLineBullet1: '普通正文字体最小字号：4pt。',
      textLineBullet2: '烫金/电化铝烫印文字：建议最小10pt，加粗无衬线字体效果最佳。',
      textLineBullet3: '低于5pt且未加粗的字体，必须“创建轮廓”（文字转曲），避免解析模糊。',
      textLineBullet4: '线条最小粗细：0.25pt — 过细的线条上机容易断线或丢失。',
      textLineBullet5: '避免深色底色上反白极其纤细的小字 — 油墨轻微扩散容易将反白文字糊住无法阅读。',
      fileFormatsTitle: '我们接受的文件格式',
      fileFormatsBullet1: '首选印刷专用 PDF（已内嵌字体或所有字体已转曲）— 适用于几乎所有印制项目。',
      fileFormatsBullet2: '矢量 AI、EPS 以及高分辨率 TIFF / JPG / PNG 亦可直接交印。',
      fileFormatsBullet3: '导出前请拼合透明度并栅格化复杂图层混合效果。',
      fileFormatsBullet4: 'Word、PowerPoint 或低清晰度网页导出图通常达不到上机要求 — 如有源文件可直接发给我们，或由我们设计团队重新排版重构。',
      bleedSectionTag: '印前制版准备',
      bleedSectionTitle: '出血位、裁切线与安全边界',
      bleedSectionSub: '决定文件是否合格的三项关键尺寸指标 — 掌握好这三点，文件即可直接免检上机。',
      bleedBadge: '出血线 (+5mm)',
      trimBadge: '裁切成品线 (最终切齐尺寸)',
      safeBadge: '安全边距 (−5mm)',
      safeKeepLogos: '重要图文必须保留在该线以内',
      bleedExpl: '出血位是指在成品裁切线四周向外多留出的5mm底图延伸区域 — 它的作用是防止裁刀在高速裁切产生微小位移时露出尴尬的白边。裁切线即最终成品净尺寸。安全边距是裁切线向内缩进5mm的保护区 — 请将所有Logo、重要文字保持在安全区内，贴近边沿的内容面临被切掉的风险。',
      tableHeaderItem: '印刷品类',
      tableHeaderTrim: '成品净尺寸 (TRIM)',
      tableHeaderBleed: '含出血制作尺寸 (BLEED)',
      customSizesNote: '需要特殊定制尺寸？只需告诉我们确切的成品净尺寸，我们将即刻为您计算对应出血规格。',
      detailedSpecsTitle: '详细品类交印规格手册',
      noArtworkYetTitle: '手头还没有制作好的完稿文件？',
      noArtworkYetDesc: '我们驻厂的资深印前设计团队可以直接根据您的文字资料与构想进行排版设计 — 或免费协助检验您手头现有的文件。',
      requestQuoteBtn: '索取印刷报价',
      chatWhatsappBtn: '在 WhatsApp 沟通',
      accordion: [
        {
          id: 'orientation',
          title: '文件方向与正反对应',
          content: '请确保正反面设计文件的方向保持一致（同为横向或同为纵向）。如果文件中有一面旋转了90度，在胶印机双面套印时可能会导致上下颠倒。'
        },
        {
          id: 'booklet',
          title: '骑马钉小册子画册页数与拼版',
          content: '骑马钉画册总页数必须为4的倍数（例如8、12、16、24、32页）。请按连续单页顺序导出PDF并保留5mm出血，无需自行拼成跨页跨版，我们印前会自动执行规范拼版。'
        },
        {
          id: 'stickers',
          title: '不干胶贴纸模切线制作',
          content: '对于异形模切贴纸，请在单独顶层新建命名为“CutContour”的图层，并使用100%品红（Magenta）0.5pt粗细的矢量线条绘制切线，底图需向切线外延伸2mm出血。'
        },
        {
          id: 'packaging',
          title: '包装盒刀模线绘制规范',
          content: '包装刀模线图层中，实线表示裁切刀口，虚线表示压痕折叠线。在开始绘制包装盒平面设计前，欢迎向我们索取标准CAD包装刀模图纸。'
        },
        {
          id: 'foil-uv',
          title: '局部烫金与局部UV工艺黑版图层',
          content: '烫金或局部光油（Spot UV）工艺需提供独立专版图层，以100%单色K（纯黑矢量形状）标示需加工区域，严禁使用渐变色、羽化或半透明度。'
        },
        {
          id: 'running-numbers',
          title: '收据联单流水号与压撕裂线 (NCR Books)',
          content: '请在稿件中清晰标注流水号打码的预留位置及字体大小。我们提供红色或黑色6位机械顺序跳号打码及精准米齿压撕裂虚线。'
        }
      ]
    },
    footer: {
      addressTitle: '古晋工厂及营业地址',
      addressText: 'No. 37, Lot 75, Section 63, 1st Floor, Jalan Chan Bee Kiew, 93450 Kuching, Sarawak',
      contactTitle: '直接联系',
      siteTitle: '网站导航',
      languageTitle: '语言切换 / Language / Bahasa',
      languageHelp: '全站支持中英马三语随时无缝切换，选择适合您的语言。',
      currentLabel: '当前浏览语言',
      sarawakTrilingual: '砂拉越三语专版 • English / 中文 / Bahasa Melayu'
    },
    firstTimeModal: {
      welcome: '欢迎光临恒成兄弟印务有限公司',
      choosePrompt: '请选择您的首选浏览语言',
      subPrompt: '立足砂拉越古晋逾34年，深受信赖的商业、机构与政府特许印刷厂。',
      confirmBtn: '以选定语言继续浏览',
      changeLaterNote: '您可以随时在页面底部的“语言切换”区域更换语言。',
      enName: 'English (英文)',
      enDesc: '商务标准英语与技术规范',
      zhName: '中文 (华语)',
      zhDesc: '砂拉越古晋逾34年老字号专业印刷厂',
      msName: 'Bahasa Melayu (马来语)',
      msDesc: 'Percetakan Komersial & Pembekal Berdaftar Kerajaan'
    },
    categories: {
      'business-essentials': {
        name: '企业必备文具纸品',
        shortDesc: '商务名片、信头纸、信封、复写联单收据本',
        badge: '单品与大宗印制',
        description: '为成长型企业及成熟机构打造的标准商务文具。从100张名片到万本带连续流水号的多联无碳复写收据账本。',
        items: ['高端商务名片', '官方公司信头纸', '企业公文信封', 'NCR无碳复写单据账本', '精装公文报告夹']
      },
      'packaging-boxes': {
        name: '包装盒与产品纸盒',
        shortDesc: '精装礼盒、产品折叠纸盒、定制异形开模',
        badge: '定制结构模切',
        description: '定制结构模切开槽、折叠卡纸盒、食品级安全封套及精美硬盒。支持打样一件及大货工业批量生产。',
        items: ['高档礼品纸盒', '零售产品包装盒', '异形模切手提纸盒', '食品级防油纸封套', '天地盖磁吸硬质礼盒']
      },
      'signage-large-format': {
        name: '招牌与大幅面喷绘',
        shortDesc: '横幅、舞台背景背板、易拉宝展架、古晋现场安装',
        badge: '包含上门安装',
        description: '高分辨率环保弱溶剂与UV宽幅印刷，具备户外防晒防水耐候性与室内鲜艳画质。在古晋地区提供专业上门测量安装。',
        items: ['防雨户外横幅', '高清无缝舞台背板', '铝合金易拉宝展架', '亚克力立体发光招牌', '全古晋现场专业安装']
      },
      'apparel-fabric': {
        name: '团体服饰与布艺印花',
        shortDesc: '企业T恤、工装制服、数码热升华球衣、帆布袋',
        badge: '丝网印花与数码烫画',
        description: '在纯棉、排汗快干微纤维及环保帆布上进行高牢度印刷。适用于企业运动会、学校社团、员工工装及展会宣传品。',
        items: ['定制纯棉圆领T恤', '企业刺绣Polo制服', '全彩数码热升华球衣', '重磅棉帆布手提袋', '电脑精密徽章刺绣']
      },
      'promotional-gifts': {
        name: '商务礼品与宣传周边',
        shortDesc: '定制水杯、不锈钢保温杯、帆布袋、U盘纪念品',
        badge: '精密激光雕刻 & UV',
        description: '精选优质礼品配合圆弧UV彩印或光纤激光精密雕刻。适合股东大会、研讨会、客户答谢及VIP迎宾伴手礼。',
        items: ['真空不锈钢保温杯', '全彩马克陶瓷杯', '高档激光金属签字笔', '行政PU皮质年历记事本', '大尺寸抗风广告伞']
      },
      'photo-canvas': {
        name: '艺术微喷与画廊画布',
        shortDesc: '纯棉艺术画布、画廊精装木框、影像纪念册',
        badge: '微喷防褪色颜料',
        description: '博物馆级高色域微喷，采用天然纯棉粗纹油画布及艺术卡纸。由经验师傅纯手工绷装于烘干防变形实木内框。',
        items: ['实木内框绷装油画布', '博物馆级无酸装裱画', '精装高保真照片书', '水晶悬浮亚克力相框', '高密度展板画裱贴']
      },
      'stickers-labels': {
        name: '不干胶贴纸与产品标签',
        shortDesc: '防水瓶贴、异形模切贴纸、卷筒贴、透明标贴',
        badge: '支持任意定制异形',
        description: '高精度光学定位巡边裁切，支持任意不规则几何形状。涵盖防水合成PVC撕不破、牛皮纸、烫金及超透材质。',
        items: ['冷冻防潮防水标签', '单张模切半断贴纸', '自动贴标卷筒标签', '烫金反光防伪贴纸', '高透无痕透明标贴']
      },
      'souvenirs': {
        name: '盛典纪念品与请柬',
        shortDesc: '烫金婚礼请帖、活动伴手礼、政府奖状证书',
        badge: '烫金与凹凸浮雕',
        description: '以烫金红金、激光精雕木质纪念章及浮雕校徽公章证书，为您铭刻每一个值得珍藏的里程碑时刻。',
        items: ['奢华烫金婚礼请柬', '精美伴手礼礼盒', '官方表彰荣誉证书', '定制亚克力水晶奖杯', '贵宾胸章与名牌']
      }
    }
  },
  ms: {
    common: {
      brandName: 'Heng Sing Brothers Press',
      brandSub: 'Percetakan Komersial & Institusi Kerajaan',
      sarawakLocation: 'Kuching, Sarawak',
      registeredPrinter: 'Pencetak Berdaftar Kerajaan Sarawak • Ditubuhkan 1990',
      estYear: 'Lebih 34 Tahun di Kuching',
      requestQuote: 'Minta Sebut Harga',
      chatWhatsapp: 'Hubungi WhatsApp',
      backToTop: 'Kembali ke Atas',
      exploreRange: 'Lihat Rangkaian Penuh',
      contactUs: 'Hubungi Kami',
      viewGuidelines: 'Garis Panduan Karya Seni',
      allRightsReserved: 'Heng Sing Brothers Press. Hak cipta terpelihara. Kuching, Sarawak.',
      currentLanguageLabel: 'Bahasa Semasa',
      selectLanguage: 'Pilih Bahasa'
    },
    nav: {
      home: 'Laman Utama',
      catalogue: 'Katalog',
      corporate: 'Korporat & Institusi',
      guides: 'Panduan & FAQ',
      partner: 'Rakan Niaga',
      about: 'Mengenai Kami',
      quoteButton: 'Minta Sebut Harga',
      whatsappButton: 'Hubungi WhatsApp'
    },
    hero: {
      heritageTag: '34 TAHUN • KUCHING • BERDAFTAR KERAJAAN SARAWAK',
      headlinePart1: 'Percetakan berkualiti untuk sebarang saiz tempahan —',
      headlinePart2: 'kecil atau besar.',
      subheadline: 'Satu pembekal untuk reka bentuk, cetakan, dan pemasangan di lokasi. Kami menerima tempahan kuantiti kecil mahupun pukal besar dengan ketelitian yang sama.',
      ctaWhatsapp: 'Mesej Kami di WhatsApp',
      ctaQuote: 'Minta Sebut Harga',
      stat1Val: '34',
      stat1Label: 'Tahun Beroperasi',
      stat2Val: 'Reka Bentuk',
      stat2Label: 'Pasukan Dalaman',
      stat3Val: 'Pemasangan',
      stat3Label: 'Perkhidmatan Di Lokasi',
      stat4Val: 'Tiada Had',
      stat4Label: 'Pesanan Kecil Dialu-alukan'
    },
    whyUs: {
      tag: 'KELEBIHAN MENCETAK BERSAMA KAMI',
      title: 'Dibina untuk sebarang saiz tempahan.',
      desc: 'Daripada larian kuantiti kecil yang mengutamakan ketelitian sehinggalah pesanan pukal industri, kami dilengkapi sepenuhnya dengan bantuan reka bentuk dan pemasangan di Kuching.',
      feature1Title: 'Bantuan Reka Bentuk Dalaman',
      feature1Desc: 'Belum ada fail reka bentuk? Pasukan pereka kami sedia membantu menghasilkan fail cetakan untuk anda.',
      feature2Title: 'Larian Kecil hingga Pukal Industri',
      feature2Desc: 'Tiada kuantiti pesanan minimum, dan tiada tempahan yang terlalu besar — kami mengendalikan larian industri mahupun pesanan terhad.',
      feature3Title: 'Pemasangan Di Lokasi',
      feature3Desc: 'Kami bukan sekadar mencetak. Kami menghantar dan memasang papan tanda, pelekat kenderaan dan latar pentas di sekitar Kuching.'
    },
    smeBanner: {
      tag: 'PROGRAM PKS BAHARU',
      title: 'Memulakan Perniagaan Baharu?',
      desc: 'Pakej Permulaan Perniagaan: kad perniagaan + kepala surat + papan tanda asas + pelekat dalam satu harga. Direka khas untuk usahawan yang belum memerlukan kuantiti pukal.',
      cta: 'Lihat Pakej Permulaan'
    },
    fullRange: {
      badge: 'KATALOG PERCETAKAN KOMERSIAL',
      title: 'Rangkaian Penuh',
      subtitle: 'Terokai pakej keperluan perniagaan lengkap dan kepakaran percetakan komersial',
      viewFullCat: 'Lihat Katalog Lengkap →',
      featuredBundle: 'Pakej Korporat Pilihan',
      singleAndBulk: 'Larian Tunggal & Pukal',
      bizEssentialsTitle: 'Keperluan Asas Perniagaan',
      bizEssentialsDesc: 'Suite identiti korporat serba lengkap untuk PKS berkembang dan syarikat ternama. Semua keperluan pejabat dalam satu larian warna yang seragam.',
      configureBizBundle: 'Konfigurasi Pakej Perniagaan',
      enquire: 'Pertanyaan',
      customFormatTitle: 'Perlukan Format Tersuai?',
      customFormatDesc: 'Saiz khas, lipatan unik, kerajang emas timbul atau prototaip kuantiti terhad — kami beri sebut harga tepat.',
      customFormatCta: 'Hantar Tempahan Khas',
      whatsappReady: 'Tersedia di WhatsApp'
    },
    activeDiscipline: {
      tag: 'DISIPLIN CETAKAN AKTIF',
      customQuoteFor: 'Sebut Harga Khas untuk',
      noJobTooSmall: 'Tiada pesanan terlalu kecil — pesanan kuantiti kecil diterima'
    },
    cmykPlateDemo: {
      badge: '34 Tahun Ketepatan Mesin Cetak',
      title: 'Bagaimana 4 Plat Offset Membentuk Identiti Heng Sing',
      desc: 'Dalam percetakan komersial berketepatan tinggi, logo dipisahkan kepada plat cetakan Sian, Magenta, Kuning, dan Hitam. Gerakkan peluncur di bawah untuk melihat ketepatan pendaftaran plat dalam toleransi ±0.01 mm.',
      cyan: 'Sian (Cyan)',
      magenta: 'Magenta (Merah)',
      yellow: 'Kuning (Yellow)',
      keyBlack: 'Hitam (Key Black)'
    },
    corporateSection: {
      badge: 'KORPORAT & INSTITUSI',
      title: 'Laporan tahunan, jurnal & cenderahati korporat.',
      desc: 'Buku kecil, jurnal penyelidikan akademik, penerbitan agensi, diari eksekutif dan cenderahati korporat dicetak mengikut piawaian teguh kami selama lebih tiga dekad di Kuching.',
      reportsBullet: 'Laporan Tahunan Kulit Keras & Jilidan PUR',
      journalsBullet: 'Jurnal Berwasit Akademik & Persatuan',
      giftsBullet: 'Flask Ukiran Laser, Buku Perancang PU & Set Hadiah VIP',
      ctaBtn: 'Terokai Rangkaian Institusi Penuh'
    },
    trustProof: {
      tag: 'KEPERCAYAAN INSTITUSI & KERAJAAN',
      title: 'Dipercayai oleh pelanggan kami',
      subtitle: 'Daripada universiti awam terkemuka Sarawak dan kementerian kerajaan negeri hingga ke dewan bandaraya, institusi utama mempercayai Heng Sing Brothers Press untuk cetakan berkualiti tinggi.',
      procurementBadge: 'Pematuhan Standard Perolehan Agensi Kerajaan & Universiti Awam',
      statYears: '34+ Tahun',
      statYearsLabel: 'Operasi Percetakan Dipercayai di Kuching',
      statClients: '100% Mengikut Spesifikasi',
      statClientsLabel: 'Ketepatan Warna & Piawaian Kemasan',
      statDelivery: 'Penghantaran Terus',
      statDeliveryLabel: 'Logistik Boleh Dipercayai ke Seluruh Sarawak',
      viewCorporateCta: 'Hubungi untuk Sebut Harga Institusi'
    },
    guidesPromo: {
      tag: 'BAHARU DALAM PERCETAKAN?',
      title: 'Mulakan dengan panduan kami',
      guide1Title: 'Asas Kertas & Bahan',
      guide1Desc: 'Penjelasan tentang GSM, kemasan matte vs berkilat, dan penggunaannya.',
      guide2Title: 'Memilih Kaedah Percetakan',
      guide2Desc: 'Perbezaan antara offset, digital, dan format besar diterangkan secara mudah.',
      guide3Title: 'Penjelasan Pesanan & MOQ',
      guide3Desc: 'Ya, kami menerima pesanan kecil — ketahui cara prosesnya.'
    },
    card3D: {
      brandTag: 'HENG SING BROTHERS PRESS',
      estTag: 'Berdaftar Sarawak • Ditubuhkan 1990',
      fograTag: 'FOGRA51 BERKALIBRASI',
      ctaTag: 'Cetakan • Pembungkusan • Papan Tanda',
      ctaTitle: 'Hubungi kami sekarang untuk menjayakan cetakan jenama & produk anda',
      phoneText: 'WhatsApp: +60 13-328 2828',
      locationText: 'Kuching, Sarawak • Siap Pantas',
      trustTag: '34 TAHUN DIPERCAYAI',
      disciplinesTag: 'Komersial • Offset • Digital • Pembungkusan',
      yearsBadge: '34 TAHUN',
      kuchingBadge: 'KUCHING'
    },
    cataloguePage: {
      tag: 'SEMUA YANG KAMI CETAK',
      title: 'Katalog Produk Penuh',
      desc: 'Dikelaskan mengikut kategori untuk memudahkan carian anda. Tidak jumpa apa yang dicari? Hubungi kami — kami juga menerima pesanan kuantiti kecil.',
      commonFormats: 'Format biasa:',
      viewDetails: 'Lihat Butiran',
      enquire: 'Pertanyaan',
      modalDetailsTitle: 'Spesifikasi & Sampel Kategori',
      closeBtn: 'Tutup'
    },
    corporatePage: {
      tag: 'KORPORAT & INSTITUSI',
      title: 'Laporan tahunan, jurnal & cetakan korporat, mengikut piawaian yang kami pegang selama 34 tahun.',
      desc: 'Percetakan yang konsisten dan boleh dipercayai untuk syarikat korporat, persatuan dan sekolah — daripada pembekal yang berpengalaman lebih tiga dekad di Kuching.',
      quoteBtn: 'Minta Sebut Harga melalui E-mel',
      whatsappBtn: 'WhatsApp Kami',
      whatWePrint: 'Perkara yang kami cetak',
      whatWePrintSub: 'Bahan korporat standard yang dihasilkan mengikut piawaian warna jenama yang ketat.',
      tagLine: 'Mesyuarat Agung • Penerbitan • Cenderamata VIP',
      items: [
        { title: 'Laporan Tahunan', desc: 'Kertas bersijil FSC, jilidan PUR sempurna, kemasan UV berkilat dan kulit timbul untuk AGM.' },
        { title: 'Jurnal & Buku Kecil', desc: 'Penerbitan akademik, persatuan dan kementerian dengan konsistensi warna yang ketat.' },
        { title: 'Cenderahati Korporat', desc: 'Termos haba tersuai, buku nota premium, pen logam, dan payung berlogo syarikat.' },
        { title: 'Kalendar & Diari', desc: 'Kalendar meja khemah, perancang dinding, dan agenda mingguan kulit PU eksekutif.' },
        { title: 'Alat Tulis Perniagaan', desc: 'Kepala surat rasmi, sampul surat, buku invois NCR, dan fail korporat bertutup.' }
      ],
      pillar1: '34 Tahun Beroperasi di Kuching',
      pillar2: 'Pemeriksaan Kualiti & Warna Berdisiplin',
      pillar3: 'Pasukan Pereka Grafik Dalaman',
      guideBannerTitle: 'Perkara yang Perlu Diambil Perhatian Semasa Menyediakan Laporan Korporat',
      guideBannerSub: 'Senarai semak praktikal sebelum anda menghantar fail.',
      readGuideBtn: 'Baca Garis Panduan',
      sendRequirementsTitle: 'Hantarkan Keperluan Anda Kepada Kami',
      requestQuoteEmailBtn: 'Minta Sebut Harga melalui E-mel',
      orWhatsappBtn: 'Atau WhatsApp Kami'
    },
    partnerPage: {
      tag: 'UNTUK PENGANJUR & PERANCANG ACARA',
      title: 'Mari jayakan acara & persidangan anda bersama-sama.',
      desc: 'Kami bekerjasama dengan perancang acara, agensi pengurusan acara dan penyelaras persidangan di Kuching sebagai pembekal pengeluaran sehenti — latar belakang pentas, bunting tarik kaset aluminium, pas delegasi & lanyard, buku atur cara A5, dan pemasangan di tapak.',
      cta: 'Bincang Pengeluaran Acara di WhatsApp',
      stageTag: 'PENTAS PERSIDANGAN & ACARA',
      stageLoc: 'LOKASI KUCHING (BCCK, HOTEL & PUSAT EKSPO)',
      mockupSub: 'LATAR PENTAS UTAMA & PAPARAN PENUH',
      mockupTitle: 'Sidang Kemuncak Perniagaan & Teknologi Borneo',
      mockupSpec: 'Fabrik Ketegangan Matte Anti-Silau • Kaset Aluminium Berat',
      mockupVerified: 'Pruf Cetakan Disahkan',
      mockupFabric: 'Latar Fabrik Pentas',
      mockupFabricDesc: '20 kaki × 10 kaki Fabrik Ketegangan',
      mockupWelcome: 'Bunting Tarik Aluminium',
      mockupWelcomeDesc: 'Kaset Berat 85cm × 200cm PET Sintetik',
      mockupFoil: 'Lanyard & Pas VIP',
      mockupFoilDesc: 'Reben Satin Penuh + Kad Kod QR',
      mockupRigging: 'Pemasangan di Lokasi',
      mockupRiggingDesc: 'Krew Tempatan Kuching Siap Pantas',
      mockupFooter: 'Pengeluaran Acara Sehenti • Dari Cetakan Format Besar hingga Pemasangan Pentas',
      whatWeProduceTitle: 'Bahan Pengeluaran Acara yang Kami Sediakan',
      whatWeProduceSub: 'Satu pembekal dipercayai di Kuching untuk keseluruhan senarai keperluan acara anda, mengelakkan kesulitan berurusan dengan pelbagai vendor.',
      capabilities: [
        { title: 'Latar Pentas & Dinding Foto', desc: 'Fabrik ketegangan tanpa sambungan, struktur truss kukuh, dan dinding temu bual media tanpa silau kamera.' },
        { title: 'Bunting Tarik Roll-Up', desc: 'Kaset aluminium tahan lasak dengan filem sintetik anti-gulung untuk paparan profesional.' },
        { title: 'Pas Delegasi & Lanyard', desc: 'Reben satin dye-sublimation berkualiti dengan pas akrilik atau PVC berdata boleh ubah (kod QR/nama).' },
        { title: 'Buku Atur Cara & Jadual', desc: 'Buku A5 jahit dawai untuk jadual program, direktori penceramah dan buku panduan peserta penuh warna.' },
        { title: 'Papan Tanda Arah & Foamboard', desc: 'Foamboard mampat 5mm berkualiti untuk dirian kuda-kuda, kaunter pendaftaran dan arah dewan.' },
        { title: 'Penghantaran & Pemasangan', desc: 'Pasukan kami menghantar dan memasang terus di dewan acara sekitar Kuching mengikut jadual tepat.' }
      ],
      pillar1: '34 Tahun Beroperasi di Kuching',
      pillar2: 'Masa Siap Pantas untuk Tarikh Penting',
      pillar3: 'Harga Rakan Kongsi & Terma Pembayaran',
      kitBadge: 'Pakej Lengkap Acara',
      kitTitle: 'Pakej Asas Pengeluaran Acara',
      kitDesc: 'Latar pentas + 4 unit bunting tarik + 200 unit lanyard & pas VIP + 200 buku atur cara + pemasangan di Kuching, dalam satu sebut harga teratur.',
      seeKitBtn: 'Lihat Pakej Acara',
      checklistTitle: 'Senarai Semak: Bahan Cetak, Papan Tanda & Pemasangan Pentas Acara',
      checklistSub: 'Boleh dikongsi dengan jawatankuasa acara anda untuk memastikan garis masa dan permit tapak terkawal.',
      readGuideBtn: 'Baca Panduan',
      bottomTitle: 'Bersedia untuk berbincang mengenai acara anda?',
      continueWhatsapp: 'Bincang di WhatsApp',
      sendEmail: 'Hantar E-mel'
    },
    aboutPage: {
      tag: 'TENTANG KAMI',
      title: 'Tiga dekad percetakan, satu piawaian yang tidak pernah luntur.',
      summary: 'Heng Sing Brothers Press adalah percetakan offset dan laser sehenti yang berpusat di Kuching — reka bentuk, cetakan dan pemasangan di tapak daripada satu pembekal, untuk individu, perniagaan kecil, korporat, sekolah, penganjur acara dan agensi kerajaan di seluruh Kuching dan Sarawak.',
      pillar1: '34 Tahun',
      pillar1Sub: 'Beroperasi di Kuching',
      pillar2: 'Reka → Cetak → Pasang',
      pillar2Sub: 'Satu pembekal, dari mula hingga akhir',
      pillar3: 'Offset & Laser',
      pillar3Sub: 'Keupayaan percetakan penuh',
      pillar4: 'Kuching & Seluruh Sarawak',
      pillar4Sub: 'Kawasan perkhidmatan',
      storyTitle: 'Kisah Kami',
      storyP1: 'Selama 34 tahun, Heng Sing Brothers Press telah menjadi percetakan perkhidmatan penuh di Kuching — diasaskan atas satu idea: pelanggan seharusnya dapat membawa ringkasan idea, bukan fail reka bentuk yang lengkap, dan menerima hasil kerja yang siap sempurna. Itulah sebabnya reka bentuk, cetakan dan pemasangan di tapak semuanya berada di bawah satu bumbung.',
      storyP2: 'Sepanjang tempoh itu, kami telah mencetak untuk pelbagai golongan — pelanggan persendirian, perniagaan kecil dan kedai runcit, korporat dan GLC, sekolah, perancang acara dan perkahwinan, agensi kerajaan, serta rakan percetakan lain yang menghantar kerja borong kepada kami. Sama ada kerja itu 50 keping atau 5,000, ia menerima piawaian kemasan yang sama.',
      whatHasntChanged: 'APA YANG KEKAL SAMA',
      point1: 'Satu pembekal untuk reka bentuk, cetakan dan pemasangan — tiada kerumitan mengurus berbilang vendor.',
      point2: 'Pesanan kecil diberi perhatian teliti yang sama seperti pengeluaran pukal.',
      point3: 'Jadual penghantaran yang boleh dipercayai tanpa bayaran tersembunyi.',
      whatWeDoTitle: 'Apa yang Kami Lakukan',
      whatWeDoSub: 'Reka bentuk, cetakan, dan pemasangan di lokasi — dikendalikan sepenuhnya oleh pasukan kami dari awal hingga akhir.',
      designTitle: 'Reka Bentuk Grafik & Pra-Tekan',
      designDesc: 'Pasukan grafik dalaman. Bawa idea kasar, lukisan atau teks — kami menyediakannya menjadi fail sedia cetak yang sempurna.',
      printTitle: 'Pengeluaran Cetakan Offset & Laser',
      printDesc: 'Mesin offset dan pencetak laser moden. Dari 50 keping larian digital hingga puluhan ribu naskhah cetakan offset.',
      installTitle: 'Pemasangan di Lokasi Kuching',
      installDesc: 'Pemasangan profesional di tapak sekitar Kuching. Kain rentang, latar pentas, papan tanda akrilik — dipasang dengan kemas dan selamat.',
      whoWePrintForTitle: 'Pelanggan yang Kami Khidmatkan',
      whoWePrintForSub: 'Daripada pelanggan perseorangan hingga perbadanan besar dan agensi kerajaan.',
      clientTypes: [
        { title: 'Individu & Pelanggan Terus', desc: 'Kad perniagaan peribadi, kotak hadiah tersuai, album foto, papan tanda kecil' },
        { title: 'Perniagaan Kecil & Peruncit', desc: 'Label pelekat produk, menu kafe, baju seragam, pembungkusan produk, risalah promosi' },
        { title: 'Korporat & Badan Berkanun', desc: 'Laporan tahunan, jurnal akademik, kalendar meja korporat, diari eksekutif, cenderamata berjenama' },
        { title: 'Sekolah & Persatuan', desc: 'Majalah tahunan sekolah, sijil penghargaan rasmi, kain rentang aktiviti, baju persatuan' },
        { title: 'Perancang Acara & Perkahwinan', desc: 'Latar foto acara, kad jemputan eksklusif, kotak cenderamata tetamu, papan tanda pentas' },
        { title: 'Rakan Percetakan & Agensi Iklan', desc: 'Pengeluaran pukal limpahan, kemasan pasca-cetak, percetakan borong luar tapak' }
      ],
      notSureTitle: 'Tidak pasti kaedah cetakan mana yang sesuai?',
      notSureDesc: 'Tanya kami sahaja. Kami akan mencadangkan pilihan yang paling menjimatkan kos mengikut keperluan anda.',
      askWhatsapp: 'Tanya di WhatsApp',
      whyMattersTag: 'SEJAK TAHUN 1990',
      establishedTag: 'Ditubuhkan 1990 • Kuching, Sarawak',
      whyMattersTitle: 'Mengapa 34 Tahun Beroperasi Penting Bagi Anda',
      whyMattersDesc: 'Sebuah percetakan yang bertahan selama 34 tahun di Kuching tidak akan membiarkan pelanggan berdepan masalah kelewatan, kesilapan teknikal, atau bayaran tersembunyi. Bekerjasama dengan kami bermakna anda berurusan dengan pakar yang benar-benar memahami tindak balas dakwat dan cuaca tropika, memastikan cetakan anda sempurna pada kali pertama.',
      bottomCtaTitle: 'Ingin berbincang tentang projek anda?',
      bottomCtaDesc: 'Tiada akaun diperlukan. Beritahu kami apa yang anda rancangkan dan kami akan memberikan jawapan yang jujur dan praktikal.',
      requestQuoteBtn: 'Minta Sebut Harga',
      chatWhatsappBtn: 'Bercakap di WhatsApp'
    },
    quotePage: {
      tag: 'MULAKAN SEKARANG',
      title: 'Minta Sebut Harga',
      desc: 'Beritahu kami apa yang anda perlukan. Tiada akaun diperlukan.',
      nameLabel: 'Nama Anda / Organisasi',
      namePlaceholder: 'cth. Alex Wong / Sarawak Enterprise Sdn Bhd',
      contactLabel: 'Nombor WhatsApp atau E-mel',
      contactPlaceholder: 'cth. 012-3456789 atau alex@syarikat.com',
      catLabel: 'Kategori Servis / Produk',
      qtyLabel: 'Anggaran Kuantiti',
      qtyPlaceholder: 'cth. 200 keping, 5 kotak, 1000 naskhah',
      designHelpLabel: 'Saya perlukan bantuan reka bentuk daripada pasukan anda',
      artworkLinkLabel: 'Pautan Google Drive / Dropbox Karya Seni (Pilihan)',
      uploadLabel: 'Atau muat naik fail sampel / draf (PDF, AI, JPG, PNG)',
      dropzoneText: 'Klik untuk layari atau seret fail ke sini',
      notesLabel: 'Spesifikasi Tambahan atau Permintaan Khas',
      notesPlaceholder: 'cth. Laminasi matte, saiz A5, perlu dihantar sebelum Jumaat depan di Kuching',
      whatsappBtn: 'Hantar melalui WhatsApp (Respons Terpantas)',
      emailBtn: 'Hantar melalui Borang E-mel',
      successTitle: 'Permintaan Sebut Harga Dihantar!',
      successDesc: 'Pasukan pengeluaran Kuching kami akan menyemak spesifikasi anda dan menghantar sebut harga rasmi dalam masa 1 hari bekerja.',
      artworkSectionTitle: 'Karya Seni & Reka Bentuk',
      seeGuidelinesBtn: 'Lihat Garis Panduan',
      uploadFileTitle: 'Muat Naik Fail Karya Seni',
      uploadFileSub: 'Seret fail ke sini atau klik untuk layari',
      uploadFileFormats: 'PDF, AI, EPS, PSD, JPG, PNG (Maks 50MB)',
      driveLinkTitle: 'Atau tampal pautan awan',
      driveLinkPlaceholder: 'Pautan Google Drive, Dropbox, atau WeTransfer...',
      driveLinkSub: 'Sila pastikan akses ditetapkan kepada "Sesiapa yang mempunyai pautan boleh melihat".',
      designHelpCheckbox: 'Saya belum mempunyai karya seni — saya perlukan bantuan pereka grafik dalaman Heng Sing',
      sendViaTitle: 'Pilih kaedah penghantaran:',
      whatsappNote: 'Cara terpantas untuk menerima sebut harga — kami akan terus membalas di WhatsApp dengan sebut harga dan anggaran masa siap.',
      quoteReceivedTitle: 'Permintaan Sebut Harga Dihantar ke hengsing@gmail.com',
      quoteReceivedDesc: 'Terima kasih. Butiran projek anda telah disiapkan dan dihantar terus ke hengsing@gmail.com.',
      whatsappImmediateBtn: 'Hantar ke WhatsApp untuk Respons Segera',
      smallQuantityPersonal: 'Kuantiti Kecil / Cetakan Peribadi',
      corporateReportOption: 'Laporan Korporat / Jurnal',
      starterKitOption: 'Pakej Permulaan Perniagaan',
      eventKitOption: 'Pakej Asas Acara',
      customPackagingOption: 'Pembungkusan Tersuai / Prototaip',
      otherOption: 'Lain-lain / Tidak Pasti'
    },
    guidesFaqPage: {
      tag: 'PANDUAN & SOALAN LAZIM',
      title: 'Semua yang anda perlu tahu sebelum mencetak',
      desc: 'Penerangan jelas tanpa istilah rumit untuk pemula, perancang, dan pegawai perolehan korporat.',
      quickAnswers: 'Soalan Lazim Hangat',
      readGuideBtn: 'Baca panduan penuh →',
      guidesTitle: 'Panduan Percetakan Praktikal',
      guidesSub: 'Panduan langkah demi langkah untuk membantu anda menyediakan fail dan memilih bahan yang tepat.',
      readyOrderTitle: 'Bersedia untuk memesan? Permudahkan pilihan anda.',
      readyOrderDesc: 'Lihat Pakej Permulaan Perniagaan atau Pakej Asas Acara kami — harga telus dan mudah difahami.',
      seeKitsBtn: 'Lihat Pakej Pilihan',
      faqs: [
        {
          question: 'Adakah anda menerima pesanan kuantiti kecil? Berapakah kuantiti minimum?',
          answer: 'Ya, semestinya! Kami mempunyai mesin digital khusus untuk cetakan larian terhad (seperti 50 atau 100 keping kad nama, satu keping kain rentang, atau 10 helai baju t-shirt). Anda tidak perlu menempah ribuan untuk mencetak bersama kami.'
        },
        {
          question: 'Bolehkah anda membantu mereka bentuk karya seni jika saya hanya mempunyai lakaran atau logo?',
          answer: 'Ya! Heng Sing mempunyai pasukan grafik dan pra-tekan dalaman di kilang kami di Kuching. Jika anda belum mempunyai fail vektor sedia cetak, bawa sahaja draf atau lakaran anda dan kami akan susun fail cetakan yang sempurna.'
        },
        {
          question: 'Adakah anda membuat penghantaran dan pemasangan di luar bandar Kuching?',
          answer: 'Kami membuat penghantaran di seluruh kawasan Kuching dan menjalankan pemasangan di tapak untuk latar pentas acara, papan tanda kedai, dan gerai pameran. Bagi bahagian lain di Sarawak (Sibu, Bintulu, Miri, Sri Aman), kami menghantar setiap hari melalui perkhidmatan logistik bas dan kargo yang dipercayai.'
        },
        {
          question: 'Berapa lamakah masa yang diambil untuk menyiapkan tempahan cetakan?',
          answer: 'Masa siap standard untuk cetakan digital (kad, pelekat, kain rentang) adalah 1 hingga 3 hari bekerja. Pengeluaran offset pukal (laporan tahunan, buku resit NCR, kotak pembungkusan khas) biasanya memerlukan 5 hingga 7 hari bekerja bergantung kepada proses kemasan.'
        }
      ],
      guides: [
        {
          id: 'artwork-guide',
          title: 'Garis Panduan Reka Bentuk & Karya Seni',
          desc: 'Mod warna, resolusi, lebihan potong (bleed) dan spesifikasi fail sebelum anda hantar.',
          category: 'Pra-Tekan',
          readTime: 'Masa membaca 3 min'
        },
        {
          id: 'paper-basics',
          title: 'Asas Kertas & Bahan Percetakan',
          desc: 'Penjelasan tentang berat/ketebalan GSM, matte vs berkilat dalam bahasa mudah.',
          category: 'Bahan',
          readTime: 'Masa membaca 4 min'
        },
        {
          id: 'printing-methods',
          title: 'Memilih Kaedah Percetakan',
          desc: 'Perbezaan antara offset, digital dan format besar diterangkan secara ringkas.',
          category: 'Kaedah',
          readTime: 'Masa membaca 5 min'
        }
      ]
    },
    guidelinesPage: {
      backToGuides: 'Kembali ke Panduan & Soalan Lazim',
      tag: 'PANDUAN REKA BENTUK & KARYA SENI',
      title: 'Menyediakan karya seni untuk cetakan — perkara asas',
      desc: 'Ikuti spesifikasi ini dan fail anda akan terus dicetak tanpa perlu diubah suai berulang kali. Tidak pasti tentang sesuatu, atau belum mempunyai reka bentuk sedia cetak? Hubungi pasukan kami — kami sedia memeriksa fail anda.',
      metricCmyk: 'MOD WARNA',
      metricCmykSub: 'Sentiasa CMYK, bukan RGB',
      metricDpi: 'RESOLUSI',
      metricDpiSub: '300 DPI minimum (150 untuk format besar)',
      metricBleed: 'LEBIHAN POTONG',
      metricBleedSub: '5 mm pada semua sisi',
      metricSafe: 'ZON SELAMAT',
      metricSafeSub: '5 mm ke dalam dari garisan potong',
      metricFont: 'SAIZ FON MINIMUM',
      metricFontSub: '4 pt biasa, 10 pt untuk kerajang',
      metricPdf: 'FORMAT FAIL',
      metricPdfSub: 'PDF Sedia Cetak dengan fon dihurufkan (outlined)',
      generalTitle: 'Garis Panduan Umum Karya Seni',
      generalSub: 'Empat peraturan ini terpakai kepada setiap kerja cetakan, tidak kira produk apa yang anda hasilkan.',
      colourModeTitle: 'Mod Warna: Sentiasa CMYK',
      colourModeP1: 'Tukar karya seni anda kepada mod warna CMYK sebelum mengeksport fail — jangan gunakan RGB dan elakkan warna khas (spot colour) melainkan dipersetujui terlebih dahulu. Skrin memaparkan RGB; mesin cetak menggunakan empat plat dakwat. Penukaran automatik pada mesin cetak boleh menyebabkan perbezaan warna yang tidak diingini — ini adalah sebab nombor satu cetakan kelihatan berbeza daripada skrin.',
      colourModeBullet1: 'Untuk latar belakang hitam padu yang kaya, gunakan C40 M30 Y30 K100 (Hitam Kaya), bukan K100 sahaja, untuk mengelakkan warna hitam kelihatan pudar.',
      colourModeBullet2: 'Untuk teks badan kecil dan garisan halus, sentiasa gunakan K100 sahaja — hitam pelbagai plat akan menyebabkan kabur jika terdapat pergerakan kecil pada mesin.',
      colourModeBullet3: 'Hadkan jumlah liputan dakwat maksimum kepada 240% untuk mengelakkan masalah dakwat lambat kering atau melekat.',
      colourModeBullet4: 'Elakkan peratusan warna di bawah 10% — titik halus ini mungkin hilang semasa proses cetakan offset.',
      blackAtGlance: 'Panduan Pantas Warna Hitam',
      richBlackLabel: 'Hitam Kaya — C40 M30 Y30 K100',
      richBlackUse: 'Gunakan untuk: Latar belakang hitam besar, blok warna gelap',
      plainBlackLabel: 'Hitam Tunggal — K100 Sahaja',
      plainBlackUse: 'Gunakan untuk: Teks badan, garisan halus, butiran kecil',
      resTitle: 'Resolusi: 300 DPI untuk Cetakan Dekat, 150 untuk Format Besar',
      resStandard: '300 DPI — Piawaian Percetakan Komersial',
      resStandardDesc: 'Kad perniagaan, risalah, brosur, pelekat, pembungkusan — sebarang bahan yang dipegang dan dibaca dekat.',
      resLarge: '150 DPI — Format Besar & Kain Rentang',
      resLargeDesc: 'Kain rentang, latar pentas, papan tanda — dilihat dari jarak jauh, jadi 150 DPI mencukupi dan mengurangkan saiz fail.',
      resLine: '1200 DPI — Seni Garisan & Tandatangan',
      resLineDesc: 'Logo yang diimbas, tandatangan, dan seni garisan satu warna untuk memastikan tepi garisan licin tanpa bintik piksel.',
      resAlert: 'Tidak kira betapa tinggi resolusi DPI fail anda, jika foto di dalamnya adalah RGB, ia akan ditukar secara automatik pada mesin dan warnanya mungkin berubah.',
      textLineTitle: 'Saiz Fon & Ketebalan Garisan',
      textLineBullet1: 'Saiz fon minimum untuk teks biasa: 4 pt.',
      textLineBullet2: 'Saiz fon minimum untuk kerajang emas timbul: 10 pt (fon sans-serif tebal memberi hasil terbaik).',
      textLineBullet3: 'Teks di bawah 5 pt yang tidak ditebalkan (bold) mesti ditukar kepada bentuk garis luar (create outlines) untuk mengelakkan kabur.',
      textLineBullet4: 'Ketebalan garisan minimum: 0.25 pt — sebarang garisan lebih halus berisiko putus semasa percetakan.',
      textLineBullet5: 'Elakkan teks putih halus di atas latar belakang hitam atau gelap — limpahan dakwat boleh menutup teks kecil tersebut.',
      fileFormatsTitle: 'Format Fail yang Diterima',
      fileFormatsBullet1: 'PDF Sedia Cetak dengan fon dihurufkan (convert to outlines/curves) adalah pilihan utama untuk semua kerja.',
      fileFormatsBullet2: 'Adobe Illustrator (.AI), Photoshop (.PSD) dengan lapisan teks diratakan, dan format EPS berkualiti tinggi turut diterima.',
      fileFormatsBullet3: 'Kesan ketelusan (transparency) dan kesan lapisan khas hendaklah diratakan (flattened) sebelum dihantar.',
      fileFormatsBullet4: 'Fail Microsoft Word, PowerPoint atau imej tangkap layar skrin biasanya tidak memenuhi piawaian cetakan komersial.',
      bleedSectionTag: 'PERSEDIAAN PRA-TEKAN',
      bleedSectionTitle: 'Lebihan Potong (Bleed), Garisan Potong & Zon Selamat',
      bleedSectionSub: 'Tiga ukuran paling penting yang menentukan sama ada fail anda boleh terus dicetak atau perlu dibetulkan.',
      bleedBadge: 'Lebihan Potong (+5 mm)',
      trimBadge: 'Garisan Potong (Saiz Akhir)',
      safeBadge: 'Zon Selamat (−5 mm)',
      safeKeepLogos: 'Kekalkan logo & teks di dalam zon ini',
      bleedExpl: 'Lebihan potong (bleed) adalah kawasan tambahan 5 mm di sekeliling saiz akhir produk anda. Ini memastikan warna latar belakang dicetak melepasi garisan potong supaya tiada tepi putih kelihatan apabila kertas dipotong. Garisan potong adalah ukuran sebenar produk siap anda. Zon selamat adalah 5 mm ke dalam dari garisan potong — kekalkan semua teks dan logo di dalam zon ini agar tidak terpotong oleh mata pisau pemotong.',
      tableHeaderItem: 'Item Cetakan',
      tableHeaderTrim: 'Saiz Akhir (TRIM)',
      tableHeaderBleed: 'Saiz dengan Lebihan Potong (BLEED)',
      customSizesNote: 'Perlukan saiz tersuai? Beritahu kami saiz akhir yang anda inginkan dan kami akan maklumkan ukuran lebihan potong yang tepat.',
      detailedSpecsTitle: 'Spesifikasi Mengikut Kategori Produk',
      noArtworkYetTitle: 'Belum mempunyai reka bentuk sedia cetak?',
      noArtworkYetDesc: 'Pasukan pereka grafik dalaman kami di Kuching sedia membantu mereka bentuk dari awal — atau memeriksa fail yang anda ada sekarang tanpa bayaran.',
      requestQuoteBtn: 'Minta Sebut Harga',
      chatWhatsappBtn: 'Bincang di WhatsApp',
      accordion: [
        {
          id: 'orientation',
          title: 'Orientasi Seni Reka Depan & Belakang',
          content: 'Pastikan reka bentuk muka hadapan dan belakang menggunakan orientasi yang sama (kedua-duanya potret atau kedua-duanya landskap) agar tidak dicetak terbalik semasa proses cetakan dua muka.'
        },
        {
          id: 'booklet',
          title: 'Kiraan Muka Surat Buku & Risalah Jahit Dawai (Saddle Stitch)',
          content: 'Untuk buku jilid dawai, jumlah muka surat mestilah dalam gandaan 4 (cth: 8, 12, 16, 24, 32 halaman). Sediakan fail PDF halaman tunggal berturutan berserta lebihan potong 5mm — susunan cetakan (imposition) akan diuruskan oleh kami.'
        },
        {
          id: 'stickers',
          title: 'Penyediaan Garisan Potong Pelekat (Die-Cut Sticker)',
          content: 'Untuk pelekat bentuk khas, letakkan garisan pisau pemotong pada lapisan berasingan bertajuk "CutContour" menggunakan strok vektor 100% Magenta bersaiz 0.5pt. Lebihkan latar belakang 2mm melepasi garisan potong.'
        },
        {
          id: 'packaging',
          title: 'Garisan Acuan Kotak Pembungkusan (Die-Lines)',
          content: 'Garisan pisau acuan kotak hendaklah ditandakan dengan garisan merah padu untuk potongan dan garisan putus-putus hijau untuk lipatan. Dapatkan templat CAD standard daripada kami sebelum mereka bentuk.'
        },
        {
          id: 'foil-uv',
          title: 'Lapisan Masking Kerajang Emas (Foil) & Spot UV',
          content: 'Sediakan elemen foil atau Spot UV pada lapisan berasingan menggunakan warna hitam pekat 100% (K100) vektor sahaja tanpa sebarang kecerunan (gradient) atau ketelusan.'
        },
        {
          id: 'running-numbers',
          title: 'Nombor Siri & Garisan Tebukan (Buku Bil NCR)',
          content: 'Nyatakan kedudukan nombor siri berurutan untuk buku resit dan invois. Kami menyediakan nombor jentera 6 digit warna merah atau hitam serta tebukan garisan koyak (perforation) kemas.'
        }
      ]
    },
    footer: {
      addressTitle: 'Fasiliti Pengeluaran',
      addressText: 'No. 37, Lot 75, Section 63, Tingkat 1, Jalan Chan Bee Kiew, 93450 Kuching, Sarawak',
      contactTitle: 'Hubungi Terus',
      siteTitle: 'Navigasi Laman',
      languageTitle: 'Pilihan Bahasa / Language / 语言',
      languageHelp: 'Laman ini menyokong dwibahasa & tribahasa (Bahasa Melayu, English, 中文). Tukar pada bila-bila masa.',
      currentLabel: 'Bahasa Semasa',
      sarawakTrilingual: 'Edisi Tribahasa Sarawak • English / 中文 / Bahasa Melayu'
    },
    firstTimeModal: {
      welcome: 'Selamat Datang ke Heng Sing Brothers Press',
      choosePrompt: 'Sila pilih bahasa pilihan anda',
      subPrompt: 'Percetakan komersial dan pembekal berdaftar kerajaan di Kuching, Sarawak sejak 1990.',
      confirmBtn: 'Teruskan dengan Bahasa Pilihan',
      changeLaterNote: 'Anda boleh menukar bahasa pada bila-bila masa di bahagian bawah mana-mana halaman.',
      enName: 'English (Bahasa Inggeris)',
      enDesc: 'Spesifikasi rasmi perniagaan & teknikal',
      zhName: '中文 (Bahasa Cina / Mandarin)',
      zhDesc: 'Syarikat percetakan ternama Kuching lebih 34 tahun',
      msName: 'Bahasa Melayu',
      msDesc: 'Percetakan Komersial & Pembekal Berdaftar Kerajaan'
    },
    categories: {
      'business-essentials': {
        name: 'Keperluan Asas Perniagaan',
        shortDesc: 'Kad perniagaan, kepala surat, sampul surat, buku invois resit',
        badge: 'Larian Tunggal & Pukal',
        description: 'Alat tulis kemas direka khusus untuk PKS dan syarikat ternama. Daripada 100 keping kad nama hingga 10,000 buku invois tanpa karbon dengan nombor siri berurutan.',
        items: ['Kad perniagaan premium', 'Kepala surat rasmi', 'Sampul surat korporat', 'Buku invois & resit NCR', 'Fail poket dokumen']
      },
      'packaging-boxes': {
        name: 'Pembungkusan & Kotak',
        shortDesc: 'Kotak hadiah, pembungkusan produk, saiz tersuai',
        badge: 'Potongan Struktur Khas',
        description: 'Potongan acuan struktur tersuai, karton lipat, sarung makanan gred selamat dan kotak hadiah tegar eksklusif. Prototaip kotak tunggal atau larian jualan penuh.',
        items: ['Kotak hadiah eksklusif', 'Karton pembungkusan produk', 'Kotak acuan khas berpemegang', 'Sarung gred makanan', 'Kotak tegar bermagnet']
      },
      'signage-large-format': {
        name: 'Papan Tanda & Format Besar',
        shortDesc: 'Kain rentang, latar belakang pentas, bunting, pemasangan di lokasi',
        badge: 'Termasuk Pemasangan',
        description: 'Cetakan format lebar resolusi tinggi pelarut dan UV untuk ketahanan luar dan kecerahan dalam bangunan. Kami turut menyediakan pemasangan di sekitar Kuching.',
        items: ['Kain rentang tahan cuaca', 'Latar belakang pentas acara', 'Bunting & dirian mudah alih', 'Papan tanda akrilik kedai', 'Pemasangan tapak di Kuching']
      },
      'apparel-fabric': {
        name: 'Pakaian & Fabrik',
        shortDesc: 'Baju T, pakaian seragam, cetakan jersi sublimasi, beg tote',
        badge: 'Cetakan Skrin & Haba',
        description: 'Cetakan pakaian tahan lama merangkumi 100% kapas, mikrofiber dri-fit, dan kanvas. Sesuai untuk hari sukan korporat, kelab sekolah, dan seragam kakitangan.',
        items: ['Baju T kapas tersuai', 'Kemeja polo korporat', 'Jersi sukan sublimasi', 'Beg tote kanvas kapas', 'Sulaman berkomputer']
      },
      'promotional-gifts': {
        name: 'Cenderahati Korporat & Promosi',
        shortDesc: 'Termos bertebat, cawan seramik, pen logam, diari eksekutif',
        badge: 'Ukiran Laser & Cetakan UV',
        description: 'Jadikan logo anda sebagai ingatan harian. Cetakan UV silinder pada termos, ukiran laser pada pen logam, dan buku diari kulit PU bertimbul.',
        items: ['Termos haba bertebat', 'Cawan seramik berjenama', 'Pen logam berukir laser', 'Diari eksekutif kulit PU', 'Payung promosi berkualiti']
      },
      'photo-canvas': {
        name: 'Cetakan Foto & Kanvas',
        shortDesc: 'Kanvas regang berbingkai, cetakan muzium, buku foto',
        badge: 'Dakwat Arkib Tahan Pudar',
        description: 'Cetakan foto gred muzium gamut warna luas pada kanvas kapas ditenun sebenar dan kertas seni halus. Diregang tangan di atas kayu khas kering.',
        items: ['Kanvas seni berbingkai kayu', 'Cetakan muzium berbingkai', 'Buku foto berkulit keras', 'Cetakan terapung akrilik', 'Lekapan papan busa pameran']
      },
      'stickers-labels': {
        name: 'Pelekat & Label Produk',
        shortDesc: 'Label kalis air, pelekat bentuk khas, label gulung',
        badge: 'Sebarang Bentuk Kontur',
        description: 'Pemotongan kontur optik tepat untuk sebarang bentuk pelekat. Tersedia dalam vinil sintetik kalis air, kertas kraft, kerajang emas, dan substrat lutsinar.',
        items: ['Label vinil kalis air minuman', 'Helaian pelekat die-cut', 'Label gulungan pembungkusan', 'Pelekat kerajang berkilat', 'Pelekat lutsinar bersih']
      },
      'souvenirs': {
        name: 'Cenderamata & Kad Jemputan',
        shortDesc: 'Kad jemputan perkahwinan, cenderahati pintu, sijil penghargaan',
        badge: 'Kemasan Kerajang & Timbul',
        description: 'Abadikan detik bersejarah dengan set perkahwinan bertempa kerajang emas, cenderamata kayu berukir laser, dan sijil berlogo jata berkilat.',
        items: ['Set kad jemputan perkahwinan', 'Cenderahati tetamu majlis', 'Sijil penghargaan rasmi', 'Trofi akrilik khas', 'Lencana nama acara']
      }
    }
  }
};
