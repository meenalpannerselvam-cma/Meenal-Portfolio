import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/content';

export const SlimBanner: React.FC = () => {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="rounded-3xl bg-gradient-to-r from-accent-teal via-teal-700 to-ink-navy p-6 sm:p-8 text-white shadow-soft-lg flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-1 text-center sm:text-left z-10">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
            {PORTFOLIO_DATA.slimBanner.title}
          </h3>
          <p className="text-xs sm:text-sm text-teal-100 max-w-md">
            {PORTFOLIO_DATA.slimBanner.subtext}
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0 z-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-ink-navy hover:bg-cream-100 active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail className="w-4 h-4 mr-2 text-accent-teal" />
            <span>{PORTFOLIO_DATA.slimBanner.buttonText}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};
