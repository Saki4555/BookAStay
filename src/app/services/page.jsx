"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconChartLine,
  IconClock,
  IconPhone,
  IconSettings,
  IconUsers,
  IconWreckingBall,
} from "@tabler/icons-react";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: IconSettings,
    title: "Property Management",
    desc: "End-to-end property care, cleaning, and inspection scheduling to ensure flawless guest stays.",
  },
  {
    icon: IconUsers,
    title: "Guest Services",
    desc: "24/7 guest support, check-in/out coordination, and concierge services to deliver VIP experiences.",
  },
  {
    icon: IconPhone,
    title: "Marketing & Promotion",
    desc: "Professional photography, optimized listings, and targeted promotions to boost occupancy.",
  },
  {
    icon: IconWreckingBall,
    title: "Maintenance & Repairs",
    desc: "Trusted, vetted vendors for rapid maintenance response and preventive care.",
  },
  {
    icon: IconChartLine,
    title: "Revenue Optimization",
    desc: "Dynamic pricing strategies and analytics to improve nightly rates and occupancy.",
  },
  {
    icon: IconClock,
    title: "24/7 Support",
    desc: "Round-the-clock operations to help guests and protect owner assets.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80"
            alt="Hotel managers and property maintenance team"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  Services
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">
                Our Services
              </h1>

              <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed max-w-2xl">
                A full suite of vacation rental services to help your property
                achieve superior guest ratings and stabilized revenue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Grid — replaced with 3 minimal, card-style services (vacation rental landing page) */}
      <section
        className="relative py-20 lg:py-28 px-6 md:px-12 lg:px-24 bg-background"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3 tracking-wide">
              OUR EXPERTISE
            </span>

            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3"
            >
              Vacation Rental Services
            </h2>

            <p className="mx-auto text-base text-muted-foreground max-w-2xl leading-relaxed">
              Comprehensive services to maximize your guest satisfaction and
              rental returns — from listing optimization to 24/7 guest support.
            </p>
          </motion.div>

          {/* Local 3-item services array (only used inside this section) */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: IconSettings,
                title: "Property Management",
                desc: "Full-service property care: cleaning, check-ins, inspections and vendor coordination to keep your home guest-ready.",
                features: [
                  "Professional cleaning & turnovers",
                  "Inspection & preventative maintenance",
                  "Owner reporting & payouts",
                ],
              },
              {
                icon: IconUsers,
                title: "Guest Services",
                desc: "White-glove support for guests including 24/7 messaging, concierge requests, and seamless check-ins.",
                features: [
                  "24/7 guest communication",
                  "Self-checkin or meet-and-greet",
                  "Concierge & local recommendations",
                ],
              },
              {
                icon: IconChartLine,
                title: "Revenue & Marketing",
                desc: "Optimized pricing, professional photography, and high-converting listings to increase occupancy and nightly rates.",
                features: [
                  "Dynamic pricing & analytics",
                  "Listing optimization & photography",
                  "Targeted promotions",
                ],
              },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <div
                    className="relative h-full flex flex-col rounded-lg border border-border bg-card/80 p-6 md:p-7
                         transition-shadow duration-200 hover:shadow-md focus-within:ring-4 focus-within:ring-primary/20"
                  >
                    {/* top row: icon + title */}
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-none w-11 h-11 rounded-md flex items-center justify-center
                             bg-primary/10 text-primary border border-border"
                      >
                        <Icon className="w-5 h-5" aria-hidden />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-foreground">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    {/* description */}
                    <p className="mt-4 text-sm text-muted-foreground flex-1 leading-relaxed">
                      {s.desc}
                    </p>

                    {/* features */}
                    <ul className="mt-5 space-y-3">
                      {s.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <svg
                            className="flex-none w-4 h-4 text-primary mt-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA (all buttons go to /contact) */}
                    <div className="mt-6 pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground
                             py-3 px-4 text-sm font-medium transition-colors duration-200 hover:bg-primary/90"
                      >
                        Contact Us
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.h3>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="text-primary font-semibold text-xl mb-2">1</div>
              <div className="font-semibold">Consultation</div>
              <p className="text-muted-foreground mt-2">
                We evaluate goals and craft a customized plan.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="text-primary font-semibold text-xl mb-2">2</div>
              <div className="font-semibold">Onboarding</div>
              <p className="text-muted-foreground mt-2">
                Professional onboarding and listing optimization.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="text-primary font-semibold text-xl mb-2">3</div>
              <div className="font-semibold">Guest Experience</div>
              <p className="text-muted-foreground mt-2">
                Concierge and guest services for high rating experiences.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="text-primary font-semibold text-xl mb-2">4</div>
              <div className="font-semibold">Continuous Optimization</div>
              <p className="text-muted-foreground mt-2">
                Dynamic pricing and ongoing performance improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
