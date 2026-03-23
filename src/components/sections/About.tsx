"use client";
import { motion, Variants } from "framer-motion";
import { useLang } from "@/context/LangContext";

export default function About() {
  const { t } = useLang();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl"
        >
          <motion.p variants={itemVariants} className="text-red text-sm font-semibold tracking-widest uppercase mb-4">{t("about", "label")}</motion.p>
          <motion.h2 variants={itemVariants} className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            {t("about", "title")}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-5"
          >
            <motion.p variants={itemVariants} className="text-text-dim text-[16px] leading-relaxed">{t("about", "p1")}</motion.p>
            <motion.p variants={itemVariants} className="text-text-dim text-[16px] leading-relaxed">{t("about", "p2")}</motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "SOTA", label: t("about", "stat1Label") },
              { value: "5+", label: t("about", "stat2Label") },
              { value: "1st", label: t("about", "stat3Label") },
              { value: "4", label: t("about", "stat4Label") },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(192,57,43,0.4)" }}
                className="p-5 rounded-2xl bg-surface border border-white/5 transition-all duration-300 group"
              >
                <div className="font-heading text-3xl font-bold text-white group-hover:text-red transition-colors mb-1">{stat.value}</div>
                <div className="text-xs text-text-dim">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
