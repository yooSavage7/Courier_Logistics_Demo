"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck, Phone, ChevronDown, User } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "COMPANY INFORMATION", href: "#about", hasDropdown: true },
  { label: "OUR SERVICES", href: "#services", hasDropdown: true },
  { label: "HELP CENTER", href: "#contact", hasDropdown: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#0f172a] transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/30" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-[#2563eb] rounded-md flex items-center justify-center">
              <Truck className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-base tracking-wide uppercase">CLASSY</span>
              <span className="text-slate-400 text-[9px] font-medium tracking-[0.12em] uppercase">Courier Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-slate-300 hover:text-white text-xs font-semibold tracking-wide transition-colors whitespace-nowrap"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+923066881283" className="flex items-center gap-2 text-slate-300 hover:text-white text-xs font-medium transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +92-306-6881283
            </a>
            <Link
              href="/track"
              className="flex items-center gap-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold px-4 py-2 rounded-md transition-colors"
            >
              <User className="w-3.5 h-3.5" />
              CLIENT LOGIN
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-300" aria-label="Toggle menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1e293b] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-slate-300 text-sm font-semibold py-2 border-b border-white/10">
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 text-slate-400 text-sm pt-1">
                <Phone className="w-4 h-4" />
                +92-306-6881283
              </div>
              <Link href="/track" className="bg-[#2563eb] text-white text-sm font-bold px-4 py-2 rounded-md text-center mt-1">
                CLIENT LOGIN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
