"use client";
import { useState, useEffect } from "react";
import { Send, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";

const CONTACT_FORM_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "burchenkodima476@gmail.com";

const FORMSUBMIT_ACTION = `https://formsubmit.co/${encodeURIComponent(CONTACT_FORM_EMAIL)}`;

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", truck: "", experience: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (url.searchParams.get("contact") !== "sent") return;
    setSubmitted(true);
    url.searchParams.delete("contact");
    const qs = url.searchParams.toString();
    const path = `${url.pathname}${qs ? `?${qs}` : ""}${url.hash}`;
    window.history.replaceState({}, "", path);
    const timer = window.setTimeout(() => setSubmitted(false), 8000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const el = e.currentTarget;
    const name = form.name.trim();

    const subject = el.querySelector<HTMLInputElement>('input[name="_subject"]');
    if (subject) subject.value = `MDK Transport — заявка: ${name}`;

    const next = new URL(window.location.href);
    next.searchParams.set("contact", "sent");
    let nextInput = el.querySelector<HTMLInputElement>('input[name="_next"]');
    if (!nextInput) {
      nextInput = document.createElement("input");
      nextInput.type = "hidden";
      nextInput.name = "_next";
      el.appendChild(nextInput);
    }
    nextInput.value = next.toString();

    el.submit();
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
            action={FORMSUBMIT_ACTION}
            method="POST"
            onSubmit={handleSubmit}
            className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-100"
          >
            <input type="hidden" name="_subject" value="MDK Transport — заявка с сайта" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="_honey"
              className="absolute -left-[9999px] w-px h-px opacity-0 pointer-events-none"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />
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
                    name="name"
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
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors outline-none text-gray-900 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact_truck")} *</label>
                  <select
                    name="truck"
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
                    name="experience"
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
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}
