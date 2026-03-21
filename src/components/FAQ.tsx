"use client";
import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";

const faqKeys = [1, 2, 3, 4, 5, 6, 7, 8];

function FAQItem({ questionKey, answerKey, isOpen, onToggle }: {
  questionKey: string;
  answerKey: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { t } = useLanguage();

  return (
    <div className={`border rounded-2xl transition-all duration-300 ${isOpen ? "border-emerald-200 bg-emerald-50/50 shadow-sm" : "border-gray-200 bg-white hover:border-emerald-200"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
          {t(questionKey)}
        </span>
        <ChevronDown className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
            {t(answerKey)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {t("faq_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t("faq_title")}
          </h2>
        </AnimateIn>

        <div className="space-y-3">
          {faqKeys.map((num, i) => (
            <AnimateIn key={num} delay={i * 0.04}>
              <FAQItem
                questionKey={`faq_${num}_q`}
                answerKey={`faq_${num}_a`}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
