"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const team = [
  { nameKey: "team_mikhail", descKey: "team_mikhail_desc", initial: "M", color: "from-emerald-500 to-emerald-600" },
  { nameKey: "team_denis", descKey: "team_denis_desc", initial: "D", color: "from-teal-500 to-teal-600" },
  { nameKey: "team_daniil", descKey: "team_daniil_desc", initial: "D", color: "from-cyan-500 to-cyan-600" },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {t("team_title")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t("team_title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-200" />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                  {member.initial}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{t(member.nameKey)}</h3>
                  <span className="text-sm text-emerald-600 font-medium">Dispatcher</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                {t(member.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
