"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex items-center"
      style={{
        minHeight: "490px",
        padding: "0 64px",
        backgroundImage:
          "linear-gradient(90deg, rgba(8,12,18,.80) 0%, rgba(11,30,55,.38) 46%, rgba(14,44,78,.04) 100%), url('/hero-main.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .v4-hero-inner { padding: 0 24px !important; }
        }
      `}</style>

      <div className="v4-hero-inner relative z-10 w-full pt-[66px]" style={{ padding: "0 64px" }}>
        <div style={{ maxWidth: "560px" }}>
          {/* H1 — no eyebrow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}
          >
            Delivering Excellence Across Borders
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.65,
              marginBottom: "36px",
            }}
          >
            Reliable, fast and secure logistics solutions tailored to your business needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary button */}
            <Link
              href="/track"
              className="inline-flex items-center gap-2 text-white transition-colors"
              style={{
                backgroundColor: "#1668c5",
                fontWeight: 700,
                borderRadius: "9px",
                padding: "14px 26px",
                boxShadow: "0 12px 26px -10px rgba(20,100,200,.70)",
                fontSize: "15px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1257aa")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1668c5")
              }
            >
              <Package className="w-4 h-4" />
              Track Shipment
            </Link>

            {/* Outline button */}
            <button
              className="inline-flex items-center gap-2 text-white font-bold transition-colors"
              style={{
                backgroundColor: "transparent",
                border: "2px solid rgba(255,255,255,0.8)",
                borderRadius: "9px",
                padding: "14px 26px",
                fontSize: "15px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")
              }
            >
              Get Rate Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
