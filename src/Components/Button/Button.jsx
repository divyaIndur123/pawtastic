import React from "react";
import "./Button.css";
const Button = (props) => {
  return <button className={"btn " + props.btnType}>{props.name}</button>;
};

export default Button;
