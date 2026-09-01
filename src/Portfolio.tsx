import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import proj1 from '../assets/images/projeto1.png';
import proj2 from '../assets/images/projeto2.png';
import proj3 from '../assets/images/projeto3.png';
import proj4 from '../assets/images/projeto4.png';

const GALLERY_IMAGES = [
  { id: 'img-1', src: proj1, alt: 'Obra Real 1', ratio: 'aspect-[3/4]' },
  { id: 'img-2', src: proj2, alt: 'Obra Real 2', ratio: 'aspect-[4/3]' },
  { id: 'img-3', src: proj3, alt: 'Obra Real 3', ratio: 'aspect-[4/3]' },
  { id: 'img-4', src: proj4, alt: 'Obra Real 4', ratio: 'aspect-[4/3]' }
];

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-eng-950 relative">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Simple Title */}
        <div className="mb-12 text-center">
          <h2 className="font-display font-medium text-3xl md:text-4xl text-white uppercase tracking-widest">
            Obras Realizadas
          </h2>
          <div className="h-[2px] w-12 bg-accent-500 mx-auto mt-4" />
        </div>

        {/* Minimalist Grid of 4 Images aligned by their natural proportions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-lg bg-eng-900 border border-white/5 cursor-pointer shadow-lg group"
              onClick={() => setLightboxIndex(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pure, Minimalist Full-Screen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Left navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="max-w-full max-h-[85vh] overflow-hidden flex items-center justify-center">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain rounded-md"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Right navigation */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full"
              aria-label="Próximo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
