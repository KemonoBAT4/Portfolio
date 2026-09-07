import { useLanguage } from "../i18n/LanguageContext";
import { PERSONAL } from "../i18n/content";

const SECTIONS: { id: string; key: "about" | "projects" | "stack" | "contact" }[] = [
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "stack", key: "stack" },
  { id: "contact", key: "contact" },
];

export default function Nav() {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-mono text-sm sm:text-base text-text shrink-0"
          aria-label="Torna in cima"
        >
          <span className="text-accent">~/</span>
          {PERSONAL.handle}
        </a>

        <nav
          aria-label="Sezioni"
          className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar"
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-xs sm:text-sm text-muted hover:text-text hover:bg-surface-hover px-2.5 sm:px-3 py-1.5 rounded-md whitespace-nowrap transition-colors"
            >
              {t.nav[s.key]}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleLang}
          className="shrink-0 font-mono text-xs sm:text-sm border border-border rounded-md px-2.5 py-1.5 text-muted hover:text-accent hover:border-accent/50 transition-colors"
          aria-label="Cambia lingua / Switch language"
        >
          <span className={lang === "it" ? "text-accent" : ""}>IT</span>
          <span className="text-border mx-1">/</span>
          <span className={lang === "en" ? "text-accent" : ""}>EN</span>
        </button>
      </div>
    </header>
  );
}
