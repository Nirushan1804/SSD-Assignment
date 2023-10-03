import React from "react";
import Image from "next/image";
import aboutImage from "../../../common/assets/images/GridImages/image3.webp";
import teaPlantation from "../../../common/assets/images/aboutImages/teaPlantation.jpg";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

// function Section1() {
//   return (
//     <div className="lg:mx-20">
//       <div className="flex xl:flex-row md:flex-col">
//         <div className="flex-col flex-1">
//           <div className={`text-[16px]`}>
//             Our <span className="font-bold">STORY</span>
//           </div>
//           <div
//             className={`${kabel.variable} font-serif text-[#ec542d] lg:text-[92.16px] lg:w-[691.2px] leading-none tracking-tighter lg:leading-[80px] md:text-[72px] md:font-[400] md:leading-[60px]`}
//           >
//             OPENING A<br /> WORLD OF
//             <br /> ADVENTURES
//           </div>
//           <div className={`${garamondNarrow.variable} text-5xl mt-10 lg:w-[691.2px] lg:text-[48px] lg:font-[300] md:pt-[15px] md:w-[704px]`}>
//             &quot;We travel the world differently. Always in
//              reduced groups of cohesive individuals
//              who have a common understanding of
//              how fun riding waves, mountains, bikes,
//              or anything that can be ridden can be.&quot;{" "}
//           </div>
//         </div>
//         <div className="lg:pt-[0px] md:pt-[70px] md:grid md:justify-items-end">
//           {" "}
//           <Image
//             src={aboutImage}
//             alt={"about-us-image"}
//             placeholder="blur"
//             height={1068}
//             width={704}
//             //   fill
//             className=" lg:w-[703px] lg:h-[1069px] "
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section1;


function Section1() {
  return(
    <div className="">
      <div>
           <Image
             src={teaPlantation}
             alt={"about-us-image"}
             placeholder="blur"
             objectFit="cover"
             className=" "
           />
    </div>
    </div>
    
  )
}

export default Section1;