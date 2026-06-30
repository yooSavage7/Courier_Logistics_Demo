"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex items-center"
      style={{
        minHeight: "430px",
        padding: "0 64px",
        backgroundImage:
          "linear-gradient(90deg, rgba(8,12,18,.92) 0%, rgba(11,30,55,.55) 46%, rgba(14,44,78,.12) 100%), url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Responsive padding override */}
      <style>{`
        @media (max-width: 640px) {
          .hero-inner { padding: 0 24px !important; }
        }
      `}</style>

      {/* Content */}
      <div className="hero-inner relative z-10 w-full pt-[66px]" style={{ padding: "0 64px" }}>
        <div style={{ maxWidth: "560px" }}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#5fa8f5",
              marginBottom: "16px",
            }}
          >
            RELIABLE LOGISTICS • WORLDWIDE
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            Track Your Shipment
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#9aa3af",
              lineHeight: 1.65,
              marginBottom: "36px",
            }}
          >
            Seamlessly track your courier, freight, and cargo shipments in real time
            — anywhere in the world.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/track"
              className="inline-block text-white transition-colors"
              style={{
                backgroundColor: "#1668c5",
                fontWeight: 700,
                borderRadius: "9px",
                padding: "14px 28px",
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
              Track Your Order Now →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
