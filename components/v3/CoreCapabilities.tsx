"use client";

import { motion } from "framer-motion";
import { Wrench, Package, Truck, GraduationCap, Monitor, Settings } from "lucide-react";

const leftItems = [
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Expert equipment maintenance and repair services",
  },
  {
    icon: Package,
    title: "Supply",
    desc: "Streamlined supply chain management solutions",
  },
  {
    icon: Truck,
    title: "Transportation",
    desc: "Reliable multi-modal transport networks",
  },
];

const rightItems = [
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Professional training programs for logistics teams",
  },
  {
    icon: Monitor,
    title: "Information Technology",
    desc: "Advanced digital logistics management systems",
  },
  {
    icon: Settings,
    title: "Operations Support",
    desc: "Comprehensive operational support services",
  },
];

export default function CoreCapabilities() {
  return (
    <section style={{ backgroundColor: "#f3f5f8", padding: "58px 64px" }}>
      <style>{`
        @media (max-width: 640px) {
          .core-padding { padding: 58px 24px !important; }
          .core-grid { grid-template-columns: 1fr !important; }
          .core-center { display: none; }
        }
      `}</style>
      <div
        className="core-padding max-w-[1180px] mx-auto"
        style={{ padding: "0" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="uppercase tracking-widest mb-2"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#1668c5",
              letterSpacing: "0.1em",
            }}
          >
            WHAT WE OFFER
          </p>
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "32px",
              fontWeight: 800,
              color: "#12161d",
              letterSpacing: "-0.01em",
            }}
          >
            Core Capabilities
          </h2>
        </motion.div>

        {/* 3-col grid */}
        <div
          className="core-grid grid items-center"
          style={{ gridTemplateColumns: "1fr auto 1fr", gap: "48px" }}
        >
          {/* Left column — right-aligned, row-reverse */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {leftItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "flex-start",
                  gap: "16px",
                  textAlign: "right",
                }}
              >
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: "46px",
                    height: "46px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e6e9ef",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <item.icon style={{ width: "20px", height: "20px", color: "#2a8af0" }} />
                </div>
                {/* Text */}
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#12161d",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: "13px", color: "#5c6675", lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center — circular image */}
          <motion.div
            className="core-center flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src="/about-ship.png"
              alt="Logistics operations"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "9999px",
                objectFit: "cover",
                border: "7px solid #ffffff",
                boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/about-gold.png";
              }}
            />
          </motion.div>

          {/* Right column — left-aligned */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {rightItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: "46px",
                    height: "46px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e6e9ef",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <item.icon style={{ width: "20px", height: "20px", color: "#2a8af0" }} />
                </div>
                {/* Text */}
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#12161d",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: "13px", color: "#5c6675", lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
