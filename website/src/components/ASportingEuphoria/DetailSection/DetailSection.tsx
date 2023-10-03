import React from "react";
import localFont from "next/font/local";
import detailImage from "@/common/assets/images/innerPageImage/packageInside.webp";
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
    content : "Tranquil Paradise invites you to partake in the symphony of sport and nature, where each day is a stroke of elegance and each moment a masterpiece on the canvas of your voyage."
  }


const detailsContent = [
  {
    title: "Day 1 - Arrival: Embark on Dreams in Negombo",
    description:
      `As the sun's tender rays welcome you to Sri Lanka, your journey with Tranquil Paradise begins. The charming beach hotel in Negombo becomes your haven, a place where the symphony of waves lulls you into a gentle reverie. The horizon is an open canvas, painted with the hues of anticipation.`,
  },
  {
    title: "Day 2 - Journey to Kandy: Unveiling Nature's Secrets",
    description:
      `The road to Kandy weaves through a tapestry of wonders. Your spirit becomes a traveller through time as you explore the Elephant Orphanage, where tales of compassion unfold. The allure of spices and gems adds to the enchantment. Kandy's embrace awaits, where hills whisper secrets and culture paints the sky.`,
  },
  {
    title: "Day 3 - Victoriya Golf Club: Sporting Grandeur Amidst Nature",
    description:
      `The sun rises over the Victoriya Golf Club, a testament to the harmonious marriage of sport and nature. Each swing is an ode to skill, each putt a dance with the greens. Amidst Kandy's embrace, you carve your story on this hallowed course, ranked number 1 in Sri Lanka.`,
  },
  {
    title: "Day 4 - Sigiriya's Majesty: Ascend to Ancient Height",
    description:
      `Sigiriya's majestic rock fortress rises from the landscape, a testament to history's grandeur. Your ascent is a journey through time, steps echoing with whispers of bygone eras. A visit to Minneriya National Park unveils a symphony of wildlife, nature's canvas alive with creatures big and small.`,
  },
  {
    title: "Day 5 - Nuwara Eliya's Whispers: Amidst Tea and Tranquillity",
    description:
      `Explore a Tea Factory
      The road to Nuwara Eliya winds through rolling hills blanketed in tea gardens. Amidst this emerald tapestry, a tea factory unveils the secrets behind every cup of brew. The air is kissed with mist, the aroma of tea and dreams, a symphony of tranquillity.
      `,
  },
  {
    title: "Day 6 - Nuwara Eliya Golf Club: Golf in the Clouds",
    description:
      `Ranked Number 3 in Sri Lanka
      The Nuwara Eliya Golf Club stands amidst the clouds, a masterpiece on the canvas of the highlands. With every swing, you engage in a dialogue with the mountains. Ranked number 3 in Sri Lanka, this course becomes the stage for your sporting prowess.
      `,
  },
  {
    title: "Day 7 - Homeward Bound: Return to Colombo",
    description:
      `The journey leads you back to Colombo, where the city's pulse resonates with your steps. Every corner, every street, tells tales of a vibrant past and a promising future. Your adventure has come full circle, and the city's embrace is a warm welcome.`,
  },
  {
    title: "Day 8 - Royal Colombo Golf Club: A Grand Finale*Ranked Number 2 in Sri Lanka*",
    description:
      `At the Royal Colombo Golf Club, you find your sporting crescendo. The greens stretch before you, a testament to skill and dedication. Ranked number 2 in Sri Lanka, this course becomes the backdrop for your final strokes on this island of dreams.`,
  },
  {
    title: "Day 9 - Departure: Carrying Memories Home",
    description:
      `As the sun paints the sky with hues of farewell, you depart from Sri Lanka's shores. The memories you've gathered, the stories you've lived, become the treasures you carry. Tranquil Paradise bids your adieu, your journey's echoes lingering in the wind.`,
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
