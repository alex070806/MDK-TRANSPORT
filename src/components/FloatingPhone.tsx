"use client";
import { Phone } from "lucide-react";

export default function FloatingPhone() {
  return (
    <a
      href="tel:+12535277115"
      className="fixed bottom-6 right-6 z-50 sm:hidden w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-600/30 active:scale-95 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
      <Phone className="relative w-6 h-6 text-white" />
    </a>
  );
}
