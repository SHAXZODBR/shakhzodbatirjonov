"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, Github } from "lucide-react";

const LINKS = [
  { icon: Mail, label: "shakhzodbatirjonov@gmail.com", href: "mailto:shakhzodbatirjonov@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shaxzodbr" },
  { icon: Github, label: "GitHub", href: "https://github.com/SHAXZODBR" },
  { icon: Send, label: "Telegram", href: "https://t.me/shakhzodbtr" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/30">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-[16px] mb-12"
          >
            Open to collaborations, research partnerships, and opportunities in AI and software engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {LINKS.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface border border-white/5 hover:border-white/15 text-sm text-text-dim hover:text-white transition-all"
              >
                <item.icon size={16} />
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
