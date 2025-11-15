import { createContext, useState, ReactNode } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

type Language = "en" | "es";

interface Locales {
  en: typeof en;
  es: typeof es;
}

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const locales: Locales = {
  en,
  es,
};

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return locales[language][key as keyof typeof en] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

