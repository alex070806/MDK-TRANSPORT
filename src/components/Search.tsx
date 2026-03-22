"use client";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, HelpCircle, Zap, Info, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, Lang } from "@/i18n/translations";

type CategoryIcon = "faq" | "services" | "about" | "contact";

type SearchEntry = {
  title: string;
  description: string;
  anchor: string;
  category: string;
  icon: CategoryIcon;
};

const ICON_MAP: Record<CategoryIcon, React.ElementType> = {
  faq: HelpCircle,
  services: Zap,
  about: Info,
  contact: Phone,
};

const ICON_STYLE: Record<CategoryIcon, string> = {
  faq: "text-amber-600 bg-amber-50",
  services: "text-emerald-600 bg-emerald-50",
  about: "text-blue-600 bg-blue-50",
  contact: "text-purple-600 bg-purple-50",
};

const UI_STRINGS: Record<Lang, Record<string, string>> = {
  ru: {
    placeholder: "Поиск по сайту…",
    no_results: "Ничего не найдено",
    sections: "Разделы",
    close_hint: "чтобы закрыть",
  },
  ua: {
    placeholder: "Пошук по сайту…",
    no_results: "Нічого не знайдено",
    sections: "Розділи",
    close_hint: "щоб закрити",
  },
  en: {
    placeholder: "Search the site…",
    no_results: "No results found",
    sections: "Sections",
    close_hint: "to close",
  },
  es: {
    placeholder: "Buscar en el sitio…",
    no_results: "Sin resultados",
    sections: "Secciones",
    close_hint: "para cerrar",
  },
};

function buildIndex(lang: Lang): SearchEntry[] {
  const tr = translations[lang];
  const entries: SearchEntry[] = [];

  for (let i = 1; i <= 4; i++) {
    entries.push({
      title: tr[`service_${i}_title`],
      description: tr[`service_${i}_desc`],
      anchor: "#services",
      category: tr["nav_services"],
      icon: "services",
    });
  }

  for (let i = 1; i <= 8; i++) {
    entries.push({
      title: tr[`faq_${i}_q`],
      description: tr[`faq_${i}_a`],
      anchor: "#faq",
      category: "FAQ",
      icon: "faq",
    });
  }

  entries.push({
    title: tr["about_title"],
    description: tr["about_text"],
    anchor: "#about",
    category: tr["nav_about"],
    icon: "about",
  });

  for (const type of ["enclosed", "open36", "open50", "semi"]) {
    entries.push({
      title: tr[`trailer_${type}`],
      description: tr[`trailer_${type}_desc`],
      anchor: "#about",
      category: tr["trailers_title"],
      icon: "about",
    });
  }

  for (let i = 1; i <= 3; i++) {
    entries.push({
      title: tr[`how_step${i}_title`],
      description: tr[`how_step${i}_desc`],
      anchor: "#about",
      category: tr["how_title"],
      icon: "about",
    });
  }

  for (let i = 1; i <= 3; i++) {
    entries.push({
      title: tr[`why_${i}_title`],
      description: tr[`why_${i}_desc`],
      anchor: "#about",
      category: tr["why_title"],
      icon: "about",
    });
  }

  entries.push({
    title: tr["contact_title"],
    description: tr["contact_subtitle"],
    anchor: "#contact",
    category: tr["nav_contact"],
    icon: "contact",
  });

  return entries;
}

export default function SearchModal() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const ui = UI_STRINGS[lang];

  const entries = useMemo(() => buildIndex(lang), [lang]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return entries
      .filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, entries]);

  const handleOpen = () => {
    setOpen(true);
    setQuery("");
  };

  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handleOpen();
      }
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const navigateTo = (anchor: string) => {
    handleClose();
    setTimeout(() => {
      const el = document.querySelector(anchor);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150);
  };

  const quickSections: { label: string; anchor: string; icon: CategoryIcon }[] =
    [
      { label: t("nav_services"), anchor: "#services", icon: "services" },
      { label: t("nav_about"), anchor: "#about", icon: "about" },
      { label: "FAQ", anchor: "#faq", icon: "faq" },
      { label: t("nav_contact"), anchor: "#contact", icon: "contact" },
    ];

  return (
    <>
      <button
        onClick={handleOpen}
        aria-label="Search"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all border bg-white/80 border-gray-200 text-gray-500 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline text-xs text-gray-400 font-mono">⌘K</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
              onClick={handleClose}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.96, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed top-[8%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[101] px-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                  <Search className="w-5 h-5 text-gray-400 shrink-0" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={ui.placeholder}
                    className="flex-1 text-gray-900 placeholder-gray-400 outline-none bg-transparent text-[15px]"
                  />
                  <button
                    onClick={handleClose}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {query.trim().length > 0 ? (
                  <div className="max-h-[360px] overflow-y-auto">
                    {results.length === 0 ? (
                      <p className="text-center text-gray-500 py-12 text-sm">
                        {ui.no_results}
                      </p>
                    ) : (
                      <ul className="py-2 divide-y divide-gray-50">
                        {results.map((item, idx) => {
                          const Icon = ICON_MAP[item.icon];
                          return (
                            <li key={idx}>
                              <button
                                onClick={() => navigateTo(item.anchor)}
                                className="w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors group"
                              >
                                <span
                                  className={`mt-0.5 p-1.5 rounded-lg shrink-0 ${ICON_STYLE[item.icon]}`}
                                >
                                  <Icon className="w-3.5 h-3.5" />
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate group-hover:text-emerald-700 transition-colors">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                                <span className="text-[10px] text-gray-400 shrink-0 mt-0.5 px-1.5 py-0.5 bg-gray-100 rounded-md font-medium">
                                  {item.category}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div className="p-4">
                    <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                      {ui.sections}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickSections.map((item) => {
                        const Icon = ICON_MAP[item.icon];
                        return (
                          <button
                            key={item.anchor}
                            onClick={() => navigateTo(item.anchor)}
                            className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group border border-gray-100 hover:border-emerald-200"
                          >
                            <span
                              className={`p-1.5 rounded-lg shrink-0 ${ICON_STYLE[item.icon]}`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </span>
                            <span className="text-sm text-gray-700 group-hover:text-emerald-700 font-medium transition-colors">
                              {item.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/60">
                  <span className="text-xs text-gray-400">
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono shadow-sm">
                      ESC
                    </kbd>{" "}
                    {ui.close_hint}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
