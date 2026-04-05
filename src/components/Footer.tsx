"use client";

import { weddingData } from "@/data/weddingData";
import { CalendarHeart, Map, Clock, Navigation } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 md:py-32 text-center relative overflow-hidden flex flex-col items-center justify-center bg-brand-navy px-6">
      <div className="relative z-10 w-full max-w-xl">
        <h2 className="text-xl md:text-2xl font-serif text-brand-gold mb-8">{weddingData.groom} & {weddingData.bride}</h2>
        <p className="text-brand-cream/80 text-sm md:text-base font-serif italic mb-16">
          {weddingData.footerMessage}
        </p>
        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-brand-cream/40 px-4">
          <p>© {new Date().getFullYear()} {weddingData.groom} & {weddingData.bride}. Crafted for the midnight gala.</p>
          <div className="mt-4 flex gap-4 justify-center">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-navy border-t border-brand-gold/10 flex justify-around items-center py-4 px-6 z-50 md:hidden pb-safe">
        <a href="#hero" className="flex flex-col items-center text-brand-gold/50 hover:text-brand-gold transition-colors">
          <CalendarHeart size={18} className="mb-1" />
          <span className="text-[8px] uppercase tracking-wider">Event</span>
        </a>
        <a href="#timeline" className="flex flex-col items-center text-brand-gold/50 hover:text-brand-gold transition-colors">
          <Clock size={18} className="mb-1" />
          <span className="text-[8px] uppercase tracking-wider">Schedule</span>
        </a>
      </div>
    </footer>
  );
}
