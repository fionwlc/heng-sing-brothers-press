import React from 'react';
import { HENG_SING_INFO } from '../data/hengSingContent';
import { ArrowUp, MessageCircle, Mail, MapPin, Phone, Globe, Check, ExternalLink } from 'lucide-react';
import { HengSingLogo } from './HengSingLogo';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languageOptions: { id: Language; label: string; subLabel: string }[] = [
    { id: 'en', label: 'English', subLabel: 'English (Default)' },
    { id: 'zh', label: '中文', subLabel: '华语 (Mandarin)' },
    { id: 'ms', label: 'Melayu', subLabel: 'Bahasa Melayu' },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 pt-16 pb-12 px-4 sm:px-6 lg:px-8" id="site-footer">
      {/* Authentic Graphic Arts Color Strip */}
      <div className="max-w-7xl mx-auto mb-12 grid grid-cols-12 h-1.5 rounded-full overflow-hidden">
        <div className="bg-[#00E5FF]" title="Cyan 100%" />
        <div className="bg-[#00E5FF]/60" />
        <div className="bg-[#FF007F]" title="Magenta 100%" />
        <div className="bg-[#FF007F]/60" />
        <div className="bg-[#FFEB3B]" title="Yellow 100%" />
        <div className="bg-[#FFEB3B]/60" />
        <div className="bg-neutral-900" title="Key 100%" />
        <div className="bg-neutral-600" />
        <div className="bg-[#00E5FF]" />
        <div className="bg-[#FF007F]" />
        <div className="bg-[#FFEB3B]" />
        <div className="bg-neutral-900" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
        {/* Brand & Address (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="pb-1">
            <HengSingLogo size="sm" />
          </div>

          <a
            href={HENG_SING_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-neutral-500 hover:text-neutral-900 transition-colors max-w-xs font-mono text-[11px] leading-relaxed cursor-pointer"
            title="Open address in Google Maps"
          >
            <div className="flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C83B25] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <span>
                  No. 37, Lot 75, Section 63, 1st Floor,<br />
                  Jalan Chan Bee Kiew, 93450<br />
                  Kuching, Sarawak
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#C83B25] font-semibold mt-1 group-hover:underline">
                  <span>{language === 'zh' ? '在 Google 地图打开路线' : language === 'ms' ? 'Buka di Google Maps' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </a>

          <p
            className="text-[11px] text-neutral-400 font-mono pt-1"
            dangerouslySetInnerHTML={{ __html: t.common.registeredPrinter }}
          />
        </div>

        {/* Contact (3 Cols) */}
        <div className="lg:col-span-3 space-y-2">
          <span className="font-display font-bold text-neutral-900 block uppercase tracking-wider text-[11px]">
            {t.footer.contactTitle}
          </span>
          <div className="space-y-1.5 font-mono text-neutral-600 text-[11px]">
            <div>
              <a href="tel:082-336868" className="hover:text-neutral-900 transition-colors">
                082-336868
              </a>
            </div>
            <div>
              <a
                href={HENG_SING_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C83B25] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>013-3282828 (WhatsApp)</span>
              </a>
            </div>
            <div>
              <a href={`mailto:${HENG_SING_INFO.email}`} className="hover:text-neutral-900 transition-colors">
                {HENG_SING_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Site Links (2 Cols) */}
        <div className="lg:col-span-2 space-y-2">
          <span className="font-display font-bold text-neutral-900 block uppercase tracking-wider text-[11px]">
            {t.footer.siteTitle}
          </span>
          <ul className="space-y-1.5 font-mono text-neutral-600 text-[11px]">
            <li>
              <button
                onClick={() => { onNavigate('catalogue'); scrollToTop(); }}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                {t.nav.catalogue}
              </button>
            </li>
            <li>
              <button
                onClick={() => { onNavigate('corporate'); scrollToTop(); }}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                {t.nav.corporate}
              </button>
            </li>
            <li>
              <button
                onClick={() => { onNavigate('guides'); scrollToTop(); }}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                {t.nav.guides}
              </button>
            </li>
            <li>
              <button
                onClick={() => { onNavigate('partner'); scrollToTop(); }}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                {t.nav.partner}
              </button>
            </li>
            <li>
              <button
                onClick={() => { onNavigate('about'); scrollToTop(); }}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                {t.nav.about}
              </button>
            </li>
          </ul>
        </div>

        {/* Language Selection at Bottom (3 Cols) */}
        <div className="lg:col-span-3 space-y-2.5">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#C83B25]" />
            <span className="font-display font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
              {t.footer.languageTitle}
            </span>
          </div>
          
          <p className="font-mono text-neutral-500 text-[11px] leading-relaxed">
            {t.footer.languageHelp}
          </p>

          {/* Interactive Language Selector Buttons */}
          <div className="pt-1 flex flex-col gap-1.5">
            <div className="grid grid-cols-3 gap-1 p-1 bg-neutral-100 rounded-xl border border-neutral-200 text-xs font-mono">
              {languageOptions.map((opt) => {
                const isActive = language === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setLanguage(opt.id)}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      isActive
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/80'
                    }`}
                    title={`Switch language to ${opt.subLabel}`}
                  >
                    <span>{opt.label}</span>
                    {isActive && <Check className="w-3 h-3 text-[#00E5FF]" />}
                  </button>
                );
              })}
            </div>
            
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 px-1">
              <span>{t.footer.currentLabel}: <strong className="text-neutral-900 font-bold">{language === 'zh' ? '中文 (华语)' : language === 'ms' ? 'Bahasa Melayu' : 'English'}</strong></span>
              <span className="text-[#C83B25]">&bull; {t.footer.sarawakTrilingual}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-700 font-mono text-[10px] transition-colors cursor-pointer"
            >
              <span>{t.common.backToTop}</span>
              <ArrowUp className="w-3 h-3 text-[#C83B25]" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-400">
        <span>&copy; {new Date().getFullYear()} {t.common.allRightsReserved}</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage('en')}
            className={`hover:underline cursor-pointer ${language === 'en' ? 'text-neutral-900 font-bold' : ''}`}
          >
            English
          </button>
          <span>&bull;</span>
          <button
            onClick={() => setLanguage('zh')}
            className={`hover:underline cursor-pointer ${language === 'zh' ? 'text-neutral-900 font-bold' : ''}`}
          >
            中文
          </button>
          <span>&bull;</span>
          <button
            onClick={() => setLanguage('ms')}
            className={`hover:underline cursor-pointer ${language === 'ms' ? 'text-neutral-900 font-bold' : ''}`}
          >
            Bahasa Melayu
          </button>
        </div>
      </div>
    </footer>
  );
};

