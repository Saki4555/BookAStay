"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  IconHome,
  IconKey,
  IconSparkles,
  IconMapPin,
} from "@tabler/icons-react";

const iconMap = {
  "The House": IconHome,
  "Your Stay": IconKey,
  Experiences: IconMapPin,
};

export default function ServicesPage() {
  const { t } = useLanguage();
  const servicesData = t("services");
  const servicesGrid = t("services.servicesGrid");

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&q=80"
            alt="The house exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              {servicesData.hero.badge}
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {servicesData.hero.title}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              {servicesData.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes This House Special */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              {servicesData.sectionHeader.smallBadge}
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              {servicesData.sectionHeader.title}
            </h2>

            <p className="mt-4 text-muted-foreground">
              {servicesData.sectionHeader.description}
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {servicesGrid.map((s, idx) => {
              const Icon = iconMap[s.title] || IconSparkles;

              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="border rounded-xl p-8 bg-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {s.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {s.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {s.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-primary">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full rounded-md bg-primary text-primary-foreground py-3 text-sm font-medium hover:bg-primary/90"
                  >
                    {s.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
