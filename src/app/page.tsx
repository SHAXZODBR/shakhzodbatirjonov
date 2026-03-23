"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Ventures";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />

      <footer className="py-8 border-t border-white/5">
        <div className="container px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-text-dim">© 2026 Shakhzod Batirjonov</span>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/shaxzodbr" target="_blank" rel="noopener noreferrer" className="text-xs text-text-dim hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/SHAXZODBR" target="_blank" rel="noopener noreferrer" className="text-xs text-text-dim hover:text-white transition-colors">GitHub</a>
            <a href="https://t.me/shakhzodbtr" target="_blank" rel="noopener noreferrer" className="text-xs text-text-dim hover:text-white transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
