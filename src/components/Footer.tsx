"use client";

import { weddingData } from "@/data/weddingData";
import { CalendarHeart, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-24 md:py-32 text-center relative overflow-hidden flex flex-col items-center justify-center bg-surface-lowest px-6 border-t border-outline-variant/20">
      <div className="relative z-10 w-full max-w-xl">
        <h2 className="text-4xl font-display text-on-surface mb-8 tracking-tighter">{weddingData.groom} & {weddingData.bride}</h2>
        <div className="bronze-divider w-16 mx-auto mb-10 opacity-40"></div>
        <p className="text-outline-variant text-base font-body italic mb-24 max-w-sm mx-auto">
          {weddingData.footerMessage}
        </p>
        <div className="text-[10px] uppercase font-label tracking-[0.2em] text-on-surface/40 px-4 flex flex-col gap-4 items-center">
          <p>© {new Date().getFullYear()} {weddingData.groom} & {weddingData.bride}. Crafted for the midnight gala.</p>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface-lowest/90 backdrop-blur-md border-t border-outline-variant/20 flex justify-around items-center py-4 px-6 z-50 md:hidden pb-safe">
        <a href="#hero" className="flex flex-col items-center text-outline-variant hover:text-primary transition-colors">
          <CalendarHeart size={18} className="mb-1" />
          <span className="font-label text-[8px] uppercase tracking-wider">Event</span>
        </a>
        <a href="#timeline" className="flex flex-col items-center text-outline-variant hover:text-primary transition-colors">
          <Clock size={18} className="mb-1" />
          <span className="font-label text-[8px] uppercase tracking-wider">Schedule</span>
        </a>
      </div>
    </footer>
  );
}
