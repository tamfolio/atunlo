import React from 'react';

const InfoCard = ({ bgColor, circleColor, iconSrc, amountText, descriptionText }) => {
  return (
    <div className={`w-[100%] lg:w-[364px] h-[300px] lg:h-[371px] rounded-[5px] flex flex-col ${bgColor} items-center justify-start pt-[20px]`}>
      <div className={`w-[80px] h-[80px] ${circleColor} rounded-full flex items-center justify-center mb-[15px] lg:mb-[30px]`}>
        <img src={iconSrc} alt="icon" />
      </div>
      <div className="w-[100%] lg:w-[305px] flex flex-col items-center justify-center px-[10px]">
        <div className='lg:h-[140px] flex items-center justify-center'>
            <p className="text-[32px] lg:text-[56px] font-semibold  mb-[20px] text-center lg:leading-[45px]">{amountText}</p>
        </div>
        <p className="text-[20px] font-light text-center h-[20px]">
          {descriptionText}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
