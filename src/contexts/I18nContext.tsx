import { createContext, useState, ReactNode } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

type LocaleKey = keyof typeof en;
type Language = "en" | "es";

interface II18nContext {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: LocaleKey) => string;
}

const locales = {
  en,
  es,
};

export const I18nContext = createContext<II18nContext>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

interface II18nProvider {
  children: ReactNode;
}

export function I18nProvider({ children }: II18nProvider) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: LocaleKey): string => {
    return locales[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

