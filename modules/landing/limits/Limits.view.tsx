import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import { AlertTriangle, Clock, Server, Database } from 'lucide-react';

export const LimitsView: React.FC = () => {
  return (
    <SectionWrapper id="limits" className="bg-dark-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
          Límites Operativos y Just Use
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4 p-6 bg-dark-900 rounded-xl border border-slate-700/50">
            <Clock className="text-yellow-500 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-white mb-2">Tiempo de Ejecución</h4>
              <p className="text-sm text-slate-400">
                Las generaciones de código tienen un timeout máximo de 120 segundos para garantizar la estabilidad del sistema.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-dark-900 rounded-xl border border-slate-700/50">
            <Server className="text-blue-500 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-white mb-2">Rate Limiting</h4>
              <p className="text-sm text-slate-400">
                50 solicitudes por minuto por IP para prevenir abusos. Las cuentas Enterprise tienen límites personalizados.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-dark-900 rounded-xl border border-slate-700/50">
            <Database className="text-green-500 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-white mb-2">Almacenamiento de Proyectos</h4>
              <p className="text-sm text-slate-400">
                Hasta 500MB de activos por proyecto en el plan Gratuito. 10GB en Pro.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-dark-900 rounded-xl border border-slate-700/50">
            <AlertTriangle className="text-red-500 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-white mb-2">Contenido Prohibido</h4>
              <p className="text-sm text-slate-400">
                No se permite generar sitios de phishing, malware o contenido ilegal. Violaciones resultan en ban inmediato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};