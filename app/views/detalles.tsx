'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      icon: (
      <img src="images/iglesia.webp" className=' min-h-[150px] w-[150px] h-[150px] min-w-[150px] '/>
      ),
      title: "Ceremonia Religiosa",
      time: "16:00 hrs",
      location: "Iglesia San Francisco",
      address: "Av. 16 de Julio #1853, El Prado",
      mapsLink: "https://maps.google.com"
    },
    {
      icon: (
       <img src="images/bodaRecepcion.webp" className=' min-h-[150px] w-[150px] h-[150px] min-w-[150px] '/>
      ),
      title: "Recepción",
      time: "18:00 hrs",
      location: "Castillo salon Eventos",
      address: "Claudio pinilla,ESQ Arturo posnaski #1011 Zona Miraflores",
      mapsLink: "https://maps.app.goo.gl/3GoPQT98iSqGWwT47"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#722f37] mb-4">
            Detalles del Evento
          </h2>
          <div className="w-24 h-0.5 bg-[#722f37] mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Será un honor compartir este día especial contigo
          </p>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="text-[#722f37] mb-6 flex justify-center">
                {event.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl text-neutral-800 text-center mb-4">
                {event.title}
              </h3>

              {/* Time */}
              <p className="text-[#722f37] text-xl font-semibold text-center mb-6">
                {event.time}
              </p>

              {/* Location details */}
              <div className="text-center space-y-2 mb-6">
                <p className="text-neutral-800 font-medium text-lg">{event.location}</p>
                <p className="text-neutral-600 text-sm">{event.address}</p>
              </div>

              {/* Map button */}
              <a
                href={event.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-[#722f37] hover:bg-[#5a252c] text-white py-3 px-6 rounded-full transition-colors duration-300 font-medium">
                  Ver ubicación
                </button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Dress code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100 max-w-2xl mx-auto text-center"
        >
          <svg className="w-12 h-12 text-[#722f37] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="font-serif text-2xl text-neutral-800 mb-2">Código de Vestimenta</h3>
          <p className="text-[#722f37] text-lg font-medium">Formal / Etiqueta</p>
        </motion.div>
      </div>
    </section>
  );
}