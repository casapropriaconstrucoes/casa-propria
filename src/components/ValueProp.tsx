import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Ruler, Layers } from 'lucide-react';

const VALS = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent-500" />,
    title: "Segurança Jurídica",
    desc: "Nossos laudos e vistorias são embasados em rigorosas normas técnicas (ABNT/IBAPE), oferecendo proteção absoluta em transações imobiliárias e contenciosos."
  },
  {
    icon: <Layers className="w-8 h-8 text-accent-500" />,
    title: "Tecnologia BIM Aplicada",
    desc: "Utilizamos modelagem 3D avançada para antecipar interferências e compatibilizar projetos, eliminando retrabalhos e garantindo fidelidade orçamentária."
  },
  {
    icon: <Ruler className="w-8 h-8 text-accent-500" />,
    title: "Rigor Executivo",
    desc: "Do canteiro de obras ao acabamento fino, aplicamos metodologias de Lean Construction para maximizar a eficiência e garantir qualidade irretocável."
  },
  {
    icon: <Building2 className="w-8 h-8 text-accent-500" />,
    title: "Soluções Integradas",
    desc: "Não somos apenas construtores. Atuamos desde a viabilidade técnica e financeira até o gerenciamento completo do ciclo de vida do empreendimento."
  }
];

export default function ValueProp() {
  return (
    <section className="py-24 bg-eng-950 text-white relative border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_80%)]" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">
              Por que escolher a <span className="text-accent-500">Casa Própria</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 font-sans text-eng-200 leading-relaxed border-l border-white/20 pl-6"
          >
            Nossa reputação foi forjada através da entrega consistente de valor. Combinamos a solidez da engenharia tradicional com as inovações tecnológicas mais avançadas do setor da construção.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALS.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-eng-900 border border-white/5 p-8 hover:border-accent-500/50 transition-colors group"
            >
              <div className="mb-6 bg-eng-950 w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-accent-500/50 transition-colors">
                {val.icon}
              </div>
              <h3 className="font-sans font-bold text-xl mb-4 group-hover:text-accent-500 transition-colors">{val.title}</h3>
              <p className="font-sans text-sm text-eng-200/80 leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
