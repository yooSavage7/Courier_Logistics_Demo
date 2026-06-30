import Link from "next/link";
import { Truck, Share2, MessageCircle, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#2563eb] rounded-md flex items-center justify-center">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-black text-sm uppercase tracking-wide">CLASSY</p>
                <p className="text-slate-400 text-[8px] uppercase tracking-wider">Courier Services</p>
              </div>
            </div>
            <h4 className="font-black text-white text-sm mb-3 uppercase tracking-wider">About Company</h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              Your one-stop solution to all your logistical needs. Headquartered in United Kingdom, we have been providing quality and professional International and Domestic Courier &amp; Cargo services for over a decade.
            </p>
            <div className="flex gap-3">
              {[Share2, MessageCircle, Camera].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 border border-slate-700 rounded-full flex items-center justify-center hover:border-[#2563eb] hover:bg-[#2563eb]/10 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Usefull Links</h4>
            <div className="w-8 h-0.5 bg-[#2563eb] mb-4" />
            <ul className="space-y-2.5">
              {["Home", "About Us", "Account", "Tracking Details Old", "Careers"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-400 text-xs hover:text-[#2563eb] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Our Services</h4>
            <div className="w-8 h-0.5 bg-[#2563eb] mb-4" />
            <ul className="space-y-2.5">
              {["Air Freight", "Cash on Delivery", "International Services", "Overland", "Overnight", "Sea Freight"].map((s) => (
                <li key={s}>
                  <Link href="#" className="text-slate-400 text-xs hover:text-[#2563eb] transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Help Center</h4>
            <div className="w-8 h-0.5 bg-[#2563eb] mb-4" />
            <ul className="space-y-2.5">
              {["Contact Us / Customer Service", "Developer Portal", "Digital Partners and Integrations", "Agent Login", "Client Login"].map((s) => (
                <li key={s}>
                  <Link href="#" className="text-slate-400 text-xs hover:text-[#2563eb] transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-500 text-xs">
            © 2021-2025{" "}
            <span className="text-[#2563eb] font-semibold">Classy Courier Services</span>
            {" "}. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
