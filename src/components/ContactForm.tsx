"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", truck: "", experience: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-emerald-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
            {t("contact_subtitle")}
            <Phone className="w-5 h-5 text-emerald-600" />
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-100"
        >
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-900">{t("contact_success")}</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact_name")}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors outline-none text-gray-900 bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact_phone")} *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors outline-none text-gray-900 bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact_truck")} *</label>
                <select
                  required
                  value={form.truck}
                  onChange={(e) => setForm({ ...form, truck: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors outline-none text-gray-900 bg-gray-50 appearance-none"
                >
                  <option value="">—</option>
                  <option value="yes">{t("contact_truck_yes")}</option>
                  <option value="no">{t("contact_truck_no")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact_experience")}</label>
                <input
                  type="text"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors outline-none text-gray-900 bg-gray-50"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-emerald-600/25 active:scale-[0.98]"
              >
                {t("contact_submit")}
                <Send className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
