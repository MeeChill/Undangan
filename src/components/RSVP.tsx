"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="py-24 md:py-32 px-6 flex flex-col items-center relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 bg-brand-navy z-0 hidden md:block">
      </div>

      <div className="relative z-10 max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-brand-gold font-sans tracking-[0.3em] text-[10px] uppercase mb-4 text-center">Join Us</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-cream mb-4">RSVP</h2>
        </motion.div>

        <div className="bg-brand-navy-light/20 sm:border border-brand-gold/10 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 mb-2">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-brand-gold/30 px-0 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="Your name" />
                </div>
                
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 mb-2">Number of Guests</label>
                  <select className="w-full bg-transparent border-b border-brand-gold/30 px-0 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer text-sm">
                    {[1, 2, 3].map(n => <option key={n} value={n} className="bg-brand-navy">{n}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 mb-2">Will you attend?</label>
                  <select required className="w-full bg-transparent border-b border-brand-gold/30 px-0 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer text-sm">
                    <option value="yes" className="bg-brand-navy">Joyfully accept</option>
                    <option value="no" className="bg-brand-navy">Regretfully decline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 mb-2">Message</label>
                  <textarea rows={2} className="w-full bg-transparent border-b border-brand-gold/30 px-0 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors resize-none text-sm" placeholder="Leave a wish..."></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-brand-gold text-brand-navy font-medium tracking-[0.2em] uppercase text-[11px] py-4 hover:bg-brand-gold-muted transition-colors duration-300">
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
                className="text-center flex flex-col items-center justify-center h-full min-h-[350px]"
              >
                <h3 className="text-2xl font-serif text-brand-gold mb-4">Thank You</h3>
                <p className="text-brand-cream/80 leading-relaxed font-sans font-light text-sm">Your response has been received.<br/>We look forward to celebrating with you.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
