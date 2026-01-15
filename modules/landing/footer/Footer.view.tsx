import React from 'react';
import { Github, Twitter, Linkedin, Terminal } from 'lucide-react';

export const FooterView: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-slate-800 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-lumina-900/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lumina-900/20 via-dark-900 to-dark-900 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tighter mb-2">
            <Terminal className="text-lumina-500" /> LUMINA.SH
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            La plataforma definitiva para creadores, startups y empresas que construyen el software del mañana.
          </p>
          <p className="text-slate-600 text-xs mt-4">© 2026 Lumina Technologies Inc. Todos los derechos reservados.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
            <nav className="flex gap-6 text-sm font-medium text-slate-400">
                <a href="#" onClick={scrollToSection('features')} className="hover:text-lumina-400 transition-colors">Features</a>
                <a href="#" onClick={scrollToSection('documentation')} className="hover:text-lumina-400 transition-colors">Docs</a>
                <a href="#" onClick={scrollToSection('pricing')} className="hover:text-lumina-400 transition-colors">Precios</a>
            </nav>
            <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><Github size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"><Linkedin size={20} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};