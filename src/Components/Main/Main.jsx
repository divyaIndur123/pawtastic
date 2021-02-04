import ContainerSection from "../ContainerSection/ContainerSection";
import SubContainer from "../subContainer/SubContainer";
import Button from "../Button/Button";
import React from "react";
import "./Main.css";
import cat from "../../images/cat-walk_01-image.png";
import dog from "../../images/dog_01-image.png";
import pet from "../../images/pet_01_01-image.jpg";
import cat2 from "../../images/Signup---12@2x_01-image.png";

const Main = () => {
  return (
    <ContainerSection>
      <SubContainer>
        <div className="main__wrapper">
          <h1>Expert Care for your Furry, Feathery or Scaley friend </h1>
          <p className="main__p">
            We care for your furry little loved ones while We care for your
            furry little loved ones while We care for your furry little loved
            ones while
          </p>
          <Button name="Schedule a Visit" btnType="btn-secondary" />
        </div>
      </SubContainer>
      <SubContainer>
        <div className="main__wrapperleft">
          <div className="main__img-wrapper">
            <img src={cat} alt="" className="main__img" />
            <img src={dog} alt="" className="main__img" />
          </div>
          {/* <div className="main__img-wrapper">
            
          </div> */}
          <div className="main__img-wrapper">
            <img src={dog} alt="" className="main__img" />
            <img src={cat2} alt="" className="main__img" />
          </div>
          {/* <div className="main__img-wrapper">
            
          </div> */}
        </div>
      </SubContainer>
    </ContainerSection>
  );
};

export default Main;
