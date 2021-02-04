import React from "react";
import "./HeroSection.css";

const HeroSection = (props) => {
  console.log(props.Content);
  const { backGroundColoDark } = props.Content;
  return (
    <div
      className={
        "hero-section " +
        (backGroundColoDark
          ? "hero-section__div--dark"
          : "hero-section__div--light")
      }
    >
      {props.children}
    </div>
  );
};
export default HeroSection;
