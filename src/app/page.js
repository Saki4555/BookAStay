import FeaturedProperties from "@/components/home/FeaturedProperties";
import VillaHeroCarousel from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/whyChooseUs";

import CallToAction from '@/components/home/CallToAction';
import FAQ from '@/components/home/FAQ';
import TestimonialsSection from "@/components/home/TestimonialSection";



export default function Home() {
  return (
    <>
    <VillaHeroCarousel />
    <FeaturedProperties />
    <WhyChooseUs />
   <TestimonialsSection />
    <FAQ />
    <CallToAction />
    
    </>
  );
}
