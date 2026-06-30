"use client";

import { motion } from "framer-motion";

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

        {/* Right — about banner image */}
        <div className="flex items-end justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "480px" }}>
            <img
              src="/about-banner.png"
              alt="Classy Courier Services — logistics operations"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
