import React from 'react';

const PartnerCard = ({ imageSrc }) => {
  // Set custom styles for specific images
  const customStyles = imageSrc === '/assets/7up.png' 
    ? { width: '100px', height: '100px' }
    : imageSrc === '/assets/mycoverai.png' 
    ? { width: '200px', height: '100px' } 
    : imageSrc === '/assets/boi.web' 
    ? { width: '150px', height: '50px' }  // Fixed typo: was '15x 0px'
    : imageSrc === '/assets/POWA.jpeg' 
    ? { width: '120px', height: '120px' }  // Adjust for POWA logo
    : imageSrc === '/assets/pcs school logo.jpg' 
    ? { width: '100px', height: '100px' }  // Adjust for Police Children School logo
    : {};

  return (
    <div className='w-[220px] h-[170px] rounded-[10px] border border-solid border-[#E8E8E8] flex items-center justify-center'>
      <img src={imageSrc} alt='' style={customStyles} className=''/>
    </div>
  );
};

export default PartnerCard;