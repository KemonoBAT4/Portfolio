"use client"
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <Header />

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light mb-8">About Me</h3>
          <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Junior developer with a strong focus on full stack development,
            passionate about learning and experimenting with the latest technologies.
            I am constantly working to improve my skills in order to design and develop
            innovative, efficient, and scalable solutions that meet
            the ever-evolving needs of the industry.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Frontend', skills: 'React, Next.js, Tailwind CSS' },
              { title: 'Backend',  skills: 'Node.js, Express, MongoDB' },
              { title: 'Tools',    skills: 'Git, Docker, VS Code' },
              { title: 'Other',    skills: 'TypeScript, REST APIs' },
            ].map(({ title, skills }) => (
              <div
                key={title}
                className="text-center p-4 rounded border transition"
                style={{
                  borderColor: 'var(--border)',
                  boxShadow: 'var(--glow, none)',
                }}
              >
                <h4 className="text-xl mb-2" style={{ color: 'var(--text)' }}>
                  {title}
                </h4>
                <p style={{ color: 'var(--text-muted)' }}>{skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}