import React from 'react';

const PartnerCard = ({ imageSrc }) => {
  // Set custom styles if the image is 7up.png
  const customStyles = imageSrc === '/assets/7up.png' 
    ? { width: '100px', height: '100px' }  // Adjust these values as needed
    : imageSrc === '/assets/mycoverai.png' ? { width: '200px', height: '100px' } : { };

  return (
    <div className='w-[220px] h-[170px] rounded-[10px] border border-solid border-[#E8E8E8] flex items-center justify-center'>
      <img src={imageSrc} alt='' style={customStyles} />
    </div>
  );
};

export default PartnerCard;
