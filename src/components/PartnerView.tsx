import React from 'react';
import { MessageCircle, Mail, Flag, Image, Wrench, Sparkles, Check, ArrowRight, Layers, QrCode, BookOpen } from 'lucide-react';
import { HENG_SING_INFO } from '../data/hengSingContent';
import { useLanguage } from '../context/LanguageContext';
import { EventProductionShowcaseGraphic } from './EventProductionShowcaseGraphic';

interface PartnerViewProps {
  onOpenQuote: () => void;
  onReadChecklist: () => void;
}

export const PartnerView: React.FC<PartnerViewProps> = ({ onOpenQuote, onReadChecklist }) => {
  const { t } = useLanguage();
  const page = t.partnerPage;

  const capIcons = [Layers, Flag, QrCode, BookOpen, Image, Wrench];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
            &bull; {page.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-neutral-900 tracking-tight leading-tight">
            {page.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">
            {page.desc}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={HENG_SING_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{page.cta}</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-sm font-semibold transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{page.sendEmail}</span>
            </button>
          </div>
        </div>

        {/* Event Production Graphic: Stage Backdrop, Roll-Up Bunting, Lanyard Passes, Programme Guides */}
        <div className="lg:col-span-7">
          <EventProductionShowcaseGraphic onOpenQuote={onOpenQuote} />
        </div>
      </div>

      {/* What We Can Produce */}
      <div className="space-y-8 mb-16">
        <div>
          <h2 className="text-2xl font-display font-black text-neutral-900">
            {page.whatWeProduceTitle}
          </h2>
          <p className="text-xs text-neutral-600 mt-1">
            {page.whatWeProduceSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {page.capabilities.map((item, idx) => {
            const Icon = capIcons[idx % capIcons.length];
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-neutral-100 text-[#C83B25] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm text-neutral-900">{item.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 3 Value Props */}
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

      {/* Event Essentials Kit Banner */}
      <div className="p-8 rounded-3xl bg-neutral-900 text-white shadow-xl mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
            {page.kitBadge}
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold">
            {page.kitTitle}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed">
            {page.kitDesc}
          </p>
        </div>

        <button
          onClick={onOpenQuote}
          className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-bold font-mono uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
        >
          {page.seeKitBtn}
        </button>
      </div>

      {/* Planning Checklist Banner */}
      <div
        onClick={onReadChecklist}
        className="mb-16 p-6 sm:p-8 rounded-3xl bg-neutral-100 border border-neutral-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-neutral-400 transition-colors cursor-pointer group"
      >
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-display font-bold text-neutral-900 group-hover:text-[#C83B25] transition-colors">
            {page.checklistTitle}
          </h3>
          <p className="text-xs text-neutral-600">
            {page.checklistSub}
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C83B25] font-mono shrink-0">
          <span>{page.readGuideBtn}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-4 py-8 border-t border-neutral-200">
        <h3 className="text-xl font-display font-bold text-neutral-900">
          {page.bottomTitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={HENG_SING_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{page.continueWhatsapp}</span>
          </a>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{page.sendEmail}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
