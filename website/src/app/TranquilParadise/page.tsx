import Section1 from "@/components/TranquilParadise/Section1/Section1";
import Section4 from "@/components/TranquilParadise/Section4/Section4";
import DetailSection from "@/components/TranquilParadise/DetailSection/DetailSection";
import FooterSlider from "@/components/TranquilParadise/FooterSlider/FooterSlider";
import FloatButton from "@/components/shared/FloatButton";
import React from "react";

function TranquilParadise() {
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

export default TranquilParadise;
