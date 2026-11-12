import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { FlipCard } from './FlipCard';

export const Toolkit: React.FC = () => {
  return (
    <section id="toolkit" className="py-20 sm:py-28 bg-cream-50/60 dark:bg-darkbg-main/40 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Proficiencies"
          title={PORTFOLIO_DATA.toolkit.heading}
          subtitle={PORTFOLIO_DATA.toolkit.subheading}
        />

        {/* 8 Flip Cards Grid: 4 columns desktop, 2 columns tablet, 1 column mobile */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {PORTFOLIO_DATA.toolkit.items.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
