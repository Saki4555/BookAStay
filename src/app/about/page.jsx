import AboutHero from "@/components/about/AboutHero";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import StatsSection from "@/components/about/StatsSection";
import StorySection from "@/components/about/StorySection";


// Main About Page Component
export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AboutHero />
      <StorySection />
      <CoreValuesSection />
      <StatsSection />
    </main>
  );
}