import AboutUs from "@/components/about-us";
import BlogSection from "@/components/blog-section";
import SkillsSection from "@/components/skills-section";
import Slider from "@/components/slider";


export default function Home() {
  return (
    <div className="w-5/6 sm:w-2/3 mx-auto">
    <Slider/>
    <AboutUs/>
    <SkillsSection/>
    <BlogSection/>
    </div>
  );
}
