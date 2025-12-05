"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconShieldCheck,
  IconSparkles,
  IconUsers,
  IconMapPin,
  IconArrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils"; // Assuming you have a standard cn utility

const values = [
  {
    id: "trust",
    icon: IconShieldCheck,
    title: "Trust & Integrity",
    desc: "Transparent operations and clear communication. We prioritize predictable processes and ethical partnerships.",
    accent: "Established 2010",
  },
  {
    id: "guest",
    icon: IconSparkles,
    title: "Guest Experience",
    desc: "Proactive welcome touches and thoughtful amenities create memorable stays that drive 5-star reviews.",
    accent: "Tailored stays",
  },
  {
    id: "support",
    icon: IconUsers,
    title: "Exceptional Support",
    desc: "24/7 operations with fast response times, local cleaning teams, and proactive issue resolution.",
    accent: "24/7 Availability",
  },
  {
    id: "local",
    icon: IconMapPin,
    title: "Local Expertise",
    desc: "Market insights and demand forecasting allow us to optimize pricing and increase revenue.",
    accent: "Market-led strategy",
  },
];

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ModernValueCard = ({ value, index }) => {
  const Icon = value.icon;
  const delay = index * 0.1;

  return (
    <FadeUp delay={delay} className="h-full">
      <div
        className="group relative h-full bg-card border border-border/60 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
      >
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-6 sm:p-8 flex flex-col h-full z-10">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <Icon size={24} strokeWidth={1.5} />
            </div>
            {value.accent && (
              <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground border border-border/50">
                {value.accent}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {value.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {value.desc}
            </p>
          </div>

         
        </div>
      </div>
    </FadeUp>
  );
};

export default function CoreValuesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-background">
      
      {/* Background Pattern (Dot Grid) */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeUp>
           
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              The Foundation of <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Excellence
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We deliver dependable results for owners and unforgettable experiences for guests through a rigorous and dedicated approach.
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ModernValueCard key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}