"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" style={{ backgroundColor: "#f3f5f8", padding: "56px 64px" }}>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-img-cell { min-height: 260px !important; }
        }
        @media (max-width: 640px) {
          #about { padding: 48px 24px !important; }
        }
      `}</style>

      <div
        className="about-grid max-w-[1180px] mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "56px",
          alignItems: "stretch",
        }}
      >
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#f3f5f8" }}
        >
          <p
            className="uppercase mb-3"
            style={{ fontSize: "12px", fontWeight: 700, color: "#1668c5", letterSpacing: "0.16em" }}
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
            About{" "}
            <span style={{ color: "#1668c5" }}>Classy Courier Services</span>
          </h2>
          <p className="leading-relaxed mb-4" style={{ fontSize: "15px", color: "#5c6675" }}>
            We are a trusted logistics partner offering reliable courier, freight and cargo
            solutions worldwide. Our commitment to excellence, innovation and customer
            satisfaction sets us apart in the industry.
          </p>
          <p className="leading-relaxed" style={{ fontSize: "15px", color: "#5c6675" }}>
            With offices across the UK, Pakistan and UAE, we deliver seamlessly across
            borders — providing air freight, sea freight, overland and domestic courier
            services to individuals and businesses alike.
          </p>
        </motion.div>

        {/* Right — transparent PNG, section bg shows through */}
        <motion.div
          className="about-img-cell"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "300px",
          }}
        >
          <img
            src="/about-banner.png"
            alt="Classy Courier Services — logistics operations"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-65%, -50%)",
              height: "100%",
              width: "auto",
              maxWidth: "none",
              display: "block",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
