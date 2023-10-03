import Section1 from "@/components/CyclingOdyssey/Section1/Section1";
import Section4 from "@/components/CyclingOdyssey/Section4/Section4";
import DetailSection from "@/components/CyclingOdyssey/DetailSection/DetailSection";
import FooterSlider from "@/components/CyclingOdyssey/FooterSlider/FooterSlider";
import FloatButton from "@/components/shared/FloatButton";
import React from "react";

function CyclingOdyssey() {
  return (
    <div className="mx-0">
      <Section1 />
      <Section4 />
      <DetailSection />
      <FloatButton />
      <div className="bg-black">
        <FooterSlider />
      </div>
    </div>
  );
}

export default CyclingOdyssey;
