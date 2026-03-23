"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

interface RoleData {
  role: string;
  company: string;
  period: string;
  desc: string;
  link?: string;
}

export default function Experience() {
  const { locale, t } = useLang();

  const ROLES: RoleData[] = locale === "ru" ? [
    { role: "CEO и Основатель", company: "SIA Medical AI", period: "2025 – н.в.", desc: "Руковожу командой, создающей медицинский ИИ для радиологии, кардиологии, анестезиологии и неонатологии. Точность модели — 88.4%." },
    { role: "Основатель", company: "SIGN Tech Team", period: "2023 – н.в.", desc: "Создал первую ИИ-платформу инвестиционной аналитики в Узбекистане, инструмент оценки стартапов и образовательного чат-бота." },
    { role: "Инженер-программист", company: "NeuesLeben.uz", period: "Январь 2025 – н.в.", desc: "Проектирую веб-приложения продакшн-уровня на Next.js, TypeScript и серверных архитектурах.", link: "https://neuesleben.uz" },
    { role: "Стажёр Front-End", company: "Kreativstorm", period: "Фев – Март 2024", desc: "Разрабатывал модульные React-компоненты, изучал современные фронтенд-практики и управление состоянием." },
  ] : locale === "uz" ? [
    { role: "Bosh direktor va Asoschisi", company: "SIA Medical AI", period: "2025 – hozir", desc: "Radiologiya, kardiologiya, anesteziologiya va neonatologiya uchun tibbiy AI yaratuvchi jamoaga rahbarlik. Model aniqligi — 88.4%." },
    { role: "Asoschisi", company: "SIGN Tech Team", period: "2023 – hozir", desc: "O'zbekistondagi birinchi AI investitsiya tahlili platformasi, startap baholash vositasi va ta'limiy chatbotni yaratdim." },
    { role: "Dasturchi muhandis", company: "NeuesLeben.uz", period: "2025-yil yanvar – hozir", desc: "Next.js, TypeScript va server arxitekturalari yordamida ishlab chiqarishga tayyor veb-ilovalar loyihalashtirish.", link: "https://neuesleben.uz" },
    { role: "Front-End stajyor", company: "Kreativstorm", period: "2024-yil fev – mart", desc: "Modulli React komponentlar yaratish, zamonaviy frontend amaliyotlari va holat boshqaruvi bo'yicha tajriba orttirildi." },
  ] : [
    { role: "CEO & Founder", company: "SIA Medical AI", period: "2025 – Present", desc: "Leading a team building medical AI for radiology, cardiology, anaesthesia, and neonatology. Platform serves healthcare professionals with 88.4% recall accuracy." },
    { role: "Founder", company: "SIGN Tech Team", period: "2023 – Present", desc: "Built Uzbekistan's first AI investment intelligence platform, a startup valuation tool, and an educational chatbot serving thousands of students." },
    { role: "Software Engineer", company: "NeuesLeben.uz", period: "Jan 2025 – Present", desc: "Architecting production-grade web applications using Next.js, TypeScript, and server-side architectures for a scaling digital platform.", link: "https://neuesleben.uz" },
    { role: "Front-End Intern", company: "Kreativstorm", period: "Feb – Mar 2024", desc: "Built modular React components and gained experience in modern frontend workflows, state management, and application architecture." },
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red text-sm font-semibold tracking-widest uppercase mb-4">{t("experience", "label")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">{t("experience", "title")}</h2>
        </motion.div>

        <div className="max-w-3xl space-y-0">
          {ROLES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-8 pb-10 last:pb-0 border-l border-white/8 group hover:border-l-red/30 transition-colors"
            >
              <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-red border-2 border-bg group-hover:scale-150 transition-transform" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-red transition-colors">{exp.role}</h3>
                <span className="text-xs text-text-dim font-medium">{exp.period}</span>
              </div>

              <p className="text-sm font-medium text-gold mb-3">
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company} ↗</a>
                ) : exp.company}
              </p>

              <p className="text-sm text-text-dim leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
