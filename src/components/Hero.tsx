"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-brand-navy p-4 sm:p-8">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[150vw] h-[150vw] sm:w-[800px] sm:h-[800px] bg-brand-gold/15 rounded-full blur-[100px] sm:blur-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Elegant Arch Frame to fill space nicely */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-[15px] sm:inset-[30px] lg:inset-[40px] border-t border-x border-brand-gold/20 rounded-t-[40vw] sm:rounded-t-[300px] flex flex-col items-center pointer-events-none z-10 before:content-[''] before:absolute before:inset-[6px] sm:before:inset-[10px] before:border-t before:border-x before:border-brand-gold/10 before:rounded-t-[38vw] sm:before:rounded-t-[290px]"
      />
      
      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-4xl mx-auto px-4 mt-12 sm:mt-8">
        
        {/* Top Decorative Element */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="flex items-center gap-3 sm:gap-6 mb-8 sm:mb-12"
        >
          <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-gold/60"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-brand-gold/80"></div>
          <p className="text-brand-gold font-sans tracking-[0.2em] sm:tracking-[0.3em] text-[8px] sm:text-[10px] md:text-xs uppercase whitespace-nowrap">
            The Wedding Of
          </p>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-brand-gold/80"></div>
          <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-gold/60"></div>
        </motion.div>
        
        {/* Couple Names */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif mb-6 md:mb-10 text-brand-cream tracking-tight flex flex-col items-center leading-[1.1] sm:leading-tight drop-shadow-lg"
        >
          <span>{weddingData.groom.trim()}</span>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-gold italic font-normal mt-4 mb-2 sm:my-4">&</span>
          <span>{weddingData.bride.trim()}</span>
        </motion.h1>
        
        {/* Separator & Date */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="flex flex-col items-center w-full mb-4 sm:mb-8"
        >
          <div className="flex items-center justify-center gap-4 w-full mb-6">
             <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-brand-gold/40"></div>
             <div className="text-brand-gold text-lg sm:text-xl">❖</div>
             <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-brand-gold/40"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg sm:text-2xl md:text-3xl font-serif text-brand-cream italic font-light tracking-wider"
          >
            {weddingData.date}
          </motion.h2>
        </motion.div>

        {/* Countdown */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1.8 }}
           className="w-full relative z-20 pb-16 sm:pb-8"
        >
           <Countdown targetDate={weddingData.dateObject} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
        <span className="text-brand-gold text-[8px] sm:text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <div className="w-[1px] h-12 sm:h-16 bg-brand-gold/20 overflow-hidden relative">
            <motion.div 
              className="w-full h-1/2 bg-brand-gold absolute top-0"
              animate={{ top: ['-50%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </div>
      </motion.div>
    </section>
  );
}
