"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep dive into your brand, audience, and goals.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Architecture, user journeys, and technical planning.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Wireframes, high-fidelity UI, and prototyping.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Clean code, scalable architecture, and CMS integration.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "QA testing, performance optimization, and deployment.",
  },
];

export function Process() {
  return (
    <section className="py-32 bg-white text-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-24">
          <TextReveal text="HOW WE" />
          <br />
          <TextReveal text="WORK" delay={0.1} />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-sm font-mono tracking-widest text-black/40 mb-6">
                [{step.num}]
              </div>
              
              <div className="w-full h-[2px] bg-black/10 mb-8 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 bg-black"
                />
              </div>

              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-black/60 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
