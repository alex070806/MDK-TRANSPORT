"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 sm:p-10 shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{t("privacy_title")}</h2>

            <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-4">
              <p>
                MDK Transport LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your personal information when you
                visit our website or use our services.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">Information We Collect</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you fill out a contact form,
                including your name, phone number, and information about your vehicle and experience level.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">How We Use Your Information</h3>
              <p>
                We use the information we collect to contact you regarding our dispatch services, to respond to your
                inquiries, and to improve our services. We do not sell or share your personal information with third parties.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at 253-527-7115 or visit our
                office at 100 N Howard St Ste W, Spokane, WA 99201.
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              {t("privacy_back")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
