"use client";

import { motion } from "motion/react";

const collections = [
  {
    id: 1,
    title: "Waterfront Estates",
    subtitle: "COASTAL LIVING",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    // ACTION: Updated to link to a lead-generating page
    href: "/contact", 
  },
  {
    id: 2,
    title: "Urban Penthouses",
    subtitle: "CITY CENTER",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
    href: "/contact", 
  },
  {
    id: 3,
    title: "Modern Retreats",
    subtitle: "ARCHITECTURE",
    img: "https://images.unsplash.com/photo-1600596542815-e32c2159f828?w=1920&q=80",
    href: "/our-services", // You can vary this to hit your main service page
  },
  {
    id: 4,
    title: "Historic Manors",
    subtitle: "CLASSIC DESIGN",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    href: "/contact", 
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header (No Changes Needed) */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Curated Collections
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1 w-24 bg-primary mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Explore our exclusive portfolio of hand-picked properties, designed for the discerning client.
          </motion.p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[400px]">
          {collections.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-secondary cursor-pointer ${
                idx === 0 ? "md:col-span-2 row-span-1" : ""
              } ${idx === 1 ? "md:col-span-1 row-span-1" : ""} ${
                idx === 2 ? "md:col-span-1 row-span-1" : ""
              } ${idx === 3 ? "md:col-span-2 row-span-1" : ""}`}
            >
              {/* WRAPPED ENTIRE CARD CONTENT IN A TAG */}
              <a href={item.href} className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 w-full h-full">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-90" />
                </div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                  
                  {/* Subtitle */}
                  <div className="flex items-center gap-4 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="h-px w-8 bg-secondary-foreground/60"></span>
                    <span className="text-xs font-bold tracking-[0.2em] text-secondary-foreground/90 uppercase">
                      {item.subtitle}
                    </span>
                    <span className="h-px w-8 bg-secondary-foreground/60"></span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-2 tracking-tight group-hover:-translate-y-2 transition-transform duration-500">
                    {item.title}
                  </h3>

                  {/* Button */}
                  <div className="mt-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <span className="px-6 py-2 border border-secondary-foreground/30 text-secondary-foreground text-sm font-medium tracking-wide rounded-full transition-all duration-300
                      hover:bg-primary hover:border-primary hover:text-primary-foreground">
                      Contact for Details
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}