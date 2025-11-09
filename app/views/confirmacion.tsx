'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function RSVP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    numberGuests: '1',
    asiste: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    asiste: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    const newErrors = {
      name: '',
      asiste: '',
    };

    let isValid = true;

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
      isValid = false;
    }

    // Validar asistencia
    if (!formData.asiste) {
      newErrors.asiste = 'Por favor selecciona una opción';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar antes de enviar
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://backend-boda-seven.vercel.app/create/guests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Error al enviar la confirmación');
      }

      const data = await response.json();
      console.log('Response:', data);

      setSubmitted(true);
      setFormData({
        name: '',
        numberGuests: '1',
        asiste: '',
        message: '',
      });
      setErrors({
        name: '',
        asiste: '',
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error al enviar el formulario'
      );
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpiar error del campo cuando el usuario empieza a escribir
    if (name === 'name' || name === 'asiste') {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
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
              <label
                htmlFor="name"
                className="block text-neutral-700 font-medium mb-2"
              >
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={` placeholder-gray-800 w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-neutral-200 focus:ring-[#722f37]'
                } focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Number of guests */}
            <div>
              <label
                htmlFor="numberGuests"
                className="block text-neutral-700 font-medium mb-2"
              >
                Número de invitados *
              </label>
              <select
                id="numberGuests"
                name="numberGuests"
                value={formData.numberGuests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#722f37] focus:border-transparent transition-all"
              >
                <option value="1">Solo</option>
                <option value="2">con Acompañante</option>
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
                    name="asiste"
                    value="yes"
                    checked={formData.asiste === 'yes'}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#722f37] focus:ring-[#722f37] cursor-pointer"
                  />
                  <span className="ml-2 text-neutral-700">Sí, confirmo</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="asiste"
                    value="no"
                    checked={formData.asiste === 'no'}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#722f37] focus:ring-[#722f37] cursor-pointer"
                  />
                  <span className="ml-2 text-neutral-700">
                    No podré asistir
                  </span>
                </label>
              </div>
              {errors.asiste && (
                <p className="mt-2 text-sm text-red-600">{errors.asiste}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-neutral-700 font-medium mb-2"
              >
                Mensaje (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border placeholder-gray-800 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#722f37] focus:border-transparent transition-all resize-none"
                placeholder="Déjanos un mensaje..."
              />
            </div>

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-600 font-medium bg-red-50 py-3 px-4 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#722f37] hover:bg-[#5a252c] text-white py-4 px-6 rounded-full transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Enviando...' : 'Confirmar Asistencia'}
            </button>

            {/* Success message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-[#722f37] font-medium bg-green-50 py-3 px-4 rounded-lg"
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
