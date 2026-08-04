"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Work", href: "/portfolio" },
  { name: "Agency", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden bg-white">
              <Image 
                src="/logo.png" 
                alt="SmartStack Logo" 
                fill 
                sizes="40px"
                className="object-contain p-1 filter grayscale" 
              />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase ml-2">
              SmartStack<span className="text-xs align-top">®</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-widest uppercase text-white/80 hover:text-white transition-colors relative group overflow-hidden"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ y: -20 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                >
                  {link.name}
                </motion.span>
                <motion.span
                  className="absolute left-0 top-full inline-block text-accent"
                  whileHover={{ y: -20 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden text-white p-2 z-50 relative mix-blend-difference"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white hover:text-accent transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
