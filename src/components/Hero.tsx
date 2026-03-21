"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1720014432727-3ec661c27568?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-emerald-900/60 to-gray-900/80" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-400/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-5 py-2 rounded-full text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          MDK Transport LLC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          {t("hero_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); const el = document.querySelector("#contact"); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); } }}
            className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-colors shadow-xl shadow-emerald-600/20"
          >
            {t("hero_cta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); const el = document.querySelector("#services"); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); } }}
            className="flex items-center gap-2 text-white/80 hover:text-white px-8 py-4 rounded-2xl text-lg font-medium transition-colors border border-white/20 hover:border-white/40"
          >
            {t("hero_learn")}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
