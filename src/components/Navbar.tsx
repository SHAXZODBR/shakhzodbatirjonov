"use client";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang, Locale } from "@/context/LangContext";

const LANGS: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { locale, setLocale, t } = useLang();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { name: t("nav", "about"), href: "#about" },
    { name: t("nav", "projects"), href: "#projects" },
    { name: t("nav", "experience"), href: "#experience" },
    { name: t("nav", "skills"), href: "#skills" },
    { name: t("nav", "education"), href: "#education" },
    { name: t("nav", "contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled
        ? "py-3 bg-bg/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        : "py-6 bg-transparent"
        }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red to-gold origin-left"
        style={{ scaleX }}
      />
      
      <div className="container px-6 flex items-center justify-between">
        <a href="#hero" className="font-heading text-2xl font-bold text-white tracking-tight">
          S<span className="text-red">.</span>B
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-text-dim hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[13px] font-medium text-text-dim hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/8 hover:border-white/20"
            >
              <Globe size={14} />
              {locale.toUpperCase()}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 bg-surface border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                >
                  {LANGS.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                      className={`block w-full px-5 py-2.5 text-left text-sm font-medium transition-colors ${locale === lang.code
                        ? "text-red bg-red/10"
                        : "text-text-dim hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className="ml-1 px-5 py-2 bg-red text-white text-[13px] font-semibold rounded-lg hover:bg-red-light transition-colors duration-300"
          >
            {t("nav", "cta")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-0 bg-bg/98 backdrop-blur-2xl z-[999] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-white p-1"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading font-semibold text-white hover:text-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Language Switcher */}
            <div className="flex gap-3 mt-4">
              {LANGS.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLocale(lang.code); }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${locale === lang.code
                    ? "bg-red text-white border-red"
                    : "text-text-dim border-white/10 hover:border-white/30"
                    }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 bg-red text-white font-semibold rounded-lg"
            >
              {t("nav", "cta")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
