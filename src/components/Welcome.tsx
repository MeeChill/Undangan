"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export function Welcome() {
  return (
    <section className="py-32 md:py-48 px-6 bg-brand-navy-light/10 relative flex items-center justify-center border-y border-brand-gold/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl text-center px-4"
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-serif leading-relaxed md:leading-relaxed lg:leading-relaxed text-brand-cream/90 italic font-light">
          `{weddingData.welcomeMessage}`
        </p>
      </motion.div>
    </section>
  );
}
