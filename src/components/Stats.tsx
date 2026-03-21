"use client";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Users, Route, Award } from "lucide-react";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { icon: Users, value: 50, suffix: "+", labelKey: "stats_drivers" },
  { icon: Route, value: 5000, suffix: "+", labelKey: "stats_trips" },
  { icon: Award, value: 5, suffix: "+", labelKey: "stats_experience" },
];

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-emerald-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-emerald-100" />
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-emerald-100 text-lg font-medium">
                  {t(stat.labelKey)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
