import GridSection from "@/components/home/GridSection/GridSection";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import JoinOurCommunity from "@/components/home/JoinOurCommunity/JoinOurCommunity";
import PackageSlider from "@/components/home/PackageSlider/PackageSlider";
import Testimonial from "@/components/home/Testimonial/Testimonial";
import StickyButton from "@/components/shared/StickyButton";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <JoinOurCommunity />
      <GridSection />
      <PackageSlider />
      <StickyButton />
      {/* <Testimonial /> */}
    </main>
  );
}
