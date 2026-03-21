"use client";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
              {(() => { const s = t("about_text").split(". "); return s[0] + "."; })()}
            </p>
          </div>

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

          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer_map_title")}</h4>
            <div className="rounded-xl overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.9!2d-117.4260!3d47.6588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e185c30c1c8e3%3A0x5e9e5e5e5e5e5e5e!2s100%20N%20Howard%20St%20Ste%20W%2C%20Spokane%2C%20WA%2099201!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MDK Transport Office"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 pt-8 border-t border-gray-800">
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
