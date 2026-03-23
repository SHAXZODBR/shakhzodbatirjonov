"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Ventures";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { LangProvider, useLang } from "@/context/LangContext";
import CustomCursor from "@/components/CustomCursor";

function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-8 border-t border-white/5 relative z-10">
      <div className="container px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-text-dim">{t("footer", "copy")}</span>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/shaxzodbr" target="_blank" rel="noopener noreferrer" className="text-xs text-text-dim hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/SHAXZODBR" target="_blank" rel="noopener noreferrer" className="text-xs text-text-dim hover:text-white transition-colors">GitHub</a>
          <a href="https://t.me/shakhzodbtr" target="_blank" rel="noopener noreferrer" className="text-xs text-text-dim hover:text-white transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <main className="min-h-screen relative overflow-hidden">
        <div className="noise" />
        <CustomCursor />
        
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </LangProvider>
  );
}
