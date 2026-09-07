import { useLanguage } from "../i18n/LanguageContext";

export default function HeroStatus() {
  const { t } = useLanguage();
  const { hero, projects, stack } = t;

  const stackCount = stack.groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-surface overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#161821]">
          <span className="font-mono text-xs text-muted">{hero.statusTitle}</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-accent2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent2" />
            {hero.statusValue}
          </span>
        </div>
        <dl className="px-4 py-4 grid grid-cols-2 gap-4">
          <div>
            <dt className="font-mono text-[11px] text-muted">{hero.statProjects}</dt>
            <dd className="font-display text-2xl font-semibold text-text">
              {projects.items.length}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-muted">{hero.statStack}</dt>
            <dd className="font-display text-2xl font-semibold text-text">{stackCount}+</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-mono text-[11px] text-muted">{hero.statFocus}</dt>
            <dd className="font-mono text-sm text-accent mt-0.5">{hero.statFocusValue}</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-lg border border-border bg-surface overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161821]">
          <span className="editor-dot bg-[#FF5F57]" />
          <span className="editor-dot bg-[#FEBC2E]" />
          <span className="editor-dot bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-muted">wake_word.py</span>
        </div>
        <pre className="px-4 py-4 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto">
          <code>
            <span className="text-[#8B90A3]"># {t.hero.snippetCaption}</span>{"\n"}
            <span className="text-[#C792EA]">def</span>{" "}
            <span className="text-[#82AAFF]">on_wake_word</span>
            <span className="text-text/80">():</span>{"\n"}
            <span className="text-text/80">{"    "}task = notes.</span>
            <span className="text-[#82AAFF]">latest</span>
            <span className="text-text/80">()</span>{"\n"}
            <span className="text-text/80">{"    "}widget.</span>
            <span className="text-[#82AAFF]">listen</span>
            <span className="text-text/80">(timeout=</span>
            <span className="text-accent">5</span>
            <span className="text-text/80">)</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
