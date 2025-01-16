import React from "react";
import InfoCard from "./Infocard";

function Achievements() {
  return (
    <div className="flex flex-col items-center justify-center lg:justify-start px-[21px] lg:px-[160px] py-[30px]">
      <p className="text-green text-[16px] lg:text-[20px]">Our Key Achievements</p>
      <h1 className="text-[33px] lg:text-[50px] font-medium w-[312px] lg:w-[564px] text-center my-[30px]">
        Get a highlight of our <span className="text-green">Impact</span> so far
      </h1>
      <div className="lg:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[20px] flex flex-col items-center justify-center">
        <InfoCard
          bgColor="bg-[#DDF5CF]"
          circleColor="bg-[#4CC800]/10"
          iconSrc="/assets/money-bag.png"
          amountText="N531m"
          descriptionText="given to individuals for recyclables"
        />
        <InfoCard
          bgColor="bg-[#F4D6D9]"
          circleColor="bg-[#C42738]/10"
          iconSrc="/assets/cap.png"
          amountText="6,780+"
          descriptionText="jobs created"
        />
        <InfoCard
          bgColor="bg-[#E7CFE7]"
          circleColor="bg-[#800080]/10"
          iconSrc="/assets/gift-box.png"
          amountText="Multiple incentive options"
          descriptionText="cash, insurance, education and food"
        />
        <InfoCard
          bgColor="bg-[#FBDBD7]"
          circleColor="bg-[#ED432C]/10"
          iconSrc="/assets/person.png"
          amountText="52.5%"
          descriptionText="female workforce"
        />
        <InfoCard
          bgColor="bg-[#DDE6DC]"
          circleColor="bg-[#4E7A47]/10"
          iconSrc="/assets/industry.png"
          amountText="2.8m kg CO2"
          descriptionText="emissions saved"
        />
        <InfoCard
          bgColor="bg-[#DDF5CF]"
          circleColor="bg-[#4CC800]/10"
          iconSrc="/assets/hand.png"
          amountText="4,700+"
          descriptionText="Green Finance beneficiaries with 0% interest loans"
        />
        <InfoCard
          bgColor="bg-[#F6EAD7]"
          circleColor="bg-[#CD8C2E]/10"
          iconSrc="/assets/recycle.png"
          amountText="95m"
          descriptionText="bottles recycled"
        />
        <InfoCard
          bgColor="bg-[#B6D7FF]"
          circleColor="bg-[#422DFF]/10"
          iconSrc="/assets/wave.png"
          amountText="1.84m kg"
          descriptionText="of plastics diverted from landfills"
        />
        <InfoCard
          bgColor="bg-[#FFEECF]"
          circleColor="bg-[#FFA5001A]/10"
          iconSrc="/assets/people.png"
          amountText=">308,600"
          descriptionText="individuals sensitised"
        />
      </div>
    </div>
  );
}

export default Achievements;
