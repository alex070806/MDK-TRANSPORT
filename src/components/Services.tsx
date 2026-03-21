"use client";
import { Percent, ShieldOff, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";

const services = [
  { icon: Percent, titleKey: "service_1_title", descKey: "service_1_desc", color: "from-emerald-500 to-emerald-600" },
  { icon: ShieldOff, titleKey: "service_2_title", descKey: "service_2_desc", color: "from-teal-500 to-teal-600" },
  { icon: Shield, titleKey: "service_3_title", descKey: "service_3_desc", color: "from-cyan-500 to-cyan-600" },
  { icon: Zap, titleKey: "service_4_title", descKey: "service_4_desc", color: "from-emerald-600 to-green-600" },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn className="text-center mb-16 sm:mb-20">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {t("nav_services")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("services_title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("services_subtitle")}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={i} delay={i * 0.07}>
                <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 h-full hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {t(service.descKey)}
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
