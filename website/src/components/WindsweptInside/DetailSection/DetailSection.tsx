import React from "react";
import localFont from "next/font/local";
import detailImage from "@/common/assets/images/innerPageImage/foodinner.jpg";
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
    content : "Tranquil Paradise invites you to pedal through the symphonies of Sri Lanka's heartland, where mountains echo with your courage, and memories linger like the fragrance of adventure."
  }


const detailsContent = [
  {
    title: "Day 01 - Arrival: Unveiling the Realm of Dreams",
    description:
      `International Flight Arrival
      As the sun's first rays embrace the island, your journey of exhilaration begins. From the Bandaranaike International Airport, we spirit you away to the enchanting realm of Kandy. Your night of rest is woven with the threads of anticipation.
      `,
  },
  {
    title: "Day 02 - Kandy's Charm: A Tapestry of Delights",
    description:
      `Kandy City Tour / Food Odyssey / Evening Stroll
      Amidst the ancient charm of Kandy, embrace the city's narrative. As the sun ascends, set forth on a delightful food tour, where flavors become your guides. As twilight draws its curtain, a leisurely walk paints the city in hues of serenity. And by night, the fervor of a cultural dance unfolds, inviting you to dance with tradition.
      `,
  },
  {
    title: "Day 03 - Knuckles Mountain Symphony: Professional & Intermediate",
    description:
      `Professionals: 30KM / Intermediate: 15KM
      The verdant Knuckles Range beckons, a canvas of grandeur for both professionals and intermediates. For the professionals, a 30KM expedition unfolds, where the rhythm of your heart matches the beat of your wheels. For intermediates, a 15KM journey weaves tales of challenge and triumph. As the day wanes, the mountains echo with your tales of adventure.
      `,
  },
  {
    title: "Day 04 - Hantana & Galaha: Whispers of the Wild",
    description:
      `Professionals: 25 - 30KM / Intermediate: 15KM
      On this day, Hantana and Galaha unveil themselves, offering their trails to the tireless spirit within you. For professionals, the path stretches 25 to 30KM, where each pedal propels you to vistas of awe. For intermediates, 15KM becomes a conduit to discovery. The night envelopes you in a haven of contentment.
      `,
  },
  {
    title: "Day 05 - Homeward Bound, Carrying Memories",
    description:
      `Departure Day
      With the sun's embrace, you bid farewell to Kandy's enchanting embrace. As Colombo welcomes you, a city tour becomes a tapestry of farewell glances. Each corner carries a memory, each street whispers a tale. And as the time arrives, your departure is a symphony of gratitude, for the island's embrace lingers in your heart.
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
