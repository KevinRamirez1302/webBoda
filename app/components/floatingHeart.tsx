'use client'; // Necesario porque usamos hooks (useMemo) y Framer Motion

import { useMemo } from 'react';
import { motion } from 'framer-motion';

// --- Configuración de la animación ---
const CONFIG = {
  numHearts: 10, // Cantidad de corazones
  minDuration: 8, // Duración mínima de la animación en segundos
  maxDuration: 15, // Duración máxima de la animación en segundos
  minScale: 0.15, // Tamaño mínimo del corazón (más pequeño)
  maxScale: 0.4, // Tamaño máximo del corazón (más pequeño)
  minOpacity: 0.4, // Opacidad mínima (aumentada para más solidez)
  maxOpacity: 0.7, // Opacidad máxima (aumentada para más solidez)
  color: '#800020', // Color guindo más sólido
};
// ---------------------

// Propiedades aleatorias para cada corazón
interface Heart {
  id: number;
  initialX: string;
  initialY: string;
  endY: string;
  endX: string;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface Heart {
  id: number;
  initialX: string;
  initialY: string;
  endX: string;
  endY: string;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingHearts() {
  // Usamos useMemo para generar los valores aleatorios UNA SOLA VEZ.
  const hearts = useMemo<Heart[]>(() => {
    // Función para generar un número aleatorio entre min y max
    // eslint-disable-next-line react-hooks/purity
    const random = (min: number, max: number) =>
      min + (max - min) * Math.random();

    const randomHearts: Heart[] = [];
    for (let i = 0; i < CONFIG.numHearts; i++) {
      const initialX = random(0, 100);
      const endX = random(0, 100);
      randomHearts.push({
        id: i,
        initialX: `${initialX}vw`,
        initialY: '105vh',
        endX: `${endX}vw`,
        endY: '-10vh',
        scale: random(CONFIG.minScale, CONFIG.maxScale),
        duration: random(CONFIG.minDuration, CONFIG.maxDuration),
        delay: random(0, 8),
        opacity: random(CONFIG.minOpacity, CONFIG.maxOpacity),
      });
    }
    return randomHearts;
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez

  return (
    // Contenedor principal con position fixed y z-index alto para asegurar visibilidad
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{
            x: heart.initialX,
            y: heart.initialY,
            opacity: 0,
            scale: heart.scale,
          }}
          animate={{
            x: heart.endX,
            y: heart.endY,
            opacity: [0, heart.opacity, heart.opacity, 0],
            scale: [
              heart.scale * 0.8,
              heart.scale,
              heart.scale * 0.9,
              heart.scale * 1.1,
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: heart.duration,
            delay: heart.delay,
            ease: [0.43, 0.13, 0.23, 0.96], // Easing suave
          }}
          style={{
            fontSize: `${heart.scale * 1}rem`,
          }}
        >
          <svg
            viewBox="0 0 20 20"
            className="h-full w-full"
            style={{
              fill: CONFIG.color,
              filter: 'drop-shadow(0 0 1px rgba(128, 0, 32, 0.3))',
            }}
          >
            <path d="M10 4.5C9.3-0.7 0-0.2 0 6.7c0 4.2 3.4 7.7 10 12.3 6.6-4.6 10-8.1 10-12.3 0-6.9-9.3-7.4-10-2.2z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
