"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconStar, IconQuote } from "@tabler/icons-react";
import { Card } from "@/components/ui/card";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Samantha Hayes",
    location: "Maui, HI",
    content:
      "Booking through Blue Coast Vacations made our family trip effortless — five-star service from start to finish.",

  },
  {
    name: "Diego Martinez",
    location: "Tulum, MX",
    quote:
      "A seamless experience. The concierge handled everything and our guests were impressed.",
   
  },
  {
    name: "Olivia Bennett",
    location: "Santorini, GR",
    quote:
      "We saw better occupancy and higher ratings after they optimized our listing — highly recommended.",
   
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-red-500 text-foreground">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Professional service and personalized attention, delivering
            five-star experiences for guests and owners alike.
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {testimonials.map((tst, idx) => (
            <motion.div
              key={tst.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
            >
              <Card className="group bg-red-500 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-4 px-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 relative">
                    <Image
                      src={tst.image}
                      alt={`${tst.name} photo`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-sm md:text-base">
                        {tst.name}
                      </strong>
                      <span className="text-xs text-muted-foreground">
                        • {tst.location}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar key={i} className="size-4 text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-muted-foreground text-sm relative">
                  <IconQuote className="absolute left-6 top-0 opacity-10 size-6" />
                  <p className="pl-6">{tst.quote}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
