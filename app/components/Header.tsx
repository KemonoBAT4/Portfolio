'use client';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header style={{ backgroundColor: 'var(--bg)' }} className="flex justify-between items-center p-8">
        <Link href="/" style={{ color: 'var(--text)' }} className="text-2xl font-bold">
            Marco Battisti
        </Link>

        <nav className="flex items-center space-x-6">
            <Link href="/about" style={{ color: 'var(--text-muted)' }}>
                About
            </Link>
            <Link href="/projects" style={{ color: 'var(--text-muted)' }}>
                Projects
            </Link>
            <Link href="/contact" style={{ color: 'var(--text-muted)' }}>
                Contact
            </Link>

            {/* Toggle button */}
            <button onClick={toggleTheme} className="px-4 py-2 rounded border transition" style={{
                borderColor: 'var(--border)',
                color: 'var(--text)',
                backgroundColor: 'transparent',
            }} >
                {theme === 'minimal' ? '🌸 Vaporwave' : '⬛ Minimal'}
            </button>
        </nav>
        </header>
    );
}