"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  RefreshCw,
  MapPin,
  Clock,
  Package,
  PackageOpen,
  Truck,
  Warehouse,
  Bike,
  Home,
  Globe,
  Shield,
  Headphones,
  Info,
  Share2,
  MessageCircle,
  Camera,
} from "lucide-react";
import { Menu, X, Phone, User } from "lucide-react";
import Link from "next/link";

// ─── Inline Navbar ─────────────────────────────────────────────────────────────
function TrackNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "/", active: false },
    { label: "Services", href: "#services", active: false },
    { label: "Tracking", href: "/track", active: true },
    { label: "About Us", href: "#about", active: false },
    { label: "Contact Us", href: "#contact", active: false },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{ backgroundColor: "#0e1117", height: "66px" }}
    >
      <div className="h-full max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #1668c5, #2f86db)",
              transform: "skewX(-7deg)",
            }}
          >
            <div style={{ transform: "skewX(7deg)" }}>
              <Truck className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-white font-extrabold italic"
              style={{ fontSize: "19px" }}
            >
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
          {links.map((link) => (
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
                    backgroundColor: "#2a8af0",
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
            className="flex items-center gap-2 text-white hover:text-[#2a8af0] transition-colors"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            <Phone className="w-3.5 h-3.5" style={{ color: "#2a8af0" }} />
            +44 7878 657 440
          </a>
          <Link
            href="#"
            className="flex items-center gap-1.5 text-white transition-colors"
            style={{
              backgroundColor: "#1668c5",
              fontSize: "12px",
              fontWeight: 700,
              borderRadius: "8px",
              padding: "9px 18px",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1257aa")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1668c5")
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
            style={{
              backgroundColor: "#0e1117",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((link) => (
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
                <Phone className="w-3.5 h-3.5" style={{ color: "#2a8af0" }} />
                +44 7878 657 440
              </a>
              <Link
                href="#"
                className="flex items-center justify-center gap-1.5 text-white text-center"
                style={{
                  backgroundColor: "#1668c5",
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

// ─── Inline Footer ─────────────────────────────────────────────────────────────
function TrackFooter() {
  return (
    <footer style={{ backgroundColor: "#1e2634", color: "#ffffff" }}>
      <div className="max-w-[1280px] mx-auto px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="flex items-center justify-center"
                style={{
                  width: "28px",
                  height: "28px",
                  background: "linear-gradient(135deg, #1668c5, #2f86db)",
                  borderRadius: "6px",
                }}
              >
                <Truck className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-black text-sm uppercase tracking-wide">CLASSY</p>
                <p style={{ fontSize: "8px", color: "#9aa3af", letterSpacing: "0.1em" }} className="uppercase">
                  Courier Services
                </p>
              </div>
            </div>
            <h4
              className="uppercase tracking-wider mb-3"
              style={{ fontWeight: 700, fontSize: "13px", color: "#ffffff" }}
            >
              About Company
            </h4>
            <div style={{ width: "32px", height: "2px", backgroundColor: "#1668c5", marginBottom: "14px" }} />
            <p
              className="leading-relaxed mb-5"
              style={{ fontSize: "12px", color: "#8a93a3" }}
            >
              Your one-stop solution to all your logistical needs. Headquartered in United Kingdom, we have been providing quality and professional International and Domestic Courier &amp; Cargo services for over a decade.
            </p>
            <div className="flex gap-3">
              {[Share2, MessageCircle, Camera].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center transition-colors"
                  style={{
                    width: "32px",
                    height: "32px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "50%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1668c5";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(22,104,197,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  }}
                >
                  <Icon style={{ width: "14px", height: "14px", color: "#8a93a3" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4
              className="uppercase tracking-wider mb-3"
              style={{ fontWeight: 700, fontSize: "13px", color: "#ffffff" }}
            >
              Usefull Links
            </h4>
            <div style={{ width: "32px", height: "2px", backgroundColor: "#1668c5", marginBottom: "14px" }} />
            <ul className="space-y-2.5">
              {["Home", "About Us", "Account", "Tracking Details", "Careers"].map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="transition-colors"
                    style={{ fontSize: "12px", color: "#8a93a3" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2a8af0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#8a93a3")}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4
              className="uppercase tracking-wider mb-3"
              style={{ fontWeight: 700, fontSize: "13px", color: "#ffffff" }}
            >
              Our Services
            </h4>
            <div style={{ width: "32px", height: "2px", backgroundColor: "#1668c5", marginBottom: "14px" }} />
            <ul className="space-y-2.5">
              {["Air Freight", "Cash on Delivery", "International Services", "Overland", "Overnight", "Sea Freight"].map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="transition-colors"
                    style={{ fontSize: "12px", color: "#8a93a3" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2a8af0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#8a93a3")}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h4
              className="uppercase tracking-wider mb-3"
              style={{ fontWeight: 700, fontSize: "13px", color: "#ffffff" }}
            >
              Help Center
            </h4>
            <div style={{ width: "32px", height: "2px", backgroundColor: "#1668c5", marginBottom: "14px" }} />
            <ul className="space-y-2.5">
              {["Contact Us / Customer Service", "Developer Portal", "Digital Partners and Integrations", "Agent Login", "Client Login"].map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="transition-colors"
                    style={{ fontSize: "12px", color: "#8a93a3" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2a8af0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#8a93a3")}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p style={{ fontSize: "12px", color: "#5c6675" }}>
            © 2021-2026{" "}
            <span style={{ color: "#2a8af0", fontWeight: 600 }}>Classy Courier Services</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Step definitions ─────────────────────────────────────────────────────────
type StepStatus = "completed" | "current" | "pending";

const steps: {
  icon: React.ElementType;
  label: string;
  desc: string;
  date: string;
  status: StepStatus;
}[] = [
  { icon: Package,     label: "Booked",      desc: "Shipment booked",         date: "18 Jun 2026", status: "completed" },
  { icon: PackageOpen, label: "Picked Up",   desc: "Handed to Classy",        date: "19 Jun 2026", status: "completed" },
  { icon: Truck,       label: "In Transit",  desc: "En route to destination", date: "21 Jun 2026", status: "current"   },
  { icon: Warehouse,   label: "At Hub",      desc: "Destination warehouse",   date: "26 Jun 2026", status: "pending"   },
  { icon: Bike,        label: "With Courier",desc: "Handed to partner",       date: "27 Jun 2026", status: "pending"   },
  { icon: Home,        label: "Delivered",   desc: "Package delivered",       date: "28 Jun 2026", status: "pending"   },
];

const featureBadges = [
  { icon: Globe,       label: "Global Network" },
  { icon: Shield,      label: "Secure Handling" },
  { icon: Clock,       label: "On-Time Delivery" },
  { icon: Headphones,  label: "24/7 Support" },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function TrackPage() {
  const [trackInput, setTrackInput] = useState("PK987654321");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Static demo — always shows the same result
  };

  return (
    <div style={{ backgroundColor: "#eef1f5", minHeight: "100vh" }}>
      <TrackNavbar />

      {/* ── Dark heading band ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(90deg, #0e1117 0%, #142235 60%, #0e1117 100%)",
          padding: "46px 40px",
          paddingTop: "calc(46px + 66px)",
        }}
      >
        <div className="max-w-[1180px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#5fa8f5",
              marginBottom: "12px",
            }}
          >
            REAL-TIME TRACKING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}
          >
            Track Your Shipment
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center"
            style={{ gap: "32px", marginTop: "16px" }}
          >
            {featureBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon style={{ width: "16px", height: "16px", color: "#2a8af0" }} />
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#9aa3af" }}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <main className="max-w-[1180px] mx-auto" style={{ padding: "44px 40px 70px" }}>

        {/* Row 1: Track Input + Shipment Found */}
        <div
          className="grid gap-6 mb-6"
          style={{ gridTemplateColumns: "0.82fr 1.18fr" }}
        >
          {/* Card A — Track Input */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white"
            style={{
              borderRadius: "18px",
              padding: "36px",
              boxShadow: "0 18px 44px -28px rgba(20,40,80,.40)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "26px",
                fontWeight: 800,
                color: "#12161d",
                marginBottom: "8px",
              }}
            >
              Track Your Shipment
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#5c6675",
                marginBottom: "24px",
                lineHeight: 1.6,
              }}
            >
              Enter your tracking number below to get real-time updates on your shipment.
            </p>

            <form onSubmit={handleTrack}>
              {/* Label */}
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#8a93a3",
                  marginBottom: "8px",
                }}
              >
                TRACKING NUMBER
              </p>

              {/* Input */}
              <div className="relative">
                <Search
                  className="absolute"
                  style={{
                    left: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "16px",
                    height: "16px",
                    color: "#8a93a3",
                  }}
                />
                <input
                  type="text"
                  value={trackInput}
                  onChange={(e) => setTrackInput(e.target.value)}
                  placeholder="e.g. PK987654321"
                  style={{
                    width: "100%",
                    border: "1px solid #e6e9ef",
                    borderRadius: "10px",
                    padding: "14px 16px 14px 44px",
                    fontSize: "15px",
                    color: "#12161d",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#1668c5")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e6e9ef")}
                />
              </div>

              {/* Track button */}
              <button
                type="submit"
                className="w-full text-white font-bold transition-colors"
                style={{
                  backgroundColor: "#1668c5",
                  borderRadius: "9px",
                  padding: "14px",
                  fontSize: "15px",
                  marginTop: "16px",
                  boxShadow: "0 12px 26px -10px rgba(20,100,200,.60)",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1257aa")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1668c5")
                }
              >
                Track Now →
              </button>
            </form>

            {/* Hint */}
            <p
              className="flex items-center gap-2"
              style={{ fontSize: "12px", color: "#9aa3af", marginTop: "14px" }}
            >
              <Info style={{ width: "13px", height: "13px", flexShrink: 0 }} />
              Tracking updates are refreshed every 15 minutes
            </p>
          </motion.div>

          {/* Card B — Shipment Found */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white flex flex-col"
            style={{
              borderRadius: "18px",
              padding: "36px",
              boxShadow: "0 18px 44px -28px rgba(20,40,80,.40)",
            }}
          >
            {/* Top row */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#1f8a5b",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#12161d" }}>
                    Shipment Found
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#8a93a3", marginLeft: "16px" }}>
                  Last updated: 1 Jul 2026, 09:15
                </p>
              </div>
              <RefreshCw
                style={{ width: "16px", height: "16px", color: "#1668c5", cursor: "pointer" }}
              />
            </div>

            {/* Tracking number row */}
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontSize: "12px", color: "#8a93a3" }}>Tracking Number</span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#12161d" }}>
                PK987654321
              </span>
            </div>

            {/* Status chip */}
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2"
                style={{
                  backgroundColor: "#e9f1fb",
                  color: "#1668c5",
                  borderRadius: "999px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                <Truck style={{ width: "14px", height: "14px" }} />
                In Transit
              </span>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #edf0f4", marginBottom: "16px" }} />

            {/* 3-col grid */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8a93a3",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                  }}
                >
                  Origin
                </p>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#12161d" }}>
                  Sialkot, PK
                </p>
                <p style={{ fontSize: "12px", color: "#8a93a3" }}>28 Jun 2026</p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8a93a3",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                  }}
                >
                  Destination
                </p>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#12161d" }}>
                  Sharjah, UAE
                </p>
                <p style={{ fontSize: "12px", color: "#8a93a3" }}>28 Jul 2026 (Est.)</p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8a93a3",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                  }}
                >
                  Est. Delivery
                </p>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#12161d" }}>
                  28 Jul 2026
                </p>
                <p style={{ fontSize: "12px", color: "#8a93a3" }}>Standard Delivery</p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #edf0f4", marginBottom: "16px" }} />

            {/* Delivery Progress */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span style={{ fontSize: "12px", color: "#8a93a3" }}>Delivery Progress</span>
                <span style={{ fontSize: "12px", color: "#8a93a3" }}>50% Complete</span>
              </div>

              {/* Progress bar */}
              <div
                className="w-full overflow-hidden"
                style={{
                  height: "8px",
                  backgroundColor: "#e9f1fb",
                  borderRadius: "999px",
                  marginBottom: "16px",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, #1668c5, #2a8af0)",
                    borderRadius: "999px",
                  }}
                />
              </div>

              {/* Current location */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin style={{ width: "14px", height: "14px", color: "#1668c5" }} />
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#12161d" }}>
                    Dubai International Airport, UAE
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "#9aa3af" }}>
                  Updated: 1 Jul 2026, 09:15
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2 — Tracking History */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-white"
          style={{
            borderRadius: "18px",
            padding: "36px",
            boxShadow: "0 18px 44px -28px rgba(20,40,80,.40)",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h3
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "20px",
                fontWeight: 700,
                color: "#12161d",
              }}
            >
              Tracking History
            </h3>
            <span
              style={{
                backgroundColor: "#e9f1fb",
                color: "#1668c5",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "999px",
                padding: "5px 14px",
              }}
            >
              Step 3 of 6
            </span>
          </div>

          {/* ── Desktop horizontal timeline (md and up) ── */}
          <div className="hidden md:block relative mb-8">
            {/* Background track */}
            <div
              className="absolute"
              style={{
                top: "28px",
                left: "8.33%",
                right: "8.33%",
                height: "3px",
                backgroundColor: "#e2e7ee",
              }}
            />
            {/* Progress line — covers steps 1-3 (left 8.33% to mid of step 3 ≈ 8.33% + 33.33%) */}
            <div
              className="absolute"
              style={{
                top: "28px",
                left: "8.33%",
                width: "33.33%",
                height: "3px",
                background: "linear-gradient(90deg, #1668c5, #2a8af0)",
              }}
            />

            {/* 6 columns */}
            <div className="grid grid-cols-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isCompleted = step.status === "completed";
                const isCurrent   = step.status === "current";
                const isPending   = step.status === "pending";

                return (
                  <div
                    key={step.label}
                    className="flex flex-col items-center text-center gap-3 relative z-10"
                    style={{ paddingTop: "4px" }}
                  >
                    {/* Node */}
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        backgroundColor:
                          isCompleted || isCurrent ? "#1668c5" : "#ffffff",
                        border: isPending ? "2px solid #e2e7ee" : "none",
                        boxShadow:
                          isCompleted || isCurrent
                            ? "0 8px 20px -4px rgba(22,104,197,.5)"
                            : "none",
                        outline: isCurrent
                          ? "4px solid rgba(22,104,197,.18)"
                          : "none",
                        outlineOffset: isCurrent ? "2px" : "0",
                      }}
                    >
                      <Icon
                        style={{
                          width: "22px",
                          height: "22px",
                          color:
                            isCompleted || isCurrent ? "#ffffff" : "#aeb6c2",
                        }}
                      />
                    </div>

                    {/* Label */}
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color:
                          isCompleted || isCurrent ? "#12161d" : "#aeb6c2",
                      }}
                    >
                      {step.label}
                    </span>

                    {/* Description */}
                    <span
                      style={{
                        fontSize: "11.5px",
                        color:
                          isCompleted || isCurrent ? "#5c6675" : "#aeb6c2",
                        lineHeight: 1.4,
                        marginTop: "-8px",
                      }}
                    >
                      {step.desc}
                    </span>

                    {/* Date */}
                    <span
                      style={{
                        fontSize: "11px",
                        color: isCompleted
                          ? "#8a93a3"
                          : isCurrent
                          ? "#1668c5"
                          : "#aeb6c2",
                        marginTop: "-4px",
                      }}
                    >
                      {step.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Mobile vertical stepper (below md) ── */}
          <div className="grid md:hidden mb-8" style={{ gap: "0" }}>
            <div className="relative pl-10">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-0 bottom-0"
                style={{ width: "2px", backgroundColor: "#e2e7ee" }}
              />

              {steps.map((step, i) => {
                const Icon = step.icon;
                const isCompleted = step.status === "completed";
                const isCurrent   = step.status === "current";
                const isPending   = step.status === "pending";

                return (
                  <div
                    key={step.label}
                    className="relative flex items-start gap-4"
                    style={{ paddingBottom: i < steps.length - 1 ? "28px" : "0" }}
                  >
                    {/* Node */}
                    <div
                      className="absolute flex items-center justify-center"
                      style={{
                        left: "-30px",
                        top: "0",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor:
                          isCompleted || isCurrent ? "#1668c5" : "#ffffff",
                        border: isPending ? "2px solid #e2e7ee" : "none",
                        boxShadow:
                          isCompleted || isCurrent
                            ? "0 6px 16px -4px rgba(22,104,197,.5)"
                            : "none",
                        outline: isCurrent ? "3px solid rgba(22,104,197,.18)" : "none",
                        outlineOffset: isCurrent ? "2px" : "0",
                        zIndex: 1,
                      }}
                    >
                      <Icon
                        style={{
                          width: "16px",
                          height: "16px",
                          color:
                            isCompleted || isCurrent ? "#ffffff" : "#aeb6c2",
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div style={{ paddingTop: "4px" }}>
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color:
                            isCompleted || isCurrent ? "#12161d" : "#aeb6c2",
                          marginBottom: "2px",
                        }}
                      >
                        {step.label}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color:
                            isCompleted || isCurrent ? "#5c6675" : "#aeb6c2",
                          marginBottom: "2px",
                        }}
                      >
                        {step.desc}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: isCompleted
                            ? "#8a93a3"
                            : isCurrent
                            ? "#1668c5"
                            : "#aeb6c2",
                        }}
                      >
                        {step.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Blue info strip */}
          <div
            className="flex items-center gap-3"
            style={{
              backgroundColor: "#e9f1fb",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <Truck
              style={{ width: "20px", height: "20px", color: "#1668c5", flexShrink: 0 }}
            />
            <p style={{ fontSize: "14px", fontWeight: 500, color: "#12161d", lineHeight: 1.5 }}>
              Your shipment is currently in transit at Dubai International Airport, UAE. Expected to reach destination hub within 2-3 days.
            </p>
          </div>
        </motion.div>
      </main>

      <TrackFooter />
    </div>
  );
}
