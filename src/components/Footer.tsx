import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/content';

const FOOTER_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Toolkit', href: '#toolkit' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Playground', href: '#playground' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-navy text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* LEFT COLUMN: BRANDING & TAGLINE */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-accent-teal text-white flex items-center justify-center font-heading font-black text-lg tracking-wider shadow-sm">
                {PORTFOLIO_DATA.personal.initials}
              </div>
              <span className="font-heading font-bold text-xl text-white">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {PORTFOLIO_DATA.personal.footerTagline}
            </p>

            <p className="text-xs text-slate-400 font-medium">
              {PORTFOLIO_DATA.personal.copyright}
            </p>
          </div>

          {/* MIDDLE COLUMN: QUICK LINKS */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-accent-teal-light mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white hover:underline transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SOCIAL ICONS & BACK TO TOP BUTTON */}
          <div className="md:col-span-3 space-y-4 flex flex-col md:items-end justify-between">
            <div className="space-y-3 w-full md:w-auto">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-accent-teal-light mb-4">
                Connect
              </h4>
              <div className="flex items-center space-x-3">
                {/* Email link */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  aria-label="Send email to Meenal"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-accent-teal text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* LinkedIn link */}
                <a
                  href={PORTFOLIO_DATA.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Meenal's LinkedIn profile"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0077b5] text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom subtle note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            Designed & engineered for high-clarity recruitment scanning.
          </p>
          <p>
            Built with React, Vite & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
};
