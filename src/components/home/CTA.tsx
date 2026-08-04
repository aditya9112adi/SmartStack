"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export function CTA() {
  return (
    <section className="py-40 bg-accent text-white relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-10 mix-blend-overlay">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-6xl md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.85] mb-12">
          <TextReveal text="READY TO" />
          <br />
          <TextReveal text="BUILD?" delay={0.1} />
        </h2>
        
        <p className="text-2xl md:text-3xl text-white/80 font-medium mb-16 max-w-2xl">
          Let's create something extraordinary together.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-12 py-6 rounded-full text-lg font-bold tracking-widest uppercase flex items-center gap-4 group"
        >
          Start a Project
          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
