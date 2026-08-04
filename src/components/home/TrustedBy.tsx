"use client";

import { motion } from "framer-motion";

const companies = [
  "CLAY", "RAMOTION", "VERCEL", "STRIPE", "FRAMER", 
  "LINEAR", "SUPABASE", "V0", "FINSWEET", "WEBFLOW"
];

export function TrustedBy() {
  return (
    <section className="py-24 bg-black border-y border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-white/40 font-mono text-sm tracking-widest uppercase text-center">
          Trusted by remarkable brands globally
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...companies, ...companies].map((company, index) => (
            <span
              key={index}
              className="mx-8 md:mx-16 text-4xl md:text-6xl font-bold tracking-tighter text-white/20 hover:text-white transition-colors duration-300 uppercase"
            >
              {company}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {[...companies, ...companies].map((company, index) => (
            <span
              key={index}
              className="mx-8 md:mx-16 text-4xl md:text-6xl font-bold tracking-tighter text-white/20 hover:text-white transition-colors duration-300 uppercase"
            >
              {company}
            </span>
          ))}
        </div>
        
        {/* Left and Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
