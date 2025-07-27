import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function Initiative() {
  const [selection, setSelection] = useState("1");

  const initiatives = [
    { id: "1", name: "Green Club" },
    { id: "2", name: "Decarbonization" },
    { id: "3", name: "Green Finance" },
    { id: "4", name: "Recycling" },
  ];

  // const greenClubImages = [
  //   {
  //     src: "/assets/green_club (2).svg",
  //     alt: "Green Club",
  //   },
  //   {
  //     src: "/assets/green_club (1).svg",
  //     alt: "Green Card 2",
  //   },
  //   {
  //     src: "/assets/green_club (3).svg",
  //     alt: "Green Card 3",
  //   },
  // ];

  // const decarbonizeImages = [
  //   {
  //     src: "/assets/decarbonize (2).svg",
  //     alt: "Green Club",
  //   },
  //   {
  //     src: "/assets/decarbonize (1).svg",
  //     alt: "Green Card 2",
  //   },
  //   {
  //     src: "/assets/decarbonize (3).svg",
  //     alt: "Green Card 3",
  //   },
  // ];

  // const recyclingImages = [
  //   {
  //     src: "/assets/decarbon (2) (1).webp",
  //     alt: "Green Club",
  //   },
  //   {
  //     src: "/assets/decarbon (1).webp",
  //     alt: "Green Card 2",
  //   },
  //   {
  //     src: "/assets/decarbon (3).webp",
  //     alt: "Green Card 3",
  //   },
  // ];

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
            <h1 className="w-[100%] lg:w-[449px] font-semibold text-white text-[20px] text-justify lg:text-[25px] mb-[30px] lg:mb-[40px]">
              We are not just teaching kids about recycling
            </h1>
            <p className="font-light text-[16px] text-white w-[100%] lg:w-[455px] mb-[40px] text-left lg:text-justify">
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
            {/* <div className="w-[223px] h-[60px] border-[1px] border-solid border-white flex items-center justify-center rounded-[40px] lg:absolute lg:bottom-0">
              <p className="text-white">Donate to this cause</p>
              <img src="/assets/down_arrow.png" alt="" />
            </div> */}
          </div>
          <div className="pb-[30px] w-[100%]">
            <img
              src="/assets/Pic-51.webp"
              alt=""
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
            <h1 className="w-[100%] lg:w-[449px] font-semibold text-white text-left text-[20px] lg:text-[25px] mb-[30px] lg:mb-[40px]">
              Driving carbon neutrality with innovative decarbonization
              solutions
            </h1>
            <p className="font-light text-[16px] text-white w-[100%] lg:w-[455px] mb-[40px] text-left lg:text-justify">
              We provide comprehensive decarbonization programs designed
              specifically for corporates and government organizations committed
              to reducing their carbon footprint and promoting sustainable
              practices. Our approach includes targeted capacity-building
              initiatives to educate and empower staff, along with practical
              measures to optimize energy consumption and minimize waste. We
              also facilitate the collection, recycling, and repurposing of
              waste materials, helping organizations transition to more
              sustainable operations and achieve their environmental goals.
            </p>
            {/* <div className="w-[223px] h-[60px] border-[1px] border-solid border-white flex items-center justify-center rounded-[40px] lg:absolute lg:bottom-0">
              <p className="text-white">Donate to this cause</p>
              <img src="/assets/down_arrow.png" alt="" />
            </div> */}
          </div>
          <div className="pb-[30px] w-[100%]">
            <img
              src="/assets/Atunlo Abuja.jpg"
              alt=""
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
            <h1 className="w-[100%] lg:w-[449px] font-semibold text-white text-[20px] lg:text-[25px] mb-[30px] lg:mb-[40px] text-left">
              Supporting sustainable growth with 
              0% interest loans
            </h1>
            <p className="font-light text-[16px] text-white w-[100%] lg:w-[455px] mb-[40px] text-left lg:text-justify">
              We have developed a unique model to support our collection agents
              by providing them with access to Green Financing. Through this
              program, our agents receive 0% interest rate loans to expand their
              operations and enhance their capacity to collect more waste
              materials from streets and communities. This initiative not only
              boosts their businesses but also contributes significantly to our
              collective environmental goals. Since the launch of this program,
              we have disbursed over NGN 35 million in Green Finance to our
              agents, enabling them to make a substantial impact in waste
              reduction and community cleanup efforts.
            </p>
            {/* <div className="w-[223px] h-[60px] border-[1px] border-solid border-white flex items-center justify-center rounded-[40px] lg:absolute lg:bottom-0">
              <p className="text-white">Donate to this cause</p>
              <img src="/assets/down_arrow.png" alt="" />
            </div> */}
          </div>
          <div className="pb-[30px] w-[100%]">
            <img
              src="/assets/Pic-48.webp"
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
            <h1 className="w-[100%] lg:w-[449px] font-semibold text-white text-[20px] lg:text-[25px] mb-[30px] lg:mb-[40px] text-left">
              Turning plastic waste into opportunities for a cleaner, healthier
              future
            </h1>
            <p className="font-light text-[16px] text-white w-[100%] lg:w-[455px] mb-[40px] text-left lg:text-justify">
              In our waste collection efforts, we conduct community
              sensitization events to inspire individuals to view plastic waste
              as a valuable source of income. By educating communities on the
              economic opportunities in recycling, we empower people to
              contribute actively to environmental sustainability by offering a
              range of incentives, including cash, insurance, and educational
              support. The waste collected is meticulously sorted and recycled
              into raw materials, which are then supplied to circular economy
              manufacturers. These manufacturers repurpose the materials to
              produce items like fiber, rope, automotive parts, and various
              household plastics, thereby closing the loop in the lifecycle of
              plastic products.
            </p>
            {/* <div className="w-[223px] h-[60px] border-[1px] border-solid border-white flex items-center justify-center rounded-[40px] lg:absolute lg:bottom-0">
              <p className="text-white">Donate to this cause</p>
              <img src="/assets/down_arrow.png" alt="" />
            </div> */}
          </div>
          <div className="pb-[30px] w-[100%]">
            <img
              src="/assets/bales.jpg"
              alt=""
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
