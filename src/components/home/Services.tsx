"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Globe, Sparkles } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

const services = [
  {
    title: "Digital Products",
    description: "End-to-end software development for ambitious startups and enterprises.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Web Platforms",
    description: "High-performance marketing websites built on modern architectures.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "UI/UX Design",
    description: "Stunning, conversion-optimized interfaces that command attention.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "AI Integration",
    description: "Intelligent features that supercharge your product capabilities.",
    icon: <Sparkles className="w-8 h-8" />,
  }
];

export function Services() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
              <TextReveal text="CAPABILITIES" />
            </h2>
            <p className="text-white/50 text-xl max-w-lg">
              We offer a wide range of creative and strategic services for remarkable brands and organizations.
            </p>
          </div>
          <button className="text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2 relative z-10">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Infinite Carousel from Left to Right */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex gap-8 px-4 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Duplicate the array to create a seamless infinite loop */}
          {[...services, ...services, ...services].map((service, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] shrink-0 bg-black border border-white/10 p-8 shadow-xl shadow-white/5 group/card hover:bg-white/5 hover:shadow-2xl hover:shadow-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-white/5 text-white group-hover/card:bg-accent group-hover/card:text-white transition-colors duration-500 rounded-lg">
                  {service.icon}
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/card:border-accent group-hover/card:bg-accent transition-all duration-500">
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-500" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">{service.title}</h3>
              <p className="text-white/50 text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for Smooth Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
