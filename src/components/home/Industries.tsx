"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, Stethoscope, Landmark, Plane, GraduationCap, ArrowUpRight } from "lucide-react";

const industries = [
  { num: "01", name: "Fintech", desc: "Secure, scalable platforms for the next generation of finance.", icon: <Landmark className="w-8 h-8 md:w-12 md:h-12" /> },
  { num: "02", name: "Healthcare", desc: "HIPAA-compliant applications that put patient experience first.", icon: <Stethoscope className="w-8 h-8 md:w-12 md:h-12" /> },
  { num: "03", name: "E-Commerce", desc: "High-conversion storefronts and custom inventory systems.", icon: <ShoppingBag className="w-8 h-8 md:w-12 md:h-12" /> },
  { num: "04", name: "Real Estate", desc: "Immersive property platforms with advanced search capabilities.", icon: <Building2 className="w-8 h-8 md:w-12 md:h-12" /> },
  { num: "05", name: "Travel", desc: "Booking engines and stunning destination showcases.", icon: <Plane className="w-8 h-8 md:w-12 md:h-12" /> },
  { num: "06", name: "EdTech", desc: "Interactive learning management systems built for scale.", icon: <GraduationCap className="w-8 h-8 md:w-12 md:h-12" /> },
];

export function Industries() {
  return (
    <section className="py-32 bg-white text-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
            Industries
          </h2>
          <p className="text-black/50 text-lg max-w-md">
            We bring specialized technical expertise and deep domain knowledge to complex sectors.
          </p>
        </div>
        
        {/* Massive Agency Interactive List */}
        <div className="border-t border-black">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-b border-black/20 hover:border-black cursor-pointer overflow-hidden"
            >
              {/* Hover Background Reveal (Slides up from bottom) */}
              <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 px-4 md:px-8 transition-colors duration-500 group-hover:text-white">
                
                {/* Left: Number & Title */}
                <div className="flex items-start md:items-center gap-8 md:gap-16 mb-6 md:mb-0">
                  <span className="font-mono text-sm tracking-widest text-black/40 group-hover:text-white/40 transition-colors duration-500 hidden md:block">
                    [{industry.num}]
                  </span>
                  <div>
                    <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase transform group-hover:translate-x-4 transition-transform duration-500 ease-out">
                      {industry.name}
                    </h3>
                  </div>
                </div>

                {/* Right: Description & Icon */}
                <div className="flex items-center gap-8 md:gap-16 md:w-1/3 justify-end">
                  <p className="text-sm font-medium leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 hidden md:block text-white/70 text-right">
                    {industry.desc}
                  </p>
                  <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-500 shrink-0 relative overflow-hidden">
                    {/* Default Icon */}
                    <div className="absolute transform group-hover:-translate-y-12 transition-transform duration-500">
                      {industry.icon}
                    </div>
                    {/* Hover Arrow */}
                    <div className="absolute transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 text-accent">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
