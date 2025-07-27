import React from "react";
import TeamCard from "./TeamCard";

function MeetTheTeam() {
  return (
    <div className="bg-[#073332] px-[21px] lg:px-[121px] pt-[30px] pb-[50px] flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:gap-[189px] w-[100%]">
        <h1 className="text-[30px] lg:text-[50px] text-white font-medium my-[50px] w-[219px] text-center">
          Meet The Team
        </h1>
        <div className="flex flex-col gap-[40px]">
          <div className="flex gap-[30px] flex-col lg:flex-row">
            <TeamCard
              imageSrc="/assets/Anita_Odiete.png"
              name="Anita Odiete"
              title="Co-Founder and CEO"
            />
            <TeamCard
              imageSrc="/assets/Ayo Ogunlowo.jpg"
              name="Ayo Ogunlowo"
              title="Co-Founder and COO"
            />
            <TeamCard
              imageSrc="/assets/Mr Sam.webp"
              name="Samuel Ogunlowo"
              title="Operations Manager (Ibadan)"
            />
          </div>
          <div className="flex gap-[30px] flex-col lg:flex-row">
            <TeamCard
              imageSrc="/assets/Mr Sodiq.webp"
              name="Adebayo Sodiq"
              title="Operations Manager (Ilorin)"
            />
            <TeamCard
              imageSrc="/assets/Mr Odunayo.webp"
              name="Odunayo Otokiti"
              title="Collection Manager"
            />
            <TeamCard
              imageSrc="/assets/Ms Kira.webp"
              name="Peace Uduak"
              title="Public Relations"
            />
          </div>
          <div className="flex gap-[30px] flex-col lg:flex-row">
            <TeamCard
              imageSrc="/assets/Mr Timi.webp"
              name="Timilehin Omotoso"
              
              
              title="Collection Manager"
            />
            <TeamCard
              imageSrc="/assets/Ms Halimah.webp"
              name="Halimah Oriyomi"
              title="Accounting Executive"
            />
            <TeamCard
              imageSrc="/assets/Mr Louis.webp"
              name="Louis Okhio"
              title="Social Media Marketing Manager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
