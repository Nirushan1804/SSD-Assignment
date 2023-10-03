"use client";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import Link from "next/link";
//assests
//images
import Img1 from "../../../common/assets/images/GridImages/img1.jpg";
import Img2 from "../../../common/assets/images/GridImages/img2.jpg";
import Img3 from "../../../common/assets/images/GridImages/img3.jpg";
import Img4 from "../../../common/assets/images/GridImages/img4.jpg";
import Img5 from "../../../common/assets/images/GridImages/homeHero.jpg";
import Img6 from "../../../common/assets/images/GridImages/drone1.jpg";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

const sliderContent = [
  {
    image: Img1,
    title: (
      <>
        GOLFING
        <br />
        SERENITY
      </>
    ),
    subtitle: "11 Days / 10 Nights Golf expedition ",
    link: "/GolfingSerenity"
  },
  {
    image: Img2,
    title: (
      <>
        Windswept Mountain 
        <br />
        Bike Expedition
      </>
    ),
    subtitle: "An Exquisite 5-Day adventure ",
    link: "/Windswept"
  },
  {
    image: Img3,
    title: (
      <>
        Tranquil 
        <br />
        Paradise
       
      </>
    ),
    subtitle: "A Mesmeric 9-Day Visit",
    link: "/TranquilParadise"
  },
  {
    image: Img4,
    title: (
      <>
        Sporting 
        <br />
        Euphoria 
      </>
    ),
    subtitle: "A 9-Day Odyssey",
    link:"/ASportingEuphoria"
  },
  {
    image: Img5,
    title: (
      <>
        Cycling 
        <br />
        Odyssey
      </>
    ),
    subtitle: "A 5-Day Dream Sojourn",
    link: "/CyclingOdyssey"
  },
];

function FooterSlider() {
  return (
    <div className="mx-0 ">
      <div className="py-12 md:py-20">
        <div className="flex flex-col justify-center gap-3 px-10 mb-10 md:mb-20 md:px-20">
          <div className="text-base font-semibold md:text-lg">GET WET</div>
          <div
            className={`${kabel.variable} font-serif font-bold text-black md:text-6xl text-4xl leading-none tracking-tighter`}
          >
            SUMMER TRIPS
          </div>
        </div>
        <Swiper
          slidesPerView="auto"
          className="packageSlider"
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          freeMode={true}
          // loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: "auto",
            },
          }}
        >
          {sliderContent.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.link}>
              <div className="relative flex flex-col items-center justify-center">
                <div className="flex 2xl:h-[790px] xl:h-[600px] h-96">
                  <Image
                    src={item.image}
                    alt="package one"
                    height={790}
                    width={1113}
                    className="object-cover overflow-hidden"
                  />
                </div>
                <div className="absolute flex flex-col gap-5 text-center">
                  <div
                    className={`${kabel.variable} font-serif font-bold text-white lg:text-8xl text-4xl leading-none tracking-tighter`}
                  >
                    {item.title}
                  </div>
                  <div className="lg:text-5xl text-2xl font-[400] text-black">
                    {item.subtitle}
                  </div>
                </div>
                {/* <div className="flex md:h-20 h-24 lg:text-lg text-sm text-black pt-[20px] text-center md:text-left">
                  {item.description}
                </div> */}
              </div>
              </Link>
            </SwiperSlide>
            
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FooterSlider;
