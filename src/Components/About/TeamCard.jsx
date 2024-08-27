import React from 'react';

const TeamCard = ({ imageSrc, name, title }) => {
  return (
    <div>
      <img src={imageSrc} alt={name} className='mb-[14px]'/>
      <p className="text-white text-[24px] font-light">{name}</p>
      <p className="text-[#B8B8B8] text-[14px] font-light">{title}</p>
    </div>
  );
};

export default TeamCard;
