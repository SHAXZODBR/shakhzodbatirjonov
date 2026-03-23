"use client";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "AI / Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision", "LSTM", "Transfer Learning"],
  },
  {
    title: "Data & Backend",
    skills: ["Pandas", "NumPy", "SQL", "FastAPI", "PostgreSQL", "Node.js", "Express.js"],
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "REST APIs"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "Docker", "Vercel", "Figma", "Linux", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">Skills</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">Technologies I Work With</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-surface border border-white/5"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs text-text-dim bg-white/[0.04] border border-white/8 rounded-md hover:text-white hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
