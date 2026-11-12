import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Experience: React.FC = () => {
  // By default, open the first item (newest)
  const [expandedId, setExpandedId] = useState<string | null>(PORTFOLIO_DATA.experience.items[0]?.id || null);

  const toggleItem = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career History"
          title={PORTFOLIO_DATA.experience.heading}
          subtitle={PORTFOLIO_DATA.experience.subheading}
        />

        {/* Vertical Timeline Accordion */}
        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Vertical timeline spine */}
          <div 
            className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-teal via-highlight-amber to-cream-300 dark:to-darkbg-border" 
            aria-hidden="true" 
          />

          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.items.map((item: ExperienceItem, index: number) => {
              const isExpanded = expandedId === item.id;

              return (
                <div key={item.id} className="relative pl-10 sm:pl-16">
                  {/* Timeline Node Badge */}
                  <div 
                    className={`absolute left-2 sm:left-4 top-5 -translate-x-1/2 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-accent-teal border-cream-100 dark:border-darkbg-main shadow-md scale-110' 
                        : 'bg-white dark:bg-darkbg-card border-accent-teal/50'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Accordion Card */}
                  <div
                    className={`rounded-2xl border transition-all duration-300 bg-white dark:bg-darkbg-card overflow-hidden ${
                      isExpanded
                        ? 'border-accent-teal/40 dark:border-accent-teal/40 shadow-soft-lg ring-1 ring-accent-teal/20'
                        : 'border-cream-200 dark:border-darkbg-border shadow-soft hover:border-cream-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Collapsed Header / Trigger Button */}
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`exp-content-${item.id}`}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-heading font-bold text-lg sm:text-xl text-ink-navy dark:text-white">
                            {item.role}
                          </span>
                          {index === 0 && (
                            <span className="px-2 py-0.5 rounded-full bg-accent-teal/10 text-accent-teal dark:text-teal-300 text-[11px] font-semibold">
                              Latest Role
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center text-xs sm:text-sm text-ink-muted dark:text-slate-300 gap-x-4 gap-y-1">
                          <span className="inline-flex items-center font-medium text-accent-teal dark:text-teal-400">
                            <Building2 className="w-3.5 h-3.5 mr-1" />
                            {item.company}
                          </span>
                          <span className="inline-flex items-center">
                            <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                            {item.location}
                          </span>
                          <span className="inline-flex items-center">
                            <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                            {item.period}
                          </span>
                        </div>
                      </div>

                      {/* Expand Chevron Icon */}
                      <div className={`p-2 rounded-xl bg-cream-100 dark:bg-slate-800 text-ink-navy dark:text-white transition-transform duration-300 shrink-0 ${
                        isExpanded ? 'rotate-180 bg-accent-teal text-white' : ''
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Expanded Content Drawer */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`exp-content-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-cream-100 dark:border-darkbg-border space-y-4">
                            {/* Bullet points */}
                            <ul className="space-y-2.5">
                              {item.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start text-sm leading-relaxed text-ink-navy/85 dark:text-slate-300">
                                  <CheckCircle2 className="w-4 h-4 text-accent-teal mr-2.5 mt-0.5 shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Skill Tags */}
                            <div className="pt-3 flex flex-wrap gap-2 items-center">
                              <span className="text-xs font-semibold text-ink-muted dark:text-slate-400 mr-1">
                                Core skills:
                              </span>
                              {item.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-cream-100 dark:bg-slate-800 text-ink-navy dark:text-slate-300 border border-cream-200 dark:border-slate-700"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
