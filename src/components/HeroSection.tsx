import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from "framer-motion";

interface HeroSectionProps {
  language: 'en' | 'ar';
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      name: 'Eng. Ahmed Hussein',
      title: 'Mechanical & Infrastructure Engineer',
      intro: 'Expert in AutoCAD, Revit, and AI-driven design.',
      downloadCV: 'Download CV',
      exploreProjects: 'Explore Projects',
    },
    ar: {
      name: 'م. أحمد حسين',
      title: 'مهندس مدني وبنية تحتية',
      intro: 'خبير في أوتوكاد، ريفيت، والتصميم القائم على الذكاء الاصطناعي.',
      downloadCV: 'تحميل السيرة الذاتية',
      exploreProjects: 'استكشف المشاريع',
    },
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern"
    >
      {/* Background Animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#76EEC6] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <motion.div
                className="absolute inset-0 border-2 border-[#D4AF37] rounded-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-[#76EEC6] rounded-lg opacity-70"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-4 overflow-hidden rounded-lg">
                <img
                  src="EngAhmed Hussain.jpg"
                  alt="Eng. Ahmed Hussein"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About info */}
          <div className="text-center lg:text-left max-w-xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              {content[language].name}
            </motion.h1>
            <motion.h2
              className="text-[#D4AF37] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content[language].title}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              {content[language].intro}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
  href="/ENG-AHMED HUSSIEN.pdf"
  download
  className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0E3B43] glow-gold group rounded-md px-6 py-3 text-lg font-medium shadow transition"
>
  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
  {content[language].downloadCV}
</a>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="border-[#76EEC6] text-foreground hover:bg-[#76EEC6]/10 group"
              >
                {content[language].exploreProjects}
                <ArrowRight
                  className={`h-5 w-5 ${language === 'ar' ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform`}
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}