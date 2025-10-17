import React from "react";
import { motion } from "framer-motion";
import { Code2, Cog, Zap, Cpu, Layers, Box } from "lucide-react";

export function FloatingElements() {
  const icons = [
    { Icon: Code2, delay: 0, x: "10%", color: "#D4AF37" },
    { Icon: Cog, delay: 0.6, x: "80%", color: "#76EEC6" },
    { Icon: Cpu, delay: 1, x: "25%", color: "#76EEC6" },
    { Icon: Zap, delay: 1.4, x: "60%", color: "#D4AF37" },
    { Icon: Layers, delay: 1.8, x: "90%", color: "#D4AF37" },
    { Icon: Box, delay: 2.3, x: "5%", color: "#76EEC6" },
  ];

  // خلفية خفيفة فيها أيقونات بتطفو وتلف ببطء
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, delay, x, color }, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{ left: x }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 0.25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 22 + i * 3,
            repeat: Infinity,
            delay,
            ease: "linear",
          }}
        >
          <Icon className="w-8 h-8 lg:w-12 lg:h-12" style={{ color }} />
        </motion.div>
      ))}

      {/* أشكال هندسية تتحرك بيُسر */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute border-2 rounded-lg opacity-10"
          style={{
            left: `${10 + i * 15}%`,
            borderColor: i % 2 === 0 ? "#D4AF37" : "#76EEC6",
            width: `${40 + i * 12}px`,
            height: `${40 + i * 12}px`,
          }}
          initial={{ y: -150, rotate: 0 }}
          animate={{
            y: ["0vh", "120vh"],
            rotate: [0, i % 2 === 0 ? 360 : -360],
          }}
          transition={{
            duration: 30 + i * 4,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}