import React from 'react';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-eng-100">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="bg-eng-950 p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-16 justify-between items-center shadow-2xl">
          
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          
          <div className="relative z-10 lg:w-1/2">
             <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500 font-bold mb-4 block"
            >
              / Central de Atendimento
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-6xl text-white uppercase tracking-tight mb-6"
            >
              Inicie seu <br/>Projeto
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-eng-200 font-sans leading-relaxed max-w-md"
            >
              Nossa equipe de engenheiros está pronta para analisar sua demanda, seja para obras completas, laudos técnicos ou orçamentação.
            </motion.p>
          </div>
          
          <div className="relative z-10 w-full lg:w-1/2 flex flex-col gap-6">
            
            <a href="https://wa.me/32991231639" target="_blank" rel="noopener noreferrer" className="group bg-eng-900 border border-white/10 p-6 flex items-center justify-between hover:border-accent-500 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-eng-200/60 uppercase tracking-widest mb-1">Telefone / WhatsApp</span>
                  <span className="block font-sans font-bold text-white text-xl md:text-2xl group-hover:text-accent-500 transition-colors">(32) 99123-1639</span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-eng-200/30 group-hover:text-accent-500 group-hover:translate-x-2 transition-all" />
            </a>

            <div className="bg-eng-900 border border-white/10 p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent-500" />
              </div>
              <div>
                <span className="block font-mono text-[10px] text-eng-200/60 uppercase tracking-widest mb-1">Escritório Central</span>
                <span className="block font-sans text-white text-sm md:text-base leading-relaxed">
                  R. Dos Canarinhos, 33 A <br/> Vivendas das Fontes, Juiz de Fora - MG
                </span>
              </div>
            </div>

            <a href="mailto:casapropriaconstrucoes@gmail.com" className="group bg-eng-900 border border-white/10 p-6 flex items-center justify-between hover:border-accent-500 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-eng-200/60 uppercase tracking-widest mb-1">Contato Profissional</span>
                  <span className="block font-sans font-medium text-white text-sm md:text-base group-hover:text-accent-500 transition-colors">
                    casapropriaconstrucoes@gmail.com
                  </span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-eng-200/30 group-hover:text-accent-500 group-hover:translate-x-2 transition-all" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
