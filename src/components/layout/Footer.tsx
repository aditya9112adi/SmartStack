"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TwitterLogo, LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Massive CTA */}
        <div className="mb-24">
          <Link href="/contact" className="group block">
            <h2 className="text-7xl md:text-[12vw] font-bold tracking-tighter uppercase leading-none group-hover:text-accent transition-colors duration-500">
              <TextReveal text="LET'S" />
              <br />
              <div className="flex items-center gap-4 md:gap-12">
                <TextReveal text="TALK" delay={0.2} />
                <ArrowRight className="w-16 h-16 md:w-32 md:h-32 transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </h2>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden bg-white">
                <Image 
                  src="/logo.png" 
                  alt="SmartStack Logo" 
                  fill 
                  sizes="32px"
                  className="object-contain p-0.5 filter grayscale" 
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase">
                SmartStack®
              </span>
            </Link>
            <p className="text-white/50 text-lg max-w-sm">
              Digital-first design agency crafting premium web experiences for remarkable brands.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono tracking-widest uppercase text-xs text-white/50 mb-6">Socials</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors">Instagram</Link></li>
              <li><Link href="#" className="text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors">Twitter</Link></li>
              <li><Link href="#" className="text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors">GitHub</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono tracking-widest uppercase text-xs text-white/50 mb-6">Offices</h4>
            <address className="not-italic text-lg text-white/80 space-y-2">
              <p>123 Digital Avenue</p>
              <p>Tech District, NY 10001</p>
              <p className="pt-4">hello@smartstack.in</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-mono tracking-widest uppercase text-white/50">
          <p>©{currentYear} SMARTSTACK. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
