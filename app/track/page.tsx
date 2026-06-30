"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, RefreshCw, MapPin, Clock, Package,
  Truck, Warehouse, Bike, Home, Globe, Shield, Headphones, CheckCircle
} from "lucide-react";
import Link from "next/link";
import { Truck as TruckIcon, User, Phone, ChevronDown, Menu, X } from "lucide-react";

// ─── Inline Navbar (active on TRACK SHIPMENT) ────────────────────────────────
function TrackNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "HOME", href: "/", active: false },
    { label: "COMPANY INFORMATION", href: "#", active: false, drop: true },
    { label: "OUR SERVICES", href: "#", active: false, drop: true },
    { label: "TRACK SHIPMENT", href: "/track", active: true },
    { label: "HELP CENTER", href: "#", active: false, drop: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-[#2563eb] rounded-md flex items-center justify-center">
              <TruckIcon className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-base tracking-wide uppercase">CLASSY</span>
              <span className="text-slate-400 text-[9px] font-medium tracking-[0.12em] uppercase">Courier Services</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap ${
                  link.active ? "text-white border-b-2 border-[#2563eb] pb-0.5" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {link.drop && <ChevronDown className="w-3 h-3" />}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+923066881283" className="flex items-center gap-2 text-slate-300 text-xs font-medium">
              <Phone className="w-3.5 h-3.5" />
              +92-306-6881283
            </a>
            <a href="#" className="flex items-center gap-1.5 bg-[#2563eb] text-white text-xs font-bold px-4 py-2 rounded-md">
              <User className="w-3.5 h-3.5" />
              CLIENT LOGIN
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-300">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#1e293b] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold py-2 border-b border-white/10 ${link.active ? "text-[#2563eb]" : "text-slate-300"}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Inline Footer ─────────────────────────────────────────────────────────────
function TrackFooter() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">About Company</h4>
            <div className="w-8 h-0.5 bg-[#2563eb] mb-4" />
            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              Your one-stop solution to all your logistical needs. Headquartered in United Kingdom, we have been providing quality and professional International and Domestic Courier &amp; Cargo services for over a decade.
            </p>
            <div className="flex gap-3">
              {["f", "t", "in", "p"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 border border-slate-700 rounded-full flex items-center justify-center hover:border-[#2563eb] text-slate-400 text-xs font-bold hover:text-[#2563eb] transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Usefull Links</h4>
            <div className="w-8 h-0.5 bg-[#2563eb] mb-4" />
            <ul className="space-y-2.5">
              {["Home", "About Us", "Account", "Tracking Details", "Careers"].map((l) => (
                <li key={l}><Link href="#" className="text-slate-400 text-xs hover:text-[#2563eb] transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Our Services</h4>
            <div className="w-8 h-0.5 bg-[#2563eb] mb-4" />
            <ul className="space-y-2.5">
              {["Air Freight", "Cash on Delivery", "International Services", "Overland", "Overnight", "Sea Freight"].map((s) => (
                <li key={s}><Link href="#" className="text-slate-400 text-xs hover:text-[#2563eb] transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Help Center</h4>
            <div className="w-8 h-0.5 bg-[#2563eb] mb-4" />
            <ul className="space-y-2.5">
              {["Contact Us / Customer Service", "Developer Portal", "Digital Partners and Integrations", "Agent Login", "Client Login"].map((s) => (
                <li key={s}><Link href="#" className="text-slate-400 text-xs hover:text-[#2563eb] transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-500 text-xs">
            © 2021-2025 <span className="text-[#2563eb] font-semibold">Classy Courier Services</span>. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Tracking Data ─────────────────────────────────────────────────────────────
const TRACKING = {
  number: "PK987654321",
  status: "In Transit",
  origin: "Sialkot, Pakistan",
  destination: "Sharjah, UAE",
  estDelivery: "28 June 2026",
  progress: 50,
  currentLocation: "In transit — near Dubai, UAE",
  updatedAgo: "2 min ago",
  steps: [
    { icon: Package, label: "Booked", sub: "Shipment booked", date: "18 Jun 2026", done: true, active: false },
    { icon: Truck, label: "Picked Up", sub: "Handed to Classy Courier", date: "19 Jun 2026", done: true, active: false },
    { icon: Truck, label: "In Transit", sub: "On the way to destination", date: "21 Jun 2026", done: true, active: true },
    { icon: Warehouse, label: "At Hub", sub: "Destination warehouse", date: "26 Jun 2026", done: false, active: false },
    { icon: Bike, label: "With Courier", sub: "Handed to courier partner", date: "27 Jun 2026", done: false, active: false },
    { icon: Home, label: "Delivered", sub: "Received by recipient", date: "28 Jun 2026", done: false, active: false },
  ],
};

const featureBadges = [
  { icon: Globe, label: "Global Network" },
  { icon: Shield, label: "Secure Handling" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Headphones, label: "24/7 Support" },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function TrackPage() {
  const [trackingInput, setTrackingInput] = useState("PK987654321");
  const [showResult, setShowResult] = useState(true);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <>
      <TrackNavbar />

      {/* Page header */}
      <section className="bg-[#0f172a] pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-2"
          >
            Real-Time Tracking
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white mb-6"
          >
            Track Your Shipment
          </motion.h1>
          <div className="flex flex-wrap gap-6">
            {featureBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-300 text-sm">
                <Icon className="w-4 h-4 text-[#2563eb]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row: form + result */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Search card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
            >
              <h2 className="text-xl font-black text-slate-800 mb-2">Track Your Shipment</h2>
              <p className="text-slate-500 text-sm mb-6">Enter your tracking details to get real-time updates on your delivery.</p>

              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Tracking Number
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      placeholder="PK987654321"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                >
                  Track Now →
                </button>
              </form>

              <p className="mt-4 text-slate-400 text-xs flex items-center gap-1.5">
                <span className="text-[#2563eb]">ℹ</span>
                Your tracking number is in the confirmation email.
              </p>
            </motion.div>

            {/* Result card */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-black text-slate-800">Shipment Found</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <RefreshCw className="w-3 h-3" />
                    Last updated: {TRACKING.updatedAgo}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5 pb-5 border-b border-slate-100">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Tracking Number</p>
                    <p className="font-black text-slate-800 text-sm">{TRACKING.number}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Status</p>
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200">
                      <Truck className="w-3 h-3" />
                      {TRACKING.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Origin</p>
                    <p className="font-bold text-slate-800 text-sm leading-snug">{TRACKING.origin}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Destination</p>
                    <p className="font-bold text-slate-800 text-sm leading-snug">{TRACKING.destination}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Est. Delivery</p>
                    <p className="font-bold text-slate-800 text-sm leading-snug">{TRACKING.estDelivery}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Delivery Progress</p>
                    <span className="text-[#2563eb] text-xs font-black">{TRACKING.progress}% complete</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${TRACKING.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[#2563eb] rounded-full"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#2563eb]" />
                    <span>Current location: <span className="font-bold text-slate-700">{TRACKING.currentLocation}</span></span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3" />
                    Updated {TRACKING.updatedAgo}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Tracking History */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-black text-slate-800 text-lg">Tracking History</h3>
              <span className="text-slate-400 text-xs font-semibold">
                Step <span className="text-[#2563eb] font-black">3</span> of 6
              </span>
            </div>

            {/* Timeline */}
            <div className="relative mb-8">
              {/* Progress bar */}
              <div className="absolute top-5 left-5 right-5 h-0.5 bg-slate-200">
                <div className="h-full bg-[#2563eb] w-[38%]" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 relative z-10">
                {TRACKING.steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex flex-col items-center text-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                          step.active
                            ? "bg-[#2563eb] border-[#2563eb] text-white shadow-lg shadow-blue-200"
                            : step.done
                            ? "bg-[#2563eb] border-[#2563eb] text-white"
                            : "bg-white border-slate-300 text-slate-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className={`text-xs font-black ${step.active ? "text-[#2563eb]" : step.done ? "text-slate-700" : "text-slate-400"}`}>
                          {step.label}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-tight">{step.sub}</p>
                        <p className={`text-[10px] font-bold mt-0.5 ${step.active ? "text-[#2563eb]" : step.done ? "text-slate-600" : "text-slate-300"}`}>
                          {step.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Status message */}
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
              <Truck className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
              <p className="text-slate-600 text-sm">
                <span className="font-black text-slate-800">In Transit</span> — Your shipment has left the origin facility and is on its way to the destination hub.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <TrackFooter />
    </>
  );
}
