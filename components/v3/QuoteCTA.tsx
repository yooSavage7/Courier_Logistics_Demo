"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function QuoteCTA() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "0 64px 64px" }}>
      <style>{`
        @media (max-width: 640px) {
          .quotecta-outer { padding: 0 24px 64px !important; }
          .quotecta-inner { grid-template-columns: 1fr !important; }
          .quotecta-panel { padding: 40px 28px !important; }
        }
      `}</style>
      <div
        className="quotecta-outer max-w-[1180px] mx-auto"
        style={{ padding: "0" }}
      >
        <motion.div
          className="quotecta-inner grid overflow-hidden"
          style={{
            gridTemplateColumns: "1fr 1fr",
            borderRadius: "20px",
            minHeight: "300px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          {/* Left panel — dark */}
          <div
            className="quotecta-panel"
            style={{ backgroundColor: "#0e1117", padding: "56px 48px" }}
          >
            <p
              className="uppercase tracking-widest mb-3"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.50)",
                letterSpacing: "0.12em",
              }}
            >
              GET STARTED
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "30px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              Request a Free Quote
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "14px",
                color: "#9aa4b2",
                lineHeight: 1.65,
              }}
            >
              Get competitive rates for your shipment needs. Our team will respond within 24 hours.
            </p>
            <a
              href="#contact"
              className="inline-block text-white font-bold transition-colors"
              style={{
                backgroundColor: "#1668c5",
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: "9px",
                padding: "14px 26px",
                boxShadow: "0 10px 24px -8px rgba(20,100,200,0.55)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1257aa")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1668c5")
              }
            >
              Get Quotes →
            </a>
          </div>

          {/* Right panel — blue gradient */}
          <div
            className="quotecta-panel"
            style={{
              background: "linear-gradient(100deg, #2f86db, #1f6fc4)",
              padding: "56px 48px",
            }}
          >
            <p
              className="uppercase tracking-widest mb-3"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.60)",
                letterSpacing: "0.12em",
              }}
            >
              TRACK SHIPMENT
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "30px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              Track Your Shipments
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.70)",
                lineHeight: 1.65,
              }}
            >
              Enter your tracking number and get real-time updates on your shipment&apos;s location and status.
            </p>
            <Link
              href="/track"
              className="inline-block text-white font-bold transition-colors"
              style={{
                border: "1.5px solid rgba(255,255,255,0.85)",
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: "9px",
                padding: "14px 26px",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.10)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
              }
            >
              Track Shipments →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
