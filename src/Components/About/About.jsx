import React from "react";
import CustomCard from "./CustomCard";

function About() {
  return (
    <div className="bg-[#073332] px-[21px] lg:px-[121px] pt-[50px] pb-[50px] flex flex-col items-center justify-center">
      <h1 className="text-[16px] lg:text-[20px] font-normal text-green mb-[24px]">
        Get to Know Us
      </h1>
      <h1 className="text-[33px] lg:text-[50px] text-white font-medium mb-[85px]">About</h1>
      <div className="flex items-start justify-center w-[100%] gap-[104px]">
        <h1 className="text-[50px] text-white font-medium mt-[90px] hidden lg:block">Our Approach</h1>
        <div>
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <CustomCard
              imageSrc="/assets/advocacy.png"
              title="Advocacy"
              description="Raise awareness and promote an understanding of circular economy principles among businesses, policymakers and the general public"
            />
            <CustomCard
              imageSrc="/assets/commercialization.png"
              title="Commercialization"
              description="Incentivise waste collection (waste to cash, insurance, education and food) and transform recyclable materials into commercially viable products"
            />
          </div>
          <div className="flex mt-[20px]">
            <div className="ml-auto">
              <CustomCard
                imageSrc="/assets/governance.png"
                title="Governance"
                description="Partner with organisations to create policy frameworks that support and guide the transition towards a circular economy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
