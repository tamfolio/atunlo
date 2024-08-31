import React, { useState } from "react";


function Initiative() {
  const [selection, setSelection] = useState("1");

  const initiatives = [
    { id: "1", name: "Green Club" },
    { id: "2", name: "Decarbonisation" },
    { id: "3", name: "Green Finance" },
    { id: "4", name: "Recycling" },
  ];



  return (
    <div className="px-[21px] lg:px-[121px] pb-[50px] pt-[50px] lg:pt-[200px] flex items-center justify-center flex-col">
      <h1 className="text-[33px] lg:text-[50px] font-medium mb-[37px]">
        Our Initiatives
      </h1>
      <div className="flex items-start justify-start lg:items-center lg:justify-center gap-[20px] w-[100%] overflow-scroll lg:overflow-hidden">
        {initiatives.map((initiative) => (
          <div
            key={initiative.id}
            className={`min-w-[222px] lg:w-[222px] h-[65px] border-solid border-[1px] border-[#E8E8E8] rounded-[20px] flex items-center justify-center cursor-pointer ${
              selection === initiative.id ? "bg-green text-white" : ""
            }`}
            onClick={() => setSelection(initiative.id)}
          >
            <p>{initiative.name}</p>
          </div>
        ))}
      </div>
      {selection === "1" && (
        <div className="bg-[#073332] w-[100%] lg:max-w-[1196px] h-auto lg:h-[700px] mt-[50px] rounded-[20px] flex flex-col lg:flex-row items-center justify-center gap-[60px] lg:gap-[82px] px-[21px] lg:px-[70px] pt-[30px] relative">
          <img
            src="/assets/partnercurve.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
          <div className="lg:h-[521px] lg:relative flex flex-col items-start justify-start">
            <h1 className="w-[100%] lg:w-[449px] font-semibold text-white text-[20px] lg:text-[40px] mb-[30px] lg:mb-[40px]">
              We are not just teaching kids about recycling
            </h1>
            <p className="font-light text-[16px] text-white w-[100%] lg:w-[455px] mb-[40px]">
              We are empowering them to be eco-champions. Through our Recycling
              Clubs for Kids, we instil a sense of environmental stewardship
              with engaging workshops, educational games, and hands-on
              activities. But it doesn't end there. We take it a step further by
              setting up collection centres in these schools. This innovative
              approach allows kids to actively participate in waste management,
              bringing plastics to school collection points and earning
              incentives for each contribution. By supporting our Recycling
              Clubs, you're fostering a culture of sustainability and
              responsibility among the leaders of tomorrow.
            </p>
            <div className="w-[223px] h-[60px] border-[1px] border-solid border-white flex items-center justify-center rounded-[40px] lg:absolute lg:bottom-0">
              <p className="text-white">Donate to this cause</p>
              <img src="/assets/down_arrow.png" alt="" />
            </div>
          </div>
          <div className="pb-[30px] w-[100%]">
            <img
              src="/assets/green_club.svg"
              alt="Green Club"
              className="w-[100%] h-[404px] lg:w-[519px] lg:h-[521px] rounded-[20px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
      {selection === "2" && (
        <div className="bg-[#073332] w-[100%] lg:max-w-[1196px] h-auto lg:h-[700px] mt-[50px] rounded-[20px] flex flex-col lg:flex-row items-center justify-center gap-[60px] lg:gap-[82px] px-[21px] lg:px-[70px] pt-[30px] relative">
          <img
            src="/assets/partnercurve.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
          <div className="lg:h-[521px] lg:relative flex flex-col items-start justify-start">
            <h1 className="w-[100%] lg:w-[449px] font-semibold text-white text-[20px] lg:text-[40px] mb-[30px] lg:mb-[40px]">
              Decarbonisation
            </h1>
            <p className="font-light text-[16px] text-white w-[100%] lg:w-[455px] mb-[40px]">
              We offer decarbonisation programs for corporates and government
              organisations looking to reduce their carbon footprint. This
              includes capacity building for staff members and other initiatives
              focused on energy consumption reduction, collection as well as
              recycling of waste.
            </p>
            <div className="w-[223px] h-[60px] border-[1px] border-solid border-white flex items-center justify-center rounded-[40px] lg:absolute lg:bottom-0">
              <p className="text-white">Donate to this cause</p>
              <img src="/assets/down_arrow.png" alt="" />
            </div>
          </div>
          <div className="pb-[30px] w-[100%]">
            <img
              src="/assets/decarbonize (1).svg"
              alt="Green Club"
              className="w-[100%] h-[404px] lg:w-[519px] lg:h-[521px] rounded-[20px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
      {selection === "3" && (
        <div className="bg-[#073332] w-[100%] lg:max-w-[1196px] h-auto lg:h-[700px] mt-[50px] rounded-[20px] flex flex-col lg:flex-row items-center justify-center gap-[60px] lg:gap-[82px] px-[21px] lg:px-[70px] pt-[30px] relative">
          <img
            src="/assets/partnercurve.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
          <div className="lg:h-[521px] lg:relative flex flex-col items-start justify-start">
            <h1 className="w-[100%] lg:w-[449px] font-semibold text-white text-[20px] lg:text-[40px] mb-[30px] lg:mb-[40px]">
              Green Finance
            </h1>
            <p className="font-light text-[16px] text-white w-[100%] lg:w-[455px] mb-[40px]">
              We have built a model to help profile our collection agents for
              Green Financing. Here, our agents are given a 0% interest rate
              loan to grow their business and increase their capacity to clean
              up more waste materials from streets and communities. From launch
              till date, we have given out over N35m in Green Finance to our
              agents.
            </p>
            <div className="w-[223px] h-[60px] border-[1px] border-solid border-white flex items-center justify-center rounded-[40px] lg:absolute lg:bottom-0">
              <p className="text-white">Donate to this cause</p>
              <img src="/assets/down_arrow.png" alt="" />
            </div>
          </div>
          <div className="pb-[30px] w-[100%]">
            <img
              src="/assets/recycling.svg"
              alt=""
              className="w-[100%] h-[404px] lg:w-[519px] lg:h-[521px] rounded-[20px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
      {selection === "4" && (
        <div className="bg-[#073332] w-[100%] lg:max-w-[1196px] h-auto lg:h-[700px] mt-[50px] rounded-[20px] flex flex-col lg:flex-row items-center justify-center gap-[60px] lg:gap-[82px] px-[21px] lg:px-[70px] pt-[30px] relative">
          <img
            src="/assets/partnercurve.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
          <div className="lg:h-[521px] lg:relative flex flex-col items-start justify-start">
            <h1 className="w-[100%] lg:w-[449px] font-semibold text-white text-[20px] lg:text-[40px] mb-[30px] lg:mb-[40px]">
              Recycling
            </h1>
            <p className="font-light text-[16px] text-white w-[100%] lg:w-[455px] mb-[40px]">
              In collecting waste, we run sensitisation events to encourage
              individuals to see plastics as a source of income. Some of our
              incentives include cash, health insurance and education. Waste
              collected is sorted and recycled into raw materials for circular
              economy manufacturers who use these to make fibre, rope,
              automobile materials and other household plastics.
            </p>
            <div className="w-[223px] h-[60px] border-[1px] border-solid border-white flex items-center justify-center rounded-[40px] lg:absolute lg:bottom-0">
              <p className="text-white">Donate to this cause</p>
              <img src="/assets/down_arrow.png" alt="" />
            </div>
          </div>
          <div className="pb-[30px] w-[100%]">
          <img
              src="/assets/decarbon (2).svg"
              alt="Green Club"
              className="w-[100%] h-[404px] lg:w-[519px] lg:h-[521px] rounded-[20px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Initiative;
