"use client";
import { useState } from "react";
import { Send, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";

const CONTACT_FORM_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "burchenkodima476@gmail.com";

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", truck: "", experience: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError(null);
    setSending(true);
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_FORM_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `MDK Transport — заявка: ${form.name.trim()}`,
            _template: "table",
            _honey: "",
            name: form.name.trim(),
            phone: form.phone.trim(),
            truck: form.truck,
            experience: form.experience.trim() || "—",
          }),
        },
      );
      const data = (await res.json().catch(() => null)) as {
        success?: boolean | string;
        message?: string;
      } | null;
      const ok =
        res.ok &&
        data &&
        (data.success === true || data.success === "true");
      if (!ok) {
        setSendError(t("contact_error"));
        return;
      }
      setSubmitted(true);
      setForm({ name: "", phone: "", truck: "", experience: "" });
      setTimeout(() => setSubmitted(false), 8000);
    } catch {
      setSendError(t("contact_error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-emerald-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
            {t("contact_subtitle")}
            <Phone className="w-5 h-5 text-emerald-600" />
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <form
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
                {sendError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    {sendError}
                  </p>
                )}
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
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:pointer-events-none text-white py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-emerald-600/25 active:scale-[0.98]"
                >
                  {sending ? t("contact_sending") : t("contact_submit")}
                  <Send className="w-5 h-5" />
                </button>
              </div>
            )}
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}
