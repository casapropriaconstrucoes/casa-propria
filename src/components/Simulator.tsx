import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, CheckCircle2, ChevronRight, Calculator } from 'lucide-react';

const OPTIONS = [
  {
    id: 'residencial',
    label: 'Residencial Alto Padrão',
    stages: [
      { name: 'Estudo de Viabilidade', desc: 'Análise topográfica, legal e sondagem do terreno.' },
      { name: 'Compatibilização BIM', desc: 'Integração 3D de projetos estruturais, elétricos e hidrossanitários.' },
      { name: 'Fundações e Estrutura', desc: 'Execução com controle tecnológico rigoroso do concreto e aço.' },
      { name: 'Acabamento Fino', desc: 'Aplicação técnica de revestimentos e caixilharias de alto padrão.' },
    ],
    timeframe: '12 a 18 meses'
  },
  {
    id: 'comercial',
    label: 'Empreendimento Comercial',
    stages: [
      { name: 'Planejamento Fast-Track', desc: 'Cronograma acelerado utilizando métodos Lean para rápido ROI.' },
      { name: 'Fundações Especiais', desc: 'Soluções estruturais para vãos livres e grandes sobrecargas.' },
      { name: 'Sistemas Prediais', desc: 'Instalação de climatização central e rede lógica de alta densidade.' },
      { name: 'Comissionamento', desc: 'Testes rigorosos e entrega técnica de todos os sistemas operantes.' },
    ],
    timeframe: '8 a 14 meses'
  },
  {
    id: 'vistoria',
    label: 'Perícia & Vistoria Técnica',
    stages: [
      { name: 'Inspeção in Loco', desc: 'Varredura completa com registros fotográficos e ensaios não destrutivos.' },
      { name: 'Análise Normativa', desc: 'Confronto do estado atual com as normas vigentes (ABNT e IBAPE).' },
      { name: 'Diagnóstico Patológico', desc: 'Mapeamento e classificação de manifestações patológicas estruturais.' },
      { name: 'Emissão do Laudo', desc: 'Entrega de documento técnico detalhado com validade jurídica irrefutável.' },
    ],
    timeframe: '15 a 30 dias'
  }
];

export default function Simulator() {
  const [selected, setSelected] = useState(OPTIONS[0]);

  return (
    <section className="py-24 bg-eng-900 border-y border-white/5 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500 font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Simulador Técnico
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white uppercase tracking-tight">
              Plano de <br/>Viabilidade
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 font-sans text-eng-200 leading-relaxed border-l border-white/20 pl-6 max-w-lg"
          >
            Selecione o perfil do seu projeto para visualizar nosso roadmap executivo padrão. A engenharia de precisão começa muito antes do canteiro de obras.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-eng-950 border border-white/10 p-6 md:p-10 shadow-2xl">
          
          {/* Options Menu */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <h3 className="font-mono text-xs text-white uppercase tracking-widest font-bold mb-2 pb-4 border-b border-white/10">
              01. Definição de Escopo
            </h3>
            {OPTIONS.map(opt => (
              <button
                key={opt.id}
                onClick={() => setSelected(opt)}
                className={`flex items-center justify-between p-4 text-left font-sans font-bold uppercase text-sm tracking-wider transition-colors border ${
                  selected.id === opt.id 
                  ? 'border-accent-500 bg-accent-500/10 text-white' 
                  : 'border-white/10 bg-eng-900 text-eng-200 hover:border-white/30'
                }`}
              >
                {opt.label}
                <ChevronRight className={`w-4 h-4 transition-transform ${selected.id === opt.id ? 'text-accent-500 translate-x-1' : 'text-eng-200/50'}`} />
              </button>
            ))}
            
            <div className="mt-8 bg-eng-900 border border-white/5 p-6 relative overflow-hidden">
               <Activity className="absolute -right-4 -top-4 w-24 h-24 text-white/5" />
               <span className="font-mono text-[10px] text-eng-200/50 uppercase tracking-widest block mb-2">Prazo Estimado</span>
               <span className="font-display font-bold text-2xl text-accent-500">{selected.timeframe}</span>
            </div>
          </div>

          {/* Timeline Display */}
          <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
             <h3 className="font-mono text-xs text-white uppercase tracking-widest font-bold mb-8 pb-4 border-b border-white/10">
               02. Roadmap Executivo
             </h3>
             
             <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-white/10 z-0" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-8 relative z-10"
                  >
                    {selected.stages.map((stage, idx) => (
                      <div key={idx} className="flex gap-6 group">
                         <div className="w-8 h-8 rounded-full bg-eng-950 border-2 border-accent-500 flex items-center justify-center shrink-0 group-hover:bg-accent-500 transition-colors mt-1">
                           <CheckCircle2 className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                         </div>
                         <div>
                           <span className="font-mono text-[10px] text-accent-500 uppercase tracking-widest mb-1 block">Etapa 0{idx + 1}</span>
                           <h4 className="font-sans font-bold text-lg md:text-xl text-white mb-2 group-hover:text-accent-500 transition-colors">{stage.name}</h4>
                           <p className="font-sans text-sm text-eng-200/80 leading-relaxed max-w-lg">
                             {stage.desc}
                           </p>
                         </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
             </div>
             
             <div className="mt-12 pt-8 border-t border-white/10">
                <a href="#contato" className="inline-flex items-center gap-3 bg-white text-eng-950 px-8 py-4 font-sans font-bold uppercase tracking-widest text-xs hover:bg-accent-500 hover:text-white transition-all group">
                  Solicitar Orçamento Paramétrico
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Add ArrowRight that was missing from imports
import { ArrowRight } from 'lucide-react';
