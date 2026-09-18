export interface CmykColor {
  c: number;
  m: number;
  y: number;
  k: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  cmykValues: CmykColor;
  accentColor: string;
  badge: string;
  specs: {
    maxSheetSize: string;
    stockRange: string;
    resolution: string;
    productionSpeed: string;
    dryingTech: string;
    standardTurnaround: string;
  };
  equipment: {
    model: string;
    maker: string;
    features: string[];
  };
  featuredProducts: {
    title: string;
    description: string;
    tags: string[];
    finishingHighlights: string[];
  }[];
  substrateOptions: {
    name: string;
    weight: string;
    finish: string;
    certified: string;
  }[];
  processMetrics?: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface ServiceCategoryItem {
  id: string;
  name: string;
  shortDesc: string;
  items: string[];
  cmykValues: { c: number; m: number; y: number; k: number };
  accentColor: string;
  badge: string;
  iconName: string;
  description: string;
  featuredWork: {
    title: string;
    description: string;
    tag: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

export interface GuideItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  specs: string;
  tag: string;
  clientType: string;
}
