"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export function Timeline() {
  return (
    <section className="py-24 md:py-32 px-6 bg-brand-navy-light/5 flex flex-col items-center">
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-brand-gold font-sans tracking-[0.3em] text-[10px] uppercase mb-16 text-center"
      >
        The Schedule
      </motion.p>

      <div className="relative max-w-lg w-full flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-brand-gold/0 via-brand-gold/30 to-brand-gold/0"></div>

        {weddingData.timeline.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`w-full flex items-center justify-between mb-16 last:mb-0 ${
              i % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className={`w-[45%] text-${i % 2 === 0 ? "left" : "right"}`}>
              {i % 2 === 0 ? (
                <div className="pl-6">
                  <h4 className="text-sm md:text-base text-brand-cream tracking-wide">{step.title}</h4>
                </div>
              ) : (
                <div className="pr-6">
                  <span className="text-lg font-serif text-brand-gold tracking-wider">{step.time}</span>
                </div>
              )}
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] rotate-45 bg-brand-gold"></div>

            <div className={`w-[45%] text-${i % 2 !== 0 ? "left" : "right"}`}>
              {i % 2 !== 0 ? (
                <div className="pl-6">
                  <h4 className="text-sm md:text-base text-brand-cream tracking-wide">{step.title}</h4>
                </div>
              ) : (
                <div className="pr-6">
                  <span className="text-lg font-serif text-brand-gold tracking-wider">{step.time}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
