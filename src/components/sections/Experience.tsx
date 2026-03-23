"use client";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "CEO & Founder",
    company: "SIA Medical AI",
    link: "https://siaa.uz",
    period: "2025 – Present",
    description: "Leading a team building medical AI for radiology, cardiology, anaesthesia, and neonatology. Platform serves healthcare professionals with 88.4% recall accuracy.",
  },
  {
    role: "Founder",
    company: "SIGN Tech Team",
    period: "2023 – Present",
    description: "Built Uzbekistan's first AI investment intelligence platform, a startup valuation tool, and an educational chatbot serving thousands of students.",
  },
  {
    role: "Software Engineer",
    company: "NeuesLeben.uz",
    link: "https://neuesleben.uz",
    period: "Jan 2025 – Present",
    description: "Architecting production-grade web applications using Next.js, TypeScript, and server-side architectures for a scaling digital platform.",
  },
  {
    role: "Front-End Intern",
    company: "Kreativstorm",
    period: "Feb – Mar 2024",
    description: "Built modular React components and gained experience in modern frontend workflows, state management, and application architecture.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">Experience</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">Where I&apos;ve Worked</h2>
        </motion.div>

        <div className="max-w-3xl space-y-0">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-8 pb-10 last:pb-0 border-l border-white/8 group"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-red border-2 border-bg" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-red transition-colors">
                  {exp.role}
                </h3>
                <span className="text-xs text-text-dim font-medium">{exp.period}</span>
              </div>

              <p className="text-sm font-medium text-gold mb-3">
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {exp.company} ↗
                  </a>
                ) : exp.company}
              </p>

              <p className="text-sm text-text-dim leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
