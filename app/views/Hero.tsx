'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/boda.jpg"
          alt="Fondo de boda"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
      </div>
      {/* Overlay gradiente para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50 z-1"></div>
    

      <div className="relative z-[2] text-center px-4 max-w-4xl mx-auto">
        {/* Animated ornament top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="mx-auto text-[#722f37]"
            fill="currentColor"
          >
            <path d="M40 10 L45 25 L60 30 L45 35 L40 50 L35 35 L20 30 L35 25 Z" />
          </svg>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] font-bold">
            Gonzalo & Xiomara
          </h1>
          <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl text-white">
            <span className="font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Nos casamos</span>
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-white font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wider">
            10 de Enero, 2026
          </p>
        </motion.div>

        {/* Animated ornament bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="mx-auto text-[#722f37]"
            fill="currentColor"
          >
            <path d="M40 10 L45 25 L60 30 L45 35 L40 50 L35 35 L20 30 L35 25 Z" />
          </svg>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#722f37] rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#722f37] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}