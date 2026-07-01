"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#f3f5f8", padding: "56px 64px" }}
    >
      <style>{`
        @media (max-width: 768px) {
          .v4-whoweare-grid { grid-template-columns: 1fr !important; }
          .v4-whoweare-img { min-height: 260px !important; }
        }
        @media (max-width: 640px) {
          #about { padding: 48px 24px !important; }
        }
      `}</style>

      <div
        className="v4-whoweare-grid max-w-[1280px] mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "56px",
          alignItems: "stretch",
        }}
      >
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#f3f5f8",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "32px",
              fontWeight: 800,
              color: "#12161d",
              marginBottom: "8px",
            }}
          >
            Who We Are
          </h2>

          {/* Underline bar */}
          <div
            style={{
              width: "46px",
              height: "3px",
              backgroundColor: "#3EA2EE",
              borderRadius: "2px",
              marginBottom: "20px",
            }}
          />

          {/* Body paragraphs */}
          <p
            className="leading-relaxed"
            style={{ fontSize: "15px", color: "#5c6675", marginBottom: "16px" }}
          >
            Classy Courier management is the part of supply chain management
            that plans, implements and controls the efficient, effective forward
            and reverse flow and storage of goods, services and related
            information between the point of origin and the point of consumption.
          </p>
          <p
            className="leading-relaxed"
            style={{ fontSize: "15px", color: "#5c6675" }}
          >
            The complexity of Classy Courier can be modeled, analyzed, visualized
            and optimized by dedicated software. The minimization of the use of
            resources is a common motivation in all logistics fields.
          </p>
        </motion.div>

        {/* Right — transparent PNG, section bg shows through */}
        <motion.div
          className="v4-whoweare-img"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "300px",
          }}
        >
          <img
            src="/about-banner.png"
            alt="Who We Are — Classy Courier Services"
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
