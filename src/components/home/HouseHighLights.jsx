"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function HouseHighlights() {
  const { t } = useLanguage();

  // Now represents aspects of ONE house
  const highlights = t("home.highlights.items");

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold mb-4"
          >
            {t("home.highlights.header")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            {t("home.highlights.subtitle")}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-secondary"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="space-y-3">
                  <span className="text-xs tracking-widest uppercase text-white/70">
                    {item.subtitle}
                  </span>

                  <h3 className="text-2xl font-semibold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed max-w-xs">
                    {item.description}
                  </p>

                  {item.href && (
                    <a
                      href={item.href}
                      className="inline-block mt-4 text-sm font-medium text-white underline underline-offset-4 opacity-80 hover:opacity-100 transition"
                    >
                      {item.link}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
