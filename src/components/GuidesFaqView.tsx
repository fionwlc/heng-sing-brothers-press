import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GuidesFaqViewProps {
  onSelectGuide: (guideId: string) => void;
  onOpenQuote: () => void;
}

export const GuidesFaqView: React.FC<GuidesFaqViewProps> = ({ onSelectGuide, onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { t } = useLanguage();
  const page = t.guidesFaqPage;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
          &bull; {page.tag}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-neutral-900 tracking-tight">
          {page.title}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
          {page.desc}
        </p>
      </div>

      {/* Quick Answers Accordion */}
      <div className="space-y-4">
        <h2 className="text-xl font-display font-bold text-neutral-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#C83B25]" />
          <span>{page.quickAnswers}</span>
        </h2>

        <div className="space-y-2">
          {page.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-neutral-900">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50 space-y-2">
                    <p>{faq.answer}</p>
                    {faq.linkText && (
                      <button
                        onClick={() => onSelectGuide('artwork-guide')}
                        className="text-xs font-mono text-[#C83B25] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{faq.linkText}</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Guides Grid (7 Guides) */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-display font-black text-neutral-900">
            {page.guidesTitle}
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            {page.guidesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {page.guides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => onSelectGuide(guide.id)}
              className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-2xs hover:border-neutral-400 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                  <span className="px-2 py-0.5 rounded bg-neutral-100 font-semibold text-neutral-700">
                    {guide.category}
                  </span>
                  <span>{guide.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-base text-neutral-900 group-hover:text-[#C83B25] transition-colors leading-snug">
                  {guide.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {guide.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#C83B25] font-mono">
                <span>{page.readGuideBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ready to order? Skip the guesswork banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-display font-bold">
            {page.readyOrderTitle}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed">
            {page.readyOrderDesc}
          </p>
        </div>

        <button
          onClick={onOpenQuote}
          className="px-6 py-3.5 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-bold font-mono uppercase tracking-wider shrink-0 transition-all shadow-md cursor-pointer"
        >
          {page.seeKitsBtn}
        </button>
      </div>
    </div>
  );
};
