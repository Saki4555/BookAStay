
import VillaHeroCarousel from "@/components/home/Hero";

import HouseHighlights from "@/components/home/HouseHighLights";
import IntroductionSection from "@/components/home/IntroductionSection";

export const metadata = {
  title: "Winds of Zanzibar",
  description:
    "Winds of Zanzibar is a peaceful seaside retreat offering comfort, privacy, and unhurried days by the ocean.",
};


export default  function Home() {
  
  return (
    <>
    <VillaHeroCarousel />
   <IntroductionSection />
    <HouseHighlights />
    
    
    </>
  );
}
