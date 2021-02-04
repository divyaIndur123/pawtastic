import React from "react";
import Navigations from "./Navigations/Navigations";
import HeroSection from "../HeroSection/HeroSection";
import SubContainer from "../subContainer/SubContainer";
import Button from "../Button/Button";
import "./Header.css";
import { HeroSectionData } from "../../Data/HeroSectionData";
const Header = () => {
  return (
    <HeroSection Content={HeroSectionData.HeroSectionOne}>
      <SubContainer>
        <div className="header__wrapper">
          <header className="Header">
            {/* <a href="">Logo</a> */}
            <Navigations />
          </header>
          <p className="header__p">
            We care for your furry little loved ones while
          </p>
          <Button name="Schedule a Visit" btnType="btn-primary" />
        </div>
      </SubContainer>
    </HeroSection>
  );
};

export default Header;
