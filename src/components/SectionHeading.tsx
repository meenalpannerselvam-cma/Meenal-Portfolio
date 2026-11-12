import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-2xl'}`}
    >
      {badge && (
        <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          light 
            ? 'bg-white/10 text-emerald-300 border border-white/20' 
            : 'bg-accent-teal/10 dark:bg-accent-teal/20 text-accent-teal dark:text-teal-300 border border-accent-teal/20'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight mb-4 ${
        light ? 'text-white' : 'text-ink-navy dark:text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-ink-muted dark:text-slate-400'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
