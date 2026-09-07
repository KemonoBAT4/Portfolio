import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { content } from "./content";
import type { Lang, SiteContent } from "./content";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang((l) => (l === "it" ? "en" : "it")),
      t: content[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
