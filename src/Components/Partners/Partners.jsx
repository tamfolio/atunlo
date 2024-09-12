import React from "react";
import PartnerCard from "./PartnerCard";

function Partners() {
  return (
    <div className="px-[21px] lg:px-[121px] pb-[50px] pt-[50px] lg:pt-[200px] flex items-center justify-center flex-col">
      <h1 className="text-[33px] lg:text-[50px] font-medium">Partners</h1>
      <p className="w-[355px] lg:w-[523px] mt-[20px] text-center text-[18px] font-light text-[#151515]">
        Our valued partners play a role in advancing our mission, fostering
        sustainability and collectively building a greener future
      </p>
      <div className="flex flex-col gap-[20px]">
      <div className="mt-[80px] flex flex-col lg:flex-row gap-[20px]">
        <PartnerCard imageSrc="/assets/boi.jpg" />
        <PartnerCard imageSrc="/assets/climate.png" />
        <PartnerCard imageSrc="/assets/Indorama.png" />
        <PartnerCard imageSrc="/assets/igs.png" />
        <PartnerCard imageSrc="/assets/mycoverai.png" />
      </div>
      <div className="flex gap-[20px] flex-col lg:flex-row">
        <PartnerCard imageSrc="/assets/grap.png" />
        <PartnerCard imageSrc="/assets/access-bank.png" />
        <PartnerCard imageSrc="/assets/sonnex.png" />
        <PartnerCard imageSrc="/assets/hey.png" />
        <PartnerCard imageSrc="/assets/fidelity.png" />
      </div>
    </div>
    </div>
  );
}

export default Partners;
