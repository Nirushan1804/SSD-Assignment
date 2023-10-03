import React from "react";
import localFont from "next/font/local";
import detailImage from "@/common/assets/images/GridImages/img1.jpg";
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
    content : "Tranquil Paradise beckons, where the greens of golf unite with the blues of oceans and skies, and where every moment etches itself into the canvas of your heart."
  }


const detailsContent = [
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "As you touch down in Colombo, the magical adventure commences. A warm welcome awaits as you're whisked away to your luxurious haven. After checking in, let the captivating charm of Colombo envelop you as the evening unfolds into a mesmerizing city tour. Rest your head at a lavish hotel, where dreams take root.",
  },
  {
    title: "Day 02 - Colombo to Kandy: A Tapestry of Wonders",
    description:
      "Embark on a journey to Kandy, but not before pausing at the Elephant Orphanage in Pinnawala, where gentle giants share their stories. The fragrant allure of a spice garden in Mawanella beckons, a prelude to Kandy's embrace. Your abode awaits, where comfort and beauty meld into a seamless tapestry.",
  },
  {
    title: "Day 03- Kandy to Hatton: Ascending to Tranquility",
    description:
      "From Kandy, the path winds toward Hatton, where hills beckon with whispers of tranquility. Nestled in your hotel, you'll find solace amidst breathtaking vistas that paint a world of calm.",
  },
  {
    title: "Day 04 - Hatton to Ella: Journey of Splendors",
    description:
      "A scenic journey takes you to Ella, where a choice awaits: a train voyage from Hatton to Ella, an ode to romance and nature's spectacle. Or settle into your hotel in Ella, a sanctuary amidst the emerald embrace.",
  },
  {
    title: "Day 05 - Ella to Yala: Roaming with the Wild",
    description:
      "Via the ethereal Ravana Waterfalls, the path leads to Yala. Embark on a twilight jeep safari, where encounters with untamed beauty create indelible memories. The night unfolds in a haven amidst the wilderness.",
  },
  {
    title: "Day 06 - Yala to Tangalle: Sands of Time",
    description:
      "From Yala, the journey drifts to Tangalle, where the sea's whispers beckon. The sands of Tangalle cradle you in serenity, a place where time stands still.",
  },
  {
    title: "Day 07 - Leisure on Tangalle's Shores: A Dance with the Sea",
    description:
      "This day is a gift of leisure, where the azure waves entwine with your thoughts. With a vehicle at your disposal, explore the coastline's treasures or simply revel in the embrace of the beach.",
  },
  {
    title: "Day 08 - Tangalle to Galle: Unveiling History's Pages",
    description:
      "Journey to Galle, a living testament to history. Here, the past unveils itself within the captivating walls of the Dutch Fort. Your hotel in Galle is a sanctuary of opulence amidst this storied backdrop.",
  },
  {
    title: "Day 09 - Exploring Galle: Chronicles of a Fort",
    description:
      "Embark on a journey through time as you explore the Dutch Fort of Galle, where tales of conquest and legacy intertwine. An enchanting evening at your Galle haven awaits.",
  },
  {
    title: "Day 10 - Galle to Colombo: Echoes of Farewell",
    description:
      "The path circles back to Colombo, where the symphony of your adventure nears its finale. Your Colombo abode welcomes you, a haven of respite as you prepare to bid adieu to this spellbinding journey.",
  },
  {
    title: "Day 11 - Departure from Colombo: A Memory's Souvenir",
    description:
      "As the sun climbs high, indulge in a final exploration: a shopping sojourn through Colombo. In the afternoon, a departure beckons. Carry with you the indelible memories, the echoes of laughter, and the spirit of adventure as you journey home.",
  },
];

function DetailSection() {
  return (
    <div className="my-40">
      <div className="md:grid md:grid-cols-2 xl:h-900px] md:h-[900px]">
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
