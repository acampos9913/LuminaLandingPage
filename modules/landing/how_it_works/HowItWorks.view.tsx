import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import { DOCS_STEPS } from '../../../constants';
import { MessageSquare, Cpu, Rocket, Code2, PenTool, LucideIcon, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const IconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Cpu,
  Rocket,
  Code2,
  PenTool
};

export const HowItWorksView: React.FC = () => {
  return (
    <SectionWrapper id="documentation" className="relative">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Documentación Visual</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Del concepto al código de producción en 5 pasos sencillos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Connecting Line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-lumina-500/0 via-lumina-500/50 to-lumina-500/0 md:left-1/2 md:-ml-px hidden md:block"></div>

        <div className="space-y-12">
          {DOCS_STEPS.map((step, index) => {
            const Icon = IconMap[step.icon];
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                key={step.id} 
                className={`relative flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Box */}
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-2xl bg-dark-800/50 border border-slate-700/50 hover:border-lumina-500/30 transition-all shadow-lg ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                    <div className={`inline-flex items-center gap-2 mb-4 text-lumina-400 font-mono text-sm ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <span className="font-bold">PASO 0{step.id}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-dark-900 border-2 border-lumina-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] bg-gradient-to-b from-dark-800 to-dark-900">
                  {Icon ? <Icon className="text-white" size={24} /> : <div />}
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 w-full hidden md:block"></div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-16">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-500 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest">Listo para empezar</span>
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};