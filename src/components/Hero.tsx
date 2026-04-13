"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { Countdown } from "./Countdown";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

function HeroContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to");

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-surface-lowest">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_moody_wedding.jpeg"
          alt="Couple Portrait"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-surface-lowest/80 to-surface-lowest/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-surface-lowest/60"></div>
      </div>

      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-0"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col w-full max-w-7xl mx-auto px-6 sm:px-12 mt-12 sm:mt-16 items-center text-center">
        
        {/* Top Decorative Element */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="flex flex-col items-center gap-4 mb-4 sm:mb-8"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-primary"></div>
          <p className="text-primary font-label tracking-[0.4em] text-[10px] sm:text-xs uppercase whitespace-nowrap">
            The Wedding Of
          </p>
        </motion.div>
        
        {/* Couple Names */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="font-display text-[4.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] mb-6 md:mb-10 tracking-tighter flex flex-col items-center leading-[0.9] sm:leading-[0.85] w-full"
        >
          <span className="text-on-surface text-outline-gold mb-2 drop-shadow-2xl">{weddingData.groom.trim()}</span>
          <span className="text-3xl sm:text-6xl md:text-7xl text-primary font-body italic my-2 sm:my-4">&</span>
          <span className="text-on-surface text-outline-gold mt-2 drop-shadow-2xl">{weddingData.bride.trim()}</span>
        </motion.h1>
        
        {/* Separator & Date */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="flex flex-col items-center w-full mb-10 sm:mb-16"
        >
          <div className="bronze-divider max-w-xs mb-6 opacity-30"></div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl sm:text-3xl font-body text-primary italic font-light tracking-widest drop-shadow-md"
          >
            {weddingData.date}
          </motion.h2>
        </motion.div>

        {/* Personalized Guest Greeting */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mb-8 px-8 py-5 border border-outline-variant/50 bg-surface-lowest/50 backdrop-blur-sm"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-label text-primary mb-2">Dear Honored Guest</p>
            <p className="text-xl md:text-3xl font-display text-on-surface drop-shadow">{guestName}</p>
          </motion.div>
        )}

        {/* Countdown */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 2.0 }}
           className="w-full relative z-20 flex justify-center pb-12"
        >
           <Countdown targetDate={weddingData.dateObject} />
        </motion.div>
      </div>

    </section>
  );
}

export function Hero() {
  return (
    <Suspense fallback={<div className="min-h-[100svh] bg-surface-lowest"></div>}>
      <HeroContent />
    </Suspense>
  );
}
