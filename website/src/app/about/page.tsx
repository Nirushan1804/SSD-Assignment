import React from "react";
import Section1 from "@/components/about/Section1/Section1";
import Section2 from "@/components/about/Section2/Section2";
import Section3 from "@/components/about/Section3/Section3";
import Section4 from "@/components/about/Section4/Section4";
import Section5 from "@/components/about/Section5/Section5";

function about() {
  return (
    <div className="mx-0">
      <div className="w-full py-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}

export default about;
