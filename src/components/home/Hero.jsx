"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function VillaHeroCarousel() {
  const { t } = useLanguage();
  const slides = t("home.hero.slides");
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Update progress bar
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden bg-secondary">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 60 }} // Smooth transition
        plugins={[
          Fade(),
          Autoplay({
            delay: 8000, // 8 seconds for a slow, luxurious pace
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">
              {/* 1. ANIMATED BACKGROUND LAYER */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  // Ken Burns Effect: Scales gently from 1.0 to 1.10
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-[10000ms] ease-linear",
                    index === current - 1 ? "scale-110" : "scale-100"
                  )}
                  loading="eager"
                />
                
                {/* 2. SOPHISTICATED GRADIENT SCRIM 
                    Darker at bottom for text readability, clear at top for the view. 
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              </div>

              {/* 3. CONTENT LAYER */}
              <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-24 md:pb-32 px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto">
                <div className="max-w-3xl space-y-4 sm:space-y-6">
                  {/* Decorative Line (Your Primary Color) */}
                  <div className={`h-1 w-16 bg-primary mb-4 sm:mb-6 transition-all duration-1000 ${index === current - 1 ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />

                  <h1 
                    className={cn(
                      "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-tight",
                      "opacity-0 transform translate-y-8 transition-all duration-1000 ease-out delay-300",
                      index === current - 1 && "opacity-100 translate-y-0"
                    )}
                  >
                    {slide.title}
                  </h1>
                  
                  {/* Optional: If you have a subtitle in your translations, add it here for context */}
                  {slide.subtitle && (
                     <p className={cn(
                        "text-base sm:text-lg md:text-xl text-white/90 font-light max-w-xl",
                        "opacity-0 transform translate-y-4 transition-all duration-1000 ease-out delay-500",
                        index === current - 1 && "opacity-100 translate-y-0"
                      )}>
                        {slide.subtitle}
                     </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 4. MODERN PROGRESS INDICATOR */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-20">
            <div 
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${(current / count) * 100}%` }}
            />
        </div>

        {/* 5. SIDE COUNTER (Visual Polish) */}
        <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-end text-white/80 font-mono text-sm tracking-widest">
            <span>{current < 10 ? `0${current}` : current}</span>
            <span className="w-px h-8 bg-white/40 my-2"></span>
            <span>{count < 10 ? `0${count}` : count}</span>
        </div>
      </Carousel>
    </section>
  );
}