import { Server, MonitorSmartphone, AppWindow, Boxes, BrainCircuit } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const ICONS = [Server, MonitorSmartphone, AppWindow, Boxes, BrainCircuit];

export default function Stack() {
  const { t } = useLanguage();
  const { stack } = t;

  return (
    <section id="stack" className="relative px-5 sm:px-8 py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-3">{stack.eyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">{stack.title}</h2>
          <p className="text-muted text-base sm:text-lg mb-10 max-w-2xl">{stack.intro}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.groups.map((group, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={group.label} delay={i * 0.05}>
                <div className="h-full rounded-lg border border-border bg-surface p-5 hover:border-accent/40 transition-colors">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-8 h-8 rounded-md bg-accent-soft flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent" aria-hidden />
                    </span>
                    <span className="font-mono text-sm text-text/90">{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1 rounded border border-border text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
