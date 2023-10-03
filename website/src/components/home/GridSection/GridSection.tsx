"use client";
import React from "react";
import GridItem from "./GridItem";
import localFont from "next/font/local";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Link from "next/link";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

//images
import Img1 from "../../../common/assets/images/GridImages/CyclingOdyssey.jpg";
import Img2 from "../../../common/assets/images/GridImages/img2.jpg";
import Img3 from "../../../common/assets/images/GridImages/SportingEuphoria.jpg";
import Img4 from "../../../common/assets/images/GridImages/img4.jpg";
import Img5 from "../../../common/assets/images/GridImages/image5.webp";
import Img6 from "../../../common/assets/images/GridImages/image6.webp";

const packageContent = [
  {
    image: Img1,
    title: (
      <>
        Windswept
        <br /> Mountain Bike
        <br /> Expedition
      </>
    ),
    subtitle: "Silver Coast, Portugal",
    path: "/Windswept",
  },
  {
    image: Img2,
    title: (
      <>
        Whispers
        <br /> of Sporting
        <br /> Elegance
      </>
    ),
    subtitle: "Bacala, Mexico",
    path: "/TranquilParadise",
  },
  {
    image: Img3,
    title: (
      <>
        A Sporting
        <br /> Euphoria
      </>
    ),
    subtitle: "Gobi Deseart, Mongolia",
    path: "/ASportingEuphoria",
  },
  {
    image: Img4,
    title: (
      <>
        Cycling
        <br /> Odyssey
      </>
    ),
    subtitle: "Ahus, Sweden",
    path: "/CyclingOdyssey",
  },
  {
    image: Img5,
    title: (
      <>
        EL CAMINO
        <br />
        E-BIKE
      </>
    ),
    subtitle: "Galicia Span",
    path: "/",
  },
  {
    image: Img6,
    title: (
      <>
        PARA
        <br />
        MOTOR
        <br />
        SAFARI
      </>
    ),
    subtitle: "Skeleton Bay, Namibia",
    path: "/",
  },
];

function GridSection() {
  return (
    <div className="mx-0">
      <div className="w-full py-20 lg:py-60">
        <div className="hidden grid-cols-3 grid-rows-2 gap-6 lg:grid">
          <div className="shadow-lg ">
            <Link href="/Windswept">
              <GridItem
                title="Windswept Mountain Bike Expedition"
                subtitle="An Exquisite 5-Day adventure "
                titleFontStyle=""
                subtitleFontStyle=""
                subtitleTextSize=""
                descLineHeight=""
                descFontWeight=""
                // descFontSize=""
                description="Starting from $1.800"
                actions=""
                backgroundImage={Img1}
                titleTextColour=""
                descriptionTextColour="white"
                // height="h-[600px]"
              />
            </Link>
          </div>

          <div className="shadow-lg column_two">
            <Link href="/TranquilParadise">
              <GridItem
                title="Whispers of Sporting Elegance "
                subtitle="A Mesmeric 9-Day Visit"
                subtitleTextSize=""
                descLineHeight=""
                descFontWeight=""
                // descFontSize=""
                description="Starting from $1.800"
                actions=""
                backgroundImage={Img2}
                titleTextColour=""
                descriptionTextColour="white"
                // height="h-[600px]"
              />
            </Link>
          </div>
          <div className="shadow-lg">
            <Link href="/ASportingEuphoria">
              <GridItem
                title="A Sporting Euphoria "
                subtitle="A 9-Day Odyssey"
                subtitleTextSize=""
                descLineHeight=""
                descFontWeight=""
                // descFontSize=""
                description="Starting from $1.800"
                actions=""
                backgroundImage={Img3}
                titleTextColour=""
                descriptionTextColour="white"
                // height="h-[600px]"
              />
            </Link>
          </div>
          <div className="shadow-lg">
            <Link href="/CyclingOdyssey">
              <GridItem
                title="Cycling Odyssey"
                subtitle="A 5-Day Dream Sojourn"
                subtitleTextSize=""
                descLineHeight=""
                descFontWeight=""
                // descFontSize=""
                description="Starting from $1.800"
                actions=""
                backgroundImage={Img4}
                titleTextColour=""
                descriptionTextColour="white"
                // height="h-[600px]"
              />
            </Link>
          </div>
          <div className="shadow-lg column_two">
            <GridItem
              title="EL CAMINO E-BIKE"
              subtitle=" "
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img5}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="shadow-lg">
            <GridItem
              title="PARA MOTOR SAFARI"
              subtitle=""
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img6}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
        </div>

        <div className="lg:hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="grid-swiper"
            loop={true}
          >
            {packageContent.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={item.path}>
                  <div className="relative flex flex-col items-center justify-center">
                    <div className="flex sm:h-[700px] h-[500px] w-[80%] rounded-[23px]">
                      <Image
                        src={item.image}
                        alt="package one"
                        height={790}
                        width={1113}
                        className="object-cover overflow-hidden rounded-[23px]"
                      />
                    </div>
                    <div className="absolute flex flex-col gap-5 text-center">
                      <div
                        className={`${kabel.variable} font-serif font-bold text-white text-4xl leading-none tracking-tighter`}
                      >
                        {item.title}
                      </div>
                      <div className="text-2xl font-[400] text-black">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
