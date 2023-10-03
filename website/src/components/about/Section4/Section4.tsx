import React from "react";
import Image from "next/image";
import cardImage from "../../../common/assets/images/aboutImages/sandyBeach.jpeg";

function Section4() {
    return(
        <div className="xl:w-[60vw] ml-[auto] mr-[auto] flex flex-col md:flex-row gap-[50px] pt-[100px] md:pl-[15px] md:pr-[15px]">
            <div className="xl:h-[600px] xl:w-[349px] ">
            <Image
             src={cardImage}
             alt={"about-us-image"}
             placeholder="blur"
             height={600}
             width={349}
             className=" rounded-[30px] shadow-md shadow-black flex ml-auto mr-auto"
           />
            </div>
            <div className="md:w-[550px] self-center text-[20px] font-[400] leading-[26px] px-[15px]">
            <b>Mr Samuelraj Azariah,</b> is our very own founder and Chairman of the Global Cargo Care started in 2009 , which has been in the shipping and logistics industry for over 13 years. He has expanded his business to Sri Lanka by setting up Verde Lanka and GCC Sri Lanka. For the love of his motherland and with the hopes of giving back to Sri Lanka, Tranqulity Paradise is his newest addition to promote Sri Lankan tourism. A highly motivated and qualified team of 30 is working under him and has successfully completed many CSR projects around Sri Lanka.
            </div>
        </div>
    )
}

export default Section4;