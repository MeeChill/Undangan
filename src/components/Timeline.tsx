"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export function Timeline() {
  return (
    <section className="py-32 md:py-48 px-6 bg-surface-lowest flex flex-col items-center relative">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-primary font-label tracking-[0.3em] text-[10px] uppercase mb-24 text-center z-10"
      >
        The Schedule
      </motion.p>

      <div className="w-full max-w-3xl flex flex-col z-10">
        {weddingData.timeline.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between py-12 border-b border-outline-variant/30 last:border-0"
          >
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <span className="text-2xl sm:text-3xl font-display tracking-wider text-primary">{step.time}</span>
            </div>

            <div className="sm:w-2/3">
              <h4 className="text-xl md:text-2xl text-on-surface tracking-wide font-body font-light">{step.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
