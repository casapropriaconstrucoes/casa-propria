import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto show a greeting tooltip after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const whatsappNumber = "5532991231639";
  const defaultMessage = encodeURIComponent("Olá! Gostaria de tirar dúvidas e solicitar um orçamento com a Casa Própria Engenharia.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating message bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-3 max-w-[260px] bg-white rounded-2xl p-4 shadow-2xl border border-eng-100 relative group"
          >
            <button
              onClick={() => {
                setShowTooltip(false);
                setHasInteracted(true);
              }}
              className="absolute top-2 right-2 p-1 text-eng-800/50 hover:text-eng-950 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-sans font-bold text-xs text-eng-950">Atendimento Online</span>
            </div>
            <p className="font-sans text-xs text-eng-800/80 leading-relaxed mb-3">
              Olá! Precisa de orçamento ou laudo técnico? Fale diretamente com nossa equipe.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setHasInteracted(true)}
              className="inline-flex items-center justify-center w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs rounded-xl shadow-sm transition-colors uppercase tracking-wider"
            >
              Conversar Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.a
        id="whatsapp-floating-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasInteracted(true)}
        onMouseEnter={() => setShowTooltip(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Falar no WhatsApp com a Casa Própria Engenharia"
      >
        {/* Radar ping effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-white text-emerald-500 relative z-10" />

        {/* Floating pulse badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-accent-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
        </span>
      </motion.a>
    </div>
  );
}
