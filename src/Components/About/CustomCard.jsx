import React from 'react';

const CustomCard = ({ imageSrc, title, description }) => {
  return (
    <div className="w-[100%] lg:w-[376px] h-[348px] bg-custom-gradient rounded-[30px] pt-[40px] px-[10px]">
      <img src={imageSrc} alt={title} className="mb-[42px]" />
      <p className="text-white font-medium text-[30px] mb-[14px]">{title}</p>
      <p className="text-[16px] text-white font-light lg:w-[325px] w-[100%]">{description}</p>
    </div>
  );
};

export default CustomCard;
