import AboutHero from "@/components/about/AboutHero";

import StorySection from "@/components/about/StorySection";
export const metadata = {
  title: "About | Winds of Zanzibar",
  description:
    "Learn more about Winds of Zanzibar, our story, and the philosophy behind this quiet home by the sea.",
};



// Main About Page Component
export default  function AboutPage() {
 
  return (
    <main className="bg-background text-foreground">
      <AboutHero />
       
      <StorySection />
      
      
     
    </main>
  );
}