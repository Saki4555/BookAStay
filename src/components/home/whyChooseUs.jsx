"use client";

import {
  IconBeach,
  IconCalendar,
  IconHome,
  IconMapPin,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "motion/react";

const highlights = [
  {
    id: 1,
    icon: <IconBeach size={40} />,
    title: "Near the Sea",
    description:
      "Prime beachfront location with stunning ocean views and easy beach access.",
  },
  {
    id: 2,
    icon: <IconMapPin size={40} />,
    title: "Peaceful Location",
    description:
      "Tranquil setting away from the crowds, perfect for relaxation.",
  },
  {
    id: 3,
    icon: <IconHome size={40} />,
    title: "Clean & Comfortable Rooms",
    description:
      "Well-maintained spaces designed for your comfort and convenience.",
  },
  {
    id: 4,
    icon: <IconUsers size={40} />,
    title: "Family Friendly",
    description:
      "Safe and welcoming environment suitable for guests of all ages.",
  },
  {
    id: 5,
    icon: <IconCalendar size={40} />,
    title: "Easy Booking",
    description:
      "Simple reservation process with flexible options and instant confirmation.",
  },
];

export default function WhyChooseUs() {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Why stay with us
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Discover what makes our seaside retreat truly exceptional
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.slice(0, 4).map((h, idx) => (
            <motion.div
              key={h.id}
              className="group flex rounded-lg flex-col bg-card p-10 hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: idx * 0.08,
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {/* Icon - positioned at top */}
              <div className="w-24 rounded-lg h-24 flex items-center justify-center bg-primary/80 text-white mb-8">
                {h.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                {h.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}