import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import { HeroSectionData } from "./Data/HeroSectionData";
import "./index.css";
const Container = () => {
  return (
    <div className="container">
      <HeroSection Content={HeroSectionData.HeroSectionOne} />
      {/* <HeroSection Content={HeroSectionData.HeroSectionTwo} />
      <HeroSection Content={HeroSectionData.HeroSectionThree} />
      <HeroSection Content={HeroSectionData.HeroSectionFour} />
      <HeroSection Content={HeroSectionData.HeroSectionFive} /> */}
    </div>
  );
};

export default Container;
