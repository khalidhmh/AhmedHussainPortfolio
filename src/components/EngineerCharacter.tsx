import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wrench, Hammer, Ruler, FileSpreadsheet } from "lucide-react";

interface EngineerCharacterProps {
  language?: "en" | "ar";
}

//  كائن مهندس نشط
export function EngineerCharacter({ language = "en" }: EngineerCharacterProps) {
  const isRTL = language === "ar";

  // الصور و الأدوات بنفس الترتيب
  const frames = [
    { img: "/engineer-1.png", tool: <Ruler className="w-5 h-5 text-[#D4AF37]" /> },
    { img: "/engineer-2.png", tool: <FileSpreadsheet className="w-5 h-5 text-[#76EEC6]" /> },
    { img: "/engineer-3.png", tool: <Wrench className="w-5 h-5 text-[#D4AF37]" /> },
    { img: "/engineer-4.png", tool: <Hammer className="w-5 h-5 text-[#76EEC6]" /> },
  ];

  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 4000);
    return () => clearInterval(id);
  }, [frames.length]);

  const { img, tool } = frames[frameIndex];

  return (
    <motion.div
      className={`fixed ${isRTL ? "left-6 lg:left-10" : "right-6 lg:right-10"} z-[9999] pointer-events-none`}
      style={{ bottom: "50px" }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {/* صورة المهندس */}
      <motion.img
        key={frameIndex}
        src={img}
        alt="Engineer Character"
        className="w-[130px] select-none pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      />

      {/* الأداة الجانبية */}
      <motion.div
        className={`absolute ${isRTL ? "right-[110px]" : "left-[110px]"} bottom-[60px]`}
        animate={{
          rotate: [0, 360],
          y: [0, -5, 0],
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="bg-background/60 border border-border backdrop-blur-md p-2 rounded-full shadow-lg">
          {tool}
        </div>
      </motion.div>

      {/* شرر بسيط حوالين المهندس */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
          style={{
            [isRTL ? "right" : "left"]: `${20 + i * 15}px`,
            bottom: `${80 + i * 10}px`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </motion.div>
  );
}