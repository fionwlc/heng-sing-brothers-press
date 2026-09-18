import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, TRANSLATIONS } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isFirstTimeModalOpen: boolean;
  setIsFirstTimeModalOpen: (open: boolean) => void;
  selectLanguageAndClose: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY_LANG = 'heng_sing_language';
const STORAGE_KEY_CHOSEN = 'heng_sing_language_chosen';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default is 'en' as requested
  const [language, setLanguageState] = useState<Language>('en');
  const [isFirstTimeModalOpen, setIsFirstTimeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY_LANG) as Language | null;
      const hasChosen = localStorage.getItem(STORAGE_KEY_CHOSEN);

      if (savedLang && (savedLang === 'en' || savedLang === 'zh' || savedLang === 'ms')) {
        setLanguageState(savedLang);
      } else {
        setLanguageState('en'); // strict default to English
      }

      // If user hasn't explicitly chosen their preferred language yet (first timer), show prompt
      if (!hasChosen) {
        // Small delay for smooth entry animation
        const timer = setTimeout(() => {
          setIsFirstTimeModalOpen(true);
        }, 400);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked
      setLanguageState('en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
      localStorage.setItem(STORAGE_KEY_CHOSEN, 'true');
    } catch {
      // Ignore storage errors in restricted contexts
    }
  };

  const selectLanguageAndClose = (lang: Language) => {
    setLanguage(lang);
    setIsFirstTimeModalOpen(false);
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isFirstTimeModalOpen,
        setIsFirstTimeModalOpen,
        selectLanguageAndClose,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
