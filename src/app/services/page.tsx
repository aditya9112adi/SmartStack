"use client";

import { motion } from "framer-motion";
import { Services as ServicesGrid } from "@/components/home/Services";
import { CTA } from "@/components/home/CTA";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-0 bg-white dark:bg-slate-900 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6"
          >
            Digital Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We provide end-to-end software development, from product strategy and UI/UX design to robust backend engineering and cloud deployment.
          </motion.p>
        </div>
      </div>
      
      {/* We reuse the grid from home but it handles its own section padding */}
      <div className="-mt-12">
        <ServicesGrid />
      </div>
      
      <CTA />
    </div>
  );
}
