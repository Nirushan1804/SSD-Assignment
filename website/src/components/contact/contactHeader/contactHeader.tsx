import React from "react";

function ContactHeader() {
    const data = 
        {
            id: 1,
            title: "Connect with TranquilityParadise - Your Gateway to Sports Tourism Adventures!",
            content: "Our team of dedicated travel experts is here to assist you in crafting unforgettable journeys to iconic sporting events, training camps, and athletic competitions around the globe. From witnessing the Grand Prix in Monaco to training with professional athletes, we make your sports dreams a reality."
        }
    
  return (
    <div className="pt-[80px]">
      <div className="text-center text-[30px] pb-[3vh]">{data.title}</div>
      <div className="text-center px-[10vw]">{data.content}</div>
    </div>
  );
}

export default ContactHeader; 