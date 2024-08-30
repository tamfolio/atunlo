import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles

const images = [
  { url: "/assets/hero1.jpeg" },
//   { url: "/assets/hero3.png" },
//   { url: "/assets/hero6.png" },
//   { url: "/assets/hero7.png" },
  { url: "/assets/hero4_11zon.png" },
  { url: "/assets/hero8_11zon.png" },
  { url: "/assets/hero9_11zon.png" }
];

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row w-[100%] px-[22px] lg:px-[121px] items-center justify-center py-[10px]">
      {/* Left Content */}
      <div className="w-[100%] lg:w-[588px] h-[374px] lg:h-[579px] bg-green rounded-tl-[20px] rounded-tr-[20px] lg:rounded-tr-none lg:rounded-bl-[20px] relative flex flex-col items-center justify-center">
        <img
          src="/assets/top_png.png"
          alt=""
          className="absolute top-0 left-0"
        />
        <img
          src="/assets/bottom_png.png"
          alt=""
          className="absolute bottom-0 right-0 hidden lg:block"
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="w-[312px] lg:w-[491px] h-[120px] lg:h-[195px] text-[33px] lg:text-[60px] text-white leading-[40px] lg:leading-[65px] font-semibold tracking-[-0.04em] mb-[20px]">
            Advocacy, Commercialisation and Governance.
          </h1>
          <p className="lg:text-[24px] text-white w-[312px] lg:w-[449px] font-light text-[16px] leading-[23px]">
            Atunlo is an initiative focused on solving the climate change
            problem in Nigeria by providing incentives to community members for
            the collection and recycling of plastics.
          </p>
          <div className="w-[144px] h-[50px] bg-white/80 rounded-[40px] text-[#151515] text-[16px] flex items-center justify-center gap-[5px] mt-[30px] lg:hidden">
            <div className="w-[5px] h-[5px] rounded-full bg-[#151515]"></div>
            Contact
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="h-[384px] lg:h-[579px] lg:w-[588px] w-[100%] flex justify-center items-center rounded-tr-none lg:rounded-tr-[20px] rounded-bl-[20px] lg:rounded-bl-none rounded-br-[20px]">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          emulateTouch
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <div key={index} className="h-[384px] lg:h-[579px] rounded-tr-none lg:rounded-tr-[20px] rounded-bl-[20px] lg:rounded-bl-none rounded-br-[20px]">
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                className="rounded-tr-none lg:rounded-tr-[20px] rounded-bl-[20px] lg:rounded-bl-none rounded-br-[20px]"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
