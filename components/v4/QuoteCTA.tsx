"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function QuoteCTA() {
  return (
    <section className="w-full">
      <div className="grid sm:grid-cols-2" style={{ minHeight: "300px" }}>
        {/* Left panel — dark */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: "#0e1117",
            padding: "56px 64px",
          }}
        >
          <style>{`
            @media (max-width: 640px) {
              .v4-cta-left { padding: 56px 24px !important; }
              .v4-cta-right { padding: 56px 24px !important; }
            }
          `}</style>

          {/* Eyebrow */}
          <p
            className="v4-cta-left-eyebrow"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "12px",
            }}
          >
            GET STARTED
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "30px",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Request a Free Quote
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: "14px",
              color: "#9aa4b2",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Tell us what you need to move — weight, volume, handling needs and destination — and our team will prepare a competitive rate tailored to your shipment.
          </p>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block text-white font-bold transition-colors"
            style={{
              backgroundColor: "#3EA2EE",
              borderRadius: "9px",
              padding: "14px 26px",
              fontSize: "15px",
              boxShadow: "0 12px 26px -10px rgba(62,162,238,.70)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3490D6")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3EA2EE")
            }
          >
            Get Quotes →
          </a>
        </motion.div>

        {/* Right panel — blue gradient */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: "linear-gradient(100deg, #3EA2EE, #2D8ABF)",
            padding: "56px 64px",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "12px",
            }}
          >
            REAL-TIME TRACKING
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "30px",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Track Your Shipments
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Operators involved in transportation include all train, road vehicles, boats, airplane companies, couriers, freight forwarders and multi-modal transport operators — even for very long-distance transportation.
          </p>

          {/* Outline button */}
          <Link
            href="/track"
            className="inline-block font-bold transition-colors"
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.8)",
              color: "#ffffff",
              borderRadius: "9px",
              padding: "14px 26px",
              fontSize: "15px",
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
        </motion.div>
      </div>
    </section>
  );
}
