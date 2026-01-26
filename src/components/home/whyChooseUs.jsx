"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const highlights = t("home.whyChooseUs.highlights");

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-foreground mb-6"
          >
            {t("home.whyChooseUs.header")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {t("home.whyChooseUs.description")}
          </motion.p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="flex flex-col gap-6 bg-card rounded-xl p-10"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-md bg-primary/10 text-primary">
                {h.icon}
              </div>

              {/* Text */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  {h.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {h.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
