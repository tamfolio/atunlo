import React from 'react';

const TeamCard = ({ imageSrc, name, title }) => {
  return (
    <div className='w-[240px] h-[333px]'>
      <img src={imageSrc} alt={name} className='mb-[14px] w-[220px] h-[230px] rounded-xl object-fill'/>
      <p className="text-white text-[24px] font-light">{name}</p>
      <p className="text-[#B8B8B8] text-[14px] font-light">{title}</p>
    </div>
  );
};

export default TeamCard;
