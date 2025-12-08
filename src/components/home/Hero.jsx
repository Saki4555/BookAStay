"use client";

import { useState, useEffect, useCallback } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/context/LanguageContext";

export default function VillaHeroCarousel() {
  const { t } = useLanguage();

  const slides = t("home.hero.slides");

  const [api, setApi] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  return (
    <div className="relative w-full h-screen">
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
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col justify-center h-full max-w-2xl">
                    {/* Slide Numbers */}
                    <div className="flex flex-col gap-3 mb-8 md:mb-12">
                      <button
                        onClick={() => scrollTo(0)}
                        className="flex items-center gap-3 group cursor-pointer"
                        type="button"
                      >
                        <div
                          className={`h-0.5 w-12 transition-all duration-300 ${
                            currentSlide === 0
                              ? "bg-white"
                              : "bg-white/30 group-hover:bg-white/50"
                          }`}
                        />
                        <span
                          className={`text-sm md:text-base transition-all duration-300 ${
                            currentSlide === 0
                              ? "text-white font-semibold"
                              : "text-white/50 group-hover:text-white/70"
                          }`}
                        >
                          01
                        </span>
                      </button>
                      <button
                        onClick={() => scrollTo(1)}
                        className="flex items-center gap-3 group cursor-pointer"
                        type="button"
                      >
                        <div
                          className={`h-0.5 w-12 transition-all duration-300 ${
                            currentSlide === 1
                              ? "bg-white"
                              : "bg-white/30 group-hover:bg-white/50"
                          }`}
                        />
                        <span
                          className={`text-sm md:text-base transition-all duration-300 ${
                            currentSlide === 1
                              ? "text-white font-semibold"
                              : "text-white/50 group-hover:text-white/70"
                          }`}
                        >
                          02
                        </span>
                      </button>
                      <button
                        onClick={() => scrollTo(2)}
                        className="flex items-center gap-3 group cursor-pointer"
                        type="button"
                      >
                        <div
                          className={`h-0.5 w-12 transition-all duration-300 ${
                            currentSlide === 2
                              ? "bg-white"
                              : "bg-white/30 group-hover:bg-white/50"
                          }`}
                        />
                        <span
                          className={`text-sm md:text-base transition-all duration-300 ${
                            currentSlide === 2
                              ? "text-white font-semibold"
                              : "text-white/50 group-hover:text-white/70"
                          }`}
                        >
                          03
                        </span>
                      </button>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-12 leading-tight">
                      {slide.title}
                    </h1>

                    {/* CTA Button */}
                    <button className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded font-semibold hover:bg-gray-100 transition-colors w-fit group">
                      <span className="text-sm md:text-base">
                        {slide.cta}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4  max-sm:hidden md:left-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" />
        <CarouselNext className="right-4 max-sm:hidden md:right-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" />
      </Carousel>
    </div>
  );
}