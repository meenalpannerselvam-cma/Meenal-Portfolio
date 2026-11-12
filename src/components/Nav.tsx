import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/content';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Toolkit', href: '#toolkit' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Playground', href: '#playground' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from document or localStorage
  useEffect(() => {
    const isDarkStored = localStorage.getItem('theme') === 'dark';
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Scroll-spy and shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F0]/90 dark:bg-[#0B1325]/90 backdrop-blur-md shadow-sm border-b border-cream-200 dark:border-darkbg-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center space-x-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal rounded-lg p-1"
          aria-label="Meenal P - Home"
        >
          <div className="w-10 h-10 rounded-xl bg-ink-navy dark:bg-white text-white dark:text-ink-navy flex items-center justify-center font-heading font-black text-lg tracking-wider shadow-sm group-hover:scale-105 transition-transform shrink-0">
            {PORTFOLIO_DATA.personal.initials}
          </div>
          <span className="font-heading font-bold text-lg text-ink-navy dark:text-white hidden lg:inline-block whitespace-nowrap">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/70 dark:bg-darkbg-card/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-cream-200 dark:border-darkbg-border shadow-xs">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-accent-teal text-white shadow-xs'
                    : 'text-ink-muted dark:text-slate-300 hover:text-ink-navy dark:hover:text-white hover:bg-cream-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS: THEME TOGGLE & CONTACT CTA */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-xl text-ink-muted dark:text-slate-300 hover:bg-white dark:hover:bg-darkbg-card hover:text-ink-navy dark:hover:text-white border border-cream-200 dark:border-darkbg-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
          >
            {isDark ? <Sun className="w-4 h-4 text-highlight-amber" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-accent-teal text-white hover:bg-accent-teal-dark active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2"
          >
            Contact
          </a>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-xl text-ink-navy dark:text-white hover:bg-cream-200 dark:hover:bg-darkbg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-white dark:bg-darkbg-card rounded-2xl p-5 shadow-xl border border-cream-200 dark:border-darkbg-border animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-teal text-white font-semibold'
                      : 'text-ink-navy dark:text-slate-200 hover:bg-cream-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 w-full py-2.5 rounded-xl text-center text-sm font-semibold bg-accent-teal text-white hover:bg-accent-teal-dark shadow-sm"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
