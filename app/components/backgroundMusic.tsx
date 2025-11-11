'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Crear el elemento de audio
    audioRef.current = new Audio('/music/wedding-song.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // 30% de volumen

    // Intentar reproducir automáticamente
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch {
        console.log(
          'Autoplay bloqueado, el usuario debe hacer clic para activar la música'
        );
        setIsPlaying(false);
      }
    };

    // Pequeño delay para asegurar que el DOM está listo
    const timer = setTimeout(() => {
      playAudio();
    }, 500);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Error al reproducir audio:', error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Botón flotante superior para control de música */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed top-6 right-6 z-[9999]"
      >
        <button
          onClick={toggleMusic}
          className="group relative w-14 h-14 bg-white/90 backdrop-blur-md text-[#722f37] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-[#722f37]/20"
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Volume2 className="w-6 h-6" />
                {/* Animated sound waves */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                />
              </motion.div>
            ) : (
              <motion.div
                key="paused"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <VolumeX className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip */}
          <span className="absolute top-full mt-2 right-0 bg-neutral-800 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {isPlaying ? 'Pausar música' : 'Reproducir música'}
          </span>

          {/* Pulse effect when playing */}
          {isPlaying && (
            <span className="absolute inset-0 rounded-full bg-[#722f37] opacity-20 animate-ping"></span>
          )}
        </button>
      </motion.div>
    </>
  );
}
