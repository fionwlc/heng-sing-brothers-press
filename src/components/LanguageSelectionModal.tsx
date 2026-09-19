import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';
import { HengSingLogo } from './HengSingLogo';
import { Globe, Check, ArrowRight, X } from 'lucide-react';

export const LanguageSelectionModal: React.FC = () => {
  const { isFirstTimeModalOpen, setIsFirstTimeModalOpen, selectLanguageAndClose, language } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<Language>(language || 'en');

  if (!isFirstTimeModalOpen) return null;

  const languagesList: {
    id: Language;
    code: string;
    name: string;
    nativeName: string;
    desc: string;
    flagTag: string;
  }[] = [
    {
      id: 'en',
      code: 'EN',
      name: 'English',
      nativeName: 'English',
      desc: 'Official commercial print catalogue, technical guides & instant quotes',
      flagTag: 'Default &bull; Commercial'
    },
    {
      id: 'zh',
      code: '中文',
      name: 'Mandarin / Chinese',
      nativeName: '中文 (华语)',
      desc: '砂拉越古晋逾34年老字号印刷厂，完整产品目录与专人沟通',
      flagTag: '砂拉越老字号 &bull; 华语'
    },
    {
      id: 'ms',
      code: 'BM',
      name: 'Bahasa Melayu',
      nativeName: 'Bahasa Melayu',
      desc: 'Percetakan komersial, laporan tahunan & pembekal berdaftar kerajaan',
      flagTag: 'Rasmi &bull; Kerajaan Sarawak'
    }
  ];

  const handleConfirm = () => {
    selectLanguageAndClose(selectedLang);
  };

  const handleDismissDefault = () => {
    selectLanguageAndClose('en'); // fallback to English as default
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white border border-neutral-200/90 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lang-modal-title"
      >
        {/* CMYK Accent Strip across top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 grid grid-cols-12">
          <div className="bg-[#00E5FF]" />
          <div className="bg-[#00E5FF]/60" />
          <div className="bg-[#FF007F]" />
          <div className="bg-[#FF007F]/60" />
          <div className="bg-[#FFEB3B]" />
          <div className="bg-[#FFEB3B]/60" />
          <div className="bg-neutral-900" />
          <div className="bg-neutral-600" />
          <div className="bg-[#00E5FF]" />
          <div className="bg-[#FF007F]" />
          <div className="bg-[#FFEB3B]" />
          <div className="bg-neutral-900" />
        </div>

        {/* Close Button */}
        <button
          onClick={handleDismissDefault}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
          title="Continue in English"
          aria-label="Close language selector"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Logo */}
        <div className="flex flex-col items-center text-center space-y-2 pt-1">
          <HengSingLogo size="sm" showRegistrationMarks={false} />
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-[11px] font-mono font-medium mt-1">
            <Globe className="w-3.5 h-3.5 text-[#C83B25]" />
            <span>Select Language / 选择语言 / Pilih Bahasa</span>
          </div>

          <h2 id="lang-modal-title" className="text-xl sm:text-2xl font-display font-black text-neutral-900 tracking-tight pt-1">
            Welcome to Heng Sing Brothers Press
          </h2>
          <p className="text-xs text-neutral-500 max-w-sm font-sans leading-relaxed">
            Choose your preferred language to explore our print services. Default is set to English.
          </p>
        </div>

        {/* 3 Interactive Language Cards */}
        <div className="space-y-2.5">
          {languagesList.map((lang) => {
            const isSelected = selectedLang === lang.id;
            return (
              <div
                key={lang.id}
                onClick={() => setSelectedLang(lang.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md scale-[1.01]'
                    : 'bg-neutral-50/70 hover:bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-sm shrink-0 border ${
                      isSelected
                        ? 'bg-[#C83B25] text-white border-[#C83B25]'
                        : 'bg-white text-neutral-900 border-neutral-200 group-hover:border-[#C83B25]/40'
                    }`}
                  >
                    {lang.code}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className={`font-display font-bold text-sm sm:text-base ${
                        isSelected ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {lang.nativeName}
                      </h3>
                      <span
                        className={`text-[9.5px] font-mono px-2 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-neutral-800 text-neutral-300'
                            : 'bg-neutral-200/80 text-neutral-600'
                        }`}
                        dangerouslySetInnerHTML={{ __html: lang.flagTag }}
                      />
                    </div>
                    <p className={`text-xs mt-0.5 line-clamp-1 ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-500'
                    }`}>
                      {lang.desc}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isSelected
                      ? 'bg-[#C83B25] border-[#C83B25] text-white'
                      : 'border-neutral-300 bg-white group-hover:border-neutral-400'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button & Bottom Reassurance */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleConfirm}
            className="w-full py-3.5 px-6 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white font-mono text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>
              {selectedLang === 'zh'
                ? '确认以 中文 (华语) 继续浏览'
                : selectedLang === 'ms'
                ? 'Teruskan dalam Bahasa Melayu'
                : 'Continue in English'}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] font-mono text-neutral-400 text-center leading-normal">
            You can always change the language at the bottom of any page at anytime.
          </p>
        </div>
      </div>
    </div>
  );
};
