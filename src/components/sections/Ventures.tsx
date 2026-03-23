"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/context/LangContext";

interface ProjectData {
  title: string;
  role: string;
  year: string;
  desc: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const { t } = useLang();
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-surface transition-all duration-300 ${
        project.featured ? "ring-1 ring-red/20" : ""
      }`}
    >
      {/* Follow-cursor glow effect */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]"
        style={{
          background: `radial-gradient(600px circle at ${useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])}, rgba(192,57,43,0.1), transparent 40%)`
        }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red transition-colors">
                {project.title}
              </h3>
              {project.featured && (
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-red/10 text-red border border-red/20 rounded-full animate-pulse">
                  {t("projects", "featured")}
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
              className="inline-flex items-center gap-2 text-sm text-text-dim hover:text-red transition-colors shrink-0 group/link"
            >
              {t("projects", "visit")} <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

        <p className="text-text-dim text-[15px] leading-relaxed mb-6 max-w-3xl">{project.desc}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[11px] font-medium text-text-dim bg-white/[0.04] border border-white/8 rounded-lg group-hover:border-red/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t, tObj } = useLang();

  const getProject = (key: string): any => {
    return tObj("projects", key);
  };

  const PROJECTS: ProjectData[] = [
    { ...getProject("sia"), year: "2025", tags: ["Python", "TensorFlow", "Computer Vision", "FastAPI"], link: "https://siaa.uz", featured: true },
    { ...getProject("sign"), year: "2024", tags: ["Next.js", "Python", "ML", "Data Science"], link: "https://signaiuz.vercel.app" },
    { ...getProject("signtake"), year: "2024", tags: ["React", "TypeScript", "AI/ML"], link: "https://signtake.vercel.app" },
    { ...getProject("edubot"), year: "2023", tags: ["Python", "NLP", "Telegram API"], link: "https://t.me/SignPaperBot" },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">{t("projects", "label")}</p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-white"
          >
            {t("projects", "title")}
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
