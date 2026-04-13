"use client";

import { useEffect, useState } from "react";

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
      <div className="flex justify-start gap-4 sm:gap-8 mt-4 text-outline-variant font-label tracking-[0.2em] text-[10px] sm:text-xs uppercase opacity-80 pt-4 w-full">
        {/* Placeholder */}
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2 w-20 sm:w-24 opacity-0"><span className="text-3xl sm:text-4xl font-display text-primary">000</span><span className="text-[8px] sm:text-[9px]">D</span></div>
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2 w-20 sm:w-24 opacity-0"><span className="text-3xl sm:text-4xl font-display text-primary">00</span><span className="text-[8px] sm:text-[9px]">H</span></div>
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2 w-20 sm:w-24 opacity-0"><span className="text-3xl sm:text-4xl font-display text-primary">00</span><span className="text-[8px] sm:text-[9px]">M</span></div>
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2 w-20 sm:w-24 opacity-0"><span className="text-3xl sm:text-4xl font-display text-primary">00</span><span className="text-[8px] sm:text-[9px]">S</span></div>
      </div>
    );
  }

  return (
    <div className="flex justify-start gap-6 sm:gap-10 mt-4 text-outline-variant font-label tracking-[0.2em] text-[10px] sm:text-xs uppercase opacity-80 pt-4 w-full">
      <div className="flex justify-between items-baseline border-b border-outline-variant/50 pb-2 w-16 sm:w-24">
        <span className="text-3xl sm:text-5xl font-display text-primary -ml-1">{timeLeft.days.toString().padStart(3, '0')}</span>
        <span className="text-[9px] mb-1">D</span>
      </div>
      <div className="flex justify-between items-baseline border-b border-outline-variant/50 pb-2 w-16 sm:w-24">
        <span className="text-3xl sm:text-5xl font-display text-primary -ml-1">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-[9px] mb-1">H</span>
      </div>
      <div className="flex justify-between items-baseline border-b border-outline-variant/50 pb-2 w-16 sm:w-24">
        <span className="text-3xl sm:text-5xl font-display text-primary -ml-1">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-[9px] mb-1">M</span>
      </div>
       <div className="flex justify-between items-baseline border-b border-outline-variant/50 pb-2 w-16 sm:w-24">
        <span className="text-3xl sm:text-5xl font-display text-primary -ml-1">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="text-[9px] mb-1">S</span>
      </div>
    </div>
  );
}
