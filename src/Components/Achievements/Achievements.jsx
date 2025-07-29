import React from "react";
import InfoCard from "./Infocard";

function Achievements() {
  return (
    <div className="flex flex-col items-center justify-center lg:justify-start px-[21px] lg:px-[160px] py-[30px]">
      <p className="text-green text-[16px] lg:text-[20px]">
        Our Key Achievements
      </p>
      <h1 className="text-[33px] lg:text-[50px] font-medium w-[312px] lg:w-[564px] text-center my-[30px]">
        Get a highlight of our <span className="text-green">Impact</span> so far
      </h1>
      <div className="w-full max-w-[1400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[20px] md:gap-[24px] lg:gap-[28px] justify-items-center">
          <InfoCard
            bgColor="bg-[#DDF5CF]"
            circleColor="bg-[#4CC800]/10"
            iconSrc="/assets/money-bag.png"
            amountText="N728m"
            descriptionText="given to individuals for recyclables"
          />
          <InfoCard
            bgColor="bg-[#F4D6D9]"
            circleColor="bg-[#C42738]/10"
            iconSrc="/assets/cap.png"
            amountText="8,300+"
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
            amountText="51%"
            descriptionText="female workforce"
          />
          <InfoCard
            bgColor="bg-[#DDE6DC]"
            circleColor="bg-[#4E7A47]/10"
            iconSrc="/assets/industry.png"
            amountText="3.1m kg CO2"
            descriptionText="emissions saved"
          />
          <InfoCard
            bgColor="bg-[#DDF5CF]"
            circleColor="bg-[#4CC800]/10"
            iconSrc="/assets/hand.png"
            amountText="4,950+"
            descriptionText="Green Finance beneficiaries with 0% interest loans"
          />
          <InfoCard
            bgColor="bg-[#F6EAD7]"
            circleColor="bg-[#CD8C2E]/10"
            iconSrc="/assets/recycle.png"
            amountText="100m"
            descriptionText="bottles recycled"
          />
          <InfoCard
            bgColor="bg-[#B6D7FF]"
            circleColor="bg-[#422DFF]/10"
            iconSrc="/assets/wave.png"
            amountText="2.02m kg"
            descriptionText="of plastics diverted from landfills"
          />
          <InfoCard
            bgColor="bg-[#FFEECF]"
            circleColor="bg-[#FFA5001A]/10"
            iconSrc="/assets/people.png"
            amountText=">680,708"
            descriptionText="individuals sensitised"
          />
          <InfoCard
            bgColor="bg-[#DDF5CF]"
            circleColor="bg-[#4CC800]/10"
            iconSrc="/assets/book-open.png"
            amountText="182"
            descriptionText="kids education sponsored"
          />
        </div>
      </div>
    </div>
  );
}

export default Achievements;
