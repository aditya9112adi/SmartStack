"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

const tiers = [
  {
    name: "Growth",
    desc: "For startups and small businesses needing a strong digital presence.",
    price: "Custom",
    features: ["Custom Web Design", "CMS Integration", "SEO Optimization", "Basic Animations", "30 Days Support"],
    highlighted: false,
  },
  {
    name: "Enterprise",
    desc: "For established brands needing complex web applications or massive scale.",
    price: "Custom",
    features: ["Full-Stack Development", "Complex Architecture", "Advanced WebGL/Animations", "Custom Backend/API", "Dedicated Team"],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
              <TextReveal text="ENGAGEMENT" />
              <br />
              <TextReveal text="MODELS" delay={0.1} />
            </h2>
            <p className="text-white/50 text-xl max-w-lg">
              We partner with ambitious companies through flexible, transparent models.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.76, 0, 0.24, 1] }}
              className={`p-10 md:p-16 border ${tier.highlighted ? 'bg-white text-black border-white' : 'bg-transparent border-white/20'} flex flex-col group`}
            >
              <div className="mb-12">
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">{tier.name}</h3>
                <p className={`${tier.highlighted ? 'text-black/60' : 'text-white/50'} text-lg`}>
                  {tier.desc}
                </p>
              </div>

              <div className="mb-12 flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <Check className={`w-5 h-5 ${tier.highlighted ? 'text-accent' : 'text-white/40'}`} />
                      <span className="font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-6 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-sm transition-colors duration-300 ${tier.highlighted ? 'bg-black text-white hover:bg-accent' : 'bg-white text-black hover:bg-accent hover:text-white'}`}>
                Start Project <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
