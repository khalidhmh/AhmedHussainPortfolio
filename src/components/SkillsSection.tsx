import React from 'react';
import { motion } from "framer-motion";
import { Layers, Cpu, BarChart3, Wrench, Flame, Droplet, Gauge } from 'lucide-react';
import { Card } from './ui/card';

interface SkillsSectionProps {
  language: 'en' | 'ar';
}

export function SkillsSection({ language }: SkillsSectionProps) {
  const content = {
    en: {
      title: 'Skills & Expertise',
      skills: [
        { icon: Layers, name: 'Infrastructure Systems Design', level: 95, color: '#D4AF37' },
        { icon: Droplet, name: 'Water & Irrigation Networks', level: 92, color: '#76EEC6' },
        { icon: Flame, name: 'Fire Fighting & Alarm Systems', level: 90, color: '#D4AF37' },
        { icon: Wrench, name: 'Sanitary & Sewerage Systems', level: 88, color: '#76EEC6' },
        { icon: Gauge, name: 'Pump Stations & Water Tanks', level: 87, color: '#D4AF37' },
        { icon: BarChart3, name: 'Project Management', level: 92, color: '#76EEC6' },
        { icon: Cpu, name: 'AI Integration in Engineering', level: 85, color: '#D4AF37' },
        { icon: Layers, name: 'AutoCAD & Revit BIM Modeling', level: 94, color: '#76EEC6' },
      ],
    },
    ar: {
      title: 'المهارات والخبرات',
      skills: [
        { icon: Layers, name: 'تصميم أنظمة البنية التحتية', level: 95, color: '#D4AF37' },
        { icon: Droplet, name: 'شبكات المياه والري', level: 92, color: '#76EEC6' },
        { icon: Flame, name: 'أنظمة مكافحة الحريق والإنذار', level: 90, color: '#D4AF37' },
        { icon: Wrench, name: 'أنظمة الصرف الصحي والسباكة', level: 88, color: '#76EEC6' },
        { icon: Gauge, name: 'محطات الطلمبات وخزانات المياه', level: 87, color: '#D4AF37' },
        { icon: BarChart3, name: 'إدارة المشاريع', level: 92, color: '#76EEC6' },
        { icon: Cpu, name: 'دمج الذكاء الاصطناعي في التصميم الهندسي', level: 85, color: '#D4AF37' },
        { icon: Layers, name: 'نمذجة BIM باستخدام AutoCAD وRevit', level: 94, color: '#76EEC6' },
      ],
    },
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block relative text-2xl sm:text-3xl font-semibold">
            {content[language].title}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="p-6 bg-card/80 border-border/50 hover:border-[#D4AF37] transition relative overflow-hidden group">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#76EEC6] to-[#D4AF37]"
                      style={{ boxShadow: `0 0 15px ${skill.color}40` }}
                    >
                      <Icon className="w-7 h-7 text-[#0E3B43]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{skill.name}</h4>
                      <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                  </div>
                  <span
                    style={{ color: skill.color }}
                    className="absolute top-4 right-4 text-sm bg-muted/40 rounded-full px-3 py-1"
                  >
                    {skill.level}%
                  </span>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}