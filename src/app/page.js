import FeaturedProperties from "@/components/home/FeaturedProperties";
import VillaHeroCarousel from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/whyChooseUs";



export default function Home() {
  return (
    <>
    <VillaHeroCarousel />
    <FeaturedProperties />
    <WhyChooseUs />
    <div className="h-screen bg-indigo-400" />
    </>
  );
}
