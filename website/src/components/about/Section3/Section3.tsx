import React from "react";
import Image from "next/image";
import GridItem from "@/components/home/GridSection/GridItem";

import Img1 from "@/common/assets/images/aboutImages/about2.webp";
import Img2 from "@/common/assets/images/aboutImages/about3.webp";
import Image3 from "@/common/assets/images/aboutImages/aboutUsTrain.jpg"
import localFont from "next/font/local";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});


// function Section3() {
//   return (
//     <div className="mx-20 my-40">
//       <div className="w-full py-10">
//         <div className="grid grid-cols-2 grid-rows-6 gap-20">
//           <div className="row-span-6">
//             <GridItem
//               title=""
//               subtitle=""
//               titleFontStyle=""
//               subtitleFontStyle=""
//               subtitleTextSize=""
//               descLineHeight=""
//               descFontWeight=""
//               // descFontSize=""
//               description=""
//               actions=""
//               backgroundImage={Img1}
//               titleTextColour=""
//               descriptionTextColour=""
//               height="h-[1362px]"
              
//             />
//           </div>
//           <div className="row-span-5 ">
//             <GridItem
//               title=""
//               subtitle=""
//               titleFontStyle=""
//               subtitleFontStyle=""
//               subtitleTextSize=""
//               descLineHeight=""
//               descFontWeight=""
//               description=""
//               actions=""
//               backgroundImage={Img2}
//               titleTextColour=""
//               descriptionTextColour=""
//               height="h-[792px]"
//             />
//           </div>
//           <div className="row-span-1 col-start-2 row-start-6">
//             <div className="flex flex-col gap-5">
//               <div className="text-lg font-bold font-sans">
//                 OUR TEAM ON A RIDE
//               </div>
//               <div className="font-sans italic text-2xl font-medium">
//                 &quot;Land of Ride is
//                 <br /> something we ourselves had
//                 <br /> been searching for.&quot;
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section3;

function Section3 () {
  return(
    <div className="pt-[50px]">
      <hr className="border-2 text-black w-[40vw] flex ml-[auto] mr-[auto]"/>
      <div className="pt-[50px] md:flex lg:w-[1120px] ml-[auto] mr-[auto] pl-[50px] pr-[50px]">
        <div className={`md:text-[40px] font-[500] leading-[40px] md:w-[360px] pr-[200px] ${kabel.variable} font-serif`}>Our Mission</div>
        <div className="md:text-[20px] md:font-[200] leading-[30px] ">To creating beautiful memories by showing the authentic and diverse cultures of Sri Lanka with it’s breathtaking beauty, delicious cuisine and lifestyle.</div>
      </div>
      <div className="pt-[50px] pb-[50px]">
      <Image
             src={Image3}
             alt={"about-us-image"}
             placeholder="blur"
             objectFit="cover"
             className="w-[100%]"
           />
      </div>
      <div className="md:flex lg:w-[1120px] ml-[auto] mr-[auto] pl-[50px] pr-[50px]">
        <div className="md:text-[20px] md:font-[200] leading:[30px]">To provide our guests the most unique and finest experiences, whilst travelling through this beautiful paradise and also be an aid for csr projects to develop rural area livelihoods.</div>
        <div className={`md:text-[40px] font-[500] leading-[40px] md:w-[360px] pr-[200px]  ${kabel.variable} font-serif pl-[200px]`}>Our Vision</div>
      </div>
    </div>
  )

}

export default Section3;