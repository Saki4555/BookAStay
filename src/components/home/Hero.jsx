"use client";

import { useState, useEffect, useCallback } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export default function VillaHeroCarousel() {
  const { t } = useLanguage();
  const slides = t("home.hero.slides");

  const [api, setApi] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index) => {
      if (api) api.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="relative w-full h-screen">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Fade(),
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col justify-center h-full max-w-xl">
                    {/* Slide Navigation */}
                    <div className="flex flex-col gap-3 mb-10 md:mb-14">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => scrollTo(i)}
                          className="flex items-center gap-3 group"
                          type="button"
                          aria-label={`Go to slide ${i + 1}`}
                        >
                          <div
                            className={`h-0.5 w-12 transition-all duration-300 ${
                              currentSlide === i
                                ? "bg-white"
                                : "bg-white/30 group-hover:bg-white/50"
                            }`}
                          />
                          <span
                            className={`text-sm md:text-base transition-all duration-300 ${
                              currentSlide === i
                                ? "text-white font-semibold"
                                : "text-white/50 group-hover:text-white/70"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-12 leading-tight">
                      {slide.title}
                    </h1>

                    {/* CTA */}
                    <Button variant="secondary" className="w-fit group">
                      <span className="text-sm md:text-base">
                        {slide.cta}
                      </span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 max-sm:hidden md:left-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" />
        <CarouselNext className="right-4 max-sm:hidden md:right-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" />
      </Carousel>
    </section>
  );
}
