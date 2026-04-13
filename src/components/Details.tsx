"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { MapPin, Calendar, Clock } from "lucide-react";

export function Details() {
  return (
    <section className="py-32 md:py-48 px-6 flex justify-center bg-surface-lowest relative">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
      <div className="max-w-6xl w-full flex flex-col gap-32">
        {[weddingData.events.akad, weddingData.events.resepsi].map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className={`flex flex-col relative bg-surface-container w-full max-w-2xl ${i % 2 !== 0 ? 'self-end' : 'self-start'} shadow-ambient group hover:bg-surface-bright transition-colors duration-700 ease-out`}
          >
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
            
            <div className="p-10 md:p-16 flex flex-col items-start text-left z-10 w-full">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-10 h-[1px] bg-gradient-primary opacity-50"></div>
                <p className="font-label tracking-[0.2em] text-[10px] text-primary uppercase">{event.title}</p>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-display text-on-surface mb-8 tracking-tight">{event.venueName}</h3>
              
              <div className="space-y-6 w-full text-on-surface/70 font-body tracking-wide lg:text-lg mb-12">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <p className="leading-relaxed">{event.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <p className="leading-relaxed">{event.time}</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <p className="leading-relaxed max-w-md">{event.address}</p>
                </div>
              </div>

              <a 
                href={event.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-4 outline outline-1 outline-outline-variant/40 uppercase font-label text-[10px] tracking-[0.2em] text-primary hover:bg-surface-bright hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Buka Peta
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

