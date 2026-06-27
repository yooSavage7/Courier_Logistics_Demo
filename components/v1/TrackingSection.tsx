"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, RefreshCw, MapPin, Navigation, Calendar, Package, Truck, Home } from "lucide-react";

const SAMPLE_TRACKING = {
  number: "PK987654321",
  status: "In Transit",
  origin: "Islamabad, Pakistan",
  destination: "Dubai, UAE",
  estimatedDelivery: "28 June 2026",
  timeline: [
    { label: "Booked", date: "20 June 2026", icon: Package, done: true, active: false },
    { label: "In Transit", date: "21 June 2026", icon: Truck, done: true, active: true },
    { label: "Out for Delivery", date: "27 June 2026", icon: Navigation, done: false, active: false },
    { label: "Delivered", date: "28 June 2026", icon: Home, done: false, active: false },
  ],
};

export default function TrackingSection() {
  const [trackingInput, setTrackingInput] = useState("PK987654321");
  const [showResult, setShowResult] = useState(true);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <section id="tracking" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-black text-[#0f172a] mb-2">Track Your Shipment</h2>
            <p className="text-slate-500 text-sm mb-8">Enter your tracking details to get real-time updates</p>

            <form onSubmit={handleTrack} className="space-y-4">
              <div>
                <label htmlFor="tracking-number" className="block text-sm font-semibold text-slate-700 mb-2">
                  Tracking Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  <input
                    id="tracking-number"
                    type="text"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    placeholder="PK987654321"
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f172a] focus:border-transparent placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0f172a] text-white font-bold rounded-lg hover:bg-[#1e293b] transition-colors text-sm whitespace-nowrap"
                  >
                    Track Now
                  </button>
                </div>
              </div>
            </form>

            <button className="mt-4 text-[#f59e0b] text-sm font-semibold hover:underline">
              Need help tracking?
            </button>
          </motion.div>

          {/* Right: Tracking Result */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-slate-800">Shipment Found</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span>Last updated: 2 min ago</span>
                  <RefreshCw className="w-3.5 h-3.5 cursor-pointer hover:text-slate-600" />
                </div>
              </div>

              {/* Status Row */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Status</p>
                  <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200">
                    {SAMPLE_TRACKING.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Tracking Number</p>
                  <p className="font-black text-slate-800 text-sm">{SAMPLE_TRACKING.number}</p>
                </div>
              </div>

              {/* Origin / Destination / ETA */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Origin</p>
                  <p className="font-semibold text-slate-800 text-sm leading-snug">{SAMPLE_TRACKING.origin}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Destination</p>
                  <p className="font-semibold text-slate-800 text-sm leading-snug">{SAMPLE_TRACKING.destination}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Estimated Delivery</p>
                  <p className="font-semibold text-slate-800 text-sm leading-snug">{SAMPLE_TRACKING.estimatedDelivery}</p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="relative">
                {/* Progress Bar */}
                <div className="absolute top-5 left-5 right-5 h-0.5 bg-slate-200">
                  <div className="h-full bg-emerald-500 w-[38%]" />
                </div>
                <div className="grid grid-cols-4 gap-2 relative z-10">
                  {SAMPLE_TRACKING.timeline.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.label} className="flex flex-col items-center gap-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                            step.active
                              ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200"
                              : step.done
                              ? "bg-emerald-100 border-emerald-400 text-emerald-600"
                              : "bg-white border-slate-300 text-slate-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-center">
                          <p className={`text-xs font-bold ${step.active ? "text-emerald-600" : step.done ? "text-slate-700" : "text-slate-400"}`}>
                            {step.label}
                          </p>
                          <p className="text-[10px] text-slate-400">{step.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
