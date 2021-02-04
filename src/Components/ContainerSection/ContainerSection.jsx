import React from "react";
import "./ContainerSection.css";

const ContainerSection = (props) => {
  return <div className="container-section">{props.children}</div>;
};

export default ContainerSection;
