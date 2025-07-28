import React from 'react';

const TeamCard = ({ imageSrc, name, title }) => {
  // Check if this is the specific image that needs different handling
  const isSpecialImage = imageSrc.includes('specific-image-name') || name === 'Ayo Ogunlowo';
  
  return (
    <div className='w-[240px] h-[333px]'>
      <img 
        src={imageSrc} 
        alt={name} 
        className={`mb-[14px] w-[220px] h-[230px] rounded-xl ${isSpecialImage ? 'object-cover' : 'object-fill'}`}
      />
      <p className="text-white text-[24px] font-light">{name}</p>
      <p className="text-[#B8B8B8] text-[14px] font-light">{title}</p>
    </div>
  );
};

export default TeamCard;