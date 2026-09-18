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
import { MessageCircle, Activity } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [quoteCategory, setQuoteCategory] = useState<string>('Business Essentials');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
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

  const handleOpenQuote = (category?: string) => {
    if (category) {
      setQuoteCategory(category);
    }
    // Switch to quote view or open modal
    setCurrentView('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Persistent Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main View Router */}
      <main className="relative z-10 flex-1">
        {currentView === 'home' && (
          <HomePageView
            onOpenQuote={() => handleOpenQuote()}
            onNavigateTo={(view) => setCurrentView(view)}
            onSelectCategory={(catName) => handleOpenQuote(catName)}
            onSelectGuide={(guideId) => {
              if (guideId === 'artwork-guide') {
                setCurrentView('guidelines');
              } else {
                setCurrentView('guides');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCategoryHoverChange={(idx) => setActiveCategoryIndex(idx)}
          />
        )}

        {currentView === 'catalogue' && (
          <HengSingCatalogueView
            onEnquireCategory={(catName) => handleOpenQuote(catName)}
          />
        )}

        {currentView === 'corporate' && (
          <CorporateView
            onOpenQuote={() => handleOpenQuote('Corporate Annual Report / Journal')}
            onReadGuide={() => {
              setCurrentView('guides');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'guides' && (
          <GuidesFaqView
            onSelectGuide={(guideId) => {
              if (guideId === 'artwork-guide') {
                setCurrentView('guidelines');
              } else {
                setCurrentView('guidelines');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenQuote={() => handleOpenQuote('Business Starter Kit')}
          />
        )}

        {currentView === 'guidelines' && (
          <GuidelinesView
            onBackToGuides={() => setCurrentView('guides')}
            onRequestQuote={() => handleOpenQuote()}
          />
        )}

        {currentView === 'partner' && (
          <PartnerView
            onOpenQuote={() => handleOpenQuote('Event Essentials Kit')}
            onReadChecklist={() => {
              setCurrentView('guides');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'about' && (
          <AboutView onOpenQuote={() => handleOpenQuote()} />
        )}

        {currentView === 'quote' && (
          <QuoteView
            initialCategory={quoteCategory}
            onViewGuidelines={() => setCurrentView('guidelines')}
          />
        )}
      </main>

      {/* Floating Bottom Action Bar: WhatsApp Quick Connect & Live CMYK Monitor */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
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
      <Footer onNavigate={(view) => setCurrentView(view)} />

      {/* First-Time Visitor Language Selection Modal */}
      <LanguageSelectionModal />
    </div>
  );
}
