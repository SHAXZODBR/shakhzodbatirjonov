"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

export default function Education() {
  const { t, tObj } = useLang();

  const d1 = tObj("education", "degree1");
  const d2 = tObj("education", "degree2");
  const awards = [
    tObj("education", "a1"),
    tObj("education", "a2"),
    tObj("education", "a3"),
    tObj("education", "a4"),
  ];

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">{t("education", "label")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">{t("education", "title")}</h2>
        </motion.div>

        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-red/15 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-1">{d1.title}</h3>
            <p className="text-sm font-medium text-gold mb-3">{d1.school}</p>
            <p className="text-sm text-text-dim leading-relaxed">{d1.desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-red/15 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-1">{d2.title}</h3>
            <p className="text-sm font-medium text-gold mb-3">{d2.school}</p>
            <p className="text-sm text-text-dim leading-relaxed">{d2.desc}</p>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-8 border-t border-white/5"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">{t("education", "awards")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-baseline gap-3 py-3 px-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                >
                  <span className={`text-sm font-bold shrink-0 ${
                    award.result?.includes("1") ? "text-gold" :
                    award.result?.includes("3") ? "text-[#CD7F32]" : "text-text-dim"
                  }`}>
                    {award.result}
                  </span>
                  <span className="text-sm text-text-dim">{award.event} · {award.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
