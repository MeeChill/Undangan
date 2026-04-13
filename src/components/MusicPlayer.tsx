"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteracted = useRef(false);

  const playMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Audio play blocked", err));
    }
  };

  const pauseMusic = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    // Stop propagation so the window-level listener doesn't catch this click
    if (e) e.stopPropagation();
    
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  useEffect(() => {
    setShowToast(true);
    const toastTimer = setTimeout(() => setShowToast(false), 5000);

    const handleFirstInteraction = () => {
      if (!hasInteracted.current) {
        hasInteracted.current = true;
        playMusic();
        
        // Cleanup listeners immediately after first interaction
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('scroll', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });

    return () => {
      clearTimeout(toastTimer);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []); // Empty dependency array means this only runs once on mount

  return (
    <>
      <div className="fixed bottom-24 left-6 md:bottom-8 md:left-8 z-50 flex items-center gap-4">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          onClick={togglePlay}
          className={`p-4 rounded-full shadow-ambient transition-all duration-500 flex items-center justify-center group relative overflow-hidden ${
            isPlaying 
              ? "bg-primary text-on-primary" 
              : "bg-surface-container text-primary border border-primary/30"
          }`}
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Pause size={20} />
            </motion.div>
          ) : (
            <Play size={20} className="ml-1" />
          )}
          
          {/* Ripple effect when playing */}
          {isPlaying && (
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary-container rounded-full z-[-1]"
            />
          )}
        </motion.button>

        <AnimatePresence>
          {(showToast || isPlaying) && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-surface-container/80 backdrop-blur-md border border-outline-variant/20 px-4 py-2 rounded-full shadow-ambient hidden md:flex items-center gap-3"
            >
              <Music size={14} className="text-primary animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface">
                  {weddingData.song?.title || "Sampai Selamanya"}
                </span>
                <span className="text-[8px] font-body text-outline-variant italic">
                  {weddingData.song?.artist || "Nadhif Basalamah"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <audio
        ref={audioRef}
        loop
        src={weddingData.song?.url || "/music/bg-music.mp3"}
      />
    </>
  );
}


