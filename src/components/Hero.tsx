import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Mail, CheckCircle2, Award, Briefcase, FileSpreadsheet } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/content';
import { FloatingShapesHero } from './FloatingShapes';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden max-w-full"
    >
      {/* 3D Floating Finance Shapes Layer */}
      <FloatingShapesHero />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Small Location / Certification Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-teal/10 dark:bg-accent-teal/20 border border-accent-teal/20 text-accent-teal dark:text-teal-300 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse shrink-0" />
              <span className="leading-tight">{PORTFOLIO_DATA.personal.heroTag}</span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-6xl font-extrabold text-ink-navy dark:text-white tracking-tight leading-[1.1]"
            >
              Hi, I'm <span className="text-accent-teal dark:text-teal-400">Meenal!</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-2xl font-normal text-ink-navy/80 dark:text-slate-300 max-w-xl leading-snug"
            >
              {PORTFOLIO_DATA.personal.tagline}
            </motion.p>

            {/* Three Fact Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 pt-2"
            >
              <div className="inline-flex items-center text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl bg-white dark:bg-darkbg-card border border-cream-300 dark:border-darkbg-border shadow-xs text-ink-navy dark:text-slate-200">
                <Award className="w-4 h-4 text-highlight-amber mr-2 shrink-0" />
                <span>{PORTFOLIO_DATA.hero.factChips[0]}</span>
              </div>
              <div className="inline-flex items-center text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl bg-white dark:bg-darkbg-card border border-cream-300 dark:border-darkbg-border shadow-xs text-ink-navy dark:text-slate-200">
                <Briefcase className="w-4 h-4 text-accent-teal mr-2 shrink-0" />
                <span>{PORTFOLIO_DATA.hero.factChips[1]}</span>
              </div>
              <div className="inline-flex items-center text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl bg-white dark:bg-darkbg-card border border-cream-300 dark:border-darkbg-border shadow-xs text-ink-navy dark:text-slate-200">
                <FileSpreadsheet className="w-4 h-4 text-highlight-coral mr-2 shrink-0" />
                <span>{PORTFOLIO_DATA.hero.factChips[2]}</span>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Meenal_P_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-accent-teal text-white hover:bg-accent-teal-dark active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2"
              >
                <Download className="w-4 h-4 mr-2" />
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base border-2 border-ink-navy dark:border-slate-300 text-ink-navy dark:text-white hover:bg-ink-navy hover:text-white dark:hover:bg-white dark:hover:text-ink-navy active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-navy"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact me
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VISUAL MONOGRAM FRAME */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Outer decorative halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent-teal/20 via-highlight-amber/20 to-highlight-coral/20 blur-xl opacity-75" />

              {/* Main Card Frame */}
              <div className="relative w-72 sm:w-84 aspect-[4/5] rounded-3xl bg-gradient-to-b from-white to-cream-100 dark:from-darkbg-card dark:to-slate-900 border-2 border-white dark:border-darkbg-border shadow-soft-xl p-6 flex flex-col justify-between items-center text-center overflow-hidden">
                {/* Background subtle watermark grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#14213d_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04]" />

                {/* Top Badge */}
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cream-200 dark:bg-slate-800 text-[11px] font-semibold text-ink-muted dark:text-slate-300 z-10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-highlight-green" />
                  <span>CMA India Aspirant</span>
                </div>

                {/* Central Photo Portrait */}
                <div className="relative my-auto z-10">
                  <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-accent-teal via-highlight-amber to-highlight-coral p-1.5 shadow-xl flex items-center justify-center">
                    <img
                      src={PORTFOLIO_DATA.personal.photoUrl}
                      alt={PORTFOLIO_DATA.personal.name}
                      className="w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-800"
                    />
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="w-full bg-white/80 dark:bg-darkbg-card/80 backdrop-blur-sm rounded-2xl p-3 border border-cream-200 dark:border-darkbg-border z-10">
                  <p className="font-heading font-bold text-sm text-ink-navy dark:text-white">
                    Meenal P
                  </p>
                  <p className="text-xs text-ink-muted dark:text-slate-400">
                    B.Com (Cost & Mgmt) · CMA Foundation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* INFINITE SCROLLING TICKER */}
      <div className="relative w-full max-w-full overflow-hidden py-4 my-8 bg-ink-navy text-white">
        {/* Subtle gradient edges for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-ink-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-ink-navy to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-ticker">
          {[...PORTFOLIO_DATA.hero.tickerItems, ...PORTFOLIO_DATA.hero.tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-6 mx-4">
              <span className="font-heading font-semibold text-sm sm:text-base tracking-wide text-cream-100">
                {item}
              </span>
              <span className="text-highlight-amber text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="max-w-content mx-auto px-4 text-center">
        <a
          href="#about"
          className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-ink-muted dark:text-slate-400 hover:text-accent-teal dark:hover:text-teal-400 transition-colors uppercase"
        >
          <span>{PORTFOLIO_DATA.hero.scrollHint}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
