"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const IntroductionSection = () => {
  const { t } = useLanguage(); 

  const ref = useRef(null);
  const imagesRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: imagesRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const title = t("home.introduction.title");
 const paragraphs = t("home.introduction.paragraphs");

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 60
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-8"
            >
              {title}
            </motion.h2>

            {paragraphs.map((para, index) => {
              if (typeof para === "string") {
                return (
                  <motion.p 
                    key={index}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 last:mb-0"
                  >
                    {para}
                  </motion.p>
                );
              } else {
                return (
                  <motion.p 
                    key={index}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 last:mb-0"
                  >
                    {para.beforeLink}
                    <a 
                      href={para.linkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {para.linkText}
                    </a>
                    {para.afterLink}
                  </motion.p>
                );
              }
            })}
          </motion.div>

          <div ref={imagesRef} className="relative h-full min-h-[600px] w-full hidden md:block">
            {/* First Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-4/5 h-[90%] z-10 overflow-hidden rounded-md shadow-xl"
            >
              <img 
                src="/assets/3.webp" 
                alt="High ceilings" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>

            {/* Second Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 60 },
                visible: { 
                  opacity: 1, scale: 1, y: 0,
                  transition: { duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
                }
              }}
              style={{ y: y2 }}
              className="absolute bottom-10 left-0 w-3/5 aspect-[4/3] z-20 overflow-hidden rounded-md shadow-2xl border-4 border-white"
            >
              <img 
                src="/assets/9.webp" 
                alt="Palm trees" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
