"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingPhone() {
  return (
    <motion.a
      href="tel:+12535277115"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 sm:hidden w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-600/30"
      style={{ animation: "pulse-glow 2s infinite" }}
    >
      <Phone className="w-6 h-6 text-white" />
    </motion.a>
  );
}
