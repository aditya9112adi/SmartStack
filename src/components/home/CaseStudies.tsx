"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";

const caseStudies = [
  {
    title: "GlobalFin",
    description: "Reimagining the digital banking experience for 2M+ users across Europe.",
    metrics: ["+45% Conversion", "2.1M Active Users", "4.9 App Store"],
  },
  {
    title: "EcoLogistics",
    description: "An AI-powered supply chain platform reducing carbon footprint by 30%.",
    metrics: ["-30% Emissions", "$4M Saved", "12k Deliveries/day"],
  },
];

export function CaseStudies() {
  return (
    <section className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
            <TextReveal text="IN-DEPTH" />
            <br />
            <TextReveal text="STUDIES" delay={0.1} />
          </h2>
          <p className="text-white/50 text-xl max-w-sm">
            Detailed looks into how we solve complex business problems through design and engineering.
          </p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group cursor-pointer"
            >
              <div className={`relative aspect-[4/3] bg-white/5 overflow-hidden ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
                <motion.div
                  className="w-full h-full bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>

              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 group-hover:text-accent transition-colors duration-500">
                  {study.title}
                </h3>
                <p className="text-xl text-white/50 leading-relaxed mb-12">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-12 border-t border-white/10 pt-8">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-sm font-bold tracking-widest uppercase text-white/40 mb-2">Metric 0{i+1}</p>
                      <p className="text-lg md:text-xl font-bold uppercase">{metric.split(" ")[0]}</p>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center text-sm font-bold tracking-widest uppercase group-hover:text-accent transition-colors">
                  Read Case Study
                  <ArrowRight className="w-5 h-5 ml-4 transform group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
