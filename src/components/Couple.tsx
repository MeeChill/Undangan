"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import Image from "next/image";

export function Couple() {
  return (
    <section className="py-24 md:py-48 px-6 bg-surface-lowest relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-16 md:gap-8 lg:gap-24 relative z-10">
        
        {/* Groom Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start md:w-1/2"
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] mb-8 overflow-hidden grayscale contrast-125">
            <Image 
              src={weddingData.couple.groom.image} 
              alt={weddingData.couple.groom.fullName}
              fill
              className="object-cover object-center"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-primary tracking-tighter uppercase mb-4 text-center md:text-left drop-shadow-md">
            {weddingData.couple.groom.fullName}
          </h2>
          <div className="text-center md:text-left">
            <p className="text-[10px] font-label uppercase tracking-widest text-outline-variant mb-2">
              {weddingData.couple.groom.parentsContext}
            </p>
            <p className="text-sm font-body text-on-surface/80">
              {weddingData.couple.groom.fatherName} & {weddingData.couple.groom.motherName}
            </p>
          </div>
        </motion.div>

        {/* Vertical divider on desktop, horizontal on mobile */}
        <div className="hidden md:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-primary/30 to-transparent my-10"></div>
        <div className="md:hidden h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Bride Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start md:w-1/2 md:mt-32"
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] mb-8 overflow-hidden bg-surface-container grayscale contrast-125">
            <Image 
              src={weddingData.couple.bride.image} 
              alt={weddingData.couple.bride.fullName}
              fill
              className="object-cover object-center"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-primary tracking-tighter uppercase mb-4 text-center md:text-left drop-shadow-md">
            {weddingData.couple.bride.fullName}
          </h2>
          <div className="text-center md:text-left">
            <p className="text-[10px] font-label uppercase tracking-widest text-outline-variant mb-2">
              {weddingData.couple.bride.parentsContext}
            </p>
            <p className="text-sm font-body text-on-surface/80">
              {weddingData.couple.bride.fatherName} & {weddingData.couple.bride.motherName}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
