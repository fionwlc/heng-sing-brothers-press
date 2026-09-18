import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { ARTWORK_SPECS, HENG_SING_INFO } from '../data/hengSingContent';
import { useLanguage } from '../context/LanguageContext';

interface GuidelinesViewProps {
  onBackToGuides: () => void;
  onRequestQuote: () => void;
}

export const GuidelinesView: React.FC<GuidelinesViewProps> = ({ onBackToGuides, onRequestQuote }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('orientation');
  const { t } = useLanguage();
  const page = t.guidelinesPage;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Breadcrumb navigation */}
      <button
        onClick={onBackToGuides}
        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{page.backToGuides}</span>
      </button>

      {/* Header */}
      <div className="space-y-3 mb-12">
        <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
          &bull; {page.tag}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-neutral-900 tracking-tight">
          {page.title}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
          {page.desc}
        </p>
      </div>

      {/* 6 Essential Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
        <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs text-center">
          <div className="text-xl font-display font-black text-neutral-900">{page.metricCmyk}</div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">{page.metricCmykSub}</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs text-center">
          <div className="text-xl font-display font-black text-neutral-900">{page.metricDpi}</div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">{page.metricDpiSub}</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs text-center">
          <div className="text-xl font-display font-black text-[#C83B25]">{page.metricBleed}</div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">{page.metricBleedSub}</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs text-center">
          <div className="text-xl font-display font-black text-neutral-900">{page.metricSafe}</div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">{page.metricSafeSub}</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs text-center">
          <div className="text-xl font-display font-black text-neutral-900">{page.metricFont}</div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">{page.metricFontSub}</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs text-center">
          <div className="text-xl font-display font-black text-neutral-900">{page.metricPdf}</div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">{page.metricPdfSub}</div>
        </div>
      </div>

      {/* 4 Core General Guidelines */}
      <div className="space-y-12 mb-16">
        <div className="border-b border-neutral-200 pb-4">
          <h2 className="text-2xl font-display font-black text-neutral-900">
            {page.generalTitle}
          </h2>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            {page.generalSub}
          </p>
        </div>

        {/* 1. Colour Mode */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-2xs space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-neutral-900 text-white font-mono text-sm font-bold flex items-center justify-center">
              1
            </span>
            <h3 className="text-xl font-display font-bold text-neutral-900">
              {page.colourModeTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-3 text-sm text-neutral-600 leading-relaxed">
              <p>{page.colourModeP1}</p>
              <ul className="space-y-2 text-xs text-neutral-600 list-disc pl-5">
                <li>{page.colourModeBullet1}</li>
                <li>{page.colourModeBullet2}</li>
                <li>{page.colourModeBullet3}</li>
                <li>{page.colourModeBullet4}</li>
              </ul>
            </div>

            {/* Black at a glance callout box */}
            <div className="md:col-span-5 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
              <span className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider block">
                {page.blackAtGlance}
              </span>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#0A0A0A] border border-black" />
                    <span className="text-xs font-bold text-neutral-900 font-mono">
                      {page.richBlackLabel}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 mt-1 block">
                    {page.richBlackUse}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-neutral-800" />
                    <span className="text-xs font-bold text-neutral-900 font-mono">
                      {page.plainBlackLabel}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 mt-1 block">
                    {page.plainBlackUse}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Resolution & Image Quality */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-2xs space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-neutral-900 text-white font-mono text-sm font-bold flex items-center justify-center">
              2
            </span>
            <h3 className="text-xl font-display font-bold text-neutral-900">
              {page.resTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="text-sm font-bold text-neutral-900 font-mono block">{page.resStandard}</span>
              <p className="text-xs text-neutral-600">
                {page.resStandardDesc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="text-sm font-bold text-neutral-900 font-mono block">{page.resLarge}</span>
              <p className="text-xs text-neutral-600">
                {page.resLargeDesc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="text-sm font-bold text-neutral-900 font-mono block">{page.resLine}</span>
              <p className="text-xs text-neutral-600">
                {page.resLineDesc}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              {page.resAlert}
            </span>
          </div>
        </div>

        {/* 3. Text & Line Weight and 4. File Formats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text & Line */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-neutral-900 text-white font-mono text-sm font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="text-lg font-display font-bold text-neutral-900">
                {page.textLineTitle}
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>&bull; {page.textLineBullet1}</li>
              <li>&bull; {page.textLineBullet2}</li>
              <li>&bull; {page.textLineBullet3}</li>
              <li>&bull; {page.textLineBullet4}</li>
              <li>&bull; {page.textLineBullet5}</li>
            </ul>
          </div>

          {/* File Formats */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-neutral-900 text-white font-mono text-sm font-bold flex items-center justify-center">
                4
              </span>
              <h3 className="text-lg font-display font-bold text-neutral-900">
                {page.fileFormatsTitle}
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>&bull; {page.fileFormatsBullet1}</li>
              <li>&bull; {page.fileFormatsBullet2}</li>
              <li>&bull; {page.fileFormatsBullet3}</li>
              <li>&bull; {page.fileFormatsBullet4}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visual Interactive Bleed, Trim & Safe Zone Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-2xs mb-16 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block mb-1">
            {page.bleedSectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-neutral-900">
            {page.bleedSectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            {page.bleedSectionSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Visual Blueprint */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm aspect-4/3 bg-neutral-50 rounded-2xl border-2 border-dashed border-[#C83B25] p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Bleed Badge */}
              <div className="absolute top-2 left-3 text-[10px] font-mono text-[#C83B25] font-bold">
                {page.bleedBadge}
              </div>

              {/* Trim Line Box */}
              <div className="w-full h-full border-2 border-neutral-800 rounded-lg p-5 relative flex flex-col justify-center items-center bg-white shadow-xs">
                <div className="absolute -top-3 right-3 px-2 py-0.5 bg-neutral-900 text-white text-[9px] font-mono rounded">
                  {page.trimBadge}
                </div>

                {/* Safe Zone Inner Box */}
                <div className="w-full h-full border border-dashed border-emerald-500 rounded p-3 flex flex-col justify-center items-center text-center bg-emerald-50/20">
                  <span className="text-[10px] font-mono text-emerald-700 font-bold mb-1">
                    {page.safeBadge}
                  </span>
                  <span className="text-xs font-semibold text-neutral-800">
                    {page.safeKeepLogos}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Table */}
          <div className="lg:col-span-6 space-y-5 text-xs text-neutral-600 leading-relaxed">
            <p>{page.bleedExpl}</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border border-neutral-200 rounded-xl overflow-hidden">
                <thead className="bg-neutral-100 text-neutral-700 font-bold border-b border-neutral-200">
                  <tr>
                    <th className="p-3">{page.tableHeaderItem}</th>
                    <th className="p-3">{page.tableHeaderTrim}</th>
                    <th className="p-3">{page.tableHeaderBleed}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {ARTWORK_SPECS.bleedTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50">
                      <td className="p-3 font-medium text-neutral-900">{row.item}</td>
                      <td className="p-3 text-neutral-600">{row.trim}</td>
                      <td className="p-3 text-[#C83B25] font-semibold">{row.withBleed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] font-mono text-neutral-500">
              {page.customSizesNote}
            </p>
          </div>
        </div>
      </div>

      {/* Accordion List for Advanced Artwork Guides */}
      <div className="space-y-3 mb-16">
        <h3 className="text-lg font-display font-bold text-neutral-900 mb-4">
          {page.detailedSpecsTitle}
        </h3>
        {page.accordion.map((item) => {
          const isOpen = openAccordion === item.id;
          return (
            <div key={item.id} className="border border-neutral-200 rounded-2xl bg-white overflow-hidden">
              <button
                onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <span className="font-display font-bold text-sm text-neutral-900">{item.title}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-display font-bold">
            {page.noArtworkYetTitle}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed">
            {page.noArtworkYetDesc}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={onRequestQuote}
            className="px-5 py-3 rounded-xl border border-neutral-700 hover:border-white text-xs font-semibold transition-colors cursor-pointer"
          >
            {page.requestQuoteBtn}
          </button>
          <a
            href={HENG_SING_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{page.chatWhatsappBtn}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
