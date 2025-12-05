"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, Sparkles } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "How far in advance should I book a vacation rental?",
    a: "We recommend booking at least 2-3 months in advance for popular destinations. However, for off-peak dates, shorter notice can be accommodated.",
  },
  {
    q: "Do you handle guest check-in and concierge services?",
    a: "Yes — we offer full guest services including check-in, key exchange, concierge for local experiences, and 24/7 support.",
  },
  {
    q: "Can you manage multiple properties for me?",
    a: "Absolutely — we handle portfolio management and can scale services across multiple properties while ensuring consistent guest experience.",
  },
  {
    q: "What is your pricing model for property management?",
    a: "We offer custom pricing based on property size, location, and the level of service. Contact us for a tailored proposal.",
  },
  {
    q: "Do you offer marketing and photography services?",
    a: "Yes — professional photography, optimized listing creation, and marketing across major channels are part of our service suite.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FAQ() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative blurred blob for depth */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: Sticky Header & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  Support & Info
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Frequently Asked <br />
                <span className="text-muted-foreground">Questions</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Everything you need to know about our premium management services and booking process.
              </p>

              {/* Call to Action Box - Great for Lead Gen */}
              <div className="p-6 bg-card rounded-lg border border-accent backdrop-blur-sm">
                <h4 className="font-semibold text-foreground mb-2">
                  Still have questions?
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Accordion */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {FAQ_ITEMS.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <AccordionItem 
                    value={`item-${idx}`} 
                    className="border-b border-border/50 data-[state=open]:border-primary/50 transition-colors duration-300"
                  >
                    <AccordionTrigger className="py-6 text-lg font-medium hover:text-primary transition-colors hover:no-underline text-left data-[state=open]:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}