"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function AnimateIn({ children, className = "", delay = 0, y = 24 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
