"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";

const categories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Vercel", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    name: "AI & Data",
    skills: ["OpenAI", "LangChain", "PyTorch", "TensorFlow", "Pinecone", "Hugging Face"],
  },
];

export function TechStack() {
  return (
    <section className="py-32 bg-white text-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-24 text-center">
          <TextReveal text="TECHNOLOGY" />
          <br />
          <TextReveal text="WE USE" delay={0.1} />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold uppercase tracking-wide mb-8 border-b border-black/10 pb-4">
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                    className="text-black/60 font-medium cursor-pointer hover:text-accent transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
