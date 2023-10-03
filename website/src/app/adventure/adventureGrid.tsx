import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const garamondNarrow = localFont({
  src: "../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

const kabel = localFont({
  src: "../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

interface GridItemProps {
  title: string;
  height?: string;
  titleFontStyle?: any;
  subtitleFontStyle?: any;
  subtitle: string;
  subtitleTextSize?: string;
  description?: any;
  descriptionString?: string;
  image?: any;
  actions?: React.ReactNode;
  backgroundImage: any;
  titleTextColour: string;
  descriptionTextColour?: string;
  imageSize?: any;
  descFontSize?: string;
  descLineHeight?: string;
  descFontWeight?: string;
}

const GridItem = ({
  title,
  subtitle,
  subtitleTextSize,
  titleFontStyle,
  subtitleFontStyle,
  descLineHeight,
  descFontWeight,
  descFontSize,
  description,
  actions,
  backgroundImage,
  titleTextColour,
  descriptionTextColour,
  height = "h-[933px]",
}: GridItemProps) => {
  return (
    <div className="relative flex flex-col justify-start h-full overflow-hidden grid_card">
      <div className={`grid_card__image ${height} w-full`}>
        <Image
          src={backgroundImage}
          alt={`${title}`}
          placeholder="blur"
          fill
          className="object-cover"
        />
      </div>
      {/* absolute content */}
      <div className="absolute flex flex-col items-center justify-center w-full px-3 mt-32 grid_card__content">
        <div className="flex flex-col gap-3 text-center text_content mx-7 lg:mx-5 xl:mx-5 2xl:mx-8 ">
          <h1
            className={`font-[800] text-white 2xl:text-[70px] xl:text-6xl ${kabel.variable} font-serif drop-shadow-2xl drop-shadow-gray-900`}
          >
            {title}
          </h1>
          <h3
            className={`font-[510] leading-normal lg:text-3xl md:text-xl ${garamondNarrow.variable} font-sans`}
            style={{
              color: titleTextColour,
            }}
          >
            {subtitle}
          </h3>

          {description && (
            <p
              className="absolute font-normal right-[230px] top-[800px] text-lg"
              style={{
                color: descriptionTextColour,
                lineHeight: descLineHeight,
                fontSize: descFontSize,
                fontWeight: descFontSize,
              }}
            >
              {description}
            </p>
          )}

          <div className="flex flex-row justify-around links">{actions}</div>
          {/* This is the sample message for checking purpose */}
        </div>
      </div>
    </div>
  );
};

export default GridItem;
