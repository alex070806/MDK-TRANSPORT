"use client";
import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { Lang, translations } from "@/i18n/translations";

const langToHtml: Record<Lang, string> = { ru: "ru", ua: "uk", en: "en", es: "es" };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");

  useEffect(() => {
    document.documentElement.lang = langToHtml[lang];
  }, [lang]);

  const t = useCallback(
    (key: string) => translations[lang][key] || key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
