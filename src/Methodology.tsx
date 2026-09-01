import React from 'react';
import { motion } from 'motion/react';
import { Activity, Hexagon, BarChart3 } from 'lucide-react';

const STEPS = [
  {
    icon: <BarChart3 className="w-10 h-10 text-white" />,
    title: "01. Viabilidade & Planejamento",
    desc: "Análise técnica minuciosa, elaboração de orçamentos precisos e cronogramas físico-financeiros otimizados."
  },
  {
    icon: <Hexagon className="w-10 h-10 text-white" />,
    title: "02. Engenharia Virtual (BIM)",
    desc: "Modelagem de todas as disciplinas do projeto antes da execução, mitigando riscos de interferências físicas no canteiro."
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    title: "03. Gestão e Execução",
    desc: "Supervisão rigorosa, controle tecnológico de materiais e relatórios de progresso transparentes em tempo real para o investidor."
  }
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-eng-100 relative overflow-hidden">
      
      {/* Decorative large text behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-[15vw] text-eng-900/5 whitespace-nowrap pointer-events-none select-none">
        WORKFLOW
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500 font-bold mb-4 block">
            / Processo Integrado
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-eng-950 uppercase tracking-tight mb-6">
            Engenharia Aplicada
          </h2>
          <p className="font-sans text-eng-800/80 leading-relaxed">
            Nossa metodologia elimina a fragmentação tradicional da construção civil. Atuamos como gestores de todo o ciclo do ativo, garantindo que o planejado seja fielmente executado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
           {/* Connecting line */}
           <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-eng-900/10 z-0" />

           {STEPS.map((step, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.2 }}
               className="relative z-10 flex flex-col items-center text-center"
             >
               <div className="w-28 h-28 bg-accent-500 flex items-center justify-center shadow-2xl mb-8 transform hover:scale-105 transition-transform">
                  {step.icon}
               </div>
               <h3 className="font-display font-bold text-xl md:text-2xl text-eng-950 uppercase mb-4">
                 {step.title}
               </h3>
               <p className="font-sans text-sm text-eng-800/80 leading-relaxed max-w-sm">
                 {step.desc}
               </p>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
