import React from 'react';
import { Hero } from './modules/landing/hero';
import { Features } from './modules/landing/features';
import { HowItWorks } from './modules/landing/how_it_works';
import { Pricing } from './modules/landing/pricing';
import { Terms } from './modules/landing/terms';
import { Limits } from './modules/landing/limits';
import { Footer } from './modules/landing/footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <div className="fixed inset-0 bg-grid-mystic pointer-events-none z-0 opacity-40"></div>
      <main className="flex-grow relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Limits />
        <Terms />
      </main>
      <Footer />
    </div>
  );
};

export default App;