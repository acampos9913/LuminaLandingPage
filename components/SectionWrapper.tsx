import React from 'react';
import { SectionProps } from '../types';

export const SectionWrapper: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};