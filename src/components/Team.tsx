"use client";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";

const team = [
  {
    nameKey: "team_mikhail",
    descKey: "team_mikhail_desc",
    initial: "M",
    color: "from-emerald-500 to-emerald-600",
    ring: "ring-emerald-200",
    pattern: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    nameKey: "team_denis",
    descKey: "team_denis_desc",
    initial: "D",
    color: "from-teal-500 to-teal-600",
    ring: "ring-teal-200",
    pattern: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    nameKey: "team_daniil",
    descKey: "team_daniil_desc",
    initial: "D",
    color: "from-cyan-500 to-cyan-600",
    ring: "ring-cyan-200",
    pattern: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  },
];

function StylizedAvatar({ initial, gradient, ringClass }: { initial: string; gradient: string; ringClass: string }) {
  return (
    <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ${ringClass} ring-offset-2 ring-offset-white`}>
      <svg className="absolute inset-0 w-full h-full rounded-full opacity-20" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-white" />
      </svg>
      <span className="relative z-10">{initial}</span>
    </div>
  );
}

export default function Team() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {t("team_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t("team_title")}
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 relative h-full hover:-translate-y-1">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-100 group-hover:text-emerald-200 transition-colors" />

                <div className="flex items-center gap-4 mb-6">
                  <StylizedAvatar
                    initial={member.initial}
                    gradient={member.color}
                    ringClass={member.ring}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{t(member.nameKey)}</h3>
                    <span className="text-sm text-emerald-600 font-medium">{t("team_role")}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(member.descKey)}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
