"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "en" | "ru" | "uz";

// Flexible type for nested translation objects
type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = { [key: string]: TranslationValue };

const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      subtitle: "AI/ML Engineer · Tashkent, Uzbekistan",
      cta1: "View My Work",
      cta2: "Get in Touch",
    },
    about: {
      label: "About",
      title: "Building AI products that solve real problems in Central Asia.",
      p1: "I'm a Computer Science student at Inha University in Tashkent, graduating May 2026. As CEO of SIA, I lead a team building medical AI that helps doctors analyse MRI, CT and X-ray scans with high recall and precision.",
      p2: "As founder of SIGN Tech, I've built Uzbekistan's first AI investment intelligence platform, an AI startup valuation tool, and an educational bot used by school students nationwide.",
      stat1Label: "AI Performance",
      stat2Label: "AI Products Shipped",
      stat3Label: "ByteBridge Hackathon",
      stat4Label: "Clinical AI Modules",
    },
    projects: {
      label: "Projects",
      title: "Selected Work",
      featured: "Featured",
      visit: "Visit",
      sia: {
        title: "SIA Medical AI",
        role: "CEO & Founder",
        desc: "Medical AI platform for radiology, cardiology, anaesthesia, and neonatology. Analyses MRI, CT, and X-ray scans with high precision in under 3 seconds.",
      },
      sign: {
        title: "SIGN Investment Intelligence",
        role: "Founder",
        desc: "First AI investment index for Uzbekistan. Trained on 4,000+ YC startups with industry-leading predictive models for startup success.",
      },
      signtake: {
        title: "SignTake",
        role: "Founder",
        desc: "AI-powered startup valuation tool utilizing 4 distinct methodologies for precise market estimates.",
      },
      edubot: {
        title: "EduBot",
        role: "Founder",
        desc: "Bilingual AI educational companion for Uzbek students (Grades 5-11), making learning accessible nationwide.",
      },
    },
    experience: {
      label: "Experience",
      title: "Where I've Worked",
      roles: {
        r1: { role: "CEO & Founder", company: "SIA Medical AI", period: "2025 – Present", desc: "Leading a team building medical AI for radiology, cardiology, anaesthesia, and neonatology. Platform serves healthcare professionals with high-performance diagnostic modules." },
        r2: { role: "Founder", company: "SIGN Tech Team", period: "2023 – Present", desc: "Built Uzbekistan's first AI investment intelligence platform, a startup valuation tool, and an educational chatbot serving thousands of students." },
        r3: { role: "Software Engineer", company: "NeuesLeben.uz", period: "Jan 2025 – Present", desc: "Architecting production-grade web applications using Next.js, TypeScript, and server-side architectures for a scaling digital platform." },
        r4: { role: "Front-End Intern", company: "Kreativstorm", period: "Feb – Mar 2024", desc: "Built modular React components and gained experience in modern frontend workflows, state management, and application architecture." },
      },
    },
    skills: {
      label: "Skills",
      title: "Technologies I Work With",
      cat1: "AI / Machine Learning",
      cat2: "Data & Backend",
      cat3: "Web Development",
      cat4: "Tools & Infrastructure",
    },
    education: {
      label: "Education",
      title: "Academic Background",
      awards: "Awards & Hackathons",
      degree1: { title: "B.Sc. Computer Science & Software Engineering", school: "Inha University in Tashkent · 2022 – 2026", desc: "English-medium programme. Coursework in algorithms, distributed systems, data structures, and software engineering principles." },
      degree2: { title: "Data Science Programme", school: "uStudy (at Uzinfocom) · 2025 – Present", desc: "Specialized track in deep learning and predictive analytics, applied to national-scale digital infrastructure." },
      a1: { result: "1st Place", event: "ByteBridge Hackathon", year: "2025" },
      a2: { result: "3rd Place", event: "TechGenius Hackathon", year: "2023" },
      a3: { result: "Organizer", event: "ICT Week Uzbekistan", year: "2025" },
      a4: { result: "Finalist", event: "Paynet Hackathon", year: "2026" },
    },
    contact: {
      label: "Contact",
      title: "Let's Work Together",
      desc: "Open to collaborations, research partnerships, and opportunities in AI and software engineering.",
    },
    footer: {
      copy: "© 2026 Shakhzod Batirjonov",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      experience: "Опыт",
      skills: "Навыки",
      education: "Образование",
      contact: "Контакты",
      cta: "Связаться",
    },
    hero: {
      subtitle: "AI/ML Инженер · Ташкент, Узбекистан",
      cta1: "Мои работы",
      cta2: "Связаться",
    },
    about: {
      label: "Обо мне",
      title: "Создаю AI-продукты, решающие реальные проблемы в Центральной Азии.",
      p1: "Я студент факультета Computer Science в Университете Инха в Ташкенте, выпуск — май 2026. Как CEO SIA, руковожу командой, создающей медицинский ИИ для анализа МРТ, КТ и рентген-снимков с высокой точностью.",
      p2: "Как основатель SIGN Tech, создал первую в Узбекистане ИИ-платформу инвестиционной аналитики, инструмент оценки стартапов и образовательного бота для школьников по всей стране.",
      stat1Label: "Производительность ИИ",
      stat2Label: "ИИ-продуктов",
      stat3Label: "ByteBridge Хакатон",
      stat4Label: "Клинических модулей",
    },
    projects: {
      label: "Проекты",
      title: "Избранные работы",
      featured: "Главный",
      visit: "Открыть",
      sia: {
        title: "SIA Medical AI",
        role: "CEO и Основатель",
        desc: "Медицинская ИИ-платформа для радиологии, кардиологии, анестезиологии и неонатологии. Анализирует МРТ, КТ и рентген-снимки с высокой точностью менее чем за 3 секунды.",
      },
      sign: {
        title: "SIGN Investment Intelligence",
        role: "Основатель",
        desc: "Первый ИИ-индекс для инвестиций в Узбекистане. Обучен на 4,000+ стартапах YC с использованием передовых предиктивных моделей.",
      },
      signtake: {
        title: "SignTake",
        role: "Основатель",
        desc: "ИИ-инструмент оценки стартапов с использованием 4 различных методологий для точных рыночных оценок.",
      },
      edubot: {
        title: "EduBot",
        role: "Основатель",
        desc: "Двуязычный ИИ-помощник для узбекских школьников (5-11 классы), делающий обучение доступным по всей стране.",
      },
    },
    experience: {
      label: "Опыт",
      title: "Где я работал",
      roles: {
        r1: { role: "CEO и Основатель", company: "SIA Medical AI", period: "2025 – н.в.", desc: "Руковожу командой, создающей медицинский ИИ для радиологии, кардиологии, анестезиологии и неонатологии с высокой диагностической надежностью." },
        r2: { role: "Основатель", company: "SIGN Tech Team", period: "2023 – н.в.", desc: "Создал первую ИИ-платформу инвестиционной аналитики в Узбекистане, инструмент оценки стартапов и образовательного чат-бота." },
        r3: { role: "Инженер-программист", company: "NeuesLeben.uz", period: "Январь 2025 – н.в.", desc: "Проектирую веб-приложения продакшн-уровня на Next.js, TypeScript и серверных архитектурах." },
        r4: { role: "Стажёр Front-End", company: "Kreativstorm", period: "Фев – Март 2024", desc: "Разрабатывал модульные React-компоненты, изучал современные фронтенд-практики и управление состоянием." },
      },
    },
    skills: {
      label: "Навыки",
      title: "Технологии, с которыми я работаю",
      cat1: "ИИ / Машинное обучение",
      cat2: "Данные и Бэкенд",
      cat3: "Веб-разработка",
      cat4: "Инструменты и Инфраструктура",
    },
    education: {
      label: "Образование",
      title: "Академический опыт",
      awards: "Награды и хакатоны",
      degree1: { title: "Бакалавр Computer Science", school: "Университет Инха в Ташкенте · 2022 – 2026", desc: "Англоязычная программа. Алгоритмы, распределённые системы, структуры данных и принципы разработки ПО." },
      degree2: { title: "Программа Data Science", school: "uStudy (при Uzinfocom) · 2025 – н.в.", desc: "Специализация в глубоком обучении и предиктивной аналитике для государственной цифровой инфраструктуры." },
      a1: { result: "1-е место", event: "ByteBridge Хакатон", year: "2025" },
      a2: { result: "3-е место", event: "TechGenius Хакатон", year: "2023" },
      a3: { result: "Организатор", event: "ICT Week Узбекистан", year: "2025" },
      a4: { result: "Финалист", event: "Paynet Хакатон", year: "2026" },
    },
    contact: {
      label: "Контакты",
      title: "Давайте работать вместе",
      desc: "Открыт к сотрудничеству, исследовательским партнёрствам и возможностям в области ИИ и разработки ПО.",
    },
    footer: {
      copy: "© 2026 Шахзод Батиржонов",
    },
  },
  uz: {
    nav: {
      about: "Men haqimda",
      projects: "Loyihalar",
      experience: "Tajriba",
      skills: "Ko'nikmalar",
      education: "Ta'lim",
      contact: "Aloqa",
      cta: "Bog'lanish",
    },
    hero: {
      subtitle: "AI/ML Muhandis · Toshkent, O'zbekiston",
      cta1: "Ishlarimni ko'ring",
      cta2: "Bog'lanish",
    },
    about: {
      label: "Men haqimda",
      title: "Markaziy Osiyoda haqiqiy muammolarni hal qiluvchi AI mahsulotlar yarataman.",
      p1: "Men Toshkentdagi Inha universitetida Computer Science talabasi bo'lib, 2026-yil may oyida bitiraman. SIA bosh direktori sifatida MRT, KT va rentgen tahlili uchun yuqori aniqlikdagi tibbiy AI yaratayotgan jamoaga rahbarlik qilaman.",
      p2: "SIGN Tech asoschisi sifatida O'zbekistondagi birinchi AI investitsiya tahlili platformasini, startap baholash vositasini va butun mamlakat bo'ylab o'quvchilar foydalanayotgan ta'limiy botni yaratdim.",
      stat1Label: "AI Samaradorligi",
      stat2Label: "AI Mahsulotlar",
      stat3Label: "ByteBridge Xakaton",
      stat4Label: "Klinik AI Modullari",
    },
    projects: {
      label: "Loyihalar",
      title: "Tanlangan ishlar",
      featured: "Asosiy",
      visit: "Ochish",
      sia: {
        title: "SIA Medical AI",
        role: "Bosh direktor va Asoschisi",
        desc: "Radiologiya, kardiologiya, anesteziologiya va neonatologiya uchun tibbiy AI platforma. MRT, KT va rentgen tahlilini yuqori aniqlik bilan 3 soniyadan kamroq vaqtda amalga oshiradi.",
      },
      sign: {
        title: "SIGN Investment Intelligence",
        role: "Asoschisi",
        desc: "O'zbekistondagi birinchi AI investitsiya indeksi. 4,000+ YC startaplari asosida o'qitilgan ilg'or bashoratli modellar.",
      },
      signtake: {
        title: "SignTake",
        role: "Asoschisi",
        desc: "4 xil metodologiya asosida aniq bozor baholarini beradigan AI startap baholash vositasi.",
      },
      edubot: {
        title: "EduBot",
        role: "Asoschisi",
        desc: "O'zbek o'quvchilari uchun ikki tildagi AI ta'lim yordamchisi (5-11 sinflar), ta'limni butun mamlakat bo'ylab qulay qiladi.",
      },
    },
    experience: {
      label: "Tajriba",
      title: "Qayerda ishlaganman",
      roles: {
        r1: { role: "Bosh direktor va Asoschisi", company: "SIA Medical AI", period: "2025 – hozir", desc: "Radiologiya, kardiologiya, anesteziologiya va neonatologiya uchun yuqori samarali tibbiy AI yaratuvchi jamoaga rahbarlik." },
        r2: { role: "Asoschisi", company: "SIGN Tech Team", period: "2023 – hozir", desc: "O'zbekistondagi birinchi AI investitsiya tahlili platformasi, startap baholash vositasi va ta'limiy chatbotni yaratdim." },
        r3: { role: "Dasturchi muhandis", company: "NeuesLeben.uz", period: "2025-yil yanvar – hozir", desc: "Next.js, TypeScript va server arxitekturalari yordamida ishlab chiqarishga tayyor veb-ilovalar loyihalashtirish." },
        r4: { role: "Front-End stajyor", company: "Kreativstorm", period: "2024-yil fev – mart", desc: "Modulli React komponentlar yaratish, zamonaviy frontend amaliyotlari va holat boshqaruvi bo'yicha tajriba orttirildi." },
      },
    },
    skills: {
      label: "Ko'nikmalar",
      title: "Ishlatadigan texnologiyalar",
      cat1: "AI / Mashinali o'rganish",
      cat2: "Ma'lumotlar va Backend",
      cat3: "Veb-dasturlash",
      cat4: "Vositalar va Infratuzilma",
    },
    education: {
      label: "Ta'lim",
      title: "Akademik ma'lumot",
      awards: "Mukofotlar va xakatonlar",
      degree1: { title: "Bakalavr Computer Science", school: "Toshkentdagi Inha universiteti · 2022 – 2026", desc: "Ingliz tilida ta'lim. Algoritmlar, taqsimlangan tizimlar, ma'lumotlar tuzilmalari va dasturiy ta'minot muhandisligi." },
      degree2: { title: "Data Science dasturi", school: "uStudy (Uzinfocom) · 2025 – hozir", desc: "Davlat raqamli infratuzilmasi uchun chuqur o'rganish va bashoratli tahlilga ixtisoslashgan yo'nalish." },
      a1: { result: "1-o'rin", event: "ByteBridge Xakaton", year: "2025" },
      a2: { result: "3-o'rin", event: "TechGenius Xakaton", year: "2023" },
      a3: { result: "Tashkilotchi", event: "ICT Week O'zbekiston", year: "2025" },
      a4: { result: "Finalist", event: "Paynet Xakaton", year: "2026" },
    },
    contact: {
      label: "Aloqa",
      title: "Keling, birga ishlaylik",
      desc: "AI va dasturiy ta'minot sohasida hamkorlik, tadqiqot sheriklik va imkoniyatlarga ochiqman.",
    },
    footer: {
      copy: "© 2026 Shaxzod Batirjonov",
    },
  },
};

interface LangContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (section: string, key: string) => string;
  tObj: (section: string, key: string) => Record<string, string>;
}

const LangContext = createContext<LangContextType>({
  locale: "en",
  setLocale: () => {},
  t: () => "",
  tObj: () => ({}),
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  // Helper for recursive access
  const getNested = (obj: any, path: string[]): any => {
    return path.reduce((prev, curr) => prev?.[curr], obj);
  };

  const t = (section: string, key: string): string => {
    const val = getNested(translations[locale], [section, key]);
    return typeof val === "string" ? val : key;
  };

  const tObj = (section: string, key: string): Record<string, string> => {
    const val = getNested(translations[locale], [section, key]);
    return (val && typeof val === "object") ? (val as Record<string, string>) : {};
  };

  return (
    <LangContext.Provider value={{ locale, setLocale, t, tObj }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
