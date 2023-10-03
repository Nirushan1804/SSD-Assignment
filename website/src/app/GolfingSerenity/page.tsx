import Section1 from "@/components/packageInside/Section1/Section1";
import Section2 from "@/components/packageInside/Section2/Section2";
import Section3 from "@/components/packageInside/Section3/Section3";
import Section4 from "@/components/packageInside/Section4/Section4";
import SocialMessage from "@/components/packageInside/packageSocial/packageSocial";
import DetailSection from "@/components/packageInside/DetailSection/DetailSection";
import FooterSlider from "@/components/packageInside/FooterSlider/FooterSlider";
import FloatButton from "@/components/shared/FloatButton";
import React from "react";

function GolfingSerenity() {
  return (
    <div className="mx-0">
      <Section1 />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      <Section4 />
      <DetailSection />
      {/* <SocialMessage /> */}
      <FloatButton />
      <div className="bg-black">
        <FooterSlider />
      </div>
    </div>
  );
}

export default GolfingSerenity;
