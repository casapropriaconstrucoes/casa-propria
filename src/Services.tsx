import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  { 
    id: '01', 
    title: 'Construção Civil', 
    desc: 'Gestão integral da fundação ao acabamento fino. Aplicamos controle rigoroso de cronograma e materiais para edifícios e residências de alto padrão.'
  },
  { 
    id: '02', 
    title: 'Vistorias & Laudos', 
    desc: 'Análises periciais, laudos cautelares de vizinhança e vistorias detalhadas para entrega de chaves com validade jurídica irrefutável.'
  },
  { 
    id: '03', 
    title: 'Gerenciamento de Obra', 
    desc: 'Acompanhamento técnico para minimizar riscos, desperdícios e atrasos, garantindo a execução fiel ao projeto original.'
  },
  { 
    id: '04', 
    title: 'Avaliação Imobiliária', 
    desc: 'Precificação mercadológica baseada em análises técnicas rigorosas para demandas comerciais, judiciais ou patrimoniais.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 bg-paper-card">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-1/2"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-terra-500 block mb-6 font-semibold">
              O que fazemos
            </span>
            <h2 className="font-serif italic text-5xl md:text-7xl text-ink-900 leading-tight">
              Nossa Expertise
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-1/3 font-sans text-ink-600 leading-relaxed"
          >
            Aplicamos o estado da arte da engenharia civil para assegurar estabilidade estrutural, sofisticação estética e viabilidade financeira aos nossos clientes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {SERVICES.map((srv, idx) => (
            <motion.div 
              key={srv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <div className="border-t border-ink-300 pt-6 flex flex-col md:flex-row md:items-start gap-6">
                <span className="font-sans text-sm font-medium text-ink-300 group-hover:text-terra-500 transition-colors duration-500">
                  {srv.id}
                </span>
                <div>
                  <h3 className="font-sans font-medium text-2xl md:text-3xl text-ink-900 mb-4 group-hover:text-terra-600 transition-colors duration-500">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-ink-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                  <a href="#contato" className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-ink-900 group-hover:text-terra-500 transition-colors">
                    Saber mais <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
