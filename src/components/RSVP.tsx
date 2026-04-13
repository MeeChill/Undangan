"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-32 md:py-48 px-6 flex flex-col items-center relative overflow-hidden bg-surface-lowest">
      <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col md:flex-row items-stretch shadow-ambient bg-surface-container/80 backdrop-blur-md">
        
        {/* Left Side: Editorial Content */}
        <div className="p-10 md:p-16 flex flex-col justify-between w-full md:w-5/12 bg-surface-lowest/50 border-r border-outline-variant/10">
           <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="text-primary font-label tracking-[0.3em] text-[10px] uppercase mb-6">RSVP</p>
            <h2 className="text-4xl lg:text-6xl font-display text-on-surface mb-8 leading-[1.1] tracking-tighter">Konfirmasi <br/>Kehadiran</h2>
            <p className="font-body text-base text-outline-variant italic font-light border-l border-primary/50 pl-4 mt-8 mb-8">Mohon konfirmasi kehadiran Anda melalui form ini atau WhatsApp.</p>
            
            <div className="space-y-4">
              {weddingData.rsvpWhatsApp.map((contact) => (
                <a 
                  key={contact.number}
                  href={`https://wa.me/${contact.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[10px] font-label tracking-[0.2em] text-primary uppercase hover:opacity-70 transition-opacity"
                >
                  {contact.name}: {contact.number.replace('62', '0')}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="p-10 md:p-16 w-full md:w-7/12">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                <div className="relative group">
                  <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.2em] font-label text-outline-variant group-focus-within:text-primary transition-colors">Nama Lengkap</label>
                  <input required type="text" className="w-full bg-transparent border-b border-outline-variant/40 px-0 py-2 text-on-surface font-body outline-none focus:border-b-[2px] focus:border-primary transition-all text-base" placeholder="" />
                </div>
                
                <div className="relative group">
                  <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.2em] font-label text-outline-variant group-focus-within:text-primary transition-colors">Jumlah Tamu</label>
                  <select className="w-full bg-transparent border-b border-outline-variant/40 px-0 py-2 text-on-surface font-body outline-none focus:border-b-[2px] focus:border-primary transition-all appearance-none cursor-pointer text-base rounded-none">
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n} className="bg-surface-lowest">{n}</option>)}
                  </select>
                </div>

                <div className="relative group">
                  <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.2em] font-label text-outline-variant group-focus-within:text-primary transition-colors">Apakah Anda akan hadir?</label>
                  <select required className="w-full bg-transparent border-b border-outline-variant/40 px-0 py-2 text-on-surface font-body outline-none focus:border-b-[2px] focus:border-primary transition-all appearance-none cursor-pointer text-base rounded-none">
                    <option value="yes" className="bg-surface-lowest">Ya, Saya akan hadir</option>
                    <option value="no" className="bg-surface-lowest">Maaf, Saya tidak bisa hadir</option>
                  </select>
                </div>

                <div className="relative group">
                  <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.2em] font-label text-outline-variant group-focus-within:text-primary transition-colors">Pesan</label>
                  <textarea rows={2} className="w-full bg-transparent border-b border-outline-variant/40 px-0 py-2 text-on-surface font-body outline-none focus:border-b-[2px] focus:border-primary transition-all resize-none text-base" placeholder=""></textarea>
                </div>

                <div className="relative group pt-4">
                  <button type="submit" className="w-full bg-gradient-primary text-on-primary font-label tracking-[0.2em] uppercase text-[11px] py-5 hover:opacity-90 transition-opacity duration-300 rounded-none shadow-ambient">
                    Konfirmasi Kehadiran
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-left flex flex-col justify-center h-full min-h-[350px]"
              >
                <h3 className="text-4xl font-display text-primary mb-6 tracking-tight">Terkonfirmasi</h3>
                <p className="text-on-surface/80 leading-relaxed font-body font-light text-lg">Kehadiran Anda telah dicatat.<br/>Kami menantikan kehadiran Anda.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

