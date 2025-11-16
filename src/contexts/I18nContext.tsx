import { ReactNode, createContext, useState } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

type Language = "en" | "es";

interface Locales {
  [key: string]: { [key: string]: string };
}

interface II18nContext {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const locales: Locales = {
  en,
  es,
};

export const I18nContext = createContext<II18nContext | undefined>(undefined);

interface II18nProvider {
  children: ReactNode;
}

export function I18nProvider({ children }: II18nProvider) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return locales[language][key] || key;
  };

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>;
}
