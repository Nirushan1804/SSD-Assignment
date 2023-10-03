import React from "react";
import socialImg from "@/common/assets/images/innerPageImage/socialImg.jpg"
import Image from "next/image";

function SocialMessage() {
  return (
    <div className="flex flex-col text-center">
        <div className="text-[#DDD4C4]">What People Say</div>
        <div className="text-[64px]">
            <span >"We went to Bacala, Mexico to try out the 'flying surfboard,' and it turns out, riding the efoil was </span>
            <span>easier than expected</span>
            <span><b> So magical.</b>"</span>
        </div>
        <div>
            <div className="flex ml-auto mr-auto justify-center">
                <Image
                    src={socialImg}
                    alt="Picture of the author"
                    placeholder="blur"
                    className="rounded-[100%]"
                    height={40}
                    width={40}
                />
            </div>
            <div className="text-[14px]">Written By:</div>
            <div className="text-[14px]">Mathilde Gaultier</div>
        </div>
    </div>
  );
}

export default SocialMessage;
