'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function RSVP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos (API, email, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#722f37] mb-4">
            Confirma tu Asistencia
          </h2>
          <div className="w-24 h-0.5 bg-[#722f37] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600">
            Por favor, confirma tu asistencia antes del 1 de Mayo
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-neutral-50 rounded-lg p-8 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#722f37] focus:border-transparent transition-all"
                placeholder="Tu nombre"
              />
            </div>

            {/* Number of guests */}
            <div>
              <label htmlFor="guests" className="block text-neutral-700 font-medium mb-2">
                Número de invitados *
              </label>
              <select
                id="guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#722f37] focus:border-transparent transition-all"
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
              </select>
            </div>

            {/* Attending */}
            <div>
              <label className="block text-neutral-700 font-medium mb-3">
                ¿Asistirás? *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    onChange={handleChange}
                    className="w-5 h-5 text-[#722f37] focus:ring-[#722f37] cursor-pointer"
                  />
                  <span className="ml-2 text-neutral-700">Sí, confirmo</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    required
                    onChange={handleChange}
                    className="w-5 h-5 text-[#722f37] focus:ring-[#722f37] cursor-pointer"
                  />
                  <span className="ml-2 text-neutral-700">No podré asistir</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                Mensaje (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#722f37] focus:border-transparent transition-all resize-none"
                placeholder="Déjanos un mensaje..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#722f37] hover:bg-[#5a252c] text-white py-4 px-6 rounded-full transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Confirmar Asistencia
            </button>

            {/* Success message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-[#722f37] font-medium"
              >
                ¡Gracias por confirmar! 💕
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}