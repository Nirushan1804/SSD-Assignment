import Section1 from "@/components/WindsweptInside/Section1/Section1";
import Section4 from "@/components/WindsweptInside/Section4/Section4";
import DetailSection from "@/components/WindsweptInside/DetailSection/DetailSection";
import FooterSlider from "@/components/WindsweptInside/FooterSlider/FooterSlider";
import FloatButton from "@/components/shared/FloatButton";
import React from "react";

function Windswept() {
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

export default Windswept;
