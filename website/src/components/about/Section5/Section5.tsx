import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const garamondNarrow = localFont({
    src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
    variable: "--font-garamond-narrow-regular",
  });
  
  const kabel = localFont({
    src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
    variable: "--font-kabel-bold",
  });

function Section5() {
    return(
        <div className="md:pl-[15px] md:pr-[15px]">
            <div className={`text-center pt-[100px] text-[40px] font-[500] ${kabel.variable} font-serif `}>Company Values</div>
            <div className="flex gap-[50px] pt-[50px]" >
                <div className="ml-[auto] mr-[auto] flex md:flex-row flex-col gap-[50px] ">
                <div className="border-2 lg:w-[422px] lg:h-[500px] md:w-[350px] p-[20px] rounded-[25px] shadow-md shadow-gray-500">
                    <div className={`lg:text-[28px] lg:font-[400] ${kabel.variable} font-serif`}>Passion for the tourism industry</div>
                    <div className="lg:text-[18px] lg:font-[200] pt-[15px]">Tourism is one of the world’s largest industries and the economies of many nations including Sri Lanka is driven, to a larger propotionate, by their tourist trade.
Sri Lanka has a variety of attractions including beaches, wildlife parks, rainforests, tea plantations, ancient ruins, different cultural sites, and festivals which is authentic to the paradise. Tranquility Paradise is happy and proud to be a part it as it connects the world together as one.</div>
                </div>

                <div className="border-2 lg:w-[422px] lg:h-[500px] p-[20px] rounded-[25px] shadow-md shadow-gray-500 md:w-[350px]">
                    <div className={`lg:text-[28px] lg:font-[400] ${kabel.variable} font-serif `}>Accountability</div>
                    <div className="lg:text-[18px] lg:font-[200] pt-[15px]">Tranquility Paradise’s aim is not to just work as a medium in the industry but to provide the nation’s authentic self in its purest form. Despite the purpose of your visit, our goal is to provide you with the most convenient and comfortable services where you get the home away from home feel throughout your stay whist enjoying our own unique cultural experiences.</div>
                </div>
            </div>
            </div>
            <div className="flex gap-[50px] pt-[50px]" >
                <div className="ml-[auto] mr-[auto] flex gap-[50px] md:flex-row flex-col">
                <div className="border-2 lg:w-[422px] lg:h-[500px] p-[20px] rounded-[25px] shadow-md shadow-gray-500 md:w-[350px]">
                    <div className={`lg:text-[28px] lg:font-[400] ${kabel.variable} font-serif `}>Team work</div>
                    <div className="lg:text-[18px] lg:font-[200] pt-[15px]">Tranquility Paradise consists of highly trained individuals who have years of expertise in the hospitality industry by which we make sure to provide the best comfort, safty, authenticity and hospitality for our guests as that is our top priority. As a team we promise to ensure keeping our customers happy, occupied and equipped with the comfort they need during their time away from home in our beautiful paradise and make it memorable.</div>
                </div>

                <div className="border-2 lg:w-[422px] lg:h-[500px] p-[20px] rounded-[25px] shadow-md shadow-gray-500 md:w-[350px]">
                    <div className={`lg:text-[28px] lg:font-[400] ${kabel.variable} font-serif`}>Promise to customer</div>
                    <div className="lg:text-[18px] lg:font-[200] pt-[15px]">This is a paradise which provides diverse experiences in a short period of time. Be it enjoying the beach waves one day, to having a cozy night in the mountains the next day, the possibilities are limitless and we will work to provide you the best experiences you could gain during your stay in our beautiful Sri Lanka.</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Section5;