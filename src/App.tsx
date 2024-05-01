import React from "react";
import {
  JoinBlock,
  MoneySection,
  BottonSection,
  WelcomeBonus,
  CasinoNeon,
  NeonButtonGroup,
  HomeHeroBlock,
} from "./components/index";

function App() {
  return (
    <div className="container mx-auto max-w-[771px]">
      <HomeHeroBlock />
      <NeonButtonGroup />
      <CasinoNeon />
      <WelcomeBonus />
      <MoneySection />
      <BottonSection />
      <JoinBlock />
    </div>
  );
}

export default App;
