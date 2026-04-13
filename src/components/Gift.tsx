"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { Copy, CheckCircle2 } from "lucide-react";

export function Gift() {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const handleCopy = (text: string, bank: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(bank);
    setTimeout(() => setCopiedBank(null), 3000);
  };

  return (
    <section className="py-24 md:py-32 px-6 flex justify-center bg-surface-lowest relative">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-primary mx-auto mb-6"></div>
          <p className="text-primary font-label tracking-[0.3em] text-[10px] uppercase mb-4">Wedding Gift</p>
          <h2 className="text-4xl md:text-5xl font-display text-on-surface mb-6">Send a Gift</h2>
          <p className="text-outline-variant font-body italic max-w-md mx-auto">
            Your blessing is a gift itself, but if you wish to send a token of love, you may use the details below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {weddingData.gift.map((gift, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * idx }}
              className="bg-surface-container border border-outline-variant/30 p-8 flex flex-col items-center text-center relative group overflow-hidden"
            >
              <div className="absolute top-0 w-full h-[1px] bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-display text-on-surface mb-6">{gift.bank}</h3>
              <p className="text-xl font-label tracking-widest text-primary mb-2">{gift.accountNumber}</p>
              <p className="text-sm font-body text-outline-variant uppercase tracking-wider mb-8">a.n. {gift.accountName}</p>

              <button
                onClick={() => handleCopy(gift.accountNumber, gift.bank)}
                className="mt-auto flex items-center gap-2 px-6 py-3 border border-primary/40 text-[10px] font-label uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
              >
                {copiedBank === gift.bank ? (
                  <>
                    <CheckCircle2 size={14} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy Number
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
