"use client";

import Link from "next/link";
import { Truck, Share2, MessageCircle, Camera, Phone } from "lucide-react";

const usefulLinks = ["Home", "About Us", "Account", "Tracking Details", "Careers"];
const services = ["Air Freight", "Cash on Delivery", "International Services", "Overland", "Overnight", "Sea Freight"];
const helpLinks = ["Contact Us / Customer Service", "Developer Portal", "Digital Partners", "Agent Login", "Client Login"];

const socialIcons = [Share2, MessageCircle, Camera];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1e2634", padding: "64px 64px 0" }}>
      <style>{`
        @media (max-width: 640px) {
          .footer-outer { padding: 48px 24px 0 !important; }
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="footer-outer max-w-[1180px] mx-auto" style={{ padding: "0" }}>
        {/* 4-col grid */}
        <div
          className="footer-grid grid"
          style={{
            gridTemplateColumns: "1.45fr 1fr 1.05fr 1.2fr",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Column 1 — About */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="flex items-center justify-center rounded-lg flex-shrink-0"
                style={{
                  width: "30px",
                  height: "30px",
                  background: "linear-gradient(135deg, #1668c5, #2f86db)",
                  transform: "skewX(-7deg)",
                }}
              >
                <div style={{ transform: "skewX(7deg)" }}>
                  <Truck className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-extrabold italic"
                  style={{ fontSize: "15px" }}
                >
                  CLASSY
                </span>
                <span
                  className="font-semibold uppercase"
                  style={{ fontSize: "7px", color: "#9aa3af", letterSpacing: "0.1em" }}
                >
                  COURIER SERVICES
                </span>
              </div>
            </div>

            {/* Heading */}
            <h4
              className="uppercase mb-2"
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.02em",
              }}
            >
              ABOUT COMPANY
            </h4>
            {/* Blue bar */}
            <div
              style={{
                width: "46px",
                height: "3px",
                backgroundColor: "#2a8af0",
                borderRadius: "2px",
                marginBottom: "14px",
              }}
            />

            {/* Body */}
            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: "14px", color: "#9aa4b2" }}
            >
              Your one-stop solution to all your logistical needs. Headquartered in United
              Kingdom, we have been providing quality and professional International and
              Domestic Courier &amp; Cargo services for over a decade.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center rounded-full transition-colors group"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "#1668c5";
                    const icon = el.querySelector("svg") as SVGElement | null;
                    if (icon) icon.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "#ffffff";
                    const icon = el.querySelector("svg") as SVGElement | null;
                    if (icon) icon.style.color = "#1e2634";
                  }}
                >
                  <Icon
                    style={{ width: "16px", height: "16px", color: "#1e2634" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h4
              className="uppercase mb-2"
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.02em",
              }}
            >
              USEFUL LINKS
            </h4>
            <div
              style={{
                width: "46px",
                height: "3px",
                backgroundColor: "#2a8af0",
                borderRadius: "2px",
                marginBottom: "16px",
              }}
            />
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {usefulLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="transition-colors hover:text-white"
                    style={{
                      fontSize: "14.5px",
                      textTransform: "uppercase",
                      color: "#c2cad5",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Services */}
          <div>
            <h4
              className="uppercase mb-2"
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.02em",
              }}
            >
              OUR SERVICES
            </h4>
            <div
              style={{
                width: "46px",
                height: "3px",
                backgroundColor: "#2a8af0",
                borderRadius: "2px",
                marginBottom: "16px",
              }}
            />
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="transition-colors hover:text-white"
                    style={{
                      fontSize: "14.5px",
                      textTransform: "uppercase",
                      color: "#c2cad5",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Help Center */}
          <div>
            <h4
              className="uppercase mb-2"
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.02em",
              }}
            >
              HELP CENTER
            </h4>
            <div
              style={{
                width: "46px",
                height: "3px",
                backgroundColor: "#2a8af0",
                borderRadius: "2px",
                marginBottom: "16px",
              }}
            />
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="transition-colors hover:text-white"
                    style={{
                      fontSize: "14.5px",
                      textTransform: "uppercase",
                      color: "#c2cad5",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="text-center"
          style={{
            borderTop: "1px solid #2c3645",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#9aa4b2" }}>
            &copy; 2021-2025{" "}
            <span style={{ color: "#2a8af0", fontWeight: 600 }}>
              Classy Courier Services
            </span>{" "}
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
