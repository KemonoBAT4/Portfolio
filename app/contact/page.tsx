"use client"
// components
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <Header />
        <section className="py-20 px-8 min-h-screen" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-light mb-8">Get In Touch</h3>
                <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Interested in collaborating? Let's connect!</p>
                <div className="space-x-6">
                    <a href="mailto:marco.battisti004@gmail.com" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/marco-battisti-kb4/" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition">
                        LinkedIn
                    </a>
                    <a href="https://github.com/KemonoBAT4" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    <Footer />
    </div>
  );
}