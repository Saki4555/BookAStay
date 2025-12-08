"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';


// Hero Section Component
const AboutHero = () => {
  const { t } = useLanguage();
  const heroData = t("about.hero");
  return (
    <section className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"
          alt="Boutique vacation rental agency team and modern property exterior"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/70 to-secondary/60" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex flex-col justify-center h-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-0.5 w-16 bg-primary" />
              <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">{heroData.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              {heroData.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl font-light">
              {heroData.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default AboutHero;