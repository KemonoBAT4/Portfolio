"use client"
// components
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'Cardinal',
    description:
      'A management application that can interact with other external applications and manage different realities, made with Python, Flask, and SQLAlchemy.',
    github: '#',
  },
  {
    title: 'Midnight',
    description:
      'A Windows / mobile application powered with AI to enhance daily routine, made with the Electron JS framework for the client and Python for the server side & AI agents. (W.I.P.)',
    github: '#',
  },
  {
    title: 'Programming-Library',
    description:
      'An expandable library for programming utilities like functions, utility classes for different languages, and helpful explanations for different topics. Made with Node.js Express and C# .NET. (W.I.P.)',
    github: '#',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <Header />
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light mb-8">My Projects</h3>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="p-6 rounded border" style={{ borderColor: 'var(--border)', boxShadow: 'var(--glow, none)' }}>
                <h4 className="text-2xl mb-4">{project.title}</h4>
                <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{project.description}</p>
                <a href={project.github} style={{ color: 'var(--text-muted)' }} className="hover:text-white transition">
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}