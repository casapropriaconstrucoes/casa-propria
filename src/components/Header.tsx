import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
const NAV = [
  { n: 'Especialidades', h: '#especialidades' },
  { n: 'Metodologia', h: '#metodologia' },
  { n: 'Portfólio', h: '#portfolio' },
  { n: 'Reputação', h: '#reputacao' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-md border-b border-eng-100 py-1.5 shadow-md' 
            : 'bg-white/95 backdrop-blur-sm border-b border-eng-100/60 py-2.5 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-[1400px] flex justify-between items-center">
          
          <a href="#" className="flex items-center relative z-50 group py-1" aria-label="Casa Própria Engenharia e Construções">
            <img 
              src="/logo.png" 
              alt="Casa Própria Engenharia e Construções LTDA" 
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] drop-shadow-sm ${
                scrolled 
                  ? 'h-14 sm:h-18 md:h-22 lg:h-24 max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px]' 
                  : 'h-16 sm:h-22 md:h-26 lg:h-32 xl:h-36 max-w-[300px] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[620px]'
              }`}
              referrerPolicy="no-referrer"
            />
          </a>
          
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV.map(l => (
              <a 
                key={l.n} 
                href={l.h} 
                className="text-xs font-sans font-bold text-eng-900 hover:text-accent-600 transition-colors uppercase tracking-[0.1em] relative group py-2"
              >
                {l.n}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="#contato" 
              className="ml-2 px-6 py-3 bg-accent-500 text-white text-xs font-sans font-bold uppercase tracking-[0.15em] hover:bg-eng-950 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 rounded-sm"
            >
              Iniciar Projeto <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          <button 
            className="lg:hidden relative z-50 p-2 text-eng-950 hover:text-accent-600 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu de navegação"
          >
            {open ? <X className="w-8 h-8" strokeWidth={2} /> : <Menu className="w-8 h-8" strokeWidth={2} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white z-30 flex flex-col pt-28 sm:pt-32 px-6 bg-grid-pattern shadow-2xl"
          >
            <div className="flex flex-col gap-6 max-w-lg mx-auto w-full">
              <div className="flex justify-center pb-4 border-b border-eng-100">
                <img 
                  src={logoImg}
                  alt="Casa Própria Engenharia e Construções" 
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              {NAV.map((l, i) => (
                <div key={l.n} className="overflow-hidden">
                  <motion.a 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: i * 0.1 + 0.15, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    href={l.h} 
                    onClick={() => setOpen(false)}
                    className="font-display font-bold text-3xl text-eng-950 block border-b border-eng-100 pb-3 hover:text-accent-600 transition-colors uppercase tracking-tight"
                  >
                    {l.n}
                  </motion.a>
                </div>
              ))}
              <motion.a 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 href="#contato" 
                 onClick={() => setOpen(false)}
                 className="mt-6 px-6 py-4 bg-accent-500 text-white text-center font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg"
              >
                Fale com um Especialista <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
