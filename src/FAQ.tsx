import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Qual a importância do Laudo Cautelar de Vizinhança antes de iniciar uma obra?",
    a: "O Laudo Cautelar registra o estado de conservação dos imóveis lindeiros antes do início das movimentações de terra e fundações. Ele resguarda o construtor contra falsas alegações de danos e protege os vizinhos caso ocorram avarias reais, sendo um documento fundamental de segurança jurídica."
  },
  {
    q: "Como a modelagem BIM reduz os custos na construção civil?",
    a: "O BIM (Building Information Modeling) permite construir virtualmente antes da execução física. Isso significa que incompatibilidades (clash detection) entre disciplinas (ex: tubulação passando por viga) são resolvidas em software, não no canteiro, evitando retrabalho, desperdício de materiais e atrasos no cronograma."
  },
  {
    q: "O que é avaliado em uma Vistoria de Recebimento de Imóvel?",
    a: "Nossos peritos verificam o atendimento ao memorial descritivo, caimentos, prumos, esquadrias, instalações elétricas/hidráulicas e possíveis vícios construtivos ocultos. Emitimos um laudo técnico completo para garantir que o cliente receba o ativo com qualidade assegurada."
  },
  {
    q: "Quais as normas técnicas base (ABNT) que regem os Laudos Periciais?",
    a: "Seguimos rigorosamente as diretrizes do IBAPE e normas como a ABNT NBR 13752 (Perícias de Engenharia), NBR 14653 (Avaliação de Bens) e NBR 16280 (Reformas). Nossos documentos possuem fundamentação técnica sólida e irrefutável."
  },
  {
    q: "Qual a diferença entre Empreitada Global e Gestão por Administração?",
    a: "Na Empreitada Global, assumimos o risco e fechamos o custo total da obra em um valor fixo. Na Gestão por Administração (Obra a Preço de Custo), cobramos uma taxa de administração sobre os custos diretos, oferecendo total transparência das notas fiscais e permitindo ao cliente absorver eventuais economias nas compras."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-eng-950 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500 font-bold mb-4 flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              Base de Conhecimento
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl text-white uppercase tracking-tight mb-6"
            >
              Dúvidas <br/>Técnicas
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-eng-200 leading-relaxed max-w-sm"
            >
              Nossa expertise explicada de forma clara. Tire suas dúvidas sobre procedimentos, normas e metodologias construtivas.
            </motion.p>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-4 w-full">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border transition-colors duration-300 ${isOpen ? 'border-accent-500 bg-eng-900/50' : 'border-white/10 bg-eng-900 hover:border-white/30'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-display font-bold text-lg md:text-xl uppercase tracking-wide pr-8 transition-colors ${isOpen ? 'text-accent-500' : 'text-white'}`}>
                      {faq.q}
                    </span>
                    <div className={`w-10 h-10 shrink-0 flex items-center justify-center border transition-colors ${isOpen ? 'border-accent-500 text-accent-500 bg-accent-500/10' : 'border-white/20 text-white'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 font-sans text-eng-200/80 leading-relaxed border-t border-white/5 mt-2">
                          <p className="pt-4">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
