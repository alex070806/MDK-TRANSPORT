"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const reviewKeys = [1, 2, 3, 4, 5, 6];
const avatarColors = [
  "from-emerald-400 to-emerald-600",
  "from-teal-400 to-teal-600",
  "from-cyan-400 to-cyan-600",
  "from-green-400 to-green-600",
  "from-emerald-500 to-teal-500",
  "from-teal-500 to-cyan-500",
];

export default function Reviews() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviewKeys.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviewKeys.length) % reviewKeys.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const reviewNum = reviewKeys[current];
  const name = t(`review_${reviewNum}_name`);

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-emerald-500/30">
            {t("nav_reviews")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t("reviews_title")}
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="min-h-[320px] sm:min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
                  <Quote className="w-10 h-10 text-emerald-500/30 mb-6" />

                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                    &ldquo;{t(`review_${reviewNum}_text`)}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[current]} flex items-center justify-center text-white font-bold text-lg`}>
                      {name[0]}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{name}</div>
                      <div className="text-gray-500 text-sm">{t(`review_${reviewNum}_role`)}</div>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviewKeys.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-emerald-500" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
