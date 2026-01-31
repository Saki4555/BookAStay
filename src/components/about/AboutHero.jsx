"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const AboutHero = () => {
  const { t } = useLanguage();
  const heroData = t("about.hero");

  // Custom ease for a high-end feel
  const easeOutExpo = [0.19, 1, 0.22, 1];

  return (
    <section className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] w-full overflow-hidden">
      {/* 1. Background with Parallax Scale */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img
          src="/assets/21.webp"
          alt="Boutique vacation rental"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 2. Sophisticated Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-secondary/5 to-transparent" />
      
      {/* 3. Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col justify-center h-full max-w-4xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {/* Badge */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 md:mb-8"
            >
              <span className="h-[2px] w-8 sm:w-10 md:w-12 bg-primary" />
              <span className="text-primary text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                {heroData.badge}
              </span>
            </motion.div>

            {/* Title - Modern Tighter Tracking */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-[1.1] tracking-tighter"
            >
              {heroData.title}
            </motion.h1>

            {/* Description */}
            {/* <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-light"
            >
              {heroData.description}
            </motion.p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;