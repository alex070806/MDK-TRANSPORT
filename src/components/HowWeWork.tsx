"use client";
import { motion } from "framer-motion";
import { Phone, FileSignature, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
  { icon: Phone, titleKey: "how_step1_title", descKey: "how_step1_desc", num: "01" },
  { icon: FileSignature, titleKey: "how_step2_title", descKey: "how_step2_desc", num: "02" },
  { icon: Rocket, titleKey: "how_step3_title", descKey: "how_step3_desc", num: "03" },
];

export default function HowWeWork() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-emerald-500/30">
            {t("how_title")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t("how_title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-emerald-500/50 to-transparent" />
                )}

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group-hover:border-emerald-500/30">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-emerald-500/20 group-hover:text-emerald-500/30 transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t(step.descKey)}
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
