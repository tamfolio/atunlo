import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col  py-[30px] px-[21px] lg:px-[121px] ">
      <div className="h-[1px] bg-[#E8E8E8] w-[100%] mb-[40px]"></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <img src="/assets/logo.png" alt="" className="mb-[17px]" />
          <p>9 Oriwu Street, Lekki</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[58px]">
          <div>
            <Link to="/policy">Terms of Service</Link>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-[16px] font-medium mb-[24px]">Contact</h1>
            <a
              href={`tel:+2348103415770`}
              className="flex gap-[10px] items-center justify-center mb-[20px]"
            >
              <img src="/assets/phone.png" alt="" />
              <p className="font-normal">+2348103415770</p>
            </a>
            <a
              href="mailto:hello@atunlotech.com"
              className="flex gap-[10px] items-center justify-center"
            >
              <img src="/assets/mail.png" alt="" />
              <p className="font-normal">hello@atunlotech.com</p>
            </a>
          </div>
          <div>
            <h1 className="text-[16px] font-medium mb-[24px]">Social</h1>
            <div className="flex gap-[15px]">
              <a
                href="https://www.instagram.com/atunlosustech"
                className="transition-transform hover:scale-110"
              >
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <FaInstagram size={24} color="#4cc800" />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/atunlotech"
                className="transition-transform hover:scale-110"
              >
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <FaLinkedin size={24} color="#4cc800" />
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@atunlosustech"
                className="transition-transform hover:scale-110"
              >
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <FaTiktok size={24} color="#4cc800" />
                </div>
              </a>

              <a
                href="https://x.com/atunlosustech"
                className="transition-transform hover:scale-110"
              >
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <FaXTwitter size={24} color="#4cc800" />
                </div>
              </a>

              <a
                href="https://web.facebook.com/people/Atunlo-SusTech/61553628310084/"
                className="transition-transform hover:scale-110"
              >
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <FaFacebookF size={24} color="#4cc800" />
                </div>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <p className="text-[#151515] font-medium text-[16px]">
          © Atunlo, {currentYear}.
        </p>
      </div>
    </div>
  );
}

export default Footer;
