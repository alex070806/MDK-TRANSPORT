"use client";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { EnclosedSVG, Open36SVG, Open50SVG, SemiSVG } from "./TrailerSVGs";
import { ReactNode } from "react";

const trailerSVGs: Record<string, (props: { className?: string }) => ReactNode> = {
  enclosed: EnclosedSVG,
  open36: Open36SVG,
  open50: Open50SVG,
  semi: SemiSVG,
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Company Info */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              {t("nav_about")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("about_title")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t("about_text")}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-5 py-3">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">Spokane, WA</span>
              </div>
              <a href="tel:+12535277115" className="flex items-center gap-3 bg-emerald-600 text-white rounded-xl px-5 py-3 hover:bg-emerald-700 transition-colors">
                <span className="text-sm font-medium">253-527-7115</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1761917904658-2a9ecb84a169?w=800&q=80"
                alt="Auto transport"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-emerald-100 text-sm">{t("stats_experience")}</div>
            </div>
          </motion.div>
        </div>

        {/* Trailers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("trailers_title")}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(["enclosed", "open36", "open50", "semi"] as const).map((key, i) => {
            const SvgComponent = trailerSVGs[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-300" />
                <div className="relative">
                  <div className="w-full h-28 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <SvgComponent className="w-full h-full" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-400 mb-3">
                    {t(`trailer_${key}`)}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(`trailer_${key}_desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
