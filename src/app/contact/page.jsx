"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Instagram, Mail, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const contactData = t("contact");

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
     {/* Hero Section - MODERNIZED */}
      <section className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* 1. Background Image with Slow Zoom Effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img
            src="/assets/22.webp"
            alt="Zanzibar beach house"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* 2. Modern Gradient Overlay instead of Flat Color */}
        {/* This fades from dark (left) to transparent (right), improving text readability while keeping the image bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/50 to-transparent" />

        {/* Optional: A subtle gradient from bottom for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent md:hidden" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            {/* 3. Staggered Animation Container */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2, // Delays each child
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6"
              >
                <span className="h-[2px] w-8 sm:w-10 md:w-12 bg-primary" />{" "}
                {/* Slightly thicker line for presence */}
                <span className="text-primary text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-widest uppercase">
                  {contactData.hero.badge}
                </span>
              </motion.div>

              {/* Title - Tighter Tracking for Modern Look */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-[1.1] tracking-tighter"
              >
                {contactData.hero.title}
              </motion.h1>

              {/* Description - Better Opacity Handling */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-light"
              >
                {contactData.hero.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section - IMPROVED RESPONSIVENESS */}
      <section className="relative z-10 py-10 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid gap-6 sm:gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-12 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Column: Location & Context (7 columns) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full text-primary">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-secondary tracking-tight">
                    {contactData.location.title}
                  </h2>
                </div>

                <Card className="bg-card border border-border/60 shadow-lg shadow-primary/5 overflow-hidden rounded-2xl sm:rounded-3xl">
                  {/* Address Text */}
                  <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">
                      {contactData.location.address.title}
                    </h3>
                    <div className="space-y-0.5 sm:space-y-1 text-muted-foreground text-base sm:text-lg leading-relaxed">
                      <p>{contactData.location.address.line1}</p>
                      <p>{contactData.location.address.line2}</p>
                    </div>
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-primary/80 font-medium flex items-center gap-2">
                      <span className="block w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {contactData.location.note}
                    </p>
                  </div>

                  {/* Map Integration - Full Width Visual */}
                  <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] border-t border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15874.1234567890!2d39.3621!3d-5.9345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTYnMDQuMiJTIDM5wrAyMSc0My42IkU!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        filter: "grayscale(10%) contrast(105%)",
                      }} // Slight filter to match site aesthetic
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pwani Mchangani Location"
                      className="absolute inset-0"
                    />
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Right Column: Booking (5 columns) */}
            <div className="lg:col-span-5 relative">
              <motion.div variants={itemVariants} className="lg:sticky lg:top-8">
                <Card className="bg-card border border-border shadow-xl shadow-secondary/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
                    <span className="text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 block">
                      {contactData.booking.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-3 sm:mb-4">
                      {contactData.booking.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {contactData.booking.intro}
                    </p>
                  </div>

                  {/* Pricing Cards */}
                  <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    {/* High Season */}
                    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-secondary text-secondary-foreground p-4 sm:p-5 md:p-6 transition-transform hover:scale-[1.02] duration-300">
                      <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-10">
                        <Calendar className="w-12 h-12 sm:w-16 sm:h-16" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                          <span className="text-xs sm:text-sm font-medium opacity-90 uppercase tracking-wider">
                            {contactData.booking.pricing.highSeason.label}
                          </span>
                          <span className="bg-primary/20 text-primary-foreground text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-white/10">
                            PEAK
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1 mb-0.5 sm:mb-1">
                          <span className="text-2xl sm:text-3xl font-bold">
                            {contactData.booking.pricing.highSeason.price}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm opacity-70">
                          {contactData.booking.pricing.highSeason.dates}
                        </p>
                      </div>
                    </div>

                    {/* Low Season */}
                    <div className="group rounded-xl sm:rounded-2xl bg-muted/50 border border-border p-4 sm:p-5 md:p-6 transition-colors hover:bg-muted duration-300">
                      <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider">
                          {contactData.booking.pricing.lowSeason.label}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 mb-0.5 sm:mb-1">
                        <span className="text-2xl sm:text-3xl font-bold text-primary">
                          {contactData.booking.pricing.lowSeason.price}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {contactData.booking.pricing.lowSeason.dates}
                      </p>
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm font-semibold text-secondary text-center">
                      {contactData.booking.contactTitle}
                    </p>

                    <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                      {/* Instagram Button */}
                      <a
                        href="https://www.instagram.com/windsofzanzibar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border hover:border-primary/50 bg-background hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="p-1.5 sm:p-2 bg-gradient-to-tr from-purple-500 to-pink-500 text-white rounded-lg group-hover:shadow-md transition-all">
                            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                            <span className="block text-xs sm:text-sm font-bold text-secondary">
                              Instagram
                            </span>
                            <span className="block text-[10px] sm:text-xs text-muted-foreground">
                              @windsofzanzibar
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </a>

                      {/* Email Button */}
                      <a
                        href="mailto:windsofzanzibar@gmail.com"
                        className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border hover:border-primary/50 bg-background hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="p-1.5 sm:p-2 bg-primary text-primary-foreground rounded-lg group-hover:shadow-md transition-all">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                            <span className="block text-xs sm:text-sm font-bold text-secondary">
                              Email
                            </span>
                            <span className="block text-[10px] sm:text-xs text-muted-foreground">
                              windsofzanzibar@gmail.com
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </a>
                    </div>

                    <p className="pt-4 sm:pt-6 text-[10px] sm:text-xs text-center text-muted-foreground/80 leading-relaxed max-w-xs mx-auto">
                      {contactData.booking.footer}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}