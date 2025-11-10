'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Bendicion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden text-white bg-[#722f37]"
    >
      {/* Decorative elements - Gold sparkles */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-[#D4AF37] rounded-full opacity-60 animate-pulse"></div>
      <div
        className="absolute top-20 right-32 w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: '0.5s' }}
      ></div>
      <div
        className="absolute top-32 right-20 w-1 h-1 bg-[#D4AF37] rounded-full opacity-50 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      <div
        className="absolute bottom-10 left-10 w-2 h-2 bg-[#D4AF37] rounded-full opacity-60 animate-pulse"
        style={{ animationDelay: '0.3s' }}
      ></div>
      <div
        className="absolute bottom-24 left-24 w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: '0.8s' }}
      ></div>
      <div
        className="absolute bottom-16 left-16 w-1 h-1 bg-[#D4AF37] rounded-full opacity-50 animate-pulse"
        style={{ animationDelay: '1.2s' }}
      ></div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 md:p-16 border border-[#D4AF37]/20 relative"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#722f37] opacity-30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#722f37] opacity-30 rounded-br-2xl"></div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="font-serif text-[#8B7355] text-lg sm:text-xl tracking-wide mb-6">
              Con la bendición de Dios y de
            </h2>
            <p className="font-serif text-[#8B7355] text-base sm:text-lg tracking-wide">
              nuestros padres
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#722f37] to-transparent mx-auto mb-8"
          ></motion.div>

          {/* Padres del novio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="font-serif text-[#722f37] text-base sm:text-lg mb-3 tracking-wide">
              Padres del novio
            </p>
            <p className="font-serif text-[#C9B799] text-xl sm:text-2xl mb-2 italic">
              Angel Rosendo Quino Quispe (♱)
            </p>
            <p className="font-serif text-[#C9B799] text-xl sm:text-2xl italic">
              Maria Eugenia Flores Silva
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9B799] to-transparent mx-auto my-8"
          ></motion.div>

          {/* Padres de la novia */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8 text-center"
          >
            <p className="font-serif text-[#722f37] text-base sm:text-lg mb-3 tracking-wide">
              Padres de la novia
            </p>
            <p className="font-serif text-[#C9B799] text-xl sm:text-2xl mb-2 italic">
              Favio Cesar Magne Tejada
            </p>
            <p className="font-serif text-[#C9B799] text-xl sm:text-2xl italic">
              Maria Isabel Huanca Flores
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#722f37] to-transparent mx-auto my-8"
          ></motion.div>

          {/* Footer message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <p className="font-serif text-[#8B7355] text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              Nos complace invitarles a disfrutar con nosotros este día tan
              especial.
            </p>
          </motion.div>

          {/* Decorative flourish */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex justify-center mt-8"
          >
            <svg
              className="w-12 h-12 text-[#722f37] opacity-40"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                opacity="0.3"
              />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
