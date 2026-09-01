import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const SPECIALTIES = [
  {
    num: "01",
    title: "Execução de Obras",
    tags: ["Residencial Alto Padrão", "Comercial", "Retrofit"],
    desc: "Gestão completa do canteiro, assegurando o cumprimento de prazos, controle de custos e controle tecnológico dos materiais aplicados.",
  },
  {
    num: "02",
    title: "Gerenciamento Global",
    tags: ["Planejamento Lean", "Suprimentos", "Compatibilização"],
    desc: "Administramos todas as variáveis do seu empreendimento, atuando como o braço técnico e de confiança do investidor.",
  },
  {
    num: "03",
    title: "Perícias e Laudos",
    tags: ["Vistoria Cautelar", "Patologias", "Recebimento"],
    desc: "Investigações técnicas profundas para determinar causas de patologias estruturais e laudos para disputas judiciais e extrajudiciais.",
  },
  {
    num: "04",
    title: "Avaliações Imobiliárias",
    tags: ["Norma Técnica", "Valor de Mercado", "Viabilidade"],
    desc: "Precificação mercadológica baseada em inferência estatística para garantia de financiamentos, partilhas e tomadas de decisão.",
  }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-eng-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500 font-bold mb-4 block">
              / Áreas de Atuação
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-eng-950 uppercase tracking-tight">
              Nossas <br/>Especialidades
            </h2>
          </div>
          <a href="#contato" className="hidden md:flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-widest text-eng-900 hover:text-accent-500 transition-colors">
            Solicitar Proposta <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>

        <div className="flex flex-col border-t border-eng-900/10">
          {SPECIALTIES.map((item, idx) => (
            <motion.div 
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-b border-eng-900/10 py-10 md:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:bg-eng-900/5 transition-colors px-4 -mx-4"
            >
              <div className="flex items-center gap-8 lg:w-1/3">
                <span className="font-mono text-2xl font-bold text-eng-900/20 group-hover:text-accent-500 transition-colors">
                  {item.num}
                </span>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-eng-950 uppercase">
                  {item.title}
                </h3>
              </div>
              
              <div className="lg:w-1/3 flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-eng-900/20 text-xs font-mono font-medium uppercase text-eng-800 bg-white group-hover:border-accent-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="lg:w-1/3">
                <p className="font-sans text-eng-800/80 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
