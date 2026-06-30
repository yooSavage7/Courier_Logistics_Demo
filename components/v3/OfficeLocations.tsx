"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const offices = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    address: "123 Logistics Park, Manchester, M1 2AB, United Kingdom",
    phone: "+44 7878 657 440",
  },
  {
    flag: "🇵🇰",
    name: "Sialkot, Pakistan",
    address: "Plot 45, Industrial Area, Sialkot, Punjab, Pakistan",
    phone: "+92 52 123 4567",
  },
  {
    flag: "🇦🇪",
    name: "Sharjah, UAE",
    address: "Suite 301, Al Majaz Tower, Sharjah, UAE",
    phone: "+971 6 123 4567",
  },
  {
    flag: "🇦🇪",
    name: "Al Ain, UAE",
    address: "Office 12, Al Ain Business Centre, Al Ain, UAE",
    phone: "+971 3 123 4567",
  },
];

export default function OfficeLocations() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "58px 64px 66px" }}>
      <style>{`
        @media (max-width: 640px) {
          .offices-padding { padding: 58px 24px 66px !important; }
          .offices-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .offices-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div
        className="offices-padding max-w-[1180px] mx-auto"
        style={{ padding: "0" }}
      >
        {/* Header */}
        <motion.h2
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "32px",
            fontWeight: 800,
            color: "#12161d",
            letterSpacing: "-0.01em",
          }}
        >
          Our Office Locations
        </motion.h2>

        {/* Grid */}
        <div
          className="offices-grid grid"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}
        >
          {offices.map((office, i) => (
            <motion.div
              key={`${office.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -3,
                boxShadow: "0 16px 40px -14px rgba(20,40,80,0.22)",
              }}
              className="transition-all"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e6e9ef",
                borderRadius: "16px",
                padding: "28px 24px",
              }}
            >
              {/* Flag circle */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#e9f1fb",
                  fontSize: "24px",
                }}
              >
                {office.flag}
              </div>

              {/* Office name */}
              <h3
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#12161d",
                  marginTop: "12px",
                  marginBottom: "4px",
                }}
              >
                {office.name}
              </h3>

              {/* Address */}
              <p
                className="leading-relaxed mb-3"
                style={{ fontSize: "13px", color: "#5c6675" }}
              >
                {office.address}
              </p>

              {/* Phone */}
              <div
                className="flex items-center gap-1.5"
                style={{ fontSize: "13px", fontWeight: 600, color: "#1668c5" }}
              >
                <Phone style={{ width: "13px", height: "13px", flexShrink: 0 }} />
                <span>{office.phone}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
