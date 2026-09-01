import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], ['0%', '30%']);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);
  const yText = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-eng-950">
      
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: yBg }} 
          className="absolute -top-[30%] -left-[10%] w-[120%] h-[130%]"
        >
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-50" />
        </motion.div>
      </div>

      {/* Decorative Technical UI */}
      <div className="absolute top-1/4 left-8 hidden lg:flex flex-col gap-2 font-mono text-[10px] text-accent-500/80 z-10">
        <span>[SYS.OP: NORMAL]</span>
        <span>[STANDARDS: ISO9001 / BIM]</span>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 hidden lg:flex pr-8 z-10">
         <div className="w-[1px] h-24 bg-white/20 mx-auto" />
         <span className="font-mono text-[10px] text-eng-200 rotate-90 origin-center tracking-[0.3em] uppercase whitespace-nowrap translate-y-12">
           Engenharia de Performance
         </span>
         <div className="w-[1px] h-24 bg-white/20 mx-auto mt-24" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-20 pt-28 md:pt-36">
        <motion.div 
          style={{ opacity: opacityText, y: yText }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
          >
            <img 
              src="/logo.png" 
              alt="Logo Casa Própria" 
              className="w-5 h-5 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            <span className="font-mono text-xs md:text-sm text-accent-500 uppercase tracking-[0.2em] font-bold">
              Casa Própria Engenharia & Construções
            </span>
          </motion.div>
          
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-[0.9]"
            >
              Precisão em
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-transparent uppercase tracking-tighter leading-[0.9]"
              style={{ WebkitTextStroke: '1.5px white' }}
            >
              Larga Escala.
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-eng-200 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 border-l border-white/20 pl-6"
          >
            Construímos infraestruturas complexas e edifícios de alto padrão com rigor técnico, previsibilidade orçamentária e tecnologias globais de gestão.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#especialidades" className="bg-accent-500 text-white px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-eng-950 transition-all duration-300 ease-out flex items-center justify-center gap-2 group">
              Conheça Nossa Expertise
            </a>
            <a href="#simulador" className="border border-white/30 text-white px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 ease-out flex items-center justify-center gap-2 group">
              Simular Projeto <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
