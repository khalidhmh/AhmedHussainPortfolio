import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface ContactSectionProps {
  language: "en" | "ar";
}

export function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      success: "Message sent successfully!",
    },
    ar: {
      title: "تواصل معي",
      subtitle: "دعنا نناقش مشروعك القادم",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      send: "إرسال الرسالة",
      success: "تم إرسال الرسالة بنجاح!",
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Replace these IDs with your actual EmailJS settings 👇
  const serviceID = "service_xxx123";
  const templateID = "template_yyy456";
  const publicKey = "public_key_zzz789";

  emailjs
    .send(
      serviceID,
      templateID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      publicKey
    )
    .then(
      () => {
        toast.success(content[language].success);
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
      }
    );
};

  // ✅ روابط التواصل كما في الـ CV
  const socials = [
    {
      icon: Mail,
      label: "Gmail",
      link: "mailto:ahmedhussein055055@gmail.com",
      color: "#EA4335",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ahmed-hussein-90208225b",
      color: "#0077B5",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      link: "https://wa.me/201212929299",
      color: "#25D366",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/eng.ahmed.hussien.770127", // عدّل هنا لو عندك لينك فعلي
      color: "#1877F2",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/ahmedhussien6887/", // عدّل هنا لو عندك لينك فعلي
      color: "#E4405F",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 bg-muted/40 overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* اللوجو الشفاف بالخلفية */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/logo-watermark.png"
          alt="Logo Watermark"
          className="w-[800px] max-w-[90vw] h-auto object-contain select-none"
          draggable={false}
        />
      </motion.div>

      {/* لمسات الخلفية */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#76EEC6] opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block relative font-semibold text-3xl">
            {content[language].title}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </h2>
          <p className="text-muted-foreground mt-4">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* نموذج الإرسال */}
{/* Form – adaptive to light & dark themes */}
<Card
  className="
    p-8 
    backdrop-blur-md 
    rounded-2xl 
    transition-all 
    shadow-[0_4px_25px_rgba(0,0,0,0.08)]
    bg-white/70 border border-[#D4AF37]/20
    dark:bg-[#0E3B43]/60 dark:border-[#76EEC6]/20
  "
>
  <form onSubmit={handleSubmit} className="space-y-6">
    <Input
      placeholder={content[language].name}
      required
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="
        rounded-lg transition
        bg-white/60 border border-[#D4AF37]/30 text-[#0E3B43] placeholder:text-gray-500
        focus:border-[#D4AF37] focus:ring-[#D4AF37]/40
        dark:bg-[#0E3B43]/50 dark:text-[#E2E8F0] dark:border-[#76EEC6]/30 dark:placeholder:text-gray-300
        dark:focus:border-[#D4AF37] dark:focus:ring-[#D4AF37]/50
      "
    />
    <Input
      placeholder={content[language].email}
      required
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="
        rounded-lg transition
        bg-white/60 border border-[#D4AF37]/30 text-[#0E3B43] placeholder:text-gray-500
        focus:border-[#D4AF37] focus:ring-[#D4AF37]/40
        dark:bg-[#0E3B43]/50 dark:text-[#E2E8F0] dark:border-[#76EEC6]/30 dark:placeholder:text-gray-300
        dark:focus:border-[#D4AF37] dark:focus:ring-[#D4AF37]/50
      "
    />
    <Textarea
      rows={5}
      placeholder={content[language].message}
      required
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      className="
        rounded-lg transition
        bg-white/60 border border-[#D4AF37]/30 text-[#0E3B43] placeholder:text-gray-500
        focus:border-[#D4AF37] focus:ring-[#D4AF37]/40
        dark:bg-[#0E3B43]/50 dark:text-[#E2E8F0] dark:border-[#76EEC6]/30 dark:placeholder:text-gray-300
        dark:focus:border-[#D4AF37] dark:focus:ring-[#D4AF37]/50
      "
    />
    <Button
      type="submit"
      className="
        w-full font-semibold rounded-lg transition-all
        bg-gradient-to-t from-[#D4AF37] to-[#FFD95E] text-[#0E3B43]
        hover:from-[#EAC85A] hover:to-[#FFD95E]
        shadow-[0_4px_20px_rgba(212,175,55,0.3)]
        dark:bg-gradient-to-t dark:from-[#D4AF37] dark:to-[#C49B2E]
        dark:hover:from-[#EAC85A] dark:hover:to-[#D4AF37]
        dark:text-[#0E3B43]
      "
    >
      {content[language].send}
      <Send className="h-5 w-5 ml-2" />
    </Button>
  </form>
</Card>

          {/* جهات التواصل */}
          <div className="grid sm:grid-cols-2 gap-6">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-6 bg-card/70 border-border/50 hover:border-[#D4AF37] transition h-full">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition"
                        style={{ backgroundColor: `${s.color}25` }}
                      >
                        <Icon style={{ color: s.color }} className="w-8 h-8" />
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {s.label}
                      </p>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}