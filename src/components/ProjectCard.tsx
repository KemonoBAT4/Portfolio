import { GitBranch } from "lucide-react";
import type { ProjectContent } from "../i18n/content";

export default function ProjectCard({ project }: { project: ProjectContent }) {
  return (
    <article className="group rounded-lg border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161821]">
        <span className="editor-dot bg-[#FF5F57]" />
        <span className="editor-dot bg-[#FEBC2E]" />
        <span className="editor-dot bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-muted group-hover:text-accent transition-colors">
          {project.file}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold mb-1">{project.name}</h3>
        <p className="text-accent/90 text-sm mb-3">{project.tagline}</p>
        <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

        <ul className="mb-5 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="font-mono text-xs sm:text-sm text-text/80 flex gap-2">
              <span className="text-accent2 select-none">+</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2 py-1 rounded border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-border flex items-center gap-1.5 text-[11px] font-mono text-muted cursor-pointer" onClick={() => {window.open(project.repo, "_blank");}}>
          <GitBranch className="w-3 h-3" aria-hidden />
          {project.branch}
        </div>
      </div>
    </article>
  );
}
