'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LoveStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "12:00 PM",
      title: "Ceremonia Religiosa",
      description: "Celebración de nuestra unión en matrimonio en la iglesia."
    },
    {
      year: "2:00 PM",
      title: "Recepción",
      description: "Apertura de la celebración con un brindis de bienvenida."
    },
    {
      year: "3:00 PM",
      title: "Almuerzo",
      description: "Disfruta de un elegante menú especialmente preparado para la ocasión."
    },
    {
      year: "4:30 PM",
      title: "Baile y Celebración",
      description: "Música, baile y diversión para celebrar nuestro amor."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#722f37] mb-4">
            Programa del Día
          </h2>
          <div className="w-24 h-0.5 bg-[#722f37] mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#722f37] opacity-20"></div>

          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="inline-block bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
                  <span className="text-[#722f37] font-semibold text-lg">{event.year}</span>
                  <h3 className="font-serif text-2xl text-neutral-800 my-2">{event.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#722f37] rounded-full border-4 border-white shadow-md z-10"></div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16 px-4"
        >
          <p className="font-serif text-2xl md:text-3xl text-neutral-700 italic">
            "Celebremos juntos este día tan especial<br />que marca el comienzo de nuestra nueva vida"
          </p>
        </motion.div>
      </div>
    </section>
  );
}