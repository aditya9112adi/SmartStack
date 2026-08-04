"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const countInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          const step = Math.floor(Math.random() * 15) + 1;
          return prev + step > 100 ? 100 : prev + step;
        }
        clearInterval(countInterval);
        return 100;
      });
    }, 50);

    const finishTimeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 1500);

    return () => {
      clearInterval(countInterval);
      clearTimeout(finishTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black text-white px-8 py-12 overflow-hidden"
        >
          {/* Top Info */}
          <div className="w-full flex justify-between text-xs font-mono uppercase tracking-widest text-white/50">
            <span>SmartStack</span>
            <span>Est. 2026</span>
          </div>

          {/* Center Logo & Text Reveal */}
          <div className="flex flex-col items-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-16 h-16 mb-8 bg-white/10 rounded-xl"
            >
              <Image src="/logo.png" alt="Logo" fill sizes="64px" className="object-contain p-2 filter grayscale brightness-200" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              DIGITAL-FIRST AGENCY
            </motion.h1>
          </div>

          {/* Bottom Loading Progress */}
          <div className="w-full flex justify-between items-end">
            <div className="text-sm font-mono tracking-widest text-white/50 uppercase">
              Loading Experience
            </div>
            <div className="text-6xl md:text-8xl font-bold font-mono tracking-tighter">
              {counter}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
