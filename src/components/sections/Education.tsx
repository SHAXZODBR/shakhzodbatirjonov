"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">Education</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">Academic Background</h2>
        </motion.div>

        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-surface border border-white/5"
          >
            <h3 className="text-xl font-bold text-white mb-1">B.Sc. Computer Science & Software Engineering</h3>
            <p className="text-sm font-medium text-gold mb-3">Inha University in Tashkent · 2022 – 2026</p>
            <p className="text-sm text-text-dim leading-relaxed">
              English-medium programme. Coursework in algorithms, distributed systems, data structures, and software engineering principles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-surface border border-white/5"
          >
            <h3 className="text-xl font-bold text-white mb-1">Data Science Programme</h3>
            <p className="text-sm font-medium text-gold mb-3">uStudy (at Uzinfocom) · 2025 – Present</p>
            <p className="text-sm text-text-dim leading-relaxed">
              Specialized track in deep learning and predictive analytics, applied to national-scale digital infrastructure.
            </p>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-8 border-t border-white/5"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Awards & Hackathons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { result: "1st Place", event: "ByteBridge Hackathon", year: "2025" },
                { result: "3rd Place", event: "TechGenius Hackathon", year: "2023" },
                { result: "Organizer", event: "ICT Week Uzbekistan", year: "2025" },
                { result: "Finalist", event: "Paynet Hackathon", year: "2026" },
              ].map((award, i) => (
                <div key={i} className="flex items-baseline gap-3 py-3 px-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className={`text-sm font-bold shrink-0 ${
                    award.result === "1st Place" ? "text-gold" : 
                    award.result === "3rd Place" ? "text-[#CD7F32]" : "text-text-dim"
                  }`}>
                    {award.result}
                  </span>
                  <span className="text-sm text-text-dim">{award.event} · {award.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
