export type Lang = "it" | "en";

export interface ProjectContent {
  file: string; // editor-tab filename
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  branch: string;
  repo: string;
}

export interface SiteContent {
  nav: { about: string; projects: string; stack: string; contact: string };
  hero: {
    prompt: string;
    cmd1: string;
    out1: string;
    cmd2: string;
    out2: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statusTitle: string;
    statusValue: string;
    statProjects: string;
    statStack: string;
    statFocus: string;
    statFocusValue: string;
    snippetCaption: string;
  };
  about: { eyebrow: string; title: string; body: string };
  projects: { eyebrow: string; title: string; intro: string; items: ProjectContent[] };
  stack: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { label: string; items: string[] }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: string;
}

export const PERSONAL = {
  handle: "kemono",
  email: "marco.battisti004@gmail.com",
  github: "https://github.com/KemonoBAT4",
  linkedin: "https://linkedin.com/in/marco-battisti-kb4",
};

export const content: Record<Lang, SiteContent> = {
  it: {
    nav: {
      about: "about.tsx",
      projects: "projects.tsx",
      stack: "stack.tsx",
      contact: "contact.tsx"
    },
    hero: {
      prompt: "kemono@dev:~$",
      cmd1: "whoami",
      out1: "Marco Battisti, Sviluppatore Full-Stack Indipendente",
      cmd2: "cat mission.txt",
      out2:
        "Costruisco prodotti da zero: backend solidi, frontend puliti. Dal desktop all'AI, un progetto alla volta.",
      ctaPrimary: "Guarda i progetti",
      ctaSecondary: "Scrivimi",
      statusTitle: "status.json",
      statusValue: "online",
      statProjects: "case study",
      statStack: "tecnologie",
      statFocus: "focus attuale",
      statFocusValue: "AI & agenti",
      snippetCaption: "sempre in ascolto, anche di notte",
    },
    about: {
      eyebrow: "~/about",
      title: "Chi sono",
      body: "Mi chiamo Marco Battisti, sono uno sviluppatore full-stack indipendente. Lavoro in parallelo su più progetti personali — e potenzialmente commerciali — muovendomi tra backend in Python / Asp.Net Core / Spring Boot, app desktop in Electron / Avalonia, frontend in Angular / React e integrazione di modelli AI per la creazione di Agenti.",
    },
    projects: {
      eyebrow: "~/projects",
      title: "Progetti",
      intro: "Una selezione di cose che ho costruito, dal backend all'interfaccia.",
      items: [
        // {
        //   file: "Midnight.tsx",
        //   name: "Midnight",
        //   tagline: "App desktop per la produttività, sempre in ascolto.",
        //   description:
        //     "App desktop costruita con Electron e un backend Flask, pensata per gestire attività e appunti senza uscire dal flusso di lavoro. Include un widget vocale always-on che si attiva con una parola chiave grazie a Picovoice Porcupine.",
        //   features: [
        //     "Gestione di task e note",
        //     "Widget vocale always-on con wake-word detection",
        //     "UI riscritta con un sistema di template e componenti riutilizzabili",
        //   ],
        //   tags: ["Electron", "Flask", "JavaScript", "Picovoice"],
        // },
        {
          file: "cardinal.py",
          name: "Cardinal",
          tagline: "Un framework per generare interfacce, non scriverle a mano.",
          description:
            "Framework basato su Flask per generare pagine, card e tabelle dati in modo programmatico. Include un design system CSS unificato e la gestione multi-app tramite Docker Compose, con generazione automatica dei file via Jinja2.",
          features: [
            "Pagine, card, tabelle e form generati da configurazione",
            // "Sistema di navigazione guidato da JSON",
            "Automazione multi-app con run.sh (run, stop, setup, build, deploy, reset)",
          ],
          tags: ["Python", "Flask", "SQLAlchemy", "MySQL", "Docker", "Jinja2", "HTML", "CSS", ],
          branch: "main",
          repo: "https://github.com/KemonoBAT4/Cardinal",
        },
        {
          file: "friday.py",
          name: "Friday",
          tagline: "Un assistente AI con memoria, che permette di eseguire Task in modo automatico",
          description:
            "Assistente AI in Python costruito su LangGraph, con backend LLM multi-provider (Claude → Gemini → Ollama come fallback). Ha memoria a breve termine via SqliteSaver e memoria a lungo termine su ChromaDB, oltre a un'interfaccia CLI con ricerca web integrata.",
          features: [
            "Memoria a breve e lungo termine (SqliteSaver + ChromaDB)",
            "Backend LLM multi-provider con fallback automatico",
            "CLI con ricerca web (Tavily) e tool in tempo reale",
          ],
          tags: ["Python", "LangGraph", "FastAPI", "ChromaDB"],
          branch: "dev",
          repo: "https://github.com/KemonoBAT4/Friday",
        },
        {
          file: "homePilot.py",
          name: "HomePilot",
          tagline: "Un programma che facilita l'apertura di software e servizi dipendentemente da profili",
          description: "Un programma sviluppato in Python con FastAPI con l'obbiettivo di facilitare l'apertura di software dipendentemente da un profilo specifico selezionabile da remoto.",
          features: [
            "Accensione del PC tramite Wake-on-LAN",
            "Selezione del profilo tramite PWA o l'agente direttamente dal PC",
            "Possibilità di interagire con il pc a distanza, tramite la PWA",
          ],
          tags: ["Python", "FastAPI", "PostgreSQL", "React"],
          branch: "dev",
          repo: "https://github.com/KemonoBAT4/HomePilot",
        },
      ],
    },
    stack: {
      eyebrow: "~/stack",
      title: "Stack",
      intro: "Gli strumenti che uso più spesso, dal backend all'interfaccia.",
      groups: [
        { label: "Backend", items: ["Python", "Flask", "FastAPI", "SQLAlchemy", "JWT", "ASP.NET Core"]},
        { label: "Frontend", items: ["Angular", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"]},
        { label: "Desktop", items: ["Electron", "Avalonia"]},
        { label: "Infrastruttura", items: ["Docker", "Docker Compose", "Git"]},
        { label: "AI & Dati", items: ["LangGraph", "ChromaDB"]},
      ],
    },
    contact: {
      eyebrow: "~/contact",
      title: "Contatti",
      body: "Hai un progetto in mente o vuoi solo scambiare due parole? Scrivimi.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    footer: "Costruito con React, Vite e Tailwind.",
  },
  en: {
    nav: { about: "about.tsx", projects: "projects.tsx", stack: "stack.tsx", contact: "contact.tsx" },
    hero: {
      prompt: "kemono@dev:~$",
      cmd1: "whoami",
      out1: "Marco Battisti, Independent Full-Stack Developer",
      cmd2: "cat mission.txt",
      out2:
        "I build products from the ground up: solid backends, clean frontends, infrastructure that scales. From desktop apps to AI, one project at a time.",
      ctaPrimary: "See the projects",
      ctaSecondary: "Get in touch",
      statusTitle: "status.json",
      statusValue: "online",
      statProjects: "case studies",
      statStack: "technologies",
      statFocus: "current focus",
      statFocusValue: "AI & agents",
      snippetCaption: "always listening, even at night",
    },
    about: {
      eyebrow: "~/about",
      title: "About",
      body: "My name is Marco Battisti, and I am an independent full-stack developer. I work concurrently on multiple personal—and potentially commercial—projects, moving between backends (Python, ASP.NET Core, Spring Boot), desktop apps (Electron, Avalonia), frontends (Angular, React), and AI model integration for agent creation.",
    },
    projects: {
      eyebrow: "~/projects",
      title: "Projects",
      intro: "A selection of things I've built, from the backend to the interface.",
      items: [
        // {
        //   file: "Midnight.tsx",
        //   name: "Midnight",
        //   tagline: "A productivity desktop app that's always listening.",
        //   description:
        //     "Desktop app built with Electron and a Flask backend, designed to manage tasks and notes without breaking your flow. Includes an always-on voice widget that wakes up on a keyword using Picovoice Porcupine.",
        //   features: [
        //     "Task and note management",
        //     "Always-on voice widget with wake-word detection",
        //     "UI rebuilt around a reusable template/component system",
        //   ],
        //   tags: ["Electron", "Flask", "JavaScript", "Picovoice"],
        // },
        {
          file: "cardinal.py",
          name: "Cardinal",
          tagline: "A framework for generating interfaces, not hand-writing them.",
          description:
            "Flask-based framework for programmatically generating pages, cards, and data tables. Includes a unified CSS design system and multi-app management via Docker Compose, with automatic file generation through Jinja2.",
          features: [
            "Pages, cards, tables, and forms generated from config",
            "Multi-app automation via run.sh (run, setup, build, deploy, reset)",
          ],
          tags: ["Python", "Flask", "SQLAlchemy", "MySQL", "Docker", "Jinja2", "HTML", "CSS", ],
          branch: "main",
          repo: "https://github.com/KemonoBAT4/Cardinal",
        },
        {
          file: "friday.py",
          name: "Friday",
          tagline: "An AI assistant with memory, named after Cardinal from Sword Art Online.",
          description:
            "Python AI assistant built on LangGraph, with a multi-provider LLM backend (Claude → Gemini → Ollama fallback). Short-term memory via SqliteSaver and long-term memory on ChromaDB, plus a CLI with built-in web search.",
          features: [
            "Short- and long-term memory (SqliteSaver + ChromaDB)",
            "Multi-provider LLM backend with automatic fallback",
            "CLI with web search (Tavily) and real-time tools",
          ],
          tags: ["Python", "LangGraph", "FastAPI", "ChromaDB"],
          branch: "dev",
          repo: "https://github.com/KemonoBAT4/Friday",
        },
        {
          file: "homePilot.py",
          name: "HomePilot",
          tagline: "A Program that makes it easy to open software and services based on profiles.",
          description: "A Python program with FastAPI, with the goal of making it easy to open software based on profiles.",
          features: [
            "Turns on the PC via Wake-on-LAN",
            "Selects the profile via PWA or the agent directly from the PC",
            "Allows interaction with the PC remotely through the PWA",
          ],
          tags: ["Python", "FastAPI", "PostgreSQL", "React"],
          branch: "dev",
          repo: "https://github.com/KemonoBAT4/HomePilot",
        },
      ],
    },
    stack: {
      eyebrow: "~/stack",
      title: "Stack",
      intro: "The tools I reach for most, from backend to interface.",
      groups: [
        { label: "Backend"       , items: ["Python", "Flask", "FastAPI", "SQLAlchemy", "JWT", "ASP.NET Core"] },
        { label: "Frontend"      , items: ["Angular", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"]  },
        { label: "Desktop"       , items: ["Electron", "Avalonia"]                                            },
        { label: "Infrastructure", items: ["Docker", "Docker Compose", "Git"]                                 },
        { label: "AI & Data"     , items: ["LangGraph", "ChromaDB"]                                           },
      ],
    },
    contact: {
      eyebrow: "~/contact",
      title: "Contact",
      body: "Have a project in mind, or just want to say hi? Reach out.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    footer: "Built with React, Vite, and Tailwind.",
  },
};
