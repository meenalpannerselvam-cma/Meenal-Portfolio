import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MapPin, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA, QuickFact } from '../data/content';
import { SectionHeading } from './SectionHeading';

const iconLookup: Record<string, React.ElementType> = {
  MapPin,
  Award,
  GraduationCap,
  CheckCircle,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title={PORTFOLIO_DATA.about.heading}
          subtitle="A blend of cost analysis, statutory audit exposure, and enterprise data rigor."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-8">
          
          {/* LEFT COLUMN: VISUAL PROFILE CARD & QUICK FACTS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Portrait Frame / Monogram presentation */}
            <div className="rounded-3xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border p-6 shadow-soft relative overflow-hidden">
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cream-100 to-cream-200 dark:from-slate-800 dark:to-darkbg-main flex flex-col items-center justify-center p-6 border border-cream-200 dark:border-slate-700">
                <img
                  src={PORTFOLIO_DATA.personal.photoUrl}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white dark:border-slate-700 mb-3"
                />
                <h3 className="font-heading font-bold text-lg text-ink-navy dark:text-white">
                  Meenal P
                </h3>
                <p className="text-xs text-accent-teal dark:text-teal-400 font-semibold tracking-wide uppercase mt-0.5">
                  Cost & Management Accounting Aspirant
                </p>
                <div className="mt-4 flex items-center space-x-2 text-xs text-ink-muted dark:text-slate-400 bg-white dark:bg-darkbg-card px-3 py-1.5 rounded-full border border-cream-300 dark:border-slate-700 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-highlight-green" />
                  <span>Available for immediate joining</span>
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="mt-6 pt-6 border-t border-cream-200 dark:border-darkbg-border">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-ink-muted dark:text-slate-400 mb-4">
                  Quick Facts
                </h4>
                <div className="space-y-3">
                  {PORTFOLIO_DATA.about.quickFacts.map((fact: QuickFact, index: number) => {
                    const Icon = iconLookup[fact.iconName] || Award;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-2.5 rounded-xl bg-cream-50 dark:bg-slate-800/60 border border-cream-200/80 dark:border-slate-700/60"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent-teal/10 dark:bg-accent-teal/20 text-accent-teal dark:text-teal-300 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-xs">
                          <span className="block text-ink-muted dark:text-slate-400 text-[11px] font-medium">
                            {fact.label}
                          </span>
                          <span className="font-semibold text-ink-navy dark:text-slate-200">
                            {fact.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: VERBATIM STORY PARAGRAPHS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white dark:bg-darkbg-card rounded-3xl p-8 sm:p-10 border border-cream-200 dark:border-darkbg-border shadow-soft space-y-5">
              {PORTFOLIO_DATA.about.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-base sm:text-[17px] leading-relaxed text-ink-navy/90 dark:text-slate-300 font-normal"
                >
                  {para}
                </p>
              ))}

              <div className="pt-4 flex items-center space-x-4">
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download="Meenal_P_Resume.pdf"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm bg-accent-teal text-white hover:bg-accent-teal-dark active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {PORTFOLIO_DATA.about.buttonText}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
