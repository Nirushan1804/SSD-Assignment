import React from "react";
import localFont from "next/font/local";
import detailImage from "@/common/assets/images/innerPageImage/bicycle.jpg";
import Image from "next/image";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

const headerContent = 
  {
    content : "Welcome to an odyssey that seamlessly marries the thrill of sports with the splendor of exploration. Get ready for an extraordinary journey through Sri Lanka, where lush landscapes, historic marvels, and the allure of golf merge to create a symphony of wonder."
  }


const footerContent =
  {
    content : "Tranquil Paradise invites you to pedal through the symphonies of Sri Lanka's heartland, where each day is a stroke of elegance, and each moment a brushstroke on the canvas of your cycling voyage."
  }


const detailsContent = [
  {
    title: "Day 1 - Arrival: Embrace Sigiriya's Majesty",
    description:
      `As the sun dips below the horizon, you step into the embrace of Sigiriya's ancient majesty. The day of arrival is a canvas of anticipation, a prelude to the adventures that await. Settle into your Sigiriya haven, where dreams and excitement entwine. As the evening unfurls its gentle veil, a warm-up ride becomes your first dance with the landscape.`,
  },
  {
    title: "Day 2 - Sigiriya to Naula: A Tale on Canal Roads",
    description:
      `The wheels turn as you pedal from Sigiriya to Naula, a tale unfolding on tranquil canal roads. Nature whispers its secrets, a symphony of wind and foliage. The journey leads to the Knuckles Range in Kandy, a haven where mountains and dreams entwine. As twilight paints the sky, you become one with the hills.`,
  },
  {
    title: "Day 3 - Knuckles Loop: A Dance with Nature's Rhythms",
    description:
      `The Knuckles Range becomes your muse, the canvas for your cycling symphony. With each loop, you engage in a dance with nature's rhythms, wheels echoing the heartbeat of the earth. As the sun dips below the horizon, Kandy's embrace awaits, a city of culture and charm.`,
  },
  {
    title: "Day 4 - Hantana Loop or Kandy City Tale",
    description:
      `This day unfolds with a choice: a Hantana Loop or a journey through Kandy's cityscape. The hills of Hantana become your playground, each climb a triumph over challenges. Alternatively, the city of Kandy invites you to explore its tales, culture, and history. The day bends to your wishes.`,
  },
  {
    title: "Day 5 - Rest and Departure: Carrying Memories",
    description:
      `With the sun's tender embrace, you awaken to a day of rest. It's a chance to savour the moments, to let the memories sink in. The journey has been a whirlwind of adventure, and as the time to depart approaches, you carry with you the echoes of laughter, the whispers of the wind, and the spirit of exploration.`,
  },
  
  
];

function DetailSection() {
  return (
    <div className="my-40">
      <div className="md:grid md:grid-cols-2 xl:h-[900px] md:h-[900px]">
        <div className="h-full overflow-hidden">
          {" "}
          <Image
            src={detailImage}
            alt={"about-us-image"}
            placeholder="blur"
            // width={"50%"}
            // height={"80%"}
            className="object-cover object-bottom"
            style={{ objectPosition: "bottom" }}
          />
        </div>
        <div className="grid flex-1 gap-8 mx-10 max-h-[900px] overflow-auto scrollbar-none">
          {/* <div className={`${garamondNarrow.variable} text-xl flex pt-3`}><p>{headerContent.content}</p></div> */}
          {detailsContent.map((item, index) => (
            <div className="flex flex-col">
              <div
                className={`${kabel.variable} font-serif text-xl tracking-tighter text-[#ddd4c4]`}
              >
                {item.title}
              </div>
              <hr className="mt-3" />
              <div className={`${garamondNarrow.variable} text-xl flex pt-3`}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className={`${garamondNarrow.variable} text-xl flex pt-3`}><p>{footerContent.content}</p></div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
