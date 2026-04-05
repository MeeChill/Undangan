"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { MapPin } from "lucide-react";

export function Details() {
  return (
    <section className="py-24 md:py-32 px-6 flex justify-center bg-brand-navy">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 lg:gap-24">
        {[weddingData.events.akad, weddingData.events.resepsi].map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="flex flex-col items-center text-center relative p-12 border border-brand-gold/10 bg-brand-navy-light/10"
          >
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
            
            <MapPin className="w-6 h-6 text-brand-gold/50 mb-8" />
            <h3 className="text-3xl md:text-4xl font-serif text-brand-gold mb-8">{event.title}</h3>
            
            <div className="space-y-6 w-full text-brand-cream/80 font-sans tracking-wide text-sm md:text-base mb-10 z-10">
              <div>
                <p className="font-medium text-brand-cream mb-1">{event.venueName}</p>
                <p className="text-[12px] opacity-70 leading-relaxed max-w-xs mx-auto">{event.address}</p>
              </div>
            </div>

            <a 
              href={event.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto z-10 px-6 py-3 border border-brand-gold/30 uppercase text-[10px] tracking-[0.2em] text-brand-gold hover:bg-brand-gold/5 transition-colors duration-300 w-full md:w-auto"
            >
              Open in Google Maps
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
