import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'Dra. Camila Abrantes', role: 'Sócia Diretora', company: 'Abrantes Law', text: 'O nível de detalhamento dos laudos periciais entregues pela Casa Própria é impressionante. Fundamental para nosso sucesso contencioso.' },
  { name: 'Victor Manganelli', role: 'Investidor Imobiliário', company: 'VM Capital', text: 'Gerenciamento impecável. Transparência total nos custos e rigor absoluto nos prazos. Recomendo para qualquer obra de grande porte.' },
  { name: 'Eng. Mariana Costa', role: 'Fiscal de Obras', company: 'Prefeitura', text: 'Uma das poucas empresas que cumprem fielmente as normas da ABNT no canteiro. Segurança e qualidade em primeiro lugar.' },
];

export default function Testimonials() {
  return (
    <section id="reputacao" className="py-24 bg-eng-50 relative border-t border-eng-900/10">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500 font-bold mb-4 block"
          >
            / Confiança Comprovada
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-eng-950 uppercase tracking-tight"
          >
            Endosso Profissional
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-10 border border-eng-900/10 hover:border-accent-500/30 transition-colors shadow-sm hover:shadow-xl hover:shadow-eng-900/5 flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-6 text-accent-500">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-sans text-eng-800 leading-relaxed mb-8 italic">
                "{r.text}"
              </p>
              <div className="border-t border-eng-900/10 pt-6">
                <div className="font-sans font-bold text-eng-950">{r.name}</div>
                <div className="font-mono text-[10px] text-eng-800/60 mt-1 uppercase tracking-widest">
                  {r.role} • {r.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
