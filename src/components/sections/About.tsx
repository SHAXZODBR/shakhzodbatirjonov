"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">About</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Building AI products that solve<br className="hidden md:block" /> real problems in Central Asia.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4"
        >
          <div className="space-y-5">
            <p className="text-text-dim text-[16px] leading-relaxed">
              I'm a Computer Science student at Inha University in Tashkent, graduating May 2026. As CEO of SIA, I lead a team building medical AI that helps doctors analyse MRI, CT and X-ray scans with 88.4% recall accuracy.
            </p>
            <p className="text-text-dim text-[16px] leading-relaxed">
              As founder of SIGN Tech, I've built Uzbekistan's first AI investment intelligence platform, an AI startup valuation tool, and an educational bot used by school students nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "88.4%", label: "Recall Accuracy" },
              { value: "5+", label: "AI Products Shipped" },
              { value: "1st", label: "ByteBridge Hackathon" },
              { value: "4", label: "Clinical AI Modules" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-xl bg-surface border border-white/5"
              >
                <div className="font-heading text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-text-dim">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
