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

      <div className="quotecta-outer max-w-[1180px] mx-auto" style={{ padding: "0" }}>
        <motion.div
          className="quotecta-inner grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "24px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          {/* Left panel — dark */}
          <div
            className="quotecta-panel"
            style={{
              backgroundColor: "#0e1117",
              padding: "56px 48px",
              borderRadius: "20px",
              position: "relative",
              overflow: "hidden",
              minHeight: "300px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#1668c5",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              PRICING
            </p>
            <h2
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "32px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "18px",
              }}
            >
              Request a Free Quote
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#9aa4b2",
                lineHeight: 1.65,
                marginBottom: "36px",
                maxWidth: "420px",
              }}
            >
              Tell us what you need to move — weight, volume, handling and destination — and we&apos;ll prepare a competitive rate tailored to your shipment.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                backgroundColor: "#1668c5",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                borderRadius: "10px",
                padding: "15px 30px",
                boxShadow: "0 10px 24px -8px rgba(20,100,200,0.55)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1257aa")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1668c5")
              }
            >
              GET QUOTES →
            </a>

            {/* Warehouse worker photo placeholder */}
            <span
              style={{
                position: "absolute",
                bottom: "20px",
                right: "24px",
                fontSize: "11px",
                color: "rgba(255,255,255,0.18)",
                fontFamily: "monospace",
                letterSpacing: "0.05em",
                pointerEvents: "none",
              }}
            >
              [ warehouse worker photo ]
            </span>
          </div>

          {/* Right panel — blue gradient */}
          <div
            className="quotecta-panel"
            style={{
              background: "linear-gradient(135deg, #2f86db 0%, #1f6fc4 100%)",
              padding: "56px 48px",
              borderRadius: "20px",
              minHeight: "300px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.70)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              LOGISTICS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "32px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "18px",
              }}
            >
              Track Your Shipments
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.65,
                marginBottom: "36px",
                maxWidth: "420px",
              }}
            >
              Operators involved in transportation include all train, road, sea and air carriers, couriers, freight forwarders and multi-modal operators — even for very long-distance transport.
            </p>
            <Link
              href="/track"
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                color: "#1668c5",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                borderRadius: "10px",
                padding: "15px 30px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.90)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ffffff")
              }
            >
              TRACK SHIPMENTS →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
