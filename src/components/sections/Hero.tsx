"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { ChevronDown } from "lucide-react";

const ROLES = ["AI/ML Engineer", "Medical AI Founder", "Startup Builder", "Full-Stack Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="container px-6 relative z-10 text-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-text-dim text-sm tracking-widest uppercase mb-8"
        >
          AI/ML Engineer · Tashkent, Uzbekistan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
        >
          Shakhzod<br />
          <span className="text-red">Batirjonov</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-8 mb-10"
        >
          <p className="text-lg md:text-xl text-text-dim font-light">
            {text}<span className="inline-block w-[2px] h-5 bg-red ml-0.5 animate-pulse align-middle" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-red text-white text-sm font-semibold rounded-lg hover:bg-red-light transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-white/15 text-white text-sm font-semibold rounded-lg hover:border-white/40 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-dim hover:text-white transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
