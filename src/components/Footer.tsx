"use client";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.jpg`}
                alt="MDK Transport"
                className="h-10 w-auto rounded invert brightness-200"
              />
              <span className="text-white font-bold text-xl">MDK Transport LLC</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              {t("about_text").substring(0, 120)}...
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("nav_contact")}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm">{t("footer_address")}</span>
              </div>
              <a href="tel:+12535277115" className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm">{t("footer_call")}: 253-527-7115</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("nav_home")}</h4>
            <nav className="space-y-2">
              {[
                { key: "nav_services", href: "#services" },
                { key: "nav_about", href: "#about" },
                { key: "nav_reviews", href: "#reviews" },
                { key: "nav_contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); const el = document.querySelector(link.href); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); } }}
                  className="block text-sm hover:text-emerald-400 transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MDK Transport LLC. {t("footer_rights")}.
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent("openPrivacy");
              window.dispatchEvent(event);
            }}
            className="text-sm text-gray-500 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {t("footer_privacy")}
          </button>
        </div>
      </div>
    </footer>
  );
}
