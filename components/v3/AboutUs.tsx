"use client";

import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#f3f5f8", padding: "56px 64px" }}
    >
      <style>{`
        @media (max-width: 640px) {
          .about-top-section { padding: 56px 24px !important; }
          .about-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <motion.div
        className="about-top-section about-two-col max-w-[1180px] mx-auto grid items-end"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          padding: "0",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        {/* Left */}
        <div>
          <p
            className="uppercase tracking-widest mb-3"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#1668c5",
              letterSpacing: "0.1em",
            }}
          >
            ABOUT US
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "32px",
              fontWeight: 800,
              color: "#12161d",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            About Classy Courier Services
          </h2>
          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: "15px", fontWeight: 400, color: "#5c6675" }}
          >
            We are a trusted logistics partner offering reliable courier, freight and cargo
            solutions worldwide. Our commitment to excellence, innovation and customer
            satisfaction sets us apart in the industry.
          </p>
          <p
            className="leading-relaxed"
            style={{ fontSize: "15px", fontWeight: 400, color: "#5c6675" }}
          >
            With offices across the UK, Pakistan and UAE, we deliver seamlessly across
            borders — providing air freight, sea freight, overland and domestic courier
            services to individuals and businesses alike.
          </p>
        </div>

        {/* Right — CSS-only illustration */}
        <div className="flex items-end justify-center">
          <div
            className="relative w-full flex items-center justify-center rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "#e9f1fb",
              height: "288px",
              maxWidth: "420px",
            }}
          >
            {/* Decorative SVG route */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 420 288"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 50 220 Q 160 80 370 150"
                stroke="#c4dcf5"
                strokeWidth="2"
                strokeDasharray="8 5"
                fill="none"
              />
              <circle cx="50" cy="220" r="5" fill="#2a8af0" opacity="0.6" />
              <circle cx="370" cy="150" r="5" fill="#1668c5" opacity="0.8" />
              {/* Box outline */}
              <rect
                x="310"
                y="44"
                width="60"
                height="46"
                rx="5"
                stroke="#2a8af0"
                strokeWidth="1.5"
                fill="rgba(42,138,240,0.06)"
                opacity="0.7"
              />
              <line x1="310" y1="60" x2="370" y2="60" stroke="#2a8af0" strokeWidth="1" opacity="0.4" />
              <line x1="340" y1="44" x2="340" y2="90" stroke="#2a8af0" strokeWidth="1" opacity="0.4" />
              {/* Small route dots */}
              <circle cx="130" cy="148" r="3" fill="#5fa8f5" opacity="0.5" />
              <circle cx="240" cy="112" r="3" fill="#5fa8f5" opacity="0.5" />
            </svg>
            {/* Truck icon center */}
            <div className="relative flex flex-col items-center gap-3">
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{
                  width: "92px",
                  height: "92px",
                  backgroundColor: "rgba(22,104,197,0.10)",
                }}
              >
                <Truck style={{ width: "52px", height: "52px", color: "#1668c5" }} />
              </div>
              <p
                className="font-semibold uppercase tracking-widest"
                style={{
                  fontSize: "10px",
                  color: "#1668c5",
                  letterSpacing: "0.14em",
                }}
              >
                WORLDWIDE DELIVERY
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
