import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section id="projects" className="px-5 sm:px-8 py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-3">{projects.eyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">{projects.title}</h2>
          <p className="text-muted text-base sm:text-lg mb-10 max-w-2xl">{projects.intro}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.items.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
