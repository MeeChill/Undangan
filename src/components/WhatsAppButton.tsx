"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export function WhatsAppButton() {
  const primaryContact = weddingData.rsvpWhatsApp[0];

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      href={`https://wa.me/${primaryContact.number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 p-4 bg-surface-container border border-primary/30 rounded-full shadow-ambient text-primary hover:bg-primary hover:text-on-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-lowest group flex items-center justify-center"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 uppercase text-[10px] font-label tracking-widest px-3 py-2 bg-surface-container border border-primary/20 text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none rounded-sm hidden md:block">
        Tanya Sesuatu?
      </span>
    </motion.a>
  );
}

