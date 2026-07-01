"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck, Phone, User } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Services", href: "#services" },
  { label: "Tracking", href: "/track?v=2" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/40" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "#0e1117" : "transparent",
        height: "66px",
      }}
    >
      <div className="h-full max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #3EA2EE, #3EA2EE)",
              transform: "skewX(-7deg)",
            }}
          >
            <div style={{ transform: "skewX(7deg)" }}>
              <Truck className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-extrabold italic" style={{ fontSize: "19px" }}>
              CLASSY
            </span>
            <span
              className="font-semibold uppercase tracking-widest"
              style={{ fontSize: "8px", color: "#9aa3af", letterSpacing: "0.1em" }}
            >
              COURIER SERVICES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center" style={{ gap: "32px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative transition-colors"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: link.active ? "#ffffff" : "#9aa3af",
                paddingBottom: "4px",
              }}
            >
              {link.label}
              {link.active && (
                <span
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: "2px",
                    backgroundColor: "#3EA2EE",
                    borderRadius: "1px",
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden md:flex items-center" style={{ gap: "38px" }}>
          <a
            href="tel:+447878657440"
            className="flex items-center gap-2 text-white hover:text-[#3EA2EE] transition-colors"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            <Phone className="w-3.5 h-3.5" style={{ color: "#3EA2EE" }} />
            +44 7878 657 440
          </a>
          <Link
            href="#"
            className="flex items-center gap-1.5 text-white transition-colors"
            style={{
              backgroundColor: "#3EA2EE",
              fontSize: "12px",
              fontWeight: 700,
              borderRadius: "8px",
              padding: "9px 18px",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3490D6")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3EA2EE")
            }
          >
            <User className="w-3.5 h-3.5" />
            CLIENT LOGIN
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#9aa3af] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "#0e1117", borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="transition-colors py-2 border-b border-white/10"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: link.active ? "#ffffff" : "#9aa3af",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+447878657440"
                className="flex items-center gap-2 text-white"
                style={{ fontSize: "14px", fontWeight: 600 }}
              >
                <Phone className="w-3.5 h-3.5" style={{ color: "#3EA2EE" }} />
                +44 7878 657 440
              </a>
              <Link
                href="#"
                className="flex items-center justify-center gap-1.5 text-white text-center"
                style={{
                  backgroundColor: "#3EA2EE",
                  fontSize: "12px",
                  fontWeight: 700,
                  borderRadius: "8px",
                  padding: "9px 18px",
                }}
              >
                <User className="w-3.5 h-3.5" />
                CLIENT LOGIN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
