import React from "react";
import localFont from "next/font/local";
import detailImage from "@/common/assets/images/innerPageImage/library.jpg";
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
    content : "Tranquil Paradise beckons you to revel in the symphony of sports and nature, where each day is a stroke of elegance, and each moment a brushstroke on the canvas of your voyage."
  }


const detailsContent = [
  {
    title: "Day 1 - Arrival: Unveiling Dreams in Colombo",
    description:
      `Check into Colombo Hotel
      As the sun-kissed shores of Sri Lanka welcome you, your journey with Tranquil Paradise begins. The day of arrival is a canvas of anticipation, a blank page waiting for the stories you'll soon weave within its borders. Settle into your Colombo sanctuary, where comfort becomes your companion.
      `,
  },
  {
    title: "Day 2 - Royal Colombo Golf Club: Where Greens Beckon",
    description:
      `Ranked Number 2 in Sri Lanka
      In the heart of Colombo, the Royal Colombo Golf Club stands as a testament to the meeting of skill and serenity. As you tee off amidst immaculate greens, let the rhythm of your swing harmonize with the whispering leaves. Each stroke a brushstroke, you paint your story on the canvas of this revered course.
      `,
  },
  {
    title: "Day 3 - Kithulgala: Into the Realm of Adventure",
    description:
      `Journey to Kithulgala
      The road unfurls its mysteries as it leads you to Kithulgala. Nestled amidst nature's embrace, Kithulgala beckons the adventurer within. Its trails and tales await, a symphony of excitement harmonizing with the whispering rivers and rustling trees.
      `,
  },
  {
    title: "Day 4 - White Water Rafting: Dance with the Rapids",
    description:
      `Kithulgala Exploration and White Water Rafting
      In Kithulgala, you embrace the wild dance of white water rafting. The river becomes your muse, guiding you through a symphony of exhilaration. As you navigate the rapids, the world slows down, every pulse a melody in tune with the heartbeats of nature.
      `,
  },
  {
    title: "Day 5 - Nuwara Eliya's Charms: Amidst Tea and Dreams",
    description:
      `Explore a Tea Factory
      Nuwara Eliya welcomes you with its hills carpeted in emerald tea gardens. Amidst this picturesque panorama, a tea factory unveils the alchemy behind the cup of joy. As the mist kisses your cheeks, you sip the brew, an elixir of dreams brewed with each sip.
      `,
  },
  {
    title: "Day 6 - Nuwara Eliya Golf Club: A Symphony in the Highlands",
    description:
      `Ranked Number 3 in Sri Lanka
      As the sun's rays cascade over Nuwara Eliya, the golf course awaits, a masterpiece in the highlands. Your swings resonate with the echoes of the hills, every stroke a dialogue with the peaks. Nature and sport entwine, creating an overture of beauty.
      `,
  },
  {
    title: "Day 7 - Horton Plains National Park: Footsteps in Clouds",
    description:
      `A Mesmeric Hike
      Horton Plains National Park welcomes you to a mesmerizing hike. With each step, clouds embrace your path, unveiling panoramas that stretch into eternity. Amidst the whispers of the wind, you venture through a dreamscape, etching memories in the canvas of your soul.
      `,
  },
  {
    title: "Day 8 - Kandy's Warm Embrace: City of Culture",
    description:
      `Journey to Kandy
      Kandy, the city of cultural elegance, cradles you in its embrace. Its streets become your muse, leading you through tales of history and charm. With every corner, Kandy whispers its stories, inviting you to be a part of its living legacy.
      `,
  },
  {
    title: "Day 9 - Victoriya Golf Club: A Fitting Finale",
    description:
      `Ranked Number 1 in Sri Lanka
      In the heart of Kandy, the Victoriya Golf Club stands as the final chapter of your sporting odyssey. With the club in your hand, you traverse the course, a tapestry of greens and dreams. As the sun descends, your journey ends on a triumphant note, a crescendo of memories.
      `,
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
