"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

const SKILLS_DATA = [
  { key: "cat1", skills: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision", "LSTM", "Transfer Learning"] },
  { key: "cat2", skills: ["Pandas", "NumPy", "SQL", "FastAPI", "PostgreSQL", "Node.js", "Express.js"] },
  { key: "cat3", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "REST APIs"] },
  { key: "cat4", skills: ["Git", "Docker", "Vercel", "Figma", "Linux", "CI/CD"] },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">{t("skills", "label")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">{t("skills", "title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-surface border border-white/5 hover:border-red/15 transition-all duration-300 group"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5 group-hover:text-red transition-colors">{t("skills", cat.key)}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-xs text-text-dim bg-white/[0.04] border border-white/8 rounded-md hover:text-white hover:border-red/30 hover:bg-red/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
