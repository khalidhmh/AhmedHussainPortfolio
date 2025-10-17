import React from 'react';
import { motion } from "framer-motion";
import { Briefcase, Award, Cpu, Users, Wrench, Layers } from 'lucide-react';
import { Card } from './ui/card';

interface AboutSectionProps {
  language: 'en' | 'ar';
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    en: {
      title: 'About Me',
      bio: `Mechanical Engineer specialized in infrastructure and internal plumbing systems with over 5 years of professional experience. I have contributed to the design and implementation of water networks, irrigation systems, fire fighting systems, and sanitary works for multiple large-scale projects in Egypt.

      During my career at Solid, Sorouh, and currently at Alleanza Contracting & Trading Company, I participated in projects such as British School in 6th of October, Misr Italia (New Administrative Capital), Entrada Compound, and Trio Compound – managing mechanical works from design coordination to execution.

      I combine technical proficiency in AutoCAD and Revit with innovative approaches using AI-assisted design and digital engineering to ensure accuracy, efficiency, and sustainability in modern infrastructure projects.`,
      expertise: [
        { icon: Briefcase, title: 'Infrastructure Design & Execution', desc: 'Design and implementation of water, firefighting, and irrigation networks.' },
        { icon: Layers, title: 'Plumbing & Drainage Systems', desc: 'Sanitary and internal plumbing systems integration and supervision.' },
        { icon: Wrench, title: 'Mechanical Systems Management', desc: 'Pump stations, air valve chambers, and mechanical supervision on-site.' },
        { icon: Cpu, title: 'AI & Digital Tools', desc: 'Applying AI-driven design to enhance precision and performance.' },
        { icon: Users, title: 'Team & Project Leadership', desc: 'Collaborating closely with multidisciplinary teams through all project phases.' },
      ],
    },
    ar: {
      title: 'نبذة عني',
      bio: `مهندس ميكانيكا متخصص في أنظمة البنية التحتية والسباكة الداخلية، بخبرة تتجاوز ٥ سنوات في تصميم وتنفيذ شبكات المياه، الري، شبكات مكافحة الحريق، وأنظمة الصرف الصحي لعدد من المشاريع الكبرى في مصر.

      خلال عملي في شركات مثل سوليد وصروح، وحالياً في شركة أليانزا للمقاولات والتجارة، شاركت في تنفيذ مشروعات مثل المدرسة البريطانية بمدينة ٦ أكتوبر، ومشروعات مصر إيطاليا بالعاصمة الإدارية الجديدة، ومشروعي إنترادا وتريو كومباوند بمدينة القاهرة الجديدة، حيث توليت إدارة الأعمال الميكانيكية من مرحلة التصميم وحتى التسليم.

      أجمع بين الكفاءة الفنية في AutoCAD وRevit، واستخدام التقنيات الحديثة كالذكاء الاصطناعي والهندسة الرقمية لضمان الدقة والكفاءة والاستدامة في مشاريع البنية التحتية الحديثة.`,
      expertise: [
        { icon: Briefcase, title: 'تصميم وتنفيذ شبكات البنية التحتية', desc: 'شبكات مياه الشرب والري ومكافحة الحريق من التصميم حتى التنفيذ.' },
        { icon: Layers, title: 'أنظمة السباكة والصرف الصحي', desc: 'تصميم وتنفيذ وربط الأنظمة الداخلية للمياه والصرف.' },
        { icon: Wrench, title: 'إدارة الأنظمة الميكانيكية', desc: 'إشراف وتنفيذ غرف الطلمبات وصمامات الهواء والدفاع المدني.' },
        { icon: Cpu, title: 'الذكاء الاصطناعي والتقنيات الرقمية', desc: 'تطبيق الأدوات الرقمية لرفع جودة ودقة التصميم الهندسي.' },
        { icon: Users, title: 'قيادة وإدارة المشاريع', desc: 'التنسيق مع فرق العمل المتعددة خلال جميع مراحل المشروع.' },
      ],
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#76EEC6] opacity-10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block relative text-2xl sm:text-3xl font-semibold">
            {content[language].title}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50 islamic-border">
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {content[language].bio}
              </p>
            </Card>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid gap-4"
          >
            {content[language].expertise.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                  <Card className="p-6 bg-card/70 backdrop-blur hover:border-[#D4AF37] border-border/50 transition group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#76EEC6] to-[#D4AF37] group-hover:scale-110 transition">
                        <Icon className="w-6 h-6 text-[#0E3B43]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}