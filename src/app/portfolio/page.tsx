import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const allProjects = [
  {
    title: "Hospital Management System",
    category: "Healthcare ERP",
    tech: "Next.js, Node.js, PostgreSQL",
    image: "bg-blue-200 dark:bg-blue-900/40",
  },
  {
    title: "E-Commerce Platform",
    category: "Retail",
    tech: "React, Shopify API, Stripe",
    image: "bg-emerald-200 dark:bg-emerald-900/40",
  },
  {
    title: "Business Dashboard",
    category: "Analytics",
    tech: "Vue.js, Python, MongoDB",
    image: "bg-purple-200 dark:bg-purple-900/40",
  },
  {
    title: "Hotel Booking App",
    category: "Hospitality",
    tech: "React Native, Firebase",
    image: "bg-orange-200 dark:bg-orange-900/40",
  },
  {
    title: "Law Firm Website",
    category: "Corporate",
    tech: "Next.js, Tailwind, CMS",
    image: "bg-slate-200 dark:bg-slate-800",
  },
  {
    title: "School ERP System",
    category: "Education",
    tech: "Angular, Java Spring, MySQL",
    image: "bg-teal-200 dark:bg-teal-900/40",
  },
  {
    title: "Real Estate Portal",
    category: "Real Estate",
    tech: "Next.js, Supabase, Vercel",
    image: "bg-indigo-200 dark:bg-indigo-900/40",
  },
  {
    title: "AI Chat Assistant",
    category: "AI & ML",
    tech: "Python, LangChain, OpenAI API",
    image: "bg-pink-200 dark:bg-pink-900/40",
  }
];

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View our selected work and case studies for leading brands, startups, and enterprises.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            Our Work
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A showcase of digital products, platforms, and applications we've built for our partners around the globe.
          </p>
        </div>

        {/* Filter Buttons (Placeholder) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Web Apps", "Mobile Apps", "AI Solutions", "E-Commerce", "Corporate"].map((cat, i) => (
            <button 
              key={i}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0 
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group min-h-[350px] ${project.image}`}
            >
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wider uppercase mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-200 text-sm mb-6 font-mono">{project.tech}</p>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-full px-3">
                      <Code className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            Load More Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
