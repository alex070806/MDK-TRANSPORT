"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyModal() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openPrivacy", handler);
    return () => window.removeEventListener("openPrivacy", handler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 sm:p-10 shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{t("privacy_title")}</h2>

        <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-4">
          <p>{t("privacy_intro")}</p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">{t("privacy_collect_title")}</h3>
          <p>{t("privacy_collect_text")}</p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">{t("privacy_use_title")}</h3>
          <p>{t("privacy_use_text")}</p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">{t("privacy_security_title")}</h3>
          <p>{t("privacy_security_text")}</p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">{t("privacy_contact_title")}</h3>
          <p>{t("privacy_contact_text")}</p>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
        >
          {t("privacy_back")}
        </button>
      </div>
    </div>
  );
}
