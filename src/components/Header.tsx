"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Lang, langNames } from "@/i18n/translations";

const navItems = [
  { key: "nav_home", href: "#hero" },
  { key: "nav_services", href: "#services" },
  { key: "nav_about", href: "#about" },
  { key: "nav_reviews", href: "#reviews" },
  { key: "nav_contact", href: "#contact" },
];

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.jpg`}
              alt="MDK Transport"
              className="h-10 sm:h-12 w-auto rounded"
            />
            <span className={`font-bold text-lg sm:text-xl transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
              MDK Transport
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-emerald-500/10 ${
                  scrolled ? "text-gray-700 hover:text-emerald-600" : "text-white/90 hover:text-white"
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {lang.toUpperCase()}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[140px]"
                  >
                    {(Object.entries(langNames) as [Lang, string][]).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => { setLang(code); setLangOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-emerald-50 ${
                          lang === code ? "bg-emerald-50 text-emerald-700 font-medium" : "text-gray-700"
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <a
              href="tel:+12535277115"
              className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40"
            >
              <Phone className="w-4 h-4" />
              253-527-7115
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
              <a
                href="tel:+12535277115"
                className="flex items-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-lg font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                253-527-7115
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
