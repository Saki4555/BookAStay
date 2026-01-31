"use client";

import React from "react";
import { motion } from "framer-motion"; // Consistent with previous framer-motion imports
import { useLanguage } from "@/context/LanguageContext";

const GalleryHero = () => {
  const { t } = useLanguage();
  const heroData = t("gallery.hero");

  // Modern ease curves
  const easeOutExpo = [0.19, 1, 0.22, 1];

  return (
    <section className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] w-full overflow-hidden">
      {/* Background Image with Cinematic Zoom */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <img
          src="/assets/21.webp"
          alt="House in Pwani Mchangani"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Modern Gradient Mask: Darker on text side, clearer on image side */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-secondary/5 to-transparent" />
      
      {/* Subtle bottom shadow for transition to next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col justify-center h-full max-w-4xl">
          
          {/* Staggered Motion Container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {/* Badge Section */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6"
            >
              <span className="h-[2px] w-8 sm:w-10 md:w-12 bg-primary" />
              <span className="text-primary text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                {heroData.badge}
              </span>
            </motion.div>

            {/* Title: Refined Tracking and Weight */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-[1.1] tracking-tighter"
            >
              {heroData.title}
            </motion.h1>

            {/* Description: High Readability */}
            {/* <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl font-light"
            >
              {heroData.description}
            </motion.p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;