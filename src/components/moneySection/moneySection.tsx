import React from "react";

function MoneySection() {
  return (
    <div className="relative flex flex-row h-[400px]">
      <img
        className="absolute top-0 left-0"
        src="/coins/Bitcoin_1.png"
        alt="sada"
        width={100}
        height={175}
      />
      <img
        className="absolute top-0 right-0"
        src="/coins/Bitcoin_2.png"
        alt="sada"
        width={125}
        height={146}
      />
      <img
        className="absolute bottom-0 right-[202px] rotate-[96deg]"
        src="/coins/Bitcoin_2.png"
        alt="sada"
        width={150}
        height={174}
      />
      <img
        className="absolute bottom-0 left-[23px] -rotate-[84deg]"
        src="/chips/chip4.png"
        alt="sada"
        width={138}
        height={147}
      />
      <img
        className="absolute bottom-[42px] left-[257px] rotate-[33deg]"
        src="/chips/chip1.png"
        alt="sada"
        width={132}
        height={140}
      />
      <img
        className="absolute bottom-[120px] left-[0px] rotate-[116deg]"
        src="/coins/Coin.png"
        alt="coin 1"
        width={64}
        height={61}
      />
      <img
        className="absolute bottom-[161px] left-[194px] rotate-[116deg]"
        src="/coins/Coin.png"
        alt="coin 2"
        width={64}
        height={61}
      />
      <img
        className="absolute bottom-[185px] right-[355px] rotate-[161deg]"
        src="/coins/Coin.png"
        alt="coin 3"
        width={100}
        height={80}
      />
      <img
        className="absolute top-[138px] right-[134px] rotate-[70deg]"
        src="/coins/Coin.png"
        alt="coin 4"
        width={86}
        height={82}
      />
      <img
        className="absolute bottom-[0px] right-[32px] rotate-[90deg]"
        src="/coins/Coin.png"
        alt="coin 5"
        width={76}
        height={73}
      />
    </div>
  );
}

export default MoneySection;
