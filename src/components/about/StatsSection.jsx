"use client";

import React from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { useLanguage } from "@/context/LanguageContext";

// Stats Section Component
const StatsSection = () => {
  const { t } = useLanguage();
  const stats = t("about.stats");

  return (
    <section className="py-16  sm:py-20  lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16   relative overflow-hidden">
      <div className="absolute inset-0 opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid gap-8 sm:gap-10 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 rounded-md bg-muted backdrop-blur-sm border border-primary/10 hover:bg-muted-foreground/15 transition-colors duration-300"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-3">
                <CountUp end={parseFloat(stat.value)} duration={2} suffix={stat.value.includes('+') ? '+' : ''} />
              </div>
              <div className="text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
