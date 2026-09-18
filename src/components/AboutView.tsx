import React from 'react';
import { MessageCircle, Check, PenTool, Printer, Wrench } from 'lucide-react';
import { HENG_SING_INFO } from '../data/hengSingContent';
import { HengSingLogo } from './HengSingLogo';
import { useLanguage } from '../context/LanguageContext';

interface AboutViewProps {
  onOpenQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenQuote }) => {
  const { t } = useLanguage();
  const page = t.aboutPage;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
          &bull; {page.tag}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-neutral-900 tracking-tight leading-tight">
          {page.title}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
          {page.summary}
        </p>
      </div>

      {/* 4 Core Pillars Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
          <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">{page.pillar1}</div>
          <div className="text-xs text-neutral-500 mt-1 font-medium">{page.pillar1Sub}</div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
          <div className="text-sm font-display font-bold text-neutral-900">{page.pillar2}</div>
          <div className="text-xs text-neutral-500 mt-1 font-medium">{page.pillar2Sub}</div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
          <div className="text-base sm:text-lg font-display font-bold text-neutral-900">{page.pillar3}</div>
          <div className="text-xs text-neutral-500 mt-1 font-medium">{page.pillar3Sub}</div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
          <div className="text-base sm:text-lg font-display font-bold text-neutral-900">{page.pillar4}</div>
          <div className="text-xs text-neutral-500 mt-1 font-medium">{page.pillar4Sub}</div>
        </div>
      </div>

      {/* Our Story & What Hasn't Changed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-sm text-neutral-600 leading-relaxed">
          <h2 className="text-2xl font-display font-black text-neutral-900 mb-2">
            {page.storyTitle}
          </h2>
          <p>{page.storyP1}</p>
          <p>{page.storyP2}</p>
        </div>

        <div className="lg:col-span-5 p-6 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-4">
          <span className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider block">
            {page.whatHasntChanged}
          </span>
          <div className="space-y-3 text-xs text-neutral-600">
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#C83B25] shrink-0 mt-0.5" />
              <span>{page.point1}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#C83B25] shrink-0 mt-0.5" />
              <span>{page.point2}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#C83B25] shrink-0 mt-0.5" />
              <span>{page.point3}</span>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-display font-black text-neutral-900">
            {page.whatWeDoTitle}
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            {page.whatWeDoSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#C83B25] flex items-center justify-center">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900">{page.designTitle}</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {page.designDesc}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#C83B25] flex items-center justify-center">
              <Printer className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900">{page.printTitle}</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {page.printDesc}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#C83B25] flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900">{page.installTitle}</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {page.installDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Who We Print For */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-display font-black text-neutral-900">
            {page.whoWePrintForTitle}
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            {page.whoWePrintForSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {page.clientTypes.map((client, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-1.5">
              <h3 className="font-display font-bold text-sm text-neutral-900">{client.title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{client.desc}</p>
            </div>
          ))}
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5 flex flex-col justify-between sm:col-span-2 lg:col-span-3">
            <div>
              <h3 className="font-display font-bold text-sm text-[#C83B25]">{page.notSureTitle}</h3>
              <p className="text-xs text-neutral-600 mt-1">
                {page.notSureDesc}
              </p>
            </div>
            <a
              href={HENG_SING_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-[#C83B25] hover:underline inline-flex items-center gap-1 mt-2"
            >
              <span>{page.askWhatsapp} &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Why It Matters - Government Registration Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white shadow-xl space-y-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
          <HengSingLogo size="sm" />
          <span className="text-[11px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full w-fit">
            {page.establishedTag}
          </span>
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono text-[#EA3A19] uppercase tracking-wider block font-bold">
            &bull; {page.whyMattersTag}
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            {page.whyMattersTitle}
          </h3>
          <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
            {page.whyMattersDesc}
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-center space-y-4 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900">
          {page.bottomCtaTitle}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
          {page.bottomCtaDesc}
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl border-2 border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs font-semibold cursor-pointer"
          >
            {page.requestQuoteBtn}
          </button>
          <a
            href={HENG_SING_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{page.chatWhatsappBtn}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
