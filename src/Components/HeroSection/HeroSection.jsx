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
      Divya Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim totam
      facilis deserunt illo. Veniam repellat cumque illum velit facere eos
      labore aut earum tenetur sit! Nihil quo ipsam itaque ad?
    </div>
  );
};
export default HeroSection;
