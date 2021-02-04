import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./index.css";
const Builder = (props) => {
  return (
    <div className="container">
      <Header>{props.children}</Header>
      <Main />
    </div>
  );
};

export default Builder;
