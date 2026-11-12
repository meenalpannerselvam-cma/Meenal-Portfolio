import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Clock, AlertCircle, Search, Target, Lightbulb } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close modal on Escape key & trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-cream-50/50 dark:bg-darkbg-main/30 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Case Studies"
          title={PORTFOLIO_DATA.projects.heading}
          subtitle={PORTFOLIO_DATA.projects.subheading}
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PORTFOLIO_DATA.projects.items.map((project: ProjectItem) => {
            const isComingSoon = project.comingSoon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border overflow-hidden shadow-soft flex flex-col justify-between group hover:shadow-soft-lg hover:border-cream-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  {/* Themed Coloured Cover Banner */}
                  <div
                    className={`h-40 w-full p-6 flex flex-col justify-between relative overflow-hidden ${
                      project.color === 'teal'
                        ? 'bg-gradient-to-tr from-[#0F766E] to-[#14B8A6]'
                        : project.color === 'amber'
                        ? 'bg-gradient-to-tr from-[#B45309] to-[#F59E0B]'
                        : 'bg-gradient-to-tr from-[#BE123C] to-[#F26B4E]'
                    }`}
                  >
                    {/* Decorative subtle texture */}
                    <div className="absolute inset-0 bg-white/10 [mask-image:radial-gradient(white,transparent_80%)]" />

                    <div className="flex items-center justify-between z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-xs border border-white/20">
                        {project.tag}
                      </span>
                      {project.period && (
                        <span className="text-xs text-white/90 font-medium">
                          {project.period}
                        </span>
                      )}
                    </div>

                    <div className="z-10">
                      {isComingSoon && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white text-ink-navy shadow-xs mb-1">
                          <Clock className="w-3 h-3 mr-1 text-highlight-amber" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-bold text-xl text-ink-navy dark:text-white leading-snug group-hover:text-accent-teal dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-ink-muted dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-cream-100 dark:bg-slate-800 text-ink-navy dark:text-white hover:bg-accent-teal hover:text-white dark:hover:bg-accent-teal transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                  >
                    <span>View details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ACCESSIBLE PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-ink-navy/60 dark:bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white dark:bg-darkbg-card rounded-3xl shadow-soft-xl border border-cream-200 dark:border-darkbg-border overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 pb-4 border-b border-cream-200 dark:border-darkbg-border flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-teal/10 text-accent-teal dark:text-teal-300">
                      {selectedProject.tag}
                    </span>
                    {selectedProject.period && (
                      <span className="text-xs text-ink-muted dark:text-slate-400">
                        • {selectedProject.period}
                      </span>
                    )}
                  </div>
                  <h3 id="modal-title" className="font-heading font-bold text-2xl text-ink-navy dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  ref={closeButtonRef}
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project modal"
                  className="p-2 rounded-xl text-ink-muted dark:text-slate-400 hover:bg-cream-100 dark:hover:bg-slate-800 hover:text-ink-navy dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body: Problem, What I Did, What I Found */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                {/* 1. Problem */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-ink-navy dark:text-white font-heading font-bold text-sm uppercase tracking-wider">
                    <Target className="w-4 h-4 text-highlight-coral" />
                    <h4>The Problem</h4>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-ink-navy/85 dark:text-slate-300 pl-6 border-l-2 border-highlight-coral/40">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* 2. What I did */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-ink-navy dark:text-white font-heading font-bold text-sm uppercase tracking-wider">
                    <Search className="w-4 h-4 text-accent-teal" />
                    <h4>What I Did</h4>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-ink-navy/85 dark:text-slate-300 pl-6 border-l-2 border-accent-teal/40">
                    {selectedProject.whatIDid}
                  </p>
                </div>

                {/* 3. What I found */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-ink-navy dark:text-white font-heading font-bold text-sm uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-highlight-amber" />
                    <h4>What I Found</h4>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-ink-navy/85 dark:text-slate-300 pl-6 border-l-2 border-highlight-amber/40">
                    {selectedProject.whatIFound}
                  </p>
                </div>

                {/* Optional TODO Callout Card if pending data */}
                {selectedProject.todoNote && (
                  <div className="rounded-2xl p-4 bg-highlight-amber/10 border border-highlight-amber/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start space-x-3">
                    <AlertCircle className="w-4 h-4 text-highlight-amber shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Portfolio Note: </span>
                      <span>{selectedProject.todoNote}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-cream-50 dark:bg-slate-850 border-t border-cream-200 dark:border-darkbg-border flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-accent-teal text-white hover:bg-accent-teal-dark transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
