"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "SIA Medical AI",
    role: "CEO & Founder",
    year: "2025",
    description: "Medical AI platform for radiology, cardiology, anaesthesia, and neonatology. Analyses MRI, CT, and X-ray scans with 88.4% recall accuracy in under 3 seconds.",
    tags: ["Python", "TensorFlow", "Computer Vision", "FastAPI"],
    link: "https://siaa.uz",
    featured: true,
  },
  {
    title: "SIGN Investment Intelligence",
    role: "Founder",
    year: "2024",
    description: "First AI investment index for Uzbekistan. Trained on 4,000+ YC startups with 78.9% accuracy for startup success prediction.",
    tags: ["Next.js", "Python", "ML", "Data Science"],
    link: "https://signaiuz.vercel.app",
  },
  {
    title: "SignTake",
    role: "Founder",
    year: "2024",
    description: "AI-powered startup valuation tool utilizing 4 distinct methodologies for precise market estimates.",
    tags: ["React", "TypeScript", "AI/ML"],
    link: "https://signtake.vercel.app",
  },
  {
    title: "EduBot",
    role: "Founder",
    year: "2023",
    description: "Bilingual AI educational companion for Uzbek students (Grades 5-11), making learning accessible nationwide.",
    tags: ["Python", "NLP", "Telegram API"],
    link: "https://t.me/SignPaperBot",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">Projects</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">Selected Work</h2>
        </motion.div>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group p-8 md:p-10 rounded-2xl border border-white/5 bg-surface hover:border-white/10 transition-all duration-300 ${
                project.featured ? "ring-1 ring-red/20" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-red/10 text-red border border-red/20 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-dim">{project.role} · {project.year}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text-dim hover:text-white transition-colors shrink-0"
                  >
                    Visit <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="text-text-dim text-[15px] leading-relaxed mb-5 max-w-3xl">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs text-text-dim bg-white/[0.04] border border-white/8 rounded-md"
                  >
                    {tag}
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
