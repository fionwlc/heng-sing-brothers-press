import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLanguage } from './LanguageContext';

export type AppView =
  | 'home'
  | 'catalogue'
  | 'corporate'
  | 'guides'
  | 'guidelines'
  | 'partner'
  | 'about'
  | 'quote';

export interface RouteMeta {
  view: AppView;
  path: string;
  aliases: string[];
  titleEn: string;
  titleZh: string;
  titleMs: string;
}

export const ROUTES: Record<AppView, RouteMeta> = {
  home: {
    view: 'home',
    path: '/',
    aliases: ['/home', '/index.html'],
    titleEn: 'Heng Sing Brothers Press — Quality Printing For Every Order Size',
    titleZh: '恒新兄弟印务 — 砂拉越古晋 34 年品质印刷与数码制作',
    titleMs: 'Heng Sing Brothers Press — Percetakan Berkualiti Kuching Sarawak'
  },
  catalogue: {
    view: 'catalogue',
    path: '/catalogue',
    aliases: ['/catalog', '/products', '/services'],
    titleEn: 'Product & Material Catalogue | Heng Sing Brothers Press',
    titleZh: '产品与材料规格目录 | 恒新兄弟印务',
    titleMs: 'Katalog Produk & Bahan | Heng Sing Brothers Press'
  },
  corporate: {
    view: 'corporate',
    path: '/corporate',
    aliases: ['/government', '/institutional', '/b2b'],
    titleEn: 'Corporate & Government Printing | Heng Sing Brothers Press',
    titleZh: '政企出版与官方机构印刷 | 恒新兄弟印务',
    titleMs: 'Percetakan Korporat & Kerajaan | Heng Sing Brothers Press'
  },
  guides: {
    view: 'guides',
    path: '/guides',
    aliases: ['/faq', '/faqs', '/help'],
    titleEn: 'Sarawak Print Guides & FAQ | Heng Sing Brothers Press',
    titleZh: '印刷知识库与常见问题 | 恒新兄弟印务',
    titleMs: 'Panduan Percetakan & Soalan Lazim | Heng Sing Brothers Press'
  },
  guidelines: {
    view: 'guidelines',
    path: '/guidelines',
    aliases: ['/artwork-guide', '/artwork-guidelines', '/prepress', '/specs'],
    titleEn: 'Artwork Prepress Guidelines | Heng Sing Brothers Press',
    titleZh: '稿件印前制作规范与出血指引 | 恒新兄弟印务',
    titleMs: 'Garis Panduan Fail & Pra-Cetak | Heng Sing Brothers Press'
  },
  partner: {
    view: 'partner',
    path: '/partner',
    aliases: ['/partners', '/events', '/event-production'],
    titleEn: 'Event & Institutional Production Partner | Heng Sing Brothers Press',
    titleZh: '大型盛会与政企活动物料制作 | 恒新兄弟印务',
    titleMs: 'Rakan Acara & Pengeluaran Rasmi | Heng Sing Brothers Press'
  },
  about: {
    view: 'about',
    path: '/about',
    aliases: ['/about-us', '/story', '/contact'],
    titleEn: 'About Us — 34 Years in Kuching | Heng Sing Brothers Press',
    titleZh: '关于我们 — 扎根古晋 34 年印艺传承 | 恒新兄弟印务',
    titleMs: 'Tentang Kami — 34 Tahun di Kuching | Heng Sing Brothers Press'
  },
  quote: {
    view: 'quote',
    path: '/quote',
    aliases: ['/get-quote', '/estimator', '/inquiry', '/enquire'],
    titleEn: 'Get an Instant Quotation | Heng Sing Brothers Press',
    titleZh: '快速报价咨询与订购估价 | 恒新兄弟印务',
    titleMs: 'Dapatkan Sebut Harga Cetakan | Heng Sing Brothers Press'
  }
};

/**
 * Resolves a given path string (or hash or view name) to a valid AppView
 */
export function resolveRoute(inputPath: string): { view: AppView; category?: string } {
  let clean = inputPath.trim();

  // Strip query string and extract category if present
  let category: string | undefined;
  if (clean.includes('?')) {
    const [pathPart, queryPart] = clean.split('?');
    clean = pathPart;
    const params = new URLSearchParams(queryPart);
    if (params.get('category')) {
      category = params.get('category') || undefined;
    }
    if (params.get('page') || params.get('view')) {
      const pageParam = (params.get('page') || params.get('view'))?.toLowerCase();
      if (pageParam && pageParam in ROUTES) {
        return { view: pageParam as AppView, category };
      }
    }
  }

  // Handle hash-based URLs (e.g. #/catalogue, #about)
  if (clean.startsWith('#')) {
    clean = clean.replace(/^#\/?/, '/');
  }

  // Remove trailing slashes (except root '/')
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }

  // If clean is empty, it's root
  if (!clean || clean === '/') {
    return { view: 'home', category };
  }

  // Directly matches a view name (e.g. 'corporate' or '/corporate')
  const stripped = clean.startsWith('/') ? clean.slice(1).toLowerCase() : clean.toLowerCase();
  if (stripped in ROUTES) {
    return { view: stripped as AppView, category };
  }

  const normalized = clean.startsWith('/') ? clean.toLowerCase() : `/${clean.toLowerCase()}`;

  // Check ROUTES paths and aliases
  for (const key of Object.keys(ROUTES) as AppView[]) {
    const route = ROUTES[key];
    if (route.path === normalized) {
      return { view: key, category };
    }
    if (route.aliases.some(alias => alias.toLowerCase() === normalized)) {
      return { view: key, category };
    }
  }

  // Fallback to home
  return { view: 'home', category };
}

