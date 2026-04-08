"use client"
import Header from '../components/Header';
import Footer from '../components/Footer';

const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'], redirect: "/about/frontend" },
    { category: 'Backend' , items: ['Node.js', 'Express', 'Python', 'Flask']         , redirect: "/about/backend"  },
    { category: 'Database', items: ['MongoDB', 'SQLAlchemy', 'REST APIs']            , redirect: "/about/database" },
    { category: 'Tools'   , items: ['Git', 'Docker', 'VS Code', 'Electron']          , redirect: "/about/tools"    },
];

const approach = [
    { icon: '◈', title: 'Clean Code'   , desc: "I write clean, readable, and maintainable code following clean code principles. Clear names, simple functions, and intuitive structures are not just details — they are respect for whoever will work on that code after me." },
    { icon: '◎', title: 'Problem First', desc: "I understand the problem first, then I choose the technology — not the other way around. The best tool is the one that fits the problem, not the one I'm most comfortable with.     " },
    { icon: '◇', title: 'Iterative'    , desc: "I build in small, working steps — improving with each iteration. Progress over perfection, always." },
    { icon: '⬡', title: 'Simplicity'   , desc: "If I can't explain what a piece of code does in one sentence, it's probably doing too much." },
];

const curiosities = [
    "Passionate about AI and how it can reshape the way we work and think",
    "I enjoy exploring new frameworks just to understand how they work",
    "I enjoy building small apps that solve real, everyday problems",
    "I find inspiration in Japanese minimalist design",
];

const timeline = [
    { year: '2018'      , label: 'Frist Steps'   , desc: 'HTML, CSS, JavaScript — The First Steps in Web Development.'         },
    { year: '2022'      , label: 'Full Stack'    , desc: 'React, Node.js, Express, MongoDB. - First Full Stack Projects.'      },
    { year: '2024'      , label: 'Specialization', desc: 'Next.js, TypeScript, Python, More Complex Projects & Architectures.' },
    { year: '2025 - Now', label: 'AI & Desktop'  , desc: 'Integrating AI in apps, Electron, Python Agents.'                    },
];

export default function About() {
    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
            <Header />

            {/* About Me */}
            <section className="py-24 px-8">
                <div className="max-w-3xl mx-auto">

                    <span className="text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>01 — About</span>
                    <h2 className="text-4xl font-light mt-2 mb-8">About Me</h2>

                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        I'm a Full stack developer with a strong passion for learning and experimenting with new technologies.
                        I focus on writing clean, efficient code and building scalable solutions —
                        always looking for the right tool to solve the right problem.
                    </p>

                </div>
            </section>

            {/* Skills */}
            <section className="py-24 px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="max-w-3xl mx-auto">

                    <span className="text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>02 — Skills</span>
                    <h2 className="text-4xl font-light mt-2 mb-12">Technologies</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map(({ category, items }) => (
                            <div key={category} className="p-5 rounded border" style={{ borderColor: 'var(--border)', boxShadow: 'var(--glow, none)' }}>

                                <h4 className="text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>{category}</h4>
                                <ul className="space-y-2">
                                    {items.map(item => (
                                        <li key={item} className="text-sm" style={{ color: 'var(--text)' }}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="py-24 px-8">
                <div className="max-w-3xl mx-auto">

                    <span className="text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>03 — Approach</span>

                    <h2 className="text-4xl font-light mt-2 mb-12">My Approach Method</h2>
                    <div className="space-y-6">
                        {approach.map(({ icon, title, desc }) => (
                            <div key={title} className="flex gap-6 p-6 rounded border" style={{ borderColor: 'var(--border)', boxShadow: 'var(--glow, none)' }}>

                                <span className="text-2xl mt-1" style={{ color: 'var(--text-muted)' }}>{icon}</span>

                                <div>
                                    <h4 className="text-lg mb-1">{title}</h4>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curiosities */}
            <section className="py-24 px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="max-w-3xl mx-auto">
                <span className="text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>04 — Curiosities</span>
                <h2 className="text-4xl font-light mt-2 mb-12">More About Me</h2>
                <ul className="space-y-4">
                    {curiosities.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                        <span className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>—</span>
                        <p style={{ color: 'var(--text-muted)' }}>{item}</p>
                    </li>
                    ))}
                </ul>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 px-8">
                <div className="max-w-3xl mx-auto">
                <span className="text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>05 — Background</span>
                <h2 className="text-4xl font-light mt-2 mb-12">My Journey</h2>
                <div className="relative">
                    <div className="absolute left-16 top-0 bottom-0 w-px" style={{ backgroundColor: 'var(--border)' }} />
                    <div className="space-y-10">
                    {timeline.map(({ year, label, desc }) => (
                        <div key={year} className="flex gap-8 items-start">
                        <span className="text-sm w-12 pt-1 text-right shrink-0" style={{ color: 'var(--text-muted)' }}>{year}</span>
                        <div className="pl-8">
                            <h4 className="text-base mb-1">{label}</h4>
                            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </section>

            <Footer />
        </div>
  );
}