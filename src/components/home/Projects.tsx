"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { TextReveal } from "@/components/ui/text-reveal";

const projects = [
  {
    title: "Project Flow",
    category: "Web Application",
    image: "bg-[url('/project-flow.jpg')] bg-cover bg-center",
    span: "md:col-span-2 md:row-span-2",
    demoLink: "https://project-flow-omega-three.vercel.app/",
  },
  {
    title: "Cinevox",
    category: "Streaming Platform",
    image: "bg-[url('/cinevox.jpg')] bg-cover bg-center",
    span: "md:col-span-1 md:row-span-1",
    demoLink: "https://cinevox-ecru.vercel.app/login",
  },
  {
    title: "Lumina AI",
    category: "SaaS Interface",
    image: "bg-[#222]",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Nova Retail",
    category: "E-Commerce",
    image: "bg-[#0A0A0A]",
    span: "md:col-span-2 md:row-span-1",
  },
];

export function Projects() {
  return (
    <section className="py-32 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
            <TextReveal text="SELECTED" />
            <br />
            <TextReveal text="WORK" delay={0.1} />
          </h2>
          <Link href="/portfolio" className="text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2 group">
            All Projects 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className={`group relative overflow-hidden bg-white/5 border border-white/10 ${project.span}`}
            >
              <div className={`absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700 ${project.image}`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                <div className="flex justify-between items-start transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-mono tracking-widest uppercase bg-white text-black px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.demoLink ? (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold tracking-tighter uppercase mb-2">{project.title}</h3>
                  {project.demoLink ? (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors">
                      Live Demo <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <a href="#" className="inline-flex items-center text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors">
                      View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>

              {/* Default State */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-0 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-3xl font-bold tracking-tighter uppercase">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
