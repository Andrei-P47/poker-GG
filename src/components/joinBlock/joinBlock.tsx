import React from "react";
import { ButtonGradient } from "../index";

function JoinBlock() {
  return (
    <div className="flex flex-row justify-center items-center relative">
      <img
        className="absolute bottom-[-1px] left-[81px] rotate-[65deg]"
        src="/chips/chip_4.png"
        alt="join2"
        width={103}
        height={95}
      />
      {/*<img*/}
      {/*  className="ml-[9px] mr-[43px]"*/}
      {/*  src="/join2.png"*/}
      {/*  alt="join2"*/}
      {/*  width={274}*/}
      {/*  height={114}*/}
      {/*/>*/}
      <ButtonGradient text="JOIN" className="text-[56px]" textStyle="p-2.5" />
      <img
        className="absolute bottom-[-8px] right-[137px] rotate-[105deg]"
        src="/chips/chip_2.png"
        alt="join2"
        width={84}
        height={76}
      />
    </div>
  );
}

export default JoinBlock;
