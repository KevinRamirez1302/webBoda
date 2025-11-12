'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function LoveStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      year: '13:45 PM',
      title: 'Ceremonia Religiosa',
      description: 'Celebración de nuestra unión en matrimonio en la iglesia.',
      imageUrl: '/images/church.png',
    },
    {
      year: '16:50 PM',
      title: 'Boda Civil',
      description: 'Celebración de nuestra Boda Civil en el salon de eventos.',
      imageUrl: '/images/anillo.png',
    },
    {
      year: '17:30 PM',
      title: 'Vals',
      description: 'Baile de novios, padres y padrinos.',
      imageUrl: '/images/baile.png',
    },
    {
      year: '19:30 PM',
      title: 'Cena',
      description:
        'Disfruta de un elegante menú especialmente preparado para la ocasión.',
      imageUrl: '/images/cena.png',
    },
    {
      year: '22:00 PM',
      title: 'Torta',
      description: 'Partida y repartición de torta.',
      imageUrl: '/images/cake.png',
    },
    {
      year: '00:00 AM',
      title: 'Despedida de la Feliz Pareja',
      description: '',
      imageUrl: '/images/adios.png',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden -mb-1"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Fondo decorativo"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Overlay con gradiente para transición suave */}
      <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/60 to-white/50 z-1"></div>

      <div className="max-w-4xl mx-auto relative z-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#722f37] mb-4">
            Programa del Día
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-[#722f37] mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - oculta en móvil, visible en tablets y desktop */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#722f37] opacity-20"></div>

          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-8 sm:mb-12 ${
                index % 2 === 0
                  ? 'flex-col sm:flex-row'
                  : 'flex-col sm:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div
                className={`w-full sm:w-5/12 px-4 sm:px-0 ${
                  index % 2 === 0
                    ? 'text-center sm:text-right sm:pr-8'
                    : 'text-center sm:text-left sm:pl-8'
                }`}
              >
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-neutral-100 sm:inline-block w-full sm:w-auto backdrop-blur-sm">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 relative">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#722f37] font-semibold text-base sm:text-lg block">
                    {event.year}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-neutral-800 my-2">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-[#722f37] rounded-full border-2 sm:border-4 border-white shadow-md z-10"></div>

              {/* Empty space for alternating layout - solo visible en desktop */}
              <div className="hidden sm:block sm:w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-neutral-700 italic leading-relaxed">
            &ldquo;Celebremos juntos este día tan especial&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
