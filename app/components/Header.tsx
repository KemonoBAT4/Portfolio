'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }} className="px-8 py-5">

      {/* Desktop & Mobile top bar */}
      <div className="flex justify-between items-center">
        <Link href="/" style={{ color: 'var(--text)' }} className="text-2xl font-bold">
          Marco Battisti
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" style={{ color: 'var(--text-muted)' }} className="hover:opacity-80 transition">About</Link>
          <Link href="/projects" style={{ color: 'var(--text-muted)' }} className="hover:opacity-80 transition">Projects</Link>
          <Link href="/contact" style={{ color: 'var(--text-muted)' }} className="hover:opacity-80 transition">Contact</Link>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded border transition"
            style={{ borderColor: 'var(--border)', color: 'var(--text)', backgroundColor: 'transparent' }}
          >
            {theme === 'minimal' ? '◈ Vaporwave' : '○ Minimal'}
          </button>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded border text-sm transition"
            style={{ borderColor: 'var(--border)', color: 'var(--text)', backgroundColor: 'transparent' }}
          >
            {theme === 'minimal' ? '◈' : '○'}
          </button>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            style={{ color: 'var(--text)' }}
            className="text-2xl leading-none"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="flex flex-col mt-4 space-y-4 md:hidden">
          <Link href="/about" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-muted)' }} className="hover:opacity-80 transition">About</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-muted)' }} className="hover:opacity-80 transition">Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-muted)' }} className="hover:opacity-80 transition">Contact</Link>
        </nav>
      )}
    </header>
  );
}
