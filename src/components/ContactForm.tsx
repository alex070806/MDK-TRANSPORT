"use client";
import { useState } from "react";
import { Send, Phone, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

function buildEmailHtml(name: string, phone: string, truck: string, experience: string): string {
  const truckLabel = truck === "yes" ? "✅ Да (Yes)" : truck === "no" ? "❌ Нет (No)" : truck;
  const expLabel = experience.trim() || "—";

  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Новая заявка — MDK Transport LLC</title>
</head>
<body style="margin:0;padding:0;background-color:#f0fdf4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:36px 16px;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#065f46 0%,#059669 50%,#10b981 100%);border-radius:20px 20px 0 0;padding:36px 32px;text-align:center;">
      <div style="display:inline-block;background:rgba(255,255,255,0.18);border-radius:50%;width:72px;height:72px;line-height:72px;font-size:32px;margin-bottom:18px;">🚛</div>
      <h1 style="color:#ffffff;margin:0 0 6px;font-size:26px;font-weight:800;letter-spacing:-0.5px;">MDK Transport LLC</h1>
      <p style="color:rgba(255,255,255,0.88);margin:0;font-size:14px;font-weight:500;letter-spacing:0.4px;text-transform:uppercase;">Новая заявка с сайта</p>
    </div>

    <!-- Body -->
    <div style="background:#ffffff;padding:32px;border-radius:0 0 20px 20px;box-shadow:0 8px 32px rgba(5,150,105,0.10);">

      <h2 style="color:#064e3b;font-size:17px;font-weight:700;margin:0 0 24px;padding-bottom:14px;border-bottom:2px solid #d1fae5;letter-spacing:-0.2px;">
        📋 Данные заявителя
      </h2>

      <!-- Name -->
      <div style="margin-bottom:14px;padding:16px 20px;background:#f9fafb;border-radius:14px;border-left:4px solid #10b981;">
        <p style="margin:0 0 5px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;">Имя / Name</p>
        <p style="margin:0;color:#111827;font-size:17px;font-weight:700;">${name}</p>
      </div>

      <!-- Phone -->
      <div style="margin-bottom:14px;padding:16px 20px;background:#f9fafb;border-radius:14px;border-left:4px solid #10b981;">
        <p style="margin:0 0 5px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;">Телефон / Phone</p>
        <p style="margin:0;color:#111827;font-size:17px;font-weight:700;">
          <a href="tel:${phone}" style="color:#059669;text-decoration:none;">${phone}</a>
        </p>
      </div>

      <!-- Truck -->
      <div style="margin-bottom:14px;padding:16px 20px;background:#f9fafb;border-radius:14px;border-left:4px solid #10b981;">
        <p style="margin:0 0 5px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;">Есть трак? / Has a truck?</p>
        <p style="margin:0;color:#111827;font-size:17px;font-weight:700;">${truckLabel}</p>
      </div>

      <!-- Experience -->
      <div style="padding:16px 20px;background:#f9fafb;border-radius:14px;border-left:4px solid #10b981;">
        <p style="margin:0 0 5px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;">Опыт в сфере / Experience</p>
        <p style="margin:0;color:#111827;font-size:17px;font-weight:700;">${expLabel}</p>
      </div>

      <!-- CTA hint -->
      <div style="margin-top:28px;padding:18px 20px;background:linear-gradient(135deg,#ecfdf5,#d1fae5);border-radius:14px;text-align:center;">
        <p style="margin:0;color:#065f46;font-size:14px;font-weight:600;">
          Свяжитесь с заявителем как можно скорее!
        </p>
        <p style="margin:8px 0 0;font-size:13px;color:#047857;">
          <a href="tel:${phone}" style="color:#059669;font-weight:700;text-decoration:none;">📞 ${phone}</a>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:24px;padding:0 8px;">
      <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.7;">
        Автоматическое письмо от сайта <strong style="color:#059669;">MDK Transport LLC</strong><br/>
        100 N Howard St Ste W, Spokane, WA 99201 &nbsp;·&nbsp; ☎ 253-527-7115
      </p>
    </div>

  </div>
</body>
</html>`;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", truck: "", experience: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone: form.phone,
          truck: form.truck,
          experience: form.experience,
          message_html: buildEmailHtml(form.name, form.phone, form.truck, form.experience),
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setForm({ name: "", phone: "", truck: "", experience: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
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
            ) : error ? (
              <div className="text-center py-12">
                <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-900">{t("contact_error")}</p>
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
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-emerald-600/25 active:scale-[0.98]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t("contact_sending")}
                    </>
                  ) : (
                    <>
                      {t("contact_submit")}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}
