"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HouseHighlights() {
  const { t } = useLanguage();
  const highlights = t("home.highlights.items");

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Responsive Spacing */}
        <div className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground"
          >
            {t("home.highlights.header")}
          </motion.h2>

         
         
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 auto-rows-auto md:auto-rows-[220px]">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-md cursor-pointer bg-secondary",
                // Mobile: all cards same height (280px), Tablet+: main card spans 2 columns and rows
                idx === 0 
                  ? "h-[280px] sm:h-[320px] md:col-span-2 md:row-span-2 md:h-auto" 
                  : "h-[240px] sm:h-[260px] md:col-span-1 md:row-span-1 md:h-auto"
              )}
            >
              {/* Image with subtle Ken Burns */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              {/* Content Layer - Responsive Padding */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 z-30">
                <div className="transform transition-all duration-500 ease-out group-hover:translate-y-0 translate-y-2">
                  
                  <span className="inline-block px-2 sm:px-2.5 py-0.5 mb-1.5 sm:mb-2 text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                    {item.subtitle}
                  </span>

                  <div className="flex items-end justify-between gap-2 sm:gap-3">
                    <div className="space-y-0.5">
                      {/* <h3 className={cn(
                        "font-light text-white tracking-wide",
                        idx === 0 
                          ? "text-xl sm:text-2xl md:text-3xl" 
                          : "text-lg sm:text-xl"
                      )}>
                        {item.title}
                      </h3> */}
                      
                      {/* Description - Responsive & Hidden on very small screens for non-main cards */}
                      {/* <div className={cn(
                        "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500",
                        idx !== 0 && "hidden sm:grid"
                      )}>
                        <p className="overflow-hidden text-xs sm:text-[13px] text-white/80 leading-snug font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           {item.description}
                        </p>
                      </div> */}
                    </div>

                   
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}