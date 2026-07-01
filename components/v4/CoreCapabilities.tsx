"use client";

import { motion } from "framer-motion";
import { Wrench, Package, Truck, GraduationCap, Monitor, Settings } from "lucide-react";

const leftItems = [
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Classy Courier may have either an internal or external focus (outbound).",
  },
  {
    icon: Package,
    title: "Supply",
    desc: "A Classy Courier family is a set of products which share a common characteristic.",
  },
  {
    icon: Truck,
    title: "Transportation",
    desc: "Cargo can be moved through a variety of means and in different shipments.",
  },
];

const rightItems = [
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Order processing is a sequential process involving processing a withdrawal list.",
  },
  {
    icon: Monitor,
    title: "Information Technology",
    desc: "Unit loads are combinations of items moved by handling systems.",
  },
  {
    icon: Settings,
    title: "Operations Support",
    desc: "Configuration at the level of distribution concerns the problem of location.",
  },
];

export default function CoreCapabilities() {
  return (
    <section style={{ backgroundColor: "#f3f5f8", padding: "58px 64px" }}>
      <style>{`
        @media (max-width: 640px) {
          .v4-core-inner { padding: 58px 24px !important; }
        }
      `}</style>

      <div className="v4-core-inner max-w-[1280px] mx-auto">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "32px",
              fontWeight: 800,
              color: "#12161d",
              marginBottom: "10px",
            }}
          >
            Core Capabilities
          </h2>
          <div
            className="mx-auto"
            style={{
              width: "46px",
              height: "3px",
              backgroundColor: "#3EA2EE",
              borderRadius: "2px",
            }}
          />
        </motion.div>

        {/* 3-col grid */}
        <div
          className="grid items-center gap-12"
          style={{ gridTemplateColumns: "1fr auto 1fr" }}
        >
          {/* Left col — right-aligned, flex-row-reverse */}
          <div className="space-y-7">
            {leftItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 flex-row-reverse text-right"
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e0f2fd",
                    borderRadius: "10px",
                  }}
                >
                  <item.icon style={{ width: "18px", height: "18px", color: "#3EA2EE" }} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#12161d",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "13px", color: "#5c6675", lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div
              className="overflow-hidden"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "4px solid rgba(22,104,197,0.20)",
                boxShadow: "0 20px 60px -20px rgba(22,104,197,0.35)",
              }}
            >
              <img
                src="/about-ship.png"
                alt="Classy Courier Operations"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right col — left-aligned */}
          <div className="space-y-7">
            {rightItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e0f2fd",
                    borderRadius: "10px",
                  }}
                >
                  <item.icon style={{ width: "18px", height: "18px", color: "#3EA2EE" }} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#12161d",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </h4>
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
