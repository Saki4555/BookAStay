"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IconChartLine, IconClock, IconPhone, IconSettings, IconUsers, IconWreckingBall } from '@tabler/icons-react';


const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  { icon: IconSettings, title: 'Property Management', desc: 'End-to-end property care, cleaning, and inspection scheduling to ensure flawless guest stays.' },
  { icon: IconUsers, title: 'Guest Services', desc: '24/7 guest support, check-in/out coordination, and concierge services to deliver VIP experiences.' },
  { icon: IconPhone, title: 'Marketing & Promotion', desc: 'Professional photography, optimized listings, and targeted promotions to boost occupancy.' },
  { icon: IconWreckingBall, title: 'Maintenance & Repairs', desc: 'Trusted, vetted vendors for rapid maintenance response and preventive care.' },
  { icon: IconChartLine, title: 'Revenue Optimization', desc: 'Dynamic pricing strategies and analytics to improve nightly rates and occupancy.' },
  { icon: IconClock, title: '24/7 Support', desc: 'Round-the-clock operations to help guests and protect owner assets.' }
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1528901166007-3784c9f34817?auto=format&fit=crop&w=1600&q=80" alt="Hotel managers and property maintenance team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">Our Services</h1>

              <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed max-w-2xl">A full suite of vacation rental services to help your property achieve superior guest ratings and stabilized revenue.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12">What We Offer</h2>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, idx) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                  <Card className="bg-card p-10 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col gap-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <s.icon className="size-5" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">{s.title}</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
                      <div className="mt-4">
                        <Link href="/contact"><span className="text-primary hover:underline">Learn More →</span></Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.h3 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>How We Work</motion.h3>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="text-primary font-semibold text-xl mb-2">1</div>
              <div className="font-semibold">Consultation</div>
              <p className="text-muted-foreground mt-2">We evaluate goals and craft a customized plan.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="text-primary font-semibold text-xl mb-2">2</div>
              <div className="font-semibold">Onboarding</div>
              <p className="text-muted-foreground mt-2">Professional onboarding and listing optimization.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="text-primary font-semibold text-xl mb-2">3</div>
              <div className="font-semibold">Guest Experience</div>
              <p className="text-muted-foreground mt-2">Concierge and guest services for high rating experiences.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="text-primary font-semibold text-xl mb-2">4</div>
              <div className="font-semibold">Continuous Optimization</div>
              <p className="text-muted-foreground mt-2">Dynamic pricing and ongoing performance improvement.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
