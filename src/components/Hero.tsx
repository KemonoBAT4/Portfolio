import { useLanguage } from "../i18n/LanguageContext";
import { useTypewriter } from "../hooks/useTypewriter";
import HeroStatus from "./HeroStatus";

export default function Hero() {
  const { t } = useLanguage();
  const { hero } = t;

  const lines = [hero.cmd1, hero.out1, hero.cmd2, hero.out2];
  const { revealed, done } = useTypewriter(lines);

  return (
    <section id="top" className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-5 sm:px-8 overflow-hidden">
      <div className="glow glow-hero" aria-hidden />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8 items-start">
          <div>
            <div className="rounded-lg border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161821]">
                <span className="editor-dot bg-[#FF5F57]" />
                <span className="editor-dot bg-[#FEBC2E]" />
                <span className="editor-dot bg-[#28C840]" />
                <span className="ml-3 font-mono text-xs text-muted">session.sh</span>
              </div>

              <div className="px-5 sm:px-6 py-6 sm:py-8 font-mono text-sm sm:text-base leading-relaxed min-h-[220px] sm:min-h-[240px]">
                <p className="text-muted">
                  <span className="text-accent">{hero.prompt}</span> {revealed[0]}
                  {!done && revealed[0].length < lines[0].length && (
                    <span className="inline-block w-[0.5em] h-[1em] align-middle bg-accent animate-blink ml-0.5" />
                  )}
                </p>
                {revealed[0].length === lines[0].length && (
                  <p className="mt-1 text-text text-lg sm:text-2xl font-display font-semibold">
                    &gt; {revealed[1]}
                  </p>
                )}

                {revealed[1].length === lines[1].length && lines[1].length > 0 && (
                  <p className="mt-6 text-muted">
                    <span className="text-accent">{hero.prompt}</span> {revealed[2]}
                    {revealed[1].length === lines[1].length &&
                      revealed[2].length < lines[2].length && (
                        <span className="inline-block w-[0.5em] h-[1em] align-middle bg-accent animate-blink ml-0.5" />
                      )}
                  </p>
                )}
                {revealed[2].length === lines[2].length && lines[2].length > 0 && (
                  <p className="mt-1 text-text/90">
                    &gt; {revealed[3]}
                    {done && (
                      <span className="inline-block w-[0.5em] h-[1em] align-middle bg-accent animate-blink ml-1" />
                    )}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="font-mono text-sm px-5 py-3 rounded-md bg-accent text-bg font-medium hover:brightness-110 transition"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#contact"
                className="font-mono text-sm px-5 py-3 rounded-md border border-border text-text hover:border-accent/50 hover:text-accent transition"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          <HeroStatus />
        </div>
      </div>
    </section>
  );
}
