import { useLanguage } from "../i18n/LanguageContext";
import { PERSONAL } from "../i18n/content";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 sm:px-8 py-8 border-t border-border">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-muted">
        <span>
          © {year} {PERSONAL.handle}
        </span>
        <span>{t.footer}</span>
      </div>
    </footer>
  );
}
