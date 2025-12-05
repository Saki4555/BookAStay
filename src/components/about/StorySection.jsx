"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';



// Story Section Component
const StorySection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:gap-16 group md:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80" 
                alt="Luxury property exterior" 
                className="rounded-lg  shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-primary" />
              <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">Our Journey</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">Our Story</h2>
            
            <div className="space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Founded by hospitality professionals who recognized a need for hands-on property management that elevates guest experiences without sacrificing owner ROI.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We combine local expertise, professional photography, and proactive maintenance to create consistent five-star stays and strong earnings for owners.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our team develops tailored plans for each property — from listing optimization to concierge-grade guest services — to maximize returns and preserve value.
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;