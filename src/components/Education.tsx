import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Clock, Sparkles, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA, EducationItem, CmaMilestone, CertificationItem } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-cream-50/50 dark:bg-darkbg-main/30 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Qualifications"
          title={PORTFOLIO_DATA.education.heading}
          subtitle={PORTFOLIO_DATA.education.subheading}
        />

        {/* CMA PROGRESS TRACKER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border p-6 sm:p-8 shadow-soft mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-cream-200 dark:border-darkbg-border gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-teal dark:text-teal-400">
                Professional Roadmap
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink-navy dark:text-white">
                CMA India Journey (ICMAI)
              </h3>
            </div>
            <span className="text-xs text-ink-muted dark:text-slate-400 bg-cream-100 dark:bg-slate-800 px-3 py-1.5 rounded-full w-fit">
              Institute of Cost and Management Accountants of India
            </span>
          </div>

          {/* Stepper Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {PORTFOLIO_DATA.education.cmaTracker.map((milestone: CmaMilestone, index: number) => {
              const isCleared = milestone.status === 'cleared';
              const isInProgress = milestone.status === 'in_progress';

              return (
                <div
                  key={milestone.stage}
                  className={`p-5 rounded-2xl border transition-all ${
                    isCleared
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : isInProgress
                      ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800'
                      : 'bg-cream-50 dark:bg-slate-850 border-cream-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted dark:text-slate-400">
                      Stage 0{index + 1}
                    </span>
                    {isCleared ? (
                      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                        Cleared {milestone.year && `(${milestone.year})`}
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream-200 dark:bg-slate-700 text-ink-muted dark:text-slate-300">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {milestone.statusLabel}
                      </span>
                    )}
                  </div>

                  <h4 className="font-heading font-bold text-lg text-ink-navy dark:text-white mb-1">
                    CMA {milestone.stage}
                  </h4>

                  {milestone.todoNote ? (
                    <p className="text-xs text-amber-700 dark:text-amber-400 mt-2 font-medium bg-amber-100/60 dark:bg-amber-900/40 p-2 rounded-lg">
                      {milestone.todoNote}
                    </p>
                  ) : (
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1 font-medium">
                      Foundation cleared with flying colors in 2023.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* TWO-COLUMN GRID: TIMELINE & CERTIFICATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: ACADEMIC TIMELINE */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-heading font-bold text-lg text-ink-navy dark:text-white flex items-center mb-6">
              <GraduationCap className="w-5 h-5 mr-2 text-accent-teal" />
              Academic Credentials
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.timeline.map((edu: EducationItem) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-heading font-bold text-base text-ink-navy dark:text-white">
                        {edu.degree}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-muted dark:text-slate-400">
                      {edu.institution}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-slate-400 pt-1">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-teal/10 text-accent-teal dark:text-teal-300 border border-accent-teal/20">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CERTIFICATIONS SHOWCASE */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading font-bold text-lg text-ink-navy dark:text-white flex items-center mb-6">
              <Award className="w-5 h-5 mr-2 text-highlight-amber" />
              Verified Certifications
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.certifications.map((cert: CertificationItem) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border shadow-soft flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-highlight-amber/10 dark:bg-highlight-amber/20 text-highlight-amber flex items-center justify-center shrink-0">
                    {cert.iconName === 'Sparkles' ? (
                      <Sparkles className="w-6 h-6 text-highlight-coral" />
                    ) : (
                      <Award className="w-6 h-6 text-highlight-amber" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-sm sm:text-base text-ink-navy dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-ink-muted dark:text-slate-400">
                      {cert.issuer}
                    </p>
                    {cert.score && (
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-cream-100 dark:bg-slate-800 text-accent-teal dark:text-teal-300">
                        {cert.score}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
