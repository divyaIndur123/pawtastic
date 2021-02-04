import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navigations.css";

const Navigations = () => {
  return (
    <div className="Navigations">
      <Router>
        <Link className="nav__link">About us</Link>
        <Link className="nav__link">Review</Link>
        <Link className="nav__link">Services</Link>
        <Link className="nav__link">SignUp</Link>
      </Router>
    </div>
  );
};

export default Navigations;
