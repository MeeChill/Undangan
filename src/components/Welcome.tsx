"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export function Welcome() {
  return (
    <section className="py-32 md:py-56 px-6 bg-surface-container relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none"></div>
      
      <div className="max-w-4xl w-full flex flex-col items-center gap-24 relative z-10">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-left sm:text-center px-4"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-body leading-relaxed md:leading-relaxed lg:leading-relaxed text-on-surface/90 italic font-light drop-shadow-md">
            &ldquo;{weddingData.welcomeMessage}&rdquo;
          </p>
        </motion.div>

        {/* Ayat Quran Section */}
        {weddingData.ayatQuran && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-2xl px-6"
          >
            <div className="w-12 h-[1px] bg-primary/30 mb-12"></div>
            <p className="text-3xl md:text-4xl font-arabic text-primary leading-[1.8] mb-12 drop-shadow-sm" dir="rtl">
              {weddingData.ayatQuran.text}
            </p>
            <p className="text-base md:text-lg font-body text-on-surface/70 leading-relaxed italic mb-6">
              &ldquo;{weddingData.ayatQuran.translation}&rdquo;
            </p>
            <p className="text-[10px] font-label tracking-[0.3em] uppercase text-primary/60">
              — {weddingData.ayatQuran.reference}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

