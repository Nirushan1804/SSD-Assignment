// // import React from "react";
// // import Image from "next/image";
// // import HeroImg from "../../../../src/common/assets/images/homeImg/lift_day0-18.webp";
// // import localFont from "next/font/local";
// // import innerHeroImg from "../../../common/assets/images/innerPageImage/inner_img1.webp";

// // const kabel = localFont({
// //   src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
// //   variable: "--font-kabel-bold",
// // });

// // const garamondNarrow = localFont({
// //   src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
// //   variable: "--font-garamond-narrow-regular",
// // });

// // function Section1() {
// //   return (
// //     <div className="relative">
// //       <div className="overflow-hidden h-[1200.24px] 2xl:w-full flex justify-center items-center">
// //         <div className="h-full w-full absolute z-[-1]">
// //           <Image
// //             src={innerHeroImg}
// //             alt="Picture of the author"
// //             placeholder="blur"
// //             layout="fill"
// //             objectFit="cover"
// //           />
// //         </div>
// //       </div>
// //       <div className="absolute inset-0 flex flex-col items-center text-center text-white pt-[10%]">
// //         <div
// //           className={`text-3xl mb-4 xl:leading-[110px] ${kabel.variable} font-serif tracking-tight`}
// //         >
// //           <span className="text-[6.4vw] font-[400]">LEARN</span>
// //           <br />
// //           <span className="text-[10.66vw] font-[400]">EFOIL</span>
// //           <br />
// //           <span className="text-[10.66vw] font-[400]">SURF</span>
// //           <br />
// //         </div>
// //         <div className="text-[2vw] font-[400] text-black">Bacalar, Mexico</div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Section1;

// "use client";

//  import React from "react";
//  import Image from "next/image";
//  import innerHeroImg from "../../../common/assets/images/innerPageImage/inner_img1.webp";
//  import localFont from "next/font/local";


//  const kabel = localFont({
//   src: "../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
//   variable: "--font-kabel-bold",
// });

//  function Section1() {
//   return (
//     <div className="relative">
//       <div className="flex items-center justify-center overflow-hidden lg:h-[800px] h-96">
//         <div className="h-full w-full absolute z-[-1]">
//           <Image
//             src={innerHeroImg}
//             alt="Picture of the author"
//             placeholder="blur"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//       </div>
//       <div className="absolute inset-0 flex flex-col items-center text-center text-white pt-[10%]">
//         <div
//           className={`text-3xl mb-4 xl:leading-[110px] ${kabel.variable} font-serif tracking-tight`}
//         >
//           <span className="text-[6.4vw] font-[400]">LEARN</span>
//           <br />
//           <span className="text-[10.66vw] font-[400]">EFOIL</span>
//           <br />
//           <span className="text-[10.66vw] font-[400]">SURF</span>
//           <br />
//         </div>
//         <div className="text-[2vw] font-[400] text-black">Bacalar, Mexico</div>
//       </div>
//     </div>
//   );
// }

// export default Section1;


import React from "react";
import Image from "next/image";
import HeroImg from "../../../../src/common/assets/images/homeImg/lift_day0-18.webp";
import localFont from "next/font/local";
import innerHeroImg from "../../../common/assets/images/sliderImages/mountainSection.jpg";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function Section1() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center overflow-hidden lg:h-[800px] h-96">
        <div className="h-full w-full absolute z-[-1]">
          <Image
            src={innerHeroImg}
            alt="Picture of the author"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center text-center text-white pt-[10%]">
        <div
          className={`text-3xl mb-4 xl:leading-[110px] ${kabel.variable} font-serif tracking-tight drop-shadow-2xl`}
        >
          {/* <span className="text-[6.4vw] font-[400]">LEARN</span>
          <br /> */}
          <span className="text-[5.66vw] font-[400]">Windswept Mountain </span>
          <br />
          <span className="text-[5.66vw] font-[400]">Bike Expedition</span>
          <br />
        </div>
        <div className="text-[2vw] font-[400] text-black drop-shadow-2xl">An Exquisite 5-Day adventure</div>
      </div>
    </div>
  );
}

export default Section1;