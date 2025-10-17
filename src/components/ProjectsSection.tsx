import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProjectsSectionProps {
  language: "en" | "ar";
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const content = {
    en: {
      title: "Featured Projects",
      projects: [
        {
          title: "British School – 6th of October",
          description:
            "Execution of full mechanical systems including water supply, fire fighting, and sewage networks. Managed installation, testing, and commissioning phases ensuring top-quality standards.",
          image: "/british-school.jpg",
          tags: ["Fire Fighting", "Water Supply", "Project Management"],
          date: "2019 – 2020",
        },
        {
          title: "Misr Italia – New Administrative Capital",
          description:
            "Infrastructure and internal plumbing systems including irrigation networks, pumping stations, and firefighting systems. Coordinated design and site supervision for mechanical scope.",
          image: "/misr-italia.jpg",
          tags: ["AutoCAD", "Revit", "Infrastructure", "Fire Fighting"],
          date: "2020 – 2022",
        },
        {
          title: "Entrada Compound – New Administrative Capital",
          description:
            "Senior engineer role focusing on coordination and supervision of mechanical networks: water, sewage, fire fighting, and pump stations. Led team execution and inspection approvals.",
          image: "/entrada-compound.jpg",
          tags: ["Mechanical Works", "QA/QC", "Supervision"],
          date: "2023",
        },
        {
          title: "Trio Compound – New Cairo",
          description:
            "Responsible for design review and field execution of internal plumbing and firefighting systems, ensuring compliance with mechanical standards and safety codes.",
          image: "/trio-compound.jpg",
          tags: ["Plumbing", "Fire Systems", "Design Review"],
          date: "2024",
        },
      ],
    },

    ar: {
      title: "المشاريع المميزة",
      projects: [
        {
          title: "المدرسة البريطانية – 6 أكتوبر",
          description:
            "تنفيذ كامل للأنظمة الميكانيكية بما في ذلك شبكات المياه والصرف ومكافحة الحريق. إدارة مراحل التركيب والتشغيل والتسليم وفقاً لأعلى معايير الجودة.",
          image: "/british-school.jpg",
          tags: ["مكافحة الحريق", "شبكات المياه", "إدارة المشاريع"],
          date: "2019 – 2020",
        },
        {
          title: "مشروع مصر إيطاليا – العاصمة الإدارية الجديدة",
          description:
            "تصميم وتنفيذ شبكات البنية التحتية والسباكة الداخلية بما يشمل الري، غرف الطلمبات، وأنظمة الحريق. الإشراف على الأعمال الميكانيكية بالموقع والتنسيق بين الفرق الهندسية.",
          image: "/misr-italia.jpg",
          tags: ["أوتوكاد", "ريفيت", "البنية التحتية", "مكافحة الحريق"],
          date: "2020 – 2022",
        },
        {
          title: "مشروع إنترادا – العاصمة الإدارية الجديدة",
          description:
            "توليت مهام كبير المهندسين في تنسيق وتنفيذ شبكات المياه والصرف ومكافحة الحريق وغرف الطلمبات، مع الإشراف الكامل ومتابعة الاعتمادات الفنية.",
          image: "/entrada-compound.jpg",
          tags: ["الأعمال الميكانيكية", "إشراف هندسي", "مراقبة الجودة"],
          date: "2023",
        },
        {
          title: "مشروع تريو كومباوند – القاهرة الجديدة",
          description:
            "مراجعة التصميمات والإشراف على تنفيذ الأنظمة الداخلية للسباكة والحريق بما يضمن الالتزام بالمعايير الهندسية وكود السلامة.",
          image: "/trio-compound.jpg",
          tags: ["السباكة", "أنظمة الحريق", "مراجعة التصميم"],
          date: "2024",
        },
      ],
    },
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#76EEC6] opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block relative text-3xl font-semibold">
            {content[language].title}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].projects.map((project, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <Card className="overflow-hidden bg-card/80 border border-border/50 hover:border-[#D4AF37] hover:shadow-lg transition">
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover h-48 w-full"
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#0E3B43]/0 hover:bg-[#0E3B43]/70 flex items-center justify-center transition"
                    whileHover={{ opacity: 1 }}
                  >
                    <ExternalLink className="text-white w-8 h-8" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>

                  <h3 className="font-semibold text-lg text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap pt-2">
                    {project.tags.map((tag, j) => (
                      <Badge
                        key={j}
                        variant="outline"
                        className="
                          border border-[#76EEC6]/50 
                          text-[#0E3B43] dark:text-[#E2E8F0]
                          bg-transparent hover:bg-[#76EEC6]/10 dark:hover:bg-[#E2E8F0]/10
                          hover:text-[#0E3B43] dark:hover:text-[#FFD95E]
                          transition
                        "
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}