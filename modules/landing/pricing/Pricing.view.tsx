import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import { Button } from '../../../components/Button';
import { Check, MessageCircle, Star, Zap, Layout, Terminal } from 'lucide-react';
import { Plan } from '../../../types';
import { motion } from 'framer-motion';

interface PricingViewProps {
  plans: Plan[];
  onPlanSelect: (planName: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ plans, onPlanSelect }) => {
  return (
    <SectionWrapper id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Pago por Uso (Créditos)</h2>
        <p className="text-slate-400 text-lg">Sin suscripciones mensuales forzadas. Compra créditos y úsalos cuando quieras. No caducan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            key={plan.name}
            className={`relative rounded-2xl p-8 border flex flex-col ${
              plan.popular 
                ? 'bg-dark-800/80 border-lumina-500 shadow-2xl shadow-lumina-500/20 z-10 scale-105' 
                : 'bg-dark-800/30 border-slate-700 hover:border-slate-500 transition-colors'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-gradient-to-r from-lumina-600 to-lumina-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                <Star size={12} fill="white" /> Recomendado
              </div>
            )}

            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-lumina-400' : 'text-white'}`}>{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
              <div className="h-1 w-12 bg-slate-700 rounded-full"></div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className={`shrink-0 ${plan.popular ? 'text-lumina-400' : 'text-slate-500'}`} size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.popular ? 'primary' : 'outline'} 
              fullWidth
              onClick={() => onPlanSelect(plan.name)}
              className={`flex items-center justify-center gap-2 ${plan.popular ? 'bg-lumina-600 hover:bg-lumina-500' : 'border-slate-600 text-slate-300 hover:text-white hover:border-white'}`}
            >
              {plan.cta} <MessageCircle size={18} />
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Credit Explanation Section */}
      <div className="bg-dark-800/50 rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-white mb-6 text-center">¿Qué puedo hacer con mis créditos?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-dark-900 rounded-xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="text-blue-400" size={24} />
                </div>
                <h4 className="font-bold text-white mb-1">~5 Créditos</h4>
                <p className="text-sm text-slate-400">Por iteración o cambio simple (ej. "Cambia el botón a azul")</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-dark-900 rounded-xl">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Layout className="text-purple-400" size={24} />
                </div>
                <h4 className="font-bold text-white mb-1">~50 Créditos</h4>
                <p className="text-sm text-slate-400">Generar una Landing Page completa o un Dashboard básico.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-dark-900 rounded-xl">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <Terminal className="text-green-400" size={24} />
                </div>
                <h4 className="font-bold text-white mb-1">~200 Créditos</h4>
                <p className="text-sm text-slate-400">App Full Stack con Base de Datos y Auth (Prototipo funcional).</p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};