"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const StorySection = () => {
  const { t } = useLanguage();
  const story = t("about.story");

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background Ambience - Subtle "Wind" Effect */}
      <div className="absolute top-0 left-0 w-full h-[120%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] -z-10 opacity-30" />
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-32 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Boutique Badge */}
              <div className="inline-flex items-center gap-3 mb-8 pl-1">
                <span className="h-px w-8 bg-foreground/30"></span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/70">
                  {story.badge}
                </span>
              </div>

              {/* Mobile Header (Visible only on mobile) */}
              <h2 className="lg:hidden text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                {story.header}
              </h2>

              {/* Story Text */}
              <div className="space-y-6 relative">
                {/* Decorative side line */}
                <div className="absolute -left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden md:block" />

                {story.paragraphs && story.paragraphs.map((para, idx) => (
                  <p 
                    key={idx} 
                    className="text-base md:text-lg leading-relaxed text-muted-foreground text-justify"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/contact">
                  <Button className="rounded-full h-14 px-10 bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-500 shadow-xl">
                    {story.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The "Arch" Image + Overlapping Title */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            
            {/* Desktop Header - Positioned Absolute */}
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block absolute top-12 -left-12 z-20 text-6xl xl:text-7xl font-serif text-foreground leading-none max-w-lg drop-shadow-sm"
            >
              {story.header}  
            </motion.h2>

            {/* Main Image Container with Arch Shape */}
            <motion.div 
              initial={{ clipPath: 'inset(10% 10% 10% 10% round 100px 100px 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 100px 100px 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[500px] lg:h-[700px] shadow-2xl"
            >
              <img 
                src="/assets/27.webp" 
                alt="Winds of Zanzibar Architecture" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              
              {/* Floating "Stamp" Animation */}
              <div className="absolute bottom-8 right-4 bg-background p-4 rounded-full shadow-xl animate-[spin_10s_linear_infinite]">
                 <svg viewBox="0 0 100 100" width="100" height="100" className="w-20 h-20 md:w-24 md:h-24">
                  <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
                  <text className="text-[10px] uppercase font-bold tracking-widest fill-foreground">
                    <textPath href="#curve">
                      • Serenity • Peace • Zanzibar •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;