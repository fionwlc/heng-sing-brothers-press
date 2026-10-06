import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePageView } from './components/HomePageView';
import { HengSingCatalogueView } from './components/HengSingCatalogueView';
import { CorporateView } from './components/CorporateView';
import { GuidelinesView } from './components/GuidelinesView';
import { GuidesFaqView } from './components/GuidesFaqView';
import { PartnerView } from './components/PartnerView';
import { AboutView } from './components/AboutView';
import { QuoteView } from './components/QuoteView';
import { Footer } from './components/Footer';
import { CmykFlowCanvas } from './components/CmykFlowCanvas';
import { LanguageSelectionModal } from './components/LanguageSelectionModal';
import { HENG_SING_CATEGORIES, HENG_SING_INFO } from './data/hengSingContent';
import { MessageCircle, Activity, Link2, Check } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';
import { useRouter } from './context/RouterContext';

export default function App() {
  const { currentView, navigate, quoteCategory, openQuote, currentPath } = useRouter();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [linkCopied, setLinkCopied] = useState<boolean>(false);
  const { language } = useLanguage();

  // Track window scroll progress for CMYK fluid ink stream
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const progress = totalScroll > 0 ? current / totalScroll : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyDesignatedUrl = () => {
    try {
      const fullUrl = `${window.location.origin}${currentPath}`;
      navigator.clipboard.writeText(fullUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const activeCat = HENG_SING_CATEGORIES[activeCategoryIndex] || HENG_SING_CATEGORIES[0];
  const { c, m, y, k } = activeCat.cmykValues;

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-neutral-900 selection:bg-[#C83B25] selection:text-white font-sans flex flex-col justify-between">
      {/* Background Interactive Fluid CMYK Flow Mixing Canvas */}
      <CmykFlowCanvas
        activeCategoryIndex={activeCategoryIndex}
        scrollProgress={scrollProgress}
      />

      {/* Persistent Navigation Bar with designated links */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => navigate(view)}
        onOpenQuote={() => openQuote()}
      />

      {/* Main View Router */}
      <main className="relative z-10 flex-1">
        {currentView === 'home' && (
          <HomePageView
            onOpenQuote={() => openQuote()}
            onNavigateTo={(view) => navigate(view)}
            onSelectCategory={(catName) => openQuote(catName)}
            onSelectGuide={(guideId) => {
              if (guideId === 'artwork-guide') {
                navigate('guidelines');
              } else {
                navigate('guides');
              }
            }}
            onCategoryHoverChange={(idx) => setActiveCategoryIndex(idx)}
          />
        )}

        {currentView === 'catalogue' && (
          <HengSingCatalogueView
            onEnquireCategory={(catName) => openQuote(catName)}
          />
        )}

        {currentView === 'corporate' && (
          <CorporateView
            onOpenQuote={() => openQuote('Corporate Annual Report / Journal')}
            onReadGuide={() => navigate('guides')}
          />
        )}

        {currentView === 'guides' && (
          <GuidesFaqView
            onSelectGuide={(guideId) => {
              if (guideId === 'artwork-guide') {
                navigate('guidelines');
              } else {
                navigate('guidelines');
              }
            }}
            onOpenQuote={() => openQuote('Business Starter Kit')}
          />
        )}

        {currentView === 'guidelines' && (
          <GuidelinesView
            onBackToGuides={() => navigate('guides')}
            onRequestQuote={() => openQuote()}
          />
        )}

        {currentView === 'partner' && (
          <PartnerView
            onOpenQuote={() => openQuote('Event Essentials Kit')}
            onReadChecklist={() => navigate('guides')}
          />
        )}

        {currentView === 'about' && (
          <AboutView onOpenQuote={() => openQuote()} />
        )}

        {currentView === 'quote' && (
          <QuoteView
            initialCategory={quoteCategory}
            onViewGuidelines={() => navigate('guidelines')}
          />
        )}
      </main>

      {/* Floating Bottom Action Bar: WhatsApp Quick Connect, Designated Link Badge & Live CMYK Monitor */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 sm:gap-3">
        {/* Designated Page URL Copy Pill */}
        <button
          onClick={handleCopyDesignatedUrl}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-neutral-200/90 shadow-md text-[11px] font-mono backdrop-blur-md hover:bg-neutral-50 hover:border-neutral-300 transition-all cursor-pointer group"
          title={`Copy designated link: ${currentPath}`}
          aria-label="Copy designated page link"
        >
          {linkCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-[10px]">
                {language === 'zh' ? '已复制页面链接' : language === 'ms' ? 'Pautan Disalin' : 'Link Copied'}
              </span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#C83B25] transition-colors" />
              <span className="text-neutral-500 group-hover:text-neutral-900 text-[10px] font-semibold">
                {currentPath === '/' ? '/home' : currentPath}
              </span>
            </>
          )}
        </button>

        {/* Floating CMYK Density Monitor */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-neutral-200/90 shadow-lg text-[11px] font-mono backdrop-blur-md">
          <Activity className="w-3.5 h-3.5 text-[#C83B25]" />
          <span className="text-neutral-400 font-semibold uppercase text-[9px]">
            {language === 'zh' ? '油墨密度:' : language === 'ms' ? 'Aliran Dakwat:' : 'Ink Flow:'}
          </span>
          <span className="text-[#00A3E0] font-bold">C:{c}%</span>
          <span className="text-[#E6007E] font-bold">M:{m}%</span>
          <span className="text-[#FFED00] font-bold">Y:{y}%</span>
          <span className="text-neutral-900 font-bold">K:{k}%</span>
        </div>

        {/* Floating WhatsApp Contact Button */}
        <a
          href={HENG_SING_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 active:scale-95 group cursor-pointer"
          title="Chat with Heng Sing on WhatsApp (013-3282828)"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline text-xs font-bold font-sans tracking-wide">
            WhatsApp 013-3282828
          </span>
        </a>
      </div>

      {/* Site Footer */}
      <Footer onNavigate={(view) => navigate(view)} />

      {/* First-Time Visitor Language Selection Modal */}
      <LanguageSelectionModal />
    </div>
  );
}
