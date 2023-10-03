"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import HeroImg from "../../../../src/common/assets/images/homeImg/mainBanner.jpg";
import localFont from "next/font/local";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function HeroSection() {
  // useEffect(() => {
  //   AOS.init({
  //     // Global settings:
  //     disable: false,
  //     startEvent: "DOMContentLoaded",
  //     initClassName: "aos-init",
  //     animatedClassName: "aos-animate",
  //     useClassNames: false,
  //     disableMutationObserver: false,
  //     debounceDelay: 50,
  //     throttleDelay: 99,
  //     // ... (other configuration settings)
  //   });
  // }, []);

  // useEffect(() => {
  //   AOS.init({
  //     // Global settings:
  //     disable: false,
  //     startEvent: "DOMContentLoaded",
  //     initClassName: "aos-init",
  //     animatedClassName: "aos-animate",
  //     useClassNames: false,
  //     disableMutationObserver: false,
  //     debounceDelay: 50,
  //     throttleDelay: 99,
  //     // ... (other configuration settings)
  //   });
  // }, []);

  return (
    <Link href="/GolfingSerenity">
    <div className="relative lg:mt-20">
      <div className="overflow-hidden md:h-[900px] h-[500px] 2xl:w-full flex justify-center items-center">
        <div className="h-full w-full absolute z-[-1]">
          <Image
            src={HeroImg}
            alt="Picture of the author"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <div
          className={`text-3xl mb-4 lg:leading-[120px] ${kabel.variable} font-serif tracking-tight `}
        >
          {/* <div className="md:text-[6.4vw] font-[400] text-5xl leading-6">
          Golfing 
          </div> */}
          <br />
          <div className="md:text-[10.66vw] font-[400] text-5xl leading-6 drop-shadow-2xl shadow-gray-900">
          Golfing
          </div>
          <br />
          <div className="md:text-[10.66vw] font-[400] text-5xl leading-6 drop-shadow-2xl shadow-gray-900">
          Serenity
          </div>
          <br />
        </div>
        <div className="text-[2vw] font-[400] text-white drop-shadow-2xl shadow-gray-900">11 Days / 10 Nights Golf expedition </div>
      </div>
    </div>
    </Link>
  );
}

export default HeroSection;
