
import VillaHeroCarousel from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/whyChooseUs";

import CallToAction from '@/components/home/CallToAction';
import FAQ from '@/components/home/FAQ';
import TestimonialsSection from "@/components/home/TestimonialSection";
import HouseHighlights from "@/components/home/HouseHighLights";



export default function Home() {
  return (
    <>
    <VillaHeroCarousel />
    {/* <FeaturedProperties /> */}
    <HouseHighlights />
    <WhyChooseUs />
   <TestimonialsSection />
    <FAQ />
    <CallToAction />
    
    </>
  );
}
