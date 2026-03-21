"use client";
import { motion } from "framer-motion";
import { Eye, MapPin, Banknote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const reasons = [
  { icon: Eye, titleKey: "why_1_title", descKey: "why_1_desc" },
  { icon: MapPin, titleKey: "why_2_title", descKey: "why_2_desc" },
  { icon: Banknote, titleKey: "why_3_title", descKey: "why_3_desc" },
];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("why_title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 group-hover:bg-emerald-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-emerald-500/25">
                  <Icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {t(reason.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
