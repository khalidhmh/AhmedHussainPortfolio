import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Booting mechanical systems...",
  "Calibrating infrastructure networks...",
  "Integrating AutoCAD, Revit, and AI-driven design...",
  "Welcome to the World of Eng. Ahmed Hussein 👷‍♂️",
];

export default function IntroScreen({ onFinish }: { onFinish: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (currentMessage < messages.length) {
      const fullText = messages[currentMessage];
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          timer = setTimeout(
            () => setDisplayedText(fullText.slice(0, displayedText.length + 1)),
            45
          );
        } else {
          timer = setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        if (displayedText.length > 0) {
          timer = setTimeout(
            () => setDisplayedText(fullText.slice(0, displayedText.length - 1)),
            18
          );
        } else {
          setIsDeleting(false);
          setCurrentMessage((msg) => msg + 1);
        }
      }
    } else {
      setTimeout(() => {
        setShow(false);
        setTimeout(onFinish, 1000);
      }, 1100);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentMessage, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F172A] text-[#E2E8F0] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo as watermark */}
          <motion.img
            src="/logo-watermark.png"
            alt="Logo Watermark"
            className="absolute opacity-[0.05] select-none"
            initial={{ scale: 1.2, rotate: 0 }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* Typing text */}
          <motion.h1
            className="text-2xl md:text-3xl font-mono text-center whitespace-pre-line relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
            <motion.span
              className="inline-block w-[8px] h-5 bg-yellow-400 ml-1 align-middle"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
            />
          </motion.h1>

          {/* subtle rotating gradient */}
          <motion.div
            className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-yellow-500/5 via-cyan-400/5 to-transparent"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}