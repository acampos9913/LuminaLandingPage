import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import { FEATURES } from '../../../constants';
import { Bot, Smartphone, LayoutTemplate, Layers, Globe, History, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const IconMap: Record<string, LucideIcon> = {
  Bot,
  Smartphone,
  LayoutTemplate,
  Layers,
  Globe,
  History
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const FeaturesView: React.FC = () => {
  return (
    <SectionWrapper id="features" className="bg-dark-800/30">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Potencia Ilimitada
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          LUMINA.SH no es solo un editor, es un equipo de ingeniería senior impulsado por múltiples IAs trabajando para ti 24/7.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {FEATURES.map((feature, index) => {
          const Icon = IconMap[feature.icon];
          return (
            <motion.div 
              variants={item}
              key={index} 
              className="p-8 rounded-2xl bg-gradient-to-br from-dark-700/50 to-dark-800/50 border border-white/5 hover:border-lumina-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-lumina-900/20 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-lumina-900/30 group-hover:border-lumina-500/30 transition-all duration-300">
                {Icon && <Icon className="text-lumina-400 group-hover:text-lumina-cyan transition-colors" size={28} />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lumina-cyan transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors flex-grow">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};