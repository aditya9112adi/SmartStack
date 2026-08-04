"use client";

import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";
import { TextReveal } from "@/components/ui/text-reveal";

const testimonials = [
  {
    quote: "They didn't just build a website; they architected a digital platform that transformed how we do business. The attention to detail is staggering.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
  },
  {
    quote: "Working with SmartStack feels like having an in-house team of world-class engineers. They are incredibly fast, transparent, and push back when needed.",
    author: "David Chen",
    role: "Founder, NovaHealth",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-24 text-center">
          <TextReveal text="CLIENT" />
          <br />
          <TextReveal text="VOICES" delay={0.1} />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col"
            >
              <Quotes className="w-16 h-16 text-black/10 mb-8" weight="fill" />
              <p className="text-2xl md:text-4xl font-medium leading-snug mb-12 flex-1">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-[2px] bg-black" />
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm">{testimonial.author}</p>
                  <p className="text-black/50 text-sm uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
