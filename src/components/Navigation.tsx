import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '/logo.png';

interface NavigationProps {
  language: 'en' | 'ar';
  onLanguageToggle: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function Navigation({ language, onLanguageToggle, theme, onThemeToggle }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
    ar: ['الرئيسية', 'نبذة', 'المهارات', 'المشاريع', 'تواصل'],
  };

  const scrollToSection = (index: number) => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const section = document.getElementById(sections[index]);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border' : 'bg-transparent'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logoImage}
              alt="Ahmed Hussein Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto transition-transform duration-300 hover:scale-150"
            />
          </div>

          {/* Nav items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems[language].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className="text-foreground hover:text-[#D4AF37] relative transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full bg-[#D4AF37] transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Theme & Language toggles */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onThemeToggle} className="rounded-full hover:bg-accent/20">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onLanguageToggle} className="rounded-full hover:bg-accent/20">
              <Globe className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}