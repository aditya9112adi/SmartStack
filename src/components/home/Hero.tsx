"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black pt-20 overflow-hidden">
      
      {/* Background Visual (Locomotive style huge image/video or just stark color) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,1)_100%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full justify-center">
        
        {/* Top small text */}
        <div className="overflow-hidden mb-8 md:mb-16">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="flex items-center gap-4 text-white/60 font-mono text-sm tracking-widest uppercase"
          >
            <span className="w-12 h-px bg-white/30" />
            <span>Digital-First Design Agency</span>
          </motion.div>
        </div>

        {/* Massive Typography Hero */}
        <div className="max-w-[1200px]">
          <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase text-white mb-8">
            <TextReveal text="WE CRAFT" delay={1.6} />
            <br />
            <TextReveal text="DIGITAL" delay={1.7} />
            <br />
            <span className="flex items-center gap-4 md:gap-8">
              <TextReveal text="EXPERIENCES" delay={1.8} className="text-accent" />
            </span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="max-w-sm"
          >
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
              We help startups, SMEs, and enterprises build world-class websites, web applications, and scalable digital products.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2, type: "spring" }}
            className="mt-8 md:mt-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-black flex items-center justify-center group hover:bg-accent hover:text-white transition-colors duration-500"
          >
            <span className="text-sm font-bold tracking-widest uppercase flex flex-col items-center gap-2">
              Explore
              <ArrowDownRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
