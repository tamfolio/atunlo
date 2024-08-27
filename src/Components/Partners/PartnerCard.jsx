import React from 'react';

const PartnerCard = ({ imageSrc }) => {
  return (
    <div className='w-[220px] h-[170px] rounded-[10px] border border-solid border-[#E8E8E8] flex items-center justify-center'>
      <img src={imageSrc} alt='' />
    </div>
  );
};

export default PartnerCard;
