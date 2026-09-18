import React from 'react';
import { MessageCircle, Mail, FileText, BookOpen, Gift, Calendar, CreditCard, Check, ArrowRight } from 'lucide-react';
import { HENG_SING_INFO } from '../data/hengSingContent';
import { CorporateShowcaseGraphic } from './CorporateShowcaseGraphic';
import { CorporateItemCardGraphic } from './CorporateItemCardGraphic';
import { useLanguage } from '../context/LanguageContext';

interface CorporateViewProps {
  onOpenQuote: () => void;
  onReadGuide: () => void;
}

export const CorporateView: React.FC<CorporateViewProps> = ({ onOpenQuote, onReadGuide }) => {
  const { t } = useLanguage();
  const page = t.corporatePage;

  const itemIcons = [FileText, BookOpen, Gift, Calendar, CreditCard];
  const graphicTypes = ['Annual Reports', 'Journals & Booklets', 'Corporate Gifts', 'Calendars & Diaries', 'Business Stationery'];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
            &bull; {page.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-neutral-900 tracking-tight leading-tight">
            {page.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">
            {page.desc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-sm font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{page.quoteBtn}</span>
            </button>

            <a
              href={HENG_SING_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border-2 border-neutral-300 hover:border-neutral-900 text-neutral-800 text-sm font-semibold flex items-center gap-2 transition-all hover:bg-neutral-50 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{page.whatsappBtn}</span>
            </a>
          </div>
        </div>

        {/* Graphical Presentation for Corporate & Institutional Suite */}
        <div className="lg:col-span-6">
          <CorporateShowcaseGraphic />
        </div>
      </div>

      {/* What We Print Section with Graphical Cards */}
      <div className="space-y-8 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-neutral-900">
              {page.whatWePrint}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              {page.whatWePrintSub}
            </p>
          </div>
          <span className="text-xs font-mono text-[#C83B25] font-semibold">
            {page.tagLine}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4.5">
          {page.items.map((item, idx) => {
            const Icon = itemIcons[idx % itemIcons.length];
            const graphicType = graphicTypes[idx % graphicTypes.length];
            return (
              <div
                key={idx}
                className="p-4.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col justify-between space-y-3 hover:border-neutral-400 hover:shadow-sm transition-all group"
              >
                {/* Visual Graphic Representation for each item */}
                <CorporateItemCardGraphic type={graphicType} />

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-lg bg-neutral-100 text-[#C83B25] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-neutral-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-500 line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-800">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{page.pillar1}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-800">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{page.pillar2}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-800">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{page.pillar3}</span>
          </div>
        </div>
      </div>

      {/* Guide Banner Card */}
      <div
        onClick={onReadGuide}
        className="mb-16 p-6 sm:p-8 rounded-3xl bg-neutral-100 border border-neutral-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-neutral-400 transition-colors cursor-pointer group"
      >
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-display font-bold text-neutral-900 group-hover:text-[#C83B25] transition-colors">
            {page.guideBannerTitle}
          </h3>
          <p className="text-xs text-neutral-600">
            {page.guideBannerSub}
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C83B25] font-mono shrink-0">
          <span>{page.readGuideBtn}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Send us your requirements CTA */}
      <div className="text-center space-y-4 py-8 border-t border-neutral-200">
        <h3 className="text-xl font-display font-bold text-neutral-900">
          {page.sendRequirementsTitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{page.requestQuoteEmailBtn}</span>
          </button>
          <a
            href={HENG_SING_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{page.orWhatsappBtn}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
