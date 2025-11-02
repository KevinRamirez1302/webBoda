'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function GiftSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-[#E5DDC9] to-[#C9B799] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Decorative Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-block">
            <svg 
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-[#8B7355]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" 
              />
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#722f37] mb-6" style={{ fontStyle: 'italic' }}>
            Conteo de Regalos
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-base sm:text-lg text-[#5A4A3A] leading-relaxed max-w-2xl mx-auto px-4">
            Así mismo tenemos el honor de invitarles al tradicional conteo de regalos que se efectuará en ....
          </p>
        </motion.div>

        {/* Date and Time Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/40 backdrop-blur-sm rounded-lg p-6 sm:p-8 max-w-md mx-auto border-2 border-[#8B7355]/30 shadow-lg"
        >
          {/* Date */}
          <div className="flex items-center justify-center gap-3 mb-4 pb-4 border-b border-[#8B7355]/20">
            <svg className="w-6 h-6 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-[#8B7355] text-sm font-medium mb-1">Fecha</p>
              <p className="text-2xl sm:text-3xl font-serif text-[#722f37]">Domingo 11</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-[#8B7355] text-sm font-medium mb-1">Hora</p>
              <p className="text-2xl sm:text-3xl font-serif text-[#722f37]">12:00 hrs.</p>
            </div>
          </div>
        </motion.div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#722f37] mb-4">
            Salón de eventos
          </h3>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#8B7355] mb-6" style={{ fontWeight: 300, letterSpacing: '0.05em' }}>
            &quot;Castrillo&quot;
          </p>

          {/* Map Button */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9B799] hover:bg-[#B8A688] text-[#5A4A3A] py-3 px-8 rounded-full transition-all duration-300 font-medium text-base sm:text-lg shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ver mapa
          </a>
        </motion.div>

    
       
      </div>
    </section>
  );
}
