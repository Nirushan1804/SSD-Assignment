import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import packageInside from "@/common/assets/images/innerPageImage/packageInside.webp";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function Section3() {
  return (
    <div className="my-40">
      <div className="flex flex-row">
        <div className="flex-col flex-1 mx-20">
          <div
            className={`${kabel.variable} font-serif text-6xl tracking-tighter text-[#ddd4c4]`}
          >
            LEARN TO FLY
          </div>
          <div className="pt-20 pl-20 text-2xl italic">On water.</div>
          <div
            className={`${garamondNarrow.variable} text-2xl mt-12 flex flex-col gap-5 pt-10`}
          >
            <p>
              Expand your horizons with a week of adventure that will get you
              surfing on the very first day.
            </p>
            <p className="indent-10">
              Step onto the beaches of Mexico with your sea foil and discover a
              whole new world. This tour is designed for those who want to learn
              to surf foil or would like to improve their skills and get away
              from it all.
            </p>
            <p className="indent-10">
              Discover the lagoon of Bacalar, a unique ecosystem and home to
              many animals such as turtles, manatees, and dolphins.
            </p>
          </div>
        </div>
        <div className="h-[712px] overflow-hidden">
          {" "}
          <Image
            src={packageInside}
            alt={"about-us-image"}
            placeholder="blur"
            height={712}
            width={1140}
            // fill
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
