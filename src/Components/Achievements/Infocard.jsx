import React from 'react';

const InfoCard = ({ bgColor, circleColor, iconSrc, amountText, descriptionText }) => {
  return (
    <div className={`w-full max-w-[280px] h-[280px] sm:h-[320px] lg:h-[341px] rounded-[5px] flex flex-col ${bgColor} items-center justify-start pt-[20px] mx-auto`}>
      <div className={`w-[80px] h-[80px] ${circleColor} rounded-full flex items-center justify-center mb-[15px]`}>
        <img src={iconSrc} alt="icon" className="w-[40px] h-[40px] object-contain" />
      </div>
      <div className="w-full max-w-[240px] flex flex-col items-center justify-center px-[15px] flex-1">
        <div className='flex-1 flex items-center justify-center min-h-[120px]'>
          <p className="text-[24px] sm:text-[32px] lg:text-[42px] font-semibold text-center leading-tight">{amountText}</p>
        </div>
        <div className="pb-[10px]">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-light text-center leading-snug">
            {descriptionText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
