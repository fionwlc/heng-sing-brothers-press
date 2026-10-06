import React, { useState } from 'react';
import { MessageCircle, Menu, X, Share2, Check } from 'lucide-react';
import { HENG_SING_INFO } from '../data/hengSingContent';
import { HengSingLogo } from './HengSingLogo';
import { useLanguage } from '../context/LanguageContext';
import { useRouter, Link, AppView } from '../context/RouterContext';

interface NavbarProps {
  currentView?: string;
  onNavigate?: (view: string) => void;
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView: propView,
  onNavigate,
  onOpenQuote: propOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { currentView: routerView, navigate, openQuote } = useRouter();

  const activeView = (propView || routerView) as AppView;

  const navLinks: { id: AppView; path: string; label: string }[] = [
    { id: 'home', path: '/', label: t.nav.home },
    { id: 'catalogue', path: '/catalogue', label: t.nav.catalogue },
    { id: 'corporate', path: '/corporate', label: t.nav.corporate },
    { id: 'guides', path: '/guides', label: t.nav.guides },
    { id: 'partner', path: '/partner', label: t.nav.partner },
    { id: 'about', path: '/about', label: t.nav.about }
  ];

  const handleNavClick = (view: AppView, path: string) => {
    if (onNavigate) {
      onNavigate(view);
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  const handleQuoteClick = () => {
    if (propOpenQuote) {
      propOpenQuote();
    } else {
      openQuote();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs transition-colors">
      {/* Top subtle prepress registration strip */}
      <div className="w-full grid grid-cols-12 h-1">
        <div className="bg-[#00E5FF]" />
        <div className="bg-[#00E5FF]/60" />
        <div className="bg-[#FF007F]" />
        <div className="bg-[#FF007F]/60" />
        <div className="bg-[#FFEB3B]" />
        <div className="bg-[#FFEB3B]/60" />
        <div className="bg-neutral-900" />
        <div className="bg-neutral-700" />
        <div className="bg-[#00E5FF]" />
        <div className="bg-[#FF007F]" />
        <div className="bg-[#FFEB3B]" />
        <div className="bg-neutral-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo as designated home link */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-left group cursor-pointer"
            aria-label="Heng Sing Brothers Press Home"
            title="Heng Sing Brothers Press - Kuching (Home)"
          >
            <div className="relative flex items-center gap-2">
              <HengSingLogo size="sm" showRegistrationMarks={false} className="group-hover:opacity-90 transition-opacity" />
            </div>
          </Link>

          {/* Desktop Navigation Links with real hrefs */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'text-neutral-950 font-bold bg-neutral-100 shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/quote"
              className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-colors cursor-pointer ${
                activeView === 'quote'
                  ? 'border-neutral-900 bg-neutral-900 text-white'
                  : 'border-neutral-300 text-neutral-800 hover:bg-neutral-50'
              }`}
            >
              {t.nav.quoteButton}
            </Link>
            <a
              href={HENG_SING_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#C83B25] text-white text-sm font-semibold flex items-center gap-2 hover:bg-[#b0321d] transition-colors cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Hamburger / Mobile & Tablet Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-lg bg-[#C83B25] text-white text-xs font-semibold cursor-pointer"
            >
              {t.nav.quoteButton}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeView === link.id;
            return (
              <Link
                key={link.id}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-neutral-100 text-neutral-950 font-bold'
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2">
            <Link
              href="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl border border-neutral-300 text-neutral-800 text-sm font-semibold text-center block"
            >
              {t.nav.quoteButton}
            </Link>
            <a
              href={HENG_SING_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#C83B25] text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.whatsappButton} (013-3282828)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
