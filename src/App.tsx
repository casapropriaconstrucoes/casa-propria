import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ValueProp from './components/ValueProp';
import Specialties from './components/Specialties';
import Methodology from './components/Methodology';
import Simulator from './components/Simulator';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-eng-950 bg-grid-pattern-dark"
        >
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4 mb-8 text-center"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white p-3.5 flex items-center justify-center shadow-2xl border border-white/20">
              <img 
                src="/logo.png" 
                alt="Casa Própria Engenharia e Construções" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight uppercase">
                CASA PRÓPRIA
              </h1>
              <span className="font-mono text-[10px] md:text-xs text-accent-500 uppercase tracking-[0.3em] font-semibold block mt-1">
                Engenharia & Construções
              </span>
            </div>
          </motion.div>
          <div className="w-64 h-[2px] bg-eng-800 relative overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               animate={{ x: "0%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="absolute inset-0 bg-accent-500"
             />
          </div>
          <span className="font-mono text-[10px] text-eng-200 mt-6 uppercase tracking-[0.2em]">
            Inicializando Sistema Estrutural
          </span>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-eng-50"
        >
          <Header />
          <main>
            <Hero />
            <Stats />
            <ValueProp />
            <Specialties />
            <Methodology />
            <Simulator />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
