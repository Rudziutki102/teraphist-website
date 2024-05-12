import HeroSection from "@/components/hero";
import ReviewList from "@/components/review-list";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <HeroSection />
      <SkillsSection />
      <ReviewList />
    </div>
  );
}
