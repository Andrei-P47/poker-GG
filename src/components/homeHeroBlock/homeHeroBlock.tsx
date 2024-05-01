import React from "react";
import { ButtonGradient } from "../index";

function HomeHeroBlock() {
  return (
    <div className="flex flex-row justify-center items-center relative mb-[30px]">
      <img
        src="/Hexagon.png"
        alt="casino neon icon 3"
        className="absolute top-[-50px] left-[-20px] z-0 scale-[140%]"
        width={1021}
        height={1042}
      />
      <img
        src="/man.png"
        alt="casino neon icon 3"
        className="mt-[90px] z-10"
        width={671}
        height={737}
      />
      <img
        src="/Casino%20neon2.png"
        alt="casino neon icon 3"
        className="absolute bottom-[140px] left-[263px] z-20"
        width={199}
        height={183}
      />
      <img
        src="/Pker_GG.png"
        alt="casino neon icon 3"
        className="absolute bottom-[5px] left-[93px] z-20"
        width={571}
        height={152}
      />
      <img
        src="/dice.png"
        alt="dice icon"
        className="absolute bottom-[-22px] right-[-3px] z-20 rotate-[-15deg]"
        width={123}
        height={118}
      />
      <img
        src="/coins/Coin.png"
        alt="dice icon"
        className="absolute bottom-[104px] right-[-16px] z-20 rotate-[90deg]"
        width={76}
        height={73}
      />
      <img
        src="/chips/chip_3.png"
        alt="dice icon"
        className="absolute bottom-[220px] right-[-10px] z-0 rotate-[37deg]"
        width={110}
        height={107}
      />
      <img
        src="/chips/chip_1.png"
        alt="chips chip 1 icon"
        className="absolute bottom-[330px] right-[-26px]"
        width={79}
        height={78}
      />
      <img
        src="/coins/Bitcoin_2.png"
        alt="Bitcoin 2 icon"
        className="absolute bottom-[433px] right-0 rotate-[4deg]"
        width={114}
        height={132}
      />
      <img
        src="/chips/chip2.png"
        alt="chips 2 icon"
        className="absolute bottom-[580px] right-[-25px] rotate-[74deg]"
        width={107}
        height={114}
      />
      <img
        src="/coins/Coin.png"
        alt="coins coin 2 icon"
        className="absolute bottom-[575px] right-[85px] rotate-[90deg]"
        width={69}
        height={66}
      />
      {/*    Left side coins/chips*/}
      <img
        src="/coins/Coin.png"
        alt="coins coin 2 icon"
        className="absolute bottom-[5px] left-[-32px] rotate-[161deg] z-20"
        width={103}
        height={98}
      />
      <img
        src="/chips/chip_4.png"
        alt="coins coin 2 icon"
        className="absolute bottom-[200px] left-[-32px] rotate-[65deg] z-20"
        width={103}
        height={95}
      />
      <img
        src="/chips/chip_2.png"
        alt="coins coin 2 icon"
        className="absolute bottom-[385px] left-[10px] z-20"
        width={100}
        height={91}
      />
      <img
        src="/coins/Bitcoin_1.png"
        alt="coins coin 2 icon"
        className="absolute bottom-[336px] left-[-57px] z-20"
        width={69}
        height={121}
      />
      <img
        src="/coins/Bitcoin_2.png"
        alt="coins coin 2 icon"
        className="absolute bottom-[525px] left-[10px] rotate-[96deg] z-20"
        width={114}
        height={132}
      />
      <img
        src="/chips/chip_1.png"
        alt="coins coin 2 icon"
        className="absolute bottom-[647px] left-[-27px] z-20"
        width={93}
        height={92}
      />
      <img
        src="/coins/Coin.png"
        alt="coins coin 2 icon"
        className="absolute bottom-[475px] left-[-17px] rotate-[165deg] z-20"
        width={65}
        height={62}
      />

      <ButtonGradient
        text="JOIN"
        className="absolute top-[25px] right-[-21px] text-[56px]"
        textStyle="p-2.5"
      />
    </div>
  );
}

export default HomeHeroBlock;
