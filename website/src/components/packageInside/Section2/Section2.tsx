import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import innerHeroImg from "../../../common/assets/images/innerPageImage/inner_img1.webp";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function Section2() {
  return (
    <div>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia aut, ut itaque nihil adipisci velit porro minima facere, tenetur iste iusto eligendi iure fugit voluptas praesentium quas tempora vitae laudantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint possimus ea obcaecati, molestiae exercitationem commodi at dolore nostrum cumque cupiditate laboriosam? Quod fugit explicabo fuga alias voluptatibus placeat dolores odio?</div>
      <div>
      <Image
             src={innerHeroImg}
             alt="Picture of the author"
             placeholder="blur"
             layout="fill"
             objectFit="cover"
           />
      </div>
    </div>
  );
}

export default Section2;


 