import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import { Button } from '../../../components/Button';
import { Sparkles, ArrowRight, PlayCircle, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroViewProps {
  onDemoClick: () => void;
  onDocsClick: () => void;
  typedText: string;
}

export const HeroView: React.FC<HeroViewProps> = ({ onDemoClick, onDocsClick, typedText }) => {
  return (
    <SectionWrapper className="pt-32 pb-24 lg:pt-48 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lumina-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-lumina-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="text-center max-w-6xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-dark-800/80 border border-lumina-500/30 text-lumina-400 text-sm mb-8 backdrop-blur-md shadow-lg shadow-lumina-500/10"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="font-medium tracking-wide">LUMINA v1.0 Release Candidate</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-white leading-[1.1]"
        >
          Construye el futuro <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-400 via-lumina-cyan to-white animate-text">
            a la velocidad de la luz
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          <strong className="text-white">LUMINA.SH</strong> transforma tus palabras en aplicaciones full-stack producción-ready. 
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
        >
          <Button onClick={onDemoClick} className="flex items-center gap-3 text-lg px-8 py-4 bg-gradient-to-r from-lumina-600 to-lumina-500 hover:from-lumina-500 hover:to-lumina-400 shadow-xl shadow-lumina-600/20">
            Empezar a Crear <ArrowRight size={20} />
          </Button>
          <Button onClick={onDocsClick} variant="outline" className="text-lg px-8 py-4 border-slate-600 text-slate-300 hover:text-white">
            <PlayCircle size={20} className="mr-2" /> Ver Documentación
          </Button>
        </motion.div>

        {/* Animated Terminal/Chat Interface */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative rounded-xl border border-white/10 bg-dark-900/80 backdrop-blur-xl shadow-2xl overflow-hidden group max-w-4xl mx-auto"
        >
          <div className="absolute top-0 left-0 w-full h-9 bg-dark-800/90 border-b border-white/5 flex items-center px-4 gap-2 z-20">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs text-slate-500 font-mono">
                <Terminal size={12} />
                <span>lumina-builder — agent</span>
            </div>
          </div>

          <div className="relative w-full aspect-video md:h-[500px] bg-dark-900 pt-9 flex flex-col">
             <div className="absolute inset-0 top-9 z-0">
                 <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Lumina Interface" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
             </div>

             <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="self-start bg-dark-800/90 border border-slate-700/50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 backdrop-blur-sm shadow-lg flex items-center gap-2"
                    >
                        <Sparkles size={14} className="text-lumina-400" />
                        <span>¿Qué vamos a construir hoy?</span>
                    </motion.div>

                    <div className="w-full min-h-[60px] bg-dark-950/80 border border-lumina-500/30 rounded-xl p-4 pl-12 shadow-2xl backdrop-blur-md flex items-center relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                            <span className="text-[10px] font-bold text-white">Yo</span>
                        </div>
                        <span className="font-mono text-lumina-100 text-sm md:text-base leading-relaxed">
                            {typedText}
                            <span className="inline-block w-1.5 h-4 bg-lumina-400 ml-1 animate-pulse align-middle"></span>
                        </span>
                    </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};