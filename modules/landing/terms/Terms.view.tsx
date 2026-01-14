import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';

export const TermsView: React.FC = () => {
  return (
    <SectionWrapper id="terms" className="py-12 border-t border-slate-800/50 bg-dark-900">
      <div className="max-w-4xl mx-auto text-slate-500 text-xs md:text-sm">
        <h3 className="text-lg font-bold text-slate-300 mb-4 uppercase tracking-wider">Términos Legales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
            <p>
                <strong className="text-slate-400">1. Aceptación y Servicio:</strong> El uso de LUMINA.SH implica la aceptación total de estos términos. Nos reservamos el derecho de admisión y modificación del servicio sin previo aviso para garantizar la integridad de la plataforma.
            </p>
            <p>
                <strong className="text-slate-400">2. Propiedad Intelectual:</strong> Todo código generado bajo suscripción PRO o superior es 100% propiedad del usuario. En planes gratuitos, LUMINA.SH retiene una licencia no exclusiva para uso en entrenamiento de modelos.
            </p>
            </div>
            <div className="space-y-4">
            <p>
                <strong className="text-slate-400">3. Limitación de Responsabilidad:</strong> LUMINA.SH es un asistente de IA. No nos hacemos responsables por bugs, vulnerabilidades de seguridad o pérdidas de datos derivadas del código generado. La revisión humana es obligatoria.
            </p>
            <p>
                <strong className="text-slate-400">4. Privacidad y Datos:</strong> Tus prompts son procesados por proveedores LLM enterprise (Google/OpenAI). No vendemos tus datos a terceros.
            </p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};