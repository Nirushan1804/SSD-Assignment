import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import winterImg from "@/common/assets/images/aboutImages/winter.webp";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

// function Section2() {
//   return (
//     <div className="my-40">
//       <div className="lg:flex flex-row">
//         <div className="flex-col flex-1 mx-20">
//           <div className={`text-lg font-sans`}>ABOUT OUR TEAM</div>
//           <div
//             className={` font-mono text-6xl leading-none font-extrabold tracking-tight`}
//           >
//             LED BY ADVENTURE
//           </div>
//           <div className="pt-10 pl-20 text-2xl italic">
//             Land of Ride is that thing we'd been searching for ourselves.
//           </div>
//           <div
//             className={`${garamondNarrow.variable} text-2xl mt-12 flex flex-col gap-5 pt-10`}
//           >
//             <p>
//               We are united by our passion for the unseen, the unexplored, the
//               unconquered, and enriching journeys.
//             </p>
//             <p className="indent-10">
//               When traveling the world, we always felt that the most amazing
//               experiences should be shared.
//             </p>
//             <p className="indent-10">
//               We are skiers, snowboarders, hikers, climbers, bikers, sailors,
//               surfers, guides, and we love making people smile. We also want to
//               ensure travelers, adventurers, and locals respect the world we
//               live in.
//             </p>
//             <p className="indent-10 md:pb-[60px]">
//               This is our team - come and explore with us. Welcome to <b>Sandy Beach.</b>
//             </p>
//           </div>
//         </div>
//         <div>
//           {" "}
//           <Image
//             src={winterImg}
//             alt={"about-us-image"}
//             placeholder="blur"
//             height={1527}
//             width={1096}
//             // fill
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section2;


function Section2() {
  return(
    <div className="lg:w-[1120px] ml-[auto] mr-[auto] pt-[70px] md:pl-[15px] md:pr-[15px] pl-[5px] pr-[5px]">
      <div className={`md:text-[40px] lg:font-[500] lg:leading-[40px] text-center text-[30px] ${kabel.variable} font-serif`}>We are a team made up of travel enthusiasts.</div><br/><br/>
      <div className={`md:text-[18px] font-[200] leading-[20px] text-center ${garamondNarrow.variable} font-sans`}>We are a team made up of travel enthusiasts. Tranquility Paradise is the newest addition and the travel arm of Verde Lanka and GCC Sri Lankan Global Cargo, expanding under the same ownership.</div><br/>
      <div className="md:text-[18px] font-[200] leading-[20px] text-center">Exceeding expertise over 20 years in the Corporate Industry across global boundaries including Maldives, Our chairman Mr. Samuel Azariya is a proud part of several group of companies as well.</div><br/>
      <div className="md:text-[18px] font-[200] leading-[20px] text-center">As a pearl of the Indian ocean Sri Lanka has unique cultural, geological features which will help you find new experiences in life to be cherished forever with it’s very own culture, landmarks, food and lifestyle.</div><br/>
      <div className="md:text-[18px] font-[200] leading-[20px] text-center">Tranquility Paradise primarily focuses on incrementing the growth of Sri Lankan Tourism and to significantly support the to the community via its CRS initiatives, through which the funds raised will enhance the livelihood of many underprivileged individuals in the country. We warmly welcome you to our beautiful island.</div>
    </div>
  )
}
export default Section2;