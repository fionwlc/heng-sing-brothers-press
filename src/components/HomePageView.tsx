import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { CmykLogoFormation } from './CmykLogoFormation';
import { BusinessEssentialsBundleGraphic } from './BusinessEssentialsBundleGraphic';
import { CategoryMiniGraphic } from './CategoryMiniGraphic';
import { CorporateShowcaseGraphic } from './CorporateShowcaseGraphic';
import { HENG_SING_CATEGORIES, HENG_SING_INFO, STARTER_KITS } from '../data/hengSingContent';
import { PenTool, Layers, Wrench, ArrowRight, MessageCircle, FileText, CheckCircle2, ShieldCheck, Sparkles, CreditCard, Package, Flag, Shirt, Gift, Image, Tag, Award } from 'lucide-react';
import { ServiceCategoryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HomePageViewProps {
  onOpenQuote: () => void;
  onNavigateTo: (view: string) => void;
  onSelectCategory: (categoryName: string) => void;
  onSelectGuide: (guideId: string) => void;
  onCategoryHoverChange?: (index: number) => void;
}

export const HomePageView: React.FC<HomePageViewProps> = ({
  onOpenQuote,
  onNavigateTo,
  onSelectCategory,
  onSelectGuide,
  onCategoryHoverChange
}) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const { t, language } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard': return CreditCard;
      case 'Package': return Package;
      case 'Flag': return Flag;
      case 'Shirt': return Shirt;
      case 'Gift': return Gift;
      case 'Image': return Image;
      case 'Tag': return Tag;
      default: return Sparkles;
    }
  };

  const handleCategoryHover = (idx: number) => {
    setActiveCategoryIndex(idx);
    if (onCategoryHoverChange) {
      onCategoryHoverChange(idx);
    }
  };

  const activeCat = HENG_SING_CATEGORIES[activeCategoryIndex] || HENG_SING_CATEGORIES[0];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section with Brand Logo Formation */}
      <HeroSection
        onOpenQuote={onOpenQuote}
        onExploreCatalogue={() => onNavigateTo('catalogue')}
      />

      {/* 2. Why Print With Us ("Built for every order size") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-8">
          <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
            &bull; {t.whyUs.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
            {t.whyUs.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-2xs space-y-3 hover:border-neutral-400 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-[#C83B25] flex items-center justify-center">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900">{t.whyUs.feature1Title}</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {t.whyUs.feature1Desc}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-2xs space-y-3 hover:border-neutral-400 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-[#C83B25] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900">{t.whyUs.feature2Title}</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {t.whyUs.feature2Desc}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-2xs space-y-3 hover:border-neutral-400 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-[#C83B25] flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900">{t.whyUs.feature3Title}</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {t.whyUs.feature3Desc}
            </p>
          </div>
        </div>

        {/* Highlight Banner: Business Starter Kit */}
        <div className="mt-8 p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
              {t.smeBanner.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold">
              {t.smeBanner.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
              {t.smeBanner.desc}
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3.5 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-bold font-mono uppercase tracking-wider shrink-0 transition-all cursor-pointer shadow-md"
          >
            {t.smeBanner.cta}
          </button>
        </div>
      </section>

      {/* 3. The Full Range (Interactive Category Showcase with Expanded Business Essentials Bundle) */}
      <section id="full-range" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[#C83B25] text-xs font-mono mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.fullRange.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 tracking-tight">
              {t.fullRange.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              {t.fullRange.subtitle}
            </p>
          </div>

          <button
            onClick={() => onNavigateTo('catalogue')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C83B25] font-mono hover:underline cursor-pointer"
          >
            <span dangerouslySetInnerHTML={{ __html: t.fullRange.viewFullCat }} />
          </button>
        </div>

        {/* Bento Grid: Business Essentials (Bigger Box with Graphic) + Other Categories with Smaller Graphics / Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {/* BIGGER FEATURED BOX: Business Essentials (Bundle of Cards, Letterhead, Envelopes & NCR Books) */}
          {(() => {
            const bizCat = HENG_SING_CATEGORIES.find((c) => c.id === 'business-essentials') || HENG_SING_CATEGORIES[0];
            const isHovered = activeCategoryIndex === 0;
            const bizTrans = t.categories['business-essentials'];
            const bizName = bizTrans?.name || bizCat.name;
            const bizDesc = bizTrans?.description || t.fullRange.bizEssentialsDesc;

            return (
              <div
                key={bizCat.id}
                onMouseEnter={() => handleCategoryHover(0)}
                onClick={() => onSelectCategory(bizName)}
                className={`col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 p-6 sm:p-7 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group shadow-xs ${
                  isHovered
                    ? 'bg-neutral-900 text-white border-neutral-800 shadow-xl scale-[1.008]'
                    : 'bg-gradient-to-br from-white via-neutral-50 to-white text-neutral-900 border-neutral-200 hover:border-neutral-400 hover:shadow-md'
                }`}
                id="box-business-essentials-bundle"
              >
                {/* Top status bar */}
                <div className="flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00A3E0] shadow-xs" />
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${
                      isHovered ? 'bg-[#00A3E0]/20 text-cyan-300 border border-cyan-500/30' : 'bg-neutral-100 text-neutral-700'
                    }`}>
                      {t.fullRange.featuredBundle}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isHovered ? 'text-amber-300' : 'text-[#C83B25]'}`}>
                    {t.fullRange.singleAndBulk}
                  </span>
                </div>

                {/* Content & Typography */}
                <div className="space-y-2 mt-4 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight group-hover:text-rose-400 transition-colors">
                    {bizName}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed max-w-md ${isHovered ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {bizDesc}
                  </p>

                  {/* Included Bundle Elements Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {[
                      language === 'zh' ? '商务名片 (350gsm)' : language === 'ms' ? 'Kad Perniagaan (350gsm)' : 'Business Cards (350gsm)',
                      language === 'zh' ? '标准信头纸 (A4 100gsm)' : language === 'ms' ? 'Kepala Surat (A4 100gsm)' : 'Letterhead (A4 100gsm)',
                      language === 'zh' ? '自粘商务信封 (DL)' : language === 'ms' ? 'Sampul Surat (DL Peel & Seal)' : 'Envelopes (DL Peel & Seal)',
                      language === 'zh' ? '无碳复写收据/账簿 (NCR)' : language === 'ms' ? 'Buku Resit / Invois NCR' : 'NCR Invoice / Receipt Books',
                      language === 'zh' ? '企业专属文件夹' : language === 'ms' ? 'Folder Korporat' : 'Corporate Folders'
                    ].map((item, i) => (
                      <span
                        key={i}
                        className={`text-[10.5px] font-mono px-2 py-0.8 rounded-md border ${
                          isHovered
                            ? 'bg-neutral-800/90 text-neutral-200 border-neutral-700'
                            : 'bg-white text-neutral-700 border-neutral-200 shadow-2xs'
                        }`}
                      >
                        &bull; {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Graphical Presentation for Business Essentials Bundle */}
                <div className="my-2 py-1 relative z-10">
                  <BusinessEssentialsBundleGraphic />
                </div>

                {/* Bottom Row */}
                <div className="pt-3 border-t border-neutral-200/70 flex items-center justify-between text-xs font-mono relative z-10">
                  <span className={`font-bold flex items-center gap-1.5 ${isHovered ? 'text-cyan-400' : 'text-[#C83B25]'}`}>
                    <span>{t.fullRange.configureBizBundle}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className={`text-[10px] ${isHovered ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {language === 'zh' ? '哑光覆膜 • 局部UV • 无碳复写' : language === 'ms' ? 'Laminasi Matte • Spot UV • Salinan NCR' : 'Matte • Spot UV • Carbonless'}
                  </span>
                </div>
              </div>
            );
          })()}

          {/* OTHER 7 CATEGORIES WITH SMALLER GRAPHICS OR ICONS (NO CMYK LABELS) */}
          {HENG_SING_CATEGORIES.filter((c) => c.id !== 'business-essentials').map((cat) => {
            const Icon = getIcon(cat.iconName);
            const originalIndex = HENG_SING_CATEGORIES.findIndex((c) => c.id === cat.id);
            const isHovered = activeCategoryIndex === originalIndex;
            const catTrans = t.categories[cat.id];
            const catName = catTrans?.name || cat.name;
            const catShortDesc = catTrans?.shortDesc || cat.shortDesc;
            const catBadge = catTrans?.badge || cat.badge;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => handleCategoryHover(originalIndex)}
                onClick={() => onSelectCategory(catName)}
                className={`p-4.5 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[175px] relative overflow-hidden group shadow-2xs ${
                  isHovered
                    ? 'bg-neutral-900 text-white border-neutral-800 shadow-lg scale-[1.02]'
                    : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-350 hover:shadow-xs'
                }`}
                id={`box-${cat.id}`}
              >
                {/* Header: Accent dot & Mini Graphic / Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: cat.accentColor }}
                    />
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium truncate max-w-[130px] ${
                      isHovered ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {catBadge}
                    </span>
                  </div>

                  {/* Smaller Graphic illustration */}
                  <CategoryMiniGraphic
                    categoryId={cat.id}
                    accentColor={cat.accentColor}
                    isHovered={isHovered}
                  />
                </div>

                {/* Title and Short Description (NO CMYK LABELS) */}
                <div className="my-2">
                  <h3 className="font-display font-bold text-sm sm:text-base tracking-tight group-hover:text-rose-400 transition-colors">
                    {catName}
                  </h3>
                  <p className={`text-[11px] leading-snug mt-1 line-clamp-2 ${isHovered ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {catShortDesc}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center text-[11px] font-mono pt-2 border-t border-neutral-100">
                  <span className={`font-semibold flex items-center gap-1 ${isHovered ? 'text-cyan-400' : 'text-[#C83B25]'}`}>
                    <span>{t.fullRange.enquire}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isHovered ? 'text-neutral-300' : 'text-neutral-400'}`} />
                </div>
              </div>
            );
          })}

          {/* 8th Box: Custom Print Request & Small Batch Inquiries */}
          <div
            onClick={() => onOpenQuote()}
            className="p-4.5 sm:p-5 rounded-2xl border border-dashed border-neutral-300 hover:border-[#C83B25] bg-neutral-50/70 hover:bg-white text-neutral-900 transition-all cursor-pointer flex flex-col justify-between min-h-[175px] shadow-2xs group"
            id="box-custom-inquiry"
          >
            <div className="flex items-start justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                {language === 'zh' ? '特别定制规格' : language === 'ms' ? 'Spesifikasi Tersuai' : 'Custom Specs'}
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#C83B25]/10 text-[#C83B25] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <div className="my-2">
              <h3 className="font-display font-bold text-sm sm:text-base tracking-tight text-neutral-900 group-hover:text-[#C83B25] transition-colors">
                {t.fullRange.customFormatTitle}
              </h3>
              <p className="text-[11px] text-neutral-500 leading-snug mt-1">
                {t.fullRange.customFormatDesc}
              </p>
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono pt-2 border-t border-neutral-200/60 text-[#C83B25] font-bold">
              <span className="flex items-center gap-1">
                <span>{t.fullRange.customFormatCta}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="text-[10px] text-neutral-400 font-normal">{t.fullRange.whatsappReady}</span>
            </div>
          </div>
        </div>

        {/* Selected Category Highlights Box (Clean info, no CMYK numbers) */}
        {(() => {
          const activeTrans = t.categories[activeCat.id];
          const activeName = activeTrans?.name || activeCat.name;
          const activeBadge = activeTrans?.badge || activeCat.badge;
          const activeDesc = activeTrans?.description || activeCat.description;
          const activeItems = activeTrans?.items || activeCat.items;

          return (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C83B25] font-bold">
                  {t.activeDiscipline.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900">
                  {activeName} &bull; <span className="text-neutral-500 text-base">{activeBadge}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed">
                  {activeDesc}
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-end gap-3 shrink-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 font-mono text-xs font-medium text-neutral-700">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeCat.accentColor }} />
                  <span>{activeItems.slice(0, 3).join(' • ')}</span>
                </div>

                <button
                  onClick={() => onSelectCategory(activeName)}
                  className="px-5 py-2.5 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>{t.activeDiscipline.customQuoteFor} {activeName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })()}

        <div className="text-center text-xs font-mono text-neutral-500">
          {t.activeDiscipline.noJobTooSmall}
        </div>
      </section>

      {/* 4. Brand Identity Registration Interstitial: Logo Formed From 4 CMYK Plates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.cmykPlateDemo.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight">
                {t.cmykPlateDemo.title}
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {t.cmykPlateDemo.desc}
              </p>
              <div className="pt-2 flex items-center gap-6 text-xs font-mono text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF]" /> {t.cmykPlateDemo.cyan}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF007F]" /> {t.cmykPlateDemo.magenta}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFEB3B]" /> {t.cmykPlateDemo.yellow}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white" /> {t.cmykPlateDemo.keyBlack}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <CmykLogoFormation size="md" interactive={true} autoAnimateOnScroll={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Corporate & Institutional Preview Feature with Graphical Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
              &bull; {t.corporateSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 tracking-tight leading-tight">
              {t.corporateSection.title}
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {t.corporateSection.desc}
            </p>

            {/* Quick Deliverables Checkmarks */}
            <div className="space-y-1.5 pt-1 text-xs font-mono text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C83B25]" />
                <span>{t.corporateSection.reportsBullet}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                <span>{t.corporateSection.journalsBullet}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>{t.corporateSection.giftsBullet}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigateTo('corporate')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-[#C83B25] text-white text-xs font-mono font-bold transition-colors cursor-pointer group shadow-xs"
              >
                <span>{t.corporateSection.ctaBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Graphical Presentation Component */}
          <div className="lg:col-span-7">
            <CorporateShowcaseGraphic />
          </div>
        </div>
      </section>

      {/* 6. New to printing? ("Start with our guides") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
            &bull; {t.guidesPromo.tag}
          </span>
          <h2 className="text-3xl font-display font-black text-neutral-900 tracking-tight">
            {t.guidesPromo.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => onSelectGuide('paper-basics')}
            className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-2xs hover:border-neutral-400 transition-all cursor-pointer group space-y-2"
          >
            <h3 className="font-display font-bold text-base text-neutral-900 group-hover:text-[#C83B25] transition-colors">
              {t.guidesPromo.guide1Title}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {t.guidesPromo.guide1Desc}
            </p>
          </div>

          <div
            onClick={() => onSelectGuide('printing-methods')}
            className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-2xs hover:border-neutral-400 transition-all cursor-pointer group space-y-2"
          >
            <h3 className="font-display font-bold text-base text-neutral-900 group-hover:text-[#C83B25] transition-colors">
              {t.guidesPromo.guide2Title}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {t.guidesPromo.guide2Desc}
            </p>
          </div>

          <div
            onClick={() => onSelectGuide('moq-explained')}
            className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-2xs hover:border-neutral-400 transition-all cursor-pointer group space-y-2"
          >
            <h3 className="font-display font-bold text-base text-neutral-900 group-hover:text-[#C83B25] transition-colors">
              {t.guidesPromo.guide3Title}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {t.guidesPromo.guide3Desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
