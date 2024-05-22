import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import PricingList from "@/components/pricing-list";
import ReviewList from "@/components/review-list";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <HeroSection />
      <SkillsSection />
      <PricingList />
      <ReviewList />
      <Footer />
    </div>
  );
}
