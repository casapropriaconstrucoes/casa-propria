import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Landmark } from 'lucide-react';

export default function Stats() {
  const CREDENTIALS = [
    { name: 'CEF', desc: 'Caixa Econômica Federal' },
    { name: 'BB', desc: 'Banco do Brasil' },
    { name: 'POUPEX', desc: 'Assoc. de Poupança e Empréstimo' },
    { name: 'FNE', desc: 'Fundo Constitucional' },
    { name: 'TJMG', desc: 'Tribunal de Justiça de MG' },
  ];

  return (
    <section className="bg-accent-500 py-12 md:py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
          
          {/* Card 1: +38 Anos de Mercado */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/15"
          >
            <div className="flex items-center gap-2 mb-2 text-white/80">
              <Award className="w-5 h-5" />
              <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">Tradição & Solidez</span>
            </div>
            <span className="font-display font-bold text-5xl md:text-6xl text-white tracking-tighter mb-1">
              +38
            </span>
            <span className="font-sans text-base md:text-lg font-bold uppercase tracking-wider text-white">
              Anos de Mercado
            </span>
            <span className="font-sans text-xs text-white/80 mt-1">
              Excelência e histórico comprovado
            </span>
          </motion.div>

          {/* Card 2: Credenciado por CEF, BB, POUPEX, FNE, TJMG */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/15"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 text-white/80">
              <Landmark className="w-5 h-5" />
              <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">Corpo Pericial e Técnico</span>
            </div>
            <div className="text-center lg:text-left mb-4">
              <span className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight block text-white">
                Credenciado por Instituições Oficiais
              </span>
              <span className="font-sans text-xs text-white/85">
                Homologado para perícias, vistorias e avaliações de engenharia
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              {CREDENTIALS.map((cred) => (
                <div 
                  key={cred.name}
                  className="bg-eng-950/40 hover:bg-eng-950/60 border border-white/20 px-3.5 py-2 rounded-lg text-center transition-colors"
                  title={cred.desc}
                >
                  <span className="font-display font-bold text-sm sm:text-base tracking-wider text-white block">
                    {cred.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: 100% Conformidade ABNT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/15"
          >
            <div className="flex items-center gap-2 mb-2 text-white/80">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">Segurança Normativa</span>
            </div>
            <span className="font-display font-bold text-5xl md:text-6xl text-white tracking-tighter mb-1">
              100%
            </span>
            <span className="font-sans text-base md:text-lg font-bold uppercase tracking-wider text-white">
              Conformidade ABNT
            </span>
            <span className="font-sans text-xs text-white/80 mt-1">
              Rigor técnico e engenharia legal
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

