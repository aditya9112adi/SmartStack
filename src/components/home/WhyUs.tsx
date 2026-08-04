"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

const benefits = [
  "Senior-level talent exclusively",
  "Transparent, fixed-price contracts",
  "Direct communication with engineers",
  "Design-led development process",
  "Performance-obsessed engineering",
  "Full ownership of source code"
];

export function WhyUs() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              <TextReveal text="NOT YOUR" />
              <br />
              <TextReveal text="AVERAGE" delay={0.1} />
              <br />
              <TextReveal text="AGENCY" delay={0.2} className="text-accent" />
            </h2>
            <p className="text-xl text-white/50 leading-relaxed max-w-md">
              We cut the bloat, middle-management, and corporate jargon. You get direct access to top-tier designers and developers who actually care about your product.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-8">The SmartStack Difference</h3>
            <ul className="space-y-6 relative z-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <CheckCircle2 className="text-accent w-6 h-6 shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
