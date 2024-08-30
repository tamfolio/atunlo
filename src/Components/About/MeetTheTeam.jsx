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
              imageSrc="/assets/Anita.png"
              name="Anita Odiete"
              title="Co-Founder and CEO"
            />
            <TeamCard
              imageSrc="/assets/Ayo.png"
              name="Ayo Ogunlowo"
              title="Co-Founder and COO"
            />
            <TeamCard
              imageSrc="/assets/Samuel.png"
              name="Samuel Ogunlowo"
              title="Operations Manager"
            />
          </div>
          <div className="flex gap-[30px] flex-col lg:flex-row">
            <TeamCard
              imageSrc="/assets/Seun.png"
              name="Seun Komolafe"
              title="Collection Manager"
            />
            <TeamCard
              imageSrc="/assets/Odunayo.png"
              name="Odunayo Otokiti"
              title="Collection Manager"
            />
            <TeamCard
              imageSrc="/assets/Peace.png"
              name="Peace Uduak"
              title="Public Relations"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
