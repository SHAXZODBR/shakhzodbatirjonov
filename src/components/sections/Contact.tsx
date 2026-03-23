"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Linkedin, Send, Github } from "lucide-react";
import { useLang } from "@/context/LangContext";

const LINKS = [
  { icon: Mail, label: "shakhzodbatirjonov@gmail.com", href: "mailto:shakhzodbatirjonov@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shaxzodbr" },
  { icon: Github, label: "GitHub", href: "https://github.com/SHAXZODBR" },
  { icon: Send, label: "Telegram", href: "https://t.me/shakhzodbtr" },
];

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red text-sm font-semibold tracking-widest uppercase mb-4"
          >
            {t("contact", "label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-8"
          >
            {t("contact", "title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-lg mb-16 leading-relaxed"
          >
            {t("contact", "desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {LINKS.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-surface border border-white/5 hover:border-red/30 hover:shadow-[0_0_40px_rgba(192,57,43,0.05)] transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] text-text-dim group-hover:bg-red/10 group-hover:text-red transition-all">
                  <item.icon size={20} />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs text-text-dim group-hover:text-white transition-colors">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-white truncate">
                    {item.href.replace("mailto:", "").replace("https://", "").replace("t.me/", "@")}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
