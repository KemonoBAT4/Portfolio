import { Mail, Terminal, Briefcase, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PERSONAL } from "../i18n/content";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLanguage();
  const { contact } = t;

  const links = [
    { label: contact.emailLabel, href: `mailto:${PERSONAL.email}`, value: PERSONAL.email, icon: Mail },
    { label: contact.githubLabel, href: PERSONAL.github, value: PERSONAL.github.replace("https://", ""), icon: Terminal },
    { label: contact.linkedinLabel, href: PERSONAL.linkedin, value: PERSONAL.linkedin.replace("https://", ""), icon: Briefcase },
  ];

  return (
    <section id="contact" className="relative px-5 sm:px-8 py-16 sm:py-24 border-t border-border overflow-hidden">
      <div className="glow glow-contact" aria-hidden />
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-3">{contact.eyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">{contact.title}</h2>
          <p className="text-muted text-base sm:text-lg mb-10 max-w-xl">{contact.body}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-surface divide-y divide-border overflow-hidden">
            {links.map(({ label, href, value, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between gap-3 px-5 py-4 hover:bg-surface-hover transition-colors"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <Icon className="w-4 h-4 text-accent shrink-0" aria-hidden />
                  <span className="font-mono text-sm text-muted shrink-0">{label}</span>
                  <span className="font-mono text-sm text-text/90 truncate">{value}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted shrink-0" aria-hidden />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
