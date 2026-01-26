"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CallToAction() {
  const { t } = useLanguage();
  return (
    <section className=" bg-background">
      <div className="">
        {/* Floating Dark Card */}
        <div className="relative overflow-hidden bg-secondary px-6 py-16 md:px-16 md:py-24 text-center shadow-2xl">
          
          {/* Background Texture Effects */}
          <div className="absolute inset-0 z-0 opacity-10">
            {/* Simple CSS Grid Pattern */}
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} 
            />
          </div>
          
          {/* Subtle Radial Glow to highlight text */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 text-sm font-medium text-secondary-foreground/90 backdrop-blur-sm"
            >
              {t("home.callToAction.badge")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 tracking-tight"
            >
              {t("home.callToAction.header")} <br className="hidden md:block" />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-secondary-foreground/80 mb-10 leading-relaxed max-w-2xl"
            >
              {t("home.callToAction.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            >
              {/* Primary Button */}
              <Link href="/contact" passHref>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 h-14 px-8 rounded-full text-lg shadow-[0_0_20px_-5px_var(--color-primary)]"
                >
                  {t("home.callToAction.primaryButton")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              {/* Secondary "Ghost" Button */}
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground h-14 px-8 rounded-full text-lg"
                >
                  {t("home.callToAction.secondaryButton")}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}