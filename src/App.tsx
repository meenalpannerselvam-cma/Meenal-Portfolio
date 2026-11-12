import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Toolkit } from './components/Toolkit';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SlimBanner } from './components/SlimBanner';
import { Playground } from './components/Playground';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-[#F7F5F0] dark:bg-[#0B1325] text-ink-navy dark:text-slate-100 flex flex-col selection:bg-accent-teal/20 selection:text-accent-teal">
      {/* Sticky Navigation */}
      <Nav />

      {/* Main Single-Page Content Stream */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. My Toolkit */}
        <Toolkit />

        {/* 4. Experience Accordion */}
        <Experience />

        {/* 5. Selected Projects & Case Studies */}
        <Projects />

        {/* Slim Transitional CTA Banner */}
        <SlimBanner />

        {/* 6. Playground: CVP Break-Even Calculator & Graph */}
        <Playground />

        {/* 7. Learning Journey & CMA Roadmap */}
        <Education />

        {/* 8. Contact & Inquiry Form */}
        <Contact />
      </main>

      {/* 3-Column Executive Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;
