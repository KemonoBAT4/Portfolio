import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const DAILY_STACK = ["Python", "Flask", "JavaScript / TypeScript", "Angular", "Electron", "Docker"];

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" className="px-5 sm:px-8 py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-10 items-start">
        <Reveal>
          <p className="eyebrow mb-3">{about.eyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">{about.title}</h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">{about.body}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161821]">
              <span className="editor-dot bg-[#FF5F57]" />
              <span className="editor-dot bg-[#FEBC2E]" />
              <span className="editor-dot bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-muted">daily_stack.sh</span>
            </div>
            <div className="px-4 py-4 font-mono text-sm">
              <p className="text-muted mb-2">
                <span className="text-accent">$</span> ls ~/stack
              </p>
              <ul className="space-y-1.5">
                {DAILY_STACK.map((item) => (
                  <li key={item} className="text-text/85 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
