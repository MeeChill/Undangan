"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import Image from "next/image";

export function Gallery() {
  return (
    <section className="py-24 md:py-32 px-6 bg-surface-lowest relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-label tracking-[0.3em] text-[10px] uppercase mb-4">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-display text-on-surface">The Nuptial</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {weddingData.gallery.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative group overflow-hidden bg-surface-container ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Image 
                src={src}
                alt={`Gallery photo ${idx + 1}`}
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest/80 to-transparent opacity-60"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
