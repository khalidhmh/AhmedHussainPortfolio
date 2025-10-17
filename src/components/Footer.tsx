import React from "react";
import { Heart } from "lucide-react";

interface FooterProps {
  language: "en" | "ar";
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      copyright: "2025 Ahmed Hussein. All rights reserved.",
      madeWith: "Made with",
      by: "by a passionate engineer",
    },
    ar: {
      copyright: "2025 أحمد حسين. جميع الحقوق محفوظة.",
      madeWith: "صُنع بـ",
      by: "بواسطة مهندس شغوف",
    },
  };

  return (
    <footer className="relative py-10 border-t border-border/30" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container px-6 mx-auto text-center">
        <div className="flex justify-center items-center gap-2 text-muted-foreground">
          <span>{content[language].madeWith}</span>
          <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
          <span>{content[language].by}</span>
        </div>
        <p className="mt-3 text-muted-foreground text-sm">{content[language].copyright}</p>
      </div>
    </footer>
  );
}