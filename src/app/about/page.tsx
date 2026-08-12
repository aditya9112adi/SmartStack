import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Aditya Kshirsagar",
  description: "Learn more about SmartStack Software Solution, our mission, and our founder Aditya Kshirsagar.",
};

export default function Page() {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-8 uppercase">
            We are <br /> SmartStack Software Solution.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            A premium digital agency dedicated to engineering world-class software, seamless user experiences, and scalable solutions for ambitious brands.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image 
                  src="/founder.jpg" 
                  alt="Aditya Kshirsagar - Founder of SmartStack Software Solution" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center p-6 hidden md:flex z-10">
                <p className="text-white dark:text-slate-900 text-xs font-bold uppercase tracking-widest text-center leading-tight">
                  Est.<br/>2026
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 lg:pl-12">
              <div className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-200 text-xs font-bold tracking-widest uppercase mb-6">
                Leadership
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                Aditya Kshirsagar
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-mono mb-8 uppercase tracking-wider">
                Founder & CEO
              </p>
              
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
                <p>
                  As the driving force behind SmartStack Software Solution, Aditya Kshirsagar founded the agency with a singular vision: to bridge the gap between stunning design and robust, scalable engineering.
                </p>
                <p>
                  Under his leadership, SmartStack Software Solution has grown from a boutique development studio into a comprehensive digital powerhouse. Aditya's expertise in full-stack architecture and his uncompromising standards for user experience have helped dozens of startups and enterprises transform their digital presence.
                </p>
                <p>
                  "We don't just build websites; we engineer digital platforms that serve as the foundation for our clients' business growth. Every line of code and every pixel is crafted with intent."
                </p>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors group"
              >
                Work with us
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
