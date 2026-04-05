"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let active = true;

    const calculateTimeLeft = () => {
      if (!active) return;
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Delay the initial state updates by escaping the effect's synchronous execution context.
    // This resolves the "Calling setState synchronously within an effect" warning.
    const initTimeout = setTimeout(() => {
      if (active) {
        setIsMounted(true);
        calculateTimeLeft();
      }
    }, 0);

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      active = false;
      clearTimeout(initTimeout);
      clearInterval(timer);
    };
  }, [targetDate]);

  if (!isMounted) {
    return (
      <div className="flex justify-center gap-4 sm:gap-6 mt-12 text-brand-cream font-sans tracking-widest text-[10px] sm:text-xs uppercase opacity-80 border-t border-brand-gold/20 pt-8 max-w-lg mx-auto">
        {/* Placeholder to prevent layout shift */}
        <div className="flex flex-col items-center w-14 sm:w-16 opacity-0"><span className="text-2xl sm:text-3xl font-serif text-brand-gold mb-2">000</span><span>Days</span></div>
        <div className="flex flex-col items-center w-14 sm:w-16 opacity-0"><span className="text-2xl sm:text-3xl font-serif text-brand-gold mb-2">00</span><span>Hours</span></div>
        <div className="flex flex-col items-center w-14 sm:w-16 opacity-0"><span className="text-2xl sm:text-3xl font-serif text-brand-gold mb-2">00</span><span>Mins</span></div>
        <div className="flex flex-col items-center w-14 sm:w-16 opacity-0"><span className="text-2xl sm:text-3xl font-serif text-brand-gold mb-2">00</span><span>Secs</span></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 sm:gap-6 mt-12 text-brand-cream font-sans tracking-widest text-[10px] sm:text-xs uppercase opacity-80 border-t border-brand-gold/20 pt-8 max-w-lg mx-auto">
      <div className="flex flex-col items-center w-14 sm:w-16">
        <span className="text-2xl sm:text-3xl font-serif text-brand-gold mb-2">{timeLeft.days.toString().padStart(3, '0')}</span>
        <span>Days</span>
      </div>
      <div className="flex flex-col items-center w-14 sm:w-16">
        <span className="text-2xl sm:text-3xl font-serif text-brand-gold mb-2">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span>Hours</span>
      </div>
      <div className="flex flex-col items-center w-14 sm:w-16">
        <span className="text-2xl sm:text-3xl font-serif text-brand-gold mb-2">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span>Mins</span>
      </div>
       <div className="flex flex-col items-center w-14 sm:w-16">
        <span className="text-2xl sm:text-3xl font-serif text-brand-gold mb-2">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span>Secs</span>
      </div>
    </div>
  );
}