export interface NavigateOptions {
  replace?: boolean;
  scroll?: boolean;
  category?: string;
}

interface RouterContextType {
  currentView: AppView;
  currentPath: string;
  quoteCategory: string;
  setQuoteCategory: (category: string) => void;
  navigate: (to: string | AppView, options?: NavigateOptions) => void;
  openQuote: (category?: string) => void;
  getHref: (view: AppView | string, category?: string) => string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [currentView, setCurrentView] = useState<AppView>(() => {
    if (typeof window === 'undefined') return 'home';
    // Check hash first if provided
    if (window.location.hash && window.location.hash.length > 1) {
      const parsed = resolveRoute(window.location.hash);
      return parsed.view;
    }
    // Check pathname & search
    const currentFull = window.location.pathname + window.location.search;
    return resolveRoute(currentFull).view;
  });

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    return window.location.pathname;
  });

  const [quoteCategory, setQuoteCategory] = useState<string>(() => {
    if (typeof window === 'undefined') return 'Business Essentials';
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || 'Business Essentials';
  });

  // Helper to generate canonical href
  const getHref = useCallback((viewOrPath: AppView | string, category?: string): string => {
    let basePath = '/';
    if (viewOrPath in ROUTES) {
      basePath = ROUTES[viewOrPath as AppView].path;
    } else if (typeof viewOrPath === 'string' && viewOrPath.startsWith('/')) {
      basePath = viewOrPath;
    } else {
      const resolved = resolveRoute(viewOrPath);
      basePath = ROUTES[resolved.view].path;
    }

    if (category) {
      return `${basePath}${basePath.includes('?') ? '&' : '?'}category=${encodeURIComponent(category)}`;
    }
    return basePath;
  }, []);

  // Update document title when currentView or language changes
  useEffect(() => {
    const route = ROUTES[currentView] || ROUTES.home;
    const title = language === 'zh'
      ? route.titleZh
      : language === 'ms'
      ? route.titleMs
      : route.titleEn;
    document.title = title;
  }, [currentView, language]);

  // Navigate to designated link
  const navigate = useCallback((to: string | AppView, options?: NavigateOptions) => {
    let targetView: AppView = 'home';
    let targetPath = '/';
    let categoryToSet = options?.category;

    if (to in ROUTES) {
      targetView = to as AppView;
      targetPath = ROUTES[targetView].path;
    } else {
      const resolved = resolveRoute(to as string);
      targetView = resolved.view;
      targetPath = ROUTES[targetView].path;
      if (!categoryToSet && resolved.category) {
        categoryToSet = resolved.category;
      }
    }

    if (categoryToSet) {
      setQuoteCategory(categoryToSet);
      targetPath = `${targetPath}${targetPath.includes('?') ? '&' : '?'}category=${encodeURIComponent(categoryToSet)}`;
    }

    // Update browser history URL
    try {
      if (options?.replace) {
        window.history.replaceState({ view: targetView }, '', targetPath);
      } else {
        window.history.pushState({ view: targetView }, '', targetPath);
      }
    } catch {
      // Fallback if pushState is restricted
      try {
        window.location.hash = targetPath;
      } catch {
        // Ignore
      }
    }

    setCurrentView(targetView);
    setCurrentPath(targetPath);

    if (options?.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const openQuote = useCallback((category?: string) => {
    navigate('quote', { category });
  }, [navigate]);

  // Listen to browser Back/Forward (popstate) and hashchange events
  useEffect(() => {
    const handlePopState = () => {
      let resolved: { view: AppView; category?: string };

      if (window.location.hash && window.location.hash.length > 1) {
        resolved = resolveRoute(window.location.hash);
      } else {
        const fullUrl = window.location.pathname + window.location.search;
        resolved = resolveRoute(fullUrl);
      }

      setCurrentView(resolved.view);
      setCurrentPath(window.location.pathname);
      if (resolved.category) {
        setQuoteCategory(resolved.category);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  return (
    <RouterContext.Provider
      value={{
        currentView,
        currentPath,
        quoteCategory,
        setQuoteCategory,
        navigate,
        openQuote,
        getHref,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

/**
 * Designated Link component that renders standard <a> tags with clean URLs,
 * accessible markup, and smooth client-side SPA navigation without page refreshes.
 */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  category?: string;
  replace?: boolean;
  scroll?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  category,
  replace = false,
  scroll = true,
  onClick,
  children,
  className,
  target,
  ...props
}) => {
  const { navigate, getHref } = useRouter();
  const canonicalHref = getHref(href, category);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Only intercept standard left clicks without modifier keys
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.shiftKey &&
      (!target || target === '_self')
    ) {
      e.preventDefault();
      navigate(href, { replace, scroll, category });
    }
  };

  return (
    <a
      href={canonicalHref}
      onClick={handleClick}
      target={target}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};
