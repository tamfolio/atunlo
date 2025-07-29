import React from "react";

// InfoCard component with proper alignment
function InfoCard({ bgColor, circleColor, iconSrc, amountText, descriptionText }) {
  return (
    <div className={`${bgColor} rounded-[16px] p-[20px] w-full max-w-[280px] h-[280px] flex flex-col justify-between`}>
      {/* Icon section - fixed height */}
      <div className="flex justify-center mb-[16px] h-[60px] items-center">
        <div className={`${circleColor} w-[60px] h-[60px] rounded-full flex items-center justify-center`}>
          <img src={iconSrc} alt="" className="w-[24px] h-[24px]" />
        </div>
      </div>
      
      {/* Amount section - fixed height */}
      <div className="text-center h-[40px] flex items-center justify-center mb-[8px]">
        <h3 className="text-[24px] lg:text-[28px] font-bold text-gray-800 leading-tight">
          {amountText}
        </h3>
      </div>
      
      {/* Description section - fixed height */}
      <div className="text-center h-[48px] flex items-start justify-center">
        <p className="text-[14px] lg:text-[16px] text-gray-600 leading-tight">
          {descriptionText}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
