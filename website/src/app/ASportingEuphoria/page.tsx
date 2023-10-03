import Section1 from "@/components/ASportingEuphoria/Section1/Section1";
import Section4 from "@/components/ASportingEuphoria/Section4/Section4";
import DetailSection from "@/components/ASportingEuphoria/DetailSection/DetailSection";
import FooterSlider from "@/components/ASportingEuphoria/FooterSlider/FooterSlider";
import FloatButton from "@/components/shared/FloatButton";
import React from "react";

function ASportingEuphoria() {
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

export default ASportingEuphoria;
