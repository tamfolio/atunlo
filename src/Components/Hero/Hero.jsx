import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles

const images = [
  { url: "/assets/slide (5).jpg" },
  { url: "/assets/slide (4).jpg" },
  { url: "/assets/slide (3).jpg" },
  { url: "/assets/slide (2).jpg" },
  { url: "/assets/slide (1).jpg" },
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
          <p className="lg:text-[40px] text-white w-[312px] font-medium lg:font-semibold lg:w-[449px] text-[24px] lg:leading-[40px]">
            Atunlo is dedicated to transforming Africa's approach to
            sustainability by empowering individuals, communities and
            corporations to adopt comprehensive, impactful sustainable practices
            and circular economy principles.
          </p>
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
            <div
              key={index}
              className="h-[384px] lg:h-[579px] rounded-tr-none lg:rounded-tr-[20px] rounded-bl-[20px] lg:rounded-bl-none rounded-br-[20px]"
            >
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
