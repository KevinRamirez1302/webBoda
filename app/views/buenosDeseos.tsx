'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Presentation,
} from 'lucide-react';

interface Message {
  id: number;
  nombre_completo: string;
  mensaje: string;
  createdAt?: string;
}

export default function BuenosDeseos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Fetch mensajes de la API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://backend-boda-seven.vercel.app/invitados',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Error al cargar los mensajes');
        }

        const data = await response.json();

        let messagesArray = [];
        if (Array.isArray(data)) {
          messagesArray = data;
        } else if (data && Array.isArray(data.invitados)) {
          messagesArray = data.invitados;
        } else if (data && Array.isArray(data.data)) {
          messagesArray = data.data;
        } else if (data && Array.isArray(data.messages)) {
          messagesArray = data.messages;
        }

        const messagesWithContent = messagesArray.filter((msg: any) => {
          return msg.mensaje && msg.mensaje.trim() !== '';
        });

        if (messagesWithContent.length === 0) {
          setMessages([
            {
              id: 1,
              nombre_completo: 'María González',
              mensaje:
                '¡Felicidades a la pareja! Que Dios bendiga su unión y les llene de amor y felicidad en cada momento de sus vidas.',
            },
            {
              id: 2,
              nombre_completo: 'Carlos Ramírez',
              mensaje:
                'Que este día sea el inicio de una vida llena de bendiciones, amor y comprensión mutua. ¡Enhorabuena!',
            },
            {
              id: 3,
              nombre_completo: 'Ana Martínez',
              mensaje:
                'Les deseamos un matrimonio lleno de alegría, risas y momentos inolvidables. ¡Felicidades!',
            },
            {
              id: 4,
              nombre_completo: 'Roberto Silva',
              mensaje:
                'Que su amor crezca cada día más fuerte. ¡Les deseamos toda la felicidad del mundo!',
            },
            {
              id: 5,
              nombre_completo: 'Laura Torres',
              mensaje:
                'Dos corazones unidos en amor eterno. ¡Que sean muy felices juntos!',
            },
          ]);
        } else {
          setMessages(messagesWithContent);
        }

        setError(null);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('No se pudieron cargar los mensajes');
        setMessages([
          {
            id: 1,
            nombre_completo: 'María González',
            mensaje:
              '¡Felicidades a la pareja! Que Dios bendiga su unión y les llene de amor y felicidad en cada momento de sus vidas.',
          },
          {
            id: 2,
            nombre_completo: 'Carlos Ramírez',
            mensaje:
              'Que este día sea el inicio de una vida llena de bendiciones, amor y comprensión mutua. ¡Enhorabuena!',
          },
          {
            id: 3,
            nombre_completo: 'Ana Martínez',
            mensaje:
              'Les deseamos un matrimonio lleno de alegría, risas y momentos inolvidables. ¡Felicidades!',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (messages.length === 0 || viewMode !== 'carousel') return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [messages.length, viewMode]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + messages.length) % messages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white via-rose-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-rose-200 rounded w-64 mx-auto mb-8"></div>
            <div className="h-48 bg-rose-100 rounded-2xl"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="px-[7%] py-20 bg-gradient-to-b from-white via-rose-50/30 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#722f37] mb-3">
            Buenos Deseos
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Mensajes especiales de nuestros invitados
          </p>

          {/* Toggle View Mode */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                viewMode === 'carousel'
                  ? 'bg-[#722f37] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Presentation size={18} />
              <span className="text-sm font-medium">Carousel</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#722f37] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Grid3x3 size={18} />
              <span className="text-sm font-medium">Grid</span>
            </button>
          </div>
        </div>

        {/* Carousel View */}
        {viewMode === 'carousel' && messages.length > 0 && (
          <div className="relative max-w-4xl mx-auto">
            {/* Main Card Container */}
            <div className="relative h-[400px] md:h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="h-full rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#722f37] to-[#5a2529] shadow-2xl flex flex-col justify-between">
                    {/* Heart Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="bg-white/20 p-4 rounded-full">
                        <Heart className="text-white" size={32} fill="white" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-white text-lg md:text-xl leading-relaxed text-center italic max-w-2xl">
                        "{messages[currentIndex].mensaje}"
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/20">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-lg font-semibold text-white">
                          {messages[currentIndex].nombre_completo
                            ?.charAt(0)
                            .toUpperCase()}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-white">
                        {messages[currentIndex].nombre_completo}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-50 text-[#722f37] p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-50 text-[#722f37] p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-[#722f37]'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al mensaje ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-gray-600">
              <span className="text-sm">
                {currentIndex + 1} / {messages.length}
              </span>
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl p-6 bg-gradient-to-br from-[#722f37] to-[#5a2529] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-56"
              >
                <div className="flex flex-col gap-3 h-full">
                  <p className="text-gray-100 leading-relaxed text-sm flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    {data.mensaje}
                  </p>
                  <div className="flex items-center gap-2 pt-2 border-t border-white/20">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold">
                        {data.nombre_completo?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-200 truncate">
                      {data.nombre_completo}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mensaje si no hay deseos */}
        {messages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aún no hay mensajes. ¡Sé el primero en dejar tus buenos deseos!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
