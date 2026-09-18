import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { HENG_SING_INFO } from '../data/hengSingContent';
import { RotatableBusinessCard3D } from './RotatableBusinessCard3D';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreCatalogue: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote, onExploreCatalogue }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Core Message & Stats */}
        <div className="lg:col-span-7 space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-[#C83B25] text-xs font-mono font-semibold tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#C83B25] animate-pulse" />
            <span dangerouslySetInnerHTML={{ __html: t.hero.heritageTag }} />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-neutral-900 leading-[1.08]">
            {t.hero.headlinePart1}{' '}
            <span className="relative whitespace-nowrap">
              <span className="text-[#C83B25]">{t.hero.headlinePart2}</span>
              {/* Cyan highlighter understroke */}
              <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#00E5FF]/40 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            {t.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={HENG_SING_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-sm font-semibold flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.hero.ctaWhatsapp}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-xl border-2 border-neutral-300 hover:border-neutral-900 text-neutral-800 text-sm font-semibold transition-all hover:bg-neutral-50 active:scale-95 cursor-pointer"
            >
              {t.hero.ctaQuote}
            </button>
          </div>

          {/* Key 4 Highlights from page 6 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-200">
            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-neutral-900">{t.hero.stat1Val}</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">{t.hero.stat1Label}</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-display font-bold text-neutral-900">{t.hero.stat2Val}</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">{t.hero.stat2Label}</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-display font-bold text-neutral-900">{t.hero.stat3Val}</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">{t.hero.stat3Label}</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-display font-bold text-neutral-900">{t.hero.stat4Val}</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">{t.hero.stat4Label}</div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Business Card with Heng Sing Brothers Press */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full">
          <div className="w-full max-w-lg relative flex flex-col items-center">
            <RotatableBusinessCard3D />
          </div>
        </div>
      </div>
    </section>
  );
};
