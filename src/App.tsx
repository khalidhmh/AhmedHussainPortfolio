import React, { useState, useEffect } from "react";
import IntroScreen from "./components/IntroScreen";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { EngineerCharacter } from "./components/EngineerCharacter";
import { FloatingElements } from "./components/FloatingElements";
import { ParticleEffect } from "./components/ParticleEffect";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));

  const toggleTheme = () =>
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });

  return (
    <>
      {!introDone && (
        <IntroScreen onFinish={() => setIntroDone(true)} />
      )}

      {introDone && (
        <div className="min-h-screen relative">
          <ParticleEffect />
          <FloatingElements />
          <EngineerCharacter language={language} />

          <Navigation
            language={language}
            onLanguageToggle={toggleLanguage}
            theme={theme}
            onThemeToggle={toggleTheme}
          />

          <main>
            <HeroSection language={language} />
            <AboutSection language={language} />
            <SkillsSection language={language} />
            <ProjectsSection language={language} />
            <ContactSection language={language} />
          </main>

          <Footer language={language} />
          <Toaster position="top-right" />
        </div>
      )}
    </>
  );
}