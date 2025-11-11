'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  children: React.ReactNode;
  /** URL de la imagen del sello de cera */
  selloUrl?: string;
  /** Callback cuando se abre la carta */
  onOpen?: () => void;
};

// Componente del Lazo Horizontal con Sello de Cera
const Ribbon = ({
  selloUrl,
  ...props
}: {
  selloUrl?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => (
  <motion.div
    className="absolute w-full h-24 md:h-32 flex items-center justify-center pointer-events-none z-40"
    {...props}
    style={{ top: '50%', transform: 'translateY(-50%)' }}
  >
    {/* Lazo horizontal - parte izquierda */}
    <div
      className="absolute left-0 w-1/2 h-8 md:h-10 bg-linear-to-r from-transparent via-[#C9B799] to-[#8B7355] opacity-90"
      style={{ boxShadow: '0 2px 8px rgba(139,115,85,0.4)' }}
    />

    {/* Lazo horizontal - parte derecha */}
    <div
      className="absolute right-0 w-1/2 h-8 md:h-10 bg-linear-to-l from-transparent via-[#C9B799] to-[#8B7355] opacity-90"
      style={{ boxShadow: '0 2px 8px rgba(139,115,85,0.4)' }}
    />

    {/* Sello de cera con imagen */}
    <div
      className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-linear-to-br from-[#6D2932] via-[#8B4A54] to-[#4A1F26] flex items-center justify-center shadow-2xl z-50 overflow-hidden"
      style={{
        boxShadow:
          '0 8px 20px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.15)',
      }}
    >
      {/* Textura del sello */}
      <div
        className="absolute inset-0 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 50%)',
        }}
      />

      {/* Imagen del sello */}
      {selloUrl ? (
        <Image
          src={selloUrl}
          alt="Sello"
          width={112}
          height={112}
          className="relative object-contain z-10 brightness-150"
        />
      ) : (
        /* Diseño decorativo de boda por defecto */
        <div className="relative flex flex-col items-center justify-center text-[#E5DDC9]">
          <div className="text-3xl md:text-4xl font-serif">♥</div>
          <div className="w-12 h-px bg-[#E5DDC9] my-2"></div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5DDC9]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5DDC9]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5DDC9]"></div>
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

export const AperturaInvitacion = ({ children, selloUrl, onOpen }: Props) => {
  const [estaAbierta, setEstaAbierta] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const abrirInvitacion = () => {
    setEstaAbierta(true);
    // Mostrar el contenido después de un delay
    setTimeout(() => {
      setMostrarContenido(true);
      if (onOpen) {
        onOpen();
      }
    }, 1800);
  };

  // Variantes de Animación

  // Solapa triangular superior - se abre hacia arriba y atrás
  const topFlapVariants = {
    cerrada: {
      rotateX: 0,
      z: 0,
    },
    abierta: {
      rotateX: -180,
      z: -100,
      transition: {
        duration: 1.4,
        ease: [0.645, 0.045, 0.355, 1.0],
        delay: 0.4,
      },
    },
  };

  // Solapa rectangular inferior - se desliza hacia abajo con profundidad
  const bottomFlapVariants = {
    cerrada: {
      y: 0,
      rotateX: 0,
      z: 0,
    },
    abierta: {
      y: '100%',
      rotateX: 15,
      z: -50,
      transition: {
        duration: 1.2,
        ease: [0.645, 0.045, 0.355, 1.0],
        delay: 0.2,
      },
    },
  };

  // Contenedor del sobre completo - se aleja ligeramente
  const envelopeContainerVariants = {
    cerrada: {
      scale: 1,
      z: 0,
    },
    abierta: {
      scale: 0.95,
      z: -200,
      transition: {
        duration: 1.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
  };

  // Animación del sello - se rompe y desvanece
  const ribbonVariants = {
    cerrada: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    abierta: {
      opacity: 0,
      scale: 0.3,
      rotate: -45,
      y: 50,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
        delay: 0.1,
      },
    },
  };

  // Tarjeta interior - sale del sobre con efecto de elevación
  const cardVariants = {
    oculto: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      z: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      z: 0,
      transition: {
        duration: 1.0,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  // Overlay que se desvanece completamente
  const overlayVariants = {
    visible: {
      opacity: 1,
      pointerEvents: 'auto' as const,
    },
    oculto: {
      opacity: 0,
      pointerEvents: 'none' as const,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* Contenido principal de la web - siempre renderizado */}
      <div className={mostrarContenido ? 'block' : 'hidden'}>{children}</div>

      {/* Overlay del sobre - desaparece después de abrir */}
      <motion.div
        className="fixed inset-0 z-100 flex items-center justify-center"
        style={{ perspective: '2000px' }}
        variants={overlayVariants}
        initial="visible"
        animate={mostrarContenido ? 'oculto' : 'visible'}
      >
        {/* Fondo oscuro */}
        <div className="absolute inset-0 bg-linear-to-br from-[#2A1A1F] via-[#1A0F13] to-[#0F0A0C]" />

        {/* Tarjeta que sale del sobre */}
        {estaAbierta && !mostrarContenido && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            variants={cardVariants}
            initial="oculto"
            animate="visible"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="bg-[#E5DDC9] p-8 md:p-16 rounded shadow-2xl max-w-2xl text-center">
              <h2 className="text-2xl md:text-4xl font-serif text-[#6D2932] mb-4">
                Bienvenidos
              </h2>
              <p className="text-[#8B7355] text-lg">Cargando...</p>
            </div>
          </motion.div>
        )}

        {/* Cubierta del Sobre */}
        {!estaAbierta && (
          <motion.div
            className="absolute inset-0 cursor-pointer flex items-center justify-center"
            onClick={abrirInvitacion}
            variants={envelopeContainerVariants}
            initial="cerrada"
            animate="cerrada"
            exit="abierta"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="relative w-full max-w-2xl"
              style={{ aspectRatio: '3/2' }}
            >
              {/* Lazo y Sello */}
              <motion.div
                variants={ribbonVariants}
                initial="cerrada"
                animate={estaAbierta ? 'abierta' : 'cerrada'}
              >
                <Ribbon selloUrl={selloUrl} />
              </motion.div>

              {/* Solapa Superior Triangular */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-br from-[#6D2932] via-[#8B4A54] to-[#5A2429] origin-top z-30"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                  boxShadow:
                    '0 10px 30px rgba(0,0,0,0.4), inset 0 -2px 10px rgba(0,0,0,0.3)',
                  border: '2px solid rgba(139,74,84,0.5)',
                  backfaceVisibility: 'hidden',
                }}
                variants={topFlapVariants}
                initial="cerrada"
                animate={estaAbierta ? 'abierta' : 'cerrada'}
              />

              {/* Solapa Inferior Rectangular */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-[#6D2932] via-[#8B4A54] to-[#5A2429] origin-bottom z-20"
                style={{
                  transformOrigin: 'bottom center',
                  transformStyle: 'preserve-3d',
                  boxShadow:
                    '0 -10px 30px rgba(0,0,0,0.4), inset 0 2px 10px rgba(0,0,0,0.3)',
                  border: '2px solid rgba(139,74,84,0.5)',
                }}
                variants={bottomFlapVariants}
                initial="cerrada"
                animate={estaAbierta ? 'abierta' : 'cerrada'}
              />

              {/* Fondo del sobre */}
              <div
                className="absolute inset-0 bg-linear-to-br from-[#6D2932] via-[#8B4A54] to-[#5A2429] z-10"
                style={{
                  boxShadow:
                    'inset 0 0 60px rgba(0,0,0,0.3), 0 20px 60px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(139,74,84,0.5)',
                }}
              ></div>

              {/* Interior del sobre con detalles beige */}
              <div
                className="absolute inset-0 bg-linear-to-b from-[#E5DDC9] to-[#C9B799] z-0"
                style={{
                  boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.15)',
                }}
              ></div>

              {/* Texto decorativo animado */}
              <motion.div
                className="absolute -bottom-20 left-0 right-0 flex flex-col items-center justify-center z-15 pointer-events-none"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  y: [-2, 2, -2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-[#E5DDC9] text-center">
                  <p className="text-lg md:text-xl font-serif tracking-widest mb-2">
                    Click para abrir
                  </p>
                  <motion.div
                    animate={{
                      y: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    ↑
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default AperturaInvitacion;
