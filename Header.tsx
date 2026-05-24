'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDark(true);
      document.documentElement?.classList?.add('dark');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement?.classList?.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement?.classList?.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/app_logo.png" alt="ScreenSizer Logo" width={36} height={36} />
            <span className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
              ScreenSizer
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link) => (
              <Link key={`nav-${link?.label}`} href={link?.href} className="px-4 py-2 text-sm font-500 text-secondary-foreground hover:text-primary hover:bg-primary/8 rounded-lg transition-all duration-150">
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="/#tool" className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-600 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-150">
              <Monitor size={15} />
              Check My Screen
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-secondary transition-all duration-150">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card py-3 animate-slide-up">
            {navLinks?.map((link) => (
              <Link key={`mobile-nav-${link?.label}`} href={link?.href} onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-3 text-sm font-500 text-secondary-foreground hover:text-primary hover:bg-primary/8 rounded-lg transition-all duration-150">
                {link?.label}
              </Link>
            ))}
            <div className="px-4 pt-2 pb-1">
              <a href="/#tool" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-primary text-primary-foreground text-sm font-600 rounded-lg">
                <Monitor size={15} />
                Check My Screen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
