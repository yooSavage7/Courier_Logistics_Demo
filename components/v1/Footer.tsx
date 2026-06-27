import { Globe, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Services: [
    "International Courier",
    "Freight Forwarding",
    "Cargo Services",
    "Warehousing",
    "Air Freight",
    "Sea Freight",
  ],
  Company: ["About Us", "Careers", "News & Updates", "Partners", "CSR"],
  Support: ["Track Shipment", "Rate Inquiry", "FAQs", "Contact Us", "Help Center"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-xl tracking-tight uppercase">CLASSY</span>
                <span className="text-slate-400 text-[9px] font-semibold tracking-[0.15em] uppercase">Group of Logistics</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted global logistics partner. Delivering excellence across borders since 2004.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                <span>Blue Area, Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                <span>+92 51 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                <span>info@classylogistics.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-black text-white text-sm mb-5 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-slate-400 text-sm hover:text-[#f59e0b] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Classy Group of Logistics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
