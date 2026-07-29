"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Full Stack Web Developer",
  "Frontend & Backend Developer",
  "React • Next.js • Node.js",
  "Building Scalable & Responsive Websites",
  "Passionate About Modern Web Technologies",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h3
          key={texts[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="absolute left-0 text-2xl font-bold text-cyan-400"
        >
          {texts[index]}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
}