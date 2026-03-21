"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-emerald-900/60 to-gray-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-5 py-2 rounded-full text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          MDK Transport LLC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          {t("hero_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:scale-105"
          >
            {t("hero_cta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-2 text-white/80 hover:text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all border border-white/20 hover:border-white/40 hover:bg-white/5"
          >
            {t("hero_learn")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
