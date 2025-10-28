'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#722f37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#722f37] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
          <h1 className="font-serif text-6xl md:text-8xl text-[#722f37] mb-4">
            Sofia & Carlos
          </h1>
          <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl text-neutral-600">
            <span className="font-light">Nos casamos</span>
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-neutral-700 font-light">
            15 de Junio, 2025
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