"use client";
import { Eye, MapPin, Banknote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";

const reasons = [
  { icon: Eye, titleKey: "why_1_title", descKey: "why_1_desc" },
  { icon: MapPin, titleKey: "why_2_title", descKey: "why_2_desc" },
  { icon: Banknote, titleKey: "why_3_title", descKey: "why_3_desc" },
];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("why_title")}
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 group-hover:bg-emerald-500 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {t(reason.descKey)}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
