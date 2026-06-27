"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#rate-inquiry", label: "Rate Inquiry" },
  { href: "#about", label: "About Us" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo - Red CLASSY with airplane */}
          <Link href="#home" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 6L20 12L22 6L28 6Z" fill="#b91c1c"/>
                <path d="M8 22L16 16L14 22L8 22Z" fill="#b91c1c" opacity="0.6"/>
                <path d="M4 8L24 4L28 8L8 24L4 8Z" fill="#1e3a8a" opacity="0.9"/>
                <path d="M6 9L22 5.5L26 9L10 22L6 9Z" fill="#b91c1c"/>
                <circle cx="15" cy="14" r="2" fill="white"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[#dc2626] font-black text-xl tracking-tight uppercase leading-none">CLASSY</span>
                <span className="text-slate-600 text-[8.5px] font-semibold tracking-[0.12em] uppercase">CLASSY GROUP OF LOGISTICS</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-[#dc2626] text-sm font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#login"
              className="px-5 py-2 text-sm font-semibold text-[#dc2626] border border-[#dc2626] rounded-md hover:bg-red-50 transition-colors"
            >
              Login
            </Link>
            <Link
              href="#signup"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#dc2626] rounded-md hover:bg-[#b91c1c] transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-700 text-sm font-medium py-2 border-b border-slate-100"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-2">
                <Link href="#login" className="flex-1 text-center px-4 py-2 text-sm font-semibold text-[#dc2626] border border-[#dc2626] rounded-md">
                  Login
                </Link>
                <Link href="#signup" className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white bg-[#dc2626] rounded-md">
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
