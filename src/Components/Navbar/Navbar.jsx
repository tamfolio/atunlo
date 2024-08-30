import React from 'react'

function Navbar() {
  return (
    <div className='px-[27px] py-[30px] lg:px-[121px] lg:py-[35px] flex items-center justify-between'>
        <img src="/assets/logo.png" alt="" />
        <a href="mailto:operations@atunlotech.com" className='w-[144px] h-[50px] bg-green rounded-[40px] text-white text-[16px] flex items-center justify-center gap-[5px]'>
            <div className='w-[5px] h-[5px] rounded-full bg-white'></div>
            Contact
        </a>
    </div>
  )
}

export default Navbar
