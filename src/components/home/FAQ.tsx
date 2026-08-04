"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most custom web platforms take 8-12 weeks from strategy to launch. Complex web applications can take 3-6 months. We work in aggressive, focused sprints to deliver faster than traditional agencies.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. In fact, many of our best case studies are from seed to Series C startups where speed, quality, and striking design are essential for fundraising and growth.",
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer both fixed-price project contracts and dedicated team retainers. We'll recommend the best structure during our initial discovery call based on your needs.",
  },
  {
    question: "Will we own the source code?",
    answer: "100%. Upon project completion and final payment, all intellectual property, design assets, and source code belong entirely to you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white text-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
              <TextReveal text="COMMON" />
              <br />
              <TextReveal text="QUESTIONS" delay={0.1} />
            </h2>
            <p className="text-black/50 text-lg">
              Everything you need to know about how we work, pricing, and timelines.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-black/10">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className="text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors pr-8">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-black/40 group-hover:text-accent transition-colors">
                      {openIndex === index ? <Minus size={32} /> : <Plus size={32} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-xl text-black/60 leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
