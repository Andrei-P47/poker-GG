import React from "react";

import { ButtonGradient } from "../index";

function WelcomeBonus() {
  return (
    <div
      className="flex flex-row relative  mt-[-36px] welcomeBonus_background"
    >
      <div className="flex flex-col items-center lalezar px-10 z-20">
        <span className="text-[#FF18CC] text-[110px] leading-[172px] items-center">
          100%
        </span>
        <span className="text-white text-[64px] leading-[100px] mt-[-60px]">
          Welcome bonus
        </span>
        <div className="flex items-center text-white text-[64px] leading-[100px]">
          up to&nbsp;&nbsp;
          <span className="text-[#FF18CC] text-[110px]"> 500$</span>
        </div>
      </div>
      <div className="flex items-center">
        <ButtonGradient
          text="GET YOUR <br/> BONES"
          className="text-[24px]"
          textStyle=""
        />
      </div>
    </div>
  );
}

export default WelcomeBonus;
