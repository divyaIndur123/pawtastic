import React from "react";
import "./SubContainer.css";

const SubContainer = (props) => {
  return <div className="subcontainer">{props.children}</div>;
};

export default SubContainer;
