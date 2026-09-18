import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Check, Sparkles, CreditCard, Package, Flag, Shirt, Gift, Image, Tag } from 'lucide-react';
import { HENG_SING_CATEGORIES } from '../data/hengSingContent';
import { ServiceCategoryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HengSingCatalogueViewProps {
  onEnquireCategory: (categoryName: string) => void;
}

export const HengSingCatalogueView: React.FC<HengSingCatalogueViewProps> = ({ onEnquireCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryItem | null>(null);
  const { t, language } = useLanguage();
  const page = t.cataloguePage;

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

  const getLocalizedCategory = (cat: ServiceCategoryItem) => {
    const localized = t.categories[cat.id];
    return {
      name: localized?.name || cat.name,
      badge: localized?.badge || cat.badge,
      shortDesc: localized?.shortDesc || cat.shortDesc,
      description: localized?.description || cat.description,
      items: localized?.items || cat.items
    };
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
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

      {/* 8 Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HENG_SING_CATEGORIES.map((cat) => {
          const Icon = getIcon(cat.iconName);
          const loc = getLocalizedCategory(cat);
          return (
            <div
              key={cat.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200 shadow-2xs hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-xs"
                    style={{ backgroundColor: cat.accentColor }}
                  >
                    <Icon className="w-5 h-5 text-neutral-950" />
                  </div>
                  {/* Category Badge Pill */}
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 font-medium">
                    {loc.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-neutral-900 group-hover:text-[#C83B25] transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                    {loc.shortDesc}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1.5">
                    {page.commonFormats}:
                  </span>
                  <ul className="space-y-1 text-xs text-neutral-600">
                    {loc.items.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className="text-xs text-neutral-600 hover:text-neutral-900 font-mono underline cursor-pointer"
                >
                  {page.viewDetails}
                </button>

                <button
                  onClick={() => onEnquireCategory(loc.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C83B25] font-mono group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>{page.enquire}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* No job too small banner */}
      <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-200 text-center text-xs font-mono text-neutral-700 font-medium">
        {t.activeDiscipline.noJobTooSmall}
      </div>

      {/* Category Detail Modal */}
      {selectedCategory && (() => {
        const locModal = getLocalizedCategory(selectedCategory);
        const modalSub = language === 'zh'
          ? '工业胶印与数码印刷 • 砂拉越古晋生产厂房'
          : language === 'ms'
          ? 'Percetakan Offset Industri & Digital • Kilang Pengeluaran Kuching'
          : 'Industrial Offset & Digital • Kuching Production Facility';

        const includedLabel = language === 'zh'
          ? '涵盖产品规格：'
          : language === 'ms'
          ? 'Produk Termasuk:'
          : 'Included Products:';

        const quoteExactText = language === 'zh'
          ? '索取精准报价'
          : language === 'ms'
          ? 'Minta Sebut Harga Tepat'
          : 'Request Exact Quote';

        const whatsappGreeting = language === 'zh'
          ? `恒新兄弟印务，您好！我想咨询关于 ${locModal.name} 的印刷详情。`
          : language === 'ms'
          ? `Halo Heng Sing! Saya ingin bertanya mengenai ${locModal.name}.`
          : `Hello Heng Sing! I would like to inquire about ${locModal.name}.`;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-neutral-200 shadow-2xl space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 text-[#C83B25] font-bold">
                    {locModal.badge}
                  </span>
                  <h3 className="text-2xl font-display font-black text-neutral-900 mt-2">
                    {locModal.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    {modalSub}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 text-lg leading-none cursor-pointer"
                >
                  &times;
                </button>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {locModal.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-neutral-800 uppercase">
                  {includedLabel}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {locModal.items.map((it, i) => (
                    <div key={i} className="p-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex gap-3">
                <button
                  onClick={() => {
                    onEnquireCategory(locModal.name);
                    setSelectedCategory(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{quoteExactText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/60133282828?text=${encodeURIComponent(whatsappGreeting)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
