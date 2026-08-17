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

      {/* Leadership Section */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:mb-24">
            <div className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-200 text-xs font-bold tracking-widest uppercase mb-6">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 dark:text-white max-w-2xl">
              Meet the minds behind SmartStack.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Aditya Kshirsagar */}
            <div className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl mb-6">
                <Image 
                  src="/founder.jpg" 
                  alt="Aditya Kshirsagar - Founder & CEO" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                Aditya Kshirsagar
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mb-4 uppercase tracking-widest">
                Founder & CEO
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Aditya bridges the gap between stunning design and robust engineering, driving SmartStack's vision to build scalable, world-class digital platforms.
              </p>
            </div>

            {/* Shubham Suryawanshi */}
            <div className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl mb-6">
                <Image 
                  src="/shubham.png" 
                  alt="Shubham Suryawanshi - Co-Founder" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                Shubham Suryawanshi
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mb-4 uppercase tracking-widest">
                Co-Founder
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Shubham brings deep technical expertise and operational excellence to the team, ensuring every product meets uncompromising quality standards.
              </p>
            </div>

            {/* Second Co-Founder */}
            <div className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl mb-6">
                <Image 
                  src="/cofounder2.png" 
                  alt="Co-Founder" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                Ankur
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mb-4 uppercase tracking-widest">
                Co-Founder
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Driving innovation and client success, focusing on long-term strategy and building products that generate true business value.
              </p>
            </div>

          </div>

          <div className="mt-20 border-t border-slate-200 dark:border-slate-700 pt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors group"
            >
              Work with our team
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
